(()=>{var t={801:()=>{window.addEventListener("DOMContentLoaded",(function(){!function(){if(console.log("scriptstarted"),console.log("blabla"),"www.biovancia.com"===window.location.hostname){const t=new URLSearchParams(window.location.search),e=document.querySelector(".elementor-search-form");e.addEventListener("submit",(function(o){o.preventDefault(),t.set("s",e.querySelector('input[type="search"]').value);const r=new URL(window.location.href);r.search=t.toString(),window.location.href=r})),t.delete("s");const o=document.querySelectorAll("a");Array.from(o).filter((t=>{const e=t.getAttribute("href");return e.startsWith("https://www.biovancia.com")||e.startsWith("https://vl.linkinfosante.com")||e.startsWith("/produits/")||e.startsWith("/institut-biovancia/")})).forEach((e=>{const o=new URL(e.href);t.forEach(((t,e)=>{o.searchParams.set(e,t)})),console.log(e),t.has("lpid")&&t.has("cpid")&&"SPP"===t.get("la")&&"https://vl.linkinfosante.com"==o.origin&&(o.pathname="/click"),e.href=o.href})),dataLayer.push({scriptExecuted:!0}),console.log("scriptloaded")}}()}))}},e={};function o(r){var n=e[r];if(void 0!==n)return n.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,o),a.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";o(801)})()})();