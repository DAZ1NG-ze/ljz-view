/* 罗锦泽 — site behaviour */
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var root = document.documentElement;
  var noMotion = reduce || /[?&]motion=off/.test(location.search);
  if (noMotion) root.classList.add("no-motion");

  /* ---------- header ---------- */
  var head = document.querySelector(".site-head");
  if (head) {
    var onScroll = function () {
      if (window.scrollY > 24) head.classList.add("is-stuck");
      else head.classList.remove("is-stuck");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- mobile nav ---------- */
  var burger = document.querySelector(".burger");
  var nav = document.querySelector(".nav");
  if (burger && nav) {
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      }
    });
  }

  /* ---------- appearance panel ---------- */
  var toggle = document.getElementById("themeToggle");
  var panel = document.getElementById("themePanel");
  if (toggle && panel) {
    var KEY = { theme: "pj-theme", size: "pj-size", measure: "pj-measure" };
    var DEF = { theme: "light", size: "m", measure: "default" };

    var sync = function () {
      panel.querySelectorAll(".seg").forEach(function (seg) {
        var group = seg.getAttribute("data-group");
        seg.querySelectorAll("button").forEach(function (b) {
          var on = root.getAttribute("data-" + group) === b.getAttribute("data-value");
          b.setAttribute("aria-pressed", on ? "true" : "false");
        });
      });
    };

    var apply = function (group, value) {
      root.setAttribute("data-" + group, value);
      try { localStorage.setItem(KEY[group], value); } catch (e) {}
      if (group === "theme") {
        var meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute("content", value === "dark" ? "#0b0b0c" : "#f2f0ea");
      }
      sync();
    };

    // ensure defaults exist on the element even if the boot script failed
    Object.keys(DEF).forEach(function (g) {
      if (!root.getAttribute("data-" + g)) root.setAttribute("data-" + g, DEF[g]);
    });
    sync();

    toggle.addEventListener("click", function () {
      var open = panel.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    panel.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-value]");
      if (!b) return;
      apply(b.parentElement.getAttribute("data-group"), b.getAttribute("data-value"));
    });

    document.addEventListener("click", function (e) {
      if (!panel.contains(e.target) && !toggle.contains(e.target)) {
        panel.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        panel.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- reveal ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !noMotion) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add("is-in");
            io.unobserve(en.target);
          }
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.05 }
    );
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* ---------- hover preview for video cards ---------- */
  if (!noMotion && window.matchMedia("(hover: hover)").matches) {
    document.querySelectorAll("[data-preview]").forEach(function (card) {
      var vid = card.querySelector("video[data-src]");
      if (!vid) return;
      var started = false;
      card.addEventListener("pointerenter", function () {
        if (!started) {
          vid.src = vid.getAttribute("data-src");
          started = true;
        }
        var p = vid.play();
        if (p && p.catch) p.catch(function () {});
      });
      card.addEventListener("pointerleave", function () { vid.pause(); });
    });
  }

  /* ---------- row hover peek ---------- */
  var peek = document.getElementById("peek");
  var rows = document.querySelectorAll(".row[data-peek]");
  if (peek && rows.length && window.matchMedia("(hover: hover)").matches) {
    var peekImg = peek.querySelector("img");
    rows.forEach(function (r) {
      r.addEventListener("pointerenter", function () {
        var src = r.getAttribute("data-peek");
        if (peekImg.getAttribute("src") !== src) peekImg.src = src;
        peek.classList.add("is-on");
      });
    });
    var rowsBox = document.querySelector(".rows");
    if (rowsBox) {
      rowsBox.addEventListener("pointerleave", function () { peek.classList.remove("is-on"); });
    }
  }

  /* ---------- chapters ---------- */
  var player = document.getElementById("player");
  var chips = document.querySelectorAll(".chip[data-src]");
  if (chips.length && player) {
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) { c.setAttribute("aria-pressed", "false"); });
        chip.setAttribute("aria-pressed", "true");
        var nextPoster = chip.getAttribute("data-poster") || "";
        player.setAttribute("poster", nextPoster);
        player.src = chip.getAttribute("data-src");
        player.load();

        var box = player.closest(".work-media");
        var still = box && box.querySelector(".work-poster");
        if (still && nextPoster && !(box && box.classList.contains("is-playing"))) {
          still.src = nextPoster;
        }
        if (player.hasAttribute("controls")) {
          var p = player.play();
          if (p && p.catch) p.catch(function () {});
        }
      });
    });
  }

  /* ---------- inline play ---------- */
  var playBtn = document.querySelector(".work-play");
  if (playBtn && player) {
    playBtn.addEventListener("click", function () {
      var box = playBtn.closest(".work-media");
      if (box) box.classList.add("is-playing");
      playBtn.remove();
      player.setAttribute("controls", "controls");
      var p = player.play();
      if (p && p.catch) p.catch(function () {});
    });
  }

  /* ---------- lightbox ---------- */
  var zoomables = document.querySelectorAll("[data-zoom]");
  if (zoomables.length) {
    var box = document.createElement("div");
    box.className = "lightbox";
    box.innerHTML = '<button class="lightbox__close" aria-label="关闭">ESC</button><img alt="">';
    document.body.appendChild(box);
    var boxImg = box.querySelector("img");

    var close = function () {
      box.classList.remove("is-open");
      document.body.style.overflow = "";
    };

    zoomables.forEach(function (img) {
      img.addEventListener("click", function () {
        boxImg.src = img.getAttribute("data-full") || img.currentSrc || img.src;
        box.classList.add("is-open");
        document.body.style.overflow = "hidden";
      });
    });

    box.addEventListener("click", function (e) {
      if (e.target === box || e.target.classList.contains("lightbox__close")) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  }
})();
