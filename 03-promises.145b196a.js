var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t),t("eWCmQ");var i=t("iQIUW");const r=document.querySelector(".form");console.dir(r);const l=document.querySelector("input[name='delay']");console.dir(l);const s=document.querySelector("input[name='step']");console.dir(s);const c=document.querySelector("input[name='amount']");console.dir(c);const d=document.querySelector("button");console.dir(d),r.addEventListener("input",(function(e){console.log(e)})),d.addEventListener("submit",(function(e){console.log(e)})),(Math.random(),void new Promise(((e,o)=>{}))).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`),i.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`),i.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)}));
//# sourceMappingURL=03-promises.145b196a.js.map