!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n=window.webpackJsonp;window.webpackJsonp=function(r,i,u){for(var a,c,l,s=0,f=[];s<r.length;s++)c=r[s],o[c]&&f.push(o[c][0]),o[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);for(n&&n(r,i,u);f.length;)f.shift()();if(u)for(s=0;s<u.length;s++)l=e(e.s=u[s]);return l};var r={},o={5:0};e.m=t,e.c=r,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e.oe=function(t){throw console.error(t),t}}({0:function(t,e,n){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}Object.defineProperty(e,"__esModule",{value:!0});var o=(e.getHeader=function(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0]?document.querySelector(".header__shell")||document.querySelector(".header"):document.querySelector(".header")},e.getText=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document,n=e.querySelector(t);return n?n.innerText:""}),i=(e.getTextOf=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return o("."+t,e)},e.getTitle=function(){return o("title")},e.getName=window.utag_data?window.utag_data.page_name:o("title"),e.moveBefore=function(t,e){t&&e&&e.parentNode.insertBefore(t,e)}),u=e.moveAfter=function(t,e){t&&e&&e.parentNode.insertBefore(t,e.nextSibling)},a=(e.moveElementsBefore=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t instanceof Array&&t.length>0){var r=t[t.length-1];n&&r.nextElementSibling===e||t.forEach(function(t){return i(t,e)})}},e.moveElementsAfter=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t instanceof Array&&t.length>0){var r=t[0];n&&r.previousElementSibling===e||t.forEach(function(t){return u(t,e)})}},e.remove=function(t){return t&&t.parentNode&&t.parentNode.removeChild&&t.parentNode.removeChild(t)},e.resetStyle=function(t){return t.setAttribute("style","")},e.getElement=function(t){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:document).querySelector("."+t)},e.getElements=function(t){return[].concat(r((arguments.length>1&&void 0!==arguments[1]?arguments[1]:document).querySelectorAll("."+t)))},e.getScrollTop=function(){return window.scrollY||window.scrollTop||document.body.scrollTop||document.documentElement.scrollTop}),c=(e.getScrollLeft=function(){return window.scrollX||window.scrollLeft||document.body.scrollLeft||document.documentElement.scrollLeft},e.getOffsetTop=function t(e){return e?e.offsetTop+t(e.offsetParent||e.parentElement):0},e.toElement=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.insertAdjacentHTML("afterbegin",t),e?n.children:n.firstElementChild},e.isAnchor=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return e instanceof HTMLAnchorElement||!!(e.parentNode&&n>=0)&&t(e.parentNode,n-1)},e.getAnchor=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return e instanceof HTMLAnchorElement?e:e.parentNode&&n>=0?t(e.parentNode,n-1):null},e.triggerChange=function(t){if("createEvent"in document){var e=document.createEvent("HTMLEvents");e.initEvent("change",!1,!0),t.dispatchEvent(e)}else t.fireEvent("onchange")},e.getComputedStyle=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=window.getComputedStyle(t);return e.length>0?n[e]:n});e.calculateNumberOfLines=function(t){var e=c(t);return Math.round(function(t){var e=parseFloat(t.height);if("border-box"===t.boxSizing){return e-[t.paddingTop,t.paddingBottom,t.borderTop,t.borderBottom].reduce(function(t,e){var n=parseFloat(e);return isNaN(n)?t:t+n},0)}return e}(e)/function(t){var e=parseFloat(t.lineHeight);return isNaN(e)?1.2*parseFloat(t.fontSize):e}(e))},e.withStyles=function(t,e,n){var r={};try{return Object.keys(e).forEach(function(n){r[n]=t.style[n],t.style[n]=e[n]}),n(t)}finally{Object.keys(r).forEach(function(e){t.style[e]=r[e]})}},e.isInViewPort=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:667;if(!t)return!1;var n=t.getBoundingClientRect(),r=n.top,o=n.bottom,i={top:a(),bottom:a()+window.innerHeight},u={top:i.top+r,bottom:i.top+o};return u.bottom>=i.top-e&&u.top<=i.bottom+e},e.isVisible=function(t){var e=c(t);return"none"!==e.display&&"hidden"!==e.visibility&&t.offsetHeight>0},e.indentTextStartingWithNumberOne=function(t,e,n){var r=t.querySelector(".textFitted");if(null!==r&&0===r.innerText.trim().indexOf("1")){if(!e)return void(r.style.textIndent="");try{var o=parseInt(r.style.fontSize.replace("px",""),10);o>0&&(r.style.textIndent="-"+o/(n?3.75:7.5)+"px")}catch(t){r.style.textIndent=""}}},e.indentTextNotStartingWithNumberOne=function(t){var e=t.querySelector(".textFitted");if(null!==e&&0!==e.innerText.trim().indexOf("1"))try{var n=parseInt(e.style.fontSize.replace("px",""),10);n>0&&(e.style.textIndent="-"+n/20+"px")}catch(t){e.style.textIndent=""}}},1:function(t,e,n){"use strict";function r(t,e,n,r){function o(){function o(){u=+new Date,n.apply(c,s)}function a(){i=void 0}var c=this,l=+new Date-u,s=arguments;r&&!i&&o(),i&&clearTimeout(i),void 0===r&&l>t?o():!0!==e&&(i=setTimeout(r?a:o,void 0===r?t-l:t))}var i=void 0,u=0;return"boolean"!=typeof e&&(r=n,n=e,e=void 0),o}function o(t,e,n){return void 0===n?r(t,e,!1):r(t,n,!1!==e)}Object.defineProperty(e,"__esModule",{value:!0}),e.throttle=r,e.debounce=o},10:function(t,e,n){"use strict";function r(){var t=window.navigator.userAgent.toUpperCase();return t.indexOf("SAFARI")>=0&&t.indexOf("CHROME")<0?document.body:document.querySelector("html")}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:25,n=document.querySelector(".header"),r=n?n.clientHeight:0,o=(0,f.getOffsetTop)(t)-r-e,i=o-(0,f.getScrollTop)();return{position:o,distance:i,animationSpeed:Math.abs(i)>1e3?1e3:Math.max(Math.abs(i),300)}}function i(t,e,n){if(0===n)return void(t.scrollTop=e);var r=t.scrollTop,o=e-r,i=0,u=function(t,e,n,r){return(t/=r/2)<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};p=new Date,function e(a){window.SCROLLING=!0,i+=20;var c=u(i,r,o,n);t.scrollTop=c,p==a&&i<n?setTimeout(e.bind(null,a),20):window.SCROLLING=!1}(p)}function u(t){if("Tab"===t.key&&t.shiftKey){var e=o(t.target);e.distance<100&&i(r(),e.position,0)}}function a(){document.body.addEventListener("keyup",u)}function c(t,e,n,u){if(t){var a=o(t,n),l=r();if(Math.abs(l.scrollTop-a.position)<d)return void(u&&u());i(l,a.position,a.animationSpeed),setTimeout(function(){c(t,null,n,u),e&&e.focus()},a.animationSpeed+100)}}function l(){var t=window.innerHeight+2,e=t-(0,f.getScrollTop)(),n=Math.abs(e)>1e3?1e3:Math.max(Math.abs(e),300);i(r(),t,n)}function s(t){var e=(0,f.getScrollLeft)(),n=(0,f.getScrollTop)();t.focus(),window.scrollTo(e,n)}Object.defineProperty(e,"__esModule",{value:!0});var f=n(0),d=3,p=new Date(0);e.default={addGlobalListeneres:a,scrollTo:c,scrollOneViewport:l,focusWithoutScroll:s}},2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return{small:matchMedia("screen and (max-width: 767px)"),medium:matchMedia("screen and (min-width: 768px)"),large:matchMedia("screen and (min-width: 1024px)"),headerLarge:matchMedia("screen and (min-width: 1110px)"),extraLarge:matchMedia("screen and (min-width: 1200px)"),cssLarge:matchMedia("screen and (min-width: 1240px)")}}()},28:function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(s===setTimeout)return setTimeout(t,0);if((s===n||!s)&&setTimeout)return s=setTimeout,setTimeout(t,0);try{return s(t,0)}catch(e){try{return s.call(null,t,0)}catch(e){return s.call(this,t,0)}}}function i(t){if(f===clearTimeout)return clearTimeout(t);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function u(){v&&p&&(v=!1,p.length?h=p.concat(h):m=-1,h.length&&a())}function a(){if(!v){var t=o(u);v=!0;for(var e=h.length;e;){for(p=h,h=[];++m<e;)p&&p[m].run();m=-1,e=h.length}p=null,v=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function l(){}var s,f,d=t.exports={};!function(){try{s="function"==typeof setTimeout?setTimeout:n}catch(t){s=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(t){f=r}}();var p,h=[],v=!1,m=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];h.push(new c(t,e)),1!==h.length||v||o(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.prependListener=l,d.prependOnceListener=l,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},40:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){"function"!=typeof NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach)}()},5:function(t,e,n){(function(e){var n=e.CustomEvent;t.exports=function(){try{var t=new n("cat",{detail:{foo:"bar"}});return"cat"===t.type&&"bar"===t.detail.foo}catch(t){}return!1}()?n:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(t,e){var n=document.createEvent("CustomEvent");return e?n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail):n.initCustomEvent(t,!1,!1,void 0),n}:function(t,e){var n=document.createEventObject();return n.type=t,e?(n.bubbles=Boolean(e.bubbles),n.cancelable=Boolean(e.cancelable),n.detail=e.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}}).call(e,n(8))},60:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var e=this;do{if(e.matches(t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null})}()},8:function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},88:function(t,e,n){(function(e,n){!function(e,n){t.exports=n()}(0,function(){"use strict";function t(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}function r(t){return"function"==typeof t}function o(t){q=t}function i(t){D=t}function u(){return void 0!==B?function(){B(c)}:a()}function a(){var t=setTimeout;return function(){return t(c,1)}}function c(){for(var t=0;t<z;t+=2){(0,J[t])(J[t+1]),J[t]=void 0,J[t+1]=void 0}z=0}function l(t,e){var n=this,r=new this.constructor(f);void 0===r[X]&&L(r);var o=n._state;if(o){var i=arguments[o-1];D(function(){return A(o,r,i,n._result)})}else S(n,r,t,e);return r}function s(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(f);return b(n,t),n}function f(){}function d(){return new TypeError("You cannot resolve a promise with itself")}function p(){return new TypeError("A promises callback cannot return that same promise.")}function h(t){try{return t.then}catch(t){return tt.error=t,tt}}function v(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}function m(t,e,n){D(function(t){var r=!1,o=v(n,e,function(n){r||(r=!0,e!==n?b(t,n):_(t,n))},function(e){r||(r=!0,x(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,x(t,o))},t)}function y(t,e){e._state===Q?_(t,e._result):e._state===Z?x(t,e._result):S(e,void 0,function(e){return b(t,e)},function(e){return x(t,e)})}function g(t,e,n){e.constructor===t.constructor&&n===l&&e.constructor.resolve===s?y(t,e):n===tt?(x(t,tt.error),tt.error=null):void 0===n?_(t,e):r(n)?m(t,e,n):_(t,e)}function b(e,n){e===n?x(e,d()):t(n)?g(e,n,h(n)):_(e,n)}function w(t){t._onerror&&t._onerror(t._result),T(t)}function _(t,e){t._state===$&&(t._result=e,t._state=Q,0!==t._subscribers.length&&D(T,t))}function x(t,e){t._state===$&&(t._state=Z,t._result=e,D(w,t))}function S(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+Q]=n,o[i+Z]=r,0===i&&t._state&&D(T,t)}function T(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,u=0;u<e.length;u+=3)r=e[u],o=e[u+n],r?A(n,r,o,i):o(i);t._subscribers.length=0}}function E(t,e){try{return t(e)}catch(t){return tt.error=t,tt}}function A(t,e,n,o){var i=r(n),u=void 0,a=void 0,c=void 0,l=void 0;if(i){if(u=E(n,o),u===tt?(l=!0,a=u.error,u.error=null):c=!0,e===u)return void x(e,p())}else u=o,c=!0;e._state!==$||(i&&c?b(e,u):l?x(e,a):t===Q?_(e,u):t===Z&&x(e,u))}function M(t,e){try{e(function(e){b(t,e)},function(e){x(t,e)})}catch(e){x(t,e)}}function O(){return et++}function L(t){t[X]=et++,t._state=void 0,t._result=void 0,t._subscribers=[]}function j(){return new Error("Array Methods must be provided an Array")}function F(t){return new nt(this,t).promise}function P(t){var e=this;return new e(k(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function N(t){var e=this,n=new e(f);return x(n,t),n}function C(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function H(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function V(){var t=void 0;if(void 0!==n)t=n;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===r&&!e.cast)return}t.Promise=rt}var I=void 0;I=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var k=I,z=0,B=void 0,q=void 0,D=function(t,e){J[z]=t,J[z+1]=e,2===(z+=2)&&(q?q(c):K())},R="undefined"!=typeof window?window:void 0,W=R||{},Y=W.MutationObserver||W.WebKitMutationObserver,G="undefined"==typeof self&&void 0!==e&&"[object process]"==={}.toString.call(e),U="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,J=new Array(1e3),K=void 0;K=G?function(){return function(){return e.nextTick(c)}}():Y?function(){var t=0,e=new Y(c),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}():U?function(){var t=new MessageChannel;return t.port1.onmessage=c,function(){return t.port2.postMessage(0)}}():void 0===R?function(){try{var t=Function("return this")().require("vertx");return B=t.runOnLoop||t.runOnContext,u()}catch(t){return a()}}():a();var X=Math.random().toString(36).substring(2),$=void 0,Q=1,Z=2,tt={error:null},et=0,nt=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(f),this.promise[X]||L(this.promise),k(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?_(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&_(this.promise,this._result))):x(this.promise,j())}return t.prototype._enumerate=function(t){for(var e=0;this._state===$&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===s){var o=h(t);if(o===l&&t._state!==$)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===rt){var i=new n(f);g(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===$&&(this._remaining--,t===Z?x(r,n):this._result[e]=n),0===this._remaining&&_(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;S(t,void 0,function(t){return n._settledAt(Q,e,t)},function(t){return n._settledAt(Z,e,t)})},t}(),rt=function(){function t(e){this[X]=O(),this._result=this._state=void 0,this._subscribers=[],f!==e&&("function"!=typeof e&&C(),this instanceof t?M(this,e):H())}return t.prototype.catch=function(t){return this.then(null,t)},t.prototype.finally=function(t){var e=this,n=e.constructor;return e.then(function(e){return n.resolve(t()).then(function(){return e})},function(e){return n.resolve(t()).then(function(){throw e})})},t}();return rt.prototype.then=l,rt.all=F,rt.race=P,rt.resolve=s,rt.reject=N,rt._setScheduler=o,rt._setAsap=i,rt._asap=D,rt.polyfill=V,rt.Promise=rt,rt})}).call(e,n(28),n(8))},89:function(t,e,n){"use strict";Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex",{value:function(t){if(null==this)throw new TypeError('"this" is null or not defined');var e=Object(this),n=e.length>>>0;if("function"!=typeof t)throw new TypeError("predicate must be a function");for(var r=arguments[1],o=0;o<n;){var i=e[o];if(t.call(r,i,o,e))return o;o++}return-1}})},9:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=/Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i,o=/iPad/i,i=/OS (\d+)_[\d_]+ like Mac OS X/i,u=e.isMobile=function(){return null!==window.navigator.userAgent.match(r)},a=e.isIPad=function(){return null!==window.navigator.userAgent.match(o)};e.getIOSMajorVersion=function(){var t=window.navigator.userAgent.match(i);if(t&&t.length>1){return t[1]}},e.applyDeviceClasses=function(t){u()&&t.classList.add("device-mobile"),a()&&t.classList.add("device-ipad")}},90:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function i(){if(window[p])return null;var t=new f.default(d);return document.dispatchEvent(t),window[p]=!0,t}function u(){window[p]=!1}function a(){var t=function(){m().forEach(function(t){(t.dataset.component||"").split(" ").filter(function(t){return t&&t.length>0&&window[t]&&"function"==typeof window[t]}).map(function(t){return window[t]}).forEach(function(e){var n=y(t);e.prototype.activate?g.initializeAndActivate(e,t,n):g.initialize(e,t,n)})})};document.addEventListener(d,t)}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e&&e.length>0?v(e):h();n&&n instanceof Element&&(n.dataset.noAuto=!0),document.addEventListener(d,function(e){return t(n,e)})}Object.defineProperty(e,"__esModule",{value:!0});var l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.dispatchThemeReady=i,e.resetThemeReadyLock=u,e.autoCoupleViews=a,e.onThemeReady=c;var s=n(5),f=function(t){return t&&t.__esModule?t:{default:t}}(s),d="theme.ready",p="THEME_READY_ALREADY_DISPATCHED",h=function(){var t=document.getElementsByTagName("script");return t.length>0&&t[t.length-1]?t[t.length-1].previousElementSibling:null},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return document.querySelector('[data-view="'+function(t){return(t+"").replace(/[\\"']/g,"\\$&").replace(/\u0000/g,"\\0")}(t)+'"]')},m=function(){return document.querySelectorAll("[data-component]:not([data-no-auto])")},y=function(t){var e=function(t){return t.toLowerCase().replace("data-props-","").split("-").map(function(t,e){return e>0?t.substr(0,1).toUpperCase()+t.substr(1):t}).join("")};return[].concat(o(t.attributes)).filter(function(t){return/^data-props-/gi.test(t.name)}).map(function(t){return r({},e(t.name),t.value)}).reduce(function(t,e){return l({},t,e)},{})},g={initialize:function(t,e){return new t(e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})},initializeAndActivate:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=new t;return r.activate(e,n),r}}},98:function(t,e,n){"use strict";(function(n){var r,o,i;Object.defineProperty(e,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=function(n,u){o=[],r=u,void 0!==(i="function"==typeof r?r.apply(e,o):r)&&(t.exports=i)}(void 0===n||u(n),function(){function t(t,u){if(!r(t)||!u.reProcess&&t.getAttribute("textFitted"))return!1;u.reProcess||t.setAttribute("textFitted",1);var a,c,l,s,f,d,p;if(l=t.innerHTML,s=n(t),c=e(t),!s||!u.widthOnly&&!c)throw u.widthOnly?new Error("Set a static width on the target element "+t.outerHTML+" before using textFit!"):new Error("Set a static height and width on the target element "+t.outerHTML+" before using textFit!");-1===l.indexOf("textFitted")?(a=document.createElement("span"),a.className="textFitted",a.style.display="inline-block",a.innerHTML=l,t.innerHTML="",t.appendChild(a)):(a=t.querySelector("span.textFitted"),o(a,"textFitAlignVert")&&(a.className=a.className.replace("textFitAlignVert",""),a.style.height="",t.className.replace("textFitAlignVertFlex",""))),u.alignHoriz&&(t.style["text-align"]="center",a.style["text-align"]="center");var h=u.multiLine;for(u.detectMultiLine&&!h&&a.scrollHeight>=2*parseInt(window.getComputedStyle(a)["font-size"],10)&&(h=!0),h||(t.style["white-space"]="nowrap"),f=u.minFontSize+1,p=u.maxFontSize+1;f<=p;)d=parseInt((f+p)/2,10),a.style.fontSize=d+"px",a.scrollWidth<=s&&(u.widthOnly||a.scrollHeight<=c)?f=d+1:p=d-1;if(a.style.fontSize=d-1+"px",u.alignVert){i();var v=a.scrollHeight;"static"===window.getComputedStyle(t).position&&(t.style.position="relative"),o(a,"textFitAlignVert")||(a.className=a.className+" textFitAlignVert"),a.style.height=v+"px",u.alignVertWithFlexbox&&!o(t,"textFitAlignVertFlex")&&(t.className=t.className+" textFitAlignVertFlex")}}function e(t){var e=window.getComputedStyle(t,null);return t.clientHeight-parseInt(e.getPropertyValue("padding-top"),10)-parseInt(e.getPropertyValue("padding-bottom"),10)}function n(t){var e=window.getComputedStyle(t,null);return t.clientWidth-parseInt(e.getPropertyValue("padding-left"),10)-parseInt(e.getPropertyValue("padding-right"),10)}function r(t){return"object"===("undefined"==typeof HTMLElement?"undefined":u(HTMLElement))?t instanceof HTMLElement:t&&"object"===(void 0===t?"undefined":u(t))&&null!==t&&1===t.nodeType&&"string"==typeof t.nodeName}function o(t,e){return(" "+t.className+" ").indexOf(" "+e+" ")>-1}function i(){if(!document.getElementById("textFitStyleSheet")){var t=[".textFitAlignVert{","position: absolute;","top: 0; right: 0; bottom: 0; left: 0;","margin: auto;","display: flex;","justify-content: center;","flex-direction: column;","}",".textFitAlignVertFlex{","display: flex;","}",".textFitAlignVertFlex .textFitAlignVert{","position: static;","}"].join(""),e=document.createElement("style");e.type="text/css",e.id="textFitStyleSheet",e.innerHTML=t,document.body.appendChild(e)}}var a={alignVert:!1,alignHoriz:!1,multiLine:!1,detectMultiLine:!0,minFontSize:6,maxFontSize:80,reProcess:!0,widthOnly:!1,alignVertWithFlexbox:!1};return function(e,n){n||(n={});var r={};for(var o in a)n.hasOwnProperty(o)?r[o]=n[o]:r[o]=a[o];"function"==typeof e.toArray&&(e=e.toArray());var i=Object.prototype.toString.call(e);"[object Array]"!==i&&"[object NodeList]"!==i&&"[object HTMLCollection]"!==i&&(e=[e]);for(var u=0;u<e.length;u++)t(e[u],r)}})}).call(e,n(8))}});