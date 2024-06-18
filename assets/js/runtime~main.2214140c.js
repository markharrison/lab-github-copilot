(()=>{"use strict";var e,t,r,a,o,c={},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={exports:{}};return c[e].call(r.exports,r,r.exports,i),r.exports}i.m=c,e=[],i.O=(t,r,a,o)=>{if(!r){var c=1/0;for(l=0;l<e.length;l++){r=e[l][0],a=e[l][1],o=e[l][2];for(var n=!0,f=0;f<r.length;f++)(!1&o||c>=o)&&Object.keys(i.O).every((e=>i.O[e](r[f])))?r.splice(f--,1):(n=!1,o<c&&(c=o));if(n){e.splice(l--,1);var d=a();void 0!==d&&(t=d)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,a,o]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var c={};t=t||[null,r({}),r([]),r(r)];for(var n=2&a&&e;"object"==typeof n&&!~t.indexOf(n);n=r(n))Object.getOwnPropertyNames(n).forEach((t=>c[t]=()=>e[t]));return c.default=()=>e,i.d(o,c),o},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>"assets/js/"+({48:"a94703ab",84:"f7e07ba9",98:"a7bd4aaa",186:"a425f5cc",204:"0d5d8bfd",209:"cc0ad427",233:"04b1bc0d",256:"73f57335",261:"b8a7a03b",344:"a7ef8c09",401:"17896441",405:"0eed8cf1",520:"0cc8361e",647:"5e95c892",720:"6078a3ce",730:"ce035f10",742:"aba21aa0",854:"858dce4d"}[e]||e)+"."+{48:"accee9ff",84:"26d0774c",98:"025d2ef6",186:"1fffeb2f",204:"cc4a1da9",209:"122d196e",233:"6c505476",237:"7df77513",256:"91edd322",261:"0edd0b1c",344:"14feb25e",401:"6ba40e2f",405:"00aefd01",520:"cc5493c7",647:"0e1352c6",720:"8e3f8f06",730:"c66011a1",742:"976a639e",854:"82b63427"}[e]+".js",i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="lab-github-copilot:",i.l=(e,t,r,c)=>{if(a[e])a[e].push(t);else{var n,f;if(void 0!==r)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var u=d[l];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+r){n=u;break}}n||(f=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,i.nc&&n.setAttribute("nonce",i.nc),n.setAttribute("data-webpack",o+r),n.src=e),a[e]=[t];var b=(t,r)=>{n.onerror=n.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(r))),t)return t(r)},s=setTimeout(b.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=b.bind(null,n.onerror),n.onload=b.bind(null,n.onload),f&&document.head.appendChild(n)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/lab-github-copilot/",i.gca=function(e){return e={17896441:"401",a94703ab:"48",f7e07ba9:"84",a7bd4aaa:"98",a425f5cc:"186","0d5d8bfd":"204",cc0ad427:"209","04b1bc0d":"233","73f57335":"256",b8a7a03b:"261",a7ef8c09:"344","0eed8cf1":"405","0cc8361e":"520","5e95c892":"647","6078a3ce":"720",ce035f10:"730",aba21aa0:"742","858dce4d":"854"}[e]||e,i.p+i.u(e)},(()=>{var e={354:0,869:0};i.f.j=(t,r)=>{var a=i.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(354|869)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var c=i.p+i.u(t),n=new Error;i.l(c,(r=>{if(i.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.src;n.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",n.name="ChunkLoadError",n.type=o,n.request=c,a[1](n)}}),"chunk-"+t,t)}},i.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,c=r[0],n=r[1],f=r[2],d=0;if(c.some((t=>0!==e[t]))){for(a in n)i.o(n,a)&&(i.m[a]=n[a]);if(f)var l=f(i)}for(t&&t(r);d<c.length;d++)o=c[d],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(l)},r=self.webpackChunklab_github_copilot=self.webpackChunklab_github_copilot||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();