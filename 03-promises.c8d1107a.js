!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequired7c6=i);var r=i("6JpON"),l=document.querySelector(".form");function u(n,o){var t=Math.random()>.3,i=new Promise((function(e,i){setTimeout((function(){t?e({position:n,delay:o}):i({position:n,delay:o})}),o)}));i.then((function(n){var o=n.position,t=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;e(r).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))})),console.log(i)}l.addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(l.elements.delay.value),o=Number(l.elements.step.value),t=Number(l.elements.amount.value),i=1;i<=t;i++)u(i,n),n+=o}))}();
//# sourceMappingURL=03-promises.c8d1107a.js.map