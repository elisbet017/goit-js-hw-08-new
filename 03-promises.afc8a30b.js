!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o("h6c0i");const r={submitBtn:document.querySelector('[type="submit"]'),delay:document.querySelector('[name="delay"]').value,step:document.querySelector('[name="step"]').value,amount:document.querySelector('[name="amount"]').value};function u(e,t){new Promise(((n,o)=>{Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})})).then((n=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((n=>{i.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}))}r.submitBtn.addEventListener("submit",(function(e){e.preventDefault(),setTimeout((()=>{for(let e=1;e<=r.amount;e+=1)u(e,r.step)}),r.delay)}))}();
//# sourceMappingURL=03-promises.afc8a30b.js.map
