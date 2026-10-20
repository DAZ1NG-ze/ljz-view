/* AI lab — ASCII particle assembly + viscous frame dial (Canvas 2D, no WebGL) */
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var root = document.documentElement;
  var stillMode = reduce || /[?&](motion=off|ascii=still)/.test(location.search);
  var asciiStill = /[?&]ascii=still/.test(location.search);
  var css = function (name) {
    return getComputedStyle(root).getPropertyValue(name).trim() || "#111";
  };

  /* =========================================================
     1. ASCII particle assembly
     ========================================================= */
  var canvas = document.getElementById("asciiCanvas");
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
    var src = canvas.getAttribute("data-src");
    var stat = document.getElementById("labStat");

    var particles = [];
    var W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    var bg = null;
    var cell = 9;
    var ramp = " .:-=+*#%@";
    var mouse = { x: -9999, y: -9999, active: false };
    var start = 0;
    var raf = null;
    var settled = false;
    var settleUntil = 0;

    function measure() {
      var box = canvas.getBoundingClientRect();
      W = Math.max(320, Math.round(box.width));
      H = Math.round((W * 9) / 21);
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      canvas.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildBg();
    }

    // faint screen grid so the panel never reads as empty
    function buildBg() {
      bg = document.createElement("canvas");
      bg.width = Math.round(W * dpr);
      bg.height = Math.round(H * dpr);
      var b = bg.getContext("2d");
      b.setTransform(dpr, 0, 0, dpr, 0, 0);
      b.fillStyle = "rgba(236,231,221,0.14)";
      for (var y = 9; y < H; y += 16) {
        for (var x = 9; x < W; x += 16) {
          b.fillRect(x, y, 1.6, 1.6);
        }
      }
    }

    function build(img) {
      var cols = Math.floor(W / cell);
      var rows = Math.floor(H / cell);
      var off = document.createElement("canvas");
      off.width = cols;
      off.height = rows;
      var octx = off.getContext("2d");
      // cover-fit the image into the glyph grid
      var ir = img.width / img.height;
      var gr = cols / rows;
      var sw, sh, sx, sy;
      if (ir > gr) { sh = img.height; sw = sh * gr; sx = (img.width - sw) / 2; sy = 0; }
      else { sw = img.width; sh = sw / gr; sx = 0; sy = (img.height - sh) / 2; }
      octx.drawImage(img, sx, sy, sw, sh, 0, 0, cols, rows);
      var data = octx.getImageData(0, 0, cols, rows).data;

      particles = [];
      var cx = cols / 2, cy = rows / 2;
      for (var y = 0; y < rows; y++) {
        for (var x = 0; x < cols; x++) {
          var i = (y * cols + x) * 4;
          var r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3] / 255;
          var lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 * a;
          lum = Math.pow(lum, 0.75);
          if (lum < 0.055) continue;
          var ch = ramp[Math.min(ramp.length - 1, Math.floor(lum * ramp.length))];
          if (ch === " ") continue;
          var tx = x * cell + cell / 2;
          var ty = y * cell + cell / 2;

          // four-fold mirrored diamond origin, far outside the frame
          var dx = (x - cx) * cell, dy = (y - cy) * cell;
          var mx = Math.abs(dx), my = Math.abs(dy);
          var sx0 = cx * cell + Math.sign(dx || 1) * (mx + my) * 2.6 * (0.4 + lum);
          var sy0 = cy * cell + Math.sign(dy || 1) * (mx + my) * 1.7 * (0.4 + lum);

          particles.push({
            tx: tx, ty: ty,
            sx: sx0, sy: sy0,
            ch: ch,
            lum: lum,
            d: Math.hypot(dx, dy) / (Math.max(cols, rows) * cell * 0.5),
            ox: 0, oy: 0, vx: 0, vy: 0,
            ph: Math.random() * Math.PI * 2
          });
        }
      }
      if (particles.length > 8200) particles.length = 8200;
      if (stat) stat.textContent = particles.length + " GLYPHS";
    }

    function draw(t) {
      var elapsed = (t - start) / 1000;
      var ink = "#e8e3d8";
      var accent = "#c8793f";
      ctx.clearRect(0, 0, W, H);
      if (bg) ctx.drawImage(bg, 0, 0, W, H);
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.font = cell + "px 'Cascadia Mono', Consolas, monospace";

      var allSettled = true;
      for (var k = 0; k < particles.length; k++) {
        var p = particles[k];
        var local = Math.max(0, Math.min(1, (elapsed - p.d * 0.55) / 1.5));
        var e = 1 - Math.pow(1 - local, 3);

        var x = p.sx + (p.tx - p.sx) * e;
        var y = p.sy + (p.ty - p.sy) * e;

        if (local >= 1) {
          // spring back from the cursor
          var dx = x - mouse.x, dy = y - mouse.y;
          var dist = Math.hypot(dx, dy);
          if (mouse.active && dist < 110) {
            var f = (1 - dist / 110) * 26;
            p.vx += (dx / (dist || 1)) * f * 0.35;
            p.vy += (dy / (dist || 1)) * f * 0.35;
          }
          p.vx += (0 - p.ox) * 0.08;
          p.vy += (0 - p.oy) * 0.08;
          p.vx *= 0.86;
          p.vy *= 0.86;
          p.ox += p.vx;
          p.oy += p.vy;
          x += p.ox;
          y += p.oy;
        } else {
          allSettled = false;
        }

        ctx.fillStyle = p.lum > 0.8 ? accent : ink;
        ctx.globalAlpha = Math.min(1, 0.18 + p.lum * 1.25);
        ctx.fillText(p.ch, x, y);
      }
      ctx.globalAlpha = 1;

      var busy = !allSettled || mouse.active || performance.now() < settleUntil;
      if (busy) raf = requestAnimationFrame(draw);
      else { settled = true; raf = null; }
    }

    function kick() {
      settleUntil = performance.now() + 900;
      if (!raf) raf = requestAnimationFrame(draw);
    }

    function startAnim() {
      measure();
      var img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = function () {
        build(img);
        if (stillMode) {
          start = performance.now() - 100000;
          draw(performance.now());
          return;
        }
        start = performance.now();
        settled = false;
        raf = requestAnimationFrame(draw);
      };
      img.onerror = function () { canvas.style.display = "none"; };
      img.src = src;
    }

    canvas.addEventListener("pointermove", function (e) {
      var r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      mouse.active = true;
      if (settled) { settled = false; kick(); }
    });
    canvas.addEventListener("pointerleave", function () {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
      kick();
    });

    var rt;
    window.addEventListener("resize", function () {
      clearTimeout(rt);
      rt = setTimeout(function () { mouse.active = false; startAnim(); }, 220);
    });

    if (reduce && !asciiStill) {
      measure();
      var im = new Image();
      im.onload = function () {
        var ir = im.width / im.height, gr = W / H;
        var sw, sh, sx, sy;
        if (ir > gr) { sh = im.height; sw = sh * gr; sx = (im.width - sw) / 2; sy = 0; }
        else { sw = im.width; sh = sw / gr; sx = 0; sy = (im.height - sh) / 2; }
        ctx.drawImage(im, sx, sy, sw, sh, 0, 0, W, H);
      };
      im.src = src;
    } else {
      startAnim();
    }
  }

  /* =========================================================
     2. viscous frame dial
     ========================================================= */
  var dial = document.getElementById("dial");
  if (dial) {
    var stage = document.getElementById("dialStage");
    var nodes = [].slice.call(stage.querySelectorAll(".dial__item"));
    var noEl = document.getElementById("dialNo");
    var nameEl = document.getElementById("dialName");
    var typeEl = document.getElementById("dialType");
    var frames = [];
    try { frames = JSON.parse(dial.getAttribute("data-frames") || "[]"); } catch (e) {}

    var N = nodes.length;
    var pos = 0, target = 0, vel = 0;
    var current = 0;
    var dragging = false, dragX = 0, dragTarget = 0, moved = false;
    var step = 0.36;
    var radius = 900;

    function sizeStage() {
      var w = stage.getBoundingClientRect().width || 1200;
      radius = Math.max(420, w * 0.62);
      step = Math.min(0.5, Math.max(0.26, 1.55 / Math.max(6, N) * 6));
    }

    function layout() {
      var w = stage.getBoundingClientRect().width || 1200;
      for (var i = 0; i < N; i++) {
        var a = (i - pos) * step;
        var x = Math.sin(a) * radius;
        var z = Math.cos(a);
        if (z < -0.2) z = -0.2;
        var scale = 0.52 + 0.48 * ((z + 1) / 2);
        var op = Math.max(0, Math.min(1, 0.18 + 0.82 * Math.pow((z + 1) / 2, 1.4)));
        var skew = Math.max(-9, Math.min(9, vel * 26));
        var el = nodes[i];
        el.style.transform =
          "translate(-50%,-50%) translateX(" + x.toFixed(1) + "px) scale(" + scale.toFixed(3) + ") skewX(" + skew.toFixed(2) + "deg)";
        el.style.opacity = op.toFixed(3);
        el.style.zIndex = String(100 + Math.round(z * 50));
        el.style.filter = z > 0.55 ? "none" : "blur(" + ((0.55 - z) * 3.2).toFixed(2) + "px)";
      }
    }

    function readout(i) {
      if (i === current || !frames[i]) return;
      current = i;
      var f = frames[i];
      [noEl, nameEl, typeEl].forEach(function (el) { if (el) el.classList.add("is-switching"); });
      setTimeout(function () {
        if (!frames[i]) return;
        if (noEl) noEl.textContent = ("0" + (i + 1)).slice(-2);
        if (nameEl) nameEl.innerHTML = f.titleCn + "<em>" + f.titleEn + "</em>";
        if (typeEl) typeEl.textContent = f.type;
        [noEl, nameEl, typeEl].forEach(function (el) { if (el) el.classList.remove("is-switching"); });
      }, 160);
    }

    function loop() {
      var prev = pos;
      pos += (target - pos) * 0.12;
      vel = pos - prev;
      if (Math.abs(target - pos) < 0.0006) pos = target;
      layout();
      var idx = Math.round(pos);
      if (idx !== current) readout(idx);
      requestAnimationFrame(loop);
    }

    function clamp(v) { return Math.max(0, Math.min(N - 1, v)); }

    dial.addEventListener("wheel", function (e) {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      e.preventDefault();
      target = clamp(target + (e.deltaY / 100) * 0.55);
    }, { passive: false });

    dial.addEventListener("pointerdown", function (e) {
      dragging = true;
      moved = false;
      dragX = e.clientX;
      dragTarget = target;
      dial.classList.add("is-dragging");
      dial.setPointerCapture(e.pointerId);
    });

    dial.addEventListener("pointermove", function (e) {
      if (!dragging) return;
      var dx = e.clientX - dragX;
      if (Math.abs(dx) > 3) moved = true;
      target = clamp(dragTarget - dx / 190);
    });

    function endDrag() {
      if (!dragging) return;
      dragging = false;
      dial.classList.remove("is-dragging");
      target = clamp(Math.round(target));
      var node = document.activeElement;
      if (node && node.blur) node.blur();
    }

    dial.addEventListener("pointerup", endDrag);
    dial.addEventListener("pointercancel", endDrag);

    nodes.forEach(function (el, i) {
      el.addEventListener("click", function () {
        if (moved) return;
        target = i;
      });
    });

    dial.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { e.preventDefault(); target = clamp(Math.round(target) + 1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); target = clamp(Math.round(target) - 1); }
    });

    var rt2;
    window.addEventListener("resize", function () {
      clearTimeout(rt2);
      rt2 = setTimeout(function () { sizeStage(); layout(); }, 150);
    });

    sizeStage();
    layout();
    requestAnimationFrame(loop);
  }
})();
