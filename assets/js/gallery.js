(()=>{var _w=Object.create;var ox=Object.defineProperty;var vw=Object.getOwnPropertyDescriptor;var yw=Object.getOwnPropertyNames;var xw=Object.getPrototypeOf,Sw=Object.prototype.hasOwnProperty;var Ns=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var bw=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of yw(t))!Sw.call(e,s)&&s!==n&&ox(e,s,{get:()=>t[s],enumerable:!(i=vw(t,s))||i.enumerable});return e};var $r=(e,t,n)=>(n=e!=null?_w(xw(e)):{},bw(t||!e||!e.__esModule?ox(n,"default",{value:e,enumerable:!0}):n,e));var vx=Ns(Gt=>{"use strict";var t0=Symbol.for("react.transitional.element"),Mw=Symbol.for("react.portal"),Tw=Symbol.for("react.fragment"),Ew=Symbol.for("react.strict_mode"),Aw=Symbol.for("react.profiler"),ww=Symbol.for("react.consumer"),Cw=Symbol.for("react.context"),Rw=Symbol.for("react.forward_ref"),Dw=Symbol.for("react.suspense"),Uw=Symbol.for("react.memo"),fx=Symbol.for("react.lazy"),Nw=Symbol.for("react.activity"),lx=Symbol.iterator;function Lw(e){return e===null||typeof e!="object"?null:(e=lx&&e[lx]||e["@@iterator"],typeof e=="function"?e:null)}var dx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},px=Object.assign,mx={};function tl(e,t,n){this.props=e,this.context=t,this.refs=mx,this.updater=n||dx}tl.prototype.isReactComponent={};tl.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};tl.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function gx(){}gx.prototype=tl.prototype;function e0(e,t,n){this.props=e,this.context=t,this.refs=mx,this.updater=n||dx}var n0=e0.prototype=new gx;n0.constructor=e0;px(n0,tl.prototype);n0.isPureReactComponent=!0;var cx=Array.isArray;function $m(){}var Ne={H:null,A:null,T:null,S:null},_x=Object.prototype.hasOwnProperty;function i0(e,t,n){var i=n.ref;return{$$typeof:t0,type:e,key:t,ref:i!==void 0?i:null,props:n}}function Pw(e,t){return i0(e.type,t,e.props)}function s0(e){return typeof e=="object"&&e!==null&&e.$$typeof===t0}function Ow(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ux=/\/+/g;function Qm(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ow(""+e.key):t.toString(36)}function Iw(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then($m,$m):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function $o(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case t0:case Mw:r=!0;break;case fx:return r=e._init,$o(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+Qm(e,0):i,cx(s)?(n="",r!=null&&(n=r.replace(ux,"$&/")+"/"),$o(s,t,n,"",function(c){return c})):s!=null&&(s0(s)&&(s=Pw(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(ux,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(cx(e))for(var l=0;l<e.length;l++)i=e[l],a=o+Qm(i,l),r+=$o(i,t,n,a,s);else if(l=Lw(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+Qm(i,l++),r+=$o(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return $o(Iw(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function jh(e,t,n){if(e==null)return e;var i=[],s=0;return $o(e,i,"","",function(a){return t.call(n,a,s++)}),i}function Bw(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var hx=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Fw={map:jh,forEach:function(e,t,n){jh(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return jh(e,function(){t++}),t},toArray:function(e){return jh(e,function(t){return t})||[]},only:function(e){if(!s0(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Gt.Activity=Nw;Gt.Children=Fw;Gt.Component=tl;Gt.Fragment=Tw;Gt.Profiler=Aw;Gt.PureComponent=e0;Gt.StrictMode=Ew;Gt.Suspense=Dw;Gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ne;Gt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ne.H.useMemoCache(e)}};Gt.cache=function(e){return function(){return e.apply(null,arguments)}};Gt.cacheSignal=function(){return null};Gt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=px({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!_x.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return i0(e.type,s,i)};Gt.createContext=function(e){return e={$$typeof:Cw,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:ww,_context:e},e};Gt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)_x.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return i0(e,a,s)};Gt.createRef=function(){return{current:null}};Gt.forwardRef=function(e){return{$$typeof:Rw,render:e}};Gt.isValidElement=s0;Gt.lazy=function(e){return{$$typeof:fx,_payload:{_status:-1,_result:e},_init:Bw}};Gt.memo=function(e,t){return{$$typeof:Uw,type:e,compare:t===void 0?null:t}};Gt.startTransition=function(e){var t=Ne.T,n={};Ne.T=n;try{var i=e(),s=Ne.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then($m,hx)}catch(a){hx(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),Ne.T=t}};Gt.unstable_useCacheRefresh=function(){return Ne.H.useCacheRefresh()};Gt.use=function(e){return Ne.H.use(e)};Gt.useActionState=function(e,t,n){return Ne.H.useActionState(e,t,n)};Gt.useCallback=function(e,t){return Ne.H.useCallback(e,t)};Gt.useContext=function(e){return Ne.H.useContext(e)};Gt.useDebugValue=function(){};Gt.useDeferredValue=function(e,t){return Ne.H.useDeferredValue(e,t)};Gt.useEffect=function(e,t){return Ne.H.useEffect(e,t)};Gt.useEffectEvent=function(e){return Ne.H.useEffectEvent(e)};Gt.useId=function(){return Ne.H.useId()};Gt.useImperativeHandle=function(e,t,n){return Ne.H.useImperativeHandle(e,t,n)};Gt.useInsertionEffect=function(e,t){return Ne.H.useInsertionEffect(e,t)};Gt.useLayoutEffect=function(e,t){return Ne.H.useLayoutEffect(e,t)};Gt.useMemo=function(e,t){return Ne.H.useMemo(e,t)};Gt.useOptimistic=function(e,t){return Ne.H.useOptimistic(e,t)};Gt.useReducer=function(e,t,n){return Ne.H.useReducer(e,t,n)};Gt.useRef=function(e){return Ne.H.useRef(e)};Gt.useState=function(e){return Ne.H.useState(e)};Gt.useSyncExternalStore=function(e,t,n){return Ne.H.useSyncExternalStore(e,t,n)};Gt.useTransition=function(){return Ne.H.useTransition()};Gt.version="19.2.0"});var Gc=Ns((WO,yx)=>{"use strict";yx.exports=vx()});var Rx=Ns(ze=>{"use strict";function l0(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<Qh(s,t))e[i]=t,e[n]=s,n=i;else break t}}function Ls(e){return e.length===0?null:e[0]}function tf(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>Qh(o,n))l<s&&0>Qh(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>Qh(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function Qh(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}ze.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(xx=performance,ze.unstable_now=function(){return xx.now()}):(a0=Date,Sx=a0.now(),ze.unstable_now=function(){return a0.now()-Sx});var xx,a0,Sx,ca=[],Ja=[],zw=1,Xi=null,Vn=3,c0=!1,kc=!1,Xc=!1,u0=!1,Tx=typeof setTimeout=="function"?setTimeout:null,Ex=typeof clearTimeout=="function"?clearTimeout:null,bx=typeof setImmediate<"u"?setImmediate:null;function $h(e){for(var t=Ls(Ja);t!==null;){if(t.callback===null)tf(Ja);else if(t.startTime<=e)tf(Ja),t.sortIndex=t.expirationTime,l0(ca,t);else break;t=Ls(Ja)}}function h0(e){if(Xc=!1,$h(e),!kc)if(Ls(ca)!==null)kc=!0,nl||(nl=!0,el());else{var t=Ls(Ja);t!==null&&f0(h0,t.startTime-e)}}var nl=!1,Wc=-1,Ax=5,wx=-1;function Cx(){return u0?!0:!(ze.unstable_now()-wx<Ax)}function r0(){if(u0=!1,nl){var e=ze.unstable_now();wx=e;var t=!0;try{t:{kc=!1,Xc&&(Xc=!1,Ex(Wc),Wc=-1),c0=!0;var n=Vn;try{e:{for($h(e),Xi=Ls(ca);Xi!==null&&!(Xi.expirationTime>e&&Cx());){var i=Xi.callback;if(typeof i=="function"){Xi.callback=null,Vn=Xi.priorityLevel;var s=i(Xi.expirationTime<=e);if(e=ze.unstable_now(),typeof s=="function"){Xi.callback=s,$h(e),t=!0;break e}Xi===Ls(ca)&&tf(ca),$h(e)}else tf(ca);Xi=Ls(ca)}if(Xi!==null)t=!0;else{var a=Ls(Ja);a!==null&&f0(h0,a.startTime-e),t=!1}}break t}finally{Xi=null,Vn=n,c0=!1}t=void 0}}finally{t?el():nl=!1}}}var el;typeof bx=="function"?el=function(){bx(r0)}:typeof MessageChannel<"u"?(o0=new MessageChannel,Mx=o0.port2,o0.port1.onmessage=r0,el=function(){Mx.postMessage(null)}):el=function(){Tx(r0,0)};var o0,Mx;function f0(e,t){Wc=Tx(function(){e(ze.unstable_now())},t)}ze.unstable_IdlePriority=5;ze.unstable_ImmediatePriority=1;ze.unstable_LowPriority=4;ze.unstable_NormalPriority=3;ze.unstable_Profiling=null;ze.unstable_UserBlockingPriority=2;ze.unstable_cancelCallback=function(e){e.callback=null};ze.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ax=0<e?Math.floor(1e3/e):5};ze.unstable_getCurrentPriorityLevel=function(){return Vn};ze.unstable_next=function(e){switch(Vn){case 1:case 2:case 3:var t=3;break;default:t=Vn}var n=Vn;Vn=t;try{return e()}finally{Vn=n}};ze.unstable_requestPaint=function(){u0=!0};ze.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Vn;Vn=e;try{return t()}finally{Vn=n}};ze.unstable_scheduleCallback=function(e,t,n){var i=ze.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:zw++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,l0(Ja,e),Ls(ca)===null&&e===Ls(Ja)&&(Xc?(Ex(Wc),Wc=-1):Xc=!0,f0(h0,n-i))):(e.sortIndex=s,l0(ca,e),kc||c0||(kc=!0,nl||(nl=!0,el()))),e};ze.unstable_shouldYield=Cx;ze.unstable_wrapCallback=function(e){var t=Vn;return function(){var n=Vn;Vn=t;try{return e.apply(this,arguments)}finally{Vn=n}}}});var Ux=Ns((YO,Dx)=>{"use strict";Dx.exports=Rx()});var Lx=Ns(Kn=>{"use strict";var Vw=Gc();function Nx(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ka(){}var Jn={d:{f:Ka,r:function(){throw Error(Nx(522))},D:Ka,C:Ka,L:Ka,m:Ka,X:Ka,S:Ka,M:Ka},p:0,findDOMNode:null},Hw=Symbol.for("react.portal");function Gw(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hw,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var qc=Vw.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function ef(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Kn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Jn;Kn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Nx(299));return Gw(e,t,null,n)};Kn.flushSync=function(e){var t=qc.T,n=Jn.p;try{if(qc.T=null,Jn.p=2,e)return e()}finally{qc.T=t,Jn.p=n,Jn.d.f()}};Kn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Jn.d.C(e,t))};Kn.prefetchDNS=function(e){typeof e=="string"&&Jn.d.D(e)};Kn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=ef(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Jn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&Jn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Kn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=ef(t.as,t.crossOrigin);Jn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Jn.d.M(e)};Kn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=ef(n,t.crossOrigin);Jn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Kn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=ef(t.as,t.crossOrigin);Jn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Jn.d.m(e)};Kn.requestFormReset=function(e){Jn.d.r(e)};Kn.unstable_batchedUpdates=function(e,t){return e(t)};Kn.useFormState=function(e,t,n){return qc.H.useFormState(e,t,n)};Kn.useFormStatus=function(){return qc.H.useHostTransitionStatus()};Kn.version="19.2.0"});var Ix=Ns((JO,Ox)=>{"use strict";function Px(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Px)}catch(e){console.error(e)}}Px(),Ox.exports=Lx()});var ZM=Ns(wd=>{"use strict";var pn=Ux(),l1=Gc(),kw=Ix();function tt(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c1(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Nu(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function u1(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h1(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Bx(e){if(Nu(e)!==e)throw Error(tt(188))}function Xw(e){var t=e.alternate;if(!t){if(t=Nu(e),t===null)throw Error(tt(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return Bx(s),e;if(a===i)return Bx(s),t;a=a.sibling}throw Error(tt(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(tt(189))}}if(n.alternate!==i)throw Error(tt(190))}if(n.tag!==3)throw Error(tt(188));return n.stateNode.current===n?e:t}function f1(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f1(e),t!==null)return t;e=e.sibling}return null}var Oe=Object.assign,Ww=Symbol.for("react.element"),nf=Symbol.for("react.transitional.element"),tu=Symbol.for("react.portal"),ll=Symbol.for("react.fragment"),d1=Symbol.for("react.strict_mode"),q0=Symbol.for("react.profiler"),p1=Symbol.for("react.consumer"),_a=Symbol.for("react.context"),Hg=Symbol.for("react.forward_ref"),Y0=Symbol.for("react.suspense"),Z0=Symbol.for("react.suspense_list"),Gg=Symbol.for("react.memo"),ja=Symbol.for("react.lazy");Symbol.for("react.scope");var J0=Symbol.for("react.activity");Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var qw=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var Fx=Symbol.iterator;function Yc(e){return e===null||typeof e!="object"?null:(e=Fx&&e[Fx]||e["@@iterator"],typeof e=="function"?e:null)}var Yw=Symbol.for("react.client.reference");function K0(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Yw?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ll:return"Fragment";case q0:return"Profiler";case d1:return"StrictMode";case Y0:return"Suspense";case Z0:return"SuspenseList";case J0:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case tu:return"Portal";case _a:return e.displayName||"Context";case p1:return(e._context.displayName||"Context")+".Consumer";case Hg:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Gg:return t=e.displayName||null,t!==null?t:K0(e.type)||"Memo";case ja:t=e._payload,e=e._init;try{return K0(e(t))}catch{}}return null}var eu=Array.isArray,It=l1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de=kw.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ao={pending:!1,data:null,method:null,action:null},j0=[],cl=-1;function Fs(e){return{current:e}}function Tn(e){0>cl||(e.current=j0[cl],j0[cl]=null,cl--)}function De(e,t){cl++,j0[cl]=e.current,e.current=t}var Bs=Fs(null),vu=Fs(null),lr=Fs(null),If=Fs(null);function Bf(e,t){switch(De(lr,t),De(vu,e),De(Bs,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?WS(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=WS(t),e=PM(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Tn(Bs),De(Bs,e)}function wl(){Tn(Bs),Tn(vu),Tn(lr)}function Q0(e){e.memoizedState!==null&&De(If,e);var t=Bs.current,n=PM(t,e.type);t!==n&&(De(vu,e),De(Bs,n))}function Ff(e){vu.current===e&&(Tn(Bs),Tn(vu)),If.current===e&&(Tn(If),Ru._currentValue=ao)}var d0,zx;function eo(e){if(d0===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);d0=t&&t[1]||"",zx=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+d0+e+zx}var p0=!1;function m0(e,t){if(!e||p0)return"";p0=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(f){var h=f}Reflect.construct(e,[],d)}else{try{d.call()}catch(f){h=f}e.call(d.prototype)}}else{try{throw Error()}catch(f){h=f}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(f){if(f&&h&&typeof f.stack=="string")return[f.stack,h.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{p0=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?eo(n):""}function Zw(e,t){switch(e.tag){case 26:case 27:case 5:return eo(e.type);case 16:return eo("Lazy");case 13:return e.child!==t&&t!==null?eo("Suspense Fallback"):eo("Suspense");case 19:return eo("SuspenseList");case 0:case 15:return m0(e.type,!1);case 11:return m0(e.type.render,!1);case 1:return m0(e.type,!0);case 31:return eo("Activity");default:return""}}function Vx(e){try{var t="",n=null;do t+=Zw(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var $0=Object.prototype.hasOwnProperty,kg=pn.unstable_scheduleCallback,g0=pn.unstable_cancelCallback,Jw=pn.unstable_shouldYield,Kw=pn.unstable_requestPaint,Ti=pn.unstable_now,jw=pn.unstable_getCurrentPriorityLevel,m1=pn.unstable_ImmediatePriority,g1=pn.unstable_UserBlockingPriority,zf=pn.unstable_NormalPriority,Qw=pn.unstable_LowPriority,_1=pn.unstable_IdlePriority,$w=pn.log,tC=pn.unstable_setDisableYieldValue,Lu=null,Ei=null;function ir(e){if(typeof $w=="function"&&tC(e),Ei&&typeof Ei.setStrictMode=="function")try{Ei.setStrictMode(Lu,e)}catch{}}var Ai=Math.clz32?Math.clz32:iC,eC=Math.log,nC=Math.LN2;function iC(e){return e>>>=0,e===0?32:31-(eC(e)/nC|0)|0}var sf=256,af=262144,rf=4194304;function no(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function hd(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=no(i):(r&=o,r!==0?s=no(r):n||(n=o&~e,n!==0&&(s=no(n))))):(o=i&~a,o!==0?s=no(o):r!==0?s=no(r):n||(n=i&~e,n!==0&&(s=no(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function Pu(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function sC(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function v1(){var e=rf;return rf<<=1,(rf&62914560)===0&&(rf=4194304),e}function _0(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ou(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function aC(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var u=31-Ai(n),d=1<<u;o[u]=0,l[u]=-1;var h=c[u];if(h!==null)for(c[u]=null,u=0;u<h.length;u++){var f=h[u];f!==null&&(f.lane&=-536870913)}n&=~d}i!==0&&y1(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function y1(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Ai(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function x1(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Ai(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function S1(e,t){var n=t&-t;return n=(n&42)!==0?1:Xg(n),(n&(e.suspendedLanes|t))!==0?0:n}function Xg(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Wg(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function b1(){var e=de.p;return e!==0?e:(e=window.event,e===void 0?32:WM(e.type))}function Hx(e,t){var n=de.p;try{return de.p=e,t()}finally{de.p=n}}var Sr=Math.random().toString(36).slice(2),Dn="__reactFiber$"+Sr,ci="__reactProps$"+Sr,Fl="__reactContainer$"+Sr,tg="__reactEvents$"+Sr,rC="__reactListeners$"+Sr,oC="__reactHandles$"+Sr,Gx="__reactResources$"+Sr,Iu="__reactMarker$"+Sr;function qg(e){delete e[Dn],delete e[ci],delete e[tg],delete e[rC],delete e[oC]}function ul(e){var t=e[Dn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Fl]||n[Dn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=KS(e);e!==null;){if(n=e[Dn])return n;e=KS(e)}return t}e=n,n=e.parentNode}return null}function zl(e){if(e=e[Dn]||e[Fl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function nu(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(tt(33))}function xl(e){var t=e[Gx];return t||(t=e[Gx]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Mn(e){e[Iu]=!0}var M1=new Set,T1={};function go(e,t){Cl(e,t),Cl(e+"Capture",t)}function Cl(e,t){for(T1[e]=t,e=0;e<t.length;e++)M1.add(t[e])}var lC=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),kx={},Xx={};function cC(e){return $0.call(Xx,e)?!0:$0.call(kx,e)?!1:lC.test(e)?Xx[e]=!0:(kx[e]=!0,!1)}function Sf(e,t,n){if(cC(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function of(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function ua(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function qi(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function E1(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function uC(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function eg(e){if(!e._valueTracker){var t=E1(e)?"checked":"value";e._valueTracker=uC(e,t,""+e[t])}}function A1(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=E1(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Vf(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var hC=/[\n"\\]/g;function Ji(e){return e.replace(hC,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ng(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+qi(t)):e.value!==""+qi(t)&&(e.value=""+qi(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?ig(e,r,qi(t)):n!=null?ig(e,r,qi(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+qi(o):e.removeAttribute("name")}function w1(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){eg(e);return}n=n!=null?""+qi(n):"",t=t!=null?""+qi(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),eg(e)}function ig(e,t,n){t==="number"&&Vf(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Sl(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+qi(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function C1(e,t,n){if(t!=null&&(t=""+qi(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+qi(n):""}function R1(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(tt(92));if(eu(i)){if(1<i.length)throw Error(tt(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=qi(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),eg(e)}function Rl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fC=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Wx(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||fC.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function D1(e,t,n){if(t!=null&&typeof t!="object")throw Error(tt(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&Wx(e,s,i)}else for(var a in t)t.hasOwnProperty(a)&&Wx(e,a,t[a])}function Yg(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dC=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),pC=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bf(e){return pC.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function va(){}var sg=null;function Zg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hl=null,bl=null;function qx(e){var t=zl(e);if(t&&(e=t.stateNode)){var n=e[ci]||null;t:switch(e=t.stateNode,t.type){case"input":if(ng(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ji(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[ci]||null;if(!s)throw Error(tt(90));ng(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&A1(i)}break t;case"textarea":C1(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Sl(e,!!n.multiple,t,!1)}}}var v0=!1;function U1(e,t,n){if(v0)return e(t,n);v0=!0;try{var i=e(t);return i}finally{if(v0=!1,(hl!==null||bl!==null)&&(Md(),hl&&(t=hl,e=bl,bl=hl=null,qx(t),e)))for(t=0;t<e.length;t++)qx(e[t])}}function yu(e,t){var n=e.stateNode;if(n===null)return null;var i=n[ci]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(tt(231,t,typeof n));return n}var Ma=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ag=!1;if(Ma)try{il={},Object.defineProperty(il,"passive",{get:function(){ag=!0}}),window.addEventListener("test",il,il),window.removeEventListener("test",il,il)}catch{ag=!1}var il,sr=null,Jg=null,Mf=null;function N1(){if(Mf)return Mf;var e,t=Jg,n=t.length,i,s="value"in sr?sr.value:sr.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return Mf=s.slice(e,1<i?1-i:void 0)}function Tf(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function lf(){return!0}function Yx(){return!1}function ui(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?lf:Yx,this.isPropagationStopped=Yx,this}return Oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=lf)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=lf)},persist:function(){},isPersistent:lf}),t}var _o={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fd=ui(_o),Bu=Oe({},_o,{view:0,detail:0}),mC=ui(Bu),y0,x0,Zc,dd=Oe({},Bu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kg,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zc&&(Zc&&e.type==="mousemove"?(y0=e.screenX-Zc.screenX,x0=e.screenY-Zc.screenY):x0=y0=0,Zc=e),y0)},movementY:function(e){return"movementY"in e?e.movementY:x0}}),Zx=ui(dd),gC=Oe({},dd,{dataTransfer:0}),_C=ui(gC),vC=Oe({},Bu,{relatedTarget:0}),S0=ui(vC),yC=Oe({},_o,{animationName:0,elapsedTime:0,pseudoElement:0}),xC=ui(yC),SC=Oe({},_o,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bC=ui(SC),MC=Oe({},_o,{data:0}),Jx=ui(MC),TC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},EC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},AC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wC(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=AC[e])?!!t[e]:!1}function Kg(){return wC}var CC=Oe({},Bu,{key:function(e){if(e.key){var t=TC[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Tf(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?EC[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kg,charCode:function(e){return e.type==="keypress"?Tf(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Tf(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),RC=ui(CC),DC=Oe({},dd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kx=ui(DC),UC=Oe({},Bu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kg}),NC=ui(UC),LC=Oe({},_o,{propertyName:0,elapsedTime:0,pseudoElement:0}),PC=ui(LC),OC=Oe({},dd,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),IC=ui(OC),BC=Oe({},_o,{newState:0,oldState:0}),FC=ui(BC),zC=[9,13,27,32],jg=Ma&&"CompositionEvent"in window,au=null;Ma&&"documentMode"in document&&(au=document.documentMode);var VC=Ma&&"TextEvent"in window&&!au,L1=Ma&&(!jg||au&&8<au&&11>=au),jx=" ",Qx=!1;function P1(e,t){switch(e){case"keyup":return zC.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function O1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fl=!1;function HC(e,t){switch(e){case"compositionend":return O1(t);case"keypress":return t.which!==32?null:(Qx=!0,jx);case"textInput":return e=t.data,e===jx&&Qx?null:e;default:return null}}function GC(e,t){if(fl)return e==="compositionend"||!jg&&P1(e,t)?(e=N1(),Mf=Jg=sr=null,fl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return L1&&t.locale!=="ko"?null:t.data;default:return null}}var kC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $x(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!kC[e.type]:t==="textarea"}function I1(e,t,n,i){hl?bl?bl.push(i):bl=[i]:hl=i,t=sd(t,"onChange"),0<t.length&&(n=new fd("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var ru=null,xu=null;function XC(e){UM(e,0)}function pd(e){var t=nu(e);if(A1(t))return e}function tS(e,t){if(e==="change")return t}var B1=!1;Ma&&(Ma?(uf="oninput"in document,uf||(b0=document.createElement("div"),b0.setAttribute("oninput","return;"),uf=typeof b0.oninput=="function"),cf=uf):cf=!1,B1=cf&&(!document.documentMode||9<document.documentMode));var cf,uf,b0;function eS(){ru&&(ru.detachEvent("onpropertychange",F1),xu=ru=null)}function F1(e){if(e.propertyName==="value"&&pd(xu)){var t=[];I1(t,xu,e,Zg(e)),U1(XC,t)}}function WC(e,t,n){e==="focusin"?(eS(),ru=t,xu=n,ru.attachEvent("onpropertychange",F1)):e==="focusout"&&eS()}function qC(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pd(xu)}function YC(e,t){if(e==="click")return pd(t)}function ZC(e,t){if(e==="input"||e==="change")return pd(t)}function JC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ci=typeof Object.is=="function"?Object.is:JC;function Su(e,t){if(Ci(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!$0.call(t,s)||!Ci(e[s],t[s]))return!1}return!0}function nS(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function iS(e,t){var n=nS(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=nS(n)}}function z1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?z1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function V1(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Vf(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vf(e.document)}return t}function Qg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var KC=Ma&&"documentMode"in document&&11>=document.documentMode,dl=null,rg=null,ou=null,og=!1;function sS(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;og||dl==null||dl!==Vf(i)||(i=dl,"selectionStart"in i&&Qg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ou&&Su(ou,i)||(ou=i,i=sd(rg,"onSelect"),0<i.length&&(t=new fd("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=dl)))}function to(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var pl={animationend:to("Animation","AnimationEnd"),animationiteration:to("Animation","AnimationIteration"),animationstart:to("Animation","AnimationStart"),transitionrun:to("Transition","TransitionRun"),transitionstart:to("Transition","TransitionStart"),transitioncancel:to("Transition","TransitionCancel"),transitionend:to("Transition","TransitionEnd")},M0={},H1={};Ma&&(H1=document.createElement("div").style,"AnimationEvent"in window||(delete pl.animationend.animation,delete pl.animationiteration.animation,delete pl.animationstart.animation),"TransitionEvent"in window||delete pl.transitionend.transition);function vo(e){if(M0[e])return M0[e];if(!pl[e])return e;var t=pl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in H1)return M0[e]=t[n];return e}var G1=vo("animationend"),k1=vo("animationiteration"),X1=vo("animationstart"),jC=vo("transitionrun"),QC=vo("transitionstart"),$C=vo("transitioncancel"),W1=vo("transitionend"),q1=new Map,lg="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lg.push("scrollEnd");function _s(e,t){q1.set(e,t),go(t,[e])}var Hf=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Wi=[],ml=0,$g=0;function md(){for(var e=ml,t=$g=ml=0;t<e;){var n=Wi[t];Wi[t++]=null;var i=Wi[t];Wi[t++]=null;var s=Wi[t];Wi[t++]=null;var a=Wi[t];if(Wi[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&Y1(n,s,a)}}function gd(e,t,n,i){Wi[ml++]=e,Wi[ml++]=t,Wi[ml++]=n,Wi[ml++]=i,$g|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function t_(e,t,n,i){return gd(e,t,n,i),Gf(e)}function yo(e,t){return gd(e,null,null,t),Gf(e)}function Y1(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-Ai(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function Gf(e){if(50<gu)throw gu=0,Rg=null,Error(tt(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var gl={};function t2(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bi(e,t,n,i){return new t2(e,t,n,i)}function e_(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xa(e,t){var n=e.alternate;return n===null?(n=bi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Z1(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ef(e,t,n,i,s,a){var r=0;if(i=e,typeof e=="function")e_(e)&&(r=1);else if(typeof e=="string")r=iR(e,n,Bs.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case J0:return e=bi(31,n,t,s),e.elementType=J0,e.lanes=a,e;case ll:return ro(n.children,s,a,t);case d1:r=8,s|=24;break;case q0:return e=bi(12,n,t,s|2),e.elementType=q0,e.lanes=a,e;case Y0:return e=bi(13,n,t,s),e.elementType=Y0,e.lanes=a,e;case Z0:return e=bi(19,n,t,s),e.elementType=Z0,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _a:r=10;break t;case p1:r=9;break t;case Hg:r=11;break t;case Gg:r=14;break t;case ja:r=16,i=null;break t}r=29,n=Error(tt(130,e===null?"null":typeof e,"")),i=null}return t=bi(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function ro(e,t,n,i){return e=bi(7,e,i,t),e.lanes=n,e}function T0(e,t,n){return e=bi(6,e,null,t),e.lanes=n,e}function J1(e){var t=bi(18,null,null,0);return t.stateNode=e,t}function E0(e,t,n){return t=bi(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var aS=new WeakMap;function Ki(e,t){if(typeof e=="object"&&e!==null){var n=aS.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Vx(t)},aS.set(e,t),t)}return{value:e,source:t,stack:Vx(t)}}var _l=[],vl=0,kf=null,bu=0,Yi=[],Zi=0,_r=null,Ps=1,Os="";function ma(e,t){_l[vl++]=bu,_l[vl++]=kf,kf=e,bu=t}function K1(e,t,n){Yi[Zi++]=Ps,Yi[Zi++]=Os,Yi[Zi++]=_r,_r=e;var i=Ps;e=Os;var s=32-Ai(i)-1;i&=~(1<<s),n+=1;var a=32-Ai(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,Ps=1<<32-Ai(t)+s|n<<s|i,Os=a+e}else Ps=1<<a|n<<s|i,Os=e}function n_(e){e.return!==null&&(ma(e,1),K1(e,1,0))}function i_(e){for(;e===kf;)kf=_l[--vl],_l[vl]=null,bu=_l[--vl],_l[vl]=null;for(;e===_r;)_r=Yi[--Zi],Yi[Zi]=null,Os=Yi[--Zi],Yi[Zi]=null,Ps=Yi[--Zi],Yi[Zi]=null}function j1(e,t){Yi[Zi++]=Ps,Yi[Zi++]=Os,Yi[Zi++]=_r,Ps=t.id,Os=t.overflow,_r=e}var Un=null,Pe=null,ae=!1,cr=null,ji=!1,cg=Error(tt(519));function vr(e){var t=Error(tt(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Mu(Ki(t,e)),cg}function rS(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Dn]=e,t[ci]=i,n){case"dialog":$t("cancel",t),$t("close",t);break;case"iframe":case"object":case"embed":$t("load",t);break;case"video":case"audio":for(n=0;n<wu.length;n++)$t(wu[n],t);break;case"source":$t("error",t);break;case"img":case"image":case"link":$t("error",t),$t("load",t);break;case"details":$t("toggle",t);break;case"input":$t("invalid",t),w1(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":$t("invalid",t);break;case"textarea":$t("invalid",t),R1(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||LM(t.textContent,n)?(i.popover!=null&&($t("beforetoggle",t),$t("toggle",t)),i.onScroll!=null&&$t("scroll",t),i.onScrollEnd!=null&&$t("scrollend",t),i.onClick!=null&&(t.onclick=va),t=!0):t=!1,t||vr(e,!0)}function oS(e){for(Un=e.return;Un;)switch(Un.tag){case 5:case 31:case 13:ji=!1;return;case 27:case 3:ji=!0;return;default:Un=Un.return}}function sl(e){if(e!==Un)return!1;if(!ae)return oS(e),ae=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Pg(e.type,e.memoizedProps)),n=!n),n&&Pe&&vr(e),oS(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(tt(317));Pe=JS(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(tt(317));Pe=JS(e)}else t===27?(t=Pe,br(e.type)?(e=Fg,Fg=null,Pe=e):Pe=t):Pe=Un?$i(e.stateNode.nextSibling):null;return!0}function uo(){Pe=Un=null,ae=!1}function A0(){var e=cr;return e!==null&&(oi===null?oi=e:oi.push.apply(oi,e),cr=null),e}function Mu(e){cr===null?cr=[e]:cr.push(e)}var ug=Fs(null),xo=null,ya=null;function $a(e,t,n){De(ug,t._currentValue),t._currentValue=n}function Sa(e){e._currentValue=ug.current,Tn(ug)}function hg(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function fg(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),hg(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(tt(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),hg(r,n,e),r=null}else r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function Vl(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(tt(387));if(r=r.memoizedProps,r!==null){var o=s.type;Ci(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===If.current){if(r=s.alternate,r===null)throw Error(tt(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(Ru):e=[Ru])}s=s.return}e!==null&&fg(t,e,n,i),t.flags|=262144}function Xf(e){for(e=e.firstContext;e!==null;){if(!Ci(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ho(e){xo=e,ya=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Nn(e){return Q1(xo,e)}function hf(e,t){return xo===null&&ho(e),Q1(e,t)}function Q1(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ya===null){if(e===null)throw Error(tt(308));ya=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ya=ya.next=t;return n}var e2=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},n2=pn.unstable_scheduleCallback,i2=pn.unstable_NormalPriority,cn={$$typeof:_a,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function s_(){return{controller:new e2,data:new Map,refCount:0}}function Fu(e){e.refCount--,e.refCount===0&&n2(i2,function(){e.controller.abort()})}var lu=null,dg=0,Dl=0,Ml=null;function s2(e,t){if(lu===null){var n=lu=[];dg=0,Dl=R_(),Ml={status:"pending",value:void 0,then:function(i){n.push(i)}}}return dg++,t.then(lS,lS),t}function lS(){if(--dg===0&&lu!==null){Ml!==null&&(Ml.status="fulfilled");var e=lu;lu=null,Dl=0,Ml=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function a2(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var cS=It.S;It.S=function(e,t){fM=Ti(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&s2(e,t),cS!==null&&cS(e,t)};var oo=Fs(null);function a_(){var e=oo.current;return e!==null?e:Ae.pooledCache}function Af(e,t){t===null?De(oo,oo.current):De(oo,t.pool)}function $1(){var e=a_();return e===null?null:{parent:cn._currentValue,pool:e}}var Hl=Error(tt(460)),r_=Error(tt(474)),_d=Error(tt(542)),Wf={then:function(){}};function uS(e){return e=e.status,e==="fulfilled"||e==="rejected"}function tb(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(va,va),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,fS(e),e;default:if(typeof t.status=="string")t.then(va,va);else{if(e=Ae,e!==null&&100<e.shellSuspendCounter)throw Error(tt(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,fS(e),e}throw lo=t,Hl}}function io(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(lo=n,Hl):n}}var lo=null;function hS(){if(lo===null)throw Error(tt(459));var e=lo;return lo=null,e}function fS(e){if(e===Hl||e===_d)throw Error(tt(483))}var Tl=null,Tu=0;function ff(e){var t=Tu;return Tu+=1,Tl===null&&(Tl=[]),tb(Tl,e,t)}function Jc(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function df(e,t){throw t.$$typeof===Ww?Error(tt(525)):(e=Object.prototype.toString.call(t),Error(tt(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function eb(e){function t(m,v){if(e){var S=m.deletions;S===null?(m.deletions=[v],m.flags|=16):S.push(v)}}function n(m,v){if(!e)return null;for(;v!==null;)t(m,v),v=v.sibling;return null}function i(m){for(var v=new Map;m!==null;)m.key!==null?v.set(m.key,m):v.set(m.index,m),m=m.sibling;return v}function s(m,v){return m=xa(m,v),m.index=0,m.sibling=null,m}function a(m,v,S){return m.index=S,e?(S=m.alternate,S!==null?(S=S.index,S<v?(m.flags|=67108866,v):S):(m.flags|=67108866,v)):(m.flags|=1048576,v)}function r(m){return e&&m.alternate===null&&(m.flags|=67108866),m}function o(m,v,S,y){return v===null||v.tag!==6?(v=T0(S,m.mode,y),v.return=m,v):(v=s(v,S),v.return=m,v)}function l(m,v,S,y){var E=S.type;return E===ll?u(m,v,S.props.children,y,S.key):v!==null&&(v.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ja&&io(E)===v.type)?(v=s(v,S.props),Jc(v,S),v.return=m,v):(v=Ef(S.type,S.key,S.props,null,m.mode,y),Jc(v,S),v.return=m,v)}function c(m,v,S,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=E0(S,m.mode,y),v.return=m,v):(v=s(v,S.children||[]),v.return=m,v)}function u(m,v,S,y,E){return v===null||v.tag!==7?(v=ro(S,m.mode,y,E),v.return=m,v):(v=s(v,S),v.return=m,v)}function d(m,v,S){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=T0(""+v,m.mode,S),v.return=m,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case nf:return S=Ef(v.type,v.key,v.props,null,m.mode,S),Jc(S,v),S.return=m,S;case tu:return v=E0(v,m.mode,S),v.return=m,v;case ja:return v=io(v),d(m,v,S)}if(eu(v)||Yc(v))return v=ro(v,m.mode,S,null),v.return=m,v;if(typeof v.then=="function")return d(m,ff(v),S);if(v.$$typeof===_a)return d(m,hf(m,v),S);df(m,v)}return null}function h(m,v,S,y){var E=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return E!==null?null:o(m,v,""+S,y);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case nf:return S.key===E?l(m,v,S,y):null;case tu:return S.key===E?c(m,v,S,y):null;case ja:return S=io(S),h(m,v,S,y)}if(eu(S)||Yc(S))return E!==null?null:u(m,v,S,y,null);if(typeof S.then=="function")return h(m,v,ff(S),y);if(S.$$typeof===_a)return h(m,v,hf(m,S),y);df(m,S)}return null}function f(m,v,S,y,E){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return m=m.get(S)||null,o(v,m,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case nf:return m=m.get(y.key===null?S:y.key)||null,l(v,m,y,E);case tu:return m=m.get(y.key===null?S:y.key)||null,c(v,m,y,E);case ja:return y=io(y),f(m,v,S,y,E)}if(eu(y)||Yc(y))return m=m.get(S)||null,u(v,m,y,E,null);if(typeof y.then=="function")return f(m,v,S,ff(y),E);if(y.$$typeof===_a)return f(m,v,S,hf(v,y),E);df(v,y)}return null}function p(m,v,S,y){for(var E=null,A=null,M=v,x=v=0,T=null;M!==null&&x<S.length;x++){M.index>x?(T=M,M=null):T=M.sibling;var R=h(m,M,S[x],y);if(R===null){M===null&&(M=T);break}e&&M&&R.alternate===null&&t(m,M),v=a(R,v,x),A===null?E=R:A.sibling=R,A=R,M=T}if(x===S.length)return n(m,M),ae&&ma(m,x),E;if(M===null){for(;x<S.length;x++)M=d(m,S[x],y),M!==null&&(v=a(M,v,x),A===null?E=M:A.sibling=M,A=M);return ae&&ma(m,x),E}for(M=i(M);x<S.length;x++)T=f(M,m,x,S[x],y),T!==null&&(e&&T.alternate!==null&&M.delete(T.key===null?x:T.key),v=a(T,v,x),A===null?E=T:A.sibling=T,A=T);return e&&M.forEach(function(D){return t(m,D)}),ae&&ma(m,x),E}function _(m,v,S,y){if(S==null)throw Error(tt(151));for(var E=null,A=null,M=v,x=v=0,T=null,R=S.next();M!==null&&!R.done;x++,R=S.next()){M.index>x?(T=M,M=null):T=M.sibling;var D=h(m,M,R.value,y);if(D===null){M===null&&(M=T);break}e&&M&&D.alternate===null&&t(m,M),v=a(D,v,x),A===null?E=D:A.sibling=D,A=D,M=T}if(R.done)return n(m,M),ae&&ma(m,x),E;if(M===null){for(;!R.done;x++,R=S.next())R=d(m,R.value,y),R!==null&&(v=a(R,v,x),A===null?E=R:A.sibling=R,A=R);return ae&&ma(m,x),E}for(M=i(M);!R.done;x++,R=S.next())R=f(M,m,x,R.value,y),R!==null&&(e&&R.alternate!==null&&M.delete(R.key===null?x:R.key),v=a(R,v,x),A===null?E=R:A.sibling=R,A=R);return e&&M.forEach(function(U){return t(m,U)}),ae&&ma(m,x),E}function g(m,v,S,y){if(typeof S=="object"&&S!==null&&S.type===ll&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case nf:t:{for(var E=S.key;v!==null;){if(v.key===E){if(E=S.type,E===ll){if(v.tag===7){n(m,v.sibling),y=s(v,S.props.children),y.return=m,m=y;break t}}else if(v.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ja&&io(E)===v.type){n(m,v.sibling),y=s(v,S.props),Jc(y,S),y.return=m,m=y;break t}n(m,v);break}else t(m,v);v=v.sibling}S.type===ll?(y=ro(S.props.children,m.mode,y,S.key),y.return=m,m=y):(y=Ef(S.type,S.key,S.props,null,m.mode,y),Jc(y,S),y.return=m,m=y)}return r(m);case tu:t:{for(E=S.key;v!==null;){if(v.key===E)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(m,v.sibling),y=s(v,S.children||[]),y.return=m,m=y;break t}else{n(m,v);break}else t(m,v);v=v.sibling}y=E0(S,m.mode,y),y.return=m,m=y}return r(m);case ja:return S=io(S),g(m,v,S,y)}if(eu(S))return p(m,v,S,y);if(Yc(S)){if(E=Yc(S),typeof E!="function")throw Error(tt(150));return S=E.call(S),_(m,v,S,y)}if(typeof S.then=="function")return g(m,v,ff(S),y);if(S.$$typeof===_a)return g(m,v,hf(m,S),y);df(m,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,v!==null&&v.tag===6?(n(m,v.sibling),y=s(v,S),y.return=m,m=y):(n(m,v),y=T0(S,m.mode,y),y.return=m,m=y),r(m)):n(m,v)}return function(m,v,S,y){try{Tu=0;var E=g(m,v,S,y);return Tl=null,E}catch(M){if(M===Hl||M===_d)throw M;var A=bi(29,M,null,m.mode);return A.lanes=y,A.return=m,A}finally{}}}var fo=eb(!0),nb=eb(!1),Qa=!1;function o_(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ur(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function hr(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(fe&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Gf(e),Y1(e,null,n),t}return gd(e,i,t,n),Gf(e)}function cu(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,x1(e,n)}}function w0(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var mg=!1;function uu(){if(mg){var e=Ml;if(e!==null)throw e}}function hu(e,t,n,i){mg=!1;var s=e.updateQueue;Qa=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var u=e.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==r&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(a!==null){var d=s.baseState;r=0,u=c=l=null,o=a;do{var h=o.lane&-536870913,f=h!==o.lane;if(f?(ee&h)===h:(i&h)===h){h!==0&&h===Dl&&(mg=!0),u!==null&&(u=u.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var p=e,_=o;h=t;var g=n;switch(_.tag){case 1:if(p=_.payload,typeof p=="function"){d=p.call(g,d,h);break t}d=p;break t;case 3:p.flags=p.flags&-65537|128;case 0:if(p=_.payload,h=typeof p=="function"?p.call(g,d,h):p,h==null)break t;d=Oe({},d,h);break t;case 2:Qa=!0}}h=o.callback,h!==null&&(e.flags|=64,f&&(e.flags|=8192),f=s.callbacks,f===null?s.callbacks=[h]:f.push(h))}else f={lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=f,l=d):u=u.next=f,r|=h;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;f=o,o=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);u===null&&(l=d),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=u,a===null&&(s.shared.lanes=0),xr|=r,e.lanes=r,e.memoizedState=d}}function ib(e,t){if(typeof e!="function")throw Error(tt(191,e));e.call(t)}function sb(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ib(n[e],t)}var Ul=Fs(null),qf=Fs(0);function dS(e,t){e=wa,De(qf,e),De(Ul,t),wa=e|t.baseLanes}function gg(){De(qf,wa),De(Ul,Ul.current)}function l_(){wa=qf.current,Tn(Ul),Tn(qf)}var Ri=Fs(null),Qi=null;function tr(e){var t=e.alternate;De(en,en.current&1),De(Ri,e),Qi===null&&(t===null||Ul.current!==null||t.memoizedState!==null)&&(Qi=e)}function _g(e){De(en,en.current),De(Ri,e),Qi===null&&(Qi=e)}function ab(e){e.tag===22?(De(en,en.current),De(Ri,e),Qi===null&&(Qi=e)):er(e)}function er(){De(en,en.current),De(Ri,Ri.current)}function Si(e){Tn(Ri),Qi===e&&(Qi=null),Tn(en)}var en=Fs(0);function Yf(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Ig(n)||Bg(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ta=0,Xt=null,Me=null,on=null,Zf=!1,El=!1,po=!1,Jf=0,Eu=0,Al=null,r2=0;function Ke(){throw Error(tt(321))}function c_(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ci(e[n],t[n]))return!1;return!0}function u_(e,t,n,i,s,a){return Ta=a,Xt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,It.H=e===null||e.memoizedState===null?Ib:S_,po=!1,a=n(i,s),po=!1,El&&(a=ob(t,n,i,s)),rb(e),a}function rb(e){It.H=Au;var t=Me!==null&&Me.next!==null;if(Ta=0,on=Me=Xt=null,Zf=!1,Eu=0,Al=null,t)throw Error(tt(300));e===null||un||(e=e.dependencies,e!==null&&Xf(e)&&(un=!0))}function ob(e,t,n,i){Xt=e;var s=0;do{if(El&&(Al=null),Eu=0,El=!1,25<=s)throw Error(tt(301));if(s+=1,on=Me=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}It.H=Bb,a=t(n,i)}while(El);return a}function o2(){var e=It.H,t=e.useState()[0];return t=typeof t.then=="function"?zu(t):t,e=e.useState()[0],(Me!==null?Me.memoizedState:null)!==e&&(Xt.flags|=1024),t}function h_(){var e=Jf!==0;return Jf=0,e}function f_(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function d_(e){if(Zf){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Zf=!1}Ta=0,on=Me=Xt=null,El=!1,Eu=Jf=0,Al=null}function jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?Xt.memoizedState=on=e:on=on.next=e,on}function nn(){if(Me===null){var e=Xt.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=on===null?Xt.memoizedState:on.next;if(t!==null)on=t,Me=e;else{if(e===null)throw Xt.alternate===null?Error(tt(467)):Error(tt(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},on===null?Xt.memoizedState=on=e:on=on.next=e}return on}function vd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function zu(e){var t=Eu;return Eu+=1,Al===null&&(Al=[]),e=tb(Al,e,t),t=Xt,(on===null?t.memoizedState:on.next)===null&&(t=t.alternate,It.H=t===null||t.memoizedState===null?Ib:S_),e}function yd(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return zu(e);if(e.$$typeof===_a)return Nn(e)}throw Error(tt(438,String(e)))}function p_(e){var t=null,n=Xt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Xt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=vd(),Xt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=qw;return t.index++,n}function Ea(e,t){return typeof t=="function"?t(e):t}function wf(e){var t=nn();return m_(t,Me,e)}function m_(e,t,n){var i=e.queue;if(i===null)throw Error(tt(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,u=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(ee&d)===d:(Ta&d)===d){var h=c.revertLane;if(h===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===Dl&&(u=!0);else if((Ta&h)===h){c=c.next,h===Dl&&(u=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=a):l=l.next=d,Xt.lanes|=h,xr|=h;d=c.action,po&&n(a,d),a=c.hasEagerState?c.eagerState:n(a,d)}else h={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,r=a):l=l.next=h,Xt.lanes|=d,xr|=d;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!Ci(a,e.memoizedState)&&(un=!0,u&&(n=Ml,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function C0(e){var t=nn(),n=t.queue;if(n===null)throw Error(tt(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);Ci(a,t.memoizedState)||(un=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function lb(e,t,n){var i=Xt,s=nn(),a=ae;if(a){if(n===void 0)throw Error(tt(407));n=n()}else n=t();var r=!Ci((Me||s).memoizedState,n);if(r&&(s.memoizedState=n,un=!0),s=s.queue,g_(hb.bind(null,i,s,e),[e]),s.getSnapshot!==t||r||on!==null&&on.memoizedState.tag&1){if(i.flags|=2048,Nl(9,{destroy:void 0},ub.bind(null,i,s,n,t),null),Ae===null)throw Error(tt(349));a||(Ta&127)!==0||cb(i,t,n)}return n}function cb(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Xt.updateQueue,t===null?(t=vd(),Xt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ub(e,t,n,i){t.value=n,t.getSnapshot=i,fb(t)&&db(e)}function hb(e,t,n){return n(function(){fb(t)&&db(e)})}function fb(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ci(e,n)}catch{return!0}}function db(e){var t=yo(e,2);t!==null&&li(t,e,2)}function vg(e){var t=jn();if(typeof e=="function"){var n=e;if(e=n(),po){ir(!0);try{n()}finally{ir(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:e},t}function pb(e,t,n,i){return e.baseState=n,m_(e,Me,typeof i=="function"?i:Ea)}function l2(e,t,n,i,s){if(Sd(e))throw Error(tt(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};It.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,mb(t,a)):(a.next=n.next,t.pending=n.next=a)}}function mb(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=It.T,r={};It.T=r;try{var o=n(s,i),l=It.S;l!==null&&l(r,o),pS(e,t,o)}catch(c){yg(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),It.T=a}}else try{a=n(s,i),pS(e,t,a)}catch(c){yg(e,t,c)}}function pS(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){mS(e,t,i)},function(i){return yg(e,t,i)}):mS(e,t,n)}function mS(e,t,n){t.status="fulfilled",t.value=n,gb(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,mb(e,n)))}function yg(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,gb(t),t=t.next;while(t!==i)}e.action=null}function gb(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function _b(e,t){return t}function gS(e,t){if(ae){var n=Ae.formState;if(n!==null){t:{var i=Xt;if(ae){if(Pe){e:{for(var s=Pe,a=ji;s.nodeType!==8;){if(!a){s=null;break e}if(s=$i(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){Pe=$i(s.nextSibling),i=s.data==="F!";break t}}vr(i)}i=!1}i&&(t=n[0])}}return n=jn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_b,lastRenderedState:t},n.queue=i,n=Lb.bind(null,Xt,i),i.dispatch=n,i=vg(!1),a=x_.bind(null,Xt,!1,i.queue),i=jn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=l2.bind(null,Xt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function _S(e){var t=nn();return vb(t,Me,e)}function vb(e,t,n){if(t=m_(e,t,_b)[0],e=wf(Ea)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=zu(t)}catch(r){throw r===Hl?_d:r}else i=t;t=nn();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(Xt.flags|=2048,Nl(9,{destroy:void 0},c2.bind(null,s,n),null)),[i,a,e]}function c2(e,t){e.action=t}function vS(e){var t=nn(),n=Me;if(n!==null)return vb(t,n,e);nn(),t=t.memoizedState,n=nn();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Nl(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Xt.updateQueue,t===null&&(t=vd(),Xt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function yb(){return nn().memoizedState}function Cf(e,t,n,i){var s=jn();Xt.flags|=e,s.memoizedState=Nl(1|t,{destroy:void 0},n,i===void 0?null:i)}function xd(e,t,n,i){var s=nn();i=i===void 0?null:i;var a=s.memoizedState.inst;Me!==null&&i!==null&&c_(i,Me.memoizedState.deps)?s.memoizedState=Nl(t,a,n,i):(Xt.flags|=e,s.memoizedState=Nl(1|t,a,n,i))}function yS(e,t){Cf(8390656,8,e,t)}function g_(e,t){xd(2048,8,e,t)}function u2(e){Xt.flags|=4;var t=Xt.updateQueue;if(t===null)t=vd(),Xt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function xb(e){var t=nn().memoizedState;return u2({ref:t,nextImpl:e}),function(){if((fe&2)!==0)throw Error(tt(440));return t.impl.apply(void 0,arguments)}}function Sb(e,t){return xd(4,2,e,t)}function bb(e,t){return xd(4,4,e,t)}function Mb(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Tb(e,t,n){n=n!=null?n.concat([e]):null,xd(4,4,Mb.bind(null,t,e),n)}function __(){}function Eb(e,t){var n=nn();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&c_(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Ab(e,t){var n=nn();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&c_(t,i[1]))return i[0];if(i=e(),po){ir(!0);try{e()}finally{ir(!1)}}return n.memoizedState=[i,t],i}function v_(e,t,n){return n===void 0||(Ta&1073741824)!==0&&(ee&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=pM(),Xt.lanes|=e,xr|=e,n)}function wb(e,t,n,i){return Ci(n,t)?n:Ul.current!==null?(e=v_(e,n,i),Ci(e,t)||(un=!0),e):(Ta&42)===0||(Ta&1073741824)!==0&&(ee&261930)===0?(un=!0,e.memoizedState=n):(e=pM(),Xt.lanes|=e,xr|=e,t)}function Cb(e,t,n,i,s){var a=de.p;de.p=a!==0&&8>a?a:8;var r=It.T,o={};It.T=o,x_(e,!1,t,n);try{var l=s(),c=It.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=a2(l,i);fu(e,t,u,wi(e))}else fu(e,t,i,wi(e))}catch(d){fu(e,t,{then:function(){},status:"rejected",reason:d},wi())}finally{de.p=a,r!==null&&o.types!==null&&(r.types=o.types),It.T=r}}function h2(){}function xg(e,t,n,i){if(e.tag!==5)throw Error(tt(476));var s=Rb(e).queue;Cb(e,s,t,ao,n===null?h2:function(){return Db(e),n(i)})}function Rb(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ao,baseState:ao,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:ao},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Db(e){var t=Rb(e);t.next===null&&(t=e.alternate.memoizedState),fu(e,t.next.queue,{},wi())}function y_(){return Nn(Ru)}function Ub(){return nn().memoizedState}function Nb(){return nn().memoizedState}function f2(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=wi();e=ur(n);var i=hr(t,e,n);i!==null&&(li(i,t,n),cu(i,t,n)),t={cache:s_()},e.payload=t;return}t=t.return}}function d2(e,t,n){var i=wi();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Sd(e)?Pb(t,n):(n=t_(e,t,n,i),n!==null&&(li(n,e,i),Ob(n,t,i)))}function Lb(e,t,n){var i=wi();fu(e,t,n,i)}function fu(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sd(e))Pb(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,Ci(o,r))return gd(e,t,s,0),Ae===null&&md(),!1}catch{}finally{}if(n=t_(e,t,s,i),n!==null)return li(n,e,i),Ob(n,t,i),!0}return!1}function x_(e,t,n,i){if(i={lane:2,revertLane:R_(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Sd(e)){if(t)throw Error(tt(479))}else t=t_(e,n,i,2),t!==null&&li(t,e,2)}function Sd(e){var t=e.alternate;return e===Xt||t!==null&&t===Xt}function Pb(e,t){El=Zf=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ob(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,x1(e,n)}}var Au={readContext:Nn,use:yd,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke};Au.useEffectEvent=Ke;var Ib={readContext:Nn,use:yd,useCallback:function(e,t){return jn().memoizedState=[e,t===void 0?null:t],e},useContext:Nn,useEffect:yS,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Cf(4194308,4,Mb.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Cf(4194308,4,e,t)},useInsertionEffect:function(e,t){Cf(4,2,e,t)},useMemo:function(e,t){var n=jn();t=t===void 0?null:t;var i=e();if(po){ir(!0);try{e()}finally{ir(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=jn();if(n!==void 0){var s=n(t);if(po){ir(!0);try{n(t)}finally{ir(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=d2.bind(null,Xt,e),[i.memoizedState,e]},useRef:function(e){var t=jn();return e={current:e},t.memoizedState=e},useState:function(e){e=vg(e);var t=e.queue,n=Lb.bind(null,Xt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:__,useDeferredValue:function(e,t){var n=jn();return v_(n,e,t)},useTransition:function(){var e=vg(!1);return e=Cb.bind(null,Xt,e.queue,!0,!1),jn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Xt,s=jn();if(ae){if(n===void 0)throw Error(tt(407));n=n()}else{if(n=t(),Ae===null)throw Error(tt(349));(ee&127)!==0||cb(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,yS(hb.bind(null,i,a,e),[e]),i.flags|=2048,Nl(9,{destroy:void 0},ub.bind(null,i,a,n,t),null),n},useId:function(){var e=jn(),t=Ae.identifierPrefix;if(ae){var n=Os,i=Ps;n=(i&~(1<<32-Ai(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Jf++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=r2++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:y_,useFormState:gS,useActionState:gS,useOptimistic:function(e){var t=jn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=x_.bind(null,Xt,!0,n),n.dispatch=t,[e,t]},useMemoCache:p_,useCacheRefresh:function(){return jn().memoizedState=f2.bind(null,Xt)},useEffectEvent:function(e){var t=jn(),n={impl:e};return t.memoizedState=n,function(){if((fe&2)!==0)throw Error(tt(440));return n.impl.apply(void 0,arguments)}}},S_={readContext:Nn,use:yd,useCallback:Eb,useContext:Nn,useEffect:g_,useImperativeHandle:Tb,useInsertionEffect:Sb,useLayoutEffect:bb,useMemo:Ab,useReducer:wf,useRef:yb,useState:function(){return wf(Ea)},useDebugValue:__,useDeferredValue:function(e,t){var n=nn();return wb(n,Me.memoizedState,e,t)},useTransition:function(){var e=wf(Ea)[0],t=nn().memoizedState;return[typeof e=="boolean"?e:zu(e),t]},useSyncExternalStore:lb,useId:Ub,useHostTransitionStatus:y_,useFormState:_S,useActionState:_S,useOptimistic:function(e,t){var n=nn();return pb(n,Me,e,t)},useMemoCache:p_,useCacheRefresh:Nb};S_.useEffectEvent=xb;var Bb={readContext:Nn,use:yd,useCallback:Eb,useContext:Nn,useEffect:g_,useImperativeHandle:Tb,useInsertionEffect:Sb,useLayoutEffect:bb,useMemo:Ab,useReducer:C0,useRef:yb,useState:function(){return C0(Ea)},useDebugValue:__,useDeferredValue:function(e,t){var n=nn();return Me===null?v_(n,e,t):wb(n,Me.memoizedState,e,t)},useTransition:function(){var e=C0(Ea)[0],t=nn().memoizedState;return[typeof e=="boolean"?e:zu(e),t]},useSyncExternalStore:lb,useId:Ub,useHostTransitionStatus:y_,useFormState:vS,useActionState:vS,useOptimistic:function(e,t){var n=nn();return Me!==null?pb(n,Me,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:p_,useCacheRefresh:Nb};Bb.useEffectEvent=xb;function R0(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Sg={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=wi(),s=ur(i);s.payload=t,n!=null&&(s.callback=n),t=hr(e,s,i),t!==null&&(li(t,e,i),cu(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=wi(),s=ur(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=hr(e,s,i),t!==null&&(li(t,e,i),cu(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=wi(),i=ur(n);i.tag=2,t!=null&&(i.callback=t),t=hr(e,i,n),t!==null&&(li(t,e,n),cu(t,e,n))}};function xS(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!Su(n,i)||!Su(s,a):!0}function SS(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Sg.enqueueReplaceState(t,t.state,null)}function mo(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Oe({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function Fb(e){Hf(e)}function zb(e){console.error(e)}function Vb(e){Hf(e)}function Kf(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function bS(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function bg(e,t,n){return n=ur(n),n.tag=3,n.payload={element:null},n.callback=function(){Kf(e,t)},n}function Hb(e){return e=ur(e),e.tag=3,e}function Gb(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){bS(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){bS(t,n,i),typeof s!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function p2(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Vl(t,n,s,!0),n=Ri.current,n!==null){switch(n.tag){case 31:case 13:return Qi===null?ed():n.alternate===null&&je===0&&(je=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===Wf?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),V0(e,i,s)),!1;case 22:return n.flags|=65536,i===Wf?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),V0(e,i,s)),!1}throw Error(tt(435,n.tag))}return V0(e,i,s),ed(),!1}if(ae)return t=Ri.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==cg&&(e=Error(tt(422),{cause:i}),Mu(Ki(e,n)))):(i!==cg&&(t=Error(tt(423),{cause:i}),Mu(Ki(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=Ki(i,n),s=bg(e.stateNode,i,s),w0(e,s),je!==4&&(je=2)),!1;var a=Error(tt(520),{cause:i});if(a=Ki(a,n),mu===null?mu=[a]:mu.push(a),je!==4&&(je=2),t===null)return!0;i=Ki(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=bg(n.stateNode,i,e),w0(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(fr===null||!fr.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=Hb(s),Gb(s,e,n,i),w0(n,s),!1}n=n.return}while(n!==null);return!1}var b_=Error(tt(461)),un=!1;function Rn(e,t,n,i){t.child=e===null?nb(t,null,n,i):fo(t,e.child,n,i)}function MS(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return ho(t),i=u_(e,t,n,r,a,s),o=h_(),e!==null&&!un?(f_(e,t,s),Aa(e,t,s)):(ae&&o&&n_(t),t.flags|=1,Rn(e,t,i,s),t.child)}function TS(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!e_(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,kb(e,t,a,i,s)):(e=Ef(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!M_(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:Su,n(r,i)&&e.ref===t.ref)return Aa(e,t,s)}return t.flags|=1,e=xa(a,i),e.ref=t.ref,e.return=t,t.child=e}function kb(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(Su(a,i)&&e.ref===t.ref)if(un=!1,t.pendingProps=i=a,M_(e,s))(e.flags&131072)!==0&&(un=!0);else return t.lanes=e.lanes,Aa(e,t,s)}return Mg(e,t,n,i,s)}function Xb(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return ES(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Af(t,a!==null?a.cachePool:null),a!==null?dS(t,a):gg(),ab(t);else return i=t.lanes=536870912,ES(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(Af(t,a.cachePool),dS(t,a),er(t),t.memoizedState=null):(e!==null&&Af(t,null),gg(),er(t));return Rn(e,t,s,n),t.child}function iu(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ES(e,t,n,i,s){var a=a_();return a=a===null?null:{parent:cn._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Af(t,null),gg(),ab(t),e!==null&&Vl(e,t,i,!0),t.childLanes=s,null}function Rf(e,t){return t=jf({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function AS(e,t,n){return fo(t,e.child,null,n),e=Rf(t,t.pendingProps),e.flags|=2,Si(t),t.memoizedState=null,e}function m2(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ae){if(i.mode==="hidden")return e=Rf(t,i),t.lanes=536870912,iu(null,e);if(_g(t),(e=Pe)?(e=IM(e,ji),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:_r!==null?{id:Ps,overflow:Os}:null,retryLane:536870912,hydrationErrors:null},n=J1(e),n.return=t,t.child=n,Un=t,Pe=null)):e=null,e===null)throw vr(t);return t.lanes=536870912,null}return Rf(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(_g(t),s)if(t.flags&256)t.flags&=-257,t=AS(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(tt(558));else if(un||Vl(e,t,n,!1),s=(n&e.childLanes)!==0,un||s){if(i=Ae,i!==null&&(r=S1(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,yo(e,r),li(i,e,r),b_;ed(),t=AS(e,t,n)}else e=a.treeContext,Pe=$i(r.nextSibling),Un=t,ae=!0,cr=null,ji=!1,e!==null&&j1(t,e),t=Rf(t,i),t.flags|=4096;return t}return e=xa(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Df(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(tt(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Mg(e,t,n,i,s){return ho(t),n=u_(e,t,n,i,void 0,s),i=h_(),e!==null&&!un?(f_(e,t,s),Aa(e,t,s)):(ae&&i&&n_(t),t.flags|=1,Rn(e,t,n,s),t.child)}function wS(e,t,n,i,s,a){return ho(t),t.updateQueue=null,n=ob(t,i,n,s),rb(e),i=h_(),e!==null&&!un?(f_(e,t,a),Aa(e,t,a)):(ae&&i&&n_(t),t.flags|=1,Rn(e,t,n,a),t.child)}function CS(e,t,n,i,s){if(ho(t),t.stateNode===null){var a=gl,r=n.contextType;typeof r=="object"&&r!==null&&(a=Nn(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Sg,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},o_(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?Nn(r):gl,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(R0(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&Sg.enqueueReplaceState(a,a.state,null),hu(t,i,a,s),uu(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=mo(n,o);a.props=l;var c=a.context,u=n.contextType;r=gl,typeof u=="object"&&u!==null&&(r=Nn(u));var d=n.getDerivedStateFromProps;u=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,u||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&SS(t,a,i,r),Qa=!1;var h=t.memoizedState;a.state=h,hu(t,i,a,s),uu(),c=t.memoizedState,o||h!==c||Qa?(typeof d=="function"&&(R0(t,n,d,i),c=t.memoizedState),(l=Qa||xS(t,n,l,i,h,c,r))?(u||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,pg(e,t),r=t.memoizedProps,u=mo(n,r),a.props=u,d=t.pendingProps,h=a.context,c=n.contextType,l=gl,typeof c=="object"&&c!==null&&(l=Nn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==d||h!==l)&&SS(t,a,i,l),Qa=!1,h=t.memoizedState,a.state=h,hu(t,i,a,s),uu();var f=t.memoizedState;r!==d||h!==f||Qa||e!==null&&e.dependencies!==null&&Xf(e.dependencies)?(typeof o=="function"&&(R0(t,n,o,i),f=t.memoizedState),(u=Qa||xS(t,n,u,i,h,f,l)||e!==null&&e.dependencies!==null&&Xf(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,f,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,f,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=f),a.props=i,a.state=f,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,Df(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=fo(t,e.child,null,s),t.child=fo(t,null,n,s)):Rn(e,t,n,s),t.memoizedState=a.state,e=t.child):e=Aa(e,t,s),e}function RS(e,t,n,i){return uo(),t.flags|=256,Rn(e,t,n,i),t.child}var D0={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function U0(e){return{baseLanes:e,cachePool:$1()}}function N0(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Mi),e}function Wb(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(en.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(ae){if(s?tr(t):er(t),(e=Pe)?(e=IM(e,ji),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:_r!==null?{id:Ps,overflow:Os}:null,retryLane:536870912,hydrationErrors:null},n=J1(e),n.return=t,t.child=n,Un=t,Pe=null)):e=null,e===null)throw vr(t);return Bg(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,s?(er(t),s=t.mode,o=jf({mode:"hidden",children:o},s),i=ro(i,s,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=U0(n),i.childLanes=N0(e,r,n),t.memoizedState=D0,iu(null,i)):(tr(t),Tg(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(a)t.flags&256?(tr(t),t.flags&=-257,t=L0(e,t,n)):t.memoizedState!==null?(er(t),t.child=e.child,t.flags|=128,t=null):(er(t),o=i.fallback,s=t.mode,i=jf({mode:"visible",children:i.children},s),o=ro(o,s,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,fo(t,e.child,null,n),i=t.child,i.memoizedState=U0(n),i.childLanes=N0(e,r,n),t.memoizedState=D0,t=iu(null,i));else if(tr(t),Bg(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(tt(419)),i.stack="",i.digest=r,Mu({value:i,source:null,stack:null}),t=L0(e,t,n)}else if(un||Vl(e,t,n,!1),r=(n&e.childLanes)!==0,un||r){if(r=Ae,r!==null&&(i=S1(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,yo(e,i),li(r,e,i),b_;Ig(o)||ed(),t=L0(e,t,n)}else Ig(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Pe=$i(o.nextSibling),Un=t,ae=!0,cr=null,ji=!1,e!==null&&j1(t,e),t=Tg(t,i.children),t.flags|=4096);return t}return s?(er(t),o=i.fallback,s=t.mode,l=e.child,c=l.sibling,i=xa(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=xa(c,o):(o=ro(o,s,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,iu(null,i),i=t.child,o=e.child.memoizedState,o===null?o=U0(n):(s=o.cachePool,s!==null?(l=cn._currentValue,s=s.parent!==l?{parent:l,pool:l}:s):s=$1(),o={baseLanes:o.baseLanes|n,cachePool:s}),i.memoizedState=o,i.childLanes=N0(e,r,n),t.memoizedState=D0,iu(e.child,i)):(tr(t),n=e.child,e=n.sibling,n=xa(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Tg(e,t){return t=jf({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function jf(e,t){return e=bi(22,e,null,t),e.lanes=0,e}function L0(e,t,n){return fo(t,e.child,null,n),e=Tg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function DS(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),hg(e.return,t,n)}function P0(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function qb(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=en.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,De(en,r),Rn(e,t,i,n),i=ae?bu:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&DS(e,n,t);else if(e.tag===19)DS(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Yf(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),P0(t,!1,s,n,a,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Yf(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}P0(t,!0,n,null,a,i);break;case"together":P0(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function Aa(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),xr|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Vl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(tt(153));if(t.child!==null){for(e=t.child,n=xa(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xa(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function M_(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Xf(e)))}function g2(e,t,n){switch(t.tag){case 3:Bf(t,t.stateNode.containerInfo),$a(t,cn,e.memoizedState.cache),uo();break;case 27:case 5:Q0(t);break;case 4:Bf(t,t.stateNode.containerInfo);break;case 10:$a(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,_g(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(tr(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Wb(e,t,n):(tr(t),e=Aa(e,t,n),e!==null?e.sibling:null);tr(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Vl(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return qb(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),De(en,en.current),i)break;return null;case 22:return t.lanes=0,Xb(e,t,n,t.pendingProps);case 24:$a(t,cn,e.memoizedState.cache)}return Aa(e,t,n)}function Yb(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)un=!0;else{if(!M_(e,n)&&(t.flags&128)===0)return un=!1,g2(e,t,n);un=(e.flags&131072)!==0}else un=!1,ae&&(t.flags&1048576)!==0&&K1(t,bu,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=io(t.elementType),t.type=e,typeof e=="function")e_(e)?(i=mo(e,i),t.tag=1,t=CS(null,t,e,i,n)):(t.tag=0,t=Mg(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===Hg){t.tag=11,t=MS(null,t,e,i,n);break t}else if(s===Gg){t.tag=14,t=TS(null,t,e,i,n);break t}}throw t=K0(e)||e,Error(tt(306,t,""))}}return t;case 0:return Mg(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=mo(i,t.pendingProps),CS(e,t,i,s,n);case 3:t:{if(Bf(t,t.stateNode.containerInfo),e===null)throw Error(tt(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,pg(e,t),hu(t,i,null,n);var r=t.memoizedState;if(i=r.cache,$a(t,cn,i),i!==a.cache&&fg(t,[cn],n,!0),uu(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=RS(e,t,i,n);break t}else if(i!==s){s=Ki(Error(tt(424)),t),Mu(s),t=RS(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Pe=$i(e.firstChild),Un=t,ae=!0,cr=null,ji=!0,n=nb(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(uo(),i===s){t=Aa(e,t,n);break t}Rn(e,t,i,n)}t=t.child}return t;case 26:return Df(e,t),e===null?(n=QS(t.type,null,t.pendingProps,null))?t.memoizedState=n:ae||(n=t.type,e=t.pendingProps,i=ad(lr.current).createElement(n),i[Dn]=t,i[ci]=e,Ln(i,n,e),Mn(i),t.stateNode=i):t.memoizedState=QS(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Q0(t),e===null&&ae&&(i=t.stateNode=BM(t.type,t.pendingProps,lr.current),Un=t,ji=!0,s=Pe,br(t.type)?(Fg=s,Pe=$i(i.firstChild)):Pe=s),Rn(e,t,t.pendingProps.children,n),Df(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ae&&((s=i=Pe)&&(i=X2(i,t.type,t.pendingProps,ji),i!==null?(t.stateNode=i,Un=t,Pe=$i(i.firstChild),ji=!1,s=!0):s=!1),s||vr(t)),Q0(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,Pg(s,a)?i=null:r!==null&&Pg(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=u_(e,t,o2,null,null,n),Ru._currentValue=s),Df(e,t),Rn(e,t,i,n),t.child;case 6:return e===null&&ae&&((e=n=Pe)&&(n=W2(n,t.pendingProps,ji),n!==null?(t.stateNode=n,Un=t,Pe=null,e=!0):e=!1),e||vr(t)),null;case 13:return Wb(e,t,n);case 4:return Bf(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=fo(t,null,i,n):Rn(e,t,i,n),t.child;case 11:return MS(e,t,t.type,t.pendingProps,n);case 7:return Rn(e,t,t.pendingProps,n),t.child;case 8:return Rn(e,t,t.pendingProps.children,n),t.child;case 12:return Rn(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,$a(t,t.type,i.value),Rn(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,ho(t),s=Nn(s),i=i(s),t.flags|=1,Rn(e,t,i,n),t.child;case 14:return TS(e,t,t.type,t.pendingProps,n);case 15:return kb(e,t,t.type,t.pendingProps,n);case 19:return qb(e,t,n);case 31:return m2(e,t,n);case 22:return Xb(e,t,n,t.pendingProps);case 24:return ho(t),i=Nn(cn),e===null?(s=a_(),s===null&&(s=Ae,a=s_(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},o_(t),$a(t,cn,s)):((e.lanes&n)!==0&&(pg(e,t),hu(t,null,null,n),uu()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),$a(t,cn,i)):(i=a.cache,$a(t,cn,i),i!==s.cache&&fg(t,[cn],n,!0))),Rn(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(tt(156,t.tag))}function ha(e){e.flags|=4}function O0(e,t,n,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(_M())e.flags|=8192;else throw lo=Wf,r_}else e.flags&=-16777217}function US(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!VM(t))if(_M())e.flags|=8192;else throw lo=Wf,r_}function pf(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?v1():536870912,e.lanes|=t,Ll|=t)}function Kc(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function _2(e,t,n){var i=t.pendingProps;switch(i_(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Le(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Sa(cn),wl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(sl(t)?ha(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,A0())),Le(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(ha(t),a!==null?(Le(t),US(t,a)):(Le(t),O0(t,s,null,i,n))):a?a!==e.memoizedState?(ha(t),Le(t),US(t,a)):(Le(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&ha(t),Le(t),O0(t,s,e,i,n)),null;case 27:if(Ff(t),n=lr.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ha(t);else{if(!i){if(t.stateNode===null)throw Error(tt(166));return Le(t),null}e=Bs.current,sl(t)?rS(t,e):(e=BM(s,i,n),t.stateNode=e,ha(t))}return Le(t),null;case 5:if(Ff(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ha(t);else{if(!i){if(t.stateNode===null)throw Error(tt(166));return Le(t),null}if(a=Bs.current,sl(t))rS(t,a);else{var r=ad(lr.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[Dn]=t,a[ci]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(Ln(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&ha(t)}}return Le(t),O0(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&ha(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(tt(166));if(e=lr.current,sl(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=Un,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[Dn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||LM(e.nodeValue,n)),e||vr(t,!0)}else e=ad(e).createTextNode(i),e[Dn]=t,t.stateNode=e}return Le(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=sl(t),n!==null){if(e===null){if(!i)throw Error(tt(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(tt(557));e[Dn]=t}else uo(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),e=!1}else n=A0(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Si(t),t):(Si(t),null);if((t.flags&128)!==0)throw Error(tt(558))}return Le(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=sl(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(tt(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(tt(317));s[Dn]=t}else uo(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),s=!1}else s=A0(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Si(t),t):(Si(t),null)}return Si(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),pf(t,t.updateQueue),Le(t),null);case 4:return wl(),e===null&&D_(t.stateNode.containerInfo),Le(t),null;case 10:return Sa(t.type),Le(t),null;case 19:if(Tn(en),i=t.memoizedState,i===null)return Le(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)Kc(i,!1);else{if(je!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Yf(e),a!==null){for(t.flags|=128,Kc(i,!1),e=a.updateQueue,t.updateQueue=e,pf(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Z1(n,e),n=n.sibling;return De(en,en.current&1|2),ae&&ma(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Ti()>$f&&(t.flags|=128,s=!0,Kc(i,!1),t.lanes=4194304)}else{if(!s)if(e=Yf(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,pf(t,e),Kc(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!ae)return Le(t),null}else 2*Ti()-i.renderingStartTime>$f&&n!==536870912&&(t.flags|=128,s=!0,Kc(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ti(),e.sibling=null,n=en.current,De(en,s?n&1|2:n&1),ae&&ma(t,i.treeForkCount),e):(Le(t),null);case 22:case 23:return Si(t),l_(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),n=t.updateQueue,n!==null&&pf(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&Tn(oo),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Sa(cn),Le(t),null;case 25:return null;case 30:return null}throw Error(tt(156,t.tag))}function v2(e,t){switch(i_(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sa(cn),wl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ff(t),null;case 31:if(t.memoizedState!==null){if(Si(t),t.alternate===null)throw Error(tt(340));uo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Si(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(tt(340));uo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Tn(en),null;case 4:return wl(),null;case 10:return Sa(t.type),null;case 22:case 23:return Si(t),l_(),e!==null&&Tn(oo),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Sa(cn),null;case 25:return null;default:return null}}function Zb(e,t){switch(i_(t),t.tag){case 3:Sa(cn),wl();break;case 26:case 27:case 5:Ff(t);break;case 4:wl();break;case 31:t.memoizedState!==null&&Si(t);break;case 13:Si(t);break;case 19:Tn(en);break;case 10:Sa(t.type);break;case 22:case 23:Si(t),l_(),e!==null&&Tn(oo);break;case 24:Sa(cn)}}function Vu(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){ve(t,t.return,o)}}function yr(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(u){ve(s,l,u)}}}i=i.next}while(i!==a)}}catch(u){ve(t,t.return,u)}}function Jb(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{sb(t,n)}catch(i){ve(e,e.return,i)}}}function Kb(e,t,n){n.props=mo(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){ve(e,t,i)}}function du(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){ve(e,t,s)}}function Is(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){ve(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){ve(e,t,s)}else n.current=null}function jb(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){ve(e,e.return,s)}}function I0(e,t,n){try{var i=e.stateNode;F2(i,e.type,n,t),i[ci]=t}catch(s){ve(e,e.return,s)}}function Qb(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&br(e.type)||e.tag===4}function B0(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Qb(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&br(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Eg(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=va));else if(i!==4&&(i===27&&br(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Eg(e,t,n),e=e.sibling;e!==null;)Eg(e,t,n),e=e.sibling}function Qf(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&br(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Qf(e,t,n),e=e.sibling;e!==null;)Qf(e,t,n),e=e.sibling}function $b(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);Ln(t,i,n),t[Dn]=e,t[ci]=n}catch(a){ve(e,e.return,a)}}var ga=!1,ln=!1,F0=!1,NS=typeof WeakSet=="function"?WeakSet:Set,bn=null;function y2(e,t){if(e=e.containerInfo,Ng=cd,e=V1(e),Qg(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,u=0,d=e,h=null;e:for(;;){for(var f;d!==n||s!==0&&d.nodeType!==3||(o=r+s),d!==a||i!==0&&d.nodeType!==3||(l=r+i),d.nodeType===3&&(r+=d.nodeValue.length),(f=d.firstChild)!==null;)h=d,d=f;for(;;){if(d===e)break e;if(h===n&&++c===s&&(o=r),h===a&&++u===i&&(l=r),(f=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=f}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Lg={focusedElem:e,selectionRange:n},cd=!1,bn=t;bn!==null;)if(t=bn,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,bn=e;else for(;bn!==null;){switch(t=bn,a=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&a!==null){e=void 0,n=t,s=a.memoizedProps,a=a.memoizedState,i=n.stateNode;try{var p=mo(n.type,s);e=i.getSnapshotBeforeUpdate(p,a),i.__reactInternalSnapshotBeforeUpdate=e}catch(_){ve(n,n.return,_)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Og(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Og(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(tt(163))}if(e=t.sibling,e!==null){e.return=t.return,bn=e;break}bn=t.return}}function tM(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:da(e,n),i&4&&Vu(5,n);break;case 1:if(da(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){ve(n,n.return,r)}else{var s=mo(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){ve(n,n.return,r)}}i&64&&Jb(n),i&512&&du(n,n.return);break;case 3:if(da(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{sb(e,t)}catch(r){ve(n,n.return,r)}}break;case 27:t===null&&i&4&&$b(n);case 26:case 5:da(e,n),t===null&&i&4&&jb(n),i&512&&du(n,n.return);break;case 12:da(e,n);break;case 31:da(e,n),i&4&&iM(e,n);break;case 13:da(e,n),i&4&&sM(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=C2.bind(null,n),q2(e,n))));break;case 22:if(i=n.memoizedState!==null||ga,!i){t=t!==null&&t.memoizedState!==null||ln,s=ga;var a=ln;ga=i,(ln=t)&&!a?pa(e,n,(n.subtreeFlags&8772)!==0):da(e,n),ga=s,ln=a}break;case 30:break;default:da(e,n)}}function eM(e){var t=e.alternate;t!==null&&(e.alternate=null,eM(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&qg(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ve=null,ri=!1;function fa(e,t,n){for(n=n.child;n!==null;)nM(e,t,n),n=n.sibling}function nM(e,t,n){if(Ei&&typeof Ei.onCommitFiberUnmount=="function")try{Ei.onCommitFiberUnmount(Lu,n)}catch{}switch(n.tag){case 26:ln||Is(n,t),fa(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ln||Is(n,t);var i=Ve,s=ri;br(n.type)&&(Ve=n.stateNode,ri=!1),fa(e,t,n),_u(n.stateNode),Ve=i,ri=s;break;case 5:ln||Is(n,t);case 6:if(i=Ve,s=ri,Ve=null,fa(e,t,n),Ve=i,ri=s,Ve!==null)if(ri)try{(Ve.nodeType===9?Ve.body:Ve.nodeName==="HTML"?Ve.ownerDocument.body:Ve).removeChild(n.stateNode)}catch(a){ve(n,t,a)}else try{Ve.removeChild(n.stateNode)}catch(a){ve(n,t,a)}break;case 18:Ve!==null&&(ri?(e=Ve,YS(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Bl(e)):YS(Ve,n.stateNode));break;case 4:i=Ve,s=ri,Ve=n.stateNode.containerInfo,ri=!0,fa(e,t,n),Ve=i,ri=s;break;case 0:case 11:case 14:case 15:yr(2,n,t),ln||yr(4,n,t),fa(e,t,n);break;case 1:ln||(Is(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Kb(n,t,i)),fa(e,t,n);break;case 21:fa(e,t,n);break;case 22:ln=(i=ln)||n.memoizedState!==null,fa(e,t,n),ln=i;break;default:fa(e,t,n)}}function iM(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Bl(e)}catch(n){ve(t,t.return,n)}}}function sM(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Bl(e)}catch(n){ve(t,t.return,n)}}function x2(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new NS),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new NS),t;default:throw Error(tt(435,e.tag))}}function mf(e,t){var n=x2(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=R2.bind(null,e,i);i.then(s,s)}})}function si(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],a=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(br(o.type)){Ve=o.stateNode,ri=!1;break t}break;case 5:Ve=o.stateNode,ri=!1;break t;case 3:case 4:Ve=o.stateNode.containerInfo,ri=!0;break t}o=o.return}if(Ve===null)throw Error(tt(160));nM(a,r,s),Ve=null,ri=!1,a=s.alternate,a!==null&&(a.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)aM(t,e),t=t.sibling}var gs=null;function aM(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:si(t,e),ai(e),i&4&&(yr(3,e,e.return),Vu(3,e),yr(5,e,e.return));break;case 1:si(t,e),ai(e),i&512&&(ln||n===null||Is(n,n.return)),i&64&&ga&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=gs;if(si(t,e),ai(e),i&512&&(ln||n===null||Is(n,n.return)),i&4){var a=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;e:switch(i){case"title":a=s.getElementsByTagName("title")[0],(!a||a[Iu]||a[Dn]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=s.createElement(i),s.head.insertBefore(a,s.querySelector("head > title"))),Ln(a,i,n),a[Dn]=e,Mn(a),i=a;break t;case"link":var r=t1("link","href",s).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(a=r[o],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}a=s.createElement(i),Ln(a,i,n),s.head.appendChild(a);break;case"meta":if(r=t1("meta","content",s).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(a=r[o],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}a=s.createElement(i),Ln(a,i,n),s.head.appendChild(a);break;default:throw Error(tt(468,i))}a[Dn]=e,Mn(a),i=a}e.stateNode=i}else e1(s,e.type,e.stateNode);else e.stateNode=$S(s,i,e.memoizedProps);else a!==i?(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,i===null?e1(s,e.type,e.stateNode):$S(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&I0(e,e.memoizedProps,n.memoizedProps)}break;case 27:si(t,e),ai(e),i&512&&(ln||n===null||Is(n,n.return)),n!==null&&i&4&&I0(e,e.memoizedProps,n.memoizedProps);break;case 5:if(si(t,e),ai(e),i&512&&(ln||n===null||Is(n,n.return)),e.flags&32){s=e.stateNode;try{Rl(s,"")}catch(p){ve(e,e.return,p)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,I0(e,s,n!==null?n.memoizedProps:s)),i&1024&&(F0=!0);break;case 6:if(si(t,e),ai(e),i&4){if(e.stateNode===null)throw Error(tt(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(p){ve(e,e.return,p)}}break;case 3:if(Lf=null,s=gs,gs=rd(t.containerInfo),si(t,e),gs=s,ai(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Bl(t.containerInfo)}catch(p){ve(e,e.return,p)}F0&&(F0=!1,rM(e));break;case 4:i=gs,gs=rd(e.stateNode.containerInfo),si(t,e),ai(e),gs=i;break;case 12:si(t,e),ai(e);break;case 31:si(t,e),ai(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,mf(e,i)));break;case 13:si(t,e),ai(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(bd=Ti()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,mf(e,i)));break;case 22:s=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=ga,u=ln;if(ga=c||s,ln=u||l,si(t,e),ln=u,ga=c,ai(e),i&8192)t:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||l||ga||ln||so(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,s)r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var d=l.memoizedProps.style,h=d!=null&&d.hasOwnProperty("display")?d.display:null;o.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(p){ve(l,l.return,p)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=s?"":l.memoizedProps}catch(p){ve(l,l.return,p)}}}else if(t.tag===18){if(n===null){l=t;try{var f=l.stateNode;s?ZS(f,!0):ZS(l.stateNode,!1)}catch(p){ve(l,l.return,p)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,mf(e,n))));break;case 19:si(t,e),ai(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,mf(e,i)));break;case 30:break;case 21:break;default:si(t,e),ai(e)}}function ai(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Qb(i)){n=i;break}i=i.return}if(n==null)throw Error(tt(160));switch(n.tag){case 27:var s=n.stateNode,a=B0(e);Qf(e,a,s);break;case 5:var r=n.stateNode;n.flags&32&&(Rl(r,""),n.flags&=-33);var o=B0(e);Qf(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=B0(e);Eg(e,c,l);break;default:throw Error(tt(161))}}catch(u){ve(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function rM(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;rM(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function da(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)tM(e,t.alternate,t),t=t.sibling}function so(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:yr(4,t,t.return),so(t);break;case 1:Is(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Kb(t,t.return,n),so(t);break;case 27:_u(t.stateNode);case 26:case 5:Is(t,t.return),so(t);break;case 22:t.memoizedState===null&&so(t);break;case 30:so(t);break;default:so(t)}e=e.sibling}}function pa(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags;switch(a.tag){case 0:case 11:case 15:pa(s,a,n),Vu(4,a);break;case 1:if(pa(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(c){ve(i,i.return,c)}if(i=a,s=i.updateQueue,s!==null){var o=i.stateNode;try{var l=s.shared.hiddenCallbacks;if(l!==null)for(s.shared.hiddenCallbacks=null,s=0;s<l.length;s++)ib(l[s],o)}catch(c){ve(i,i.return,c)}}n&&r&64&&Jb(a),du(a,a.return);break;case 27:$b(a);case 26:case 5:pa(s,a,n),n&&i===null&&r&4&&jb(a),du(a,a.return);break;case 12:pa(s,a,n);break;case 31:pa(s,a,n),n&&r&4&&iM(s,a);break;case 13:pa(s,a,n),n&&r&4&&sM(s,a);break;case 22:a.memoizedState===null&&pa(s,a,n),du(a,a.return);break;case 30:break;default:pa(s,a,n)}t=t.sibling}}function T_(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Fu(n))}function E_(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Fu(e))}function ms(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)oM(e,t,n,i),t=t.sibling}function oM(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:ms(e,t,n,i),s&2048&&Vu(9,t);break;case 1:ms(e,t,n,i);break;case 3:ms(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Fu(e)));break;case 12:if(s&2048){ms(e,t,n,i),e=t.stateNode;try{var a=t.memoizedProps,r=a.id,o=a.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){ve(t,t.return,l)}}else ms(e,t,n,i);break;case 31:ms(e,t,n,i);break;case 13:ms(e,t,n,i);break;case 23:break;case 22:a=t.stateNode,r=t.alternate,t.memoizedState!==null?a._visibility&2?ms(e,t,n,i):pu(e,t):a._visibility&2?ms(e,t,n,i):(a._visibility|=2,rl(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&T_(r,t);break;case 24:ms(e,t,n,i),s&2048&&E_(t.alternate,t);break;default:ms(e,t,n,i)}}function rl(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:rl(a,r,o,l,s),Vu(8,r);break;case 23:break;case 22:var u=r.stateNode;r.memoizedState!==null?u._visibility&2?rl(a,r,o,l,s):pu(a,r):(u._visibility|=2,rl(a,r,o,l,s)),s&&c&2048&&T_(r.alternate,r);break;case 24:rl(a,r,o,l,s),s&&c&2048&&E_(r.alternate,r);break;default:rl(a,r,o,l,s)}t=t.sibling}}function pu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:pu(n,i),s&2048&&T_(i.alternate,i);break;case 24:pu(n,i),s&2048&&E_(i.alternate,i);break;default:pu(n,i)}t=t.sibling}}var su=8192;function al(e,t,n){if(e.subtreeFlags&su)for(e=e.child;e!==null;)lM(e,t,n),e=e.sibling}function lM(e,t,n){switch(e.tag){case 26:al(e,t,n),e.flags&su&&e.memoizedState!==null&&sR(n,gs,e.memoizedState,e.memoizedProps);break;case 5:al(e,t,n);break;case 3:case 4:var i=gs;gs=rd(e.stateNode.containerInfo),al(e,t,n),gs=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=su,su=16777216,al(e,t,n),su=i):al(e,t,n));break;default:al(e,t,n)}}function cM(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function jc(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];bn=i,hM(i,e)}cM(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)uM(e),e=e.sibling}function uM(e){switch(e.tag){case 0:case 11:case 15:jc(e),e.flags&2048&&yr(9,e,e.return);break;case 3:jc(e);break;case 12:jc(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Uf(e)):jc(e);break;default:jc(e)}}function Uf(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];bn=i,hM(i,e)}cM(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:yr(8,t,t.return),Uf(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Uf(t));break;default:Uf(t)}e=e.sibling}}function hM(e,t){for(;bn!==null;){var n=bn;switch(n.tag){case 0:case 11:case 15:yr(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Fu(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,bn=i;else t:for(n=e;bn!==null;){i=bn;var s=i.sibling,a=i.return;if(eM(i),i===n){bn=null;break t}if(s!==null){s.return=a,bn=s;break t}bn=a}}}var S2={getCacheForType:function(e){var t=Nn(cn),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Nn(cn).controller.signal}},b2=typeof WeakMap=="function"?WeakMap:Map,fe=0,Ae=null,te=null,ee=0,_e=0,xi=null,ar=!1,Gl=!1,A_=!1,wa=0,je=0,xr=0,co=0,w_=0,Mi=0,Ll=0,mu=null,oi=null,Ag=!1,bd=0,fM=0,$f=1/0,td=null,fr=null,dn=0,dr=null,Pl=null,ba=0,wg=0,Cg=null,dM=null,gu=0,Rg=null;function wi(){return(fe&2)!==0&&ee!==0?ee&-ee:It.T!==null?R_():b1()}function pM(){if(Mi===0)if((ee&536870912)===0||ae){var e=af;af<<=1,(af&3932160)===0&&(af=262144),Mi=e}else Mi=536870912;return e=Ri.current,e!==null&&(e.flags|=32),Mi}function li(e,t,n){(e===Ae&&(_e===2||_e===9)||e.cancelPendingCommit!==null)&&(Ol(e,0),rr(e,ee,Mi,!1)),Ou(e,n),((fe&2)===0||e!==Ae)&&(e===Ae&&((fe&2)===0&&(co|=n),je===4&&rr(e,ee,Mi,!1)),zs(e))}function mM(e,t,n){if((fe&6)!==0)throw Error(tt(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Pu(e,t),s=i?E2(e,t):z0(e,t,!0),a=i;do{if(s===0){Gl&&!i&&rr(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!M2(n)){s=z0(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=mu;var l=o.current.memoizedState.isDehydrated;if(l&&(Ol(o,r).flags|=256),r=z0(o,r,!1),r!==2){if(A_&&!l){o.errorRecoveryDisabledLanes|=a,co|=a,s=4;break t}a=oi,oi=s,a!==null&&(oi===null?oi=a:oi.push.apply(oi,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){Ol(e,0),rr(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(tt(345));case 4:if((t&4194048)!==t)break;case 6:rr(i,t,Mi,!ar);break t;case 2:oi=null;break;case 3:case 5:break;default:throw Error(tt(329))}if((t&62914560)===t&&(s=bd+300-Ti(),10<s)){if(rr(i,t,Mi,!ar),hd(i,0,!0)!==0)break t;ba=t,i.timeoutHandle=OM(LS.bind(null,i,n,oi,td,Ag,t,Mi,co,Ll,ar,a,"Throttled",-0,0),s);break t}LS(i,n,oi,td,Ag,t,Mi,co,Ll,ar,a,null,-0,0)}}break}while(!0);zs(e)}function LS(e,t,n,i,s,a,r,o,l,c,u,d,h,f){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)===16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:va},lM(t,a,d);var p=(a&62914560)===a?bd-Ti():(a&4194048)===a?fM-Ti():0;if(p=aR(d,p),p!==null){ba=a,e.cancelPendingCommit=p(OS.bind(null,e,t,a,n,i,s,r,o,l,u,d,null,h,f)),rr(e,a,r,!c);return}}OS(e,t,a,n,i,s,r,o,l)}function M2(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!Ci(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rr(e,t,n,i){t&=~w_,t&=~co,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-Ai(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&y1(e,n,t)}function Md(){return(fe&6)===0?(Hu(0,!1),!1):!0}function C_(){if(te!==null){if(_e===0)var e=te.return;else e=te,ya=xo=null,d_(e),Tl=null,Tu=0,e=te;for(;e!==null;)Zb(e.alternate,e),e=e.return;te=null}}function Ol(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,H2(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ba=0,C_(),Ae=e,te=n=xa(e.current,null),ee=t,_e=0,xi=null,ar=!1,Gl=Pu(e,t),A_=!1,Ll=Mi=w_=co=xr=je=0,oi=mu=null,Ag=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-Ai(i),a=1<<s;t|=e[s],i&=~a}return wa=t,md(),n}function gM(e,t){Xt=null,It.H=Au,t===Hl||t===_d?(t=hS(),_e=3):t===r_?(t=hS(),_e=4):_e=t===b_?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,xi=t,te===null&&(je=1,Kf(e,Ki(t,e.current)))}function _M(){var e=Ri.current;return e===null?!0:(ee&4194048)===ee?Qi===null:(ee&62914560)===ee||(ee&536870912)!==0?e===Qi:!1}function vM(){var e=It.H;return It.H=Au,e===null?Au:e}function yM(){var e=It.A;return It.A=S2,e}function ed(){je=4,ar||(ee&4194048)!==ee&&Ri.current!==null||(Gl=!0),(xr&134217727)===0&&(co&134217727)===0||Ae===null||rr(Ae,ee,Mi,!1)}function z0(e,t,n){var i=fe;fe|=2;var s=vM(),a=yM();(Ae!==e||ee!==t)&&(td=null,Ol(e,t)),t=!1;var r=je;t:do try{if(_e!==0&&te!==null){var o=te,l=xi;switch(_e){case 8:C_(),r=6;break t;case 3:case 2:case 9:case 6:Ri.current===null&&(t=!0);var c=_e;if(_e=0,xi=null,yl(e,o,l,c),n&&Gl){r=0;break t}break;default:c=_e,_e=0,xi=null,yl(e,o,l,c)}}T2(),r=je;break}catch(u){gM(e,u)}while(!0);return t&&e.shellSuspendCounter++,ya=xo=null,fe=i,It.H=s,It.A=a,te===null&&(Ae=null,ee=0,md()),r}function T2(){for(;te!==null;)xM(te)}function E2(e,t){var n=fe;fe|=2;var i=vM(),s=yM();Ae!==e||ee!==t?(td=null,$f=Ti()+500,Ol(e,t)):Gl=Pu(e,t);t:do try{if(_e!==0&&te!==null){t=te;var a=xi;e:switch(_e){case 1:_e=0,xi=null,yl(e,t,a,1);break;case 2:case 9:if(uS(a)){_e=0,xi=null,PS(t);break}t=function(){_e!==2&&_e!==9||Ae!==e||(_e=7),zs(e)},a.then(t,t);break t;case 3:_e=7;break t;case 4:_e=5;break t;case 7:uS(a)?(_e=0,xi=null,PS(t)):(_e=0,xi=null,yl(e,t,a,7));break;case 5:var r=null;switch(te.tag){case 26:r=te.memoizedState;case 5:case 27:var o=te;if(r?VM(r):o.stateNode.complete){_e=0,xi=null;var l=o.sibling;if(l!==null)te=l;else{var c=o.return;c!==null?(te=c,Td(c)):te=null}break e}}_e=0,xi=null,yl(e,t,a,5);break;case 6:_e=0,xi=null,yl(e,t,a,6);break;case 8:C_(),je=6;break t;default:throw Error(tt(462))}}A2();break}catch(u){gM(e,u)}while(!0);return ya=xo=null,It.H=i,It.A=s,fe=n,te!==null?0:(Ae=null,ee=0,md(),je)}function A2(){for(;te!==null&&!Jw();)xM(te)}function xM(e){var t=Yb(e.alternate,e,wa);e.memoizedProps=e.pendingProps,t===null?Td(e):te=t}function PS(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=wS(n,t,t.pendingProps,t.type,void 0,ee);break;case 11:t=wS(n,t,t.pendingProps,t.type.render,t.ref,ee);break;case 5:d_(t);default:Zb(n,t),t=te=Z1(t,wa),t=Yb(n,t,wa)}e.memoizedProps=e.pendingProps,t===null?Td(e):te=t}function yl(e,t,n,i){ya=xo=null,d_(t),Tl=null,Tu=0;var s=t.return;try{if(p2(e,s,t,n,ee)){je=1,Kf(e,Ki(n,e.current)),te=null;return}}catch(a){if(s!==null)throw te=s,a;je=1,Kf(e,Ki(n,e.current)),te=null;return}t.flags&32768?(ae||i===1?e=!0:Gl||(ee&536870912)!==0?e=!1:(ar=e=!0,(i===2||i===9||i===3||i===6)&&(i=Ri.current,i!==null&&i.tag===13&&(i.flags|=16384))),SM(t,e)):Td(t)}function Td(e){var t=e;do{if((t.flags&32768)!==0){SM(t,ar);return}e=t.return;var n=_2(t.alternate,t,wa);if(n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);je===0&&(je=5)}function SM(e,t){do{var n=v2(e.alternate,e);if(n!==null){n.flags&=32767,te=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){te=e;return}te=e=n}while(e!==null);je=6,te=null}function OS(e,t,n,i,s,a,r,o,l){e.cancelPendingCommit=null;do Ed();while(dn!==0);if((fe&6)!==0)throw Error(tt(327));if(t!==null){if(t===e.current)throw Error(tt(177));if(a=t.lanes|t.childLanes,a|=$g,aC(e,n,a,r,o,l),e===Ae&&(te=Ae=null,ee=0),Pl=t,dr=e,ba=n,wg=a,Cg=s,dM=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,D2(zf,function(){return AM(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=It.T,It.T=null,s=de.p,de.p=2,r=fe,fe|=4;try{y2(e,t,n)}finally{fe=r,de.p=s,It.T=i}}dn=1,bM(),MM(),TM()}}function bM(){if(dn===1){dn=0;var e=dr,t=Pl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=It.T,It.T=null;var i=de.p;de.p=2;var s=fe;fe|=4;try{aM(t,e);var a=Lg,r=V1(e.containerInfo),o=a.focusedElem,l=a.selectionRange;if(r!==o&&o&&o.ownerDocument&&z1(o.ownerDocument.documentElement,o)){if(l!==null&&Qg(o)){var c=l.start,u=l.end;if(u===void 0&&(u=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(u,o.value.length);else{var d=o.ownerDocument||document,h=d&&d.defaultView||window;if(h.getSelection){var f=h.getSelection(),p=o.textContent.length,_=Math.min(l.start,p),g=l.end===void 0?_:Math.min(l.end,p);!f.extend&&_>g&&(r=g,g=_,_=r);var m=iS(o,_),v=iS(o,g);if(m&&v&&(f.rangeCount!==1||f.anchorNode!==m.node||f.anchorOffset!==m.offset||f.focusNode!==v.node||f.focusOffset!==v.offset)){var S=d.createRange();S.setStart(m.node,m.offset),f.removeAllRanges(),_>g?(f.addRange(S),f.extend(v.node,v.offset)):(S.setEnd(v.node,v.offset),f.addRange(S))}}}}for(d=[],f=o;f=f.parentNode;)f.nodeType===1&&d.push({element:f,left:f.scrollLeft,top:f.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var y=d[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}cd=!!Ng,Lg=Ng=null}finally{fe=s,de.p=i,It.T=n}}e.current=t,dn=2}}function MM(){if(dn===2){dn=0;var e=dr,t=Pl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=It.T,It.T=null;var i=de.p;de.p=2;var s=fe;fe|=4;try{tM(e,t.alternate,t)}finally{fe=s,de.p=i,It.T=n}}dn=3}}function TM(){if(dn===4||dn===3){dn=0,Kw();var e=dr,t=Pl,n=ba,i=dM;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?dn=5:(dn=0,Pl=dr=null,EM(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(fr=null),Wg(n),t=t.stateNode,Ei&&typeof Ei.onCommitFiberRoot=="function")try{Ei.onCommitFiberRoot(Lu,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=It.T,s=de.p,de.p=2,It.T=null;try{for(var a=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];a(o.value,{componentStack:o.stack})}}finally{It.T=t,de.p=s}}(ba&3)!==0&&Ed(),zs(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===Rg?gu++:(gu=0,Rg=e):gu=0,Hu(0,!1)}}function EM(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Fu(t)))}function Ed(){return bM(),MM(),TM(),AM()}function AM(){if(dn!==5)return!1;var e=dr,t=wg;wg=0;var n=Wg(ba),i=It.T,s=de.p;try{de.p=32>n?32:n,It.T=null,n=Cg,Cg=null;var a=dr,r=ba;if(dn=0,Pl=dr=null,ba=0,(fe&6)!==0)throw Error(tt(331));var o=fe;if(fe|=4,uM(a.current),oM(a,a.current,r,n),fe=o,Hu(0,!1),Ei&&typeof Ei.onPostCommitFiberRoot=="function")try{Ei.onPostCommitFiberRoot(Lu,a)}catch{}return!0}finally{de.p=s,It.T=i,EM(e,t)}}function IS(e,t,n){t=Ki(n,t),t=bg(e.stateNode,t,2),e=hr(e,t,2),e!==null&&(Ou(e,2),zs(e))}function ve(e,t,n){if(e.tag===3)IS(e,e,n);else for(;t!==null;){if(t.tag===3){IS(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(fr===null||!fr.has(i))){e=Ki(n,e),n=Hb(2),i=hr(t,n,2),i!==null&&(Gb(n,i,t,e),Ou(i,2),zs(i));break}}t=t.return}}function V0(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new b2;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(A_=!0,s.add(n),e=w2.bind(null,e,t,n),t.then(e,e))}function w2(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ae===e&&(ee&n)===n&&(je===4||je===3&&(ee&62914560)===ee&&300>Ti()-bd?(fe&2)===0&&Ol(e,0):w_|=n,Ll===ee&&(Ll=0)),zs(e)}function wM(e,t){t===0&&(t=v1()),e=yo(e,t),e!==null&&(Ou(e,t),zs(e))}function C2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),wM(e,n)}function R2(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(tt(314))}i!==null&&i.delete(t),wM(e,n)}function D2(e,t){return kg(e,t)}var nd=null,ol=null,Dg=!1,id=!1,H0=!1,or=0;function zs(e){e!==ol&&e.next===null&&(ol===null?nd=ol=e:ol=ol.next=e),id=!0,Dg||(Dg=!0,N2())}function Hu(e,t){if(!H0&&id){H0=!0;do for(var n=!1,i=nd;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-Ai(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,BS(i,a))}else a=ee,a=hd(i,i===Ae?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||Pu(i,a)||(n=!0,BS(i,a));i=i.next}while(n);H0=!1}}function U2(){CM()}function CM(){id=Dg=!1;var e=0;or!==0&&V2()&&(e=or);for(var t=Ti(),n=null,i=nd;i!==null;){var s=i.next,a=RM(i,t);a===0?(i.next=null,n===null?nd=s:n.next=s,s===null&&(ol=n)):(n=i,(e!==0||(a&3)!==0)&&(id=!0)),i=s}dn!==0&&dn!==5||Hu(e,!1),or!==0&&(or=0)}function RM(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-Ai(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=sC(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=Ae,n=ee,n=hd(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(_e===2||_e===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&g0(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Pu(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&g0(i),Wg(n)){case 2:case 8:n=g1;break;case 32:n=zf;break;case 268435456:n=_1;break;default:n=zf}return i=DM.bind(null,e),n=kg(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&g0(i),e.callbackPriority=2,e.callbackNode=null,2}function DM(e,t){if(dn!==0&&dn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ed()&&e.callbackNode!==n)return null;var i=ee;return i=hd(e,e===Ae?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(mM(e,i,t),RM(e,Ti()),e.callbackNode!=null&&e.callbackNode===n?DM.bind(null,e):null)}function BS(e,t){if(Ed())return null;mM(e,t,!0)}function N2(){G2(function(){(fe&6)!==0?kg(m1,U2):CM()})}function R_(){if(or===0){var e=Dl;e===0&&(e=sf,sf<<=1,(sf&261888)===0&&(sf=256)),or=e}return or}function FS(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:bf(""+e)}function zS(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function L2(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=FS((s[ci]||null).action),r=i.submitter;r&&(t=(t=r[ci]||null)?FS(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new fd("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(or!==0){var l=r?zS(s,r):new FormData(s);xg(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=r?zS(s,r):new FormData(s),xg(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(gf=0;gf<lg.length;gf++)_f=lg[gf],VS=_f.toLowerCase(),HS=_f[0].toUpperCase()+_f.slice(1),_s(VS,"on"+HS);var _f,VS,HS,gf;_s(G1,"onAnimationEnd");_s(k1,"onAnimationIteration");_s(X1,"onAnimationStart");_s("dblclick","onDoubleClick");_s("focusin","onFocus");_s("focusout","onBlur");_s(jC,"onTransitionRun");_s(QC,"onTransitionStart");_s($C,"onTransitionCancel");_s(W1,"onTransitionEnd");Cl("onMouseEnter",["mouseout","mouseover"]);Cl("onMouseLeave",["mouseout","mouseover"]);Cl("onPointerEnter",["pointerout","pointerover"]);Cl("onPointerLeave",["pointerout","pointerover"]);go("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));go("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));go("onBeforeInput",["compositionend","keypress","textInput","paste"]);go("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));go("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));go("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),P2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wu));function UM(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(u){Hf(u)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(u){Hf(u)}s.currentTarget=null,a=l}}}}function $t(e,t){var n=t[tg];n===void 0&&(n=t[tg]=new Set);var i=e+"__bubble";n.has(i)||(NM(t,e,2,!1),n.add(i))}function G0(e,t,n){var i=0;t&&(i|=4),NM(n,e,i,t)}var vf="_reactListening"+Math.random().toString(36).slice(2);function D_(e){if(!e[vf]){e[vf]=!0,M1.forEach(function(n){n!=="selectionchange"&&(P2.has(n)||G0(n,!1,e),G0(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vf]||(t[vf]=!0,G0("selectionchange",!1,t))}}function NM(e,t,n,i){switch(WM(t)){case 2:var s=lR;break;case 8:s=cR;break;default:s=P_}n=s.bind(null,t,n,e),s=void 0,!ag||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function k0(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=ul(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}U1(function(){var c=a,u=Zg(n),d=[];t:{var h=q1.get(e);if(h!==void 0){var f=fd,p=e;switch(e){case"keypress":if(Tf(n)===0)break t;case"keydown":case"keyup":f=RC;break;case"focusin":p="focus",f=S0;break;case"focusout":p="blur",f=S0;break;case"beforeblur":case"afterblur":f=S0;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Zx;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=_C;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=NC;break;case G1:case k1:case X1:f=xC;break;case W1:f=PC;break;case"scroll":case"scrollend":f=mC;break;case"wheel":f=IC;break;case"copy":case"cut":case"paste":f=bC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Kx;break;case"toggle":case"beforetoggle":f=FC}var _=(t&4)!==0,g=!_&&(e==="scroll"||e==="scrollend"),m=_?h!==null?h+"Capture":null:h;_=[];for(var v=c,S;v!==null;){var y=v;if(S=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||S===null||m===null||(y=yu(v,m),y!=null&&_.push(Cu(v,y,S))),g)break;v=v.return}0<_.length&&(h=new f(h,p,null,n,u),d.push({event:h,listeners:_}))}}if((t&7)===0){t:{if(h=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",h&&n!==sg&&(p=n.relatedTarget||n.fromElement)&&(ul(p)||p[Fl]))break t;if((f||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,f?(p=n.relatedTarget||n.toElement,f=c,p=p?ul(p):null,p!==null&&(g=Nu(p),_=p.tag,p!==g||_!==5&&_!==27&&_!==6)&&(p=null)):(f=null,p=c),f!==p)){if(_=Zx,y="onMouseLeave",m="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(_=Kx,y="onPointerLeave",m="onPointerEnter",v="pointer"),g=f==null?h:nu(f),S=p==null?h:nu(p),h=new _(y,v+"leave",f,n,u),h.target=g,h.relatedTarget=S,y=null,ul(u)===c&&(_=new _(m,v+"enter",p,n,u),_.target=S,_.relatedTarget=g,y=_),g=y,f&&p)e:{for(_=O2,m=f,v=p,S=0,y=m;y;y=_(y))S++;y=0;for(var E=v;E;E=_(E))y++;for(;0<S-y;)m=_(m),S--;for(;0<y-S;)v=_(v),y--;for(;S--;){if(m===v||v!==null&&m===v.alternate){_=m;break e}m=_(m),v=_(v)}_=null}else _=null;f!==null&&GS(d,h,f,_,!1),p!==null&&g!==null&&GS(d,g,p,_,!0)}}t:{if(h=c?nu(c):window,f=h.nodeName&&h.nodeName.toLowerCase(),f==="select"||f==="input"&&h.type==="file")var A=tS;else if($x(h))if(B1)A=ZC;else{A=qC;var M=WC}else f=h.nodeName,!f||f.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?c&&Yg(c.elementType)&&(A=tS):A=YC;if(A&&(A=A(e,c))){I1(d,A,n,u);break t}M&&M(e,h,c),e==="focusout"&&c&&h.type==="number"&&c.memoizedProps.value!=null&&ig(h,"number",h.value)}switch(M=c?nu(c):window,e){case"focusin":($x(M)||M.contentEditable==="true")&&(dl=M,rg=c,ou=null);break;case"focusout":ou=rg=dl=null;break;case"mousedown":og=!0;break;case"contextmenu":case"mouseup":case"dragend":og=!1,sS(d,n,u);break;case"selectionchange":if(KC)break;case"keydown":case"keyup":sS(d,n,u)}var x;if(jg)t:{switch(e){case"compositionstart":var T="onCompositionStart";break t;case"compositionend":T="onCompositionEnd";break t;case"compositionupdate":T="onCompositionUpdate";break t}T=void 0}else fl?P1(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(L1&&n.locale!=="ko"&&(fl||T!=="onCompositionStart"?T==="onCompositionEnd"&&fl&&(x=N1()):(sr=u,Jg="value"in sr?sr.value:sr.textContent,fl=!0)),M=sd(c,T),0<M.length&&(T=new Jx(T,e,null,n,u),d.push({event:T,listeners:M}),x?T.data=x:(x=O1(n),x!==null&&(T.data=x)))),(x=VC?HC(e,n):GC(e,n))&&(T=sd(c,"onBeforeInput"),0<T.length&&(M=new Jx("onBeforeInput","beforeinput",null,n,u),d.push({event:M,listeners:T}),M.data=x)),L2(d,e,c,n,u)}UM(d,t)})}function Cu(e,t,n){return{instance:e,listener:t,currentTarget:n}}function sd(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=yu(e,n),s!=null&&i.unshift(Cu(e,s,a)),s=yu(e,t),s!=null&&i.push(Cu(e,s,a))),e.tag===3)return i;e=e.return}return[]}function O2(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function GS(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=yu(n,a),c!=null&&r.unshift(Cu(n,c,l))):s||(c=yu(n,a),c!=null&&r.push(Cu(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var I2=/\r\n?/g,B2=/\u0000|\uFFFD/g;function kS(e){return(typeof e=="string"?e:""+e).replace(I2,`
`).replace(B2,"")}function LM(e,t){return t=kS(t),kS(e)===t}function be(e,t,n,i,s,a){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Rl(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Rl(e,""+i);break;case"className":of(e,"class",i);break;case"tabIndex":of(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":of(e,n,i);break;case"style":D1(e,i,a);break;case"data":if(t!=="object"){of(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=bf(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&be(e,t,"name",s.name,s,null),be(e,t,"formEncType",s.formEncType,s,null),be(e,t,"formMethod",s.formMethod,s,null),be(e,t,"formTarget",s.formTarget,s,null)):(be(e,t,"encType",s.encType,s,null),be(e,t,"method",s.method,s,null),be(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=bf(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=va);break;case"onScroll":i!=null&&$t("scroll",e);break;case"onScrollEnd":i!=null&&$t("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(tt(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(tt(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=bf(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":$t("beforetoggle",e),$t("toggle",e),Sf(e,"popover",i);break;case"xlinkActuate":ua(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":ua(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":ua(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":ua(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":ua(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":ua(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":ua(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":ua(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":ua(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Sf(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=dC.get(n)||n,Sf(e,n,i))}}function Ug(e,t,n,i,s,a){switch(n){case"style":D1(e,i,a);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(tt(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(tt(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Rl(e,i):(typeof i=="number"||typeof i=="bigint")&&Rl(e,""+i);break;case"onScroll":i!=null&&$t("scroll",e);break;case"onScrollEnd":i!=null&&$t("scrollend",e);break;case"onClick":i!=null&&(e.onclick=va);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!T1.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),a=e[ci]||null,a=a!=null?a[n]:null,typeof a=="function"&&e.removeEventListener(t,a,s),typeof i=="function")){typeof a!="function"&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Sf(e,n,i)}}}function Ln(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":$t("error",e),$t("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(tt(137,t));default:be(e,t,a,r,n,null)}}s&&be(e,t,"srcSet",n.srcSet,n,null),i&&be(e,t,"src",n.src,n,null);return;case"input":$t("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var u=n[i];if(u!=null)switch(i){case"name":s=u;break;case"type":r=u;break;case"checked":l=u;break;case"defaultChecked":c=u;break;case"value":a=u;break;case"defaultValue":o=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(tt(137,t));break;default:be(e,t,i,u,n,null)}}w1(e,a,o,l,c,r,s,!1);return;case"select":$t("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:be(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?Sl(e,!!i,t,!1):n!=null&&Sl(e,!!i,n,!0);return;case"textarea":$t("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(tt(91));break;default:be(e,t,r,o,n,null)}R1(e,i,s,a);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:be(e,t,l,i,n,null)}return;case"dialog":$t("beforetoggle",e),$t("toggle",e),$t("cancel",e),$t("close",e);break;case"iframe":case"object":$t("load",e);break;case"video":case"audio":for(i=0;i<wu.length;i++)$t(wu[i],e);break;case"image":$t("error",e),$t("load",e);break;case"details":$t("toggle",e);break;case"embed":case"source":case"link":$t("error",e),$t("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(tt(137,t));default:be(e,t,c,i,n,null)}return;default:if(Yg(t)){for(u in n)n.hasOwnProperty(u)&&(i=n[u],i!==void 0&&Ug(e,t,u,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&be(e,t,o,i,n,null))}function F2(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,u=null;for(f in n){var d=n[f];if(n.hasOwnProperty(f)&&d!=null)switch(f){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(f)||be(e,t,f,null,i,d)}}for(var h in i){var f=i[h];if(d=n[h],i.hasOwnProperty(h)&&(f!=null||d!=null))switch(h){case"type":a=f;break;case"name":s=f;break;case"checked":c=f;break;case"defaultChecked":u=f;break;case"value":r=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(tt(137,t));break;default:f!==d&&be(e,t,h,f,i,d)}}ng(e,r,o,l,c,u,a,s);return;case"select":f=r=o=h=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":f=l;default:i.hasOwnProperty(a)||be(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":h=a;break;case"defaultValue":o=a;break;case"multiple":r=a;default:a!==l&&be(e,t,s,a,i,l)}t=o,n=r,i=f,h!=null?Sl(e,!!n,h,!1):!!i!=!!n&&(t!=null?Sl(e,!!n,t,!0):Sl(e,!!n,n?[]:"",!1));return;case"textarea":f=h=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:be(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":h=s;break;case"defaultValue":f=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(tt(91));break;default:s!==a&&be(e,t,r,s,i,a)}C1(e,h,f);return;case"option":for(var p in n)if(h=n[p],n.hasOwnProperty(p)&&h!=null&&!i.hasOwnProperty(p))switch(p){case"selected":e.selected=!1;break;default:be(e,t,p,null,i,h)}for(l in i)if(h=i[l],f=n[l],i.hasOwnProperty(l)&&h!==f&&(h!=null||f!=null))switch(l){case"selected":e.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:be(e,t,l,h,i,f)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _ in n)h=n[_],n.hasOwnProperty(_)&&h!=null&&!i.hasOwnProperty(_)&&be(e,t,_,null,i,h);for(c in i)if(h=i[c],f=n[c],i.hasOwnProperty(c)&&h!==f&&(h!=null||f!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(tt(137,t));break;default:be(e,t,c,h,i,f)}return;default:if(Yg(t)){for(var g in n)h=n[g],n.hasOwnProperty(g)&&h!==void 0&&!i.hasOwnProperty(g)&&Ug(e,t,g,void 0,i,h);for(u in i)h=i[u],f=n[u],!i.hasOwnProperty(u)||h===f||h===void 0&&f===void 0||Ug(e,t,u,h,i,f);return}}for(var m in n)h=n[m],n.hasOwnProperty(m)&&h!=null&&!i.hasOwnProperty(m)&&be(e,t,m,null,i,h);for(d in i)h=i[d],f=n[d],!i.hasOwnProperty(d)||h===f||h==null&&f==null||be(e,t,d,h,i,f)}function XS(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function z2(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&XS(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var u=l.transferSize,d=l.initiatorType;u&&XS(d)&&(l=l.responseEnd,r+=u*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ng=null,Lg=null;function ad(e){return e.nodeType===9?e:e.ownerDocument}function WS(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function PM(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Pg(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var X0=null;function V2(){var e=window.event;return e&&e.type==="popstate"?e===X0?!1:(X0=e,!0):(X0=null,!1)}var OM=typeof setTimeout=="function"?setTimeout:void 0,H2=typeof clearTimeout=="function"?clearTimeout:void 0,qS=typeof Promise=="function"?Promise:void 0,G2=typeof queueMicrotask=="function"?queueMicrotask:typeof qS<"u"?function(e){return qS.resolve(null).then(e).catch(k2)}:OM;function k2(e){setTimeout(function(){throw e})}function br(e){return e==="head"}function YS(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),Bl(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")_u(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,_u(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[Iu]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&_u(e.ownerDocument.body);n=s}while(n);Bl(t)}function ZS(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Og(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Og(n),qg(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function X2(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Iu])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=$i(e.nextSibling),e===null)break}return null}function W2(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=$i(e.nextSibling),e===null))return null;return e}function IM(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=$i(e.nextSibling),e===null))return null;return e}function Ig(e){return e.data==="$?"||e.data==="$~"}function Bg(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function q2(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function $i(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Fg=null;function JS(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return $i(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function KS(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function BM(e,t,n){switch(t=ad(n),e){case"html":if(e=t.documentElement,!e)throw Error(tt(452));return e;case"head":if(e=t.head,!e)throw Error(tt(453));return e;case"body":if(e=t.body,!e)throw Error(tt(454));return e;default:throw Error(tt(451))}}function _u(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);qg(e)}var ts=new Map,jS=new Set;function rd(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ca=de.d;de.d={f:Y2,r:Z2,D:J2,C:K2,L:j2,m:Q2,X:tR,S:$2,M:eR};function Y2(){var e=Ca.f(),t=Md();return e||t}function Z2(e){var t=zl(e);t!==null&&t.tag===5&&t.type==="form"?Db(t):Ca.r(e)}var kl=typeof document>"u"?null:document;function FM(e,t,n){var i=kl;if(i&&typeof t=="string"&&t){var s=Ji(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),jS.has(s)||(jS.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),Ln(t,"link",e),Mn(t),i.head.appendChild(t)))}}function J2(e){Ca.D(e),FM("dns-prefetch",e,null)}function K2(e,t){Ca.C(e,t),FM("preconnect",e,t)}function j2(e,t,n){Ca.L(e,t,n);var i=kl;if(i&&e&&t){var s='link[rel="preload"][as="'+Ji(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+Ji(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+Ji(n.imageSizes)+'"]')):s+='[href="'+Ji(e)+'"]';var a=s;switch(t){case"style":a=Il(e);break;case"script":a=Xl(e)}ts.has(a)||(e=Oe({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ts.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(Gu(a))||t==="script"&&i.querySelector(ku(a))||(t=i.createElement("link"),Ln(t,"link",e),Mn(t),i.head.appendChild(t)))}}function Q2(e,t){Ca.m(e,t);var n=kl;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+Ji(i)+'"][href="'+Ji(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Xl(e)}if(!ts.has(a)&&(e=Oe({rel:"modulepreload",href:e},t),ts.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ku(a)))return}i=n.createElement("link"),Ln(i,"link",e),Mn(i),n.head.appendChild(i)}}}function $2(e,t,n){Ca.S(e,t,n);var i=kl;if(i&&e){var s=xl(i).hoistableStyles,a=Il(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Gu(a)))o.loading=5;else{e=Oe({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ts.get(a))&&U_(e,n);var l=r=i.createElement("link");Mn(l),Ln(l,"link",e),l._p=new Promise(function(c,u){l.onload=c,l.onerror=u}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Nf(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function tR(e,t){Ca.X(e,t);var n=kl;if(n&&e){var i=xl(n).hoistableScripts,s=Xl(e),a=i.get(s);a||(a=n.querySelector(ku(s)),a||(e=Oe({src:e,async:!0},t),(t=ts.get(s))&&N_(e,t),a=n.createElement("script"),Mn(a),Ln(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function eR(e,t){Ca.M(e,t);var n=kl;if(n&&e){var i=xl(n).hoistableScripts,s=Xl(e),a=i.get(s);a||(a=n.querySelector(ku(s)),a||(e=Oe({src:e,async:!0,type:"module"},t),(t=ts.get(s))&&N_(e,t),a=n.createElement("script"),Mn(a),Ln(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function QS(e,t,n,i){var s=(s=lr.current)?rd(s):null;if(!s)throw Error(tt(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Il(n.href),n=xl(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Il(n.href);var a=xl(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(Gu(e)))&&!a._p&&(r.instance=a,r.state.loading=5),ts.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ts.set(e,n),a||nR(s,e,n,r.state))),t&&i===null)throw Error(tt(528,""));return r}if(t&&i!==null)throw Error(tt(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Xl(n),n=xl(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(tt(444,e))}}function Il(e){return'href="'+Ji(e)+'"'}function Gu(e){return'link[rel="stylesheet"]['+e+"]"}function zM(e){return Oe({},e,{"data-precedence":e.precedence,precedence:null})}function nR(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),Ln(t,"link",n),Mn(t),e.head.appendChild(t))}function Xl(e){return'[src="'+Ji(e)+'"]'}function ku(e){return"script[async]"+e}function $S(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Ji(n.href)+'"]');if(i)return t.instance=i,Mn(i),i;var s=Oe({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Mn(i),Ln(i,"style",s),Nf(i,n.precedence,e),t.instance=i;case"stylesheet":s=Il(n.href);var a=e.querySelector(Gu(s));if(a)return t.state.loading|=4,t.instance=a,Mn(a),a;i=zM(n),(s=ts.get(s))&&U_(i,s),a=(e.ownerDocument||e).createElement("link"),Mn(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),Ln(a,"link",i),t.state.loading|=4,Nf(a,n.precedence,e),t.instance=a;case"script":return a=Xl(n.src),(s=e.querySelector(ku(a)))?(t.instance=s,Mn(s),s):(i=n,(s=ts.get(a))&&(i=Oe({},n),N_(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),Mn(s),Ln(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(tt(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Nf(i,n.precedence,e));return t.instance}function Nf(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function U_(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function N_(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Lf=null;function t1(e,t,n){if(Lf===null){var i=new Map,s=Lf=new Map;s.set(n,i)}else s=Lf,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[Iu]||a[Dn]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function e1(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function iR(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function VM(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function sR(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=Il(i.href),a=t.querySelector(Gu(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=od.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Mn(a);return}a=t.ownerDocument||t,i=zM(i),(s=ts.get(s))&&U_(i,s),a=a.createElement("link"),Mn(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),Ln(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=od.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var W0=0;function aR(e,t){return e.stylesheets&&e.count===0&&Pf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Pf(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&W0===0&&(W0=62500*z2());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Pf(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>W0?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function od(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Pf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ld=null;function Pf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ld=new Map,t.forEach(rR,e),ld=null,od.call(e))}function rR(e,t){if(!(t.state.loading&4)){var n=ld.get(e);if(n)var i=n.get(null);else{n=new Map,ld.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=od.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var Ru={$$typeof:_a,Provider:null,Consumer:null,_currentValue:ao,_currentValue2:ao,_threadCount:0};function oR(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_0(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_0(0),this.hiddenUpdates=_0(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function HM(e,t,n,i,s,a,r,o,l,c,u,d){return e=new oR(e,t,n,r,l,c,u,d,o),t=1,a===!0&&(t|=24),a=bi(3,null,null,t),e.current=a,a.stateNode=e,t=s_(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},o_(a),e}function GM(e){return e?(e=gl,e):gl}function kM(e,t,n,i,s,a){s=GM(s),i.context===null?i.context=s:i.pendingContext=s,i=ur(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=hr(e,i,t),n!==null&&(li(n,e,t),cu(n,e,t))}function n1(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function L_(e,t){n1(e,t),(e=e.alternate)&&n1(e,t)}function XM(e){if(e.tag===13||e.tag===31){var t=yo(e,67108864);t!==null&&li(t,e,67108864),L_(e,67108864)}}function i1(e){if(e.tag===13||e.tag===31){var t=wi();t=Xg(t);var n=yo(e,t);n!==null&&li(n,e,t),L_(e,t)}}var cd=!0;function lR(e,t,n,i){var s=It.T;It.T=null;var a=de.p;try{de.p=2,P_(e,t,n,i)}finally{de.p=a,It.T=s}}function cR(e,t,n,i){var s=It.T;It.T=null;var a=de.p;try{de.p=8,P_(e,t,n,i)}finally{de.p=a,It.T=s}}function P_(e,t,n,i){if(cd){var s=zg(i);if(s===null)k0(e,t,i,ud,n),s1(e,i);else if(hR(s,e,t,n,i))i.stopPropagation();else if(s1(e,i),t&4&&-1<uR.indexOf(e)){for(;s!==null;){var a=zl(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=no(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Ai(r);o.entanglements[1]|=l,r&=~l}zs(a),(fe&6)===0&&($f=Ti()+500,Hu(0,!1))}}break;case 31:case 13:o=yo(a,2),o!==null&&li(o,a,2),Md(),L_(a,2)}if(a=zg(i),a===null&&k0(e,t,i,ud,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else k0(e,t,i,null,n)}}function zg(e){return e=Zg(e),O_(e)}var ud=null;function O_(e){if(ud=null,e=ul(e),e!==null){var t=Nu(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u1(t),e!==null)return e;e=null}else if(n===31){if(e=h1(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ud=e,null}function WM(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(jw()){case m1:return 2;case g1:return 8;case zf:case Qw:return 32;case _1:return 268435456;default:return 32}default:return 32}}var Vg=!1,pr=null,mr=null,gr=null,Du=new Map,Uu=new Map,nr=[],uR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function s1(e,t){switch(e){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":Du.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uu.delete(t.pointerId)}}function Qc(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=zl(t),t!==null&&XM(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function hR(e,t,n,i,s){switch(t){case"focusin":return pr=Qc(pr,e,t,n,i,s),!0;case"dragenter":return mr=Qc(mr,e,t,n,i,s),!0;case"mouseover":return gr=Qc(gr,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return Du.set(a,Qc(Du.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,Uu.set(a,Qc(Uu.get(a)||null,e,t,n,i,s)),!0}return!1}function qM(e){var t=ul(e.target);if(t!==null){var n=Nu(t);if(n!==null){if(t=n.tag,t===13){if(t=u1(n),t!==null){e.blockedOn=t,Hx(e.priority,function(){i1(n)});return}}else if(t===31){if(t=h1(n),t!==null){e.blockedOn=t,Hx(e.priority,function(){i1(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Of(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zg(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);sg=i,n.target.dispatchEvent(i),sg=null}else return t=zl(n),t!==null&&XM(t),e.blockedOn=n,!1;t.shift()}return!0}function a1(e,t,n){Of(e)&&n.delete(t)}function fR(){Vg=!1,pr!==null&&Of(pr)&&(pr=null),mr!==null&&Of(mr)&&(mr=null),gr!==null&&Of(gr)&&(gr=null),Du.forEach(a1),Uu.forEach(a1)}function yf(e,t){e.blockedOn===t&&(e.blockedOn=null,Vg||(Vg=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,fR)))}var xf=null;function r1(e){xf!==e&&(xf=e,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,function(){xf===e&&(xf=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(O_(i||n)===null)continue;break}var a=zl(n);a!==null&&(e.splice(t,3),t-=3,xg(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function Bl(e){function t(l){return yf(l,e)}pr!==null&&yf(pr,e),mr!==null&&yf(mr,e),gr!==null&&yf(gr,e),Du.forEach(t),Uu.forEach(t);for(var n=0;n<nr.length;n++){var i=nr[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<nr.length&&(n=nr[0],n.blockedOn===null);)qM(n),n.blockedOn===null&&nr.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[ci]||null;if(typeof a=="function")r||r1(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[ci]||null)o=r.formAction;else if(O_(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),r1(n)}}}function YM(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function I_(e){this._internalRoot=e}Ad.prototype.render=I_.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(tt(409));var n=t.current,i=wi();kM(n,i,e,t,null,null)};Ad.prototype.unmount=I_.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;kM(e.current,2,null,e,null,null),Md(),t[Fl]=null}};function Ad(e){this._internalRoot=e}Ad.prototype.unstable_scheduleHydration=function(e){if(e){var t=b1();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nr.length&&t!==0&&t<nr[n].priority;n++);nr.splice(n,0,e),n===0&&qM(e)}};var o1=l1.version;if(o1!=="19.2.0")throw Error(tt(527,o1,"19.2.0"));de.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(tt(188)):(e=Object.keys(e).join(","),Error(tt(268,e)));return e=Xw(t),e=e!==null?f1(e):null,e=e===null?null:e.stateNode,e};var dR={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:It,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&($c=__REACT_DEVTOOLS_GLOBAL_HOOK__,!$c.isDisabled&&$c.supportsFiber))try{Lu=$c.inject(dR),Ei=$c}catch{}var $c;wd.createRoot=function(e,t){if(!c1(e))throw Error(tt(299));var n=!1,i="",s=Fb,a=zb,r=Vb;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=HM(e,1,!1,null,null,n,i,null,s,a,r,YM),e[Fl]=t.current,D_(e),new I_(t)};wd.hydrateRoot=function(e,t,n){if(!c1(e))throw Error(tt(299));var i=!1,s="",a=Fb,r=zb,o=Vb,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=HM(e,1,!0,t,n??null,i,s,l,a,r,o,YM),t.context=GM(null),n=t.current,i=wi(),i=Xg(i),s=ur(i),s.callback=null,hr(n,s,i),n=i,t.current.lanes=n,Ou(t,n),zs(t),e[Fl]=t.current,D_(e),new Ad(t)};wd.version="19.2.0"});var jM=Ns((jO,KM)=>{"use strict";function JM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(JM)}catch(e){console.error(e)}}JM(),KM.exports=ZM()});var rw=Ns(Gm=>{"use strict";var FO=Symbol.for("react.transitional.element"),zO=Symbol.for("react.fragment");function aw(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:FO,type:e,key:i,ref:t!==void 0?t:null,props:n}}Gm.Fragment=zO;Gm.jsx=aw;Gm.jsxs=aw});var Hh=Ns((h4,ow)=>{"use strict";ow.exports=rw()});var Gi=$r(Gc(),1),cw=$r(jM(),1);var na=$r(Gc(),1);var vT=0,fv=1,yT=2;var fh=1,xT=2,pc=3,Ia=0,$n=1,qs=2,Ys=0,wo=1,dv=2,pv=3,mv=4,ST=5;var Dr=100,bT=101,MT=102,TT=103,ET=104,AT=200,wT=201,CT=202,RT=203,Kd=204,jd=205,DT=206,UT=207,NT=208,LT=209,PT=210,OT=211,IT=212,BT=213,FT=214,Qd=0,$d=1,tp=2,Co=3,ep=4,np=5,ip=6,sp=7,gv=0,zT=1,VT=2,Ts=0,_v=1,vv=2,yv=3,xv=4,Sv=5,bv=6,Mv=7;var Tv=300,Ir=301,No=302,Rp=303,Dp=304,dh=306,ap=1e3,Li=1001,rp=1002,An=1003,HT=1004;var ph=1005;var Te=1006,Up=1007;var Zs=1008;var Bi=1009,Ev=1010,Av=1011,mc=1012,Np=1013,Es=1014,As=1015,Js=1016,Lp=1017,Pp=1018,gc=1020,wv=35902,Cv=35899,Rv=1021,Dv=1022,ss=1023,Gs=1026,Br=1027,Uv=1028,Op=1029,Fr=1030,Ip=1031;var Bp=1033,mh=33776,gh=33777,_h=33778,vh=33779,Fp=35840,zp=35841,Vp=35842,Hp=35843,Gp=36196,kp=37492,Xp=37496,Wp=37488,qp=37489,yh=37490,Yp=37491,Zp=37808,Jp=37809,Kp=37810,jp=37811,Qp=37812,$p=37813,tm=37814,em=37815,nm=37816,im=37817,sm=37818,am=37819,rm=37820,om=37821,lm=36492,cm=36494,um=36495,hm=36283,fm=36284,xh=36285,dm=36286;var Ku=2300,op=2301,Zd=2302,sv=2303,av=2400,rv=2401,ov=2402;var GT=3200;var Nv=0,kT=1,gn="",Ni="srgb",ju="srgb-linear",Qu="linear",me="srgb";var Eo=7680;var lv=519,XT=512,WT=513,qT=514,pm=515,YT=516,ZT=517,mm=518,JT=519,cv=35044;var Lv="300 es",Ss=2e3,$u=2001;function pR(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function mR(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function rc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function KT(){let e=rc("canvas");return e.style.display="block",e}var QM={},oc=null;function Pv(...e){let t="THREE."+e.shift();oc?oc("log",t,...e):console.log(t,...e)}function jT(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Nt(...e){e=jT(e);let t="THREE."+e.shift();if(oc)oc("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Ot(...e){e=jT(e);let t="THREE."+e.shift();if(oc)oc("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Ao(...e){let t=e.join(" ");t in QM||(QM[t]=!0,Nt(...e))}function QT(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var $T={[Qd]:$d,[tp]:ip,[ep]:sp,[Co]:np,[$d]:Qd,[ip]:tp,[sp]:ep,[np]:Co},ks=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$M=1234567,Zu=Math.PI/180,lc=180/Math.PI;function _c(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Hn[e&255]+Hn[e>>8&255]+Hn[e>>16&255]+Hn[e>>24&255]+"-"+Hn[t&255]+Hn[t>>8&255]+"-"+Hn[t>>16&15|64]+Hn[t>>24&255]+"-"+Hn[n&63|128]+Hn[n>>8&255]+"-"+Hn[n>>16&255]+Hn[n>>24&255]+Hn[i&255]+Hn[i>>8&255]+Hn[i>>16&255]+Hn[i>>24&255]).toLowerCase()}function ie(e,t,n){return Math.max(t,Math.min(n,e))}function Ov(e,t){return(e%t+t)%t}function gR(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function _R(e,t,n){return e!==t?(n-e)/(t-e):0}function Ju(e,t,n){return(1-n)*e+n*t}function vR(e,t,n,i){return Ju(e,t,1-Math.exp(-n*i))}function yR(e,t=1){return t-Math.abs(Ov(e,t*2)-t)}function xR(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function SR(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function bR(e,t){return e+Math.floor(Math.random()*(t-e+1))}function MR(e,t){return e+Math.random()*(t-e)}function TR(e){return e*(.5-Math.random())}function ER(e){e!==void 0&&($M=e);let t=$M+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function AR(e){return e*Zu}function wR(e){return e*lc}function CR(e){return(e&e-1)===0&&e!==0}function RR(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function DR(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function UR(e,t,n,i,s){let a=Math.cos,r=Math.sin,o=a(n/2),l=r(n/2),c=a((t+i)/2),u=r((t+i)/2),d=a((t-i)/2),h=r((t-i)/2),f=a((i-t)/2),p=r((i-t)/2);switch(s){case"XYX":e.set(o*u,l*d,l*h,o*c);break;case"YZY":e.set(l*h,o*u,l*d,o*c);break;case"ZXZ":e.set(l*d,l*h,o*u,o*c);break;case"XZX":e.set(o*u,l*p,l*f,o*c);break;case"YXY":e.set(l*f,o*u,l*p,o*c);break;case"ZYZ":e.set(l*p,l*f,o*u,o*c);break;default:Nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function sc(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Iv={DEG2RAD:Zu,RAD2DEG:lc,generateUUID:_c,clamp:ie,euclideanModulo:Ov,mapLinear:gR,inverseLerp:_R,lerp:Ju,damp:vR,pingpong:yR,smoothstep:xR,smootherstep:SR,randInt:bR,randFloat:MR,randFloatSpread:TR,seededRandom:ER,degToRad:AR,radToDeg:wR,isPowerOfTwo:CR,ceilPowerOfTwo:RR,floorPowerOfTwo:DR,setQuaternionFromProperEuler:UR,normalize:Qn,denormalize:sc},Hv=class Hv{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ie(this.x,t.x,n.x),this.y=ie(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ie(this.x,t,n),this.y=ie(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Hv.prototype.isVector2=!0;var kt=Hv,Xs=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=a[r+0],f=a[r+1],p=a[r+2],_=a[r+3];if(d!==_||l!==h||c!==f||u!==p){let g=l*h+c*f+u*p+d*_;g<0&&(h=-h,f=-f,p=-p,_=-_,g=-g);let m=1-o;if(g<.9995){let v=Math.acos(g),S=Math.sin(v);m=Math.sin(m*v)/S,o=Math.sin(o*v)/S,l=l*m+h*o,c=c*m+f*o,u=u*m+p*o,d=d*m+_*o}else{l=l*m+h*o,c=c*m+f*o,u=u*m+p*o,d=d*m+_*o;let v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}t[n]=l,t[n+1]=c,t[n+2]=u,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=a[r],h=a[r+1],f=a[r+2],p=a[r+3];return t[n]=o*p+u*d+l*f-c*h,t[n+1]=l*p+u*h+c*d-o*f,t[n+2]=c*p+u*f+o*h-l*d,t[n+3]=u*p-o*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(a/2),h=l(i/2),f=l(s/2),p=l(a/2);switch(r){case"XYZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"YZX":this._x=h*u*d+c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d-h*f*p;break;case"XZY":this._x=h*u*d-c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d+h*f*p;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(a-c)*f,this._z=(r-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(a+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(a-c)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(r-s)/f,this._x=(a+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+r*o+s*c-a*l,this._y=s*u+r*l+a*o-i*c,this._z=a*u+r*c+i*l-s*o,this._w=r*u-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Gv=class Gv{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(tT.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(tT.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),u=2*(o*n-a*s),d=2*(a*i-r*n);return this.x=n+l*c+r*d-o*u,this.y=i+l*u+o*c-a*d,this.z=s+l*d+a*u-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ie(this.x,t.x,n.x),this.y=ie(this.y,t.y,n.y),this.z=ie(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ie(this.x,t,n),this.y=ie(this.y,t,n),this.z=ie(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return B_.copy(this).projectOnVector(t),this.sub(B_)}reflect(t){return this.sub(B_.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Gv.prototype.isVector3=!0;var X=Gv,B_=new X,tT=new Xs,kv=class kv{constructor(t,n,i,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=n,u[4]=a,u[5]=l,u[6]=i,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],p=i[8],_=s[0],g=s[3],m=s[6],v=s[1],S=s[4],y=s[7],E=s[2],A=s[5],M=s[8];return a[0]=r*_+o*v+l*E,a[3]=r*g+o*S+l*A,a[6]=r*m+o*y+l*M,a[1]=c*_+u*v+d*E,a[4]=c*g+u*S+d*A,a[7]=c*m+u*y+d*M,a[2]=h*_+f*v+p*E,a[5]=h*g+f*S+p*A,a[8]=h*m+f*y+p*M,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return n*r*u-n*o*c-i*a*u+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*r-o*c,h=o*l-u*a,f=c*a-r*l,p=n*d+i*h+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=d*_,t[1]=(s*c-u*i)*_,t[2]=(o*i-s*r)*_,t[3]=h*_,t[4]=(u*n-s*l)*_,t[5]=(s*a-o*n)*_,t[6]=f*_,t[7]=(i*l-c*n)*_,t[8]=(r*n-i*a)*_,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return Ao("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(F_.makeScale(t,n)),this}rotate(t){return Ao("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(F_.makeRotation(-t)),this}translate(t,n){return Ao("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(F_.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};kv.prototype.isMatrix3=!0;var zt=kv,F_=new zt,eT=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nT=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function NR(){let e={enabled:!0,workingColorSpace:ju,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===me&&(s.r=Oa(s.r),s.g=Oa(s.g),s.b=Oa(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===me&&(s.r=ac(s.r),s.g=ac(s.g),s.b=ac(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gn?Qu:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Ao("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Ao("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[ju]:{primaries:t,whitePoint:i,transfer:Qu,toXYZ:eT,fromXYZ:nT,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ni},outputColorSpaceConfig:{drawingBufferColorSpace:Ni}},[Ni]:{primaries:t,whitePoint:i,transfer:me,toXYZ:eT,fromXYZ:nT,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ni}}}),e}var ne=NR();function Oa(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function ac(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Wl,lp=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Wl===void 0&&(Wl=rc("canvas")),Wl.width=t.width,Wl.height=t.height;let s=Wl.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Wl}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=rc("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Oa(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Oa(n[i]/255)*255):n[i]=Oa(n[i]);return{data:n,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},LR=0,cc=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:LR++}),this.uuid=_c(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(z_(s[r].image)):a.push(z_(s[r]))}else a=z_(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function z_(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?lp.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}var PR=0,V_=new X,kn=class e extends ks{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Li,s=Li,a=Te,r=Zs,o=ss,l=Bi,c=e.DEFAULT_ANISOTROPY,u=gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PR++}),this.uuid=_c(),this.name="",this.source=new cc(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(V_).x}get height(){return this.source.getSize(V_).y}get depth(){return this.source.getSize(V_).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Nt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Nt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ap:t.x=t.x-Math.floor(t.x);break;case Li:t.x=t.x<0?0:1;break;case rp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ap:t.y=t.y-Math.floor(t.y);break;case Li:t.y=t.y<0?0:1;break;case rp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=Tv;kn.DEFAULT_ANISOTROPY=1;var Xv=class Xv{constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let S=(c+1)/2,y=(f+1)/2,E=(m+1)/2,A=(u+h)/4,M=(d+_)/4,x=(p+g)/4;return S>y&&S>E?S<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(S),s=A/i,a=M/i):y>E?y<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(y),i=A/s,a=x/s):E<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(E),i=M/a,s=x/a),this.set(i,s,a,n),this}let v=Math.sqrt((g-p)*(g-p)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(d-_)/v,this.z=(h-u)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ie(this.x,t.x,n.x),this.y=ie(this.y,t.y,n.y),this.z=ie(this.z,t.z,n.z),this.w=ie(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ie(this.x,t,n),this.y=ie(this.y,t,n),this.z=ie(this.z,t,n),this.w=ie(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xv.prototype.isVector4=!0;var se=Xv,cp=class extends ks{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Te,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new se(0,0,t,n),this.scissorTest=!1,this.viewport=new se(0,0,t,n),this.textures=[];let s={width:t,height:n,depth:i.depth},a=new kn(s),r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:Te,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new cc(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Oi=class extends cp{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},th=class extends kn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var up=class extends kn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cp=class Cp{constructor(t,n,i,s,a,r,o,l,c,u,d,h,f,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,u,d,h,f,p,_,g)}set(t,n,i,s,a,r,o,l,c,u,d,h,f,p,_,g){let m=this.elements;return m[0]=t,m[4]=n,m[8]=i,m[12]=s,m[1]=a,m[5]=r,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Cp().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,s=1/ql.setFromMatrixColumn(t,0).length(),a=1/ql.setFromMatrixColumn(t,1).length(),r=1/ql.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){let h=r*u,f=r*d,p=o*u,_=o*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=f+p*c,n[5]=h-_*c,n[9]=-o*l,n[2]=_-h*c,n[6]=p+f*c,n[10]=r*l}else if(t.order==="YXZ"){let h=l*u,f=l*d,p=c*u,_=c*d;n[0]=h+_*o,n[4]=p*o-f,n[8]=r*c,n[1]=r*d,n[5]=r*u,n[9]=-o,n[2]=f*o-p,n[6]=_+h*o,n[10]=r*l}else if(t.order==="ZXY"){let h=l*u,f=l*d,p=c*u,_=c*d;n[0]=h-_*o,n[4]=-r*d,n[8]=p+f*o,n[1]=f+p*o,n[5]=r*u,n[9]=_-h*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let h=r*u,f=r*d,p=o*u,_=o*d;n[0]=l*u,n[4]=p*c-f,n[8]=h*c+_,n[1]=l*d,n[5]=_*c+h,n[9]=f*c-p,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let h=r*l,f=r*c,p=o*l,_=o*c;n[0]=l*u,n[4]=_-h*d,n[8]=p*d+f,n[1]=d,n[5]=r*u,n[9]=-o*u,n[2]=-c*u,n[6]=f*d+p,n[10]=h-_*d}else if(t.order==="XZY"){let h=r*l,f=r*c,p=o*l,_=o*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+_,n[5]=r*u,n[9]=f*d-p,n[2]=p*d-f,n[6]=o*u,n[10]=_*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(OR,t,IR)}lookAt(t,n,i){let s=this.elements;return Di.subVectors(t,n),Di.lengthSq()===0&&(Di.z=1),Di.normalize(),Mr.crossVectors(i,Di),Mr.lengthSq()===0&&(Math.abs(i.z)===1?Di.x+=1e-4:Di.z+=1e-4,Di.normalize(),Mr.crossVectors(i,Di)),Mr.normalize(),Cd.crossVectors(Di,Mr),s[0]=Mr.x,s[4]=Cd.x,s[8]=Di.x,s[1]=Mr.y,s[5]=Cd.y,s[9]=Di.y,s[2]=Mr.z,s[6]=Cd.z,s[10]=Di.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],p=i[2],_=i[6],g=i[10],m=i[14],v=i[3],S=i[7],y=i[11],E=i[15],A=s[0],M=s[4],x=s[8],T=s[12],R=s[1],D=s[5],U=s[9],F=s[13],q=s[2],O=s[6],k=s[10],z=s[14],K=s[3],it=s[7],lt=s[11],st=s[15];return a[0]=r*A+o*R+l*q+c*K,a[4]=r*M+o*D+l*O+c*it,a[8]=r*x+o*U+l*k+c*lt,a[12]=r*T+o*F+l*z+c*st,a[1]=u*A+d*R+h*q+f*K,a[5]=u*M+d*D+h*O+f*it,a[9]=u*x+d*U+h*k+f*lt,a[13]=u*T+d*F+h*z+f*st,a[2]=p*A+_*R+g*q+m*K,a[6]=p*M+_*D+g*O+m*it,a[10]=p*x+_*U+g*k+m*lt,a[14]=p*T+_*F+g*z+m*st,a[3]=v*A+S*R+y*q+E*K,a[7]=v*M+S*D+y*O+E*it,a[11]=v*x+S*U+y*k+E*lt,a[15]=v*T+S*F+y*z+E*st,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],p=t[3],_=t[7],g=t[11],m=t[15],v=l*f-c*h,S=o*f-c*d,y=o*h-l*d,E=r*f-c*u,A=r*h-l*u,M=r*d-o*u;return n*(_*v-g*S+m*y)-i*(p*v-g*E+m*A)+s*(p*S-_*E+m*M)-a*(p*y-_*A+g*M)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[1],r=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return n*(r*u-o*c)-i*(a*u-o*l)+s*(a*c-r*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],p=t[12],_=t[13],g=t[14],m=t[15],v=n*o-i*r,S=n*l-s*r,y=n*c-a*r,E=i*l-s*o,A=i*c-a*o,M=s*c-a*l,x=u*_-d*p,T=u*g-h*p,R=u*m-f*p,D=d*g-h*_,U=d*m-f*_,F=h*m-f*g,q=v*F-S*U+y*D+E*R-A*T+M*x;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/q;return t[0]=(o*F-l*U+c*D)*O,t[1]=(s*U-i*F-a*D)*O,t[2]=(_*M-g*A+m*E)*O,t[3]=(h*A-d*M-f*E)*O,t[4]=(l*R-r*F-c*T)*O,t[5]=(n*F-s*R+a*T)*O,t[6]=(g*y-p*M-m*S)*O,t[7]=(u*M-h*y+f*S)*O,t[8]=(r*U-o*R+c*x)*O,t[9]=(i*R-n*U-a*x)*O,t[10]=(p*A-_*y+m*v)*O,t[11]=(d*y-u*A-f*v)*O,t[12]=(o*T-r*D-l*x)*O,t[13]=(n*D-i*T+s*x)*O,t[14]=(_*S-p*E-g*v)*O,t[15]=(u*E-d*S+h*v)*O,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,u=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*r,0,c*l-s*o,u*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,u=r+r,d=o+o,h=a*c,f=a*u,p=a*d,_=r*u,g=r*d,m=o*d,v=l*c,S=l*u,y=l*d,E=i.x,A=i.y,M=i.z;return s[0]=(1-(_+m))*E,s[1]=(f+y)*E,s[2]=(p-S)*E,s[3]=0,s[4]=(f-y)*A,s[5]=(1-(h+m))*A,s[6]=(g+v)*A,s[7]=0,s[8]=(p+S)*M,s[9]=(g-v)*M,s[10]=(1-(h+_))*M,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),n.identity(),this;let r=ql.set(s[0],s[1],s[2]).length(),o=ql.set(s[4],s[5],s[6]).length(),l=ql.set(s[8],s[9],s[10]).length();a<0&&(r=-r),vs.copy(this);let c=1/r,u=1/o,d=1/l;return vs.elements[0]*=c,vs.elements[1]*=c,vs.elements[2]*=c,vs.elements[4]*=u,vs.elements[5]*=u,vs.elements[6]*=u,vs.elements[8]*=d,vs.elements[9]*=d,vs.elements[10]*=d,n.setFromRotationMatrix(vs),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,s,a,r,o=Ss,l=!1){let c=this.elements,u=2*a/(n-t),d=2*a/(i-s),h=(n+t)/(n-t),f=(i+s)/(i-s),p,_;if(l)p=a/(r-a),_=r*a/(r-a);else if(o===Ss)p=-(r+a)/(r-a),_=-2*r*a/(r-a);else if(o===$u)p=-r/(r-a),_=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=Ss,l=!1){let c=this.elements,u=2/(n-t),d=2/(i-s),h=-(n+t)/(n-t),f=-(i+s)/(i-s),p,_;if(l)p=1/(r-a),_=r/(r-a);else if(o===Ss)p=-2/(r-a),_=-(r+a)/(r-a);else if(o===$u)p=-1/(r-a),_=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};Cp.prototype.isMatrix4=!0;var sn=Cp,ql=new X,vs=new sn,OR=new X(0,0,0),IR=new X(1,1,1),Mr=new X,Cd=new X,Di=new X,iT=new sn,sT=new Xs,Ur=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(n){case"XYZ":this._y=Math.asin(ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-ie(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ie(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return iT.makeRotationFromQuaternion(t),this.setFromRotationMatrix(iT,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return sT.setFromEuler(this),this.setFromQuaternion(sT,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ur.DEFAULT_ORDER="XYZ";var eh=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},BR=0,aT=new X,Yl=new Xs,Ra=new sn,Rd=new X,Xu=new X,FR=new X,zR=new Xs,rT=new X(1,0,0),oT=new X(0,1,0),lT=new X(0,0,1),cT={type:"added"},VR={type:"removed"},Zl={type:"childadded",child:null},H_={type:"childremoved",child:null},is=class e extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:BR++}),this.uuid=_c(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new X,n=new Ur,i=new Xs,s=new X(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new sn},normalMatrix:{value:new zt}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Yl.setFromAxisAngle(t,n),this.quaternion.multiply(Yl),this}rotateOnWorldAxis(t,n){return Yl.setFromAxisAngle(t,n),this.quaternion.premultiply(Yl),this}rotateX(t){return this.rotateOnAxis(rT,t)}rotateY(t){return this.rotateOnAxis(oT,t)}rotateZ(t){return this.rotateOnAxis(lT,t)}translateOnAxis(t,n){return aT.copy(t).applyQuaternion(this.quaternion),this.position.add(aT.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(rT,t)}translateY(t){return this.translateOnAxis(oT,t)}translateZ(t){return this.translateOnAxis(lT,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ra.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Rd.copy(t):Rd.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Xu.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ra.lookAt(Xu,Rd,this.up):Ra.lookAt(Rd,Xu,this.up),this.quaternion.setFromRotationMatrix(Ra),s&&(Ra.extractRotation(s.matrixWorld),Yl.setFromRotationMatrix(Ra),this.quaternion.premultiply(Yl.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ot("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cT),Zl.child=t,this.dispatchEvent(Zl),Zl.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(VR),H_.child=t,this.dispatchEvent(H_),H_.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ra.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ra.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ra),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cT),Zl.child=t,this.dispatchEvent(Zl),Zl.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xu,t,FR),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xu,zR,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*s,a[13]+=i-a[1]*n-a[5]*i-a[9]*s,a[14]+=s-a[2]*n-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),u=r(t.images),d=r(t.shapes),h=r(t.skeletons),f=r(t.animations),p=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function r(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};is.DEFAULT_UP=new X(0,1,0);is.DEFAULT_MATRIX_AUTO_UPDATE=!0;is.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pa=class extends is{constructor(){super(),this.isGroup=!0,this.type="Group"}},HR={type:"move"},uc=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let _ of t.hand.values()){let g=n.getJointPose(_,i),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(HR)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new Pa;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},tE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tr={h:0,s:0,l:0},Dd={h:0,s:0,l:0};function G_(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var jt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Ni){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=ne.workingColorSpace){return this.r=t,this.g=n,this.b=i,ne.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=ne.workingColorSpace){if(t=Ov(t,1),n=ie(n,0,1),i=ie(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=G_(r,a,t+1/3),this.g=G_(r,a,t),this.b=G_(r,a,t-1/3)}return ne.colorSpaceToWorking(this,s),this}setStyle(t,n=Ni){function i(a){a!==void 0&&parseFloat(a)<1&&Nt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:Nt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Ni){let i=tE[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oa(t.r),this.g=Oa(t.g),this.b=Oa(t.b),this}copyLinearToSRGB(t){return this.r=ac(t.r),this.g=ac(t.g),this.b=ac(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ni){return ne.workingToColorSpace(Gn.copy(this),t),Math.round(ie(Gn.r*255,0,255))*65536+Math.round(ie(Gn.g*255,0,255))*256+Math.round(ie(Gn.b*255,0,255))}getHexString(t=Ni){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=ne.workingColorSpace){ne.workingToColorSpace(Gn.copy(this),n);let i=Gn.r,s=Gn.g,a=Gn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,u=(o+r)/2;if(o===r)l=0,c=0;else{let d=r-o;switch(c=u<=.5?d/(r+o):d/(2-r-o),r){case i:l=(s-a)/d+(s<a?6:0);break;case s:l=(a-i)/d+2;break;case a:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,n=ne.workingColorSpace){return ne.workingToColorSpace(Gn.copy(this),n),t.r=Gn.r,t.g=Gn.g,t.b=Gn.b,t}getStyle(t=Ni){ne.workingToColorSpace(Gn.copy(this),t);let n=Gn.r,i=Gn.g,s=Gn.b;return t!==Ni?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(Tr),this.setHSL(Tr.h+t,Tr.s+n,Tr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Tr),t.getHSL(Dd);let i=Ju(Tr.h,Dd.h,n),s=Ju(Tr.s,Dd.s,n),a=Ju(Tr.l,Dd.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Gn=new jt;jt.NAMES=tE;var nh=class extends is{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ur,this.environmentIntensity=1,this.environmentRotation=new Ur,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},ys=new X,Da=new X,k_=new X,Ua=new X,Jl=new X,Kl=new X,uT=new X,X_=new X,W_=new X,q_=new X,Y_=new se,Z_=new se,J_=new se,Rr=class e{constructor(t=new X,n=new X,i=new X){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),ys.subVectors(t,n),s.cross(ys);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){ys.subVectors(s,n),Da.subVectors(i,n),k_.subVectors(t,n);let r=ys.dot(ys),o=ys.dot(Da),l=ys.dot(k_),c=Da.dot(Da),u=Da.dot(k_),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;let h=1/d,f=(c*l-o*u)*h,p=(r*u-o*l)*h;return a.set(1-f-p,p,f)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Ua)===null?!1:Ua.x>=0&&Ua.y>=0&&Ua.x+Ua.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,Ua)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Ua.x),l.addScaledVector(r,Ua.y),l.addScaledVector(o,Ua.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return Y_.setScalar(0),Z_.setScalar(0),J_.setScalar(0),Y_.fromBufferAttribute(t,n),Z_.fromBufferAttribute(t,i),J_.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Y_,a.x),r.addScaledVector(Z_,a.y),r.addScaledVector(J_,a.z),r}static isFrontFacing(t,n,i,s){return ys.subVectors(i,n),Da.subVectors(t,n),ys.cross(Da).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ys.subVectors(this.c,this.b),Da.subVectors(this.a,this.b),ys.cross(Da).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;Jl.subVectors(s,i),Kl.subVectors(a,i),X_.subVectors(t,i);let l=Jl.dot(X_),c=Kl.dot(X_);if(l<=0&&c<=0)return n.copy(i);W_.subVectors(t,s);let u=Jl.dot(W_),d=Kl.dot(W_);if(u>=0&&d<=u)return n.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return r=l/(l-u),n.copy(i).addScaledVector(Jl,r);q_.subVectors(t,a);let f=Jl.dot(q_),p=Kl.dot(q_);if(p>=0&&f<=p)return n.copy(a);let _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),n.copy(i).addScaledVector(Kl,o);let g=u*p-f*d;if(g<=0&&d-u>=0&&f-p>=0)return uT.subVectors(a,s),o=(d-u)/(d-u+(f-p)),n.copy(s).addScaledVector(uT,o);let m=1/(g+_+h);return r=_*m,o=h*m,n.copy(i).addScaledVector(Jl,r).addScaledVector(Kl,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Nr=class{constructor(t=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(xs.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(xs.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=xs.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,xs):xs.fromBufferAttribute(a,r),xs.applyMatrix4(t.matrixWorld),this.expandByPoint(xs);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ud.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ud.copy(i.boundingBox)),Ud.applyMatrix4(t.matrixWorld),this.union(Ud)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xs),xs.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wu),Nd.subVectors(this.max,Wu),jl.subVectors(t.a,Wu),Ql.subVectors(t.b,Wu),$l.subVectors(t.c,Wu),Er.subVectors(Ql,jl),Ar.subVectors($l,Ql),So.subVectors(jl,$l);let n=[0,-Er.z,Er.y,0,-Ar.z,Ar.y,0,-So.z,So.y,Er.z,0,-Er.x,Ar.z,0,-Ar.x,So.z,0,-So.x,-Er.y,Er.x,0,-Ar.y,Ar.x,0,-So.y,So.x,0];return!K_(n,jl,Ql,$l,Nd)||(n=[1,0,0,0,1,0,0,0,1],!K_(n,jl,Ql,$l,Nd))?!1:(Ld.crossVectors(Er,Ar),n=[Ld.x,Ld.y,Ld.z],K_(n,jl,Ql,$l,Nd))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xs).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xs).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Na[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Na[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Na[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Na[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Na[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Na[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Na[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Na[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Na),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Na=[new X,new X,new X,new X,new X,new X,new X,new X],xs=new X,Ud=new Nr,jl=new X,Ql=new X,$l=new X,Er=new X,Ar=new X,So=new X,Wu=new X,Nd=new X,Ld=new X,bo=new X;function K_(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){bo.fromArray(e,a);let o=s.x*Math.abs(bo.x)+s.y*Math.abs(bo.y)+s.z*Math.abs(bo.z),l=t.dot(bo),c=n.dot(bo),u=i.dot(bo);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var hn=new X,Pd=new kt,GR=0,Pi=class extends ks{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:GR++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=cv,this.updateRanges=[],this.gpuType=As,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Pd.fromBufferAttribute(this,n),Pd.applyMatrix3(t),this.setXY(n,Pd.x,Pd.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix3(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix4(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.applyNormalMatrix(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.transformDirection(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=sc(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Qn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=sc(n,this.array)),n}setX(t,n){return this.normalized&&(n=Qn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=sc(n,this.array)),n}setY(t,n){return this.normalized&&(n=Qn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=sc(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Qn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=sc(n,this.array)),n}setW(t,n){return this.normalized&&(n=Qn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Qn(n,this.array),i=Qn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=Qn(n,this.array),i=Qn(i,this.array),s=Qn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=Qn(n,this.array),i=Qn(i,this.array),s=Qn(s,this.array),a=Qn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cv&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var ih=class extends Pi{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var sh=class extends Pi{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var ns=class extends Pi{constructor(t,n,i){super(new Float32Array(t),n,i)}},kR=new Nr,qu=new X,j_=new X,hc=class{constructor(t=new X,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):kR.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qu.subVectors(t,this.center);let n=qu.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(qu,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(j_.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qu.copy(t.center).add(j_)),this.expandByPoint(qu.copy(t.center).sub(j_))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},XR=0,es=new sn,Q_=new is,tc=new X,Ui=new Nr,Yu=new Nr,En=new X,Ws=class e extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XR++}),this.uuid=_c(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pR(t)?sh:ih)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new zt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return es.makeRotationFromQuaternion(t),this.applyMatrix4(es),this}rotateX(t){return es.makeRotationX(t),this.applyMatrix4(es),this}rotateY(t){return es.makeRotationY(t),this.applyMatrix4(es),this}rotateZ(t){return es.makeRotationZ(t),this.applyMatrix4(es),this}translate(t,n,i){return es.makeTranslation(t,n,i),this.applyMatrix4(es),this}scale(t,n,i){return es.makeScale(t,n,i),this.applyMatrix4(es),this}lookAt(t){return Q_.lookAt(t),Q_.updateMatrix(),this.applyMatrix4(Q_.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tc).negate(),this.translate(tc.x,tc.y,tc.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ns(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nr);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];Ui.setFromBufferAttribute(a),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,Ui.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,Ui.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(Ui.min),this.boundingBox.expandByPoint(Ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hc);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){let i=this.boundingSphere.center;if(Ui.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];Yu.setFromBufferAttribute(o),this.morphTargetsRelative?(En.addVectors(Ui.min,Yu.min),Ui.expandByPoint(En),En.addVectors(Ui.max,Yu.max),Ui.expandByPoint(En)):(Ui.expandByPoint(Yu.min),Ui.expandByPoint(Yu.max))}Ui.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)En.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(En));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)En.fromBufferAttribute(o,c),l&&(tc.fromBufferAttribute(t,c),En.add(tc)),s=Math.max(s,i.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new Pi(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new X,l[x]=new X;let c=new X,u=new X,d=new X,h=new kt,f=new kt,p=new kt,_=new X,g=new X;function m(x,T,R){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,T),d.fromBufferAttribute(i,R),h.fromBufferAttribute(a,x),f.fromBufferAttribute(a,T),p.fromBufferAttribute(a,R),u.sub(c),d.sub(c),f.sub(h),p.sub(h);let D=1/(f.x*p.y-p.x*f.y);isFinite(D)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(D),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(D),o[x].add(_),o[T].add(_),o[R].add(_),l[x].add(g),l[T].add(g),l[R].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let x=0,T=v.length;x<T;++x){let R=v[x],D=R.start,U=R.count;for(let F=D,q=D+U;F<q;F+=3)m(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let S=new X,y=new X,E=new X,A=new X;function M(x){E.fromBufferAttribute(s,x),A.copy(E);let T=o[x];S.copy(T),S.sub(E.multiplyScalar(E.dot(T))).normalize(),y.crossVectors(A,T);let D=y.dot(l[x])<0?-1:1;r.setXYZW(x,S.x,S.y,S.z,D)}for(let x=0,T=v.length;x<T;++x){let R=v[x],D=R.start,U=R.count;for(let F=D,q=D+U;F<q;F+=3)M(t.getX(F+0)),M(t.getX(F+1)),M(t.getX(F+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Pi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let s=new X,a=new X,r=new X,o=new X,l=new X,c=new X,u=new X,d=new X;if(t)for(let h=0,f=t.count;h<f;h+=3){let p=t.getX(h+0),_=t.getX(h+1),g=t.getX(h+2);s.fromBufferAttribute(n,p),a.fromBufferAttribute(n,_),r.fromBufferAttribute(n,g),u.subVectors(r,a),d.subVectors(s,a),u.cross(d),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,f=n.count;h<f;h+=3)s.fromBufferAttribute(n,h+0),a.fromBufferAttribute(n,h+1),r.fromBufferAttribute(n,h+2),u.subVectors(r,a),d.subVectors(s,a),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)En.fromBufferAttribute(t,n),En.normalize(),t.setXYZ(n,En.x,En.y,En.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),f=0,p=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let m=0;m<u;m++)h[p++]=c[f++]}return new Pi(h,u,d)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=t(h,i);l.push(f)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(n))}let a=t.morphAttributes;for(let c in a){let u=[],d=a[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,u=r.length;c<u;c++){let d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var WR=0,Ro=class extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:WR++}),this.uuid=_c(),this.name="",this.type="Material",this.blending=wo,this.side=Ia,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kd,this.blendDst=jd,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Eo,this.stencilZFail=Eo,this.stencilZPass=Eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){Nt(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Nt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==wo&&(i.blending=this.blending),this.side!==Ia&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Kd&&(i.blendSrc=this.blendSrc),this.blendDst!==jd&&(i.blendDst=this.blendDst),this.blendEquation!==Dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Co&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Eo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Eo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Eo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new kt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new kt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var La=new X,$_=new X,Od=new X,wr=new X,tv=new X,Id=new X,ev=new X,hp=class{constructor(t=new X,n=new X(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,La)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=La.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(La.copy(this.origin).addScaledVector(this.direction,n),La.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){$_.copy(t).add(n).multiplyScalar(.5),Od.copy(n).sub(t).normalize(),wr.copy(this.origin).sub($_);let a=t.distanceTo(n)*.5,r=-this.direction.dot(Od),o=wr.dot(this.direction),l=-wr.dot(Od),c=wr.lengthSq(),u=Math.abs(1-r*r),d,h,f,p;if(u>0)if(d=r*l-o,h=r*o-l,p=a*u,d>=0)if(h>=-p)if(h<=p){let _=1/u;d*=_,h*=_,f=d*(d+r*h+2*o)+h*(r*d+h+2*l)+c}else h=a,d=Math.max(0,-(r*h+o)),f=-d*d+h*(h+2*l)+c;else h=-a,d=Math.max(0,-(r*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-p?(d=Math.max(0,-(-r*a+o)),h=d>0?-a:Math.min(Math.max(-a,-l),a),f=-d*d+h*(h+2*l)+c):h<=p?(d=0,h=Math.min(Math.max(-a,-l),a),f=h*(h+2*l)+c):(d=Math.max(0,-(r*a+o)),h=d>0?a:Math.min(Math.max(-a,-l),a),f=-d*d+h*(h+2*l)+c);else h=r>0?-a:a,d=Math.max(0,-(r*h+o)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy($_).addScaledVector(Od,h),f}intersectSphere(t,n){La.subVectors(t.center,this.origin);let i=La.dot(this.direction),s=La.dot(La)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(a=(t.min.y-h.y)*u,r=(t.max.y-h.y)*u):(a=(t.max.y-h.y)*u,r=(t.min.y-h.y)*u),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,La)!==null}intersectTriangle(t,n,i,s,a){tv.subVectors(n,t),Id.subVectors(i,t),ev.crossVectors(tv,Id);let r=this.direction.dot(ev),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;wr.subVectors(this.origin,t);let l=o*this.direction.dot(Id.crossVectors(wr,Id));if(l<0)return null;let c=o*this.direction.dot(tv.cross(wr));if(c<0||l+c>r)return null;let u=-o*wr.dot(ev);return u<0?null:this.at(u/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ah=class extends Ro{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ur,this.combine=gv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},hT=new sn,Mo=new hp,Bd=new hc,fT=new X,Fd=new X,zd=new X,Vd=new X,nv=new X,Hd=new X,dT=new X,Gd=new X,wn=class extends is{constructor(t=new Ws,n=new ah){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){Hd.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let u=o[l],d=a[l];u!==0&&(nv.fromBufferAttribute(d,t),r?Hd.addScaledVector(nv,u):Hd.addScaledVector(nv.sub(n),u))}n.add(Hd)}return n}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bd.copy(i.boundingSphere),Bd.applyMatrix4(a),Mo.copy(t.ray).recast(t.near),!(Bd.containsPoint(Mo.origin)===!1&&(Mo.intersectSphere(Bd,fT)===null||Mo.origin.distanceToSquared(fT)>(t.far-t.near)**2))&&(hT.copy(a).invert(),Mo.copy(t.ray).applyMatrix4(hT),!(i.boundingBox!==null&&Mo.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Mo)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,h=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(r))for(let p=0,_=h.length;p<_;p++){let g=h[p],m=r[g.materialIndex],v=Math.max(g.start,f.start),S=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,E=S;y<E;y+=3){let A=o.getX(y),M=o.getX(y+1),x=o.getX(y+2);s=kd(this,m,t,i,c,u,d,A,M,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let p=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let v=o.getX(g),S=o.getX(g+1),y=o.getX(g+2);s=kd(this,r,t,i,c,u,d,v,S,y),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,_=h.length;p<_;p++){let g=h[p],m=r[g.materialIndex],v=Math.max(g.start,f.start),S=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,E=S;y<E;y+=3){let A=y,M=y+1,x=y+2;s=kd(this,m,t,i,c,u,d,A,M,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let v=g,S=g+1,y=g+2;s=kd(this,r,t,i,c,u,d,v,S,y),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}}};function qR(e,t,n,i,s,a,r,o){let l;if(t.side===$n?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===Ia,o),l===null)return null;Gd.copy(o),Gd.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Gd);return c<n.near||c>n.far?null:{distance:c,point:Gd.clone(),object:e}}function kd(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,Fd),e.getVertexPosition(l,zd),e.getVertexPosition(c,Vd);let u=qR(e,t,n,i,Fd,zd,Vd,dT);if(u){let d=new X;Rr.getBarycoord(dT,Fd,zd,Vd,d),s&&(u.uv=Rr.getInterpolatedAttribute(s,o,l,c,d,new kt)),a&&(u.uv1=Rr.getInterpolatedAttribute(a,o,l,c,d,new kt)),r&&(u.normal=Rr.getInterpolatedAttribute(r,o,l,c,d,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new X,materialIndex:0};Rr.getNormal(Fd,zd,Vd,h.normal),u.face=h,u.barycoord=d}return u}var Do=class extends kn{constructor(t=null,n=1,i=1,s,a,r,o,l,c=An,u=An,d,h){super(null,r,o,l,c,u,s,a,d,h),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var iv=new X,YR=new X,ZR=new zt,Hs=class{constructor(t=new X(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=iv.subVectors(i,n).cross(YR.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let s=t.delta(iv),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(s,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||ZR.getNormalMatrix(t),s=this.coplanarPoint(iv).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},To=new hc,JR=new kt(.5,.5),Xd=new X,rh=class{constructor(t=new Hs,n=new Hs,i=new Hs,s=new Hs,a=new Hs,r=new Hs){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Ss,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],u=a[4],d=a[5],h=a[6],f=a[7],p=a[8],_=a[9],g=a[10],m=a[11],v=a[12],S=a[13],y=a[14],E=a[15];if(s[0].setComponents(c-r,f-u,m-p,E-v).normalize(),s[1].setComponents(c+r,f+u,m+p,E+v).normalize(),s[2].setComponents(c+o,f+d,m+_,E+S).normalize(),s[3].setComponents(c-o,f-d,m-_,E-S).normalize(),i)s[4].setComponents(l,h,g,y).normalize(),s[5].setComponents(c-l,f-h,m-g,E-y).normalize();else if(s[4].setComponents(c-l,f-h,m-g,E-y).normalize(),n===Ss)s[5].setComponents(c+l,f+h,m+g,E+y).normalize();else if(n===$u)s[5].setComponents(l,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),To.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(To)}intersectsSprite(t){To.center.set(0,0,0);let n=JR.distanceTo(t.center);return To.radius=.7071067811865476+n,To.applyMatrix4(t.matrixWorld),this.intersectsSphere(To)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Xd.x=s.normal.x>0?t.max.x:t.min.x,Xd.y=s.normal.y>0?t.max.y:t.min.y,Xd.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Xd)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var oh=class extends kn{constructor(t=[],n=Ir,i,s,a,r,o,l,c,u){super(t,n,i,s,a,r,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},bs=class extends kn{constructor(t,n,i,s,a,r,o,l,c){super(t,n,i,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ba=class extends kn{constructor(t,n,i=Es,s,a,r,o=An,l=An,c,u=Gs,d=1){if(u!==Gs&&u!==Br)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:n,depth:d};super(h,s,a,r,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new cc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},fp=class extends Ba{constructor(t,n=Es,i=Ir,s,a,r=An,o=An,l,c=Gs){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,n,i,s,a,r,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},lh=class extends kn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},fc=class e extends Ws{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],u=[],d=[],h=0,f=0;p("z","y","x",-1,-1,i,n,t,r,a,0),p("z","y","x",1,-1,i,n,-t,r,a,1),p("x","z","y",1,1,t,i,n,s,r,2),p("x","z","y",1,-1,t,i,-n,s,r,3),p("x","y","z",1,-1,t,n,i,s,a,4),p("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new ns(c,3)),this.setAttribute("normal",new ns(u,3)),this.setAttribute("uv",new ns(d,2));function p(_,g,m,v,S,y,E,A,M,x,T){let R=y/M,D=E/x,U=y/2,F=E/2,q=A/2,O=M+1,k=x+1,z=0,K=0,it=new X;for(let lt=0;lt<k;lt++){let st=lt*D-F;for(let ct=0;ct<O;ct++){let Wt=ct*R-U;it[_]=Wt*v,it[g]=st*S,it[m]=q,c.push(it.x,it.y,it.z),it[_]=0,it[g]=0,it[m]=A>0?1:-1,u.push(it.x,it.y,it.z),d.push(ct/M),d.push(1-lt/x),z+=1}}for(let lt=0;lt<x;lt++)for(let st=0;st<M;st++){let ct=h+st+O*lt,Wt=h+st+O*(lt+1),Lt=h+(st+1)+O*(lt+1),Ft=h+(st+1)+O*lt;l.push(ct,Wt,Ft),l.push(Wt,Lt,Ft),K+=6}o.addGroup(f,K,T),f+=K,h+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ms=class e extends Ws{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=t/o,h=n/l,f=[],p=[],_=[],g=[];for(let m=0;m<u;m++){let v=m*h-r;for(let S=0;S<c;S++){let y=S*d-a;p.push(y,-v,0),_.push(0,0,1),g.push(S/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){let S=v+c*m,y=v+c*(m+1),E=v+1+c*(m+1),A=v+1+c*m;f.push(S,y,A),f.push(y,E,A)}this.setIndex(f),this.setAttribute("position",new ns(p,3)),this.setAttribute("normal",new ns(_,3)),this.setAttribute("uv",new ns(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function Lo(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(pT(s))s.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(pT(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();t[n][i]=a}else t[n][i]=s.slice();else t[n][i]=s}}return t}function Xn(e){let t={};for(let n=0;n<e.length;n++){let i=Lo(e[n]);for(let s in i)t[s]=i[s]}return t}function pT(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function KR(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Bv(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var eE={clone:Lo,merge:Xn},jR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,QR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends Ro{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jR,this.fragmentShader=QR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Lo(t.uniforms),this.uniformsGroups=KR(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new jt().setHex(s.value);break;case"v2":this.uniforms[i].value=new kt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new X().fromArray(s.value);break;case"v4":this.uniforms[i].value=new se().fromArray(s.value);break;case"m3":this.uniforms[i].value=new zt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new sn().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},dp=class extends mn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var pp=class extends Ro{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=GT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},mp=class extends Ro{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Wd(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}var Lr=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},gp=class extends Lr{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:av,endingEnd:av}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case rv:a=t,o=2*n-i;break;case ov:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case rv:r=t,l=2*i-n;break;case ov:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,u=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*u,this._offsetNext=r*u}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(i-n)/(s-n),_=p*p,g=_*p,m=-h*g+2*h*_-h*p,v=(1+h)*g+(-1.5-2*h)*_+(-.5+h)*p+1,S=(-1-f)*g+(1.5+f)*_+.5*p,y=f*g-f*_;for(let E=0;E!==o;++E)a[E]=m*r[u+E]+v*r[c+E]+S*r[l+E]+y*r[d+E];return a}},_p=class extends Lr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(i-n)/(s-n),d=1-u;for(let h=0;h!==o;++h)a[h]=r[c+h]*d+r[l+h]*u;return a}},vp=class extends Lr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},yp=class extends Lr{interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let p=(i-n)/(s-n),_=1-p;for(let g=0;g!==o;++g)a[g]=r[c+g]*_+r[l+g]*p;return a}let h=o*2,f=t-1;for(let p=0;p!==o;++p){let _=r[c+p],g=r[l+p],m=f*h+p*2,v=d[m],S=d[m+1],y=t*h+p*2,E=u[y],A=u[y+1],M=(i-n)/(s-n),x,T,R,D,U;for(let F=0;F<8;F++){x=M*M,T=x*M,R=1-M,D=R*R,U=D*R;let O=U*n+3*D*M*v+3*R*x*E+T*s-i;if(Math.abs(O)<1e-10)break;let k=3*D*(v-n)+6*R*M*(E-v)+3*x*(s-E);if(Math.abs(k)<1e-10)break;M=M-O/k,M=Math.max(0,Math.min(1,M))}a[p]=U*_+3*D*M*S+3*R*x*A+T*g}return a}},Ii=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Wd(n,this.TimeBufferType),this.values=Wd(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Wd(t.times,Array),values:Wd(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new vp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new _p(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new gp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new yp(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case Ku:n=this.InterpolantFactoryMethodDiscrete;break;case op:n=this.InterpolantFactoryMethodLinear;break;case Zd:n=this.InterpolantFactoryMethodSmooth;break;case sv:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Nt("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ku;case this.InterpolantFactoryMethodLinear:return op;case this.InterpolantFactoryMethodSmooth:return Zd;case this.InterpolantFactoryMethodBezier:return sv}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Ot("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(Ot("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ot("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){Ot("KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&mR(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ot("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Zd,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,h=d-i,f=d+i;for(let p=0;p!==i;++p){let _=n[d+p];if(_!==n[h+p]||_!==n[f+p]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let d=o*i,h=r*i;for(let f=0;f!==i;++f)n[h+f]=n[d+f]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};Ii.prototype.ValueTypeName="";Ii.prototype.TimeBufferType=Float32Array;Ii.prototype.ValueBufferType=Float32Array;Ii.prototype.DefaultInterpolation=op;var Pr=class extends Ii{constructor(t,n,i){super(t,n,i)}};Pr.prototype.ValueTypeName="bool";Pr.prototype.ValueBufferType=Array;Pr.prototype.DefaultInterpolation=Ku;Pr.prototype.InterpolantFactoryMethodLinear=void 0;Pr.prototype.InterpolantFactoryMethodSmooth=void 0;var xp=class extends Ii{constructor(t,n,i,s){super(t,n,i,s)}};xp.prototype.ValueTypeName="color";var Sp=class extends Ii{constructor(t,n,i,s){super(t,n,i,s)}};Sp.prototype.ValueTypeName="number";var bp=class extends Lr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let u=c+o;c!==u;c+=4)Xs.slerpFlat(a,0,r,c-o,r,c,l);return a}},ch=class extends Ii{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new bp(this.times,this.values,this.getValueSize(),t)}};ch.prototype.ValueTypeName="quaternion";ch.prototype.InterpolantFactoryMethodSmooth=void 0;var Or=class extends Ii{constructor(t,n,i){super(t,n,i)}};Or.prototype.ValueTypeName="string";Or.prototype.ValueBufferType=Array;Or.prototype.DefaultInterpolation=Ku;Or.prototype.InterpolantFactoryMethodLinear=void 0;Or.prototype.InterpolantFactoryMethodSmooth=void 0;var Mp=class extends Ii{constructor(t,n,i,s){super(t,n,i,s)}};Mp.prototype.ValueTypeName="vector";var Jd={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(mT(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!mT(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function mT(e){try{let t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Tp=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,a===!1&&s.onStart!==void 0&&s.onStart(u,r,o),a=!0},this.itemEnd=function(u){r++,s.onProgress!==void 0&&s.onProgress(u,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},nE=new Tp,dc=class{constructor(t){this.manager=t!==void 0?t:nE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};dc.DEFAULT_MATERIAL_NAME="__DEFAULT";var ec=new WeakMap,Ep=class extends dc{constructor(t){super(t)}load(t,n,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let a=this,r=Jd.get(`image:${t}`);if(r!==void 0){if(r.complete===!0)a.manager.itemStart(t),setTimeout(function(){n&&n(r),a.manager.itemEnd(t)},0);else{let d=ec.get(r);d===void 0&&(d=[],ec.set(r,d)),d.push({onLoad:n,onError:s})}return r}let o=rc("img");function l(){u(),n&&n(this);let d=ec.get(this)||[];for(let h=0;h<d.length;h++){let f=d[h];f.onLoad&&f.onLoad(this)}ec.delete(this),a.manager.itemEnd(t)}function c(d){u(),s&&s(d),Jd.remove(`image:${t}`);let h=ec.get(this)||[];for(let f=0;f<h.length;f++){let p=h[f];p.onError&&p.onError(d)}ec.delete(this),a.manager.itemError(t),a.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Jd.add(`image:${t}`,o),a.manager.itemStart(t),o.src=t,o}};var uh=class extends dc{constructor(t){super(t)}load(t,n,i,s){let a=new kn,r=new Ep(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(o){a.image=o,a.needsUpdate=!0,n!==void 0&&n(a)},i,s),a}};var qd=new X,Yd=new Xs,Vs=new X,hh=class extends is{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=Ss,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(qd,Yd,Vs),Vs.x===1&&Vs.y===1&&Vs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qd,Yd,Vs.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(qd,Yd,Vs),Vs.x===1&&Vs.y===1&&Vs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qd,Yd,Vs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Cr=new X,gT=new kt,_T=new kt,hi=class extends hh{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=lc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Zu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return lc*2*Math.atan(Math.tan(Zu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cr.x,Cr.y).multiplyScalar(-t/Cr.z),Cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Cr.x,Cr.y).multiplyScalar(-t/Cr.z)}getViewSize(t,n){return this.getViewBounds(t,gT,_T),n.subVectors(_T,gT)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Zu*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var Uo=class extends hh{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var nc=-90,ic=1,Ap=class extends is{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new hi(nc,ic,t,n);s.layers=this.layers,this.add(s);let a=new hi(nc,ic,t,n);a.layers=this.layers,this.add(a);let r=new hi(nc,ic,t,n);r.layers=this.layers,this.add(r);let o=new hi(nc,ic,t,n);o.layers=this.layers,this.add(o);let l=new hi(nc,ic,t,n);l.layers=this.layers,this.add(l);let c=new hi(nc,ic,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===Ss)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===$u)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,u),t.setRenderTarget(d,h,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},wp=class extends hi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Fv="\\[\\]\\.:\\/",$R=new RegExp("["+Fv+"]","g"),zv="[^"+Fv+"]",t3="[^"+Fv.replace("\\.","")+"]",e3=/((?:WC+[\/:])*)/.source.replace("WC",zv),n3=/(WCOD+)?/.source.replace("WCOD",t3),i3=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zv),s3=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zv),a3=new RegExp("^"+e3+n3+i3+s3+"$"),r3=["material","materials","bones","map"],uv=class{constructor(t,n,i){let s=i||Ie.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Ie=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace($R,"")}static parseTrackName(t){let n=a3.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);r3.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){Ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;Ot("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ie.Composite=uv;Ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ie.prototype.GetterByBindingType=[Ie.prototype._getValue_direct,Ie.prototype._getValue_array,Ie.prototype._getValue_arrayElement,Ie.prototype._getValue_toArray];Ie.prototype.SetterByBindingTypeAndVersioning=[[Ie.prototype._setValue_direct,Ie.prototype._setValue_direct_setNeedsUpdate,Ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_array,Ie.prototype._setValue_array_setNeedsUpdate,Ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_arrayElement,Ie.prototype._setValue_arrayElement_setNeedsUpdate,Ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_fromArray,Ie.prototype._setValue_fromArray_setNeedsUpdate,Ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var QO=new Float32Array(1);var Wv=class Wv{constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){let a=this.elements;return a[0]=t,a[2]=n,a[1]=i,a[3]=s,this}};Wv.prototype.isMatrix2=!0;var hv=Wv;function Vv(e,t,n,i){let s=o3(i);switch(n){case Rv:return e*t;case Uv:return e*t/s.components*s.byteLength;case Op:return e*t/s.components*s.byteLength;case Fr:return e*t*2/s.components*s.byteLength;case Ip:return e*t*2/s.components*s.byteLength;case Dv:return e*t*3/s.components*s.byteLength;case ss:return e*t*4/s.components*s.byteLength;case Bp:return e*t*4/s.components*s.byteLength;case mh:case gh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case _h:case vh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case zp:case Hp:return Math.max(e,16)*Math.max(t,8)/4;case Fp:case Vp:return Math.max(e,8)*Math.max(t,8)/2;case Gp:case kp:case Wp:case qp:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Xp:case yh:case Yp:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Zp:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Jp:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Kp:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case jp:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Qp:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case $p:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case tm:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case em:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case nm:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case im:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case sm:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case am:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case rm:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case om:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case lm:case cm:case um:return Math.ceil(e/4)*Math.ceil(t/4)*16;case hm:case fm:return Math.ceil(e/4)*Math.ceil(t/4)*8;case xh:case dm:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function o3(e){switch(e){case Bi:case Ev:return{byteLength:1,components:1};case mc:case Av:case Js:return{byteLength:2,components:1};case Lp:case Pp:return{byteLength:2,components:4};case Es:case Np:case As:return{byteLength:4,components:1};case wv:case Cv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function EE(){let e=null,t=!1,n=null,i=null;function s(a,r){n(a,r),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function c3(e){let t=new WeakMap;function n(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=e.createBuffer();e.bindBuffer(l,h),e.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=e.SHORT;else if(c instanceof Uint32Array)f=e.UNSIGNED_INT;else if(c instanceof Int32Array)f=e.INT;else if(c instanceof Int8Array)f=e.BYTE;else if(c instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let u=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){let p=d[h],_=d[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){let _=d[f];e.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var u3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,h3=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,f3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,m3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g3=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,v3=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,y3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,x3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,S3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,b3=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,M3=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,T3=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,E3=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,A3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,R3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,D3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,U3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,N3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,L3=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,P3=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,O3=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,I3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,B3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,F3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,z3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V3="gl_FragColor = linearToOutputTexel( gl_FragColor );",H3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,G3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,k3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,X3=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,W3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,q3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Y3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,J3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,K3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,j3=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Q3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tD=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eD=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,nD=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,iD=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sD=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aD=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rD=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oD=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lD=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cD=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uD=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hD=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fD=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,dD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_D=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vD=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yD=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xD=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SD=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bD=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,MD=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TD=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ED=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AD=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wD=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CD=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,RD=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,DD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ND=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,LD=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,PD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OD=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ID=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,BD=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zD=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,VD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qD=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,YD=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ZD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,JD=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,KD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jD=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,QD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$D=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tU=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eU=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nU=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iU=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sU=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,aU=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cU=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,uU=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hU=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dU=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mU=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gU=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_U=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vU=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yU=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,xU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,SU=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bU=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MU=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TU=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,EU=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AU=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wU=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CU=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,RU=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DU=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,UU=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,NU=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LU=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PU=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,OU=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IU=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BU=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FU=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zU=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VU=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HU=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GU=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kU=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qt={alphahash_fragment:u3,alphahash_pars_fragment:h3,alphamap_fragment:f3,alphamap_pars_fragment:d3,alphatest_fragment:p3,alphatest_pars_fragment:m3,aomap_fragment:g3,aomap_pars_fragment:_3,batching_pars_vertex:v3,batching_vertex:y3,begin_vertex:x3,beginnormal_vertex:S3,bsdfs:b3,iridescence_fragment:M3,bumpmap_pars_fragment:T3,clipping_planes_fragment:E3,clipping_planes_pars_fragment:A3,clipping_planes_pars_vertex:w3,clipping_planes_vertex:C3,color_fragment:R3,color_pars_fragment:D3,color_pars_vertex:U3,color_vertex:N3,common:L3,cube_uv_reflection_fragment:P3,defaultnormal_vertex:O3,displacementmap_pars_vertex:I3,displacementmap_vertex:B3,emissivemap_fragment:F3,emissivemap_pars_fragment:z3,colorspace_fragment:V3,colorspace_pars_fragment:H3,envmap_fragment:G3,envmap_common_pars_fragment:k3,envmap_pars_fragment:X3,envmap_pars_vertex:W3,envmap_physical_pars_fragment:nD,envmap_vertex:q3,fog_vertex:Y3,fog_pars_vertex:Z3,fog_fragment:J3,fog_pars_fragment:K3,gradientmap_pars_fragment:j3,lightmap_pars_fragment:Q3,lights_lambert_fragment:$3,lights_lambert_pars_fragment:tD,lights_pars_begin:eD,lights_toon_fragment:iD,lights_toon_pars_fragment:sD,lights_phong_fragment:aD,lights_phong_pars_fragment:rD,lights_physical_fragment:oD,lights_physical_pars_fragment:lD,lights_fragment_begin:cD,lights_fragment_maps:uD,lights_fragment_end:hD,lightprobes_pars_fragment:fD,logdepthbuf_fragment:dD,logdepthbuf_pars_fragment:pD,logdepthbuf_pars_vertex:mD,logdepthbuf_vertex:gD,map_fragment:_D,map_pars_fragment:vD,map_particle_fragment:yD,map_particle_pars_fragment:xD,metalnessmap_fragment:SD,metalnessmap_pars_fragment:bD,morphinstance_vertex:MD,morphcolor_vertex:TD,morphnormal_vertex:ED,morphtarget_pars_vertex:AD,morphtarget_vertex:wD,normal_fragment_begin:CD,normal_fragment_maps:RD,normal_pars_fragment:DD,normal_pars_vertex:UD,normal_vertex:ND,normalmap_pars_fragment:LD,clearcoat_normal_fragment_begin:PD,clearcoat_normal_fragment_maps:OD,clearcoat_pars_fragment:ID,iridescence_pars_fragment:BD,opaque_fragment:FD,packing:zD,premultiplied_alpha_fragment:VD,project_vertex:HD,dithering_fragment:GD,dithering_pars_fragment:kD,roughnessmap_fragment:XD,roughnessmap_pars_fragment:WD,shadowmap_pars_fragment:qD,shadowmap_pars_vertex:YD,shadowmap_vertex:ZD,shadowmask_pars_fragment:JD,skinbase_vertex:KD,skinning_pars_vertex:jD,skinning_vertex:QD,skinnormal_vertex:$D,specularmap_fragment:tU,specularmap_pars_fragment:eU,tonemapping_fragment:nU,tonemapping_pars_fragment:iU,transmission_fragment:sU,transmission_pars_fragment:aU,uv_pars_fragment:rU,uv_pars_vertex:oU,uv_vertex:lU,worldpos_vertex:cU,background_vert:uU,background_frag:hU,backgroundCube_vert:fU,backgroundCube_frag:dU,cube_vert:pU,cube_frag:mU,depth_vert:gU,depth_frag:_U,distance_vert:vU,distance_frag:yU,equirect_vert:xU,equirect_frag:SU,linedashed_vert:bU,linedashed_frag:MU,meshbasic_vert:TU,meshbasic_frag:EU,meshlambert_vert:AU,meshlambert_frag:wU,meshmatcap_vert:CU,meshmatcap_frag:RU,meshnormal_vert:DU,meshnormal_frag:UU,meshphong_vert:NU,meshphong_frag:LU,meshphysical_vert:PU,meshphysical_frag:OU,meshtoon_vert:IU,meshtoon_frag:BU,points_vert:FU,points_frag:zU,shadow_vert:VU,shadow_frag:HU,sprite_vert:GU,sprite_frag:kU},xt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},js={basic:{uniforms:Xn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Xn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new jt(0)},envMapIntensity:{value:1}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Xn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Xn([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Xn([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new jt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Xn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Xn([xt.points,xt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Xn([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Xn([xt.common,xt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Xn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Xn([xt.sprite,xt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distance:{uniforms:Xn([xt.common,xt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distance_vert,fragmentShader:qt.distance_frag},shadow:{uniforms:Xn([xt.lights,xt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};js.physical={uniforms:Xn([js.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var gm={r:0,b:0,g:0},XU=new sn,AE=new zt;AE.set(-1,0,0,0,1,0,0,0,1);function WU(e,t,n,i,s,a){let r=new jt(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){let y=v.backgroundBlurriness>0;S=t.get(S,y)}return S}function p(v){let S=!1,y=f(v);y===null?g(r,o):y&&y.isColor&&(g(y,1),S=!0);let E=e.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function _(v,S){let y=f(S);y&&(y.isCubeTexture||y.mapping===dh)?(c===void 0&&(c=new wn(new fc(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:Lo(js.backgroundCube.uniforms),vertexShader:js.backgroundCube.vertexShader,fragmentShader:js.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,A,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(XU.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(AE),c.material.toneMapped=ne.getTransfer(y.colorSpace)!==me,(u!==y||d!==y.version||h!==e.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=e.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new wn(new Ms(2,2),new mn({name:"BackgroundMaterial",uniforms:Lo(js.background.uniforms),vertexShader:js.background.vertexShader,fragmentShader:js.background.fragmentShader,side:Ia,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ne.getTransfer(y.colorSpace)!==me,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==e.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=e.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,S){v.getRGB(gm,Bv(e)),n.buffers.color.setClear(gm.r,gm.g,gm.b,S,a)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(v,S=1){r.set(v),o=S,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(r,o)},render:p,addToRenderList:_,dispose:m}}function qU(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=h(null),a=s,r=!1;function o(D,U,F,q,O){let k=!1,z=d(D,q,F,U);a!==z&&(a=z,c(a.object)),k=f(D,q,F,O),k&&p(D,q,F,O),O!==null&&t.update(O,e.ELEMENT_ARRAY_BUFFER),(k||r)&&(r=!1,y(D,U,F,q),O!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return e.createVertexArray()}function c(D){return e.bindVertexArray(D)}function u(D){return e.deleteVertexArray(D)}function d(D,U,F,q){let O=q.wireframe===!0,k=i[U.id];k===void 0&&(k={},i[U.id]=k);let z=D.isInstancedMesh===!0?D.id:0,K=k[z];K===void 0&&(K={},k[z]=K);let it=K[F.id];it===void 0&&(it={},K[F.id]=it);let lt=it[O];return lt===void 0&&(lt=h(l()),it[O]=lt),lt}function h(D){let U=[],F=[],q=[];for(let O=0;O<n;O++)U[O]=0,F[O]=0,q[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:F,attributeDivisors:q,object:D,attributes:{},index:null}}function f(D,U,F,q){let O=a.attributes,k=U.attributes,z=0,K=F.getAttributes();for(let it in K)if(K[it].location>=0){let st=O[it],ct=k[it];if(ct===void 0&&(it==="instanceMatrix"&&D.instanceMatrix&&(ct=D.instanceMatrix),it==="instanceColor"&&D.instanceColor&&(ct=D.instanceColor)),st===void 0||st.attribute!==ct||ct&&st.data!==ct.data)return!0;z++}return a.attributesNum!==z||a.index!==q}function p(D,U,F,q){let O={},k=U.attributes,z=0,K=F.getAttributes();for(let it in K)if(K[it].location>=0){let st=k[it];st===void 0&&(it==="instanceMatrix"&&D.instanceMatrix&&(st=D.instanceMatrix),it==="instanceColor"&&D.instanceColor&&(st=D.instanceColor));let ct={};ct.attribute=st,st&&st.data&&(ct.data=st.data),O[it]=ct,z++}a.attributes=O,a.attributesNum=z,a.index=q}function _(){let D=a.newAttributes;for(let U=0,F=D.length;U<F;U++)D[U]=0}function g(D){m(D,0)}function m(D,U){let F=a.newAttributes,q=a.enabledAttributes,O=a.attributeDivisors;F[D]=1,q[D]===0&&(e.enableVertexAttribArray(D),q[D]=1),O[D]!==U&&(e.vertexAttribDivisor(D,U),O[D]=U)}function v(){let D=a.newAttributes,U=a.enabledAttributes;for(let F=0,q=U.length;F<q;F++)U[F]!==D[F]&&(e.disableVertexAttribArray(F),U[F]=0)}function S(D,U,F,q,O,k,z){z===!0?e.vertexAttribIPointer(D,U,F,O,k):e.vertexAttribPointer(D,U,F,q,O,k)}function y(D,U,F,q){_();let O=q.attributes,k=F.getAttributes(),z=U.defaultAttributeValues;for(let K in k){let it=k[K];if(it.location>=0){let lt=O[K];if(lt===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(lt=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(lt=D.instanceColor)),lt!==void 0){let st=lt.normalized,ct=lt.itemSize,Wt=t.get(lt);if(Wt===void 0)continue;let Lt=Wt.buffer,Ft=Wt.type,Q=Wt.bytesPerElement,ht=Ft===e.INT||Ft===e.UNSIGNED_INT||lt.gpuType===Np;if(lt.isInterleavedBufferAttribute){let at=lt.data,Pt=at.stride,Vt=lt.offset;if(at.isInstancedInterleavedBuffer){for(let Dt=0;Dt<it.locationSize;Dt++)m(it.location+Dt,at.meshPerAttribute);D.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Dt=0;Dt<it.locationSize;Dt++)g(it.location+Dt);e.bindBuffer(e.ARRAY_BUFFER,Lt);for(let Dt=0;Dt<it.locationSize;Dt++)S(it.location+Dt,ct/it.locationSize,Ft,st,Pt*Q,(Vt+ct/it.locationSize*Dt)*Q,ht)}else{if(lt.isInstancedBufferAttribute){for(let at=0;at<it.locationSize;at++)m(it.location+at,lt.meshPerAttribute);D.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let at=0;at<it.locationSize;at++)g(it.location+at);e.bindBuffer(e.ARRAY_BUFFER,Lt);for(let at=0;at<it.locationSize;at++)S(it.location+at,ct/it.locationSize,Ft,st,ct*Q,ct/it.locationSize*at*Q,ht)}}else if(z!==void 0){let st=z[K];if(st!==void 0)switch(st.length){case 2:e.vertexAttrib2fv(it.location,st);break;case 3:e.vertexAttrib3fv(it.location,st);break;case 4:e.vertexAttrib4fv(it.location,st);break;default:e.vertexAttrib1fv(it.location,st)}}}}v()}function E(){T();for(let D in i){let U=i[D];for(let F in U){let q=U[F];for(let O in q){let k=q[O];for(let z in k)u(k[z].object),delete k[z];delete q[O]}}delete i[D]}}function A(D){if(i[D.id]===void 0)return;let U=i[D.id];for(let F in U){let q=U[F];for(let O in q){let k=q[O];for(let z in k)u(k[z].object),delete k[z];delete q[O]}}delete i[D.id]}function M(D){for(let U in i){let F=i[U];for(let q in F){let O=F[q];if(O[D.id]===void 0)continue;let k=O[D.id];for(let z in k)u(k[z].object),delete k[z];delete O[D.id]}}}function x(D){for(let U in i){let F=i[U],q=D.isInstancedMesh===!0?D.id:0,O=F[q];if(O!==void 0){for(let k in O){let z=O[k];for(let K in z)u(z[K].object),delete z[K];delete O[k]}delete F[q],Object.keys(F).length===0&&delete i[U]}}}function T(){R(),r=!0,a!==s&&(a=s,c(a.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:x,releaseStatesOfProgram:M,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function YU(e,t,n){let i;function s(l){i=l}function a(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,u){u!==0&&(e.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];n.update(h,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function ZU(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let M=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(M){return!(M!==ss&&i.convert(M)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(M){let x=M===Js&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(M!==Bi&&i.convert(M)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==As&&!x)}function l(M){if(M==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);u!==c&&(Nt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&h===!1&&Nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),p=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),m=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),S=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),E=e.getParameter(e.MAX_SAMPLES),A=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:y,maxSamples:E,samples:A}}function JU(e){let t=this,n=null,i=0,s=!1,a=!1,r=new Hs,o=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,f){let p=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,m=e.get(d);if(!s||p===null||p.length===0||a&&!g)a?u(null):c();else{let v=a?0:i,S=v*4,y=m.clippingState||null;l.value=y,y=u(p,h,S,f);for(let E=0;E!==S;++E)y[E]=n[E];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,f,p){let _=d!==null?d.length:0,g=null;if(_!==0){if(g=l.value,p!==!0||g===null){let m=f+_*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let S=0,y=f;S!==_;++S,y+=4)r.copy(d[S]).applyMatrix4(v,o),r.normal.toArray(g,y),g[y+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}var zr=4,iE=[.125,.215,.35,.446,.526,.582],Po=20,KU=256,Sh=new Uo,sE=new jt,qv=null,Yv=0,Zv=0,Jv=!1,jU=new X,vm=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=jU}=a;qv=this._renderer.getRenderTarget(),Yv=this._renderer.getActiveCubeFace(),Zv=this._renderer.getActiveMipmapLevel(),Jv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oE(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rE(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(qv,Yv,Zv),this._renderer.xr.enabled=Jv,t.scissorTest=!1,vc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Ir||t.mapping===No?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qv=this._renderer.getRenderTarget(),Yv=this._renderer.getActiveCubeFace(),Zv=this._renderer.getActiveMipmapLevel(),Jv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Te,minFilter:Te,generateMipmaps:!1,type:Js,format:ss,colorSpace:ju,depthBuffer:!1},s=aE(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=aE(t,n,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=QU(a)),this._blurMaterial=tN(a,t,n),this._ggxMaterial=$U(a,t,n)}return s}_compileMaterial(t){let n=new wn(new Ws,t);this._renderer.compile(n,Sh)}_sceneToCubeUV(t,n,i,s,a){let l=new hi(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(sE),d.toneMapping=Ts,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wn(new fc,new ah({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,m=!1,v=t.background;v?v.isColor&&(g.color.copy(v),t.background=null,m=!0):(g.color.copy(sE),m=!0);for(let S=0;S<6;S++){let y=S%3;y===0?(l.up.set(0,c[S],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+u[S],a.y,a.z)):y===1?(l.up.set(0,0,c[S]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+u[S],a.z)):(l.up.set(0,c[S],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+u[S]));let E=this._cubeSize;vc(s,y*E,S>2?E:0,E,E),d.setRenderTarget(s),m&&d.render(_,l),d.render(t,l)}d.toneMapping=f,d.autoClear=h,t.background=v}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===Ir||t.mapping===No;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=oE()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rE());let a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;let o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;vc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,Sh)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(t,a-1,a);n.autoClear=i}_applyGGXFilter(t,n,i){let s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;let l=r.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,f=d*h,{_lodMax:p}=this,_=this._sizeLods[i],g=3*_*(i>p-zr?i-p+zr:0),m=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-n,vc(a,g,m,3*_,2*_),s.setRenderTarget(a),s.render(o,Sh),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=p-i,vc(t,g,m,3*_,2*_),s.setRenderTarget(t),s.render(o,Sh)}_blur(t,n,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,n,i,s,a,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Ot("blur direction must be either latitudinal or longitudinal!");let u=3,d=this._lodMeshes[s];d.material=c;let h=c.uniforms,f=this._sizeLods[i]-1,p=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*Po-1),_=a/p,g=isFinite(a)?1+Math.floor(u*_):Po;g>Po&&Nt(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Po}`);let m=[],v=0;for(let M=0;M<Po;++M){let x=M/_,T=Math.exp(-x*x/2);m.push(T),M===0?v+=T:M<g&&(v+=2*T)}for(let M=0;M<m.length;M++)m[M]=m[M]/v;h.envMap.value=t.texture,h.samples.value=g,h.weights.value=m,h.latitudinal.value=r==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:S}=this;h.dTheta.value=p,h.mipInt.value=S-i;let y=this._sizeLods[s],E=3*y*(s>S-zr?s-S+zr:0),A=4*(this._cubeSize-y);vc(n,E,A,3*y,2*y),l.setRenderTarget(n),l.render(d,Sh)}};function QU(e){let t=[],n=[],i=[],s=e,a=e-zr+1+iE.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);t.push(o);let l=1/o;r>e-zr?l=iE[r-e+zr-1]:r===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,p=6,_=3,g=2,m=1,v=new Float32Array(_*p*f),S=new Float32Array(g*p*f),y=new Float32Array(m*p*f);for(let A=0;A<f;A++){let M=A%3*2/3-1,x=A>2?0:-1,T=[M,x,0,M+2/3,x,0,M+2/3,x+1,0,M,x,0,M+2/3,x+1,0,M,x+1,0];v.set(T,_*p*A),S.set(h,g*p*A);let R=[A,A,A,A,A,A];y.set(R,m*p*A)}let E=new Ws;E.setAttribute("position",new Pi(v,_)),E.setAttribute("uv",new Pi(S,g)),E.setAttribute("faceIndex",new Pi(y,m)),i.push(new wn(E,null)),s>zr&&s--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function aE(e,t,n){let i=new Oi(e,t,n);return i.texture.mapping=dh,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vc(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function $U(e,t,n){return new mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:KU,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Sm(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ys,depthTest:!1,depthWrite:!1})}function tN(e,t,n){let i=new Float32Array(Po),s=new X(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:Po,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Sm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ys,depthTest:!1,depthWrite:!1})}function rE(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ys,depthTest:!1,depthWrite:!1})}function oE(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ys,depthTest:!1,depthWrite:!1})}function Sm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var ym=class extends Oi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new oh(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new fc(5,5,5),a=new mn({name:"CubemapFromEquirect",uniforms:Lo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$n,blending:Ys});a.uniforms.tEquirect.value=n;let r=new wn(s,a),o=n.minFilter;return n.minFilter===Zs&&(n.minFilter=Te),new Ap(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}};function eN(e){let t=new WeakMap,n=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?r(h):a(h)}function a(h){if(h&&h.isTexture){let f=h.mapping;if(f===Rp||f===Dp)if(t.has(h)){let p=t.get(h).texture;return o(p,h.mapping)}else{let p=h.image;if(p&&p.height>0){let _=new ym(p.height);return _.fromEquirectangularTexture(e,h),t.set(h,_),h.addEventListener("dispose",c),o(_.texture,h.mapping)}else return null}}return h}function r(h){if(h&&h.isTexture){let f=h.mapping,p=f===Rp||f===Dp,_=f===Ir||f===No;if(p||_){let g=n.get(h),m=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return i===null&&(i=new vm(e)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,n.set(h,g),g.texture;if(g!==void 0)return g.texture;{let v=h.image;return p&&v&&v.height>0||_&&v&&l(v)?(i===null&&(i=new vm(e)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,n.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,f){return f===Rp?h.mapping=Ir:f===Dp&&(h.mapping=No),h}function l(h){let f=0,p=6;for(let _=0;_<p;_++)h[_]!==void 0&&f++;return f===p}function c(h){let f=h.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let p=n.get(f);p!==void 0&&(n.delete(f),p.dispose())}function d(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function nN(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Ao("WebGLRenderer: "+i+" extension not supported."),s}}}function iN(e,t,n,i){let s={},a=new WeakMap;function r(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let p in h.attributes)t.remove(h.attributes[p]);h.removeEventListener("dispose",r),delete s[h.id];let f=a.get(h);f&&(t.remove(f),a.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",r),s[h.id]=!0,n.memory.geometries++),h}function l(d){let h=d.attributes;for(let f in h)t.update(h[f],e.ARRAY_BUFFER)}function c(d){let h=[],f=d.index,p=d.attributes.position,_=0;if(p===void 0)return;if(f!==null){let v=f.array;_=f.version;for(let S=0,y=v.length;S<y;S+=3){let E=v[S+0],A=v[S+1],M=v[S+2];h.push(E,A,A,M,M,E)}}else{let v=p.array;_=p.version;for(let S=0,y=v.length/3-1;S<y;S+=3){let E=S+0,A=S+1,M=S+2;h.push(E,A,A,M,M,E)}}let g=new(p.count>=65535?sh:ih)(h,1);g.version=_;let m=a.get(d);m&&t.remove(m),a.set(d,g)}function u(d){let h=a.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function sN(e,t,n){let i;function s(d){i=d}let a,r;function o(d){a=d.type,r=d.bytesPerElement}function l(d,h){e.drawElements(i,h,a,d*r),n.update(h,i,1)}function c(d,h,f){f!==0&&(e.drawElementsInstanced(i,h,a,d*r,f),n.update(h,i,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,a,d,0,f);let _=0;for(let g=0;g<f;g++)_+=h[g];n.update(_,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function aN(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:Ot("WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function rN(e,t,n){let i=new WeakMap,s=new se;function a(r,o,l){let c=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==d){let T=function(){M.dispose(),i.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],S=0;f===!0&&(S=1),p===!0&&(S=2),_===!0&&(S=3);let y=o.attributes.position.count*S,E=1;y>t.maxTextureSize&&(E=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let A=new Float32Array(y*E*4*d),M=new th(A,y,E,d);M.type=As,M.needsUpdate=!0;let x=S*4;for(let R=0;R<d;R++){let D=g[R],U=m[R],F=v[R],q=y*E*4*R;for(let O=0;O<D.count;O++){let k=O*x;f===!0&&(s.fromBufferAttribute(D,O),A[q+k+0]=s.x,A[q+k+1]=s.y,A[q+k+2]=s.z,A[q+k+3]=0),p===!0&&(s.fromBufferAttribute(U,O),A[q+k+4]=s.x,A[q+k+5]=s.y,A[q+k+6]=s.z,A[q+k+7]=0),_===!0&&(s.fromBufferAttribute(F,O),A[q+k+8]=s.x,A[q+k+9]=s.y,A[q+k+10]=s.z,A[q+k+11]=F.itemSize===4?s.w:1)}}h={count:d,texture:M,size:new kt(y,E)},i.set(o,h),o.addEventListener("dispose",T)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(e,"morphTargetBaseInfluence",p),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:a}}function oN(e,t,n,i,s){let a=new WeakMap;function r(c){let u=s.render.frame,d=c.geometry,h=t.get(c,d);if(a.get(h)!==u&&(t.update(h),a.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==u&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),a.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;a.get(f)!==u&&(f.update(),a.set(f,u))}return h}function o(){a=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:r,dispose:o}}var lN={[_v]:"LINEAR_TONE_MAPPING",[vv]:"REINHARD_TONE_MAPPING",[yv]:"CINEON_TONE_MAPPING",[xv]:"ACES_FILMIC_TONE_MAPPING",[bv]:"AGX_TONE_MAPPING",[Mv]:"NEUTRAL_TONE_MAPPING",[Sv]:"CUSTOM_TONE_MAPPING"};function cN(e,t,n,i,s,a){let r=new Oi(t,n,{type:e,depthBuffer:s,stencilBuffer:a,samples:i?4:0,depthTexture:s?new Ba(t,n):void 0}),o=new Oi(t,n,{type:Js,depthBuffer:!1,stencilBuffer:!1}),l=new Ws;l.setAttribute("position",new ns([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ns([0,2,0,0,2,0],2));let c=new dp({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new wn(l,c),d=new Uo(-1,1,1,-1,0,1),h=null,f=null,p=!1,_,g=null,m=[],v=!1;this.setSize=function(S,y){r.setSize(S,y),o.setSize(S,y);for(let E=0;E<m.length;E++){let A=m[E];A.setSize&&A.setSize(S,y)}},this.setEffects=function(S){m=S,v=m.length>0&&m[0].isRenderPass===!0;let y=r.width,E=r.height;for(let A=0;A<m.length;A++){let M=m[A];M.setSize&&M.setSize(y,E)}},this.begin=function(S,y){if(p||S.toneMapping===Ts&&m.length===0)return!1;if(g=y,y!==null){let E=y.width,A=y.height;(r.width!==E||r.height!==A)&&this.setSize(E,A)}return v===!1&&S.setRenderTarget(r),_=S.toneMapping,S.toneMapping=Ts,!0},this.hasRenderPass=function(){return v},this.end=function(S,y){S.toneMapping=_,p=!0;let E=r,A=o;for(let M=0;M<m.length;M++){let x=m[M];if(x.enabled!==!1&&(x.render(S,A,E,y),x.needsSwap!==!1)){let T=E;E=A,A=T}}if(h!==S.outputColorSpace||f!==S.toneMapping){h=S.outputColorSpace,f=S.toneMapping,c.defines={},ne.getTransfer(h)===me&&(c.defines.SRGB_TRANSFER="");let M=lN[f];M&&(c.defines[M]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,S.setRenderTarget(g),S.render(u,d),g=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),l.dispose(),c.dispose()}}var wE=new kn,Qv=new Ba(1,1),CE=new th,RE=new up,DE=new oh,lE=[],cE=[],uE=new Float32Array(16),hE=new Float32Array(9),fE=new Float32Array(4);function xc(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=lE[s];if(a===void 0&&(a=new Float32Array(s),lE[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function _n(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function vn(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function bm(e,t){let n=cE[t];n===void 0&&(n=new Int32Array(t),cE[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function uN(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function hN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_n(n,t))return;e.uniform2fv(this.addr,t),vn(n,t)}}function fN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(_n(n,t))return;e.uniform3fv(this.addr,t),vn(n,t)}}function dN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_n(n,t))return;e.uniform4fv(this.addr,t),vn(n,t)}}function pN(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(_n(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),vn(n,t)}else{if(_n(n,i))return;fE.set(i),e.uniformMatrix2fv(this.addr,!1,fE),vn(n,i)}}function mN(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(_n(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),vn(n,t)}else{if(_n(n,i))return;hE.set(i),e.uniformMatrix3fv(this.addr,!1,hE),vn(n,i)}}function gN(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(_n(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),vn(n,t)}else{if(_n(n,i))return;uE.set(i),e.uniformMatrix4fv(this.addr,!1,uE),vn(n,i)}}function _N(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function vN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_n(n,t))return;e.uniform2iv(this.addr,t),vn(n,t)}}function yN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(_n(n,t))return;e.uniform3iv(this.addr,t),vn(n,t)}}function xN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_n(n,t))return;e.uniform4iv(this.addr,t),vn(n,t)}}function SN(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function bN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_n(n,t))return;e.uniform2uiv(this.addr,t),vn(n,t)}}function MN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(_n(n,t))return;e.uniform3uiv(this.addr,t),vn(n,t)}}function TN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_n(n,t))return;e.uniform4uiv(this.addr,t),vn(n,t)}}function EN(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(Qv.compareFunction=n.isReversedDepthBuffer()?mm:pm,a=Qv):a=wE,n.setTexture2D(t||a,s)}function AN(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||RE,s)}function wN(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||DE,s)}function CN(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||CE,s)}function RN(e){switch(e){case 5126:return uN;case 35664:return hN;case 35665:return fN;case 35666:return dN;case 35674:return pN;case 35675:return mN;case 35676:return gN;case 5124:case 35670:return _N;case 35667:case 35671:return vN;case 35668:case 35672:return yN;case 35669:case 35673:return xN;case 5125:return SN;case 36294:return bN;case 36295:return MN;case 36296:return TN;case 35678:case 36198:case 36298:case 36306:case 35682:return EN;case 35679:case 36299:case 36307:return AN;case 35680:case 36300:case 36308:case 36293:return wN;case 36289:case 36303:case 36311:case 36292:return CN}}function DN(e,t){e.uniform1fv(this.addr,t)}function UN(e,t){let n=xc(t,this.size,2);e.uniform2fv(this.addr,n)}function NN(e,t){let n=xc(t,this.size,3);e.uniform3fv(this.addr,n)}function LN(e,t){let n=xc(t,this.size,4);e.uniform4fv(this.addr,n)}function PN(e,t){let n=xc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function ON(e,t){let n=xc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function IN(e,t){let n=xc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function BN(e,t){e.uniform1iv(this.addr,t)}function FN(e,t){e.uniform2iv(this.addr,t)}function zN(e,t){e.uniform3iv(this.addr,t)}function VN(e,t){e.uniform4iv(this.addr,t)}function HN(e,t){e.uniform1uiv(this.addr,t)}function GN(e,t){e.uniform2uiv(this.addr,t)}function kN(e,t){e.uniform3uiv(this.addr,t)}function XN(e,t){e.uniform4uiv(this.addr,t)}function WN(e,t,n){let i=this.cache,s=t.length,a=bm(n,s);_n(i,a)||(e.uniform1iv(this.addr,a),vn(i,a));let r;this.type===e.SAMPLER_2D_SHADOW?r=Qv:r=wE;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||r,a[o])}function qN(e,t,n){let i=this.cache,s=t.length,a=bm(n,s);_n(i,a)||(e.uniform1iv(this.addr,a),vn(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||RE,a[r])}function YN(e,t,n){let i=this.cache,s=t.length,a=bm(n,s);_n(i,a)||(e.uniform1iv(this.addr,a),vn(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||DE,a[r])}function ZN(e,t,n){let i=this.cache,s=t.length,a=bm(n,s);_n(i,a)||(e.uniform1iv(this.addr,a),vn(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||CE,a[r])}function JN(e){switch(e){case 5126:return DN;case 35664:return UN;case 35665:return NN;case 35666:return LN;case 35674:return PN;case 35675:return ON;case 35676:return IN;case 5124:case 35670:return BN;case 35667:case 35671:return FN;case 35668:case 35672:return zN;case 35669:case 35673:return VN;case 5125:return HN;case 36294:return GN;case 36295:return kN;case 36296:return XN;case 35678:case 36198:case 36298:case 36306:case 35682:return WN;case 35679:case 36299:case 36307:return qN;case 35680:case 36300:case 36308:case 36293:return YN;case 36289:case 36303:case 36311:case 36292:return ZN}}var $v=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=RN(n.type)}},ty=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=JN(n.type)}},ey=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},Kv=/(\w+)(\])?(\[|\.)?/g;function dE(e,t){e.seq.push(t),e.map[t.id]=t}function KN(e,t,n){let i=e.name,s=i.length;for(Kv.lastIndex=0;;){let a=Kv.exec(i),r=Kv.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){dE(n,c===void 0?new $v(o,e,t):new ty(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new ey(o),dE(n,d)),n=d}}}var yc=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);KN(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function pE(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var jN=37297,QN=0;function $N(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var mE=new zt;function tL(e){ne._getMatrix(mE,ne.workingColorSpace,e);let t=`mat3( ${mE.elements.map(n=>n.toFixed(4))} )`;switch(ne.getTransfer(e)){case Qu:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function gE(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+$N(e.getShaderSource(t),o)}else return a}function eL(e,t){let n=tL(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var nL={[_v]:"Linear",[vv]:"Reinhard",[yv]:"Cineon",[xv]:"ACESFilmic",[bv]:"AgX",[Mv]:"Neutral",[Sv]:"Custom"};function iL(e,t){let n=nL[t];return n===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var _m=new X;function sL(){ne.getLuminanceCoefficients(_m);let e=_m.x.toFixed(4),t=_m.y.toFixed(4),n=_m.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aL(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mh).join(`
`)}function rL(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function oL(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function Mh(e){return e!==""}function _E(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vE(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var lL=/^[ \t]*#include +<([\w\d./]+)>/gm;function ny(e){return e.replace(lL,uL)}var cL=new Map;function uL(e,t){let n=qt[t];if(n===void 0){let i=cL.get(t);if(i!==void 0)n=qt[i],Nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ny(n)}var hL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yE(e){return e.replace(hL,fL)}function fL(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function xE(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var dL={[fh]:"SHADOWMAP_TYPE_PCF",[pc]:"SHADOWMAP_TYPE_VSM"};function pL(e){return dL[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var mL={[Ir]:"ENVMAP_TYPE_CUBE",[No]:"ENVMAP_TYPE_CUBE",[dh]:"ENVMAP_TYPE_CUBE_UV"};function gL(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":mL[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var _L={[No]:"ENVMAP_MODE_REFRACTION"};function vL(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":_L[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var yL={[gv]:"ENVMAP_BLENDING_MULTIPLY",[zT]:"ENVMAP_BLENDING_MIX",[VT]:"ENVMAP_BLENDING_ADD"};function xL(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":yL[e.combine]||"ENVMAP_BLENDING_NONE"}function SL(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function bL(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=pL(n),c=gL(n),u=vL(n),d=xL(n),h=SL(n),f=aL(n),p=rL(a),_=s.createProgram(),g,m,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(Mh).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(Mh).join(`
`),m.length>0&&(m+=`
`)):(g=[xE(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mh).join(`
`),m=[xE(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ts?"#define TONE_MAPPING":"",n.toneMapping!==Ts?qt.tonemapping_pars_fragment:"",n.toneMapping!==Ts?iL("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,eL("linearToOutputTexel",n.outputColorSpace),sL(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Mh).join(`
`)),r=ny(r),r=_E(r,n),r=vE(r,n),o=ny(o),o=_E(o,n),o=vE(o,n),r=yE(r),o=yE(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",n.glslVersion===Lv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Lv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=v+g+r,y=v+m+o,E=pE(s,s.VERTEX_SHADER,S),A=pE(s,s.FRAGMENT_SHADER,y);s.attachShader(_,E),s.attachShader(_,A),n.index0AttributeName!==void 0?s.bindAttribLocation(_,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function M(D){if(e.debug.checkShaderErrors){let U=s.getProgramInfoLog(_)||"",F=s.getShaderInfoLog(E)||"",q=s.getShaderInfoLog(A)||"",O=U.trim(),k=F.trim(),z=q.trim(),K=!0,it=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(K=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,_,E,A);else{let lt=gE(s,E,"vertex"),st=gE(s,A,"fragment");Ot("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+lt+`
`+st)}else O!==""?Nt("WebGLProgram: Program Info Log:",O):(k===""||z==="")&&(it=!1);it&&(D.diagnostics={runnable:K,programLog:O,vertexShader:{log:k,prefix:g},fragmentShader:{log:z,prefix:m}})}s.deleteShader(E),s.deleteShader(A),x=new yc(s,_),T=oL(s,_)}let x;this.getUniforms=function(){return x===void 0&&M(this),x};let T;this.getAttributes=function(){return T===void 0&&M(this),T};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(_,jN)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=QN++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=A,this}var ML=0,iy=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new sy(t),n.set(t,i)),i}},sy=class{constructor(t){this.id=ML++,this.code=t,this.usedTimes=0}};function TL(e){return e===Fr||e===yh||e===xh}function EL(e,t,n,i,s,a){let r=new eh,o=new iy,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,T,R,D,U,F){let q=D.fog,O=U.geometry,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,K=t.get(x.envMap||k,z),it=K&&K.mapping===dh?K.image.height:null,lt=f[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&Nt("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let st=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ct=st!==void 0?st.length:0,Wt=0;O.morphAttributes.position!==void 0&&(Wt=1),O.morphAttributes.normal!==void 0&&(Wt=2),O.morphAttributes.color!==void 0&&(Wt=3);let Lt,Ft,Q,ht;if(lt){let At=js[lt];Lt=At.vertexShader,Ft=At.fragmentShader}else{Lt=x.vertexShader,Ft=x.fragmentShader;let At=o.getVertexShaderStage(x),Re=o.getFragmentShaderStage(x);o.update(x,At,Re),Q=At.id,ht=Re.id}let at=e.getRenderTarget(),Pt=e.state.buffers.depth.getReversed(),Vt=U.isInstancedMesh===!0,Dt=U.isBatchedMesh===!0,Be=!!x.map,Yt=!!x.matcap,ce=!!K,Qt=!!x.aoMap,Bt=!!x.lightMap,Zt=!!x.bumpMap&&x.wireframe===!1,Ee=!!x.normalMap,Je=!!x.displacementMap,tn=!!x.emissiveMap,ue=!!x.metalnessMap,Ge=!!x.roughnessMap,L=x.anisotropy>0,ke=x.clearcoat>0,oe=x.dispersion>0,C=x.iridescence>0,b=x.sheen>0,I=x.transmission>0,G=L&&!!x.anisotropyMap,Z=ke&&!!x.clearcoatMap,ot=ke&&!!x.clearcoatNormalMap,dt=ke&&!!x.clearcoatRoughnessMap,J=C&&!!x.iridescenceMap,Y=C&&!!x.iridescenceThicknessMap,nt=b&&!!x.sheenColorMap,Et=b&&!!x.sheenRoughnessMap,pt=!!x.specularMap,ut=!!x.specularColorMap,Rt=!!x.specularIntensityMap,Ut=I&&!!x.transmissionMap,Ht=I&&!!x.thicknessMap,N=!!x.gradientMap,ft=!!x.alphaMap,j=x.alphaTest>0,mt=!!x.alphaHash,vt=!!x.extensions,et=Ts;x.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(et=e.toneMapping);let Ct={shaderID:lt,shaderType:x.type,shaderName:x.name,vertexShader:Lt,fragmentShader:Ft,defines:x.defines,customVertexShaderID:Q,customFragmentShaderID:ht,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Dt,batchingColor:Dt&&U._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&U.instanceColor!==null,instancingMorph:Vt&&U.morphTexture!==null,outputColorSpace:at===null?e.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Be,matcap:Yt,envMap:ce,envMapMode:ce&&K.mapping,envMapCubeUVHeight:it,aoMap:Qt,lightMap:Bt,bumpMap:Zt,normalMap:Ee,displacementMap:Je,emissiveMap:tn,normalMapObjectSpace:Ee&&x.normalMapType===kT,normalMapTangentSpace:Ee&&x.normalMapType===Nv,packedNormalMap:Ee&&x.normalMapType===Nv&&TL(x.normalMap.format),metalnessMap:ue,roughnessMap:Ge,anisotropy:L,anisotropyMap:G,clearcoat:ke,clearcoatMap:Z,clearcoatNormalMap:ot,clearcoatRoughnessMap:dt,dispersion:oe,iridescence:C,iridescenceMap:J,iridescenceThicknessMap:Y,sheen:b,sheenColorMap:nt,sheenRoughnessMap:Et,specularMap:pt,specularColorMap:ut,specularIntensityMap:Rt,transmission:I,transmissionMap:Ut,thicknessMap:Ht,gradientMap:N,opaque:x.transparent===!1&&x.blending===wo&&x.alphaToCoverage===!1,alphaMap:ft,alphaTest:j,alphaHash:mt,combine:x.combine,mapUv:Be&&p(x.map.channel),aoMapUv:Qt&&p(x.aoMap.channel),lightMapUv:Bt&&p(x.lightMap.channel),bumpMapUv:Zt&&p(x.bumpMap.channel),normalMapUv:Ee&&p(x.normalMap.channel),displacementMapUv:Je&&p(x.displacementMap.channel),emissiveMapUv:tn&&p(x.emissiveMap.channel),metalnessMapUv:ue&&p(x.metalnessMap.channel),roughnessMapUv:Ge&&p(x.roughnessMap.channel),anisotropyMapUv:G&&p(x.anisotropyMap.channel),clearcoatMapUv:Z&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:ot&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Y&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Et&&p(x.sheenRoughnessMap.channel),specularMapUv:pt&&p(x.specularMap.channel),specularColorMapUv:ut&&p(x.specularColorMap.channel),specularIntensityMapUv:Rt&&p(x.specularIntensityMap.channel),transmissionMapUv:Ut&&p(x.transmissionMap.channel),thicknessMapUv:Ht&&p(x.thicknessMap.channel),alphaMapUv:ft&&p(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Ee||L),vertexNormals:!!O.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!O.attributes.uv&&(Be||ft),fog:!!q,useFog:x.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||O.attributes.normal===void 0&&Ee===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Pt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:Wt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:et,decodeVideoTexture:Be&&x.map.isVideoTexture===!0&&ne.getTransfer(x.map.colorSpace)===me,decodeVideoTextureEmissive:tn&&x.emissiveMap.isVideoTexture===!0&&ne.getTransfer(x.emissiveMap.colorSpace)===me,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===qs,flipSided:x.side===$n,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:vt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&x.extensions.multiDraw===!0||Dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ct.vertexUv1s=l.has(1),Ct.vertexUv2s=l.has(2),Ct.vertexUv3s=l.has(3),l.clear(),Ct}function g(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)T.push(R),T.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(m(T,x),v(T,x),T.push(e.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function m(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function v(x,T){r.disableAll(),T.instancing&&r.enable(0),T.instancingColor&&r.enable(1),T.instancingMorph&&r.enable(2),T.matcap&&r.enable(3),T.envMap&&r.enable(4),T.normalMapObjectSpace&&r.enable(5),T.normalMapTangentSpace&&r.enable(6),T.clearcoat&&r.enable(7),T.iridescence&&r.enable(8),T.alphaTest&&r.enable(9),T.vertexColors&&r.enable(10),T.vertexAlphas&&r.enable(11),T.vertexUv1s&&r.enable(12),T.vertexUv2s&&r.enable(13),T.vertexUv3s&&r.enable(14),T.vertexTangents&&r.enable(15),T.anisotropy&&r.enable(16),T.alphaHash&&r.enable(17),T.batching&&r.enable(18),T.dispersion&&r.enable(19),T.batchingColor&&r.enable(20),T.gradientMap&&r.enable(21),T.packedNormalMap&&r.enable(22),T.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),T.fog&&r.enable(0),T.useFog&&r.enable(1),T.flatShading&&r.enable(2),T.logarithmicDepthBuffer&&r.enable(3),T.reversedDepthBuffer&&r.enable(4),T.skinning&&r.enable(5),T.morphTargets&&r.enable(6),T.morphNormals&&r.enable(7),T.morphColors&&r.enable(8),T.premultipliedAlpha&&r.enable(9),T.shadowMapEnabled&&r.enable(10),T.doubleSided&&r.enable(11),T.flipSided&&r.enable(12),T.useDepthPacking&&r.enable(13),T.dithering&&r.enable(14),T.transmission&&r.enable(15),T.sheen&&r.enable(16),T.opaque&&r.enable(17),T.pointsUvs&&r.enable(18),T.decodeVideoTexture&&r.enable(19),T.decodeVideoTextureEmissive&&r.enable(20),T.alphaToCoverage&&r.enable(21),T.numLightProbeGrids>0&&r.enable(22),T.hasPositionAttribute&&r.enable(23),x.push(r.mask)}function S(x){let T=f[x.type],R;if(T){let D=js[T];R=eE.clone(D.uniforms)}else R=x.uniforms;return R}function y(x,T){let R=u.get(T);return R!==void 0?++R.usedTimes:(R=new bL(e,T,x,s),c.push(R),u.set(T,R)),R}function E(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function A(x){o.remove(x)}function M(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:S,acquireProgram:y,releaseProgram:E,releaseShaderCache:A,programs:c,dispose:M}}function AL(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function wL(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function SE(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function bE(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,p,_,g,m){let v=e[t];return v===void 0?(v={id:h.id,object:h,geometry:f,material:p,materialVariant:r(h),groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},e[t]=v):(v.id=h.id,v.object=h,v.geometry=f,v.material=p,v.materialVariant=r(h),v.groupOrder=_,v.renderOrder=h.renderOrder,v.z=g,v.group=m),t++,v}function l(h,f,p,_,g,m){let v=o(h,f,p,_,g,m);p.transmission>0?i.push(v):p.transparent===!0?s.push(v):n.push(v)}function c(h,f,p,_,g,m){let v=o(h,f,p,_,g,m);p.transmission>0?i.unshift(v):p.transparent===!0?s.unshift(v):n.unshift(v)}function u(h,f,p){n.length>1&&n.sort(h||wL),i.length>1&&i.sort(f||SE),s.length>1&&s.sort(f||SE),p&&(n.reverse(),i.reverse(),s.reverse())}function d(){for(let h=t,f=e.length;h<f;h++){let p=e[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:d,sort:u}}function CL(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new bE,e.set(i,[r])):s>=a.length?(r=new bE,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function RL(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new X,color:new jt};break;case"SpotLight":n={position:new X,direction:new X,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new jt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":n={color:new jt,position:new X,halfWidth:new X,halfHeight:new X};break}return e[t.id]=n,n}}}function DL(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var UL=0;function NL(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function LL(e){let t=new RL,n=DL(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);let s=new X,a=new sn,r=new sn;function o(c){let u=0,d=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,v=0,S=0,y=0,E=0,A=0,M=0;c.sort(NL);for(let T=0,R=c.length;T<R;T++){let D=c[T],U=D.color,F=D.intensity,q=D.distance,O=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Fr?O=D.shadow.map.texture:O=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=U.r*F,d+=U.g*F,h+=U.b*F;else if(D.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(D.sh.coefficients[k],F);M++}else if(D.isDirectionalLight){let k=t.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let z=D.shadow,K=n.get(D);K.shadowIntensity=z.intensity,K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,i.directionalShadow[f]=K,i.directionalShadowMap[f]=O,i.directionalShadowMatrix[f]=D.shadow.matrix,v++}i.directional[f]=k,f++}else if(D.isSpotLight){let k=t.get(D);k.position.setFromMatrixPosition(D.matrixWorld),k.color.copy(U).multiplyScalar(F),k.distance=q,k.coneCos=Math.cos(D.angle),k.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),k.decay=D.decay,i.spot[_]=k;let z=D.shadow;if(D.map&&(i.spotLightMap[E]=D.map,E++,z.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[_]=z.matrix,D.castShadow){let K=n.get(D);K.shadowIntensity=z.intensity,K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,i.spotShadow[_]=K,i.spotShadowMap[_]=O,y++}_++}else if(D.isRectAreaLight){let k=t.get(D);k.color.copy(U).multiplyScalar(F),k.halfWidth.set(D.width*.5,0,0),k.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=k,g++}else if(D.isPointLight){let k=t.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),k.distance=D.distance,k.decay=D.decay,D.castShadow){let z=D.shadow,K=n.get(D);K.shadowIntensity=z.intensity,K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,K.shadowCameraNear=z.camera.near,K.shadowCameraFar=z.camera.far,i.pointShadow[p]=K,i.pointShadowMap[p]=O,i.pointShadowMatrix[p]=D.shadow.matrix,S++}i.point[p]=k,p++}else if(D.isHemisphereLight){let k=t.get(D);k.skyColor.copy(D.color).multiplyScalar(F),k.groundColor.copy(D.groundColor).multiplyScalar(F),i.hemi[m]=k,m++}}g>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xt.LTC_FLOAT_1,i.rectAreaLTC2=xt.LTC_FLOAT_2):(i.rectAreaLTC1=xt.LTC_HALF_1,i.rectAreaLTC2=xt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let x=i.hash;(x.directionalLength!==f||x.pointLength!==p||x.spotLength!==_||x.rectAreaLength!==g||x.hemiLength!==m||x.numDirectionalShadows!==v||x.numPointShadows!==S||x.numSpotShadows!==y||x.numSpotMaps!==E||x.numLightProbes!==M)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=y+E-A,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=M,x.directionalLength=f,x.pointLength=p,x.spotLength=_,x.rectAreaLength=g,x.hemiLength=m,x.numDirectionalShadows=v,x.numPointShadows=S,x.numSpotShadows=y,x.numSpotMaps=E,x.numLightProbes=M,i.version=UL++)}function l(c,u){let d=0,h=0,f=0,p=0,_=0,g=u.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){let S=c[m];if(S.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),d++}else if(S.isSpotLight){let y=i.spot[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(S.isRectAreaLight){let y=i.rectArea[p];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),r.identity(),a.copy(S.matrixWorld),a.premultiply(g),r.extractRotation(a),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),p++}else if(S.isPointLight){let y=i.point[h];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),h++}else if(S.isHemisphereLight){let y=i.hemi[_];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:i}}function ME(e){let t=new LL(e),n=[],i=[],s=[];function a(h){d.camera=h,n.length=0,i.length=0,s.length=0}function r(h){n.push(h)}function o(h){i.push(h)}function l(h){s.push(h)}function c(){t.setup(n)}function u(h){t.setupView(n,h)}let d={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:c,setupLightsView:u,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function PL(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new ME(e),t.set(s,[o])):a>=r.length?(o=new ME(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var OL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,BL=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],FL=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],TE=new sn,bh=new X,jv=new X;function zL(e,t,n){let i=new rh,s=new kt,a=new kt,r=new se,o=new pp,l=new mp,c={},u=n.maxTextureSize,d={[Ia]:$n,[$n]:Ia,[qs]:qs},h=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:OL,fragmentShader:IL}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ws;p.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new wn(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fh;let m=this.type;this.render=function(A,M,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===xT&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=fh);let T=e.getRenderTarget(),R=e.getActiveCubeFace(),D=e.getActiveMipmapLevel(),U=e.state;U.setBlending(Ys),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let F=m!==this.type;F&&M.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(O=>O.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,O=A.length;q<O;q++){let k=A[q],z=k.shadow;if(z===void 0){Nt("WebGLShadowMap:",k,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let K=z.getFrameExtents();s.multiply(K),a.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(a.x=Math.floor(u/K.x),s.x=a.x*K.x,z.mapSize.x=a.x),s.y>u&&(a.y=Math.floor(u/K.y),s.y=a.y*K.y,z.mapSize.y=a.y));let it=e.state.buffers.depth.getReversed();if(z.camera._reversedDepth=it,z.map===null||F===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===pc){if(k.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Oi(s.x,s.y,{format:Fr,type:Js,minFilter:Te,magFilter:Te,generateMipmaps:!1}),z.map.texture.name=k.name+".shadowMap",z.map.depthTexture=new Ba(s.x,s.y,As),z.map.depthTexture.name=k.name+".shadowMapDepth",z.map.depthTexture.format=Gs,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=An,z.map.depthTexture.magFilter=An}else k.isPointLight?(z.map=new ym(s.x),z.map.depthTexture=new fp(s.x,Es)):(z.map=new Oi(s.x,s.y),z.map.depthTexture=new Ba(s.x,s.y,Es)),z.map.depthTexture.name=k.name+".shadowMap",z.map.depthTexture.format=Gs,this.type===fh?(z.map.depthTexture.compareFunction=it?mm:pm,z.map.depthTexture.minFilter=Te,z.map.depthTexture.magFilter=Te):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=An,z.map.depthTexture.magFilter=An);z.camera.updateProjectionMatrix()}let lt=z.map.isWebGLCubeRenderTarget?6:1;for(let st=0;st<lt;st++){if(z.map.isWebGLCubeRenderTarget)e.setRenderTarget(z.map,st),e.clear();else{st===0&&(e.setRenderTarget(z.map),e.clear());let ct=z.getViewport(st);r.set(a.x*ct.x,a.y*ct.y,a.x*ct.z,a.y*ct.w),U.viewport(r)}if(k.isPointLight){let ct=z.camera,Wt=z.matrix,Lt=k.distance||ct.far;Lt!==ct.far&&(ct.far=Lt,ct.updateProjectionMatrix()),bh.setFromMatrixPosition(k.matrixWorld),ct.position.copy(bh),jv.copy(ct.position),jv.add(BL[st]),ct.up.copy(FL[st]),ct.lookAt(jv),ct.updateMatrixWorld(),Wt.makeTranslation(-bh.x,-bh.y,-bh.z),TE.multiplyMatrices(ct.projectionMatrix,ct.matrixWorldInverse),z._frustum.setFromProjectionMatrix(TE,ct.coordinateSystem,ct.reversedDepth)}else z.updateMatrices(k);i=z.getFrustum(),y(M,x,z.camera,k,this.type)}z.isPointLightShadow!==!0&&this.type===pc&&v(z,x),z.needsUpdate=!1}m=this.type,g.needsUpdate=!1,e.setRenderTarget(T,R,D)};function v(A,M){let x=t.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Oi(s.x,s.y,{format:Fr,type:Js})),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(M,null,x,h,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(M,null,x,f,_,null)}function S(A,M,x,T){let R=null,D=x.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)R=D;else if(R=x.isPointLight===!0?l:o,e.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){let U=R.uuid,F=M.uuid,q=c[U];q===void 0&&(q={},c[U]=q);let O=q[F];O===void 0&&(O=R.clone(),q[F]=O,M.addEventListener("dispose",E)),R=O}if(R.visible=M.visible,R.wireframe=M.wireframe,T===pc?R.side=M.shadowSide!==null?M.shadowSide:M.side:R.side=M.shadowSide!==null?M.shadowSide:d[M.side],R.alphaMap=M.alphaMap,R.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,R.map=M.map,R.clipShadows=M.clipShadows,R.clippingPlanes=M.clippingPlanes,R.clipIntersection=M.clipIntersection,R.displacementMap=M.displacementMap,R.displacementScale=M.displacementScale,R.displacementBias=M.displacementBias,R.wireframeLinewidth=M.wireframeLinewidth,R.linewidth=M.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let U=e.properties.get(R);U.light=x}return R}function y(A,M,x,T,R){if(A.visible===!1)return;if(A.layers.test(M.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&R===pc)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,A.matrixWorld);let F=t.update(A),q=A.material;if(Array.isArray(q)){let O=F.groups;for(let k=0,z=O.length;k<z;k++){let K=O[k],it=q[K.materialIndex];if(it&&it.visible){let lt=S(A,it,T,R);A.onBeforeShadow(e,A,M,x,F,lt,K),e.renderBufferDirect(x,null,F,lt,A,K),A.onAfterShadow(e,A,M,x,F,lt,K)}}}else if(q.visible){let O=S(A,q,T,R);A.onBeforeShadow(e,A,M,x,F,O,null),e.renderBufferDirect(x,null,F,O,A,null),A.onAfterShadow(e,A,M,x,F,O,null)}}let U=A.children;for(let F=0,q=U.length;F<q;F++)y(U[F],M,x,T,R)}function E(A){A.target.removeEventListener("dispose",E);for(let x in c){let T=c[x],R=A.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function VL(e,t){function n(){let N=!1,ft=new se,j=null,mt=new se(0,0,0,0);return{setMask:function(vt){j!==vt&&!N&&(e.colorMask(vt,vt,vt,vt),j=vt)},setLocked:function(vt){N=vt},setClear:function(vt,et,Ct,At,Re){Re===!0&&(vt*=At,et*=At,Ct*=At),ft.set(vt,et,Ct,At),mt.equals(ft)===!1&&(e.clearColor(vt,et,Ct,At),mt.copy(ft))},reset:function(){N=!1,j=null,mt.set(-1,0,0,0)}}}function i(){let N=!1,ft=!1,j=null,mt=null,vt=null;return{setReversed:function(et){if(ft!==et){let Ct=t.get("EXT_clip_control");et?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),ft=et;let At=vt;vt=null,this.setClear(At)}},getReversed:function(){return ft},setTest:function(et){et?at(e.DEPTH_TEST):Pt(e.DEPTH_TEST)},setMask:function(et){j!==et&&!N&&(e.depthMask(et),j=et)},setFunc:function(et){if(ft&&(et=$T[et]),mt!==et){switch(et){case Qd:e.depthFunc(e.NEVER);break;case $d:e.depthFunc(e.ALWAYS);break;case tp:e.depthFunc(e.LESS);break;case Co:e.depthFunc(e.LEQUAL);break;case ep:e.depthFunc(e.EQUAL);break;case np:e.depthFunc(e.GEQUAL);break;case ip:e.depthFunc(e.GREATER);break;case sp:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}mt=et}},setLocked:function(et){N=et},setClear:function(et){vt!==et&&(vt=et,ft&&(et=1-et),e.clearDepth(et))},reset:function(){N=!1,j=null,mt=null,vt=null,ft=!1}}}function s(){let N=!1,ft=null,j=null,mt=null,vt=null,et=null,Ct=null,At=null,Re=null;return{setTest:function(xe){N||(xe?at(e.STENCIL_TEST):Pt(e.STENCIL_TEST))},setMask:function(xe){ft!==xe&&!N&&(e.stencilMask(xe),ft=xe)},setFunc:function(xe,_i,Yn){(j!==xe||mt!==_i||vt!==Yn)&&(e.stencilFunc(xe,_i,Yn),j=xe,mt=_i,vt=Yn)},setOp:function(xe,_i,Yn){(et!==xe||Ct!==_i||At!==Yn)&&(e.stencilOp(xe,_i,Yn),et=xe,Ct=_i,At=Yn)},setLocked:function(xe){N=xe},setClear:function(xe){Re!==xe&&(e.clearStencil(xe),Re=xe)},reset:function(){N=!1,ft=null,j=null,mt=null,vt=null,et=null,Ct=null,At=null,Re=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},f=new WeakMap,p=[],_=null,g=!1,m=null,v=null,S=null,y=null,E=null,A=null,M=null,x=new jt(0,0,0),T=0,R=!1,D=null,U=null,F=null,q=null,O=null,k=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,K=0,it=e.getParameter(e.VERSION);it.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(it)[1]),z=K>=1):it.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),z=K>=2);let lt=null,st={},ct=e.getParameter(e.SCISSOR_BOX),Wt=e.getParameter(e.VIEWPORT),Lt=new se().fromArray(ct),Ft=new se().fromArray(Wt);function Q(N,ft,j,mt){let vt=new Uint8Array(4),et=e.createTexture();e.bindTexture(N,et),e.texParameteri(N,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(N,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ct=0;Ct<j;Ct++)N===e.TEXTURE_3D||N===e.TEXTURE_2D_ARRAY?e.texImage3D(ft,0,e.RGBA,1,1,mt,0,e.RGBA,e.UNSIGNED_BYTE,vt):e.texImage2D(ft+Ct,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,vt);return et}let ht={};ht[e.TEXTURE_2D]=Q(e.TEXTURE_2D,e.TEXTURE_2D,1),ht[e.TEXTURE_CUBE_MAP]=Q(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[e.TEXTURE_2D_ARRAY]=Q(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ht[e.TEXTURE_3D]=Q(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),at(e.DEPTH_TEST),r.setFunc(Co),Zt(!1),Ee(fv),at(e.CULL_FACE),Qt(Ys);function at(N){u[N]!==!0&&(e.enable(N),u[N]=!0)}function Pt(N){u[N]!==!1&&(e.disable(N),u[N]=!1)}function Vt(N,ft){return h[N]!==ft?(e.bindFramebuffer(N,ft),h[N]=ft,N===e.DRAW_FRAMEBUFFER&&(h[e.FRAMEBUFFER]=ft),N===e.FRAMEBUFFER&&(h[e.DRAW_FRAMEBUFFER]=ft),!0):!1}function Dt(N,ft){let j=p,mt=!1;if(N){j=f.get(ft),j===void 0&&(j=[],f.set(ft,j));let vt=N.textures;if(j.length!==vt.length||j[0]!==e.COLOR_ATTACHMENT0){for(let et=0,Ct=vt.length;et<Ct;et++)j[et]=e.COLOR_ATTACHMENT0+et;j.length=vt.length,mt=!0}}else j[0]!==e.BACK&&(j[0]=e.BACK,mt=!0);mt&&e.drawBuffers(j)}function Be(N){return _!==N?(e.useProgram(N),_=N,!0):!1}let Yt={[Dr]:e.FUNC_ADD,[bT]:e.FUNC_SUBTRACT,[MT]:e.FUNC_REVERSE_SUBTRACT};Yt[TT]=e.MIN,Yt[ET]=e.MAX;let ce={[AT]:e.ZERO,[wT]:e.ONE,[CT]:e.SRC_COLOR,[Kd]:e.SRC_ALPHA,[PT]:e.SRC_ALPHA_SATURATE,[NT]:e.DST_COLOR,[DT]:e.DST_ALPHA,[RT]:e.ONE_MINUS_SRC_COLOR,[jd]:e.ONE_MINUS_SRC_ALPHA,[LT]:e.ONE_MINUS_DST_COLOR,[UT]:e.ONE_MINUS_DST_ALPHA,[OT]:e.CONSTANT_COLOR,[IT]:e.ONE_MINUS_CONSTANT_COLOR,[BT]:e.CONSTANT_ALPHA,[FT]:e.ONE_MINUS_CONSTANT_ALPHA};function Qt(N,ft,j,mt,vt,et,Ct,At,Re,xe){if(N===Ys){g===!0&&(Pt(e.BLEND),g=!1);return}if(g===!1&&(at(e.BLEND),g=!0),N!==ST){if(N!==m||xe!==R){if((v!==Dr||E!==Dr)&&(e.blendEquation(e.FUNC_ADD),v=Dr,E=Dr),xe)switch(N){case wo:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case dv:e.blendFunc(e.ONE,e.ONE);break;case pv:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case mv:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ot("WebGLState: Invalid blending: ",N);break}else switch(N){case wo:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case dv:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case pv:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mv:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",N);break}S=null,y=null,A=null,M=null,x.set(0,0,0),T=0,m=N,R=xe}return}vt=vt||ft,et=et||j,Ct=Ct||mt,(ft!==v||vt!==E)&&(e.blendEquationSeparate(Yt[ft],Yt[vt]),v=ft,E=vt),(j!==S||mt!==y||et!==A||Ct!==M)&&(e.blendFuncSeparate(ce[j],ce[mt],ce[et],ce[Ct]),S=j,y=mt,A=et,M=Ct),(At.equals(x)===!1||Re!==T)&&(e.blendColor(At.r,At.g,At.b,Re),x.copy(At),T=Re),m=N,R=!1}function Bt(N,ft){N.side===qs?Pt(e.CULL_FACE):at(e.CULL_FACE);let j=N.side===$n;ft&&(j=!j),Zt(j),N.blending===wo&&N.transparent===!1?Qt(Ys):Qt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),a.setMask(N.colorWrite);let mt=N.stencilWrite;o.setTest(mt),mt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),tn(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?at(e.SAMPLE_ALPHA_TO_COVERAGE):Pt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(N){D!==N&&(N?e.frontFace(e.CW):e.frontFace(e.CCW),D=N)}function Ee(N){N!==vT?(at(e.CULL_FACE),N!==U&&(N===fv?e.cullFace(e.BACK):N===yT?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Pt(e.CULL_FACE),U=N}function Je(N){N!==F&&(z&&e.lineWidth(N),F=N)}function tn(N,ft,j){N?(at(e.POLYGON_OFFSET_FILL),(q!==ft||O!==j)&&(q=ft,O=j,r.getReversed()&&(ft=-ft),e.polygonOffset(ft,j))):Pt(e.POLYGON_OFFSET_FILL)}function ue(N){N?at(e.SCISSOR_TEST):Pt(e.SCISSOR_TEST)}function Ge(N){N===void 0&&(N=e.TEXTURE0+k-1),lt!==N&&(e.activeTexture(N),lt=N)}function L(N,ft,j){j===void 0&&(lt===null?j=e.TEXTURE0+k-1:j=lt);let mt=st[j];mt===void 0&&(mt={type:void 0,texture:void 0},st[j]=mt),(mt.type!==N||mt.texture!==ft)&&(lt!==j&&(e.activeTexture(j),lt=j),e.bindTexture(N,ft||ht[N]),mt.type=N,mt.texture=ft)}function ke(){let N=st[lt];N!==void 0&&N.type!==void 0&&(e.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function oe(){try{e.compressedTexImage2D(...arguments)}catch(N){Ot("WebGLState:",N)}}function C(){try{e.compressedTexImage3D(...arguments)}catch(N){Ot("WebGLState:",N)}}function b(){try{e.texSubImage2D(...arguments)}catch(N){Ot("WebGLState:",N)}}function I(){try{e.texSubImage3D(...arguments)}catch(N){Ot("WebGLState:",N)}}function G(){try{e.compressedTexSubImage2D(...arguments)}catch(N){Ot("WebGLState:",N)}}function Z(){try{e.compressedTexSubImage3D(...arguments)}catch(N){Ot("WebGLState:",N)}}function ot(){try{e.texStorage2D(...arguments)}catch(N){Ot("WebGLState:",N)}}function dt(){try{e.texStorage3D(...arguments)}catch(N){Ot("WebGLState:",N)}}function J(){try{e.texImage2D(...arguments)}catch(N){Ot("WebGLState:",N)}}function Y(){try{e.texImage3D(...arguments)}catch(N){Ot("WebGLState:",N)}}function nt(N){return d[N]!==void 0?d[N]:e.getParameter(N)}function Et(N,ft){d[N]!==ft&&(e.pixelStorei(N,ft),d[N]=ft)}function pt(N){Lt.equals(N)===!1&&(e.scissor(N.x,N.y,N.z,N.w),Lt.copy(N))}function ut(N){Ft.equals(N)===!1&&(e.viewport(N.x,N.y,N.z,N.w),Ft.copy(N))}function Rt(N,ft){let j=c.get(ft);j===void 0&&(j=new WeakMap,c.set(ft,j));let mt=j.get(N);mt===void 0&&(mt=e.getUniformBlockIndex(ft,N.name),j.set(N,mt))}function Ut(N,ft){let mt=c.get(ft).get(N);l.get(ft)!==mt&&(e.uniformBlockBinding(ft,mt,N.__bindingPointIndex),l.set(ft,mt))}function Ht(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},lt=null,st={},h={},f=new WeakMap,p=[],_=null,g=!1,m=null,v=null,S=null,y=null,E=null,A=null,M=null,x=new jt(0,0,0),T=0,R=!1,D=null,U=null,F=null,q=null,O=null,Lt.set(0,0,e.canvas.width,e.canvas.height),Ft.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:at,disable:Pt,bindFramebuffer:Vt,drawBuffers:Dt,useProgram:Be,setBlending:Qt,setMaterial:Bt,setFlipSided:Zt,setCullFace:Ee,setLineWidth:Je,setPolygonOffset:tn,setScissorTest:ue,activeTexture:Ge,bindTexture:L,unbindTexture:ke,compressedTexImage2D:oe,compressedTexImage3D:C,texImage2D:J,texImage3D:Y,pixelStorei:Et,getParameter:nt,updateUBOMapping:Rt,uniformBlockBinding:Ut,texStorage2D:ot,texStorage3D:dt,texSubImage2D:b,texSubImage3D:I,compressedTexSubImage2D:G,compressedTexSubImage3D:Z,scissor:pt,viewport:ut,reset:Ht}}function HL(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new kt,u=new WeakMap,d=new Set,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,b){return p?new OffscreenCanvas(C,b):rc("canvas")}function g(C,b,I){let G=1,Z=oe(C);if((Z.width>I||Z.height>I)&&(G=I/Math.max(Z.width,Z.height)),G<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ot=Math.floor(G*Z.width),dt=Math.floor(G*Z.height);h===void 0&&(h=_(ot,dt));let J=b?_(ot,dt):h;return J.width=ot,J.height=dt,J.getContext("2d").drawImage(C,0,0,ot,dt),Nt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ot+"x"+dt+")."),J}else return"data"in C&&Nt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function m(C){return C.generateMipmaps}function v(C){e.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?e.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function y(C,b,I,G,Z,ot=!1){if(C!==null){if(e[C]!==void 0)return e[C];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let dt;G&&(dt=t.get("EXT_texture_norm16"),dt||Nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=b;if(b===e.RED&&(I===e.FLOAT&&(J=e.R32F),I===e.HALF_FLOAT&&(J=e.R16F),I===e.UNSIGNED_BYTE&&(J=e.R8),I===e.UNSIGNED_SHORT&&dt&&(J=dt.R16_EXT),I===e.SHORT&&dt&&(J=dt.R16_SNORM_EXT)),b===e.RED_INTEGER&&(I===e.UNSIGNED_BYTE&&(J=e.R8UI),I===e.UNSIGNED_SHORT&&(J=e.R16UI),I===e.UNSIGNED_INT&&(J=e.R32UI),I===e.BYTE&&(J=e.R8I),I===e.SHORT&&(J=e.R16I),I===e.INT&&(J=e.R32I)),b===e.RG&&(I===e.FLOAT&&(J=e.RG32F),I===e.HALF_FLOAT&&(J=e.RG16F),I===e.UNSIGNED_BYTE&&(J=e.RG8),I===e.UNSIGNED_SHORT&&dt&&(J=dt.RG16_EXT),I===e.SHORT&&dt&&(J=dt.RG16_SNORM_EXT)),b===e.RG_INTEGER&&(I===e.UNSIGNED_BYTE&&(J=e.RG8UI),I===e.UNSIGNED_SHORT&&(J=e.RG16UI),I===e.UNSIGNED_INT&&(J=e.RG32UI),I===e.BYTE&&(J=e.RG8I),I===e.SHORT&&(J=e.RG16I),I===e.INT&&(J=e.RG32I)),b===e.RGB_INTEGER&&(I===e.UNSIGNED_BYTE&&(J=e.RGB8UI),I===e.UNSIGNED_SHORT&&(J=e.RGB16UI),I===e.UNSIGNED_INT&&(J=e.RGB32UI),I===e.BYTE&&(J=e.RGB8I),I===e.SHORT&&(J=e.RGB16I),I===e.INT&&(J=e.RGB32I)),b===e.RGBA_INTEGER&&(I===e.UNSIGNED_BYTE&&(J=e.RGBA8UI),I===e.UNSIGNED_SHORT&&(J=e.RGBA16UI),I===e.UNSIGNED_INT&&(J=e.RGBA32UI),I===e.BYTE&&(J=e.RGBA8I),I===e.SHORT&&(J=e.RGBA16I),I===e.INT&&(J=e.RGBA32I)),b===e.RGB&&(I===e.UNSIGNED_SHORT&&dt&&(J=dt.RGB16_EXT),I===e.SHORT&&dt&&(J=dt.RGB16_SNORM_EXT),I===e.UNSIGNED_INT_5_9_9_9_REV&&(J=e.RGB9_E5),I===e.UNSIGNED_INT_10F_11F_11F_REV&&(J=e.R11F_G11F_B10F)),b===e.RGBA){let Y=ot?Qu:ne.getTransfer(Z);I===e.FLOAT&&(J=e.RGBA32F),I===e.HALF_FLOAT&&(J=e.RGBA16F),I===e.UNSIGNED_BYTE&&(J=Y===me?e.SRGB8_ALPHA8:e.RGBA8),I===e.UNSIGNED_SHORT&&dt&&(J=dt.RGBA16_EXT),I===e.SHORT&&dt&&(J=dt.RGBA16_SNORM_EXT),I===e.UNSIGNED_SHORT_4_4_4_4&&(J=e.RGBA4),I===e.UNSIGNED_SHORT_5_5_5_1&&(J=e.RGB5_A1)}return(J===e.R16F||J===e.R32F||J===e.RG16F||J===e.RG32F||J===e.RGBA16F||J===e.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function E(C,b){let I;return C?b===null||b===Es||b===gc?I=e.DEPTH24_STENCIL8:b===As?I=e.DEPTH32F_STENCIL8:b===mc&&(I=e.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Es||b===gc?I=e.DEPTH_COMPONENT24:b===As?I=e.DEPTH_COMPONENT32F:b===mc&&(I=e.DEPTH_COMPONENT16),I}function A(C,b){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==An&&C.minFilter!==Te?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function M(C){let b=C.target;b.removeEventListener("dispose",M),T(b),b.isVideoTexture&&u.delete(b),b.isHTMLTexture&&d.delete(b)}function x(C){let b=C.target;b.removeEventListener("dispose",x),D(b)}function T(C){let b=i.get(C);if(b.__webglInit===void 0)return;let I=C.source,G=f.get(I);if(G){let Z=G[b.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(C),Object.keys(G).length===0&&f.delete(I)}i.remove(C)}function R(C){let b=i.get(C);e.deleteTexture(b.__webglTexture);let I=C.source,G=f.get(I);delete G[b.__cacheKey],r.memory.textures--}function D(C){let b=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(b.__webglFramebuffer[G]))for(let Z=0;Z<b.__webglFramebuffer[G].length;Z++)e.deleteFramebuffer(b.__webglFramebuffer[G][Z]);else e.deleteFramebuffer(b.__webglFramebuffer[G]);b.__webglDepthbuffer&&e.deleteRenderbuffer(b.__webglDepthbuffer[G])}else{if(Array.isArray(b.__webglFramebuffer))for(let G=0;G<b.__webglFramebuffer.length;G++)e.deleteFramebuffer(b.__webglFramebuffer[G]);else e.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&e.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&e.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let G=0;G<b.__webglColorRenderbuffer.length;G++)b.__webglColorRenderbuffer[G]&&e.deleteRenderbuffer(b.__webglColorRenderbuffer[G]);b.__webglDepthRenderbuffer&&e.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let I=C.textures;for(let G=0,Z=I.length;G<Z;G++){let ot=i.get(I[G]);ot.__webglTexture&&(e.deleteTexture(ot.__webglTexture),r.memory.textures--),i.remove(I[G])}i.remove(C)}let U=0;function F(){U=0}function q(){return U}function O(C){U=C}function k(){let C=U;return C>=s.maxTextures&&Nt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),U+=1,C}function z(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function K(C,b){let I=i.get(C);if(C.isVideoTexture&&L(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&I.__version!==C.version){let G=C.image;if(G===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{Pt(I,C,b);return}}else C.isExternalTexture&&(I.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,I.__webglTexture,e.TEXTURE0+b)}function it(C,b){let I=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&I.__version!==C.version){Pt(I,C,b);return}else C.isExternalTexture&&(I.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,I.__webglTexture,e.TEXTURE0+b)}function lt(C,b){let I=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&I.__version!==C.version){Pt(I,C,b);return}n.bindTexture(e.TEXTURE_3D,I.__webglTexture,e.TEXTURE0+b)}function st(C,b){let I=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&I.__version!==C.version){Vt(I,C,b);return}n.bindTexture(e.TEXTURE_CUBE_MAP,I.__webglTexture,e.TEXTURE0+b)}let ct={[ap]:e.REPEAT,[Li]:e.CLAMP_TO_EDGE,[rp]:e.MIRRORED_REPEAT},Wt={[An]:e.NEAREST,[HT]:e.NEAREST_MIPMAP_NEAREST,[ph]:e.NEAREST_MIPMAP_LINEAR,[Te]:e.LINEAR,[Up]:e.LINEAR_MIPMAP_NEAREST,[Zs]:e.LINEAR_MIPMAP_LINEAR},Lt={[XT]:e.NEVER,[JT]:e.ALWAYS,[WT]:e.LESS,[pm]:e.LEQUAL,[qT]:e.EQUAL,[mm]:e.GEQUAL,[YT]:e.GREATER,[ZT]:e.NOTEQUAL};function Ft(C,b){if(b.type===As&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Te||b.magFilter===Up||b.magFilter===ph||b.magFilter===Zs||b.minFilter===Te||b.minFilter===Up||b.minFilter===ph||b.minFilter===Zs)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(C,e.TEXTURE_WRAP_S,ct[b.wrapS]),e.texParameteri(C,e.TEXTURE_WRAP_T,ct[b.wrapT]),(C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)&&e.texParameteri(C,e.TEXTURE_WRAP_R,ct[b.wrapR]),e.texParameteri(C,e.TEXTURE_MAG_FILTER,Wt[b.magFilter]),e.texParameteri(C,e.TEXTURE_MIN_FILTER,Wt[b.minFilter]),b.compareFunction&&(e.texParameteri(C,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(C,e.TEXTURE_COMPARE_FUNC,Lt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===An||b.minFilter!==ph&&b.minFilter!==Zs||b.type===As&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let I=t.get("EXT_texture_filter_anisotropic");e.texParameterf(C,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Q(C,b){let I=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",M));let G=b.source,Z=f.get(G);Z===void 0&&(Z={},f.set(G,Z));let ot=z(b);if(ot!==C.__cacheKey){Z[ot]===void 0&&(Z[ot]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,I=!0),Z[ot].usedTimes++;let dt=Z[C.__cacheKey];dt!==void 0&&(Z[C.__cacheKey].usedTimes--,dt.usedTimes===0&&R(b)),C.__cacheKey=ot,C.__webglTexture=Z[ot].texture}return I}function ht(C,b,I){return Math.floor(Math.floor(C/I)/b)}function at(C,b,I,G){let ot=C.updateRanges;if(ot.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,b.width,b.height,I,G,b.data);else{ot.sort((Et,pt)=>Et.start-pt.start);let dt=0;for(let Et=1;Et<ot.length;Et++){let pt=ot[dt],ut=ot[Et],Rt=pt.start+pt.count,Ut=ht(ut.start,b.width,4),Ht=ht(pt.start,b.width,4);ut.start<=Rt+1&&Ut===Ht&&ht(ut.start+ut.count-1,b.width,4)===Ut?pt.count=Math.max(pt.count,ut.start+ut.count-pt.start):(++dt,ot[dt]=ut)}ot.length=dt+1;let J=n.getParameter(e.UNPACK_ROW_LENGTH),Y=n.getParameter(e.UNPACK_SKIP_PIXELS),nt=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,b.width);for(let Et=0,pt=ot.length;Et<pt;Et++){let ut=ot[Et],Rt=Math.floor(ut.start/4),Ut=Math.ceil(ut.count/4),Ht=Rt%b.width,N=Math.floor(Rt/b.width),ft=Ut,j=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,Ht),n.pixelStorei(e.UNPACK_SKIP_ROWS,N),n.texSubImage2D(e.TEXTURE_2D,0,Ht,N,ft,j,I,G,b.data)}C.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,J),n.pixelStorei(e.UNPACK_SKIP_PIXELS,Y),n.pixelStorei(e.UNPACK_SKIP_ROWS,nt)}}function Pt(C,b,I){let G=e.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(G=e.TEXTURE_2D_ARRAY),b.isData3DTexture&&(G=e.TEXTURE_3D);let Z=Q(C,b),ot=b.source;n.bindTexture(G,C.__webglTexture,e.TEXTURE0+I);let dt=i.get(ot);if(ot.version!==dt.__version||Z===!0){if(n.activeTexture(e.TEXTURE0+I),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let j=ne.getPrimaries(ne.workingColorSpace),mt=b.colorSpace===gn?null:ne.getPrimaries(b.colorSpace),vt=b.colorSpace===gn||j===mt?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt)}n.pixelStorei(e.UNPACK_ALIGNMENT,b.unpackAlignment);let Y=g(b.image,!1,s.maxTextureSize);Y=ke(b,Y);let nt=a.convert(b.format,b.colorSpace),Et=a.convert(b.type),pt=y(b.internalFormat,nt,Et,b.normalized,b.colorSpace,b.isVideoTexture);Ft(G,b);let ut,Rt=b.mipmaps,Ut=b.isVideoTexture!==!0,Ht=dt.__version===void 0||Z===!0,N=ot.dataReady,ft=A(b,Y);if(b.isDepthTexture)pt=E(b.format===Br,b.type),Ht&&(Ut?n.texStorage2D(e.TEXTURE_2D,1,pt,Y.width,Y.height):n.texImage2D(e.TEXTURE_2D,0,pt,Y.width,Y.height,0,nt,Et,null));else if(b.isDataTexture)if(Rt.length>0){Ut&&Ht&&n.texStorage2D(e.TEXTURE_2D,ft,pt,Rt[0].width,Rt[0].height);for(let j=0,mt=Rt.length;j<mt;j++)ut=Rt[j],Ut?N&&n.texSubImage2D(e.TEXTURE_2D,j,0,0,ut.width,ut.height,nt,Et,ut.data):n.texImage2D(e.TEXTURE_2D,j,pt,ut.width,ut.height,0,nt,Et,ut.data);b.generateMipmaps=!1}else Ut?(Ht&&n.texStorage2D(e.TEXTURE_2D,ft,pt,Y.width,Y.height),N&&at(b,Y,nt,Et)):n.texImage2D(e.TEXTURE_2D,0,pt,Y.width,Y.height,0,nt,Et,Y.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ut&&Ht&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ft,pt,Rt[0].width,Rt[0].height,Y.depth);for(let j=0,mt=Rt.length;j<mt;j++)if(ut=Rt[j],b.format!==ss)if(nt!==null)if(Ut){if(N)if(b.layerUpdates.size>0){let vt=Vv(ut.width,ut.height,b.format,b.type);for(let et of b.layerUpdates){let Ct=ut.data.subarray(et*vt/ut.data.BYTES_PER_ELEMENT,(et+1)*vt/ut.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,et,ut.width,ut.height,1,nt,Ct)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,0,ut.width,ut.height,Y.depth,nt,ut.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,j,pt,ut.width,ut.height,Y.depth,0,ut.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?N&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,0,ut.width,ut.height,Y.depth,nt,Et,ut.data):n.texImage3D(e.TEXTURE_2D_ARRAY,j,pt,ut.width,ut.height,Y.depth,0,nt,Et,ut.data)}else{Ut&&Ht&&n.texStorage2D(e.TEXTURE_2D,ft,pt,Rt[0].width,Rt[0].height);for(let j=0,mt=Rt.length;j<mt;j++)ut=Rt[j],b.format!==ss?nt!==null?Ut?N&&n.compressedTexSubImage2D(e.TEXTURE_2D,j,0,0,ut.width,ut.height,nt,ut.data):n.compressedTexImage2D(e.TEXTURE_2D,j,pt,ut.width,ut.height,0,ut.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?N&&n.texSubImage2D(e.TEXTURE_2D,j,0,0,ut.width,ut.height,nt,Et,ut.data):n.texImage2D(e.TEXTURE_2D,j,pt,ut.width,ut.height,0,nt,Et,ut.data)}else if(b.isDataArrayTexture)if(Ut){if(Ht&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ft,pt,Y.width,Y.height,Y.depth),N)if(b.layerUpdates.size>0){let j=Vv(Y.width,Y.height,b.format,b.type);for(let mt of b.layerUpdates){let vt=Y.data.subarray(mt*j/Y.data.BYTES_PER_ELEMENT,(mt+1)*j/Y.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,mt,Y.width,Y.height,1,nt,Et,vt)}b.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,nt,Et,Y.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,pt,Y.width,Y.height,Y.depth,0,nt,Et,Y.data);else if(b.isData3DTexture)Ut?(Ht&&n.texStorage3D(e.TEXTURE_3D,ft,pt,Y.width,Y.height,Y.depth),N&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,nt,Et,Y.data)):n.texImage3D(e.TEXTURE_3D,0,pt,Y.width,Y.height,Y.depth,0,nt,Et,Y.data);else if(b.isFramebufferTexture){if(Ht)if(Ut)n.texStorage2D(e.TEXTURE_2D,ft,pt,Y.width,Y.height);else{let j=Y.width,mt=Y.height;for(let vt=0;vt<ft;vt++)n.texImage2D(e.TEXTURE_2D,vt,pt,j,mt,0,nt,Et,null),j>>=1,mt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in e){let j=e.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),Y.parentNode!==j){j.appendChild(Y),d.add(b),j.onpaint=mt=>{let vt=mt.changedElements;for(let et of d)vt.includes(et.image)&&(et.needsUpdate=!0)},j.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,Y);else{let vt=e.RGBA,et=e.RGBA,Ct=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,vt,et,Ct,Y)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Rt.length>0){if(Ut&&Ht){let j=oe(Rt[0]);n.texStorage2D(e.TEXTURE_2D,ft,pt,j.width,j.height)}for(let j=0,mt=Rt.length;j<mt;j++)ut=Rt[j],Ut?N&&n.texSubImage2D(e.TEXTURE_2D,j,0,0,nt,Et,ut):n.texImage2D(e.TEXTURE_2D,j,pt,nt,Et,ut);b.generateMipmaps=!1}else if(Ut){if(Ht){let j=oe(Y);n.texStorage2D(e.TEXTURE_2D,ft,pt,j.width,j.height)}N&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,nt,Et,Y)}else n.texImage2D(e.TEXTURE_2D,0,pt,nt,Et,Y);m(b)&&v(G),dt.__version=ot.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Vt(C,b,I){if(b.image.length!==6)return;let G=Q(C,b),Z=b.source;n.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+I);let ot=i.get(Z);if(Z.version!==ot.__version||G===!0){n.activeTexture(e.TEXTURE0+I);let dt=ne.getPrimaries(ne.workingColorSpace),J=b.colorSpace===gn?null:ne.getPrimaries(b.colorSpace),Y=b.colorSpace===gn||dt===J?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);let nt=b.isCompressedTexture||b.image[0].isCompressedTexture,Et=b.image[0]&&b.image[0].isDataTexture,pt=[];for(let et=0;et<6;et++)!nt&&!Et?pt[et]=g(b.image[et],!0,s.maxCubemapSize):pt[et]=Et?b.image[et].image:b.image[et],pt[et]=ke(b,pt[et]);let ut=pt[0],Rt=a.convert(b.format,b.colorSpace),Ut=a.convert(b.type),Ht=y(b.internalFormat,Rt,Ut,b.normalized,b.colorSpace),N=b.isVideoTexture!==!0,ft=ot.__version===void 0||G===!0,j=Z.dataReady,mt=A(b,ut);Ft(e.TEXTURE_CUBE_MAP,b);let vt;if(nt){N&&ft&&n.texStorage2D(e.TEXTURE_CUBE_MAP,mt,Ht,ut.width,ut.height);for(let et=0;et<6;et++){vt=pt[et].mipmaps;for(let Ct=0;Ct<vt.length;Ct++){let At=vt[Ct];b.format!==ss?Rt!==null?N?j&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct,0,0,At.width,At.height,Rt,At.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct,Ht,At.width,At.height,0,At.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?j&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct,0,0,At.width,At.height,Rt,Ut,At.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct,Ht,At.width,At.height,0,Rt,Ut,At.data)}}}else{if(vt=b.mipmaps,N&&ft){vt.length>0&&mt++;let et=oe(pt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,mt,Ht,et.width,et.height)}for(let et=0;et<6;et++)if(Et){N?j&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,pt[et].width,pt[et].height,Rt,Ut,pt[et].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Ht,pt[et].width,pt[et].height,0,Rt,Ut,pt[et].data);for(let Ct=0;Ct<vt.length;Ct++){let Re=vt[Ct].image[et].image;N?j&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct+1,0,0,Re.width,Re.height,Rt,Ut,Re.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct+1,Ht,Re.width,Re.height,0,Rt,Ut,Re.data)}}else{N?j&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Rt,Ut,pt[et]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Ht,Rt,Ut,pt[et]);for(let Ct=0;Ct<vt.length;Ct++){let At=vt[Ct];N?j&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct+1,0,0,Rt,Ut,At.image[et]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct+1,Ht,Rt,Ut,At.image[et])}}}m(b)&&v(e.TEXTURE_CUBE_MAP),ot.__version=Z.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Dt(C,b,I,G,Z,ot){let dt=a.convert(I.format,I.colorSpace),J=a.convert(I.type),Y=y(I.internalFormat,dt,J,I.normalized,I.colorSpace),nt=i.get(b),Et=i.get(I);if(Et.__renderTarget=b,!nt.__hasExternalTextures){let pt=Math.max(1,b.width>>ot),ut=Math.max(1,b.height>>ot);Z===e.TEXTURE_3D||Z===e.TEXTURE_2D_ARRAY?n.texImage3D(Z,ot,Y,pt,ut,b.depth,0,dt,J,null):n.texImage2D(Z,ot,Y,pt,ut,0,dt,J,null)}n.bindFramebuffer(e.FRAMEBUFFER,C),Ge(b)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,G,Z,Et.__webglTexture,0,ue(b)):(Z===e.TEXTURE_2D||Z>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,G,Z,Et.__webglTexture,ot),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Be(C,b,I){if(e.bindRenderbuffer(e.RENDERBUFFER,C),b.depthBuffer){let G=b.depthTexture,Z=G&&G.isDepthTexture?G.type:null,ot=E(b.stencilBuffer,Z),dt=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ge(b)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ue(b),ot,b.width,b.height):I?e.renderbufferStorageMultisample(e.RENDERBUFFER,ue(b),ot,b.width,b.height):e.renderbufferStorage(e.RENDERBUFFER,ot,b.width,b.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,dt,e.RENDERBUFFER,C)}else{let G=b.textures;for(let Z=0;Z<G.length;Z++){let ot=G[Z],dt=a.convert(ot.format,ot.colorSpace),J=a.convert(ot.type),Y=y(ot.internalFormat,dt,J,ot.normalized,ot.colorSpace);Ge(b)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ue(b),Y,b.width,b.height):I?e.renderbufferStorageMultisample(e.RENDERBUFFER,ue(b),Y,b.width,b.height):e.renderbufferStorage(e.RENDERBUFFER,Y,b.width,b.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Yt(C,b,I){let G=b.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=i.get(b.depthTexture);if(Z.__renderTarget=b,(!Z.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),G){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,b.depthTexture.addEventListener("dispose",M)),Z.__webglTexture===void 0){Z.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,Z.__webglTexture),Ft(e.TEXTURE_CUBE_MAP,b.depthTexture);let nt=a.convert(b.depthTexture.format),Et=a.convert(b.depthTexture.type),pt;b.depthTexture.format===Gs?pt=e.DEPTH_COMPONENT24:b.depthTexture.format===Br&&(pt=e.DEPTH24_STENCIL8);for(let ut=0;ut<6;ut++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,pt,b.width,b.height,0,nt,Et,null)}}else K(b.depthTexture,0);let ot=Z.__webglTexture,dt=ue(b),J=G?e.TEXTURE_CUBE_MAP_POSITIVE_X+I:e.TEXTURE_2D,Y=b.depthTexture.format===Br?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(b.depthTexture.format===Gs)Ge(b)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Y,J,ot,0,dt):e.framebufferTexture2D(e.FRAMEBUFFER,Y,J,ot,0);else if(b.depthTexture.format===Br)Ge(b)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Y,J,ot,0,dt):e.framebufferTexture2D(e.FRAMEBUFFER,Y,J,ot,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ce(C){let b=i.get(C),I=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){let G=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),G){let Z=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,G.removeEventListener("dispose",Z)};G.addEventListener("dispose",Z),b.__depthDisposeCallback=Z}b.__boundDepthTexture=G}if(C.depthTexture&&!b.__autoAllocateDepthBuffer)if(I)for(let G=0;G<6;G++)Yt(b.__webglFramebuffer[G],C,G);else{let G=C.texture.mipmaps;G&&G.length>0?Yt(b.__webglFramebuffer[0],C,0):Yt(b.__webglFramebuffer,C,0)}else if(I){b.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(n.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer[G]),b.__webglDepthbuffer[G]===void 0)b.__webglDepthbuffer[G]=e.createRenderbuffer(),Be(b.__webglDepthbuffer[G],C,!1);else{let Z=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ot=b.__webglDepthbuffer[G];e.bindRenderbuffer(e.RENDERBUFFER,ot),e.framebufferRenderbuffer(e.FRAMEBUFFER,Z,e.RENDERBUFFER,ot)}}else{let G=C.texture.mipmaps;if(G&&G.length>0?n.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=e.createRenderbuffer(),Be(b.__webglDepthbuffer,C,!1);else{let Z=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ot=b.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ot),e.framebufferRenderbuffer(e.FRAMEBUFFER,Z,e.RENDERBUFFER,ot)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Qt(C,b,I){let G=i.get(C);b!==void 0&&Dt(G.__webglFramebuffer,C,C.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),I!==void 0&&ce(C)}function Bt(C){let b=C.texture,I=i.get(C),G=i.get(b);C.addEventListener("dispose",x);let Z=C.textures,ot=C.isWebGLCubeRenderTarget===!0,dt=Z.length>1;if(dt||(G.__webglTexture===void 0&&(G.__webglTexture=e.createTexture()),G.__version=b.version,r.memory.textures++),ot){I.__webglFramebuffer=[];for(let J=0;J<6;J++)if(b.mipmaps&&b.mipmaps.length>0){I.__webglFramebuffer[J]=[];for(let Y=0;Y<b.mipmaps.length;Y++)I.__webglFramebuffer[J][Y]=e.createFramebuffer()}else I.__webglFramebuffer[J]=e.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){I.__webglFramebuffer=[];for(let J=0;J<b.mipmaps.length;J++)I.__webglFramebuffer[J]=e.createFramebuffer()}else I.__webglFramebuffer=e.createFramebuffer();if(dt)for(let J=0,Y=Z.length;J<Y;J++){let nt=i.get(Z[J]);nt.__webglTexture===void 0&&(nt.__webglTexture=e.createTexture(),r.memory.textures++)}if(C.samples>0&&Ge(C)===!1){I.__webglMultisampledFramebuffer=e.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){let Y=Z[J];I.__webglColorRenderbuffer[J]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,I.__webglColorRenderbuffer[J]);let nt=a.convert(Y.format,Y.colorSpace),Et=a.convert(Y.type),pt=y(Y.internalFormat,nt,Et,Y.normalized,Y.colorSpace,C.isXRRenderTarget===!0),ut=ue(C);e.renderbufferStorageMultisample(e.RENDERBUFFER,ut,pt,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+J,e.RENDERBUFFER,I.__webglColorRenderbuffer[J])}e.bindRenderbuffer(e.RENDERBUFFER,null),C.depthBuffer&&(I.__webglDepthRenderbuffer=e.createRenderbuffer(),Be(I.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ot){n.bindTexture(e.TEXTURE_CUBE_MAP,G.__webglTexture),Ft(e.TEXTURE_CUBE_MAP,b);for(let J=0;J<6;J++)if(b.mipmaps&&b.mipmaps.length>0)for(let Y=0;Y<b.mipmaps.length;Y++)Dt(I.__webglFramebuffer[J][Y],C,b,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+J,Y);else Dt(I.__webglFramebuffer[J],C,b,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);m(b)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(dt){for(let J=0,Y=Z.length;J<Y;J++){let nt=Z[J],Et=i.get(nt),pt=e.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pt=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(pt,Et.__webglTexture),Ft(pt,nt),Dt(I.__webglFramebuffer,C,nt,e.COLOR_ATTACHMENT0+J,pt,0),m(nt)&&v(pt)}n.unbindTexture()}else{let J=e.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(J,G.__webglTexture),Ft(J,b),b.mipmaps&&b.mipmaps.length>0)for(let Y=0;Y<b.mipmaps.length;Y++)Dt(I.__webglFramebuffer[Y],C,b,e.COLOR_ATTACHMENT0,J,Y);else Dt(I.__webglFramebuffer,C,b,e.COLOR_ATTACHMENT0,J,0);m(b)&&v(J),n.unbindTexture()}C.depthBuffer&&ce(C)}function Zt(C){let b=C.textures;for(let I=0,G=b.length;I<G;I++){let Z=b[I];if(m(Z)){let ot=S(C),dt=i.get(Z).__webglTexture;n.bindTexture(ot,dt),v(ot),n.unbindTexture()}}}let Ee=[],Je=[];function tn(C){if(C.samples>0){if(Ge(C)===!1){let b=C.textures,I=C.width,G=C.height,Z=e.COLOR_BUFFER_BIT,ot=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,dt=i.get(C),J=b.length>1;if(J)for(let nt=0;nt<b.length;nt++)n.bindFramebuffer(e.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+nt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,dt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+nt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer);let Y=C.texture.mipmaps;Y&&Y.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let nt=0;nt<b.length;nt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=e.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=e.STENCIL_BUFFER_BIT)),J){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,dt.__webglColorRenderbuffer[nt]);let Et=i.get(b[nt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Et,0)}e.blitFramebuffer(0,0,I,G,0,0,I,G,Z,e.NEAREST),l===!0&&(Ee.length=0,Je.length=0,Ee.push(e.COLOR_ATTACHMENT0+nt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ee.push(ot),Je.push(ot),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Je)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ee))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),J)for(let nt=0;nt<b.length;nt++){n.bindFramebuffer(e.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+nt,e.RENDERBUFFER,dt.__webglColorRenderbuffer[nt]);let Et=i.get(b[nt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,dt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+nt,e.TEXTURE_2D,Et,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let b=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[b])}}}function ue(C){return Math.min(s.maxSamples,C.samples)}function Ge(C){let b=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function L(C){let b=r.render.frame;u.get(C)!==b&&(u.set(C,b),C.update())}function ke(C,b){let I=C.colorSpace,G=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||I!==ju&&I!==gn&&(ne.getTransfer(I)===me?(G!==ss||Z!==Bi)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",I)),b}function oe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.getTextureUnits=q,this.setTextureUnits=O,this.setTexture2D=K,this.setTexture2DArray=it,this.setTexture3D=lt,this.setTextureCube=st,this.rebindTextures=Qt,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Ge,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function GL(e,t){function n(i,s=gn){let a,r=ne.getTransfer(s);if(i===Bi)return e.UNSIGNED_BYTE;if(i===Lp)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Pp)return e.UNSIGNED_SHORT_5_5_5_1;if(i===wv)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Cv)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ev)return e.BYTE;if(i===Av)return e.SHORT;if(i===mc)return e.UNSIGNED_SHORT;if(i===Np)return e.INT;if(i===Es)return e.UNSIGNED_INT;if(i===As)return e.FLOAT;if(i===Js)return e.HALF_FLOAT;if(i===Rv)return e.ALPHA;if(i===Dv)return e.RGB;if(i===ss)return e.RGBA;if(i===Gs)return e.DEPTH_COMPONENT;if(i===Br)return e.DEPTH_STENCIL;if(i===Uv)return e.RED;if(i===Op)return e.RED_INTEGER;if(i===Fr)return e.RG;if(i===Ip)return e.RG_INTEGER;if(i===Bp)return e.RGBA_INTEGER;if(i===mh||i===gh||i===_h||i===vh)if(r===me)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===mh)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_h)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===mh)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_h)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vh)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fp||i===zp||i===Vp||i===Hp)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Fp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gp||i===kp||i===Xp||i===Wp||i===qp||i===yh||i===Yp)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Gp||i===kp)return r===me?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Xp)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Wp)return a.COMPRESSED_R11_EAC;if(i===qp)return a.COMPRESSED_SIGNED_R11_EAC;if(i===yh)return a.COMPRESSED_RG11_EAC;if(i===Yp)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Zp||i===Jp||i===Kp||i===jp||i===Qp||i===$p||i===tm||i===em||i===nm||i===im||i===sm||i===am||i===rm||i===om)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Zp)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jp)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Kp)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jp)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qp)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$p)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tm)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===em)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nm)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===im)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sm)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===am)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rm)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===om)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lm||i===cm||i===um)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===lm)return r===me?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===um)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hm||i===fm||i===xh||i===dm)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===hm)return a.COMPRESSED_RED_RGTC1_EXT;if(i===fm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===gc?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var kL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ay=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new lh(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new mn({vertexShader:kL,fragmentShader:XL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new wn(new Ms(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ry=class extends ks{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,p=null,_=typeof XRWebGLBinding<"u",g=new ay,m={},v=n.getContextAttributes(),S=null,y=null,E=[],A=[],M=new kt,x=null,T=new hi;T.viewport=new se;let R=new hi;R.viewport=new se;let D=[T,R],U=new wp,F=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ht=E[Q];return ht===void 0&&(ht=new uc,E[Q]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(Q){let ht=E[Q];return ht===void 0&&(ht=new uc,E[Q]=ht),ht.getGripSpace()},this.getHand=function(Q){let ht=E[Q];return ht===void 0&&(ht=new uc,E[Q]=ht),ht.getHandSpace()};function O(Q){let ht=A.indexOf(Q.inputSource);if(ht===-1)return;let at=E[ht];at!==void 0&&(at.update(Q.inputSource,Q.frame,c||r),at.dispatchEvent({type:Q.type,data:Q.inputSource}))}function k(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",z);for(let Q=0;Q<E.length;Q++){let ht=A[Q];ht!==null&&(A[Q]=null,E[Q].disconnect(ht))}F=null,q=null,g.reset();for(let Q in m)delete m[Q];t.setRenderTarget(S),f=null,h=null,d=null,s=null,y=null,Ft.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,i.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",k),s.addEventListener("inputsourceschange",z),v.xrCompatible!==!0&&await n.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(M),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let at=null,Pt=null,Vt=null;v.depth&&(Vt=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,at=v.stencil?Br:Gs,Pt=v.stencil?gc:Es);let Dt={colorFormat:n.RGBA8,depthFormat:Vt,scaleFactor:a};d=this.getBinding(),h=d.createProjectionLayer(Dt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new Oi(h.textureWidth,h.textureHeight,{format:ss,type:Bi,depthTexture:new Ba(h.textureWidth,h.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let at={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(s,n,at),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Oi(f.framebufferWidth,f.framebufferHeight,{format:ss,type:Bi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),Ft.setContext(s),Ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z(Q){for(let ht=0;ht<Q.removed.length;ht++){let at=Q.removed[ht],Pt=A.indexOf(at);Pt>=0&&(A[Pt]=null,E[Pt].disconnect(at))}for(let ht=0;ht<Q.added.length;ht++){let at=Q.added[ht],Pt=A.indexOf(at);if(Pt===-1){for(let Dt=0;Dt<E.length;Dt++)if(Dt>=A.length){A.push(at),Pt=Dt;break}else if(A[Dt]===null){A[Dt]=at,Pt=Dt;break}if(Pt===-1)break}let Vt=E[Pt];Vt&&Vt.connect(at)}}let K=new X,it=new X;function lt(Q,ht,at){K.setFromMatrixPosition(ht.matrixWorld),it.setFromMatrixPosition(at.matrixWorld);let Pt=K.distanceTo(it),Vt=ht.projectionMatrix.elements,Dt=at.projectionMatrix.elements,Be=Vt[14]/(Vt[10]-1),Yt=Vt[14]/(Vt[10]+1),ce=(Vt[9]+1)/Vt[5],Qt=(Vt[9]-1)/Vt[5],Bt=(Vt[8]-1)/Vt[0],Zt=(Dt[8]+1)/Dt[0],Ee=Be*Bt,Je=Be*Zt,tn=Pt/(-Bt+Zt),ue=tn*-Bt;if(ht.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ue),Q.translateZ(tn),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Vt[10]===-1)Q.projectionMatrix.copy(ht.projectionMatrix),Q.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{let Ge=Be+tn,L=Yt+tn,ke=Ee-ue,oe=Je+(Pt-ue),C=ce*Yt/L*Ge,b=Qt*Yt/L*Ge;Q.projectionMatrix.makePerspective(ke,oe,C,b,Ge,L),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function st(Q,ht){ht===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ht.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ht=Q.near,at=Q.far;g.texture!==null&&(g.depthNear>0&&(ht=g.depthNear),g.depthFar>0&&(at=g.depthFar)),U.near=R.near=T.near=ht,U.far=R.far=T.far=at,(F!==U.near||q!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),F=U.near,q=U.far),U.layers.mask=Q.layers.mask|6,T.layers.mask=U.layers.mask&-5,R.layers.mask=U.layers.mask&-3;let Pt=Q.parent,Vt=U.cameras;st(U,Pt);for(let Dt=0;Dt<Vt.length;Dt++)st(Vt[Dt],Pt);Vt.length===2?lt(U,T,R):U.projectionMatrix.copy(T.projectionMatrix),ct(Q,U,Pt)};function ct(Q,ht,at){at===null?Q.matrix.copy(ht.matrixWorld):(Q.matrix.copy(at.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ht.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ht.projectionMatrix),Q.projectionMatrixInverse.copy(ht.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=lc*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(Q){return m[Q]};let Wt=null;function Lt(Q,ht){if(u=ht.getViewerPose(c||r),p=ht,u!==null){let at=u.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Pt=!1;at.length!==U.cameras.length&&(U.cameras.length=0,Pt=!0);for(let Yt=0;Yt<at.length;Yt++){let ce=at[Yt],Qt=null;if(f!==null)Qt=f.getViewport(ce);else{let Zt=d.getViewSubImage(h,ce);Qt=Zt.viewport,Yt===0&&(t.setRenderTargetTextures(y,Zt.colorTexture,Zt.depthStencilTexture),t.setRenderTarget(y))}let Bt=D[Yt];Bt===void 0&&(Bt=new hi,Bt.layers.enable(Yt),Bt.viewport=new se,D[Yt]=Bt),Bt.matrix.fromArray(ce.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(ce.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),Yt===0&&(U.matrix.copy(Bt.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Pt===!0&&U.cameras.push(Bt)}let Vt=s.enabledFeatures;if(Vt&&Vt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();let Yt=d.getDepthInformation(at[0]);Yt&&Yt.isValid&&Yt.texture&&g.init(Yt,s.renderState)}if(Vt&&Vt.includes("camera-access")&&_){t.state.unbindTexture(),d=i.getBinding();for(let Yt=0;Yt<at.length;Yt++){let ce=at[Yt].camera;if(ce){let Qt=m[ce];Qt||(Qt=new lh,m[ce]=Qt);let Bt=d.getCameraImage(ce);Qt.sourceTexture=Bt}}}}for(let at=0;at<E.length;at++){let Pt=A[at],Vt=E[at];Pt!==null&&Vt!==void 0&&Vt.update(Pt,ht,c||r)}Wt&&Wt(Q,ht),ht.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ht}),p=null}let Ft=new EE;Ft.setAnimationLoop(Lt),this.setAnimationLoop=function(Q){Wt=Q},this.dispose=function(){}}},WL=new sn,UE=new zt;UE.set(-1,0,0,0,1,0,0,0,1);function qL(e,t){function n(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Bv(e)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,v,S,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?a(g,m):m.isMeshLambertMaterial?(a(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(a(g,m),d(g,m)):m.isMeshPhongMaterial?(a(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(a(g,m),h(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(a(g,m),p(g,m)):m.isMeshDepthMaterial?a(g,m):m.isMeshDistanceMaterial?(a(g,m),_(g,m)):m.isMeshNormalMaterial?a(g,m):m.isLineBasicMaterial?(r(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,v,S):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,n(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,n(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===$n&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,n(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===$n&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,n(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,n(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let v=t.get(m),S=v.envMap,y=v.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(WL.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(UE),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,g.aoMapTransform))}function r(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,n(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,S){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=S*.5,m.map&&(g.map.value=m.map,n(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,n(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===$n&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let v=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function YL(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){let A=E.program;i.uniformBlockBinding(y,A)}function c(y,E){let A=s[y.id];A===void 0&&(g(y),A=u(y),s[y.id]=A,y.addEventListener("dispose",v));let M=E.program;i.updateUBOMapping(y,M);let x=t.render.frame;a[y.id]!==x&&(h(y),a[y.id]=x)}function u(y){let E=d();y.__bindingPointIndex=E;let A=e.createBuffer(),M=y.__size,x=y.usage;return e.bindBuffer(e.UNIFORM_BUFFER,A),e.bufferData(e.UNIFORM_BUFFER,M,x),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,E,A),A}function d(){for(let y=0;y<o;y++)if(r.indexOf(y)===-1)return r.push(y),y;return Ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let E=s[y.id],A=y.uniforms,M=y.__cache;e.bindBuffer(e.UNIFORM_BUFFER,E);for(let x=0,T=A.length;x<T;x++){let R=A[x];if(Array.isArray(R))for(let D=0,U=R.length;D<U;D++)f(R[D],x,D,M);else f(R,x,0,M)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(y,E,A,M){if(_(y,E,A,M)===!0){let x=y.__offset,T=y.value;if(Array.isArray(T)){let R=0;for(let D=0;D<T.length;D++){let U=T[D],F=m(U);p(U,y.__data,R),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(R+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,y.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,x,y.__data)}}function p(y,E,A){typeof y=="number"||typeof y=="boolean"?E[0]=y:y.isMatrix3?(E[0]=y.elements[0],E[1]=y.elements[1],E[2]=y.elements[2],E[3]=0,E[4]=y.elements[3],E[5]=y.elements[4],E[6]=y.elements[5],E[7]=0,E[8]=y.elements[6],E[9]=y.elements[7],E[10]=y.elements[8],E[11]=0):ArrayBuffer.isView(y)?E.set(new y.constructor(y.buffer,y.byteOffset,E.length)):y.toArray(E,A)}function _(y,E,A,M){let x=y.value,T=E+"_"+A;if(M[T]===void 0)return typeof x=="number"||typeof x=="boolean"?M[T]=x:ArrayBuffer.isView(x)?M[T]=x.slice():M[T]=x.clone(),!0;{let R=M[T];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return M[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function g(y){let E=y.uniforms,A=0,M=16;for(let T=0,R=E.length;T<R;T++){let D=Array.isArray(E[T])?E[T]:[E[T]];for(let U=0,F=D.length;U<F;U++){let q=D[U],O=Array.isArray(q.value)?q.value:[q.value];for(let k=0,z=O.length;k<z;k++){let K=O[k],it=m(K),lt=A%M,st=lt%it.boundary,ct=lt+st;A+=st,ct!==0&&M-ct<it.storage&&(A+=M-ct),q.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=A,A+=it.storage}}}let x=A%M;return x>0&&(A+=M-x),y.__size=A,y.__cache={},this}function m(y){let E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(E.boundary=16,E.storage=y.byteLength):Nt("WebGLRenderer: Unsupported uniform value type.",y),E}function v(y){let E=y.target;E.removeEventListener("dispose",v);let A=r.indexOf(E.__bindingPointIndex);r.splice(A,1),e.deleteBuffer(s[E.id]),delete s[E.id],delete a[E.id]}function S(){for(let y in s)e.deleteBuffer(s[y]);r=[],s={},a={}}return{bind:l,update:c,dispose:S}}var ZL=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ks=null;function JL(){return Ks===null&&(Ks=new Do(ZL,16,16,Fr,Js),Ks.name="DFG_LUT",Ks.minFilter=Te,Ks.magFilter=Te,Ks.wrapS=Li,Ks.wrapT=Li,Ks.generateMipmaps=!1,Ks.needsUpdate=!0),Ks}var xm=class{constructor(t={}){let{canvas:n=KT(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Bi}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;let _=f,g=new Set([Bp,Ip,Op]),m=new Set([Bi,Es,mc,gc,Lp,Pp]),v=new Uint32Array(4),S=new Int32Array(4),y=new X,E=null,A=null,M=[],x=[],T=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ts,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,U=null,F=null,q=null,O=null;this._outputColorSpace=Ni;let k=0,z=0,K=null,it=-1,lt=null,st=new se,ct=new se,Wt=null,Lt=new jt(0),Ft=0,Q=n.width,ht=n.height,at=1,Pt=null,Vt=null,Dt=new se(0,0,Q,ht),Be=new se(0,0,Q,ht),Yt=!1,ce=new rh,Qt=!1,Bt=!1,Zt=new sn,Ee=new X,Je=new se,tn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ue=!1;function Ge(){return K===null?at:1}let L=i;function ke(w,P){return n.getContext(w,P)}try{let w={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"185"}`),n.addEventListener("webglcontextlost",Re,!1),n.addEventListener("webglcontextrestored",xe,!1),n.addEventListener("webglcontextcreationerror",_i,!1),L===null){let P="webgl2";if(L=ke(P,w),L===null)throw ke(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(w){throw Ot("WebGLRenderer: "+w.message),w}let oe,C,b,I,G,Z,ot,dt,J,Y,nt,Et,pt,ut,Rt,Ut,Ht,N,ft,j,mt,vt,et;function Ct(){oe=new nN(L),oe.init(),mt=new GL(L,oe),C=new ZU(L,oe,t,mt),b=new VL(L,oe),C.reversedDepthBuffer&&h&&b.buffers.depth.setReversed(!0),F=L.createFramebuffer(),q=L.createFramebuffer(),O=L.createFramebuffer(),I=new aN(L),G=new AL,Z=new HL(L,oe,b,G,C,mt,I),ot=new eN(R),dt=new c3(L),vt=new qU(L,dt),J=new iN(L,dt,I,vt),Y=new oN(L,J,dt,vt,I),N=new rN(L,C,Z),Rt=new JU(G),nt=new EL(R,ot,oe,C,vt,Rt),Et=new qL(R,G),pt=new CL,ut=new PL(oe),Ht=new WU(R,ot,b,Y,p,l),Ut=new zL(R,Y,C),et=new YL(L,I,C,b),ft=new YU(L,oe,I),j=new sN(L,oe,I),I.programs=nt.programs,R.capabilities=C,R.extensions=oe,R.properties=G,R.renderLists=pt,R.shadowMap=Ut,R.state=b,R.info=I}Ct(),_!==Bi&&(T=new cN(_,n.width,n.height,o,s,a));let At=new ry(R,L);this.xr=At,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let w=oe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=oe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(w){w!==void 0&&(at=w,this.setSize(Q,ht,!1))},this.getSize=function(w){return w.set(Q,ht)},this.setSize=function(w,P,W=!0){if(At.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}Q=w,ht=P,n.width=Math.floor(w*at),n.height=Math.floor(P*at),W===!0&&(n.style.width=w+"px",n.style.height=P+"px"),T!==null&&T.setSize(n.width,n.height),this.setViewport(0,0,w,P)},this.getDrawingBufferSize=function(w){return w.set(Q*at,ht*at).floor()},this.setDrawingBufferSize=function(w,P,W){Q=w,ht=P,at=W,n.width=Math.floor(w*W),n.height=Math.floor(P*W),this.setViewport(0,0,w,P)},this.setEffects=function(w){if(_===Bi){Ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let P=0;P<w.length;P++)if(w[P].isOutputPass===!0){Nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(st)},this.getViewport=function(w){return w.copy(Dt)},this.setViewport=function(w,P,W,B){w.isVector4?Dt.set(w.x,w.y,w.z,w.w):Dt.set(w,P,W,B),b.viewport(st.copy(Dt).multiplyScalar(at).round())},this.getScissor=function(w){return w.copy(Be)},this.setScissor=function(w,P,W,B){w.isVector4?Be.set(w.x,w.y,w.z,w.w):Be.set(w,P,W,B),b.scissor(ct.copy(Be).multiplyScalar(at).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(w){b.setScissorTest(Yt=w)},this.setOpaqueSort=function(w){Pt=w},this.setTransparentSort=function(w){Vt=w},this.getClearColor=function(w){return w.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor(...arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha(...arguments)},this.clear=function(w=!0,P=!0,W=!0){let B=0;if(w){let V=!1;if(K!==null){let _t=K.texture.format;V=g.has(_t)}if(V){let _t=K.texture.type,bt=m.has(_t),H=Ht.getClearColor(),$=Ht.getClearAlpha(),rt=H.r,gt=H.g,wt=H.b;bt?(v[0]=rt,v[1]=gt,v[2]=wt,v[3]=$,L.clearBufferuiv(L.COLOR,0,v)):(S[0]=rt,S[1]=gt,S[2]=wt,S[3]=$,L.clearBufferiv(L.COLOR,0,S))}else B|=L.COLOR_BUFFER_BIT}P&&(B|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(B|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&L.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),U=w},this.dispose=function(){n.removeEventListener("webglcontextlost",Re,!1),n.removeEventListener("webglcontextrestored",xe,!1),n.removeEventListener("webglcontextcreationerror",_i,!1),Ht.dispose(),pt.dispose(),ut.dispose(),G.dispose(),ot.dispose(),Y.dispose(),vt.dispose(),et.dispose(),nt.dispose(),At.dispose(),At.removeEventListener("sessionstart",jr),At.removeEventListener("sessionend",us),vi.stop()};function Re(w){w.preventDefault(),Pv("WebGLRenderer: Context Lost."),D=!0}function xe(){Pv("WebGLRenderer: Context Restored."),D=!1;let w=I.autoReset,P=Ut.enabled,W=Ut.autoUpdate,B=Ut.needsUpdate,V=Ut.type;Ct(),I.autoReset=w,Ut.enabled=P,Ut.autoUpdate=W,Ut.needsUpdate=B,Ut.type=V}function _i(w){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Yn(w){let P=w.target;P.removeEventListener("dispose",Yn),Jr(P)}function Jr(w){Yo(w),G.remove(w)}function Yo(w){let P=G.get(w).programs;P!==void 0&&(P.forEach(function(W){nt.releaseProgram(W)}),w.isShaderMaterial&&nt.releaseShaderCache(w))}this.renderBufferDirect=function(w,P,W,B,V,_t){P===null&&(P=tn);let bt=V.isMesh&&V.matrixWorld.determinantAffine()<0,H=Xm(w,P,W,B,V);b.setMaterial(B,bt);let $=W.index,rt=1;if(B.wireframe===!0){if($=J.getWireframeAttribute(W),$===void 0)return;rt=2}let gt=W.drawRange,wt=W.attributes.position,Tt=gt.start*rt,Kt=(gt.start+gt.count)*rt;_t!==null&&(Tt=Math.max(Tt,_t.start*rt),Kt=Math.min(Kt,(_t.start+_t.count)*rt)),$!==null?(Tt=Math.max(Tt,0),Kt=Math.min(Kt,$.count)):wt!=null&&(Tt=Math.max(Tt,0),Kt=Math.min(Kt,wt.count));let le=Kt-Tt;if(le<0||le===1/0)return;vt.setup(V,B,H,W,$);let pe,he=ft;if($!==null&&(pe=dt.get($),he=j,he.setIndex(pe)),V.isMesh)B.wireframe===!0?(b.setLineWidth(B.wireframeLinewidth*Ge()),he.setMode(L.LINES)):he.setMode(L.TRIANGLES);else if(V.isLine){let Xe=B.linewidth;Xe===void 0&&(Xe=1),b.setLineWidth(Xe*Ge()),V.isLineSegments?he.setMode(L.LINES):V.isLineLoop?he.setMode(L.LINE_LOOP):he.setMode(L.LINE_STRIP)}else V.isPoints?he.setMode(L.POINTS):V.isSprite&&he.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))he.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Xe=V._multiDrawStarts,Mt=V._multiDrawCounts,We=V._multiDrawCount,Jt=$?dt.get($).bytesPerElement:1,Zn=G.get(B).currentProgram.getUniforms();for(let ki=0;ki<We;ki++)Zn.setValue(L,"_gl_DrawID",ki),he.render(Xe[ki]/Jt,Mt[ki])}else if(V.isInstancedMesh)he.renderInstances(Tt,le,V.count);else if(W.isInstancedBufferGeometry){let Xe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Mt=Math.min(W.instanceCount,Xe);he.renderInstances(Tt,le,Mt)}else he.render(Tt,le)};function ia(w,P,W){w.transparent===!0&&w.side===qs&&w.forceSinglePass===!1?(w.side=$n,w.needsUpdate=!0,zn(w,P,W),w.side=Ia,w.needsUpdate=!0,zn(w,P,W),w.side=qs):zn(w,P,W)}this.compile=function(w,P,W=null){W===null&&(W=w),A=ut.get(W),A.init(P),x.push(A),W.traverseVisible(function(V){V.isLight&&V.layers.test(P.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),w!==W&&w.traverseVisible(function(V){V.isLight&&V.layers.test(P.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),A.setupLights();let B=new Set;return w.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let _t=V.material;if(_t)if(Array.isArray(_t))for(let bt=0;bt<_t.length;bt++){let H=_t[bt];ia(H,W,V),B.add(H)}else ia(_t,W,V),B.add(_t)}),A=x.pop(),B},this.compileAsync=function(w,P,W=null){let B=this.compile(w,P,W);return new Promise(V=>{function _t(){if(B.forEach(function(bt){G.get(bt).currentProgram.isReady()&&B.delete(bt)}),B.size===0){V(w);return}setTimeout(_t,10)}oe.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let sa=null;function Kr(w){sa&&sa(w)}function jr(){vi.stop()}function us(){vi.start()}let vi=new EE;vi.setAnimationLoop(Kr),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(w){sa=w,At.setAnimationLoop(w),w===null?vi.stop():vi.start()},At.addEventListener("sessionstart",jr),At.addEventListener("sessionend",us),this.render=function(w,P){if(P!==void 0&&P.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;U!==null&&U.renderStart(w,P);let W=At.enabled===!0&&At.isPresenting===!0,B=T!==null&&(K===null||W)&&T.begin(R,K);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(At.cameraAutoUpdate===!0&&At.updateCamera(P),P=At.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,P,K),A=ut.get(w,x.length),A.init(P),A.state.textureUnits=Z.getTextureUnits(),x.push(A),Zt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),ce.setFromProjectionMatrix(Zt,Ss,P.reversedDepth),Bt=this.localClippingEnabled,Qt=Rt.init(this.clippingPlanes,Bt),E=pt.get(w,M.length),E.init(),M.push(E),At.enabled===!0&&At.isPresenting===!0){let bt=R.xr.getDepthSensingMesh();bt!==null&&Qr(bt,P,-1/0,R.sortObjects)}Qr(w,P,0,R.sortObjects),E.finish(),R.sortObjects===!0&&E.sort(Pt,Vt,P.reversedDepth),ue=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,ue&&Ht.addToRenderList(E,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qt===!0&&Rt.beginShadows();let V=A.state.shadowsArray;if(Ut.render(V,w,P),Qt===!0&&Rt.endShadows(),(B&&T.hasRenderPass())===!1){let bt=E.opaque,H=E.transmissive;if(A.setupLights(),P.isArrayCamera){let $=P.cameras;if(H.length>0)for(let rt=0,gt=$.length;rt<gt;rt++){let wt=$[rt];Zo(bt,H,w,wt)}ue&&Ht.render(w);for(let rt=0,gt=$.length;rt<gt;rt++){let wt=$[rt];ni(E,w,wt,wt.viewport)}}else H.length>0&&Zo(bt,H,w,P),ue&&Ht.render(w),ni(E,w,P)}K!==null&&z===0&&(Z.updateMultisampleRenderTarget(K),Z.updateRenderTargetMipmap(K)),B&&T.end(R),w.isScene===!0&&w.onAfterRender(R,w,P),vt.resetDefaultState(),it=-1,lt=null,x.pop(),x.length>0?(A=x[x.length-1],Z.setTextureUnits(A.state.textureUnits),Qt===!0&&Rt.setGlobalState(R.clippingPlanes,A.state.camera)):A=null,M.pop(),M.length>0?E=M[M.length-1]:E=null,U!==null&&U.renderEnd()};function Qr(w,P,W,B){if(w.visible===!1)return;if(w.layers.test(P.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(P);else if(w.isLightProbeGrid)A.pushLightProbeGrid(w);else if(w.isLight)A.pushLight(w),w.castShadow&&A.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ce.intersectsSprite(w)){B&&Je.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Zt);let bt=Y.update(w),H=w.material;H.visible&&E.push(w,bt,H,W,Je.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ce.intersectsObject(w))){let bt=Y.update(w),H=w.material;if(B&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Je.copy(w.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Je.copy(bt.boundingSphere.center)),Je.applyMatrix4(w.matrixWorld).applyMatrix4(Zt)),Array.isArray(H)){let $=bt.groups;for(let rt=0,gt=$.length;rt<gt;rt++){let wt=$[rt],Tt=H[wt.materialIndex];Tt&&Tt.visible&&E.push(w,bt,Tt,W,Je.z,wt)}}else H.visible&&E.push(w,bt,H,W,Je.z,null)}}let _t=w.children;for(let bt=0,H=_t.length;bt<H;bt++)Qr(_t[bt],P,W,B)}function ni(w,P,W,B){let{opaque:V,transmissive:_t,transparent:bt}=w;A.setupLightsView(W),Qt===!0&&Rt.setGlobalState(R.clippingPlanes,W),B&&b.viewport(st.copy(B)),V.length>0&&yi(V,P,W),_t.length>0&&yi(_t,P,W),bt.length>0&&yi(bt,P,W),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Zo(w,P,W,B){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[B.id]===void 0){let Tt=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[B.id]=new Oi(1,1,{generateMipmaps:!0,type:Tt?Js:Bi,minFilter:Zs,samples:Math.max(4,C.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace})}let _t=A.state.transmissionRenderTarget[B.id],bt=B.viewport||st;_t.setSize(bt.z*R.transmissionResolutionScale,bt.w*R.transmissionResolutionScale);let H=R.getRenderTarget(),$=R.getActiveCubeFace(),rt=R.getActiveMipmapLevel();R.setRenderTarget(_t),R.getClearColor(Lt),Ft=R.getClearAlpha(),Ft<1&&R.setClearColor(16777215,.5),R.clear(),ue&&Ht.render(W);let gt=R.toneMapping;R.toneMapping=Ts;let wt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),A.setupLightsView(B),Qt===!0&&Rt.setGlobalState(R.clippingPlanes,B),yi(w,W,B),Z.updateMultisampleRenderTarget(_t),Z.updateRenderTargetMipmap(_t),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let Kt=0,le=P.length;Kt<le;Kt++){let pe=P[Kt],{object:he,geometry:Xe,material:Mt,group:We}=pe;if(Mt.side===qs&&he.layers.test(B.layers)){let Jt=Mt.side;Mt.side=$n,Mt.needsUpdate=!0,Fc(he,W,B,Xe,Mt,We),Mt.side=Jt,Mt.needsUpdate=!0,Tt=!0}}Tt===!0&&(Z.updateMultisampleRenderTarget(_t),Z.updateRenderTargetMipmap(_t))}R.setRenderTarget(H,$,rt),R.setClearColor(Lt,Ft),wt!==void 0&&(B.viewport=wt),R.toneMapping=gt}function yi(w,P,W){let B=P.isScene===!0?P.overrideMaterial:null;for(let V=0,_t=w.length;V<_t;V++){let bt=w[V],{object:H,geometry:$,group:rt}=bt,gt=bt.material;gt.allowOverride===!0&&B!==null&&(gt=B),H.layers.test(W.layers)&&Fc(H,P,W,$,gt,rt)}}function Fc(w,P,W,B,V,_t){w.onBeforeRender(R,P,W,B,V,_t),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(R,P,W,B,w,_t),V.transparent===!0&&V.side===qs&&V.forceSinglePass===!1?(V.side=$n,V.needsUpdate=!0,R.renderBufferDirect(W,P,B,V,w,_t),V.side=Ia,V.needsUpdate=!0,R.renderBufferDirect(W,P,B,V,w,_t),V.side=qs):R.renderBufferDirect(W,P,B,V,w,_t),w.onAfterRender(R,P,W,B,V,_t)}function zn(w,P,W){P.isScene!==!0&&(P=tn);let B=G.get(w),V=A.state.lights,_t=A.state.shadowsArray,bt=V.state.version,H=nt.getParameters(w,V.state,_t,P,W,A.state.lightProbeGridArray),$=nt.getProgramCacheKey(H),rt=B.programs;B.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?P.environment:null,B.fog=P.fog;let gt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;B.envMap=ot.get(w.envMap||B.environment,gt),B.envMapRotation=B.environment!==null&&w.envMap===null?P.environmentRotation:w.envMapRotation,rt===void 0&&(w.addEventListener("dispose",Yn),rt=new Map,B.programs=rt);let wt=rt.get($);if(wt!==void 0){if(B.currentProgram===wt&&B.lightsStateVersion===bt)return Wa(w,H),wt}else H.uniforms=nt.getUniforms(w),U!==null&&w.isNodeMaterial&&U.build(w,W,H),w.onBeforeCompile(H,R),wt=nt.acquireProgram(H,$),rt.set($,wt),B.uniforms=H.uniforms;let Tt=B.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Tt.clippingPlanes=Rt.uniform),Wa(w,H),B.needsLights=Wm(w),B.lightsStateVersion=bt,B.needsLights&&(Tt.ambientLightColor.value=V.state.ambient,Tt.lightProbe.value=V.state.probe,Tt.directionalLights.value=V.state.directional,Tt.directionalLightShadows.value=V.state.directionalShadow,Tt.spotLights.value=V.state.spot,Tt.spotLightShadows.value=V.state.spotShadow,Tt.rectAreaLights.value=V.state.rectArea,Tt.ltc_1.value=V.state.rectAreaLTC1,Tt.ltc_2.value=V.state.rectAreaLTC2,Tt.pointLights.value=V.state.point,Tt.pointLightShadows.value=V.state.pointShadow,Tt.hemisphereLights.value=V.state.hemi,Tt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Tt.spotLightMatrix.value=V.state.spotLightMatrix,Tt.spotLightMap.value=V.state.spotLightMap,Tt.pointShadowMatrix.value=V.state.pointShadowMatrix),B.lightProbeGrid=A.state.lightProbeGridArray.length>0,B.currentProgram=wt,B.uniformsList=null,wt}function aa(w){if(w.uniformsList===null){let P=w.currentProgram.getUniforms();w.uniformsList=yc.seqWithValue(P.seq,w.uniforms)}return w.uniformsList}function Wa(w,P){let W=G.get(w);W.outputColorSpace=P.outputColorSpace,W.batching=P.batching,W.batchingColor=P.batchingColor,W.instancing=P.instancing,W.instancingColor=P.instancingColor,W.instancingMorph=P.instancingMorph,W.skinning=P.skinning,W.morphTargets=P.morphTargets,W.morphNormals=P.morphNormals,W.morphColors=P.morphColors,W.morphTargetsCount=P.morphTargetsCount,W.numClippingPlanes=P.numClippingPlanes,W.numIntersection=P.numClipIntersection,W.vertexAlphas=P.vertexAlphas,W.vertexTangents=P.vertexTangents,W.toneMapping=P.toneMapping}function km(w,P){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;y.setFromMatrixPosition(P.matrixWorld);for(let W=0,B=w.length;W<B;W++){let V=w[W];if(V.texture!==null&&V.boundingBox.containsPoint(y))return V}return null}function Xm(w,P,W,B,V){P.isScene!==!0&&(P=tn),Z.resetTextureUnits();let _t=P.fog,bt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?P.environment:null,H=K===null?R.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ne.workingColorSpace,$=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,rt=ot.get(B.envMap||bt,$),gt=B.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,wt=!!W.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Tt=!!W.morphAttributes.position,Kt=!!W.morphAttributes.normal,le=!!W.morphAttributes.color,pe=Ts;B.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(pe=R.toneMapping);let he=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Xe=he!==void 0?he.length:0,Mt=G.get(B),We=A.state.lights;if(Qt===!0&&(Bt===!0||w!==lt)){let Se=w===lt&&B.id===it;Rt.setState(B,w,Se)}let Jt=!1;B.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==We.state.version||Mt.outputColorSpace!==H||V.isBatchedMesh&&Mt.batching===!1||!V.isBatchedMesh&&Mt.batching===!0||V.isBatchedMesh&&Mt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Mt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Mt.instancing===!1||!V.isInstancedMesh&&Mt.instancing===!0||V.isSkinnedMesh&&Mt.skinning===!1||!V.isSkinnedMesh&&Mt.skinning===!0||V.isInstancedMesh&&Mt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Mt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Mt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Mt.instancingMorph===!1&&V.morphTexture!==null||Mt.envMap!==rt||B.fog===!0&&Mt.fog!==_t||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==Rt.numPlanes||Mt.numIntersection!==Rt.numIntersection)||Mt.vertexAlphas!==gt||Mt.vertexTangents!==wt||Mt.morphTargets!==Tt||Mt.morphNormals!==Kt||Mt.morphColors!==le||Mt.toneMapping!==pe||Mt.morphTargetsCount!==Xe||!!Mt.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(Jt=!0):(Jt=!0,Mt.__version=B.version);let Zn=Mt.currentProgram;Jt===!0&&(Zn=zn(B,P,V),U&&B.isNodeMaterial&&U.onUpdateProgram(B,Zn,Mt));let ki=!1,hs=!1,ra=!1,ge=Zn.getUniforms(),Fe=Mt.uniforms;if(b.useProgram(Zn.program)&&(ki=!0,hs=!0,ra=!0),B.id!==it&&(it=B.id,hs=!0),Mt.needsLights){let Se=km(A.state.lightProbeGridArray,V);Mt.lightProbeGrid!==Se&&(Mt.lightProbeGrid=Se,hs=!0)}if(ki||lt!==w){b.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ge.setValue(L,"projectionMatrix",w.projectionMatrix),ge.setValue(L,"viewMatrix",w.matrixWorldInverse);let fs=ge.map.cameraPosition;fs!==void 0&&fs.setValue(L,Ee.setFromMatrixPosition(w.matrixWorld)),C.logarithmicDepthBuffer&&ge.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ge.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),lt!==w&&(lt=w,hs=!0,ra=!0)}if(Mt.needsLights&&(We.state.directionalShadowMap.length>0&&ge.setValue(L,"directionalShadowMap",We.state.directionalShadowMap,Z),We.state.spotShadowMap.length>0&&ge.setValue(L,"spotShadowMap",We.state.spotShadowMap,Z),We.state.pointShadowMap.length>0&&ge.setValue(L,"pointShadowMap",We.state.pointShadowMap,Z)),V.isSkinnedMesh){ge.setOptional(L,V,"bindMatrix"),ge.setOptional(L,V,"bindMatrixInverse");let Se=V.skeleton;Se&&(Se.boneTexture===null&&Se.computeBoneTexture(),ge.setValue(L,"boneTexture",Se.boneTexture,Z))}V.isBatchedMesh&&(ge.setOptional(L,V,"batchingTexture"),ge.setValue(L,"batchingTexture",V._matricesTexture,Z),ge.setOptional(L,V,"batchingIdTexture"),ge.setValue(L,"batchingIdTexture",V._indirectTexture,Z),ge.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&ge.setValue(L,"batchingColorTexture",V._colorsTexture,Z));let Cs=W.morphAttributes;if((Cs.position!==void 0||Cs.normal!==void 0||Cs.color!==void 0)&&N.update(V,W,Zn),(hs||Mt.receiveShadow!==V.receiveShadow)&&(Mt.receiveShadow=V.receiveShadow,ge.setValue(L,"receiveShadow",V.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&P.environment!==null&&(Fe.envMapIntensity.value=P.environmentIntensity),Fe.dfgLUT!==void 0&&(Fe.dfgLUT.value=JL()),hs){if(ge.setValue(L,"toneMappingExposure",R.toneMappingExposure),Mt.needsLights&&Gh(Fe,ra),_t&&B.fog===!0&&Et.refreshFogUniforms(Fe,_t),Et.refreshMaterialUniforms(Fe,B,at,ht,A.state.transmissionRenderTarget[w.id]),Mt.needsLights&&Mt.lightProbeGrid){let Se=Mt.lightProbeGrid;Fe.probesSH.value=Se.texture,Fe.probesMin.value.copy(Se.boundingBox.min),Fe.probesMax.value.copy(Se.boundingBox.max),Fe.probesResolution.value.copy(Se.resolution)}yc.upload(L,aa(Mt),Fe,Z)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(yc.upload(L,aa(Mt),Fe,Z),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ge.setValue(L,"center",V.center),ge.setValue(L,"modelViewMatrix",V.modelViewMatrix),ge.setValue(L,"normalMatrix",V.normalMatrix),ge.setValue(L,"modelMatrix",V.matrixWorld),B.uniformsGroups!==void 0){let Se=B.uniformsGroups;for(let fs=0,oa=Se.length;fs<oa;fs++){let Jo=Se[fs];et.update(Jo,Zn),et.bind(Jo,Zn)}}return Zn}function Gh(w,P){w.ambientLightColor.needsUpdate=P,w.lightProbe.needsUpdate=P,w.directionalLights.needsUpdate=P,w.directionalLightShadows.needsUpdate=P,w.pointLights.needsUpdate=P,w.pointLightShadows.needsUpdate=P,w.spotLights.needsUpdate=P,w.spotLightShadows.needsUpdate=P,w.rectAreaLights.needsUpdate=P,w.hemisphereLights.needsUpdate=P}function Wm(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(w,P,W){let B=G.get(w);B.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),G.get(w.texture).__webglTexture=P,G.get(w.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:W,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,P){let W=G.get(w);W.__webglFramebuffer=P,W.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(w,P=0,W=0){K=w,k=P,z=W;let B=null,V=!1,_t=!1;if(w){let H=G.get(w);if(H.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(L.FRAMEBUFFER,H.__webglFramebuffer),st.copy(w.viewport),ct.copy(w.scissor),Wt=w.scissorTest,b.viewport(st),b.scissor(ct),b.setScissorTest(Wt),it=-1;return}else if(H.__webglFramebuffer===void 0)Z.setupRenderTarget(w);else if(H.__hasExternalTextures)Z.rebindTextures(w,G.get(w.texture).__webglTexture,G.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let gt=w.depthTexture;if(H.__boundDepthTexture!==gt){if(gt!==null&&G.has(gt)&&(w.width!==gt.image.width||w.height!==gt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(w)}}let $=w.texture;($.isData3DTexture||$.isDataArrayTexture||$.isCompressedArrayTexture)&&(_t=!0);let rt=G.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(rt[P])?B=rt[P][W]:B=rt[P],V=!0):w.samples>0&&Z.useMultisampledRTT(w)===!1?B=G.get(w).__webglMultisampledFramebuffer:Array.isArray(rt)?B=rt[W]:B=rt,st.copy(w.viewport),ct.copy(w.scissor),Wt=w.scissorTest}else st.copy(Dt).multiplyScalar(at).floor(),ct.copy(Be).multiplyScalar(at).floor(),Wt=Yt;if(W!==0&&(B=F),b.bindFramebuffer(L.FRAMEBUFFER,B)&&b.drawBuffers(w,B),b.viewport(st),b.scissor(ct),b.setScissorTest(Wt),V){let H=G.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+P,H.__webglTexture,W)}else if(_t){let H=P;for(let $=0;$<w.textures.length;$++){let rt=G.get(w.textures[$]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+$,rt.__webglTexture,W,H)}}else if(w!==null&&W!==0){let H=G.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,H.__webglTexture,W)}it=-1},this.readRenderTargetPixels=function(w,P,W,B,V,_t,bt,H=0){if(!(w&&w.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $=G.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&bt!==void 0&&($=$[bt]),$){b.bindFramebuffer(L.FRAMEBUFFER,$);try{let rt=w.textures[H],gt=rt.format,wt=rt.type;if(w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+H),!C.textureFormatReadable(gt)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(wt)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=w.width-B&&W>=0&&W<=w.height-V&&L.readPixels(P,W,B,V,mt.convert(gt),mt.convert(wt),_t)}finally{let rt=K!==null?G.get(K).__webglFramebuffer:null;b.bindFramebuffer(L.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(w,P,W,B,V,_t,bt,H=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $=G.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&bt!==void 0&&($=$[bt]),$)if(P>=0&&P<=w.width-B&&W>=0&&W<=w.height-V){b.bindFramebuffer(L.FRAMEBUFFER,$);let rt=w.textures[H],gt=rt.format,wt=rt.type;if(w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+H),!C.textureFormatReadable(gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Tt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Tt),L.bufferData(L.PIXEL_PACK_BUFFER,_t.byteLength,L.STREAM_READ),L.readPixels(P,W,B,V,mt.convert(gt),mt.convert(wt),0);let Kt=K!==null?G.get(K).__webglFramebuffer:null;b.bindFramebuffer(L.FRAMEBUFFER,Kt);let le=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await QT(L,le,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Tt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,_t),L.deleteBuffer(Tt),L.deleteSync(le),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,P=null,W=0){let B=Math.pow(2,-W),V=Math.floor(w.image.width*B),_t=Math.floor(w.image.height*B),bt=P!==null?P.x:0,H=P!==null?P.y:0;Z.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,bt,H,V,_t),b.unbindTexture()},this.copyTextureToTexture=function(w,P,W=null,B=null,V=0,_t=0){let bt,H,$,rt,gt,wt,Tt,Kt,le,pe=w.isCompressedTexture?w.mipmaps[_t]:w.image;if(W!==null)bt=W.max.x-W.min.x,H=W.max.y-W.min.y,$=W.isBox3?W.max.z-W.min.z:1,rt=W.min.x,gt=W.min.y,wt=W.isBox3?W.min.z:0;else{let Fe=Math.pow(2,-V);bt=Math.floor(pe.width*Fe),H=Math.floor(pe.height*Fe),w.isDataArrayTexture?$=pe.depth:w.isData3DTexture?$=Math.floor(pe.depth*Fe):$=1,rt=0,gt=0,wt=0}B!==null?(Tt=B.x,Kt=B.y,le=B.z):(Tt=0,Kt=0,le=0);let he=mt.convert(P.format),Xe=mt.convert(P.type),Mt;P.isData3DTexture?(Z.setTexture3D(P,0),Mt=L.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(Z.setTexture2DArray(P,0),Mt=L.TEXTURE_2D_ARRAY):(Z.setTexture2D(P,0),Mt=L.TEXTURE_2D),b.activeTexture(L.TEXTURE0),b.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,P.flipY),b.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),b.pixelStorei(L.UNPACK_ALIGNMENT,P.unpackAlignment);let We=b.getParameter(L.UNPACK_ROW_LENGTH),Jt=b.getParameter(L.UNPACK_IMAGE_HEIGHT),Zn=b.getParameter(L.UNPACK_SKIP_PIXELS),ki=b.getParameter(L.UNPACK_SKIP_ROWS),hs=b.getParameter(L.UNPACK_SKIP_IMAGES);b.pixelStorei(L.UNPACK_ROW_LENGTH,pe.width),b.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pe.height),b.pixelStorei(L.UNPACK_SKIP_PIXELS,rt),b.pixelStorei(L.UNPACK_SKIP_ROWS,gt),b.pixelStorei(L.UNPACK_SKIP_IMAGES,wt);let ra=w.isDataArrayTexture||w.isData3DTexture,ge=P.isDataArrayTexture||P.isData3DTexture;if(w.isDepthTexture){let Fe=G.get(w),Cs=G.get(P),Se=G.get(Fe.__renderTarget),fs=G.get(Cs.__renderTarget);b.bindFramebuffer(L.READ_FRAMEBUFFER,Se.__webglFramebuffer),b.bindFramebuffer(L.DRAW_FRAMEBUFFER,fs.__webglFramebuffer);for(let oa=0;oa<$;oa++)ra&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,G.get(w).__webglTexture,V,wt+oa),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,G.get(P).__webglTexture,_t,le+oa)),L.blitFramebuffer(rt,gt,bt,H,Tt,Kt,bt,H,L.DEPTH_BUFFER_BIT,L.NEAREST);b.bindFramebuffer(L.READ_FRAMEBUFFER,null),b.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(V!==0||w.isRenderTargetTexture||G.has(w)){let Fe=G.get(w),Cs=G.get(P);b.bindFramebuffer(L.READ_FRAMEBUFFER,q),b.bindFramebuffer(L.DRAW_FRAMEBUFFER,O);for(let Se=0;Se<$;Se++)ra?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Fe.__webglTexture,V,wt+Se):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Fe.__webglTexture,V),ge?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Cs.__webglTexture,_t,le+Se):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Cs.__webglTexture,_t),V!==0?L.blitFramebuffer(rt,gt,bt,H,Tt,Kt,bt,H,L.COLOR_BUFFER_BIT,L.NEAREST):ge?L.copyTexSubImage3D(Mt,_t,Tt,Kt,le+Se,rt,gt,bt,H):L.copyTexSubImage2D(Mt,_t,Tt,Kt,rt,gt,bt,H);b.bindFramebuffer(L.READ_FRAMEBUFFER,null),b.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ge?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Mt,_t,Tt,Kt,le,bt,H,$,he,Xe,pe.data):P.isCompressedArrayTexture?L.compressedTexSubImage3D(Mt,_t,Tt,Kt,le,bt,H,$,he,pe.data):L.texSubImage3D(Mt,_t,Tt,Kt,le,bt,H,$,he,Xe,pe):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,_t,Tt,Kt,bt,H,he,Xe,pe.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,_t,Tt,Kt,pe.width,pe.height,he,pe.data):L.texSubImage2D(L.TEXTURE_2D,_t,Tt,Kt,bt,H,he,Xe,pe);b.pixelStorei(L.UNPACK_ROW_LENGTH,We),b.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Jt),b.pixelStorei(L.UNPACK_SKIP_PIXELS,Zn),b.pixelStorei(L.UNPACK_SKIP_ROWS,ki),b.pixelStorei(L.UNPACK_SKIP_IMAGES,hs),_t===0&&P.generateMipmaps&&L.generateMipmap(Mt),b.unbindTexture()},this.initRenderTarget=function(w){G.get(w).__webglFramebuffer===void 0&&Z.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Z.setTextureCube(w,0):w.isData3DTexture?Z.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Z.setTexture2DArray(w,0):Z.setTexture2D(w,0),b.unbindTexture()},this.resetState=function(){k=0,z=0,K=null,b.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ss}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),n.unpackColorSpace=ne._getUnpackColorSpace()}};function Fa(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function VE(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var mi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Mc={duration:.5,overwrite:!1,delay:0},Ty,On,He,rs=1e8,Ce=1/rs,py=Math.PI*2,KL=py/4,jL=0,HE=Math.sqrt,QL=Math.cos,$L=Math.sin,yn=function(t){return typeof t=="string"},Qe=function(t){return typeof t=="function"},Va=function(t){return typeof t=="number"},Nm=function(t){return typeof t>"u"},ta=function(t){return typeof t=="object"},pi=function(t){return t!==!1},Ey=function(){return typeof window<"u"},Mm=function(t){return Qe(t)||yn(t)},GE=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Wn=Array.isArray,tP=/random\([^)]+\)/g,eP=/,\s*/g,NE=/(?:-?\.?\d|\.)+/gi,Ay=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Fo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,oy=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,wy=/[+-]=-?[.\d]+/,nP=/[^,'"\[\]\s]+/gi,iP=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ye,Qs,my,Cy,zi={},wm={},kE,XE=function(t){return(wm=Tc(t,zi))&&qn},Lm=function(t,n){return console.warn("Invalid property",t,"set to",n,"Missing plugin? gsap.registerPlugin()")},Rh=function(t,n){return!n&&console.warn(t)},WE=function(t,n){return t&&(zi[t]=n)&&wm&&(wm[t]=n)||zi},Dh=function(){return 0},sP={suppressEvents:!0,isStart:!0,kill:!1},Tm={suppressEvents:!0,kill:!1},aP={suppressEvents:!0},Ry={},Hr=[],gy={},qE,fi={},ly={},LE=30,Em=[],Dy="",Uy=function(t){var n=t[0],i,s;if(ta(n)||Qe(n)||(t=[t]),!(i=(n._gsap||{}).harness)){for(s=Em.length;s--&&!Em[s].targetTest(n););i=Em[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new Oy(t[s],i)))||t.splice(s,1);return t},Gr=function(t){return t._gsap||Uy(os(t))[0]._gsap},Ny=function(t,n,i){return(i=t[n])&&Qe(i)?t[n]():Nm(i)&&t.getAttribute&&t.getAttribute(n)||i},ti=function(t,n){return(t=t.split(",")).forEach(n)||t},$e=function(t){return Math.round(t*1e5)/1e5||0},qe=function(t){return Math.round(t*1e7)/1e7||0},zo=function(t,n){var i=n.charAt(0),s=parseFloat(n.substr(2));return t=parseFloat(t),i==="+"?t+s:i==="-"?t-s:i==="*"?t*s:t/s},rP=function(t,n){for(var i=n.length,s=0;t.indexOf(n[s])<0&&++s<i;);return s<i},Cm=function(){var t=Hr.length,n=Hr.slice(0),i,s;for(gy={},Hr.length=0,i=0;i<t;i++)s=n[i],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Ly=function(t){return!!(t._initted||t._startAt||t.add)},YE=function(t,n,i,s){Hr.length&&!On&&Cm(),t.render(n,i,s||!!(On&&n<0&&Ly(t))),Hr.length&&!On&&Cm()},ZE=function(t){var n=parseFloat(t);return(n||n===0)&&(t+"").match(nP).length<2?n:yn(t)?t.trim():t},JE=function(t){return t},Vi=function(t,n){for(var i in n)i in t||(t[i]=n[i]);return t},oP=function(t){return function(n,i){for(var s in i)s in n||s==="duration"&&t||s==="ease"||(n[s]=i[s])}},Tc=function(t,n){for(var i in n)t[i]=n[i];return t},PE=function e(t,n){for(var i in n)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=ta(n[i])?e(t[i]||(t[i]={}),n[i]):n[i]);return t},Rm=function(t,n){var i={},s;for(s in t)s in n||(i[s]=t[s]);return i},Ah=function(t){var n=t.parent||Ye,i=t.keyframes?oP(Wn(t.keyframes)):Vi;if(pi(t.inherit))for(;n;)i(t,n.vars.defaults),n=n.parent||n._dp;return t},lP=function(t,n){for(var i=t.length,s=i===n.length;s&&i--&&t[i]===n[i];);return i<0},KE=function(t,n,i,s,a){i===void 0&&(i="_first"),s===void 0&&(s="_last");var r=t[s],o;if(a)for(o=n[a];r&&r[a]>o;)r=r._prev;return r?(n._next=r._next,r._next=n):(n._next=t[i],t[i]=n),n._next?n._next._prev=n:t[s]=n,n._prev=r,n.parent=n._dp=t,n},Pm=function(t,n,i,s){i===void 0&&(i="_first"),s===void 0&&(s="_last");var a=n._prev,r=n._next;a?a._next=r:t[i]===n&&(t[i]=r),r?r._prev=a:t[s]===n&&(t[s]=a),n._next=n._prev=n.parent=null},kr=function(t,n){t.parent&&(!n||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Oo=function(t,n){if(t&&(!n||n._end>t._dur||n._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},cP=function(t){for(var n=t.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return t},_y=function(t,n,i,s){return t._startAt&&(On?t._startAt.revert(Tm):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(n,!0,s))},uP=function e(t){return!t||t._ts&&e(t.parent)},OE=function(t){return t._repeat?Ec(t._tTime,t=t.duration()+t._rDelay)*t:0},Ec=function(t,n){var i=Math.floor(t=qe(t/n));return t&&i===t?i-1:i},Dm=function(t,n){return(t-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},Om=function(t){return t._end=qe(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ce)||0))},Im=function(t,n){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=qe(i._time-(t._ts>0?n/t._ts:((t._dirty?t.totalDuration():t._tDur)-n)/-t._ts)),Om(t),i._dirty||Oo(i,t)),t},jE=function(t,n){var i;if((n._time||!n._dur&&n._initted||n._start<t._time&&(n._dur||!n.add))&&(i=Dm(t.rawTime(),n),(!n._dur||Lh(0,n.totalDuration(),i)-n._tTime>Ce)&&n.render(i,!0)),Oo(t,n)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-Ce}},$s=function(t,n,i,s){return n.parent&&kr(n),n._start=qe((Va(i)?i:i||t!==Ye?as(t,i,n):t._time)+n._delay),n._end=qe(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),KE(t,n,"_first","_last",t._sort?"_start":0),vy(n)||(t._recent=n),s||jE(t,n),t._ts<0&&Im(t,t._tTime),t},QE=function(t,n){return(zi.ScrollTrigger||Lm("scrollTrigger",n))&&zi.ScrollTrigger.create(n,t)},$E=function(t,n,i,s,a){if(Fy(t,n,a),!t._initted)return 1;if(!i&&t._pt&&!On&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&qE!==di.frame)return Hr.push(t),t._lazy=[a,s],1},hP=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},vy=function(t){var n=t.data;return n==="isFromStart"||n==="isStart"},fP=function(t,n,i,s){var a=t.ratio,r=n<0||!n&&(!t._start&&hP(t)&&!(!t._initted&&vy(t))||(t._ts<0||t._dp._ts<0)&&!vy(t))?0:1,o=t._rDelay,l=0,c,u,d;if(o&&t._repeat&&(l=Lh(0,t._tDur,n),u=Ec(l,o),t._yoyo&&u&1&&(r=1-r),u!==Ec(t._tTime,o)&&(a=1-r,t.vars.repeatRefresh&&t._initted&&t.invalidate())),r!==a||On||s||t._zTime===Ce||!n&&t._zTime){if(!t._initted&&$E(t,n,s,i,l))return;for(d=t._zTime,t._zTime=n||(i?Ce:0),i||(i=n&&!d),t.ratio=r,t._from&&(r=1-r),t._time=0,t._tTime=l,c=t._pt;c;)c.r(r,c.d),c=c._next;n<0&&_y(t,n,i,!0),t._onUpdate&&!i&&Fi(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&Fi(t,"onRepeat"),(n>=t._tDur||n<0)&&t.ratio===r&&(r&&kr(t,1),!i&&!On&&(Fi(t,r?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=n)},dP=function(t,n,i){var s;if(i>n)for(s=t._first;s&&s._start<=i;){if(s.data==="isPause"&&s._start>n)return s;s=s._next}else for(s=t._last;s&&s._start>=i;){if(s.data==="isPause"&&s._start<n)return s;s=s._prev}},Ac=function(t,n,i,s){var a=t._repeat,r=qe(n)||0,o=t._tTime/t._tDur;return o&&!s&&(t._time*=r/t._dur),t._dur=r,t._tDur=a?a<0?1e10:qe(r*(a+1)+t._rDelay*a):r,o>0&&!s&&Im(t,t._tTime=t._tDur*o),t.parent&&Om(t),i||Oo(t.parent,t),t},IE=function(t){return t instanceof Pn?Oo(t):Ac(t,t._dur)},pP={_start:0,endTime:Dh,totalDuration:Dh},as=function e(t,n,i){var s=t.labels,a=t._recent||pP,r=t.duration()>=rs?a.endTime(!1):t._dur,o,l,c;return yn(n)&&(isNaN(n)||n in s)?(l=n.charAt(0),c=n.substr(-1)==="%",o=n.indexOf("="),l==="<"||l===">"?(o>=0&&(n=n.replace(/=/,"")),(l==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(n.substr(1))||0)*(c?(o<0?a:i).totalDuration()/100:1)):o<0?(n in s||(s[n]=r),s[n]):(l=parseFloat(n.charAt(o-1)+n.substr(o+1)),c&&i&&(l=l/100*(Wn(i)?i[0]:i).totalDuration()),o>1?e(t,n.substr(0,o-1),i)+l:r+l)):n==null?r:+n},wh=function(t,n,i){var s=Va(n[1]),a=(s?2:1)+(t<2?0:1),r=n[a],o,l;if(s&&(r.duration=n[1]),r.parent=i,t){for(o=r,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=pi(l.vars.inherit)&&l.parent;r.immediateRender=pi(o.immediateRender),t<2?r.runBackwards=1:r.startAt=n[a-1]}return new an(n[0],r,n[a+1])},Xr=function(t,n){return t||t===0?n(t):n},Lh=function(t,n,i){return i<t?t:i>n?n:i},In=function(t,n){return!yn(t)||!(n=iP.exec(t))?"":n[1]},mP=function(t,n,i){return Xr(i,function(s){return Lh(t,n,s)})},yy=[].slice,tA=function(t,n){return t&&ta(t)&&"length"in t&&(!n&&!t.length||t.length-1 in t&&ta(t[0]))&&!t.nodeType&&t!==Qs},gP=function(t,n,i){return i===void 0&&(i=[]),t.forEach(function(s){var a;return yn(s)&&!n||tA(s,1)?(a=i).push.apply(a,os(s)):i.push(s)})||i},os=function(t,n,i){return He&&!n&&He.selector?He.selector(t):yn(t)&&!i&&(my||!wc())?yy.call((n||Cy).querySelectorAll(t),0):Wn(t)?gP(t,i):tA(t)?yy.call(t,0):t?[t]:[]},xy=function(t){return t=os(t)[0]||Rh("Invalid scope")||{},function(n){var i=t.current||t.nativeElement||t;return os(n,i.querySelectorAll?i:i===t?Rh("Invalid scope")||Cy.createElement("div"):t)}},eA=function(t){return t.sort(function(){return .5-Math.random()})},nA=function(t){if(Qe(t))return t;var n=ta(t)?t:{each:t},i=Io(n.ease),s=n.from||0,a=parseFloat(n.base)||0,r={},o=s>0&&s<1,l=isNaN(s)||o,c=n.axis,u=s,d=s;return yn(s)?u=d={center:.5,edges:.5,end:1}[s]||0:!o&&l&&(u=s[0],d=s[1]),function(h,f,p){var _=(p||n).length,g=r[_],m,v,S,y,E,A,M,x,T;if(!g){if(T=n.grid==="auto"?0:(n.grid||[1,rs])[1],!T){for(M=-rs;M<(M=p[T++].getBoundingClientRect().left)&&T<_;);T<_&&T--}for(g=r[_]=[],m=l?Math.min(T,_)*u-.5:s%T,v=T===rs?0:l?_*d/T-.5:s/T|0,M=0,x=rs,A=0;A<_;A++)S=A%T-m,y=v-(A/T|0),g[A]=E=c?Math.abs(c==="y"?y:S):HE(S*S+y*y),E>M&&(M=E),E<x&&(x=E);s==="random"&&eA(g),g.max=M-x,g.min=x,g.v=_=(parseFloat(n.amount)||parseFloat(n.each)*(T>_?_-1:c?c==="y"?_/T:T:Math.max(T,_/T))||0)*(s==="edges"?-1:1),g.b=_<0?a-_:a,g.u=In(n.amount||n.each)||0,i=i&&_<0?hA(i):i}return _=(g[h]-g.min)/g.max||0,qe(g.b+(i?i(_):_)*g.v)+g.u}},Sy=function(t){var n=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var s=qe(Math.round(parseFloat(i)/t)*t*n);return(s-s%1)/n+(Va(i)?0:In(i))}},iA=function(t,n){var i=Wn(t),s,a;return!i&&ta(t)&&(s=i=t.radius||rs,t.values?(t=os(t.values),(a=!Va(t[0]))&&(s*=s)):t=Sy(t.increment)),Xr(n,i?Qe(t)?function(r){return a=t(r),Math.abs(a-r)<=s?a:r}:function(r){for(var o=parseFloat(a?r.x:r),l=parseFloat(a?r.y:0),c=rs,u=0,d=t.length,h,f;d--;)a?(h=t[d].x-o,f=t[d].y-l,h=h*h+f*f):h=Math.abs(t[d]-o),h<c&&(c=h,u=d);return u=!s||c<=s?t[u]:r,a||u===r||Va(r)?u:u+In(r)}:Sy(t))},sA=function(t,n,i,s){return Xr(Wn(t)?!n:i===!0?!!(i=0):!s,function(){return Wn(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(s=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(n-t+i*.99))/i)*i*s)/s})},_P=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return function(s){return n.reduce(function(a,r){return r(a)},s)}},vP=function(t,n){return function(i){return t(parseFloat(i))+(n||In(i))}},yP=function(t,n,i){return rA(t,n,0,1,i)},aA=function(t,n,i){return Xr(i,function(s){return t[~~n(s)]})},xP=function e(t,n,i){var s=n-t;return Wn(t)?aA(t,e(0,t.length),n):Xr(i,function(a){return(s+(a-t)%s)%s+t})},SP=function e(t,n,i){var s=n-t,a=s*2;return Wn(t)?aA(t,e(0,t.length-1),n):Xr(i,function(r){return r=(a+(r-t)%a)%a||0,t+(r>s?a-r:r)})},Cc=function(t){return t.replace(tP,function(n){var i=n.indexOf("[")+1,s=n.substring(i||7,i?n.indexOf("]"):n.length-1).split(eP);return sA(i?s:+s[0],i?0:+s[1],+s[2]||1e-5)})},rA=function(t,n,i,s,a){var r=n-t,o=s-i;return Xr(a,function(l){return i+((l-t)/r*o||0)})},bP=function e(t,n,i,s){var a=isNaN(t+n)?0:function(f){return(1-f)*t+f*n};if(!a){var r=yn(t),o={},l,c,u,d,h;if(i===!0&&(s=1)&&(i=null),r)t={p:t},n={p:n};else if(Wn(t)&&!Wn(n)){for(u=[],d=t.length,h=d-2,c=1;c<d;c++)u.push(e(t[c-1],t[c]));d--,a=function(p){p*=d;var _=Math.min(h,~~p);return u[_](p-_)},i=n}else s||(t=Tc(Wn(t)?[]:{},t));if(!u){for(l in n)Iy.call(o,t,l,"get",n[l]);a=function(p){return Hy(p,o)||(r?t.p:t)}}}return Xr(i,a)},BE=function(t,n,i){var s=t.labels,a=rs,r,o,l;for(r in s)o=s[r]-n,o<0==!!i&&o&&a>(o=Math.abs(o))&&(l=r,a=o);return l},Fi=function(t,n,i){var s=t.vars,a=s[n],r=He,o=t._ctx,l,c,u;if(a)return l=s[n+"Params"],c=s.callbackScope||t,i&&Hr.length&&Cm(),o&&(He=o),u=l?a.apply(c,l):a.call(c),He=r,u},Th=function(t){return kr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!On),t.progress()<1&&Fi(t,"onInterrupt"),t},bc,oA=[],lA=function(t){if(t)if(t=!t.name&&t.default||t,Ey()||t.headless){var n=t.name,i=Qe(t),s=n&&!i&&t.init?function(){this._props=[]}:t,a={init:Dh,render:Hy,add:Iy,kill:FP,modifier:BP,rawVars:0},r={targetTest:0,get:0,getSetter:Bm,aliases:{},register:0};if(wc(),t!==s){if(fi[n])return;Vi(s,Vi(Rm(t,a),r)),Tc(s.prototype,Tc(a,Rm(t,r))),fi[s.prop=n]=s,t.targetTest&&(Em.push(s),Ry[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}WE(n,s),t.register&&t.register(qn,s,ei)}else oA.push(t)},we=255,Eh={aqua:[0,we,we],lime:[0,we,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,we],navy:[0,0,128],white:[we,we,we],olive:[128,128,0],yellow:[we,we,0],orange:[we,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[we,0,0],pink:[we,192,203],cyan:[0,we,we],transparent:[we,we,we,0]},cy=function(t,n,i){return t+=t<0?1:t>1?-1:0,(t*6<1?n+(i-n)*t*6:t<.5?i:t*3<2?n+(i-n)*(2/3-t)*6:n)*we+.5|0},cA=function(t,n,i){var s=t?Va(t)?[t>>16,t>>8&we,t&we]:0:Eh.black,a,r,o,l,c,u,d,h,f,p;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Eh[t])s=Eh[t];else if(t.charAt(0)==="#"){if(t.length<6&&(a=t.charAt(1),r=t.charAt(2),o=t.charAt(3),t="#"+a+a+r+r+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&we,s&we,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&we,t&we]}else if(t.substr(0,3)==="hsl"){if(s=p=t.match(NE),!n)l=+s[0]%360/360,c=+s[1]/100,u=+s[2]/100,r=u<=.5?u*(c+1):u+c-u*c,a=u*2-r,s.length>3&&(s[3]*=1),s[0]=cy(l+1/3,a,r),s[1]=cy(l,a,r),s[2]=cy(l-1/3,a,r);else if(~t.indexOf("="))return s=t.match(Ay),i&&s.length<4&&(s[3]=1),s}else s=t.match(NE)||Eh.transparent;s=s.map(Number)}return n&&!p&&(a=s[0]/we,r=s[1]/we,o=s[2]/we,d=Math.max(a,r,o),h=Math.min(a,r,o),u=(d+h)/2,d===h?l=c=0:(f=d-h,c=u>.5?f/(2-d-h):f/(d+h),l=d===a?(r-o)/f+(r<o?6:0):d===r?(o-a)/f+2:(a-r)/f+4,l*=60),s[0]=~~(l+.5),s[1]=~~(c*100+.5),s[2]=~~(u*100+.5)),i&&s.length<4&&(s[3]=1),s},uA=function(t){var n=[],i=[],s=-1;return t.split(za).forEach(function(a){var r=a.match(Fo)||[];n.push.apply(n,r),i.push(s+=r.length+1)}),n.c=i,n},FE=function(t,n,i){var s="",a=(t+s).match(za),r=n?"hsla(":"rgba(",o=0,l,c,u,d;if(!a)return t;if(a=a.map(function(h){return(h=cA(h,n,1))&&r+(n?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(u=uA(t),l=i.c,l.join(s)!==u.c.join(s)))for(c=t.replace(za,"1").split(Fo),d=c.length-1;o<d;o++)s+=c[o]+(~l.indexOf(o)?a.shift()||r+"0,0,0,0)":(u.length?u:a.length?a:i).shift());if(!c)for(c=t.split(za),d=c.length-1;o<d;o++)s+=c[o]+a[o];return s+c[d]},za=(function(){var e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Eh)e+="|"+t+"\\b";return new RegExp(e+")","gi")})(),MP=/hsl[a]?\(/,Py=function(t){var n=t.join(" "),i;if(za.lastIndex=0,za.test(n))return i=MP.test(n),t[1]=FE(t[1],i),t[0]=FE(t[0],i,uA(t[1])),!0},Uh,di=(function(){var e=Date.now,t=500,n=33,i=e(),s=i,a=1e3/240,r=a,o=[],l,c,u,d,h,f,p=function _(g){var m=e()-s,v=g===!0,S,y,E,A;if((m>t||m<0)&&(i+=m-n),s+=m,E=s-i,S=E-r,(S>0||v)&&(A=++d.frame,h=E-d.time*1e3,d.time=E=E/1e3,r+=S+(S>=a?4:a-S),y=1),v||(l=c(_)),y)for(f=0;f<o.length;f++)o[f](E,h,A,g)};return d={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(g){return h/(1e3/(g||60))},wake:function(){kE&&(!my&&Ey()&&(Qs=my=window,Cy=Qs.document||{},zi.gsap=qn,(Qs.gsapVersions||(Qs.gsapVersions=[])).push(qn.version),XE(wm||Qs.GreenSockGlobals||!Qs.gsap&&Qs||{}),oA.forEach(lA)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(g){return setTimeout(g,r-d.time*1e3+1|0)},Uh=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Uh=0,c=Dh},lagSmoothing:function(g,m){t=g||1/0,n=Math.min(m||33,t)},fps:function(g){a=1e3/(g||240),r=d.time*1e3+a},add:function(g,m,v){var S=m?function(y,E,A,M){g(y,E,A,M),d.remove(S)}:g;return d.remove(g),o[v?"unshift":"push"](S),wc(),S},remove:function(g,m){~(m=o.indexOf(g))&&o.splice(m,1)&&f>=m&&f--},_listeners:o},d})(),wc=function(){return!Uh&&di.wake()},re={},TP=/^[\d.\-M][\d.\-,\s]/,EP=/["']/g,AP=function(t){for(var n={},i=t.substr(1,t.length-3).split(":"),s=i[0],a=1,r=i.length,o,l,c;a<r;a++)l=i[a],o=a!==r-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),n[s]=isNaN(c)?c.replace(EP,"").trim():+c,s=l.substr(o+1).trim();return n},wP=function(t){var n=t.indexOf("(")+1,i=t.indexOf(")"),s=t.indexOf("(",n);return t.substring(n,~s&&s<i?t.indexOf(")",i+1):i)},CP=function(t){var n=(t+"").split("("),i=re[n[0]];return i&&n.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[AP(n[1])]:wP(t).split(",").map(ZE)):re._CE&&TP.test(t)?re._CE("",t):i},hA=function(t){return function(n){return 1-t(1-n)}},fA=function e(t,n){for(var i=t._first,s;i;)i instanceof Pn?e(i,n):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==n&&(i.timeline?e(i.timeline,n):(s=i._ease,i._ease=i._yEase,i._yEase=s,i._yoyo=n)),i=i._next},Io=function(t,n){return t&&(Qe(t)?t:re[t]||CP(t))||n},Vo=function(t,n,i,s){i===void 0&&(i=function(l){return 1-n(1-l)}),s===void 0&&(s=function(l){return l<.5?n(l*2)/2:1-n((1-l)*2)/2});var a={easeIn:n,easeOut:i,easeInOut:s},r;return ti(t,function(o){re[o]=zi[o]=a,re[r=o.toLowerCase()]=i;for(var l in a)re[r+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=re[o+"."+l]=a[l]}),a},dA=function(t){return function(n){return n<.5?(1-t(1-n*2))/2:.5+t((n-.5)*2)/2}},uy=function e(t,n,i){var s=n>=1?n:1,a=(i||(t?.3:.45))/(n<1?n:1),r=a/py*(Math.asin(1/s)||0),o=function(u){return u===1?1:s*Math.pow(2,-10*u)*$L((u-r)*a)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:dA(o);return a=py/a,l.config=function(c,u){return e(t,c,u)},l},hy=function e(t,n){n===void 0&&(n=1.70158);var i=function(r){return r?--r*r*((n+1)*r+n)+1:0},s=t==="out"?i:t==="in"?function(a){return 1-i(1-a)}:dA(i);return s.config=function(a){return e(t,a)},s};ti("Linear,Quad,Cubic,Quart,Quint,Strong",function(e,t){var n=t<5?t+1:t;Vo(e+",Power"+(n-1),t?function(i){return Math.pow(i,n)}:function(i){return i},function(i){return 1-Math.pow(1-i,n)},function(i){return i<.5?Math.pow(i*2,n)/2:1-Math.pow((1-i)*2,n)/2})});re.Linear.easeNone=re.none=re.Linear.easeIn;Vo("Elastic",uy("in"),uy("out"),uy());(function(e,t){var n=1/t,i=2*n,s=2.5*n,a=function(o){return o<n?e*o*o:o<i?e*Math.pow(o-1.5/t,2)+.75:o<s?e*(o-=2.25/t)*o+.9375:e*Math.pow(o-2.625/t,2)+.984375};Vo("Bounce",function(r){return 1-a(1-r)},a)})(7.5625,2.75);Vo("Expo",function(e){return Math.pow(2,10*(e-1))*e+e*e*e*e*e*e*(1-e)});Vo("Circ",function(e){return-(HE(1-e*e)-1)});Vo("Sine",function(e){return e===1?1:-QL(e*KL)+1});Vo("Back",hy("in"),hy("out"),hy());re.SteppedEase=re.steps=zi.SteppedEase={config:function(t,n){t===void 0&&(t=1);var i=1/t,s=t+(n?0:1),a=n?1:0,r=1-Ce;return function(o){return((s*Lh(0,r,o)|0)+a)*i}}};Mc.ease=re["quad.out"];ti("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(e){return Dy+=e+","+e+"Params,"});var Oy=function(t,n){this.id=jL++,t._gsap=this,this.target=t,this.harness=n,this.get=n?n.get:Ny,this.set=n?n.getSetter:Bm},Nh=(function(){function e(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,Ac(this,+n.duration,1,1),this.data=n.data,He&&(this._ctx=He,He.data.push(this)),Uh||di.wake()}var t=e.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,Ac(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,s){if(wc(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(Im(this,i),!a._dp||a.parent||jE(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&$s(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Ce||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),YE(this,i,s)),this},t.time=function(i,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+OE(this))%(this._dur+this._rDelay)||(i?this._dur:0),s):this._time},t.totalProgress=function(i,s){return arguments.length?this.totalTime(this.totalDuration()*i,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+OE(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,s){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*a,s):this._repeat?Ec(this._tTime,a)+1:1},t.timeScale=function(i,s){if(!arguments.length)return this._rts===-Ce?0:this._rts;if(this._rts===i)return this;var a=this.parent&&this._ts?Dm(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Ce?0:this._rts,this.totalTime(Lh(-Math.abs(this._delay),this.totalDuration(),a),s!==!1),Om(this),cP(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(wc(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ce&&(this._tTime-=Ce)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=qe(i);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&$s(s,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(pi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var s=this.parent||this._dp;return s?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Dm(s.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=aP);var s=On;return On=i,Ly(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),On=s,this},t.globalTime=function(i){for(var s=this,a=arguments.length?i:s.rawTime();s;)a=s._start+a/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(i):a},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,IE(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var s=this._time;return this._rDelay=i,IE(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,s){return this.totalTime(as(this,i),pi(s))},t.restart=function(i,s){return this.play().totalTime(i?-this._delay:0,pi(s)),this._dur||(this._zTime=-Ce),this},t.play=function(i,s){return i!=null&&this.seek(i,s),this.reversed(!1).paused(!1)},t.reverse=function(i,s){return i!=null&&this.seek(i||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(i,s){return i!=null&&this.seek(i,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Ce:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ce,this},t.isActive=function(){var i=this.parent||this._dp,s=this._start,a;return!!(!i||this._ts&&this._initted&&i.isActive()&&(a=i.rawTime(!0))>=s&&a<this.endTime(!0)-Ce)},t.eventCallback=function(i,s,a){var r=this.vars;return arguments.length>1?(s?(r[i]=s,a&&(r[i+"Params"]=a),i==="onUpdate"&&(this._onUpdate=s)):delete r[i],this):r[i]},t.then=function(i){var s=this,a=s._prom;return new Promise(function(r){var o=Qe(i)?i:JE,l=function(){var u=s.then;s.then=null,a&&a(),Qe(o)&&(o=o(s))&&(o.then||o===s)&&(s.then=u),r(o),s.then=u};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?l():s._prom=l})},t.kill=function(){Th(this)},e})();Vi(Nh.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ce,_prom:0,_ps:!1,_rts:1});var Pn=(function(e){VE(t,e);function t(i,s){var a;return i===void 0&&(i={}),a=e.call(this,i)||this,a.labels={},a.smoothChildTiming=!!i.smoothChildTiming,a.autoRemoveChildren=!!i.autoRemoveChildren,a._sort=pi(i.sortChildren),Ye&&$s(i.parent||Ye,Fa(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),i.scrollTrigger&&QE(Fa(a),i.scrollTrigger),a}var n=t.prototype;return n.to=function(s,a,r){return wh(0,arguments,this),this},n.from=function(s,a,r){return wh(1,arguments,this),this},n.fromTo=function(s,a,r,o){return wh(2,arguments,this),this},n.set=function(s,a,r){return a.duration=0,a.parent=this,Ah(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new an(s,a,as(this,r),1),this},n.call=function(s,a,r){return $s(this,an.delayedCall(0,s,a),r)},n.staggerTo=function(s,a,r,o,l,c,u){return r.duration=a,r.stagger=r.stagger||o,r.onComplete=c,r.onCompleteParams=u,r.parent=this,new an(s,r,as(this,l)),this},n.staggerFrom=function(s,a,r,o,l,c,u){return r.runBackwards=1,Ah(r).immediateRender=pi(r.immediateRender),this.staggerTo(s,a,r,o,l,c,u)},n.staggerFromTo=function(s,a,r,o,l,c,u,d){return o.startAt=r,Ah(o).immediateRender=pi(o.immediateRender),this.staggerTo(s,a,o,l,c,u,d)},n.render=function(s,a,r){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=s<=0?0:qe(s),d=this._zTime<0!=s<0&&(this._initted||!c),h,f,p,_,g,m,v,S,y,E,A,M;if(this!==Ye&&u>l&&s>=0&&(u=l),u!==this._tTime||r||d){if(o!==this._time&&c&&(u+=this._time-o,s+=this._time-o),h=u,y=this._start,S=this._ts,m=!S,d&&(c||(o=this._zTime),(s||!a)&&(this._zTime=s)),this._repeat){if(A=this._yoyo,g=c+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(g*100+s,a,r);if(h=qe(u%g),u===l?(_=this._repeat,h=c):(E=qe(u/g),_=~~E,_&&_===E&&(h=c,_--),h>c&&(h=c)),E=Ec(this._tTime,g),!o&&this._tTime&&E!==_&&this._tTime-E*g-this._dur<=0&&(E=_),A&&_&1&&(h=c-h,M=1),_!==E&&!this._lock){var x=A&&E&1,T=x===(A&&_&1);if(_<E&&(x=!x),o=x?0:u%c?c:u,this._lock=1,this.render(o||(M?0:qe(_*g)),a,!c)._lock=0,this._tTime=u,!a&&this.parent&&Fi(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1,E=_),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,o=x?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;fA(this,M)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=dP(this,qe(o),qe(h)),v&&(u-=h-(h=v._start))),this._tTime=u,this._time=h,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,o=0),!o&&u&&c&&!a&&!E&&(Fi(this,"onStart"),this._tTime!==u))return this;if(h>=o&&s>=0)for(f=this._first;f;){if(p=f._next,(f._act||h>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(s,a,r);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,a,r),h!==this._time||!this._ts&&!m){v=0,p&&(u+=this._zTime=-Ce);break}}f=p}else{f=this._last;for(var R=s<0?s:h;f;){if(p=f._prev,(f._act||R<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(s,a,r);if(f.render(f._ts>0?(R-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(R-f._start)*f._ts,a,r||On&&Ly(f)),h!==this._time||!this._ts&&!m){v=0,p&&(u+=this._zTime=R?-Ce:Ce);break}}f=p}}if(v&&!a&&(this.pause(),v.render(h>=o?0:-Ce)._zTime=h>=o?1:-1,this._ts))return this._start=y,Om(this),this.render(s,a,r);this._onUpdate&&!a&&Fi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(y===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((s||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&kr(this,1),!a&&!(s<0&&!o)&&(u||o||!l)&&(Fi(this,u===l&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(s,a){var r=this;if(Va(a)||(a=as(this,a,s)),!(s instanceof Nh)){if(Wn(s))return s.forEach(function(o){return r.add(o,a)}),this;if(yn(s))return this.addLabel(s,a);if(Qe(s))s=an.delayedCall(0,s);else return this}return this!==s?$s(this,s,a):this},n.getChildren=function(s,a,r,o){s===void 0&&(s=!0),a===void 0&&(a=!0),r===void 0&&(r=!0),o===void 0&&(o=-rs);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof an?a&&l.push(c):(r&&l.push(c),s&&l.push.apply(l,c.getChildren(!0,a,r)))),c=c._next;return l},n.getById=function(s){for(var a=this.getChildren(1,1,1),r=a.length;r--;)if(a[r].vars.id===s)return a[r]},n.remove=function(s){return yn(s)?this.removeLabel(s):Qe(s)?this.killTweensOf(s):(s.parent===this&&Pm(this,s),s===this._recent&&(this._recent=this._last),Oo(this))},n.totalTime=function(s,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=qe(di.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),e.prototype.totalTime.call(this,s,a),this._forcing=0,this):this._tTime},n.addLabel=function(s,a){return this.labels[s]=as(this,a),this},n.removeLabel=function(s){return delete this.labels[s],this},n.addPause=function(s,a,r){var o=an.delayedCall(0,a||Dh,r);return o.data="isPause",this._hasPause=1,$s(this,o,as(this,s))},n.removePause=function(s){var a=this._first;for(s=as(this,s);a;)a._start===s&&a.data==="isPause"&&kr(a),a=a._next},n.killTweensOf=function(s,a,r){for(var o=this.getTweensOf(s,r),l=o.length;l--;)Vr!==o[l]&&o[l].kill(s,a);return this},n.getTweensOf=function(s,a){for(var r=[],o=os(s),l=this._first,c=Va(a),u;l;)l instanceof an?rP(l._targets,o)&&(c?(!Vr||l._initted&&l._ts)&&l.globalTime(0)<=a&&l.globalTime(l.totalDuration())>a:!a||l.isActive())&&r.push(l):(u=l.getTweensOf(o,a)).length&&r.push.apply(r,u),l=l._next;return r},n.tweenTo=function(s,a){a=a||{};var r=this,o=as(r,s),l=a,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,f,p=an.to(r,Vi({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:a.duration||Math.abs((o-(c&&"time"in c?c.time:r._time))/r.timeScale())||Ce,onStart:function(){if(r.pause(),!f){var g=a.duration||Math.abs((o-(c&&"time"in c?c.time:r._time))/r.timeScale());p._dur!==g&&Ac(p,g,0,1).render(p._time,!0,!0),f=1}u&&u.apply(p,d||[])}},a));return h?p.render(0):p},n.tweenFromTo=function(s,a,r){return this.tweenTo(a,Vi({startAt:{time:as(this,s)}},r))},n.recent=function(){return this._recent},n.nextLabel=function(s){return s===void 0&&(s=this._time),BE(this,as(this,s))},n.previousLabel=function(s){return s===void 0&&(s=this._time),BE(this,as(this,s),1)},n.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Ce)},n.shiftChildren=function(s,a,r){r===void 0&&(r=0);var o=this._first,l=this.labels,c;for(s=qe(s);o;)o._start>=r&&(o._start+=s,o._end+=s),o=o._next;if(a)for(c in l)l[c]>=r&&(l[c]+=s);return Oo(this)},n.invalidate=function(s){var a=this._first;for(this._lock=0;a;)a.invalidate(s),a=a._next;return e.prototype.invalidate.call(this,s)},n.clear=function(s){s===void 0&&(s=!0);for(var a=this._first,r;a;)r=a._next,this.remove(a),a=r;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Oo(this)},n.totalDuration=function(s){var a=0,r=this,o=r._last,l=rs,c,u,d;if(arguments.length)return r.timeScale((r._repeat<0?r.duration():r.totalDuration())/(r.reversed()?-s:s));if(r._dirty){for(d=r.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&r._sort&&o._ts&&!r._lock?(r._lock=1,$s(r,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(a-=u,(!d&&!r._dp||d&&d.smoothChildTiming)&&(r._start+=qe(u/r._ts),r._time-=u,r._tTime-=u),r.shiftChildren(-u,!1,-1/0),l=0),o._end>a&&o._ts&&(a=o._end),o=c;Ac(r,r===Ye&&r._time>a?r._time:a,1,1),r._dirty=0}return r._tDur},t.updateRoot=function(s){if(Ye._ts&&(YE(Ye,Dm(s,Ye)),qE=di.frame),di.frame>=LE){LE+=mi.autoSleep||120;var a=Ye._first;if((!a||!a._ts)&&mi.autoSleep&&di._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||di.sleep()}}},t})(Nh);Vi(Pn.prototype,{_lock:0,_hasPause:0,_forcing:0});var RP=function(t,n,i,s,a,r,o){var l=new ei(this._pt,t,n,0,1,Vy,null,a),c=0,u=0,d,h,f,p,_,g,m,v;for(l.b=i,l.e=s,i+="",s+="",(m=~s.indexOf("random("))&&(s=Cc(s)),r&&(v=[i,s],r(v,t,n),i=v[0],s=v[1]),h=i.match(oy)||[];d=oy.exec(s);)p=d[0],_=s.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),p!==h[u++]&&(g=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:g,c:p.charAt(1)==="="?zo(g,p)-g:parseFloat(p)-g,m:f&&f<4?Math.round:0},c=oy.lastIndex);return l.c=c<s.length?s.substring(c,s.length):"",l.fp=o,(wy.test(s)||m)&&(l.e=0),this._pt=l,l},Iy=function(t,n,i,s,a,r,o,l,c,u){Qe(s)&&(s=s(a||0,t,r));var d=t[n],h=i!=="get"?i:Qe(d)?c?t[n.indexOf("set")||!Qe(t["get"+n.substr(3)])?n:"get"+n.substr(3)](c):t[n]():d,f=Qe(d)?c?PP:gA:zy,p;if(yn(s)&&(~s.indexOf("random(")&&(s=Cc(s)),s.charAt(1)==="="&&(p=zo(h,s)+(In(h)||0),(p||p===0)&&(s=p))),!u||h!==s||by)return!isNaN(h*s)&&s!==""?(p=new ei(this._pt,t,n,+h||0,s-(h||0),typeof d=="boolean"?IP:_A,0,f),c&&(p.fp=c),o&&p.modifier(o,this,t),this._pt=p):(!d&&!(n in t)&&Lm(n,s),RP.call(this,t,n,h,s,f,l||mi.stringFilter,c))},DP=function(t,n,i,s,a){if(Qe(t)&&(t=Ch(t,a,n,i,s)),!ta(t)||t.style&&t.nodeType||Wn(t)||GE(t))return yn(t)?Ch(t,a,n,i,s):t;var r={},o;for(o in t)r[o]=Ch(t[o],a,n,i,s);return r},By=function(t,n,i,s,a,r){var o,l,c,u;if(fi[t]&&(o=new fi[t]).init(a,o.rawVars?n[t]:DP(n[t],s,a,r,i),i,s,r)!==!1&&(i._pt=l=new ei(i._pt,a,t,0,1,o.render,o,0,o.priority),i!==bc))for(c=i._ptLookup[i._targets.indexOf(a)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Vr,by,Fy=function e(t,n,i){var s=t.vars,a=s.ease,r=s.startAt,o=s.immediateRender,l=s.lazy,c=s.onUpdate,u=s.runBackwards,d=s.yoyoEase,h=s.keyframes,f=s.autoRevert,p=t._dur,_=t._startAt,g=t._targets,m=t.parent,v=m&&m.data==="nested"?m.vars.targets:g,S=t._overwrite==="auto"&&!Ty,y=t.timeline,E,A,M,x,T,R,D,U,F,q,O,k,z;if(y&&(!h||!a)&&(a="none"),t._ease=Io(a,Mc.ease),t._yEase=d?hA(Io(d===!0?a:d,Mc.ease)):0,d&&t._yoyo&&!t._repeat&&(d=t._yEase,t._yEase=t._ease,t._ease=d),t._from=!y&&!!s.runBackwards,!y||h&&!s.stagger){if(U=g[0]?Gr(g[0]).harness:0,k=U&&s[U.prop],E=Rm(s,Ry),_&&(_._zTime<0&&_.progress(1),n<0&&u&&o&&!f?_.render(-1,!0):_.revert(u&&p?Tm:sP),_._lazy=0),r){if(kr(t._startAt=an.set(g,Vi({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&pi(l),startAt:null,delay:0,onUpdate:c&&function(){return Fi(t,"onUpdate")},stagger:0},r))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(On||!o&&!f)&&t._startAt.revert(Tm),o&&p&&n<=0&&i<=0){n&&(t._zTime=n);return}}else if(u&&p&&!_){if(n&&(o=!1),M=Vi({overwrite:!1,data:"isFromStart",lazy:o&&!_&&pi(l),immediateRender:o,stagger:0,parent:m},E),k&&(M[U.prop]=k),kr(t._startAt=an.set(g,M)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(On?t._startAt.revert(Tm):t._startAt.render(-1,!0)),t._zTime=n,!o)e(t._startAt,Ce,Ce);else if(!n)return}for(t._pt=t._ptCache=0,l=p&&pi(l)||l&&!p,A=0;A<g.length;A++){if(T=g[A],D=T._gsap||Uy(g)[A]._gsap,t._ptLookup[A]=q={},gy[D.id]&&Hr.length&&Cm(),O=v===g?A:v.indexOf(T),U&&(F=new U).init(T,k||E,t,O,v)!==!1&&(t._pt=x=new ei(t._pt,T,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(K){q[K]=x}),F.priority&&(R=1)),!U||k)for(M in E)fi[M]&&(F=By(M,E,t,O,T,v))?F.priority&&(R=1):q[M]=x=Iy.call(t,T,M,"get",E[M],O,v,0,s.stringFilter);t._op&&t._op[A]&&t.kill(T,t._op[A]),S&&t._pt&&(Vr=t,Ye.killTweensOf(T,q,t.globalTime(n)),z=!t.parent,Vr=0),t._pt&&l&&(gy[D.id]=1)}R&&Gy(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!z,h&&n<=0&&y.render(rs,!0,!0)},UP=function(t,n,i,s,a,r,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[n],u,d,h,f;if(!c)for(c=t._ptCache[n]=[],h=t._ptLookup,f=t._targets.length;f--;){if(u=h[f][n],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==n&&u.fp!==n;)u=u._next;if(!u)return by=1,t.vars[n]="+=0",Fy(t,o),by=0,l?Rh(n+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)d=c[f],u=d._pt||d,u.s=(s||s===0)&&!a?s:u.s+(s||0)+r*u.c,u.c=i-u.s,d.e&&(d.e=$e(i)+In(d.e)),d.b&&(d.b=u.s+In(d.b))},NP=function(t,n){var i=t[0]?Gr(t[0]).harness:0,s=i&&i.aliases,a,r,o,l;if(!s)return n;a=Tc({},n);for(r in s)if(r in a)for(l=s[r].split(","),o=l.length;o--;)a[l[o]]=a[r];return a},LP=function(t,n,i,s){var a=n.ease||s||"power1.inOut",r,o;if(Wn(n))o=i[t]||(i[t]=[]),n.forEach(function(l,c){return o.push({t:c/(n.length-1)*100,v:l,e:a})});else for(r in n)o=i[r]||(i[r]=[]),r==="ease"||o.push({t:parseFloat(t),v:n[r],e:a})},Ch=function(t,n,i,s,a){return Qe(t)?t.call(n,i,s,a):yn(t)&&~t.indexOf("random(")?Cc(t):t},pA=Dy+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",mA={};ti(pA+",id,stagger,delay,duration,paused,scrollTrigger",function(e){return mA[e]=1});var an=(function(e){VE(t,e);function t(i,s,a,r){var o;typeof s=="number"&&(a.duration=s,s=a,a=null),o=e.call(this,r?s:Ah(s))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,f=l.overwrite,p=l.keyframes,_=l.defaults,g=l.scrollTrigger,m=l.yoyoEase,v=s.parent||Ye,S=(Wn(i)||GE(i)?Va(i[0]):"length"in s)?[i]:os(i),y,E,A,M,x,T,R,D;if(o._targets=S.length?Uy(S):Rh("GSAP target "+i+" not found. https://gsap.com",!mi.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,p||h||Mm(c)||Mm(u)){if(s=o.vars,y=o.timeline=new Pn({data:"nested",defaults:_||{},targets:v&&v.data==="nested"?v.vars.targets:S}),y.kill(),y.parent=y._dp=Fa(o),y._start=0,h||Mm(c)||Mm(u)){if(M=S.length,R=h&&nA(h),ta(h))for(x in h)~pA.indexOf(x)&&(D||(D={}),D[x]=h[x]);for(E=0;E<M;E++)A=Rm(s,mA),A.stagger=0,m&&(A.yoyoEase=m),D&&Tc(A,D),T=S[E],A.duration=+Ch(c,Fa(o),E,T,S),A.delay=(+Ch(u,Fa(o),E,T,S)||0)-o._delay,!h&&M===1&&A.delay&&(o._delay=u=A.delay,o._start+=u,A.delay=0),y.to(T,A,R?R(E,T,S):0),y._ease=re.none;y.duration()?c=u=0:o.timeline=0}else if(p){Ah(Vi(y.vars.defaults,{ease:"none"})),y._ease=Io(p.ease||s.ease||"none");var U=0,F,q,O;if(Wn(p))p.forEach(function(k){return y.to(S,k,">")}),y.duration();else{A={};for(x in p)x==="ease"||x==="easeEach"||LP(x,p[x],A,p.easeEach);for(x in A)for(F=A[x].sort(function(k,z){return k.t-z.t}),U=0,E=0;E<F.length;E++)q=F[E],O={ease:q.e,duration:(q.t-(E?F[E-1].t:0))/100*c},O[x]=q.v,y.to(S,O,U),U+=O.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return f===!0&&!Ty&&(Vr=Fa(o),Ye.killTweensOf(S),Vr=0),$s(v,Fa(o),a),s.reversed&&o.reverse(),s.paused&&o.paused(!0),(d||!c&&!p&&o._start===qe(v._time)&&pi(d)&&uP(Fa(o))&&v.data!=="nested")&&(o._tTime=-Ce,o.render(Math.max(0,-u)||0)),g&&QE(Fa(o),g),o}var n=t.prototype;return n.render=function(s,a,r){var o=this._time,l=this._tDur,c=this._dur,u=s<0,d=s>l-Ce&&!u?l:s<Ce?0:s,h,f,p,_,g,m,v,S,y;if(!c)fP(this,s,a,r);else if(d!==this._tTime||!s||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,S=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+s,a,r);if(h=qe(d%_),d===l?(p=this._repeat,h=c):(g=qe(d/_),p=~~g,p&&p===g?(h=c,p--):h>c&&(h=c)),m=this._yoyo&&p&1,m&&(y=this._yEase,h=c-h),g=Ec(this._tTime,_),h===o&&!r&&this._initted&&p===g)return this._tTime=d,this;p!==g&&(S&&this._yEase&&fA(S,m),this.vars.repeatRefresh&&!m&&!this._lock&&h!==_&&this._initted&&(this._lock=r=1,this.render(qe(_*p),!0).invalidate()._lock=0))}if(!this._initted){if($E(this,u?s:h,r,a,d))return this._tTime=0,this;if(o!==this._time&&!(r&&this.vars.repeatRefresh&&p!==g))return this;if(c!==this._dur)return this.render(s,a,r)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(y||this._ease)(h/c),this._from&&(this.ratio=v=1-v),!o&&d&&!a&&!g&&(Fi(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;S&&S.render(s<0?s:S._dur*S._ease(h/this._dur),a,r)||this._startAt&&(this._zTime=s),this._onUpdate&&!a&&(u&&_y(this,s,a,r),Fi(this,"onUpdate")),this._repeat&&p!==g&&this.vars.onRepeat&&!a&&this.parent&&Fi(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&_y(this,s,!0,!0),(s||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&kr(this,1),!a&&!(u&&!o)&&(d||o||m)&&(Fi(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),e.prototype.invalidate.call(this,s)},n.resetTo=function(s,a,r,o,l){Uh||di.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Fy(this,c),u=this._ease(c/this._dur),UP(this,s,a,r,o,u,c,l)?this.resetTo(s,a,r,o,1):(Im(this,0),this.parent||KE(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(s,a){if(a===void 0&&(a="all"),!s&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?Th(this):this.scrollTrigger&&this.scrollTrigger.kill(!!On),this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(s,a,Vr&&Vr.vars.overwrite!==!0)._first||Th(this),this.parent&&r!==this.timeline.totalDuration()&&Ac(this,this._dur*this.timeline._tDur/r,0,1),this}var o=this._targets,l=s?os(s):o,c=this._ptLookup,u=this._pt,d,h,f,p,_,g,m;if((!a||a==="all")&&lP(o,l))return a==="all"&&(this._pt=0),Th(this);for(d=this._op=this._op||[],a!=="all"&&(yn(a)&&(_={},ti(a,function(v){return _[v]=1}),a=_),a=NP(o,a)),m=o.length;m--;)if(~l.indexOf(o[m])){h=c[m],a==="all"?(d[m]=a,p=h,f={}):(f=d[m]=d[m]||{},p=a);for(_ in p)g=h&&h[_],g&&((!("kill"in g.d)||g.d.kill(_)===!0)&&Pm(this,g,"_pt"),delete h[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&Th(this),this},t.to=function(s,a){return new t(s,a,arguments[2])},t.from=function(s,a){return wh(1,arguments)},t.delayedCall=function(s,a,r,o){return new t(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:a,onReverseComplete:a,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:o})},t.fromTo=function(s,a,r){return wh(2,arguments)},t.set=function(s,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new t(s,a)},t.killTweensOf=function(s,a,r){return Ye.killTweensOf(s,a,r)},t})(Nh);Vi(an.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ti("staggerTo,staggerFrom,staggerFromTo",function(e){an[e]=function(){var t=new Pn,n=yy.call(arguments,0);return n.splice(e==="staggerFromTo"?5:4,0,0),t[e].apply(t,n)}});var zy=function(t,n,i){return t[n]=i},gA=function(t,n,i){return t[n](i)},PP=function(t,n,i,s){return t[n](s.fp,i)},OP=function(t,n,i){return t.setAttribute(n,i)},Bm=function(t,n){return Qe(t[n])?gA:Nm(t[n])&&t.setAttribute?OP:zy},_A=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e6)/1e6,n)},IP=function(t,n){return n.set(n.t,n.p,!!(n.s+n.c*t),n)},Vy=function(t,n){var i=n._pt,s="";if(!t&&n.b)s=n.b;else if(t===1&&n.e)s=n.e;else{for(;i;)s=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+s,i=i._next;s+=n.c}n.set(n.t,n.p,s,n)},Hy=function(t,n){for(var i=n._pt;i;)i.r(t,i.d),i=i._next},BP=function(t,n,i,s){for(var a=this._pt,r;a;)r=a._next,a.p===s&&a.modifier(t,n,i),a=r},FP=function(t){for(var n=this._pt,i,s;n;)s=n._next,n.p===t&&!n.op||n.op===t?Pm(this,n,"_pt"):n.dep||(i=1),n=s;return!i},zP=function(t,n,i,s){s.mSet(t,n,s.m.call(s.tween,i,s.mt),s)},Gy=function(t){for(var n=t._pt,i,s,a,r;n;){for(i=n._next,s=a;s&&s.pr>n.pr;)s=s._next;(n._prev=s?s._prev:r)?n._prev._next=n:a=n,(n._next=s)?s._prev=n:r=n,n=i}t._pt=a},ei=(function(){function e(n,i,s,a,r,o,l,c,u){this.t=i,this.s=a,this.c=r,this.p=s,this.r=o||_A,this.d=l||this,this.set=c||zy,this.pr=u||0,this._next=n,n&&(n._prev=this)}var t=e.prototype;return t.modifier=function(i,s,a){this.mSet=this.mSet||this.set,this.set=zP,this.m=i,this.mt=a,this.tween=s},e})();ti(Dy+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(e){return Ry[e]=1});zi.TweenMax=zi.TweenLite=an;zi.TimelineLite=zi.TimelineMax=Pn;Ye=new Pn({sortChildren:!1,defaults:Mc,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});mi.stringFilter=Py;var Bo=[],Am={},VP=[],zE=0,HP=0,fy=function(t){return(Am[t]||VP).map(function(n){return n()})},My=function(){var t=Date.now(),n=[];t-zE>2&&(fy("matchMediaInit"),Bo.forEach(function(i){var s=i.queries,a=i.conditions,r,o,l,c;for(o in s)r=Qs.matchMedia(s[o]).matches,r&&(l=1),r!==a[o]&&(a[o]=r,c=1);c&&(i.revert(),l&&n.push(i))}),fy("matchMediaRevert"),n.forEach(function(i){return i.onMatch(i,function(s){return i.add(null,s)})}),zE=t,fy("matchMedia"))},vA=(function(){function e(n,i){this.selector=i&&xy(i),this.data=[],this._r=[],this.isReverted=!1,this.id=HP++,n&&this.add(n)}var t=e.prototype;return t.add=function(i,s,a){Qe(i)&&(a=s,s=i,i=Qe);var r=this,o=function(){var c=He,u=r.selector,d;return c&&c!==r&&c.data.push(r),a&&(r.selector=xy(a)),He=r,d=s.apply(r,arguments),Qe(d)&&r._r.push(d),He=c,r.selector=u,r.isReverted=!1,d};return r.last=o,i===Qe?o(r,function(l){return r.add(null,l)}):i?r[i]=o:o},t.ignore=function(i){var s=He;He=null,i(this),He=s},t.getTweens=function(){var i=[];return this.data.forEach(function(s){return s instanceof e?i.push.apply(i,s.getTweens()):s instanceof an&&!(s.parent&&s.parent.data==="nested")&&i.push(s)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,s){var a=this;if(i?(function(){for(var o=a.getTweens(),l=a.data.length,c;l--;)c=a.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=a.data.length;l--;)c=a.data[l],c instanceof Pn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof an)&&c.revert&&c.revert(i);a._r.forEach(function(u){return u(i,a)}),a.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),s)for(var r=Bo.length;r--;)Bo[r].id===this.id&&Bo.splice(r,1)},t.revert=function(i){this.kill(i||{})},e})(),GP=(function(){function e(n){this.contexts=[],this.scope=n,He&&He.data.push(this)}var t=e.prototype;return t.add=function(i,s,a){ta(i)||(i={matches:i});var r=new vA(0,a||this.scope),o=r.conditions={},l,c,u;He&&!r.selector&&(r.selector=He.selector),this.contexts.push(r),s=r.add("onMatch",s),r.queries=i;for(c in i)c==="all"?u=1:(l=Qs.matchMedia(i[c]),l&&(Bo.indexOf(r)<0&&Bo.push(r),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(My):l.addEventListener("change",My)));return u&&s(r,function(d){return r.add(null,d)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(s){return s.kill(i,!0)})},e})(),Um={registerPlugin:function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];n.forEach(function(s){return lA(s)})},timeline:function(t){return new Pn(t)},getTweensOf:function(t,n){return Ye.getTweensOf(t,n)},getProperty:function(t,n,i,s){yn(t)&&(t=os(t)[0]);var a=Gr(t||{}).get,r=i?JE:ZE;return i==="native"&&(i=""),t&&(n?r((fi[n]&&fi[n].get||a)(t,n,i,s)):function(o,l,c){return r((fi[o]&&fi[o].get||a)(t,o,l,c))})},quickSetter:function(t,n,i){if(t=os(t),t.length>1){var s=t.map(function(u){return qn.quickSetter(u,n,i)}),a=s.length;return function(u){for(var d=a;d--;)s[d](u)}}t=t[0]||{};var r=fi[n],o=Gr(t),l=o.harness&&(o.harness.aliases||{})[n]||n,c=r?function(u){var d=new r;bc._pt=0,d.init(t,i?u+i:u,bc,0,[t]),d.render(1,d),bc._pt&&Hy(1,bc)}:o.set(t,l);return r?c:function(u){return c(t,l,i?u+i:u,o,1)}},quickTo:function(t,n,i){var s,a=qn.to(t,Vi((s={},s[n]="+=0.1",s.paused=!0,s.stagger=0,s),i||{})),r=function(l,c,u){return a.resetTo(n,l,c,u)};return r.tween=a,r},isTweening:function(t){return Ye.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Io(t.ease,Mc.ease)),PE(Mc,t||{})},config:function(t){return PE(mi,t||{})},registerEffect:function(t){var n=t.name,i=t.effect,s=t.plugins,a=t.defaults,r=t.extendTimeline;(s||"").split(",").forEach(function(o){return o&&!fi[o]&&!zi[o]&&Rh(n+" effect requires "+o+" plugin.")}),ly[n]=function(o,l,c){return i(os(o),Vi(l||{},a),c)},r&&(Pn.prototype[n]=function(o,l,c){return this.add(ly[n](o,ta(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,n){re[t]=Io(n)},parseEase:function(t,n){return arguments.length?Io(t,n):re},getById:function(t){return Ye.getById(t)},exportRoot:function(t,n){t===void 0&&(t={});var i=new Pn(t),s,a;for(i.smoothChildTiming=pi(t.smoothChildTiming),Ye.remove(i),i._dp=0,i._time=i._tTime=Ye._time,s=Ye._first;s;)a=s._next,(n||!(!s._dur&&s instanceof an&&s.vars.onComplete===s._targets[0]))&&$s(i,s,s._start-s._delay),s=a;return $s(Ye,i,0),i},context:function(t,n){return t?new vA(t,n):He},matchMedia:function(t){return new GP(t)},matchMediaRefresh:function(){return Bo.forEach(function(t){var n=t.conditions,i,s;for(s in n)n[s]&&(n[s]=!1,i=1);i&&t.revert()})||My()},addEventListener:function(t,n){var i=Am[t]||(Am[t]=[]);~i.indexOf(n)||i.push(n)},removeEventListener:function(t,n){var i=Am[t],s=i&&i.indexOf(n);s>=0&&i.splice(s,1)},utils:{wrap:xP,wrapYoyo:SP,distribute:nA,random:sA,snap:iA,normalize:yP,getUnit:In,clamp:mP,splitColor:cA,toArray:os,selector:xy,mapRange:rA,pipe:_P,unitize:vP,interpolate:bP,shuffle:eA},install:XE,effects:ly,ticker:di,updateRoot:Pn.updateRoot,plugins:fi,globalTimeline:Ye,core:{PropTween:ei,globals:WE,Tween:an,Timeline:Pn,Animation:Nh,getCache:Gr,_removeLinkedListItem:Pm,reverting:function(){return On},context:function(t){return t&&He&&(He.data.push(t),t._ctx=He),He},suppressOverwrites:function(t){return Ty=t}}};ti("to,from,fromTo,delayedCall,set,killTweensOf",function(e){return Um[e]=an[e]});di.add(Pn.updateRoot);bc=Um.to({},{duration:0});var kP=function(t,n){for(var i=t._pt;i&&i.p!==n&&i.op!==n&&i.fp!==n;)i=i._next;return i},XP=function(t,n){var i=t._targets,s,a,r;for(s in n)for(a=i.length;a--;)r=t._ptLookup[a][s],r&&(r=r.d)&&(r._pt&&(r=kP(r,s)),r&&r.modifier&&r.modifier(n[s],t,i[a],s))},dy=function(t,n){return{name:t,headless:1,rawVars:1,init:function(s,a,r){r._onInit=function(o){var l,c;if(yn(a)&&(l={},ti(a,function(u){return l[u]=1}),a=l),n){l={};for(c in a)l[c]=n(a[c]);a=l}XP(o,a)}}}},qn=Um.registerPlugin({name:"attr",init:function(t,n,i,s,a){var r,o,l;this.tween=i;for(r in n)l=t.getAttribute(r)||"",o=this.add(t,"setAttribute",(l||0)+"",n[r],s,a,0,0,r),o.op=r,o.b=l,this._props.push(r)},render:function(t,n){for(var i=n._pt;i;)On?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,n){for(var i=n.length;i--;)this.add(t,i,t[i]||0,n[i],0,0,0,0,0,1)}},dy("roundProps",Sy),dy("modifiers"),dy("snap",iA))||Um;an.version=Pn.version=qn.version="3.14.2";kE=1;Ey()&&wc();var WP=re.Power0,qP=re.Power1,YP=re.Power2,ZP=re.Power3,JP=re.Power4,KP=re.Linear,jP=re.Quad,QP=re.Cubic,$P=re.Quart,tO=re.Quint,eO=re.Strong,nO=re.Elastic,iO=re.Back,sO=re.SteppedEase,aO=re.Bounce,rO=re.Sine,oO=re.Expo,lO=re.Circ;var yA,Wr,Dc,Zy,Xo,cO,xA,Jy,uO=function(){return typeof window<"u"},Ga={},ko=180/Math.PI,Uc=Math.PI/180,Rc=Math.atan2,SA=1e8,Ky=/([A-Z])/g,hO=/(left|right|width|margin|padding|x)/i,fO=/[\s,\(]\S/,ea={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Xy=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},dO=function(t,n){return n.set(n.t,n.p,t===1?n.e:Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},pO=function(t,n){return n.set(n.t,n.p,t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},mO=function(t,n){return n.set(n.t,n.p,t===1?n.e:t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},gO=function(t,n){var i=n.s+n.c*t;n.set(n.t,n.p,~~(i+(i<0?-.5:.5))+n.u,n)},RA=function(t,n){return n.set(n.t,n.p,t?n.e:n.b,n)},DA=function(t,n){return n.set(n.t,n.p,t!==1?n.b:n.e,n)},_O=function(t,n,i){return t.style[n]=i},vO=function(t,n,i){return t.style.setProperty(n,i)},yO=function(t,n,i){return t._gsap[n]=i},xO=function(t,n,i){return t._gsap.scaleX=t._gsap.scaleY=i},SO=function(t,n,i,s,a){var r=t._gsap;r.scaleX=r.scaleY=i,r.renderTransform(a,r)},bO=function(t,n,i,s,a){var r=t._gsap;r[n]=i,r.renderTransform(a,r)},Ze="transform",gi=Ze+"Origin",MO=function e(t,n){var i=this,s=this.target,a=s.style,r=s._gsap;if(t in Ga&&a){if(this.tfm=this.tfm||{},t!=="transform")t=ea[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return i.tfm[o]=Ha(s,o)}):this.tfm[t]=r.x?r[t]:Ha(s,t),t===gi&&(this.tfm.zOrigin=r.zOrigin);else return ea.transform.split(",").forEach(function(o){return e.call(i,o,n)});if(this.props.indexOf(Ze)>=0)return;r.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(gi,n,"")),t=Ze}(a||n)&&this.props.push(t,n,a[t])},UA=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},TO=function(){var t=this.props,n=this.target,i=n.style,s=n._gsap,a,r;for(a=0;a<t.length;a+=3)t[a+1]?t[a+1]===2?n[t[a]](t[a+2]):n[t[a]]=t[a+2]:t[a+2]?i[t[a]]=t[a+2]:i.removeProperty(t[a].substr(0,2)==="--"?t[a]:t[a].replace(Ky,"-$1").toLowerCase());if(this.tfm){for(r in this.tfm)s[r]=this.tfm[r];s.svg&&(s.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),a=Jy(),(!a||!a.isStart)&&!i[Ze]&&(UA(i),s.zOrigin&&i[gi]&&(i[gi]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},NA=function(t,n){var i={target:t,props:[],revert:TO,save:MO};return t._gsap||qn.core.getCache(t),n&&t.style&&t.nodeType&&n.split(",").forEach(function(s){return i.save(s)}),i},LA,Wy=function(t,n){var i=Wr.createElementNS?Wr.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Wr.createElement(t);return i&&i.style?i:Wr.createElement(t)},Hi=function e(t,n,i){var s=getComputedStyle(t);return s[n]||s.getPropertyValue(n.replace(Ky,"-$1").toLowerCase())||s.getPropertyValue(n)||!i&&e(t,Nc(n)||n,1)||""},bA="O,Moz,ms,Ms,Webkit".split(","),Nc=function(t,n,i){var s=n||Xo,a=s.style,r=5;if(t in a&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);r--&&!(bA[r]+t in a););return r<0?null:(r===3?"ms":r>=0?bA[r]:"")+t},qy=function(){uO()&&window.document&&(yA=window,Wr=yA.document,Dc=Wr.documentElement,Xo=Wy("div")||{style:{}},cO=Wy("div"),Ze=Nc(Ze),gi=Ze+"Origin",Xo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",LA=!!Nc("perspective"),Jy=qn.core.reverting,Zy=1)},MA=function(t){var n=t.ownerSVGElement,i=Wy("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),a;s.style.display="block",i.appendChild(s),Dc.appendChild(i);try{a=s.getBBox()}catch{}return i.removeChild(s),Dc.removeChild(i),a},TA=function(t,n){for(var i=n.length;i--;)if(t.hasAttribute(n[i]))return t.getAttribute(n[i])},PA=function(t){var n,i;try{n=t.getBBox()}catch{n=MA(t),i=1}return n&&(n.width||n.height)||i||(n=MA(t)),n&&!n.width&&!n.x&&!n.y?{x:+TA(t,["x","cx","x1"])||0,y:+TA(t,["y","cy","y1"])||0,width:0,height:0}:n},OA=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&PA(t))},Yr=function(t,n){if(n){var i=t.style,s;n in Ga&&n!==gi&&(n=Ze),i.removeProperty?(s=n.substr(0,2),(s==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),i.removeProperty(s==="--"?n:n.replace(Ky,"-$1").toLowerCase())):i.removeAttribute(n)}},qr=function(t,n,i,s,a,r){var o=new ei(t._pt,n,i,0,1,r?DA:RA);return t._pt=o,o.b=s,o.e=a,t._props.push(i),o},EA={deg:1,rad:1,turn:1},EO={grid:1,flex:1},Zr=function e(t,n,i,s){var a=parseFloat(i)||0,r=(i+"").trim().substr((a+"").length)||"px",o=Xo.style,l=hO.test(n),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=s==="px",f=s==="%",p,_,g,m;if(s===r||!a||EA[s]||EA[r])return a;if(r!=="px"&&!h&&(a=e(t,n,i,"px")),m=t.getCTM&&OA(t),(f||r==="%")&&(Ga[n]||~n.indexOf("adius")))return p=m?t.getBBox()[l?"width":"height"]:t[u],$e(f?a/p*d:a/100*p);if(o[l?"width":"height"]=d+(h?r:s),_=s!=="rem"&&~n.indexOf("adius")||s==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Wr||!_.appendChild)&&(_=Wr.body),g=_._gsap,g&&f&&g.width&&l&&g.time===di.time&&!g.uncache)return $e(a/g.width*d);if(f&&(n==="height"||n==="width")){var v=t.style[n];t.style[n]=d+s,p=t[u],v?t.style[n]=v:Yr(t,n)}else(f||r==="%")&&!EO[Hi(_,"display")]&&(o.position=Hi(t,"position")),_===t&&(o.position="static"),_.appendChild(Xo),p=Xo[u],_.removeChild(Xo),o.position="absolute";return l&&f&&(g=Gr(_),g.time=di.time,g.width=_[u]),$e(h?p*a/d:p&&a?d/p*a:0)},Ha=function(t,n,i,s){var a;return Zy||qy(),n in ea&&n!=="transform"&&(n=ea[n],~n.indexOf(",")&&(n=n.split(",")[0])),Ga[n]&&n!=="transform"?(a=Ih(t,s),a=n!=="transformOrigin"?a[n]:a.svg?a.origin:zm(Hi(t,gi))+" "+a.zOrigin+"px"):(a=t.style[n],(!a||a==="auto"||s||~(a+"").indexOf("calc("))&&(a=Fm[n]&&Fm[n](t,n,i)||Hi(t,n)||Ny(t,n)||(n==="opacity"?1:0))),i&&!~(a+"").trim().indexOf(" ")?Zr(t,n,a,i)+i:a},AO=function(t,n,i,s){if(!i||i==="none"){var a=Nc(n,t,1),r=a&&Hi(t,a,1);r&&r!==i?(n=a,i=r):n==="borderColor"&&(i=Hi(t,"borderTopColor"))}var o=new ei(this._pt,t.style,n,0,1,Vy),l=0,c=0,u,d,h,f,p,_,g,m,v,S,y,E;if(o.b=i,o.e=s,i+="",s+="",s.substring(0,6)==="var(--"&&(s=Hi(t,s.substring(4,s.indexOf(")")))),s==="auto"&&(_=t.style[n],t.style[n]=s,s=Hi(t,n)||s,_?t.style[n]=_:Yr(t,n)),u=[i,s],Py(u),i=u[0],s=u[1],h=i.match(Fo)||[],E=s.match(Fo)||[],E.length){for(;d=Fo.exec(s);)g=d[0],v=s.substring(l,d.index),p?p=(p+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(p=1),g!==(_=h[c++]||"")&&(f=parseFloat(_)||0,y=_.substr((f+"").length),g.charAt(1)==="="&&(g=zo(f,g)+y),m=parseFloat(g),S=g.substr((m+"").length),l=Fo.lastIndex-S.length,S||(S=S||mi.units[n]||y,l===s.length&&(s+=S,o.e+=S)),y!==S&&(f=Zr(t,n,_,S)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:f,c:m-f,m:p&&p<4||n==="zIndex"?Math.round:0});o.c=l<s.length?s.substring(l,s.length):""}else o.r=n==="display"&&s==="none"?DA:RA;return wy.test(s)&&(o.e=0),this._pt=o,o},AA={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},wO=function(t){var n=t.split(" "),i=n[0],s=n[1]||"50%";return(i==="top"||i==="bottom"||s==="left"||s==="right")&&(t=i,i=s,s=t),n[0]=AA[i]||i,n[1]=AA[s]||s,n.join(" ")},CO=function(t,n){if(n.tween&&n.tween._time===n.tween._dur){var i=n.t,s=i.style,a=n.u,r=i._gsap,o,l,c;if(a==="all"||a===!0)s.cssText="",l=1;else for(a=a.split(","),c=a.length;--c>-1;)o=a[c],Ga[o]&&(l=1,o=o==="transformOrigin"?gi:Ze),Yr(i,o);l&&(Yr(i,Ze),r&&(r.svg&&i.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",Ih(i,1),r.uncache=1,UA(s)))}},Fm={clearProps:function(t,n,i,s,a){if(a.data!=="isFromStart"){var r=t._pt=new ei(t._pt,n,i,0,0,CO);return r.u=s,r.pr=-10,r.tween=a,t._props.push(i),1}}},Oh=[1,0,0,1,0,0],IA={},BA=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},wA=function(t){var n=Hi(t,Ze);return BA(n)?Oh:n.substr(7).match(Ay).map($e)},jy=function(t,n){var i=t._gsap||Gr(t),s=t.style,a=wA(t),r,o,l,c;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,a=[l.a,l.b,l.c,l.d,l.e,l.f],a.join(",")==="1,0,0,1,0,0"?Oh:a):(a===Oh&&!t.offsetParent&&t!==Dc&&!i.svg&&(l=s.display,s.display="block",r=t.parentNode,(!r||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,Dc.appendChild(t)),a=wA(t),l?s.display=l:Yr(t,"display"),c&&(o?r.insertBefore(t,o):r?r.appendChild(t):Dc.removeChild(t))),n&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},Yy=function(t,n,i,s,a,r){var o=t._gsap,l=a||jy(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,f=l[0],p=l[1],_=l[2],g=l[3],m=l[4],v=l[5],S=n.split(" "),y=parseFloat(S[0])||0,E=parseFloat(S[1])||0,A,M,x,T;i?l!==Oh&&(M=f*g-p*_)&&(x=y*(g/M)+E*(-_/M)+(_*v-g*m)/M,T=y*(-p/M)+E*(f/M)-(f*v-p*m)/M,y=x,E=T):(A=PA(t),y=A.x+(~S[0].indexOf("%")?y/100*A.width:y),E=A.y+(~(S[1]||S[0]).indexOf("%")?E/100*A.height:E)),s||s!==!1&&o.smooth?(m=y-c,v=E-u,o.xOffset=d+(m*f+v*_)-m,o.yOffset=h+(m*p+v*g)-v):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=E,o.smooth=!!s,o.origin=n,o.originIsAbsolute=!!i,t.style[gi]="0px 0px",r&&(qr(r,o,"xOrigin",c,y),qr(r,o,"yOrigin",u,E),qr(r,o,"xOffset",d,o.xOffset),qr(r,o,"yOffset",h,o.yOffset)),t.setAttribute("data-svg-origin",y+" "+E)},Ih=function(t,n){var i=t._gsap||new Oy(t);if("x"in i&&!n&&!i.uncache)return i;var s=t.style,a=i.scaleX<0,r="px",o="deg",l=getComputedStyle(t),c=Hi(t,gi)||"0",u,d,h,f,p,_,g,m,v,S,y,E,A,M,x,T,R,D,U,F,q,O,k,z,K,it,lt,st,ct,Wt,Lt,Ft;return u=d=h=_=g=m=v=S=y=0,f=p=1,i.svg=!!(t.getCTM&&OA(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(s[Ze]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ze]!=="none"?l[Ze]:"")),s.scale=s.rotate=s.translate="none"),M=jy(t,i.svg),i.svg&&(i.uncache?(K=t.getBBox(),c=i.xOrigin-K.x+"px "+(i.yOrigin-K.y)+"px",z=""):z=!n&&t.getAttribute("data-svg-origin"),Yy(t,z||c,!!z||i.originIsAbsolute,i.smooth!==!1,M)),E=i.xOrigin||0,A=i.yOrigin||0,M!==Oh&&(D=M[0],U=M[1],F=M[2],q=M[3],u=O=M[4],d=k=M[5],M.length===6?(f=Math.sqrt(D*D+U*U),p=Math.sqrt(q*q+F*F),_=D||U?Rc(U,D)*ko:0,v=F||q?Rc(F,q)*ko+_:0,v&&(p*=Math.abs(Math.cos(v*Uc))),i.svg&&(u-=E-(E*D+A*F),d-=A-(E*U+A*q))):(Ft=M[6],Wt=M[7],lt=M[8],st=M[9],ct=M[10],Lt=M[11],u=M[12],d=M[13],h=M[14],x=Rc(Ft,ct),g=x*ko,x&&(T=Math.cos(-x),R=Math.sin(-x),z=O*T+lt*R,K=k*T+st*R,it=Ft*T+ct*R,lt=O*-R+lt*T,st=k*-R+st*T,ct=Ft*-R+ct*T,Lt=Wt*-R+Lt*T,O=z,k=K,Ft=it),x=Rc(-F,ct),m=x*ko,x&&(T=Math.cos(-x),R=Math.sin(-x),z=D*T-lt*R,K=U*T-st*R,it=F*T-ct*R,Lt=q*R+Lt*T,D=z,U=K,F=it),x=Rc(U,D),_=x*ko,x&&(T=Math.cos(x),R=Math.sin(x),z=D*T+U*R,K=O*T+k*R,U=U*T-D*R,k=k*T-O*R,D=z,O=K),g&&Math.abs(g)+Math.abs(_)>359.9&&(g=_=0,m=180-m),f=$e(Math.sqrt(D*D+U*U+F*F)),p=$e(Math.sqrt(k*k+Ft*Ft)),x=Rc(O,k),v=Math.abs(x)>2e-4?x*ko:0,y=Lt?1/(Lt<0?-Lt:Lt):0),i.svg&&(z=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!BA(Hi(t,Ze)),z&&t.setAttribute("transform",z))),Math.abs(v)>90&&Math.abs(v)<270&&(a?(f*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,v+=v<=0?180:-180)),n=n||i.uncache,i.x=u-((i.xPercent=u&&(!n&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+r,i.y=d-((i.yPercent=d&&(!n&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+r,i.z=h+r,i.scaleX=$e(f),i.scaleY=$e(p),i.rotation=$e(_)+o,i.rotationX=$e(g)+o,i.rotationY=$e(m)+o,i.skewX=v+o,i.skewY=S+o,i.transformPerspective=y+r,(i.zOrigin=parseFloat(c.split(" ")[2])||!n&&i.zOrigin||0)&&(s[gi]=zm(c)),i.xOffset=i.yOffset=0,i.force3D=mi.force3D,i.renderTransform=i.svg?DO:LA?FA:RO,i.uncache=0,i},zm=function(t){return(t=t.split(" "))[0]+" "+t[1]},ky=function(t,n,i){var s=In(n);return $e(parseFloat(n)+parseFloat(Zr(t,"x",i+"px",s)))+s},RO=function(t,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,FA(t,n)},Ho="0deg",Ph="0px",Go=") ",FA=function(t,n){var i=n||this,s=i.xPercent,a=i.yPercent,r=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,d=i.rotationX,h=i.skewX,f=i.skewY,p=i.scaleX,_=i.scaleY,g=i.transformPerspective,m=i.force3D,v=i.target,S=i.zOrigin,y="",E=m==="auto"&&t&&t!==1||m===!0;if(S&&(d!==Ho||u!==Ho)){var A=parseFloat(u)*Uc,M=Math.sin(A),x=Math.cos(A),T;A=parseFloat(d)*Uc,T=Math.cos(A),r=ky(v,r,M*T*-S),o=ky(v,o,-Math.sin(A)*-S),l=ky(v,l,x*T*-S+S)}g!==Ph&&(y+="perspective("+g+Go),(s||a)&&(y+="translate("+s+"%, "+a+"%) "),(E||r!==Ph||o!==Ph||l!==Ph)&&(y+=l!==Ph||E?"translate3d("+r+", "+o+", "+l+") ":"translate("+r+", "+o+Go),c!==Ho&&(y+="rotate("+c+Go),u!==Ho&&(y+="rotateY("+u+Go),d!==Ho&&(y+="rotateX("+d+Go),(h!==Ho||f!==Ho)&&(y+="skew("+h+", "+f+Go),(p!==1||_!==1)&&(y+="scale("+p+", "+_+Go),v.style[Ze]=y||"translate(0, 0)"},DO=function(t,n){var i=n||this,s=i.xPercent,a=i.yPercent,r=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,d=i.scaleX,h=i.scaleY,f=i.target,p=i.xOrigin,_=i.yOrigin,g=i.xOffset,m=i.yOffset,v=i.forceCSS,S=parseFloat(r),y=parseFloat(o),E,A,M,x,T;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Uc,c*=Uc,E=Math.cos(l)*d,A=Math.sin(l)*d,M=Math.sin(l-c)*-h,x=Math.cos(l-c)*h,c&&(u*=Uc,T=Math.tan(c-u),T=Math.sqrt(1+T*T),M*=T,x*=T,u&&(T=Math.tan(u),T=Math.sqrt(1+T*T),E*=T,A*=T)),E=$e(E),A=$e(A),M=$e(M),x=$e(x)):(E=d,x=h,A=M=0),(S&&!~(r+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(S=Zr(f,"x",r,"px"),y=Zr(f,"y",o,"px")),(p||_||g||m)&&(S=$e(S+p-(p*E+_*M)+g),y=$e(y+_-(p*A+_*x)+m)),(s||a)&&(T=f.getBBox(),S=$e(S+s/100*T.width),y=$e(y+a/100*T.height)),T="matrix("+E+","+A+","+M+","+x+","+S+","+y+")",f.setAttribute("transform",T),v&&(f.style[Ze]=T)},UO=function(t,n,i,s,a){var r=360,o=yn(a),l=parseFloat(a)*(o&&~a.indexOf("rad")?ko:1),c=l-s,u=s+c+"deg",d,h;return o&&(d=a.split("_")[1],d==="short"&&(c%=r,c!==c%(r/2)&&(c+=c<0?r:-r)),d==="cw"&&c<0?c=(c+r*SA)%r-~~(c/r)*r:d==="ccw"&&c>0&&(c=(c-r*SA)%r-~~(c/r)*r)),t._pt=h=new ei(t._pt,n,i,s,c,dO),h.e=u,h.u="deg",t._props.push(i),h},CA=function(t,n){for(var i in n)t[i]=n[i];return t},NO=function(t,n,i){var s=CA({},i._gsap),a="perspective,force3D,transformOrigin,svgOrigin",r=i.style,o,l,c,u,d,h,f,p;s.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),r[Ze]=n,o=Ih(i,1),Yr(i,Ze),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Ze],r[Ze]=n,o=Ih(i,1),r[Ze]=c);for(l in Ga)c=s[l],u=o[l],c!==u&&a.indexOf(l)<0&&(f=In(c),p=In(u),d=f!==p?Zr(i,l,c,p):parseFloat(c),h=parseFloat(u),t._pt=new ei(t._pt,o,l,d,h-d,Xy),t._pt.u=p||0,t._props.push(l));CA(o,s)};ti("padding,margin,Width,Radius",function(e,t){var n="Top",i="Right",s="Bottom",a="Left",r=(t<3?[n,i,s,a]:[n+a,n+i,s+i,s+a]).map(function(o){return t<2?e+o:"border"+o+e});Fm[t>1?"border"+e:e]=function(o,l,c,u,d){var h,f;if(arguments.length<4)return h=r.map(function(p){return Ha(o,p,c)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},r.forEach(function(p,_){return f[p]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(l,f,d)}});var Qy={name:"css",register:qy,targetTest:function(t){return t.style&&t.nodeType},init:function(t,n,i,s,a){var r=this._props,o=t.style,l=i.vars.startAt,c,u,d,h,f,p,_,g,m,v,S,y,E,A,M,x,T;Zy||qy(),this.styles=this.styles||NA(t),x=this.styles.props,this.tween=i;for(_ in n)if(_!=="autoRound"&&(u=n[_],!(fi[_]&&By(_,n,i,s,t,a)))){if(f=typeof u,p=Fm[_],f==="function"&&(u=u.call(i,s,t,a),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Cc(u)),p)p(this,t,_,u,i)&&(M=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",za.lastIndex=0,za.test(c)||(g=In(c),m=In(u),m?g!==m&&(c=Zr(t,_,c,m)+m):g&&(u+=g)),this.add(o,"setProperty",c,u,s,a,0,0,_),r.push(_),x.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,s,t,a):l[_],yn(c)&&~c.indexOf("random(")&&(c=Cc(c)),In(c+"")||c==="auto"||(c+=mi.units[_]||In(Ha(t,_))||""),(c+"").charAt(1)==="="&&(c=Ha(t,_))):c=Ha(t,_),h=parseFloat(c),v=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),d=parseFloat(u),_ in ea&&(_==="autoAlpha"&&(h===1&&Ha(t,"visibility")==="hidden"&&d&&(h=0),x.push("visibility",0,o.visibility),qr(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=ea[_],~_.indexOf(",")&&(_=_.split(",")[0]))),S=_ in Ga,S){if(this.styles.save(_),T=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=Hi(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var R=t.style.perspective;t.style.perspective=u,u=Hi(t,"perspective"),R?t.style.perspective=R:Yr(t,"perspective")}d=parseFloat(u)}if(y||(E=t._gsap,E.renderTransform&&!n.parseTransform||Ih(t,n.parseTransform),A=n.smoothOrigin!==!1&&E.smooth,y=this._pt=new ei(this._pt,o,Ze,0,1,E.renderTransform,E,0,-1),y.dep=1),_==="scale")this._pt=new ei(this._pt,E,"scaleY",E.scaleY,(v?zo(E.scaleY,v+d):d)-E.scaleY||0,Xy),this._pt.u=0,r.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push(gi,0,o[gi]),u=wO(u),E.svg?Yy(t,u,0,A,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==E.zOrigin&&qr(this,E,"zOrigin",E.zOrigin,m),qr(this,o,_,zm(c),zm(u)));continue}else if(_==="svgOrigin"){Yy(t,u,1,A,0,this);continue}else if(_ in IA){UO(this,E,_,h,v?zo(h,v+u):u);continue}else if(_==="smoothOrigin"){qr(this,E,"smooth",E.smooth,u);continue}else if(_==="force3D"){E[_]=u;continue}else if(_==="transform"){NO(this,u,t);continue}}else _ in o||(_=Nc(_)||_);if(S||(d||d===0)&&(h||h===0)&&!fO.test(u)&&_ in o)g=(c+"").substr((h+"").length),d||(d=0),m=In(u)||(_ in mi.units?mi.units[_]:g),g!==m&&(h=Zr(t,_,c,m)),this._pt=new ei(this._pt,S?E:o,_,h,(v?zo(h,v+d):d)-h,!S&&(m==="px"||_==="zIndex")&&n.autoRound!==!1?gO:Xy),this._pt.u=m||0,S&&T!==u?(this._pt.b=c,this._pt.e=T,this._pt.r=mO):g!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=pO);else if(_ in o)AO.call(this,t,_,c,v?v+u:u);else if(_ in t)this.add(t,_,c||t[_],v?v+u:u,s,a);else if(_!=="parseTransform"){Lm(_,u);continue}S||(_ in o?x.push(_,0,o[_]):typeof t[_]=="function"?x.push(_,2,t[_]()):x.push(_,1,c||t[_])),r.push(_)}}M&&Gy(this)},render:function(t,n){if(n.tween._time||!Jy())for(var i=n._pt;i;)i.r(t,i.d),i=i._next;else n.styles.revert()},get:Ha,aliases:ea,getSetter:function(t,n,i){var s=ea[n];return s&&s.indexOf(",")<0&&(n=s),n in Ga&&n!==gi&&(t._gsap.x||Ha(t,"x"))?i&&xA===i?n==="scale"?xO:yO:(xA=i||{})&&(n==="scale"?SO:bO):t.style&&!Nm(t.style[n])?_O:~n.indexOf("-")?vO:Bm(t,n)},core:{_removeProperty:Yr,_getMatrix:jy}};qn.utils.checkPrefix=Nc;qn.core.getStyleSaver=NA;(function(e,t,n,i){var s=ti(e+","+t+","+n,function(a){Ga[a]=1});ti(t,function(a){mi.units[a]="deg",IA[a]=1}),ea[s[13]]=e+","+t,ti(i,function(a){var r=a.split(":");ea[r[1]]=s[r[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ti("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(e){mi.units[e]="px"});qn.registerPlugin(Qy);var Ue=qn.registerPlugin(Qy)||qn,Gz=Ue.core.Tween;var zA=`
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,VA=`
  precision highp float;

  #define MAX_PLANES 32
  #define MAX_LINKS 32

  varying vec2 vUv;

  uniform vec2  uResolution;   // canvas size in px
  uniform vec2  uSize;         // resting plane size in px
  uniform float uRadius;       // resting corner radius in px

  // per-plane state, driven from JS
  uniform float uCount;
  uniform vec2  uPos[MAX_PLANES];    // centre in px, origin at screen centre
  uniform float uRot[MAX_PLANES];    // radians
  // xy = 0..1 per axis, z = brightness (1 = lit, 0 = black), w = which atlas
  // cell this plane wears. All three ride in here rather than in arrays of
  // their own because GLSL ES gives every element of a uniform array a full
  // vec4 row whatever it is declared as \u2014 zw were already being paid for and
  // thrown away. The cell is resolved on the CPU because it depends on where
  // the plane sits on the ring, not on its index, and working that out per
  // pixel in the loop below would be absurd.
  uniform vec4  uScale[MAX_PLANES];

  // honey threads between neighbours, driven from JS
  uniform float uLinkCount;
  uniform vec2  uLinkA[MAX_LINKS];
  uniform vec2  uLinkB[MAX_LINKS];
  // (radius at the ends, radius at the pinch, droop, fillet)
  uniform vec4  uLinkPar[MAX_LINKS];

  uniform float uK;            // smin blend strength in px
  uniform float uWobble;       // surface tension noise amount, px
  uniform float uTime;
  uniform vec3  uColor;
  uniform vec3  uPage;         // what is behind the ring, for the tag to read

  // All the artwork lives in one atlas: ESSL 1.00 cannot index an array of
  // samplers with a varying index, so a per-plane texture is not an option.
  uniform sampler2D uAtlas;
  uniform vec2  uGrid;         // atlas cells across, down
  uniform float uBlend;        // px over which neighbouring art crossfades
  uniform float uTextured;

  // --- ASCII particle opening ---------------------------------------------
  // Real glyphs rasterised into a tiny atlas for the intro assembly.
  uniform sampler2D uAsciiTex;
  uniform vec4 uIntro; // gather progress, cloud expansion, cell px, opacity
  uniform vec4 uCardParticles; // launch, reach px, cell px, opacity
  uniform vec2 uFocusParticlePos;
  uniform vec4 uFocusParticleBox; // half size, radius, rotation
  uniform vec4 uFocusParticles; // amount, reach px, cell px, opacity
  uniform vec2 uFocusParticleMotion; // flow phase, motion multiplier

  // --- pointer -------------------------------------------------------------
  // Nothing is ever drawn at the cursor. It only changes how the ring behaves
  // around it: the field goes soft, and a wake runs out through the surface.
  // Packed into vec4s for the same reason the link parameters are.
  uniform vec4 uMouse;  // cursor.xy px, presence 0..1, blend px added at it
  uniform vec4 uMelt;   // reach px, wake px, wake frequency, wake speed

  // --- the cursor tag ------------------------------------------------------
  // Drawn in this pass with everything else rather than as an element over the
  // canvas. That is what lets its label inspect the pixels it is sitting on and
  // invert against them, and it means the glass refracts the ring the same way
  // the lip does instead of having to sample it back out of a backdrop.
  uniform sampler2D uTagTex;  // the label; only its alpha is used, as a mask
  uniform vec4 uTag;   // centre.xy px, scale.xy \u2014 scale 0 is simply absent
  uniform vec4 uTagP;  // half width, half height, corner radius, refract px
  uniform vec4 uTagQ;  // frost, rim gain, unused, unused

  vec2 atlasUV(vec2 uv, float idx) {
    float col = mod(idx, uGrid.x);
    float row = floor(idx / uGrid.x);
    return (vec2(col, row) + uv) / uGrid;
  }

  float hash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  // --- glass lip -----------------------------------------------------------
  // A band along the top and bottom of the screen behaving like the rounded
  // edge of a thick glass sheet. Because the whole scene is evaluated from p,
  // warping p here refracts the planes and the honey together, with no second
  // pass and no render target.
  uniform float uBandTop;     // px
  uniform float uBandBottom;  // px
  uniform vec4  uGlass;       // refract px, squeeze, ripple px, ripple freq
  uniform float uFringe;      // px of chromatic split inside the band
  uniform float uSheen;       // lift applied across the lip

  // Warps p in place and returns how deep into the lip this pixel sits, 0..1.
  float glassBend(inout vec2 p) {
    float band = p.y > 0.0 ? uBandTop : uBandBottom;
    if (band <= 0.5) return 0.0;

    float dy = abs(p.y) - (uResolution.y * 0.5 - band);
    if (dy <= 0.0) return 0.0;

    float t = clamp(dy / band, 0.0, 1.0);
    // Circular profile: barely bends at the inner edge, falls away sharply at
    // the very edge, which is what reads as thickness rather than a gradient.
    float bend = 1.0 - sqrt(max(0.0, 1.0 - t * t));

    float s = sign(p.y);
    // Sampling back toward centre throws content outward, so the image
    // stretches forward into the lip and swells as it reaches the edge.
    // Both terms are signed: negatives invert the lip and compress instead.
    p.y -= s * bend * (uGlass.x + sin(p.x * uGlass.w) * uGlass.z);
    p.x *= 1.0 - bend * uGlass.y;

    return bend;
  }

  // --- simplex noise -------------------------------------------------------
  // Copyright (C) 2011 Ashima Arts. All rights reserved.
  // Copyright (C) 2011-2016 by Stefan Gustavson (Classic noise and others)
  // Distributed under the MIT License. https://github.com/ashima/webgl-noise
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                       -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
                            + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
                            dot(x12.zw, x12.zw)), 0.0);
    m = m * m; m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  // --- sdf helpers ---------------------------------------------------------
  float sdRoundBox(vec2 p, vec2 b, float r) {
    vec2 q = abs(p) - b + r;
    return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
  }

  // The honey between two planes: a flat slab spanning centre to centre, as
  // wide as the edges it comes off and pinched in the middle, drooping under
  // its own weight.
  //
  // Deliberately not a capsule. A capsule has a round cross-section, so at
  // full merge it bulges out past the flat sides of the planes themselves.
  // This is swept as a box, so while the planes overlap it stays entirely
  // inside them and the silhouette reads as one flat card.
  float sdBridge(vec2 p, vec2 a, vec2 b, float rEnd, float rMid, float sag) {
    vec2 ba = b - a;
    float len = length(ba);
    if (len < 0.001) return 1e6;

    vec2 dir = ba / len;
    vec2 nrm = vec2(-dir.y, dir.x);

    vec2 q = p - (a + b) * 0.5;
    float along = dot(q, dir);
    float across = dot(q, nrm);

    float h = clamp(along / len + 0.5, 0.0, 1.0);
    float bell = sin(3.14159265 * h);           // 0 at the ends, 1 in the middle

    // droop, world -Y, resolved onto the across axis
    across += sag * bell * nrm.y;

    float taper = pow(1.0 - bell, 1.7);         // 1 at the ends, 0 in the middle
    float r = mix(rMid, rEnd, taper);

    // Ends are square and buried inside the planes, so they never show.
    return max(abs(along) - len * 0.5, abs(across) - r);
  }

  // The tag's own outline, scaled by whatever the pop animation is doing.
  float sdTag(vec2 p) {
    vec2 hs = uTagP.xy * abs(uTag.zw);
    return sdRoundBox(p - uTag.xy, hs, min(uTagP.z, min(hs.x, hs.y)));
  }

  // Its surface normal, by difference. A pill's normal is vertical along the
  // flat edges and radial round the ends, so nothing simpler than this gets the
  // refraction pointing the right way the whole way round.
  vec2 tagNormal(vec2 p) {
    vec2 e = vec2(1.0, 0.0);
    vec2 g = vec2(
      sdTag(p + e.xy) - sdTag(p - e.xy),
      sdTag(p + e.yx) - sdTag(p - e.yx)
    );
    float l = length(g);
    return l > 0.0001 ? g / l : vec2(0.0);
  }

  // smooth minimum \u2014 this is what makes the shapes read as liquid.
  // Note it also behaves as a plain min() when a is the 1e6 sentinel.
  float smin(float a, float b, float k) {
    if (k <= 0.0001) return min(a, b);
    float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
    return mix(b, a, h) - k * h * (1.0 - h);
  }

  vec4 introParticles(vec2 p) {
    float t = clamp(uIntro.x, 0.0, 1.0);
    float gather = t * t * (3.0 - 2.0 * t);
    float cloudScale = mix(max(1.0, uIntro.y), 1.0, gather);

    // Work in the seed card's local frame so the opening follows the image as
    // the centre card begins its launch onto the ring.
    vec2 q = p - uPos[0];
    float a = uRot[0];
    float ca = cos(a), sa = sin(a);
    q = vec2(q.x * ca + q.y * sa, -q.x * sa + q.y * ca);

    vec2 target = q / cloudScale;
    vec2 halfSize = max(uSize * 0.5, vec2(1.0));
    vec2 normalised = target / halfSize;
    float diamondD = abs(normalised.x) + abs(normalised.y) - 1.0;
    float boxD = max(abs(normalised.x), abs(normalised.y)) - 1.0;
    float shapeMorph = smoothstep(0.35, 0.92, gather);
    float shapeD = mix(diamondD, boxD, shapeMorph);
    if (shapeD > 0.0) return vec4(0.0);

    float cell = max(uIntro.z, 5.0);
    float radius = max(length(q), 1.0);
    float ripple = sin(
      uTime * 1.4 + (abs(q.x) + abs(q.y)) * 0.018
    );
    vec2 current = q +
      (q / radius) * ripple * cell * 0.38 * (1.0 - gather);
    vec2 gridP = current / cell;
    vec2 mirrored = abs(gridP);
    vec2 tile = floor(mirrored);
    vec2 glyphUv = fract(mirrored);
    float seed = hash21(tile + 71.19);

    vec2 imageUv = target / uSize + 0.5;
    imageUv.y = 1.0 - imageUv.y;
    imageUv = clamp(imageUv, 0.004, 0.996);
    vec3 art = uTextured > 0.5
      ? texture2D(uAtlas, atlasUV(imageUv, uScale[0].w)).rgb
      : uColor;
    float luminance = dot(art, vec3(0.2126, 0.7152, 0.0722));

    float imageInfluence = smoothstep(0.28, 0.88, gather);
    float density = mix(0.30, 0.90, gather);
    float present = step(seed, density);
    float glyphBase = 3.0 + seed * 2.0;
    float glyphImage =
      (1.0 - luminance) * 4.8 + gather * 1.35 + seed * 0.8;
    float glyph = floor(clamp(
      mix(glyphBase, glyphImage, imageInfluence),
      0.0, 6.0
    ));
    vec2 atlasP = vec2((glyph + glyphUv.x) / 7.0, glyphUv.y);
    float mask = texture2D(uAsciiTex, atlasP).a;

    float born = smoothstep(0.0, 0.09, t);
    float handoff = 1.0 - smoothstep(0.58, 0.96, t);
    float pulse = 0.82 + 0.18 * sin(uTime * 3.2 + seed * 6.2831853);
    float cloudEdge = 1.0 - smoothstep(-0.16, 0.0, shapeD);
    float alpha =
      mask * present * born * handoff * pulse * cloudEdge * uIntro.w;

    // Keep pale source pixels legible on the paper field without flattening
    // the image back to monochrome.
    vec3 particle = mix(uColor, mix(uColor, art, 0.68), imageInfluence);
    return vec4(particle, alpha);
  }

  vec4 singleCardParticles(vec2 p) {
    float gather = clamp(uIntro.x, 0.0, 1.0);
    float launch = clamp(uCardParticles.x, 0.0, 1.0);
    float enter = smoothstep(0.52, 0.94, gather);
    float leave = smoothstep(0.04, 0.76, launch);
    float life = enter * (1.0 - leave);
    if (life <= 0.001) return vec4(0.0);

    // The field belongs only to the seed card. It rotates and contracts with
    // that card, then dies before the fan starts opening into a ring.
    vec2 q = p - uPos[0];
    float a = uRot[0];
    float ca = cos(a), sa = sin(a);
    q = vec2(q.x * ca + q.y * sa, -q.x * sa + q.y * ca);

    vec2 seedScale = max(uScale[0].xy, vec2(0.08));
    vec2 halfSize = max(uSize * 0.5 * seedScale, vec2(1.0));
    float cardD = sdRoundBox(q, halfSize, min(uRadius, halfSize.y));
    float reach = max(uCardParticles.y, 8.0);

    // A four-axis diamond holds the particles behind the card instead of
    // allowing a circular fog. The inner cutout keeps the photograph crisp.
    vec2 outerHalf = halfSize + vec2(reach * 1.35, reach);
    float diamondD =
      abs(q.x / outerHalf.x) + abs(q.y / outerHalf.y) - 1.0;
    float envelope = 1.0 - smoothstep(-0.10, 0.0, diamondD);
    float outside = smoothstep(1.5, 5.0, cardD);
    float falloff = 1.0 - smoothstep(0.0, reach, cardD);
    float field = envelope * outside * pow(max(falloff, 0.0), 0.72);
    if (field <= 0.001) return vec4(0.0);

    float cell = max(uCardParticles.z, 5.0);
    float radius = max(length(q), 1.0);
    vec2 direction = q / radius;

    // Positive travel pulls mirrored rows inward. The sign reverses on exit,
    // so the same glyphs visibly peel back out through the four diamond tips.
    float travel = enter * 2.2 - leave * 5.0 + uTime * 0.16 * life;
    vec2 particleP = q + direction * cell * travel;
    vec2 gridP = abs(particleP / cell);
    vec2 tile = floor(gridP);
    vec2 glyphUv = fract(gridP);
    float seed = hash21(tile + 143.57);

    float density = mix(0.12, 0.66, enter) *
                    mix(0.62, 1.0, pow(max(falloff, 0.0), 0.55));
    float present = step(seed, density);
    float glyph = floor(clamp(
      falloff * 5.2 + seed * 1.45,
      0.0, 6.0
    ));
    vec2 atlasP = vec2((glyph + glyphUv.x) / 7.0, glyphUv.y);
    float mask = texture2D(uAsciiTex, atlasP).a;

    float phase = hash21(tile + 29.31) * 6.2831853;
    float pulse = 0.76 + 0.24 * sin(uTime * 3.0 + phase);
    float alpha =
      mask * present * field * life * pulse * uCardParticles.w;
    return vec4(uColor, alpha);
  }

  vec4 hoveredCardParticles(vec2 p) {
    float amount = clamp(uFocusParticles.x, 0.0, 1.0);
    if (amount <= 0.001) return vec4(0.0);

    vec2 q = p - uFocusParticlePos;
    float a = uFocusParticleBox.w;
    float ca = cos(a), sa = sin(a);
    q = vec2(q.x * ca + q.y * sa, -q.x * sa + q.y * ca);

    vec2 halfSize = max(uFocusParticleBox.xy, vec2(1.0));
    float cardD = sdRoundBox(q, halfSize, uFocusParticleBox.z);
    float reach = max(uFocusParticles.y, 8.0);

    // Restore the original loose shadow field: distance from the rounded card
    // controls density, with no geometric envelope and no mirrored quadrants.
    float outside = smoothstep(1.5, 5.0, cardD);
    float falloff = 1.0 - smoothstep(0.0, reach, cardD);
    float field = outside * pow(max(falloff, 0.0), 1.25);
    if (field <= 0.001) return vec4(0.0);

    float cell = max(uFocusParticles.z, 5.0);
    float radius = max(length(q), 1.0);
    vec2 direction = q / radius;
    float travel =
      (uFocusParticleMotion.x + amount * 3.6) * uFocusParticleMotion.y;
    vec2 drift = vec2(
      uTime * 0.45 * cell,
      sin(uTime * 1.7 + q.x * 0.013) * cell * 0.34
    ) * uFocusParticleMotion.y;
    vec2 particleP = q + direction * cell * travel + drift;
    vec2 gridP = particleP / cell;
    vec2 tile = floor(gridP);
    vec2 glyphUv = fract(gridP);
    float seed = hash21(tile + 223.41);

    float density = mix(0.10, 0.76, pow(max(falloff, 0.0), 0.72)) *
                    mix(0.28, 1.0, amount);
    float present = step(seed, density);
    float glyph = floor(clamp(
      falloff * 6.35 + (seed - 0.5) * 1.35,
      0.0, 6.0
    ));
    vec2 atlasP = vec2((glyph + glyphUv.x) / 7.0, glyphUv.y);
    float mask = texture2D(uAsciiTex, atlasP).a;

    float phase = hash21(tile + 47.13) * 6.2831853;
    float movingPulse = 0.74 + 0.26 * sin(uTime * 3.2 + phase);
    float pulse = mix(1.0, movingPulse, uFocusParticleMotion.y);
    float alpha =
      mask * present * field * amount * pulse * uFocusParticles.w;
    return vec4(uColor, alpha);
  }

  void main() {
    // Screen position, kept unbent: the tag is pinned to the cursor, so it is
    // placed and drawn here rather than in the lip's warped space.
    vec2 ps = (vUv - 0.5) * uResolution;

    vec2 p = ps;
    float bend = glassBend(p);

    // The tag refracts whatever is under it, so its warp has to be applied to
    // the sampling position before the field is read \u2014 the same order the lip
    // works in. Flat through the middle, bending hard at the rim, which is what
    // reads as a thickness of glass rather than a smear.
    float dTag = sdTag(ps);
    float tagOn = min(abs(uTag.z), abs(uTag.w));
    if (tagOn > 0.001 && dTag < 0.0 && uTagP.w > 0.0) {
      float depth = clamp(-dTag / max(uTagP.y * abs(uTag.w), 1.0), 0.0, 1.0);
      float t = 1.0 - depth;
      p += tagNormal(ps) * (1.0 - sqrt(max(0.0, 1.0 - t * t))) * uTagP.w;
    }

    // Read after the bend, so the cursor acts in the same warped space as the
    // ring: dragged into the lip, its influence is refracted with everything
    // else rather than sitting flat on top of it.
    float toMouse = length(p - uMouse.xy);

    // Blend strength is lifted in a halo around the cursor, so the ring goes
    // soft exactly where it is being touched and stays crisp everywhere else.
    // Resolved once per pixel rather than per plane: it costs one length().
    float k = uK;
    if (uMouse.z > 0.001) {
      float t = 1.0 - smoothstep(0.0, max(uMelt.x, 1.0), toMouse);
      k += uMouse.w * uMouse.z * t * t;
    }

    float d = 1e6;

    // The two planes nearest this pixel, tracked alongside the field so the
    // colour can be resolved without a second pass. In the goo between two
    // planes both are close, which is exactly where the crossfade belongs.
    float d0 = 1e6, d1 = 1e6;
    vec2 uv0 = vec2(0.5), uv1 = vec2(0.5);
    float im0 = 0.0, im1 = 0.0;
    float dm0 = 1.0, dm1 = 1.0;

    float halfSpan = length(uSize) * 0.5;

    for (int i = 0; i < MAX_PLANES; i++) {
      if (float(i) >= uCount) break;

      vec4 st = uScale[i];
      vec2 sc = st.xy;
      float grown = max(sc.x, sc.y);
      if (grown <= 0.0001) continue;

      vec2 q = p - uPos[i];
      // Anything further out than this cannot affect the surface, so it can be
      // skipped outright \u2014 this is what keeps 32 planes affordable. Scaled by
      // the plane rather than fixed, because a plane swollen under the cursor
      // reaches further than its resting size, as does the melt around it.
      float cull = halfSpan * grown + k + uWobble + 8.0;
      if (dot(q, q) > cull * cull) continue;

      // into the plane's local frame
      float a  = uRot[i];
      float ca = cos(a), sa = sin(a);
      q = vec2(q.x * ca + q.y * sa, -q.x * sa + q.y * ca);

      vec2 halfSize = max(uSize * 0.5 * sc, vec2(0.0001));

      // starts as a circle (r = half extent), relaxes into the rounded rect
      float rMax = min(halfSize.x, halfSize.y);
      float r = min(rMax, mix(rMax, uRadius, smoothstep(0.30, 1.0, min(sc.x, sc.y))));

      float di = sdRoundBox(q, halfSize, r);
      d = smin(d, di, k);

      // Local UV. Clamped, so the goo outside a plane carries that plane's
      // edge colour rather than repeating or sampling the next atlas cell.
      vec2 luv = q / (2.0 * halfSize) + 0.5;
      luv.y = 1.0 - luv.y;
      luv = clamp(luv, 0.004, 0.996);

      if (di < d0) {
        d1 = d0; uv1 = uv0; im1 = im0; dm1 = dm0;
        d0 = di; uv0 = luv; im0 = st.w; dm0 = st.z;
      } else if (di < d1) {
        d1 = di; uv1 = luv; im1 = st.w; dm1 = st.z;
      }
    }

    // Threads strung between neighbours as they pull apart.
    for (int i = 0; i < MAX_LINKS; i++) {
      if (float(i) >= uLinkCount) break;

      vec4 par = uLinkPar[i];
      // Radii are allowed to go negative: that lifts the bridge's field clear
      // of the surface so it fades out, rather than bottoming out at zero as a
      // half-covered hairline. Only cull once it is further out than the
      // antialiasing can reach.
      if (par.x <= -3.0) continue;

      vec2 a = uLinkA[i];
      vec2 b = uLinkB[i];
      vec2 mid = (a + b) * 0.5;
      float reach = length(b - a) * 0.5 + par.x + par.w + 8.0;
      if (dot(p - mid, p - mid) > reach * reach) continue;

      d = smin(d, sdBridge(p, a, b, par.x, par.y, par.z), par.w);
    }

    // Surface tension wobble, decays to zero so resting planes are dead flat.
    if (uWobble > 0.001) {
      float n = snoise(p * 0.012 + vec2(uTime * 0.22, uTime * -0.17));
      d += n * uWobble;
    }

    // A capillary wake off the cursor, amplitude driven by how fast it is
    // moving. Rings out from it and dies over the same reach the softening
    // uses, so a flick leaves a ripple in the surface that outlives the
    // movement that made it.
    if (uMelt.y > 0.001) {
      d += sin(toMouse * uMelt.z - uTime * uMelt.w)
         * uMelt.y * exp(-toMouse / max(uMelt.x, 1.0));
    }

    // Clamped, not just floored: the distance cull above leaves a step in the
    // field, and an unclamped fwidth across that step paints a half-opaque
    // outline along every cull boundary.
    float aa = clamp(fwidth(d), 0.5, 2.0);
    float alpha = 1.0 - smoothstep(-aa, aa, d);

    vec4 intro = vec4(0.0);
    if (uIntro.w > 0.001 && uIntro.x < 0.999) {
      intro = introParticles(p);
    }
    vec4 cardParticles = vec4(0.0);
    if (
      uCardParticles.w > 0.001 &&
      uIntro.x > 0.48 &&
      uCardParticles.x < 0.80
    ) {
      cardParticles = singleCardParticles(p);
    }
    vec4 focusParticles = vec4(0.0);
    if (uFocusParticles.x > 0.001) {
      focusParticles = hoveredCardParticles(p);
    }

    // The tag has to survive this: it can overhang the edge of a card, and
    // those pixels are its own even though the ring has nothing there.
    float taa = clamp(fwidth(dTag), 0.5, 2.0);
    float ta = tagOn > 0.001 ? 1.0 - smoothstep(-taa, taa, dTag) : 0.0;

    if (
      alpha <= 0.001 &&
      ta <= 0.001 &&
      focusParticles.a <= 0.001 &&
      cardParticles.a <= 0.001 &&
      intro.a <= 0.001
    ) discard;

    // Even mix where the two nearest planes are equidistant, resolving to
    // whichever is clearly nearer beyond uBlend. Both the art and the dim are
    // carried across on it, so neither can put a seam down the goo.
    float nearest = smoothstep(-uBlend, uBlend, d1 - d0);

    vec3 col = uColor;
    if (uTextured > 0.5) {
      vec3 c0, c1;

      // Uniform branch, so the derivatives the mip selection needs stay
      // defined. The offset is scaled by bend, so outside the lip the three
      // taps land on the same texel and there is no fringe.
      if (uFringe > 0.0) {
        vec2 fr = vec2(uFringe * bend / max(uSize.x, 1.0), 0.0);
        c0 = vec3(
          texture2D(uAtlas, atlasUV(uv0 + fr, im0)).r,
          texture2D(uAtlas, atlasUV(uv0, im0)).g,
          texture2D(uAtlas, atlasUV(uv0 - fr, im0)).b
        );
        c1 = vec3(
          texture2D(uAtlas, atlasUV(uv1 + fr, im1)).r,
          texture2D(uAtlas, atlasUV(uv1, im1)).g,
          texture2D(uAtlas, atlasUV(uv1 - fr, im1)).b
        );
      } else {
        c0 = texture2D(uAtlas, atlasUV(uv0, im0)).rgb;
        c1 = texture2D(uAtlas, atlasUV(uv1, im1)).rgb;
      }

      col = mix(c1, c0, nearest);
    }

    // Cards standing off the one being pointed at are turned down, so the
    // hovered card reads as the lit one. Untextured, uColor is already almost
    // black and there is nothing here to see \u2014 which is fine, that mode exists
    // to read the goo's silhouette.
    col *= mix(dm1, dm0, nearest);

    // A touch of lift where the lip is steepest, so the band reads as a
    // surface catching light rather than only a warp.
    col += bend * uSheen;

    // Composite both particle phases behind the photographic surface. This
    // keeps antialiased card edges clean instead of tinting them like an
    // outline, and prevents the field from following the completed ring.
    if (cardParticles.a > 0.001) {
      float combined = alpha + cardParticles.a * (1.0 - alpha);
      col = (col * alpha +
             cardParticles.rgb * cardParticles.a * (1.0 - alpha)) /
            max(combined, 0.0001);
      alpha = combined;
    }
    if (focusParticles.a > 0.001) {
      float combined = alpha + focusParticles.a * (1.0 - alpha);
      col = (col * alpha +
             focusParticles.rgb * focusParticles.a * (1.0 - alpha)) /
            max(combined, 0.0001);
      alpha = combined;
    }
    if (intro.a > 0.001) {
      float combined = alpha + intro.a * (1.0 - alpha);
      col = (col * alpha + intro.rgb * intro.a * (1.0 - alpha)) /
            max(combined, 0.0001);
      alpha = combined;
    }
    // --- the tag -------------------------------------------------------------
    if (ta > 0.001) {
        // Where the ring does not reach, the page is what shows through the
        // glass, so the label has something real to read there too.
        vec3 under = mix(uPage, col, alpha);
        vec3 glass = mix(under, vec3(1.0), uTagQ.x);

        // Rim: lit where it faces the light, dark where it turns away. Signing
        // it is what gives an edge that reads as thickness rather than as an
        // outline drawn on.
        float band = clamp(1.0 + dTag / max(uTagP.z, 1.0), 0.0, 1.0);
        glass += band * band * uTagQ.y *
                 dot(tagNormal(ps), vec2(-0.7071, 0.7071));

        // The label. Pure black or pure white, decided per pixel from what that
        // pixel is sitting on, so a glyph crossing a light edge onto a dark one
        // changes colour halfway across. A blend cannot do this \u2014 inverting a
        // mid grey returns a mid grey \u2014 and picking one colour for the whole
        // label cannot either.
        vec2 tuv = (ps - uTag.xy) / (uTagP.xy * 2.0 * abs(uTag.zw)) + 0.5;
        float m = texture2D(uTagTex, clamp(tuv, 0.0, 1.0)).a;
        float l = dot(glass, vec3(0.2126, 0.7152, 0.0722));
        // Narrow, not hard: a step here would alias along the boundary.
        glass = mix(glass, vec3(1.0 - smoothstep(0.46, 0.54, l)), m);

      col = mix(col, glass, ta);
      alpha = max(alpha, ta);
    }

    // Written straight through. The atlas is tagged NoColorSpace so sampling
    // returns the authored sRGB values, and this shader adds no output
    // encoding of its own \u2014 decoding on read without encoding on write is
    // what darkens everything.
    gl_FragColor = vec4(col, alpha);
  }
`;var LO=[{href:"index.html",cn:"\u9996\u9875",en:"INDEX"},{href:"film.html",cn:"\u5F71\u50CF",en:"FILM"},{href:"cgi.html",cn:"\u4E09\u7EF4",en:"CGI"},{href:"ai.html",cn:"AI",en:"AI"},{href:"photo.html",cn:"\u6444\u5F71",en:"PHOTO"},{href:"graphic.html",cn:"\u5E73\u9762",en:"GRAPHIC"},{href:"about.html",cn:"\u5173\u4E8E",en:"INFO"}],Bn={film:{no:"01",cn:"\u5F71\u50CF",en:"FILM",lineCn:"\u5BFC\u6F14\u4E0E\u6444\u5F71\u4F5C\u54C1\uFF0C\u4ECE\u4E8C\u5341\u5206\u949F\u7684\u957F\u7247\u5230\u4E09\u5341\u79D2\u7684\u5E7F\u544A\u3002",lineEn:"Direction and cinematography \u2014 from a twenty-minute film to a thirty-second spot."},cgi:{no:"02",cn:"\u4E09\u7EF4",en:"CGI",lineCn:"\u5EFA\u6A21\u3001\u6750\u8D28\u4E0E\u6E32\u67D3\uFF1A\u786C\u8868\u9762\u7684\u79E9\u5E8F\u4E0E\u8868\u9762\u7684\u5076\u7136\u3002",lineEn:"Modeling, shading and rendering \u2014 the order of hard surfaces, the accident of a surface."},ai:{no:"03",cn:"AI",en:"AI",lineCn:"\u751F\u6210\u4E0E\u5B9E\u9A8C\uFF1A\u628A\u63D0\u793A\u8BCD\u5F53\u6210\u6444\u5F71\u673A\uFF0C\u628A\u566A\u70B9\u5F53\u6210\u5E95\u7247\u3002",lineEn:"Generation as practice \u2014 prompts as camera, noise as film stock."},photo:{no:"04",cn:"\u6444\u5F71",en:"PHOTO",lineCn:"\u66AE\u8272\u4E91\u5C42\uFF0C\u4E00\u7EC4\u516B\u5E45\u3002",lineEn:"Dusk clouds \u2014 a series in eight frames."},graphic:{no:"05",cn:"\u5E73\u9762",en:"GRAPHIC",lineCn:"\u4EE5\u79D1\u5B66\u671F\u520A\u7684\u8BED\u6CD5\u91CD\u6392\u81EA\u7136\u5F71\u50CF\uFF0C\u4EE5\u53CA\u4E00\u672C\u4E66\u7684\u5C01\u9762\u3002",lineEn:"Nature photographs re-set in the grammar of a scientific journal, and one book cover."}},ws=e=>`media/video/${e}.mp4`,fn=e=>`media/video/${e}.jpg`,ye=e=>`media/img/${e}`,Wo=[{id:"jinghua",cat:"film",no:"01",span:12,ratio:"16 / 9",featured:!0,titleCn:"\u955C\u82B1",titleEn:"JINGHUA",roleCn:"\u6444\u5F71",roleEn:"Cinematography",spec:"1920 \xD7 1080 \xB7 24P",dur:"20:00",noteCn:"\u957F\u7247\u3002\u821E\u53F0\u3001\u526A\u7EB8\u4E0E\u7A97\u5F71\uFF0C\u4E00\u5C42\u5957\u4E00\u5C42\u7684\u5149\u3002",noteEn:"A long-form piece \u2014 stage, paper-cut shadows and window light, one layer inside another.",kind:"video",thumb:fn("jinghua-02"),stills:6,chapters:[{label:"\u7B2C\u4E00\u6BB5",en:"PASSAGE I",src:ws("jinghua-01"),poster:fn("jinghua-01")},{label:"\u7B2C\u4E8C\u6BB5",en:"PASSAGE II",src:ws("jinghua-02"),poster:fn("jinghua-02")},{label:"\u7B2C\u4E09\u6BB5",en:"PASSAGE III",src:ws("jinghua-03"),poster:fn("jinghua-03")}],excerptNote:"\u539F\u7247 20 \u5206\u949F\uFF0C\u6B64\u5904\u4E3A\u4E09\u6BB5\u5404\u7EA6\u4E00\u5206\u949F\u7684\u8282\u9009\u3002",excerptNoteEn:"The original runs 20:00; three passages of roughly one minute each are shown here."},{id:"huntianzhi",cat:"film",no:"02",span:7,ratio:"16 / 9",titleCn:"\u6D51\u5929\u5FD7",titleEn:"HUNTIAN ZHI",roleCn:"\u5BFC\u6F14 \xB7 \u6444\u5F71",roleEn:"Direction \xB7 Cinematography",spec:"960 \xD7 544",dur:"09:42",noteCn:"\u53E4\u88C5\u591C\u620F\uFF0C\u5927\u90E8\u5206\u753B\u9762\u53EA\u6709\u4E00\u652F\u5149\u6E90\u3002",noteEn:"A period piece shot at night \u2014 most frames carry a single source.",kind:"video",thumb:fn("huntianzhi"),stills:5,src:ws("huntianzhi"),poster:fn("huntianzhi")},{id:"geshuzhiguang",cat:"film",no:"03",span:5,ratio:"16 / 9",titleCn:"\u683C\u672F\u4E4B\u5149",titleEn:"GESHU ZHIGUANG",roleCn:"\u5BFC\u6F14 \xB7 \u6444\u5F71",roleEn:"Direction \xB7 Cinematography",spec:"1920 \xD7 1080 \xB7 24P",dur:"07:15",noteCn:"\u5E74\u4EE3\u620F\u5BA4\u5185\u666F\uFF0C\u70DB\u5149\u4E0E\u7A97\u68C2\u3002",noteEn:"A period interior \u2014 candlelight and lattice windows.",kind:"video",thumb:fn("geshuzhiguang"),stills:6,src:ws("geshuzhiguang"),poster:fn("geshuzhiguang")},{id:"honor-band-10",cat:"film",no:"04",span:5,ratio:"16 / 9",titleCn:"\u8363\u8000\u624B\u73AF 10",titleEn:"HONOR BAND 10",roleCn:"\u5BFC\u6F14 \xB7 \u6444\u5F71",roleEn:"Direction \xB7 Cinematography",spec:"3840 \xD7 2160 \xB7 50P",dur:"01:27",noteCn:"\u4EA7\u54C1\u8BB2\u89E3\u7247\uFF0C\u684C\u9762\u573A\u666F\u4E0E\u539F\u7247\u540C\u8272\u5F69\u3002",noteEn:"A product walkthrough, graded to sit with the original footage.",kind:"video",thumb:fn("honor-band-10"),stills:5,src:ws("honor-band-10"),poster:fn("honor-band-10")},{id:"chiwei",cat:"film",no:"05",span:7,ratio:"16 / 9",titleCn:"\u8D64\u5C3E",titleEn:"CHIWEI",roleCn:"\u6444\u5F71",roleEn:"Cinematography",spec:"1280 \xD7 720 \xB7 30P",dur:"00:35",noteCn:"\u4E09\u5341\u79D2\u5E7F\u544A\uFF0C\u673A\u4F4D\u5C11\uFF0C\u9760\u8FD0\u52A8\u5B8C\u6210\u8282\u594F\u3002",noteEn:"A thirty-second spot \u2014 few setups, rhythm carried by movement.",kind:"video",thumb:fn("chiwei"),stills:4,src:ws("chiwei"),poster:fn("chiwei")},{id:"the-gravity",cat:"ai",no:"01",span:7,ratio:"21 / 9",titleCn:"\u91CD\u529B",titleEn:"THE GRAVITY",roleCn:"\u5236\u4F5C",roleEn:"Production",spec:"1680 \xD7 720 \xB7 25P",dur:"01:00",noteCn:"AI \u751F\u6210\u7684\u77ED\u7247\uFF0C\u5168\u7247\u7531\u9759\u5E27\u5E8F\u5217\u63A8\u6F14\u3002",noteEn:"An AI-generated short, built out from a sequence of stills.",kind:"video",thumb:fn("the-gravity"),stills:5,src:ws("the-gravity"),poster:fn("the-gravity")},{id:"ai-study-01",cat:"ai",no:"02",span:5,ratio:"21 / 9",titleCn:"AI \u6D4B\u8BD5 01",titleEn:"AI STUDY 01",roleCn:"\u751F\u6210 \xB7 \u526A\u8F91",roleEn:"Generation \xB7 Edit",spec:"2206 \xD7 946 \xB7 60P",dur:"00:16",noteCn:"\u8FD0\u955C\u4E0E\u6750\u8D28\u7684\u53EF\u884C\u6027\u8BD5\u9A8C\u3002",noteEn:"A feasibility test for camera movement and material response.",kind:"video",thumb:fn("ai-study-01"),stills:3,src:ws("ai-study-01"),poster:fn("ai-study-01")},{id:"ai-study-02",cat:"ai",no:"03",span:12,ratio:"21 / 9",titleCn:"AI \u6D4B\u8BD5 02",titleEn:"AI STUDY 02",roleCn:"\u751F\u6210 \xB7 \u526A\u8F91",roleEn:"Generation \xB7 Edit",spec:"2206 \xD7 946 \xB7 60P",dur:"00:18",noteCn:"\u540C\u4E00\u5957\u63D0\u793A\u8BCD\uFF0C\u5728\u53E6\u4E00\u79CD\u66DD\u5149\u4E0B\u7684\u7ED3\u679C\u3002",noteEn:"The same prompt set, re-exposed.",kind:"video",thumb:fn("ai-study-02"),stills:3,src:ws("ai-study-02"),poster:fn("ai-study-02")},{id:"showreel-3d",cat:"cgi",no:"01",span:12,ratio:"16 / 9",featured:!0,titleCn:"\u4E09\u7EF4\u4F5C\u54C1\u5C55\u793A",titleEn:"3D SHOWREEL",roleCn:"\u5236\u4F5C\u4EBA",roleEn:"Producer",spec:"1920 \xD7 1080 \xB7 30P",dur:"00:08",noteCn:"\u516B\u79D2\uFF0C\u4E00\u4E2A\u955C\u5934\uFF0C\u6750\u8D28\u4E0E\u5149\u7684\u77ED\u8DD1\u3002",noteEn:"Eight seconds, one shot \u2014 a sprint through material and light.",kind:"video",thumb:fn("showreel-3d"),stills:3,src:ws("showreel-3d"),poster:fn("showreel-3d"),loop:!0},{id:"crate",cat:"cgi",no:"02",span:7,ratio:"16 / 9",titleCn:"\u5468\u8F6C\u7BB1",titleEn:"CRATE",roleCn:"\u5EFA\u6A21 \xB7 \u6E32\u67D3",roleEn:"Modeling \xB7 Rendering",spec:"1920 \xD7 1080",noteCn:"\u4EA7\u54C1\u7EA7\u786C\u8868\u9762\uFF0C\u6807\u7B7E\u4E0E\u78E8\u635F\u90FD\u662F\u505A\u51FA\u6765\u7684\u3002",noteEn:"Product-grade hard surface \u2014 stickers and scuffs, all modelled.",kind:"image",thumb:ye("cgi-crate.jpg"),image:ye("cgi-crate.jpg")},{id:"sphere",cat:"cgi",no:"03",span:7,ratio:"1920 / 720",titleCn:"\u7403\u4F53\u5355\u5143",titleEn:"SPHERICAL UNITS",roleCn:"\u5EFA\u6A21 \xB7 \u6E32\u67D3",roleEn:"Modeling \xB7 Rendering",spec:"1920 \xD7 720",noteCn:"\u540C\u4E00\u5957\u96F6\u4EF6\u7684\u65E0\u9650\u590D\u5236\uFF0C\u9760\u5149\u533A\u5206\u5F7C\u6B64\u3002",noteEn:"One part repeated until only light tells them apart.",kind:"image",thumb:ye("cgi-sphere.jpg"),image:ye("cgi-sphere.jpg")},{id:"water",cat:"cgi",no:"04",span:5,ratio:"1920 / 804",titleCn:"\u6C34\u9762",titleEn:"WATER SURFACE",roleCn:"\u6750\u8D28 \xB7 \u6E32\u67D3",roleEn:"Shading \xB7 Rendering",spec:"1920 \xD7 804",noteCn:"\u8584\u819C\u5E72\u6D89\u4E0E\u7C97\u7CD9\u5EA6\u7684\u5BF9\u6297\u3002",noteEn:"Thin-film interference against roughness.",kind:"image",thumb:ye("cgi-water.jpg"),image:ye("cgi-water.jpg")},{id:"clouds",cat:"photo",no:"01",span:12,ratio:"16 / 9",featured:!0,titleCn:"\u66AE\u8272\u4E91\u5C42",titleEn:"DUSK CLOUDS",roleCn:"\u6444\u5F71",roleEn:"Photography",spec:"8 \u5E45 \xB7 \u6A2A\u5E45\u4E0E\u7AD6\u5E45",dur:"",noteCn:"\u540C\u4E00\u7247\u5929\uFF0C\u4ECE\u4EAE\u5230\u6697\uFF0C\u516B\u6B21\u3002",noteEn:"One sky, eight times, from light to dark.",kind:"gallery",thumb:ye("clouds-01.jpg"),images:[{src:ye("clouds-01.jpg"),thumb:ye("thumbs/clouds-01.jpg"),w:2400,h:1800},{src:ye("clouds-02.jpg"),thumb:ye("thumbs/clouds-02.jpg"),w:2400,h:3200},{src:ye("clouds-03.jpg"),thumb:ye("thumbs/clouds-03.jpg"),w:2400,h:3200},{src:ye("clouds-04.jpg"),thumb:ye("thumbs/clouds-04.jpg"),w:2400,h:3200},{src:ye("clouds-05.jpg"),thumb:ye("thumbs/clouds-05.jpg"),w:2400,h:1800},{src:ye("clouds-06.jpg"),thumb:ye("thumbs/clouds-06.jpg"),w:2400,h:1800},{src:ye("clouds-07.jpg"),thumb:ye("thumbs/clouds-07.jpg"),w:2400,h:3200},{src:ye("clouds-08.jpg"),thumb:ye("thumbs/clouds-08.jpg"),w:1120,h:1494}]},{id:"may17",cat:"graphic",no:"01",span:12,ratio:"2600 / 1108",featured:!0,titleCn:"\u4E94\u6708\u5341\u4E03\u65E5",titleEn:"MAY 17TH",roleCn:"\u7248\u5F0F\u8BBE\u8BA1",roleEn:"Editorial Design",spec:"3 \u5E45 \xB7 2600 px \u5BBD",dur:"",noteCn:"\u628A\u81EA\u7136\u5F71\u50CF\u5F53\u6210\u8BBA\u6587\u6765\u6392\u7248\uFF1A\u56FE\u6CE8\u3001\u5F15\u6587\u3001\u7F16\u53F7\uFF0C\u4E00\u6837\u4E0D\u5C11\u3002",noteEn:"Nature photographs set as a paper \u2014 captions, citations, figure numbers and all.",kind:"gallery",thumb:ye("may17-01.jpg"),images:[{src:ye("may17-01.jpg"),w:2600,h:1108},{src:ye("may17-02.jpg"),w:2534,h:1080},{src:ye("may17-03.jpg"),w:2534,h:1080}]},{id:"malignant",cat:"graphic",no:"02",span:5,ratio:"3 / 4",titleCn:"\u6076\u6027\u91CA\u653E",titleEn:"MALIGNANT RELEASE",roleCn:"\u4E66\u5C01\u8BBE\u8BA1",roleEn:"Book Cover",spec:"600 \xD7 800",noteCn:"\u534A\u8C03\u7F51\u70B9\u3001\u73AF\u5F62\u7ED3\u6784\u4E0E\u4E00\u53EA\u773C\u775B\u3002",noteEn:"Halftone dots, a mandala and an eye.",kind:"image",thumb:ye("book-malignant.jpg"),image:ye("book-malignant.jpg")}],Wz=Object.fromEntries(Wo.map(e=>[e.id,e]));var PO={film:["\u52A8\u6001\u5F71\u50CF","FILM"],cgi:["\u6570\u5B57\u9020\u7269","CGI"],ai:["\u751F\u6210\u5B9E\u9A8C","GENERATIVE"],photo:["\u9759\u5E27\u6444\u5F71","PHOTOGRAPHY"],graphic:["\u89C6\u89C9\u7F16\u6392","GRAPHIC"]};for(let[e,[t,n]]of Object.entries(PO)){Bn[e].cn=t,Bn[e].en=n;let i=LO.find(s=>s.href===e+".html");i.cn=t,i.en=n}var OO={jinghua:["\u5267\u60C5\u5F71\u50CF \xB7 \u6444\u5F71\u4F5C\u54C1\uFF0C\u5206\u4E09\u6BB5\u8282\u9009\u5448\u73B0\u3002","Cinematography. Presented in three excerpts."],huntianzhi:["\u5267\u60C5\u5F71\u50CF \xB7 \u5BFC\u6F14\u4E0E\u6444\u5F71\u4F5C\u54C1\u3002","Direction and cinematography."],geshuzhiguang:["\u5267\u60C5\u5F71\u50CF \xB7 \u5BFC\u6F14\u4E0E\u6444\u5F71\u4F5C\u54C1\u3002","Direction and cinematography."],"honor-band-10":["\u4EA7\u54C1\u5F71\u50CF \xB7 \u5BFC\u6F14\u4E0E\u6444\u5F71\u4F5C\u54C1\u3002","Product film. Direction and cinematography."],chiwei:["\u5E7F\u544A\u5F71\u50CF \xB7 \u6444\u5F71\u4F5C\u54C1\u3002","Commercial film. Cinematography."],"the-gravity":["AI \u77ED\u7247 \xB7 \u751F\u6210\u5F71\u50CF\u63A2\u7D22\u3002","An AI-generated short film."],"ai-study-01":["\u751F\u6210\u5F71\u50CF\u4E60\u4F5C\u4E4B\u4E00\u3002","Generative moving-image study 01."],"ai-study-02":["\u751F\u6210\u5F71\u50CF\u4E60\u4F5C\u4E4B\u4E8C\u3002","Generative moving-image study 02."],"showreel-3d":["\u4E09\u7EF4\u52A8\u753B\u7247\u6BB5\u3002","A short CGI sequence."],crate:["\u786C\u8868\u9762\u5EFA\u6A21\u4E0E\u6750\u8D28\u6E32\u67D3\u3002","Hard-surface modeling and material rendering."],sphere:["\u91CD\u590D\u7ED3\u6784\u7684\u5EFA\u6A21\u4E0E\u6E32\u67D3\u3002","Modeling and rendering repeated forms."],water:["\u6C34\u9762\u6750\u8D28\u4E0E\u5149\u5F71\u6E32\u67D3\u3002","A study in water, material and light."],clouds:["\u516B\u5E45\u5929\u7A7A\u6444\u5F71\u3002","Eight photographs of the sky."],may17:["\u6444\u5F71\u4E0E\u7248\u5F0F\u7684\u4E09\u5E45\u7F16\u6392\u3002","Three compositions of photography and typography."],malignant:["\u4E66\u7C4D\u5C01\u9762\u8BBE\u8BA1\u3002","Book cover design."]};for(let e of Wo)e.originalTitleCn=e.titleCn,[e.noteCn,e.noteEn]=OO[e.id];var HA={"ai-study-01":["\u751F\u6210\u4E60\u4F5C 01","GENERATIVE STUDY 01"],"ai-study-02":["\u751F\u6210\u4E60\u4F5C 02","GENERATIVE STUDY 02"],"showreel-3d":["\u4E09\u7EF4\u5F71\u50CF\u4E60\u4F5C","CGI MOTION STUDY"],crate:["\u5BB9\u5668\u7814\u7A76","CONTAINER STUDY"],sphere:["\u9635\u5217","ARRAY"],water:["\u6D41\u9762","FLUID SURFACE"],clouds:["\u66AE\u8272\u5207\u7247","DUSK FRAGMENTS"]};for(let e of Wo)HA[e.id]&&([e.titleCn,e.titleEn]=HA[e.id]);Bn.film.lineCn="\u5267\u60C5\u3001\u5E7F\u544A\u4E0E\u4EA7\u54C1\u5F71\u50CF\u3002";Bn.film.lineEn="Narrative, commercial and product films.";Bn.cgi.lineCn="\u5EFA\u6A21\u3001\u6750\u8D28\u4E0E\u4E09\u7EF4\u5F71\u50CF\u3002";Bn.cgi.lineEn="Modeling, materials and CGI.";Bn.ai.lineCn="AI \u77ED\u7247\u4E0E\u751F\u6210\u5F71\u50CF\u4E60\u4F5C\u3002";Bn.ai.lineEn="AI shorts and generative moving-image studies.";Bn.photo.lineCn="\u516B\u5E45\u5929\u7A7A\u6444\u5F71\u3002";Bn.photo.lineEn="Eight photographs of the sky.";Bn.graphic.lineCn="\u6444\u5F71\u7F16\u6392\u4E0E\u4E66\u7C4D\u5C01\u9762\u3002";Bn.graphic.lineEn="Photographic compositions and book cover design.";var Bh=Object.fromEntries(Wo.map(e=>[e.id,e])),ka=e=>{let t=Bh[e];return{file:t.thumb,name:t.titleCn,type:Bn[t.cat].cn,year:t.roleCn,href:"work/"+t.id+".html",id:t.id,en:t.titleEn}},GA=["water","crate","sphere"].map(e=>Bh[e]),kA=Bh.clouds.images.map(e=>e.src),XA=[...Bh.may17.images.map(e=>e.src),Bh.malignant.image],xn=[{id:"cgi-images",file:GA[0].thumb,name:"\u4E09\u7EF4\u5EFA\u6A21",en:"3D STUDIES",type:"\u6570\u5B57\u9020\u7269",year:"3 \u5E45\u56FE\u7247",href:"cgi-images.html",stack:GA.map(e=>e.thumb),count:3},ka("jinghua"),ka("the-gravity"),{id:"photography",file:kA[0],name:"\u9759\u5E27\u6444\u5F71",en:"PHOTOGRAPHY",type:"\u66AE\u8272\u5207\u7247",year:"8 \u5E45\u56FE\u7247",href:"photo.html",stack:kA.slice(0,4),count:8},{id:"graphic",file:XA[0],name:"\u89C6\u89C9\u7F16\u6392",en:"GRAPHIC STUDIES",type:"\u7F16\u6392\u4E0E\u4E66\u5C01",year:"4 \u5E45\u56FE\u7247",href:"graphic.html",stack:XA,count:4},ka("huntianzhi"),ka("geshuzhiguang"),ka("showreel-3d"),ka("honor-band-10"),ka("chiwei"),ka("ai-study-01"),ka("ai-study-02")],Vm=xn.map(e=>e.file);var Lc=512,Fh=Math.round(Lc/1.5),IO=(e,t)=>new Promise((n,i)=>{let s=new Image;t&&(s.fetchPriority=t),s.onload=()=>n(s),s.onerror=()=>i(new Error(`failed to load ${e}`)),s.src=e});function WA(e=Vm,t){let n=Math.ceil(Math.sqrt(e.length)),i=Math.ceil(e.length/n),s=document.createElement("canvas");s.width=n*Lc,s.height=i*Fh;let a=s.getContext("2d"),r=new bs(s);r.flipY=!1,r.colorSpace=gn,r.wrapS=Li,r.wrapT=Li,r.minFilter=Zs,r.magFilter=Te,r.generateMipmaps=!0;let o=(f,p)=>{let _=p%n*Lc,g=Math.floor(p/n)*Fh,m=Math.max(Lc/f.width,Fh/f.height),v=f.width*m,S=f.height*m;a.save(),a.beginPath(),a.rect(_,g,Lc,Fh),a.clip(),a.drawImage(f,_+(Lc-v)/2,g+(Fh-S)/2,v,S),a.restore()},l=0,c=()=>t?.(l/e.length),u=(f,p)=>IO(e[f],p).then(_=>o(_,f)).catch(_=>console.warn("[atlas]",_.message)).finally(()=>{l++,c()}),d=u(0,"high").then(()=>{r.needsUpdate=!0}),h=Promise.all([d,...e.slice(1).map((f,p)=>u(p+1,"low"))]).then(()=>{r.needsUpdate=!0});return c(),{texture:r,grid:[n,i],count:e.length,first:d,ready:h}}var BO=["left","right"],qA=2,Pc=e=>e?.firstElementChild?.children;function YA(e,t,n){e&&(t>=1?(e.style.filter="none",e.style.opacity="1"):t<=0?(e.style.filter="none",e.style.opacity="0"):(e.style.filter=`blur(${Math.min(n/t-n,100)}px)`,e.style.opacity=`${Math.pow(t,.4)}`))}function ZA(e,t,n){let i={t:1},s=["",""],a=[!1,!1],r=()=>{let l=t[e];if(!l)return;let c=Pc(l.layers[0]),u=Pc(l.layers[1]),d=Pc(l.plain),h=i.t;for(let f=0;f<qA;f++)a[f]?(YA(c?.[f],1-h,n.nameBlur),YA(u?.[f],h,n.nameBlur),d?.[f]&&(d[f].style.opacity="0")):(c?.[f]&&(c[f].style.opacity="0"),u?.[f]&&(u[f].style.opacity="0"),d?.[f]&&(d[f].style.opacity="1"));l.goo&&(l.goo.style.filter=h>=1?"none":`url(#name-goo) blur(${n.nameSoften}px)`)};return{m:i,set:l=>{let c=t[e];if(!c?.layers[0]||!c.layers[1]||!c.plain)return;Ue.killTweensOf(i),i.t=1,r();let u=[l[0]??"",l[1]??""];a=[u[0]!==s[0],u[1]!==s[1]];let d=Pc(c.layers[0]),h=Pc(c.layers[1]),f=Pc(c.plain);for(let p=0;p<qA;p++)d?.[p]&&(d[p].textContent=s[p]),h?.[p]&&(h[p].textContent=u[p]),f?.[p]&&(f[p].textContent=u[p]);if(s=u,!a[0]&&!a[1]){i.t=1,r();return}i.t=0,r(),Ue.to(i,{t:1,duration:n.nameMorphTime,ease:n.nameEase,onUpdate:r})}}}function JA(e,t){let{groups:n,list:i,loader:s,cut:a,live:r}=e,o=ZA("left",n,t),l=ZA("right",n,t),c=()=>{a?.setAttribute("values",`1 0 0 0 0
       0 1 0 0 0
       0 0 1 0 0
       0 0 0 ${t.nameEdge} ${-t.nameEdge*t.nameCut}`)};return{show:f=>{let p=xn[f];p&&(o.set([String(f+1).padStart(2,"0")+" / "+p.name,p.en]),l.set([p.type,p.year]),r&&(r.textContent=`${p.name}. ${p.type}, ${p.year}.`))},style:({textK:f,tight:p,viewW:_})=>{let g=t.nameSize*f*(p?t.tightName:1),m=`${g}vw`,v=`${t.idxSize*f}vw`,S=`"${t.nameFont}", ui-sans-serif, system-ui, sans-serif`,y=`"${t.idxFont}", ui-sans-serif, system-ui, sans-serif`,E=`${t.nameWeight}`,A=`${t.idxWeight}`,M=g*3;for(let x of BO){let T=n[x];if(!T?.box)continue;let R=x==="right",D=p&&!R;if(p&&R){T.box.style.display="none";continue}if(T.box.style.display="",T.box.style.width=`${D?t.tightMetaWidth:t.metaWidth}vw`,T.box.style.height=`${M}vw`,D){let U=M*_/100,F=g*_/100;T.box.style.top="auto",T.box.style.left="auto",T.box.style.right=`${t.tightNameRight}px`,T.box.style.bottom=`${t.tightNameBottom+F*.5-U*.5}px`,T.box.style.transform="none"}else T.box.style.top="",T.box.style.bottom="",T.box.style.transform="",T.box.style.left=R?"auto":`${t.metaLeft}vw`,T.box.style.right=R?`${t.metaRight}vw`:"auto";for(let U of[...T.layers,T.plain]){if(!U)continue;U.style.justifyContent=D||R?"flex-end":"flex-start";let F=U.firstElementChild;F.style.gap=`${R?t.metaGapR:t.metaGapL}vw`;let[q,O]=F.children;q.style.display=D?"none":"",q.style.fontFamily=R?S:y,q.style.fontSize=R?m:v,q.style.fontWeight=R?E:A,O.style.fontFamily=R?y:S,O.style.fontSize=R?v:m,O.style.fontWeight=R?A:E}}i&&(i.style.fontSize=`${t.listSize*f}vw`),s&&(s.style.bottom=`${t.loaderBottom}vh`,s.style.fontFamily=y,s.style.fontSize=v,s.style.fontWeight=A),c()},setThreshold:c,dispose:()=>{Ue.killTweensOf(o.m),Ue.killTweensOf(l.m)}}}var KA=`
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,jA=`
  precision highp float;

  varying vec2 vUv;

  uniform sampler2D uTex;
  uniform float uReveal;
  uniform vec3  uColor;
  uniform float uOpacity;

  void main() {
    float gy = vUv.y + 1.0 - uReveal;
    if (gy > 1.0 || gy < 0.0) discard;

    float a = texture2D(uTex, vec2(vUv.x, gy)).a;
    if (a <= 0.001) discard;

    gl_FragColor = vec4(uColor, a * uOpacity);
  }
`;function QA(e,t){let n=[],i=[],s=()=>{for(let r of[...e.children])e.remove(r),r.geometry.dispose(),r.material.uniforms.uTex.value?.dispose(),r.material.dispose();n=[],i=[]};return{build:()=>{s();let r=t.textSize,o=Math.min(window.devicePixelRatio,2)*2,l=`${t.textWeight} ${r}px "${t.textFont}", ui-sans-serif, system-ui, sans-serif`,c=document.createElement("canvas").getContext("2d");c.font=l;let u=[...t.text],d=u.map(m=>c.measureText(m).width),h=t.textTracking*r,f=d.reduce((m,v)=>m+v,0)+h*(u.length-1),p=r*.25,_=r*1.3+p*2,g=-f/2;u.forEach((m,v)=>{let S=d[v];if(m.trim()){let y=S+p*2,E=document.createElement("canvas");E.width=Math.max(1,Math.ceil(y*o)),E.height=Math.max(1,Math.ceil(_*o));let A=E.getContext("2d");A.scale(o,o),A.font=l,A.textBaseline="alphabetic",A.fillStyle="#000",A.fillText(m,p,p+r);let M=new bs(E);M.colorSpace=gn,M.minFilter=Te,M.magFilter=Te,M.generateMipmaps=!1;let x=new mn({vertexShader:KA,fragmentShader:jA,uniforms:{uTex:{value:M},uReveal:{value:0},uColor:{value:new jt(t.textColor)},uOpacity:{value:1}},transparent:!0,depthTest:!1,depthWrite:!1}),T=new wn(new Ms(1,1),x);T.scale.set(y,_,1),T.position.set(g+S/2,0,0),T.renderOrder=0,e.add(T),n.push(x.uniforms.uReveal),i.push(x.uniforms.uOpacity)}g+=S+h})},dispose:s,get chars(){return n},get fades(){return i}}}var Hm=104,Oc=40;function $A(e,t){let n={sx:.5,sy:0},i=new Image,s=!1,a=null;return{box:n,build:()=>{let u=Math.min(window.devicePixelRatio,2)*2,d=document.createElement("canvas");d.width=Math.ceil(Hm*u),d.height=Math.ceil(Oc*u);let h=d.getContext("2d");h.scale(u,u),h.font=`${e.tagWeight} ${e.tagSize}px "${e.textFont}", ui-sans-serif, system-ui, sans-serif`,h.textBaseline="middle",h.fillStyle="#fff";let f=h.measureText(e.tagText).width,p=e.tagArrow+e.tagGap+f,_=(Hm-p)*.5;if(h.fillText(e.tagText,_+e.tagArrow+e.tagGap,Oc*.5),s){let g=(Oc-e.tagArrow)*.5;h.drawImage(i,_,g,e.tagArrow,e.tagArrow)}a?.dispose(),a=new bs(d),a.colorSpace=gn,a.minFilter=Te,a.magFilter=Te,a.generateMipmaps=!1,t.uTagTex.value=a},show:u=>{Ue.killTweensOf(n),u?(Ue.to(n,{sx:1,duration:.62,ease:"elastic.out(1, 0.5)"}),Ue.to(n,{sy:1,duration:.74,ease:"elastic.out(1, 0.42)"})):Ue.to(n,{sx:.5,sy:0,duration:.28,ease:"power3.in"})},load:u=>{i.onload=()=>{s=!0,u?.()},i.src="/arrow-top-right-svgrepo-com.svg"},dispose:()=>{Ue.killTweensOf(n),a?.dispose()}}}var $y=".:+x*#@";function tw(){let t=document.createElement("canvas");t.width=128*$y.length,t.height=128;let n=t.getContext("2d");n.clearRect(0,0,t.width,t.height),n.fillStyle="#ffffff",n.font="700 84px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",n.textAlign="center",n.textBaseline="middle";for(let s=0;s<$y.length;s++)n.fillText($y[s],s*128+128*.5,128*.51);let i=new bs(t);return i.colorSpace=gn,i.minFilter=Te,i.magFilter=Te,i.generateMipmaps=!1,i.needsUpdate=!0,i}function ew(e,t,n){let i=new Ms(1,1),s=new Map,a=new uh,r=!1,o=c=>{if(!s.has(c)){let u=a.load(c,()=>{r&&u.dispose()});u.colorSpace=gn,s.set(c,u)}return s.get(c)},l=Array.from({length:n},()=>Array.from({length:3},(c,u)=>{let d=new mn({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{image:{value:null},imageRatio:{value:1.5},opacity:{value:0},brightness:{value:1}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`precision mediump float;
      varying vec2 vUv;uniform sampler2D image;uniform float imageRatio;uniform float opacity;uniform float brightness;
      void main(){
        vec2 q=abs((vUv-.5)*vec2(1.5,1.0))-vec2(.70,.45);
        float d=length(max(q,0.0))+min(max(q.x,q.y),0.0)-.05;
        float alpha=(1.0-smoothstep(-.003,.003,d))*opacity;
        vec2 uv=vUv;
        if(imageRatio>1.5)uv.x=(uv.x-.5)*1.5/imageRatio+.5;
        else uv.y=(uv.y-.5)*imageRatio/1.5+.5;
        vec3 c=texture2D(image,uv).rgb*brightness;
        float edge=smoothstep(-.009,-.002,d);
        gl_FragColor=vec4(mix(c,vec3(.88),edge*.6),alpha);
      }`}),h=new wn(i,d);return h.visible=!1,h.renderOrder=8-u,h.frustumCulled=!1,e.add(h),h}));return t.forEach(c=>c.stack?.slice(1,4).forEach(o)),{update(c,u,d,h,f,p,_,g,m){let S=t[u]?.stack?.slice(1,4)||[];l[c].forEach((y,E)=>{let A=S[E];if(y.visible=!!A&&g>.75&&f.x>.9&&f.y>.9,!y.visible)return;let M=E+1,x=o(A);y.material.uniforms.image.value=x;let T=x.image;y.material.uniforms.imageRatio.value=T?T.width/T.height:1.5,y.material.uniforms.opacity.value=Math.min(1,(g-.75)*4),y.material.uniforms.brightness.value=1-E*.025;let R=Iv.smoothstep(_,0,.7),D=M*(9+R*22)*m,U=M*(11+R*18)*m;y.position.set(d.x+Math.cos(h)*D-Math.sin(h)*U,d.y+Math.sin(h)*D+Math.cos(h)*U,0),y.rotation.z=h+M*(.017+R*.032),y.scale.set(p.x*f.x*(1-M*.012),p.y*f.y*(1-M*.012),1)})},dispose(){r=!0,l.flat().forEach(c=>{e.remove(c),c.material.dispose()}),i.dispose(),s.forEach(c=>c.dispose())}}}function nw(){return{refWidth:1512,refHeight:870,fitHeight:0,minScale:.5,maxScale:1.75,narrowAt:1024,narrowPlane:1.25,narrowRadius:1.3,narrowText:1.5,narrowPosX:-1.32,narrowEndScale:4.22,tightAt:640,tightRadius:.82,tightPosX:-3.5,tightSplit:.8,tightName:1.5,tightNameBottom:16,tightNameRight:16,tightMetaWidth:70,planeSize:104,count:xn.length,ringRadius:190,seed:0,radial:!0,radius:6,textured:!0,blend:14,imageOffset:0,holdAfter:0,loaderChase:.18,loaderBottom:1,loaderOut:.45,stagger:.34,launchTime:1,spreadEase:"power2.out",spreadTime:1.8,stageAt:.7,spinTurns:1,spinTime:1.4,spinEase:"power2.inOut",spinDelay:0,posX:-1.12,posY:0,endScale:4.46,moveTime:1.3,moveEase:"power2.inOut",moveDelay:.2,scrollSpeed:.0022,damping:.94,maxSpeed:12,dragSpeed:1,snap:!0,snapTime:.8,snapFrom:1,pickTime:.55,pickEase:"power3.inOut",text:"LUO JINZE",textSize:41,textFont:"Arial",textWeight:400,textTracking:0,textColor:"#0a0a0a",textAt:.42,textTime:.95,textStagger:.015,textEase:"power4.out",textOut:!0,textOutAt:-.5,textOutTime:.7,textOutEase:"power2.in",metaLeft:5.5,metaRight:5.5,metaGapL:1.8,metaGapR:1.8,metaWidth:34,nameSize:24/1440*100,nameFont:"Microsoft YaHei",nameWeight:500,idxSize:16/1440*100,idxFont:"Arial",idxWeight:400,listSize:.9,nameMorphTime:.7,nameEase:"circ.out",nameBlur:8.5,nameEdge:400,nameCut:.33,nameSoften:.35,glass:!0,bandTop:.08,bandBottom:.08,refract:60,squeeze:.05,ripple:5,rippleFreq:.02,fringe:1.5,sheen:.05,hover:!0,touchHold:.16,touchSlop:10,lag:.3,melt:34,meltReach:260,reach:1.7,swell:.09,pull:26,grab:.14,release:.06,web:.2,webReach:1.15,wave:4,waveFreq:.05,waveSpeed:7,sideScale:.035,sidePush:17,sideDim:.15,sideReach:2.4,focusParticles:!0,focusParticleFrom:1024,focusParticleReach:82,focusParticleCell:11,focusParticleOpacity:.24,focusParticleEnter:.16,focusParticleExit:.11,focusParticleDrift:.7,focusParticleOut:3.2,assemble:!0,assembleFrom:1024,assembleTime:1.55,assembleEase:"power3.inOut",assembleSpread:3.8,assembleCardScale:2.6,assembleCell:13,assembleOpacity:.96,assembleHaloReach:148,assembleHaloOpacity:.72,tagFrom:1024,tagText:"View",tagSize:14,tagWeight:500,tagArrow:14,tagGap:6,tagX:64,tagY:-38,tagFrost:.16,tagRim:.02,tagRefract:39.5,thread:1,thin:.4,pinch:.35,sag:6,dissolve:2.9,fillet:14,wobble:3,goo:35}}var ls=Math.PI*2,iw=Math.PI/2,zh=Math.PI/180,Fn=e=>e<0?0:e>1?1:e,Vh=e=>1-Math.pow(1-e,3),sw=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,Xa=(e,t,n)=>{let i=Fn((n-e)/(t-e));return i*i*(3-2*i)},Ic=e=>e===0?0:e%2===1?(e+1)/2:-e/2,qo=(e,t)=>1-Math.pow(1-t,e*60);var rn=$r(Hh(),1),lw=.06,VO=()=>{let e=new Do(new Uint8Array([255,255,255,255]),1,1);return e.needsUpdate=!0,e};function tx({onProject:e,onReady:t,onFailure:n}){let i=(0,na.useRef)(null),s=(0,na.useRef)(null),a=(0,na.useRef)([]),r=(0,na.useRef)(null),o=(0,na.useRef)(null),l=(0,na.useRef)(null),c=(0,na.useRef)({left:{box:null,goo:null,layers:[],plain:null},right:{box:null,goo:null,layers:[],plain:null}});return(0,na.useEffect)(()=>{let u=i.current,d=s.current,h=r.current,f=!1,p=nw(),_={progress:0,launch:0,spread:0,spin:0,shift:0},g={restingGap:0,window:"",scale:1,band:"wide"},m;try{m=new xm({antialias:!0,alpha:!0})}catch(H){console.error("[ring] could not create a WebGL context:",H),n?.();return}m.setPixelRatio(Math.min(window.devicePixelRatio,1.35));let v=H=>{f||(H.preventDefault(),n?.())};m.domElement.addEventListener("webglcontextlost",v),u.appendChild(m.domElement);let S=new nh,y=new Uo(-1,1,1,-1,-100,100),E=tw(),A=window.matchMedia("(prefers-reduced-motion: reduce)"),M={uResolution:{value:new kt(1,1)},uSize:{value:new kt(150,100)},uRadius:{value:p.radius},uCount:{value:p.count},uPos:{value:Array.from({length:32},()=>new kt)},uRot:{value:new Float32Array(32)},uScale:{value:Array.from({length:32},()=>new se(0,0,1,0))},uLinkCount:{value:0},uLinkA:{value:Array.from({length:32},()=>new kt)},uLinkB:{value:Array.from({length:32},()=>new kt)},uLinkPar:{value:Array.from({length:32},()=>new se)},uK:{value:p.goo},uWobble:{value:p.wobble},uTime:{value:0},uColor:{value:new jt("#0a0a0a")},uAtlas:{value:VO()},uGrid:{value:new kt(1,1)},uBlend:{value:p.blend},uTextured:{value:0},uBandTop:{value:0},uBandBottom:{value:0},uGlass:{value:new se},uFringe:{value:0},uSheen:{value:0},uMouse:{value:new se},uMelt:{value:new se},uAsciiTex:{value:E},uIntro:{value:new se(1,1,12,0)},uCardParticles:{value:new se(1,0,12,0)},uFocusParticlePos:{value:new kt},uFocusParticleBox:{value:new se},uFocusParticles:{value:new se},uFocusParticleMotion:{value:new kt},uTagTex:{value:new Do(new Uint8Array([0,0,0,0]),1,1)},uTag:{value:new se},uTagP:{value:new se},uTagQ:{value:new se},uPage:{value:new jt("#fafafa")}},x=new wn(new Ms(1,1),new mn({vertexShader:zA,fragmentShader:VA,uniforms:M,transparent:!0,depthWrite:!1}));x.renderOrder=10,S.add(x);let T=ew(S,xn,32),R=new Pa;S.add(R);let D=QA(R,p),U=$A(p,M),F=JA({groups:c.current,list:d,loader:h,cut:l.current,live:o.current},p),q=!1,O=0,k=!1,z=[],K=H=>k?H():z.push(H),it=WA(Vm,H=>{f||(O=H)});M.uAtlas.value.dispose(),it.texture.anisotropy=m.capabilities.getMaxAnisotropy(),M.uAtlas.value=it.texture,M.uGrid.value.set(it.grid[0],it.grid[1]);let lt=it.count;it.first.then(()=>{f||(q=!0)}),it.ready.then(()=>{f||(O=1)});let st=1,ct=1,Wt={left:0,top:0},Lt=1,Ft=1,Q=1,ht=1,at=!1,Pt=!1,Vt=()=>{let H=st/Math.max(1,p.refWidth),$=ct/Math.max(1,p.refHeight),rt=H*(1-p.fitHeight)+Math.min(H,$)*p.fitHeight;Lt=Math.min(p.maxScale,Math.max(p.minScale,rt));let gt=st<=p.narrowAt,wt=st<=p.tightAt;at=gt,Pt=wt,Ft=gt?p.narrowPlane:1,Q=(gt?p.narrowRadius:1)*(wt?p.tightRadius:1),ht=gt?p.narrowText:1,g.window=`${Math.round(st)} x ${Math.round(ct)}`,g.scale=Math.round(Lt*1e3)/1e3,g.band=wt?"tight":gt?"narrow":"wide";let Tt=Lt*ht*(wt?p.tightSplit:1);R.scale.set(Tt,Tt,1)},Dt=()=>F.style({textK:ht,tight:Pt,viewW:st}),Be=()=>{st=u.clientWidth,ct=u.clientHeight,Vt(),m.setSize(st,ct),y.left=-st/2,y.right=st/2,y.top=ct/2,y.bottom=-ct/2,y.updateProjectionMatrix(),x.scale.set(st,ct,1),M.uResolution.value.set(st,ct);let H=m.domElement.getBoundingClientRect();Wt.left=H.left,Wt.top=H.top},Yt=()=>{Be(),Dt()};Be(),window.addEventListener("resize",Yt);let ce={x:0,y:0},Qt=0,Bt=!1,Zt=0,Ee=!1,Je=0,tn=0,ue=!1,Ge=0,L=0,ke=!1,oe=0,C=0,b=0,I=H=>{let $=H.clientX-Wt.left-ce.x,rt=H.clientY-Wt.top-ce.y;return Math.atan2(-rt,$)},G=()=>{ke&&(Ue.killTweensOf(_),ke=!1)},Z=H=>{let $=ls/Math.round(p.count),rt=Qt-p.seed*zh-Ic(H)*$,gt=rt+Math.round((_.spin-rt)/ls)*ls,wt=Math.abs(gt-_.spin)/$;if(wt<.1){location.href=xn[Math.max(0,ni)].href;return}Zt=0,ue=!1,ke=!0,Ue.killTweensOf(_),Ue.to(_,{spin:gt,duration:p.pickTime*Math.sqrt(Math.max(1,wt)),ease:p.pickEase,onComplete:()=>{ke=!1}})},ot=H=>{if(!Bt)return;let $=xn.length,rt=(H%$+$)%$,gt=ls/$,wt=Qt-p.seed*zh+rt*gt,Tt=wt+Math.round((_.spin-wt)/ls)*ls;Zt=0,ue=!1,ke=!0,Ue.killTweensOf(_),Ue.to(_,{spin:Tt,duration:.65,ease:"power3.inOut",onComplete:()=>{ke=!1}})},dt=H=>ot(H.detail.index),J=H=>{document.querySelector("dialog[open]")||/INPUT|TEXTAREA|SELECT/.test(H.target.tagName)||((H.key==="ArrowRight"||H.key==="ArrowDown")&&(H.preventDefault(),ot(Math.max(0,ni)+1)),(H.key==="ArrowLeft"||H.key==="ArrowUp")&&(H.preventDefault(),ot(Math.max(0,ni)-1)))};window.addEventListener("gallery-select",dt),window.addEventListener("keydown",J);let Y={x:0,y:0,inside:!1,seeded:!1},nt={x:0,y:0,amt:0,wake:0},Et=!1,pt=!1,ut=0,Rt=()=>{clearTimeout(ut),ut=0,pt=!1},Ut=()=>{clearTimeout(ut),ut=setTimeout(()=>{pt=!0},p.touchHold*1e3)},Ht=()=>Et?pt:Y.inside,N=H=>{Et=H.pointerType==="touch",Y.x=H.clientX-Wt.left-st*.5,Y.y=ct*.5-(H.clientY-Wt.top),Y.inside=!0,Y.seeded||(Y.seeded=!0,nt.x=Y.x,nt.y=Y.y)},ft=()=>{Y.inside=!1},j=H=>{if(!Bt)return;H.preventDefault();let $=Math.abs(H.deltaX)>Math.abs(H.deltaY)?H.deltaX:H.deltaY;G(),ue=!1,Zt+=$*p.scrollSpeed,Zt=Math.max(-p.maxSpeed,Math.min(p.maxSpeed,Zt))},mt=H=>{oe=0,C=H.clientX,b=H.clientY,N(H),Bt&&(G(),Et&&Ut(),Ee=!0,ue=!1,Zt=0,Je=I(H),tn=performance.now(),m.domElement.setPointerCapture?.(H.pointerId))},vt=H=>{if(N(H),oe+=Math.abs(H.clientX-C)+Math.abs(H.clientY-b),C=H.clientX,b=H.clientY,Et&&!pt&&oe>p.touchSlop&&Rt(),!Ee)return;let $=I(H),rt=$-Je;rt>Math.PI&&(rt-=ls),rt<-Math.PI&&(rt+=ls);let gt=rt*p.dragSpeed;_.spin+=gt;let wt=performance.now();Zt=gt/(Math.max(8,wt-tn)/1e3),Je=$,tn=wt},et=H=>{N(H),Rt(),Ee&&(Ee=!1,m.domElement.releasePointerCapture?.(H.pointerId))},Ct=()=>{!Bt||oe>=5||yi<0||Z(yi)};u.addEventListener("wheel",j,{passive:!1}),u.addEventListener("pointerdown",mt),u.addEventListener("pointermove",vt),u.addEventListener("pointerup",et),u.addEventListener("pointercancel",et),u.addEventListener("pointerleave",ft),u.addEventListener("click",Ct);let At=H=>{let $=p.hover&&Ht()&&Y.seeded&&Bt;nt.amt+=(($?1:0)-nt.amt)*qo(H,.12);let rt=qo(H,p.lag);nt.x+=(Y.x-nt.x)*rt,nt.y+=(Y.y-nt.y)*rt;let gt=Math.hypot(Y.x-nt.x,Y.y-nt.y);nt.wake=Math.max(nt.wake*Math.pow(.94,H*60),Fn(gt/(Math.max(H,.001)*2600))),M.uMouse.value.set(nt.x,nt.y,nt.amt,p.melt*Lt),M.uMelt.value.set(p.meltReach*Lt,p.wave*Lt*nt.wake*nt.amt,p.waveFreq,p.waveSpeed)},Re={shown:0},xe=H=>{let $=Math.min(O,Fn(_.progress));Re.shown+=($-Re.shown)*qo(H,p.loaderChase);let rt=Math.min(100,Math.max(1,Math.round(Re.shown*100)));if(h&&(h.textContent=String(rt).padStart(3,"0")),!k&&rt>=100){k=!0;for(let gt of z)gt();z.length=0}},_i=new Float32Array(32),Yn=new Float32Array(32),Jr=[],Yo=Array.from({length:32},()=>new kt),ia=new Float32Array(32),sa=new Float32Array(32),Kr=new Float32Array(32),jr=new Float32Array(32),us=new Float32Array(32),vi=new kt,Qr=H=>Math.max(.05,1+p.swell*ia[H]-p.sideScale*us[H]),ni=-1,Zo=-1,yi=-1,Fc=!1,zn=-1,aa=0,Wa=0,km=()=>{let H=a.current;for(let $=0;$<H.length;$++){let rt=H[$];if(!rt)continue;let gt=$===ni;rt.style.opacity=gt?"1":"0.2",gt?rt.setAttribute("aria-current","true"):rt.removeAttribute("aria-current")}},Xm=H=>{let $=Math.round(p.count);M.uCount.value=$;let rt=ls/$,gt=Fn(_.spread),wt=at?p.narrowEndScale:p.endScale,Tt=Pt?p.tightPosX:at?p.narrowPosX:p.posX,Kt=Fn(_.shift),le=(1+(wt-1)*Kt)*Lt,pe=Tt*st*.5*Kt,he=p.posY*ct*.5*Kt,Xe=p.assemble&&st>p.assembleFrom&&!A.matches,Mt=Xe?1+(p.assembleCardScale-1)*(1-Xa(.05,.82,_.launch)):1;ce.x=st*.5+pe,ce.y=ct*.5-he,Qt=pe!==0||he!==0?Math.atan2(-he,-pe):0;let We=p.planeSize*Ft*le*Mt,Jt=We/1.5;M.uSize.value.set(We,Jt),M.uRadius.value=p.radius*Ft*le;let Zn=p.radial?Jt:We,ki=p.radial?We:Jt,hs=p.ringRadius*Q*le,ra=2*hs*Math.sin(rt/2)-Zn;g.restingGap=Math.round(ra/le*10)/10;let ge=Math.max(1,ra),Fe=Math.max(1,Math.abs(Ic($-1))),Cs=Math.max(.1,1-lw-p.stagger);Yn[0]=0;for(let yt=1;yt<=Fe;yt++){let Cn=lw+(yt-1)/Fe*p.stagger,ii=Fn((gt-Cn)/Cs),Sn=ii*ii*(3-2*ii);_i[yt]=Sn,Yn[yt]=Yn[yt-1]+Sn}let Se=p.seed*zh,fs=sw(Fn(_.launch)),oa=hs*fs;Jr.length=0;let Jo=nt.amt>.001,ex=Math.max(1,p.reach*We),nx=Math.max(1,p.sideReach*We),qm=qo(H,p.grab),Ym=qo(H,p.release),ix=-1,sx=1e9,Zm=0,uw=Math.round(p.imageOffset),hw=yt=>lt>0?((uw-yt)%lt+lt)%lt:0,fw=Y.inside&&Y.seeded&&Bt,Jm=-1,ax=Jo?yi:-1;for(let yt=0;yt<$;yt++){let Cn=Ic(yt),ii=Math.abs(Cn),Sn=yt===0?Fn(_.progress):_i[ii],ds=hw(Cn),Rs=Se+Math.sign(Cn)*rt*Yn[ii]+_.spin,ps=Math.cos(Rs)*oa+pe,qa=Math.sin(Rs)*oa+he;Yo[yt].set(ps,qa);let qh=Rs-Qt,Yh=Math.abs(Math.atan2(Math.sin(qh),Math.cos(qh)));Yh<sx&&(sx=Yh,ix=yt,Zm=ds);let Ds=0,Ko=0,Zh=0;if(Jo){let Us=nt.x-ps,Ya=nt.y-qa,la=Math.hypot(Us,Ya);if(Ds=Xa(ex,ex*.22,la)*nt.amt*Sn,Ds>1e-4&&la>1e-4){let Za=p.pull*Lt*Ds/la;Ko=Us*Za,Zh=Ya*Za}}let jo=Ds>ia[yt]?qm:Ym;ia[yt]+=(Ds-ia[yt])*jo,sa[yt]+=(Ko-sa[yt])*jo,Kr[yt]+=(Zh-Kr[yt])*jo;let Qo=0;if(ax>=0&&yt!==ax){let Us=Math.hypot(vi.x-ps,vi.y-qa);Qo=Xa(nx,nx*.2,Us)*Sn}us[yt]+=(Qo-us[yt])*(Qo>us[yt]?qm:Ym);let zc=0,Vc=0;if(us[yt]>1e-4){let Us=ps-vi.x,Ya=qa-vi.y,la=Math.hypot(Us,Ya);if(la>1e-4){let Za=p.sidePush*Lt*us[yt]/la;zc=Us*Za,Vc=Ya*Za}}M.uPos.value[yt].set(ps+sa[yt]+zc,qa+Kr[yt]+Vc),M.uRot.value[yt]=(p.radial?Rs:Rs+iw)*fs;let Hc=yt===0?Vh(Fn(Xe?(Sn-.5)/.46:Sn/.7)):Vh(Fn(Sn/.34)),Jh=yt===0?Vh(Fn(Xe?(Sn-.58)/.38:(Sn-.18)/.74)):Vh(Fn((Sn-.06)/.36)),Kh=Qr(yt);if(M.uScale.value[yt].set(Hc*Kh,Jh*Kh,1-p.sideDim*us[yt],ds),T.update(yt,ds,M.uPos.value[yt],M.uRot.value[yt],M.uScale.value[yt],M.uSize.value,ia[yt],gt,Lt),fw&&Jm<0){let Us=M.uRot.value[yt],Ya=nt.x-(ps+sa[yt]+zc),la=nt.y-(qa+Kr[yt]+Vc),Za=Math.cos(Us),rx=Math.sin(Us);Math.abs(Ya*Za+la*rx)<=We*.5*Hc*Kh&&Math.abs(-Ya*rx+la*Za)<=Jt*.5*Jh*Kh&&(Jm=yt)}Jr.push(yt)}for(let yt=$;yt<32;yt++)M.uScale.value[yt].set(0,0,1,0),ia[yt]=0,sa[yt]=0,Kr[yt]=0,us[yt]=0;yi=Jm;let kh=p.focusParticles&&st>p.focusParticleFrom&&!Et&&Bt&&gt>.995?yi:-1;zn<0&&kh>=0&&(zn=kh,Wa=0);let Xh=zn>=0&&zn===kh,dw=Xh?1:0,pw=Xh?p.focusParticleEnter:p.focusParticleExit;if(aa+=(dw-aa)*qo(H,pw),!A.matches&&zn>=0&&(Wa+=H*(Xh?p.focusParticleDrift:-p.focusParticleOut)),!Xh&&aa<.015&&(zn=kh,aa=0,Wa=0),zn>=0){let yt=M.uPos.value[zn],Cn=M.uScale.value[zn],ii=We*.5*Cn.x,Sn=Jt*.5*Cn.y,ds=Math.min(ii,Sn),Rs=Xa(.3,1,Math.min(Cn.x,Cn.y)),ps=Math.min(ds,ds+(M.uRadius.value-ds)*Rs);M.uFocusParticlePos.value.copy(yt),M.uFocusParticleBox.value.set(ii,Sn,ps,M.uRot.value[zn])}M.uFocusParticles.value.set(aa,p.focusParticleReach*Lt,Math.max(6,p.focusParticleCell*Lt),p.focusParticleOpacity),M.uFocusParticleMotion.value.set(Wa,A.matches?0:1);let Km=yi>=0&&!Et&&st>p.tagFrom;Km!==Fc&&(Fc=Km,U.show(Km)),yi>=0&&vi.copy(Yo[yi]),M.uTag.value.set(nt.x+p.tagX,nt.y+p.tagY,U.box.sx,U.box.sy),M.uTagP.value.set(Hm*.5,Oc*.5,Oc*.5,p.tagRefract),M.uTagQ.value.set(p.tagFrost,p.tagRim,0,0),ix>=0&&lt>0&&Zm!==ni&&(ni=Zm,km()),Jr.sort((yt,Cn)=>Ic(yt)-Ic(Cn));let mw=ki*.5*p.thread,gw=gt>.995&&$>2,jm=Math.min(gw?$:$-1,32);for(let yt=0;yt<jm;yt++){let Cn=Jr[yt],ii=Jr[(yt+1)%$],Sn=M.uPos.value[Cn],ds=M.uPos.value[ii],Rs=M.uScale.value[Cn],ps=M.uScale.value[ii],qa=(p.radial?Rs.y:Rs.x)/Qr(Cn),qh=(p.radial?ps.y:ps.x)/Qr(ii),Yh=Yo[Cn].distanceTo(Yo[ii])-Zn*.5*(qa+qh),Ds=Fn(Yh/ge),Ko=0;if(Jo&&p.web>1e-4){let zc=(Sn.x+ds.x)*.5,Vc=(Sn.y+ds.y)*.5,Hc=Math.max(1,p.webReach*We),Jh=Math.hypot(nt.x-zc,nt.y-Vc);Ko=Xa(Hc,Hc*.15,Jh)*nt.amt}jr[yt]+=(Ko-jr[yt])*(Ko>jr[yt]?qm:Ym);let Zh=Math.max(Math.pow(1-Ds,p.thin),p.web*jr[yt]),jo=mw*Zh-p.dissolve,Qo=jo*(1-(1-p.pinch)*Xa(0,.7,Ds));M.uLinkA.value[yt].copy(Sn),M.uLinkB.value[yt].copy(ds),M.uLinkPar.value[yt].set(jo,Qo,p.sag*le*Math.pow(Ds,1.5),Math.min(p.fillet*le*Xa(0,.35,Ds),Math.max(Qo,0)*1.5))}for(let yt=jm;yt<32;yt++)M.uLinkPar.value[yt].set(-100,-100,0,0);M.uLinkCount.value=jm,M.uK.value=p.goo*Ft*Lt,M.uWobble.value=p.wobble*Lt*(1-Xa(.2,.95,_.progress)),M.uTextured.value=p.textured&&q?1:0,M.uBlend.value=Math.max(.5,p.blend*Ft*le),M.uIntro.value.set(Xe?Fn(_.progress):1,p.assembleSpread,Math.max(7,p.assembleCell*Lt),Xe?p.assembleOpacity:0),M.uCardParticles.value.set(Fn(_.launch),p.assembleHaloReach*Lt,Math.max(7,p.assembleCell*Lt),Xe?p.assembleHaloOpacity:0);let Wh=p.glass;M.uBandTop.value=Wh?p.bandTop*ct:0,M.uBandBottom.value=Wh?p.bandBottom*ct:0,M.uGlass.value.set(p.refract,p.squeeze,p.ripple,p.rippleFreq),M.uFringe.value=Wh?p.fringe:0,M.uSheen.value=Wh?p.sheen:0},Gh=0,Wm=()=>{Bt=!1,Zo=-1,Zt=0,Ee=!1,ue=!1,zn=-1,aa=0,Wa=0,M.uFocusParticles.value.x=0,G();let H=++Gh;h&&Ue.set(h,{opacity:k?0:1});let $=Ue.timeline({delay:.25,onComplete:()=>{Bt=!0,t?.()}}),rt=p.assemble&&st>p.assembleFrom&&!A.matches;$.fromTo(_,{progress:0,launch:0,spread:0,spin:0,shift:0},{progress:1,duration:rt?p.assembleTime:.65,ease:rt?p.assembleEase:"power1.out"}),$.addPause(">",()=>{K(()=>{Ue.delayedCall(p.holdAfter,()=>{f||H!==Gh||($.resume(),h&&Ue.to(h,{opacity:0,duration:p.loaderOut,ease:"power2.in"}))})})}),$.to(_,{launch:1,duration:p.launchTime,ease:"power2.inOut"});let gt=$.duration()-.15;$.to(_,{spread:1,duration:p.spreadTime,ease:p.spreadEase},gt);let wt=gt+p.stageAt*p.spreadTime;$.to(_,{spin:p.spinTurns*ls,duration:p.spinTime,ease:p.spinEase},wt+p.spinDelay),$.to(_,{shift:1,duration:p.moveTime,ease:p.moveEase},wt+p.moveDelay);let Tt=gt+p.textAt*p.spreadTime;if(D.chars.length&&$.fromTo(D.chars,{value:0},{value:1,duration:p.textTime,ease:p.textEase,stagger:p.textStagger},Tt),p.textOut&&D.fades.length){let Kt=Math.max(wt+p.spinDelay+p.spinTime,wt+p.moveDelay+p.moveTime);$.fromTo(D.fades,{value:1},{value:0,duration:p.textOutTime,ease:p.textOutEase,stagger:p.textStagger},Math.max(0,Kt+p.textOutAt))}return d&&$.fromTo(d,{opacity:0},{opacity:1,duration:p.textTime,ease:p.textEase},Tt),$};U.build(),U.load(()=>{f||U.build()}),Dt();let w=null,P=()=>{w?.kill(),w=Wm()},W=()=>{f||w||(D.build(),U.build(),Dt(),P(),sessionStorage.getItem("gpt-gallery-entered")&&(k=!0,w.progress(1,!0).pause(),Bt=!0,h&&Ue.set(h,{opacity:0}),t?.()),sessionStorage.setItem("gpt-gallery-entered","1"))},B=setTimeout(W,3e3);Promise.all([document.fonts?.ready??Promise.resolve(),it.first]).then(W).catch(W);let V,_t=performance.now(),bt=_t;return m.setAnimationLoop(()=>{let H=performance.now(),$=Math.min(.05,(H-bt)/1e3);if(bt=H,M.uTime.value=(H-_t)*.001,Bt&&!Ee&&!ke){_.spin+=Zt*$,Zt*=Math.pow(p.damping,$*60);let rt=0;if(p.snap){let gt=ls/Math.round(p.count),wt=Math.max(.01,-Math.log(p.damping)*60),Tt=Math.max(p.snapFrom,wt*gt*.5),Kt=4.8/Math.max(.05,p.snapTime);if(!ue&&Math.abs(Zt)<Tt){let le=_.spin+Zt/wt,pe=p.seed*zh-Qt;Ge=Math.round((le+pe)/gt)*gt-pe,L=Math.max(Math.abs(Zt),gt*.5*Kt),ue=!0}if(ue){rt=Ge-_.spin;let le=Math.max(-L,Math.min(L,rt*Kt));Zt+=(le-Zt)*Fn(Kt*$)}}else ue=!1;Math.abs(Zt)<.0015&&Math.abs(rt)<8e-4&&(Zt=0,_.spin+=rt)}xe($),At($),Xm($),Bt&&!Ee&&!ke&&Zt===0&&ni>=0&&ni!==Zo&&(Zo=ni,F.show(ni),e?.(ni)),m.render(S,y)}),()=>{f=!0,clearTimeout(ut),clearTimeout(B),m.setAnimationLoop(null),window.removeEventListener("resize",Yt),window.removeEventListener("gallery-select",dt),window.removeEventListener("keydown",J),u.removeEventListener("wheel",j),u.removeEventListener("pointerdown",mt),u.removeEventListener("pointermove",vt),u.removeEventListener("pointerup",et),u.removeEventListener("pointercancel",et),u.removeEventListener("pointerleave",ft),u.removeEventListener("click",Ct),w?.kill(),Ue.killTweensOf(D.chars),Ue.killTweensOf(D.fades),Ue.killTweensOf(d),F.dispose(),U.dispose(),D.dispose(),V?.destroy(),T.dispose(),x.geometry.dispose(),x.material.dispose(),M.uAtlas.value?.dispose(),M.uAsciiTex.value?.dispose(),M.uTagTex.value?.dispose(),m.dispose(),m.domElement.removeEventListener("webglcontextlost",v),m.forceContextLoss(),m.domElement.remove()}},[]),(0,rn.jsxs)(rn.Fragment,{children:[(0,rn.jsx)("div",{ref:i,className:"ring-canvas"}),(0,rn.jsx)("ul",{ref:s,"aria-label":"Projects",style:{fontFamily:'"Satoshi", ui-sans-serif, system-ui, sans-serif'},className:"ring-list",children:xn.map((u,d)=>(0,rn.jsx)("li",{ref:h=>{a.current[d]=h},style:{opacity:.2},children:u.name},u.file))}),[{side:"left",justify:"flex-start"},{side:"right",justify:"flex-end"}].map(({side:u,justify:d})=>{let h=(0,rn.jsxs)("span",{className:"meta-row",children:[(0,rn.jsx)("span",{}),(0,rn.jsx)("span",{})]});return(0,rn.jsxs)("div",{"data-side":u,ref:f=>{c.current[u].box=f},"aria-hidden":"true",className:"ring-meta",children:[(0,rn.jsx)("span",{ref:f=>{c.current[u].goo=f},className:"meta-absolute",style:{willChange:"filter"},children:[0,1].map(f=>(0,rn.jsx)("span",{ref:p=>{c.current[u].layers[f]=p},className:"meta-layer",style:{justifyContent:d},children:h},f))}),(0,rn.jsx)("span",{ref:f=>{c.current[u].plain=f},className:"meta-layer",style:{justifyContent:d},children:h})]},u)}),(0,rn.jsx)("div",{ref:r,"aria-hidden":"true",className:"ring-loader"}),(0,rn.jsx)("div",{ref:o,"aria-live":"polite",className:"sr-only"}),(0,rn.jsx)("svg",{"aria-hidden":"true",className:"filter-defs",focusable:"false",children:(0,rn.jsx)("defs",{children:(0,rn.jsx)("filter",{id:"name-goo",x:"-20%",y:"-100%",width:"140%",height:"300%",colorInterpolationFilters:"sRGB",children:(0,rn.jsx)("feColorMatrix",{ref:l,in:"SourceGraphic",type:"matrix",values:`1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140`})})})})]})}var St=$r(Hh(),1);function HO(){let[e,t]=(0,Gi.useState)(0),[n,i]=(0,Gi.useState)(!1),[s,a]=(0,Gi.useState)(()=>matchMedia("(max-width: 760px), (prefers-reduced-motion: reduce)").matches?"still":"ring"),[r,o]=(0,Gi.useState)(!1),[l,c]=(0,Gi.useState)("all"),u=(0,Gi.useRef)(null),d=(0,Gi.useRef)(null),h=xn[e];(0,Gi.useEffect)(()=>{let v=matchMedia("(max-width: 760px), (prefers-reduced-motion: reduce)"),S=()=>{a(v.matches?"still":"ring"),i(!1)};return v.addEventListener("change",S),()=>v.removeEventListener("change",S)},[]),(0,Gi.useEffect)(()=>{if(s!=="ring")return;let v=setTimeout(()=>{document.documentElement.dataset.galleryReady||(o(!0),a("still"))},18e3);return()=>clearTimeout(v)},[s]),(0,Gi.useEffect)(()=>{let v=S=>{s==="ring"||u.current?.open||/INPUT|SELECT|TEXTAREA/.test(S.target.tagName)||["ArrowRight","ArrowDown","ArrowLeft","ArrowUp"].includes(S.key)&&(S.preventDefault(),t(y=>(y+(["ArrowRight","ArrowDown"].includes(S.key)?1:-1)+xn.length)%xn.length))};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[s]);let f=v=>{let S=(v+xn.length)%xn.length;s==="ring"?window.dispatchEvent(new CustomEvent("gallery-select",{detail:{index:S}})):t(S)},p=v=>{d.current=v.currentTarget,u.current.showModal()},_=()=>{u.current.close(),d.current?.focus()},g=Wo.filter(v=>l==="all"||v.cat===l),m=s==="still";return(0,St.jsxs)(St.Fragment,{children:[(0,St.jsx)("a",{className:"skip-link",href:"archive.html",children:"\u8DF3\u5230\u5168\u90E8\u4F5C\u54C1"}),(0,St.jsxs)("header",{className:"gallery-head",children:[(0,St.jsx)("a",{className:"identity",href:"index.html","aria-label":"\u7F57\u9526\u6CFD\u9996\u9875",children:(0,St.jsxs)("span",{children:["LUO JINZE",(0,St.jsx)("small",{children:"\u7F57\u9526\u6CFD \u2014 \u5F71\u50CF\u4E0E\u89C6\u89C9\u5B9E\u9A8C"})]})}),(0,St.jsxs)("div",{className:"head-description",children:["\u5F71\u50CF\u4E0E\u89C6\u89C9\u5B9E\u9A8C",(0,St.jsx)("small",{children:"MOVING IMAGE & VISUAL EXPERIMENTS"})]}),(0,St.jsxs)("nav",{"aria-label":"\u4E3B\u5BFC\u822A",children:[(0,St.jsxs)("button",{onClick:p,children:["\u4F5C\u54C1\u7D22\u5F15 ",(0,St.jsx)("sup",{children:"15"})]}),(0,St.jsx)("a",{href:"about.html",children:"\u5173\u4E8E / \u8054\u7CFB \u2197"})]})]}),(0,St.jsxs)("main",{className:m?"gallery-main still-mode":"gallery-main",children:[(0,St.jsx)("h1",{className:"sr-only",children:"\u7F57\u9526\u6CFD\uFF5C\u5F71\u50CF\u4E0E\u89C6\u89C9\u5B9E\u9A8C"}),(0,St.jsxs)("div",{className:"gallery-note",children:[(0,St.jsx)("span",{className:"micro",children:"SELECTED WORKS"}),(0,St.jsxs)("p",{children:["\u4ECE\u955C\u5934\u5230\u751F\u6210\u56FE\u50CF\uFF0C",(0,St.jsx)("br",{}),"\u63A2\u7D22\u5F71\u50CF\u3001\u6750\u8D28\u4E0E\u7F16\u6392\u3002"]})]}),!m&&(0,St.jsx)(tx,{onProject:t,onReady:()=>{i(!0),document.documentElement.dataset.galleryReady="true"},onFailure:()=>{o(!0),a("still")}}),m&&(0,St.jsxs)("section",{className:"still-stage","aria-label":"\u7CBE\u9009\u4F5C\u54C1",children:[(0,St.jsxs)("a",{className:"still-image"+(h.stack?" still-image--stack":""),href:h.href,children:[h.stack?.slice(1,4).map((v,S)=>(0,St.jsx)("img",{className:"still-backing",src:v,alt:"",style:{"--layer":S+1}},v)),(0,St.jsx)("img",{className:"still-front",src:h.file,alt:h.name,fetchPriority:"high"}),(0,St.jsxs)("span",{children:[h.stack?"\u67E5\u770B\u56FE\u96C6":"\u67E5\u770B\u4F5C\u54C1"," \u2197"]})]},h.id),(0,St.jsxs)("div",{className:"still-caption",children:[(0,St.jsxs)("span",{className:"micro",children:[String(e+1).padStart(2,"0")," / ",xn.length]}),(0,St.jsxs)("h2",{children:[h.en,(0,St.jsx)("small",{children:h.name})]}),(0,St.jsxs)("p",{children:[h.type,(0,St.jsx)("small",{children:h.year})]})]})]}),!m&&(0,St.jsxs)("div",{className:"desktop-index","aria-label":"\u7CBE\u9009\u4F5C\u54C1\u9009\u62E9",children:[(0,St.jsx)("div",{className:"micro index-label",children:"INDEX / \u5F71\u50CF\u4E0E\u56FE\u96C6"}),xn.map((v,S)=>(0,St.jsxs)("button",{disabled:!n,"aria-current":e===S?"true":void 0,onClick:()=>f(S),children:[(0,St.jsx)("span",{children:String(S+1).padStart(2,"0")}),v.name,v.stack&&(0,St.jsxs)("small",{className:"stack-index-count",children:["+",v.count]}),(0,St.jsx)("i",{"aria-hidden":"true",children:e===S?"\u2197":""})]},v.id))]}),!m&&h.stack&&(0,St.jsxs)("p",{className:"stack-hint",children:["HOVER TO UNFOLD ",(0,St.jsx)("span",{children:"\u60AC\u505C\u5C55\u5F00\u56FE\u96C6"})]}),(0,St.jsxs)("div",{className:"stage-actions",children:[(0,St.jsxs)("div",{className:"step-controls",children:[(0,St.jsx)("button",{"aria-label":"\u4E0A\u4E00\u4EF6\u4F5C\u54C1",disabled:!m&&!n,onClick:()=>f(e-1),children:"\u2190"}),(0,St.jsxs)("span",{className:"micro",children:[String(e+1).padStart(2,"0")," / ",xn.length]}),(0,St.jsx)("button",{"aria-label":"\u4E0B\u4E00\u4EF6\u4F5C\u54C1",disabled:!m&&!n,onClick:()=>f(e+1),children:"\u2192"})]}),(0,St.jsxs)("a",{className:"view-work",href:h.href,children:[h.stack?`\u67E5\u770B\u56FE\u96C6 \xB7 ${h.count}`:"\u67E5\u770B\u4F5C\u54C1"," ",(0,St.jsx)("span",{children:"\u2197"})]})]})]}),(0,St.jsxs)("footer",{className:"gallery-bottom",children:[(0,St.jsx)("span",{children:m?"SELECT / \u9009\u62E9\u4F5C\u54C1":"SCROLL TO EXPLORE / \u6EDA\u52A8\u6216\u62D6\u52A8\u6D4F\u89C8"}),(0,St.jsx)("button",{className:"view-toggle",onClick:()=>{a(m?"ring":"still"),i(!1),delete document.documentElement.dataset.galleryReady},children:m?"\u52A8\u6001\u753B\u5ECA \u2197":"\u9759\u6001\u6D4F\u89C8 \u2197"}),(0,St.jsx)("span",{children:"LUO JINZE \xA9 2026"})]}),r&&(0,St.jsx)("p",{className:"fallback-message",role:"status",children:"\u5DF2\u5207\u6362\u4E3A\u9759\u6001\u753B\u5ECA\uFF0C\u4F5C\u54C1\u53EF\u6B63\u5E38\u6D4F\u89C8\u3002"}),(0,St.jsxs)("dialog",{ref:u,className:"index-dialog",onClick:v=>{v.target===u.current&&_()},children:[(0,St.jsxs)("div",{className:"dialog-head",children:[(0,St.jsxs)("div",{children:[(0,St.jsx)("span",{className:"micro",children:"WORK INDEX"}),(0,St.jsxs)("h2",{children:["\u5168\u90E8\u4F5C\u54C1 ",(0,St.jsx)("sup",{children:"15"})]})]}),(0,St.jsx)("button",{className:"close-index",onClick:_,"aria-label":"\u5173\u95ED\u4F5C\u54C1\u7D22\u5F15",children:"\u5173\u95ED \xD7"})]}),(0,St.jsxs)("div",{className:"filters","aria-label":"\u4F5C\u54C1\u5206\u7C7B",children:[(0,St.jsx)("button",{"aria-pressed":l==="all",onClick:()=>c("all"),children:"\u5168\u90E8"}),Object.entries(Bn).map(([v,S])=>(0,St.jsx)("button",{"aria-pressed":l===v,onClick:()=>c(v),children:S.cn},v))]}),(0,St.jsx)("div",{className:"index-grid",children:g.map(v=>(0,St.jsxs)("a",{href:"work/"+v.id+".html",children:[(0,St.jsx)("div",{children:(0,St.jsx)("img",{src:v.thumb,alt:v.titleCn,loading:"lazy"})}),(0,St.jsxs)("h3",{children:[v.titleCn,(0,St.jsx)("span",{children:"\u2197"})]}),(0,St.jsxs)("p",{children:[Bn[v.cat].cn," \xB7 ",v.roleCn]})]},v.id))}),(0,St.jsx)("a",{className:"archive-link",href:"archive.html",children:"\u6253\u5F00\u5B8C\u6574\u4F5C\u54C1\u5217\u8868 \u2197"})]})]})}(0,cw.createRoot)(document.getElementById("gallery-root")).render((0,St.jsx)(HO,{}));})();
/*! For license information please see gallery.js.LEGAL.txt */
