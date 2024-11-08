const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/page-5lNUjT2z.js","assets/vendor-react-BgBXYHvm.js","assets/vendor-react-dom-BBUhmhcj.js","assets/vendor-scheduler-B7dcc9wB.js","assets/vendor-react-router-dom-BNlwnQiy.js","assets/vendor-react-router-4iDMQ-pU.js","assets/vendor-@remix-run-DIosy_T7.js","assets/modal-Bgum7afW.js","assets/vendor-styled-components-D-sOn0X5.js","assets/vendor-tslib-CGNu0TuM.js","assets/vendor-@emotion-sScrWPmR.js","assets/vendor-stylis-DinRj2j6.js","assets/vendor-lodash-es-B37DsV7W.js","assets/loader-CF7w1U0Z.js","assets/IndexedItemDB-CedLf8j7.js","assets/vendor-idb-SGlR87fP.js","assets/vendor-zustand-BV59WVYb.js","assets/page-CFWXLCbG.js","assets/modal-uNky51QX.js","assets/layout-B9NXG6aq.js","assets/vendor-react-device-detect-DFzDjuWZ.js","assets/vendor-ua-parser-js-CEeYF1zk.js","assets/page-C4pjeqYO.js"])))=>i.map(i=>d[i]);
var q=Object.defineProperty,R=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var j=(s,t,o)=>t in s?q(s,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[t]=o,g=(s,t)=>{for(var o in t||(t={}))B.call(t,o)&&j(s,o,t[o]);if(w)for(var o of w(t))M.call(t,o)&&j(s,o,t[o]);return s},y=(s,t)=>R(s,z(t));var f=(s,t,o)=>new Promise((a,r)=>{var n=l=>{try{d(o.next(l))}catch(c){r(c)}},i=l=>{try{d(o.throw(l))}catch(c){r(c)}},d=l=>l.done?a(l.value):Promise.resolve(l.value).then(n,i);d((o=o.apply(s,t)).next())});import{j as e,r as h}from"./vendor-react-BgBXYHvm.js";import{c as C}from"./vendor-react-dom-BBUhmhcj.js";import{u as _,L as D,c as H,R as K}from"./vendor-react-router-dom-BNlwnQiy.js";import{d as m}from"./vendor-styled-components-D-sOn0X5.js";import{c as E}from"./vendor-lodash-es-B37DsV7W.js";import{c as U}from"./vendor-zustand-BV59WVYb.js";import{O as V,h as Z,i as x,j as Y}from"./vendor-react-router-4iDMQ-pU.js";import"./vendor-scheduler-B7dcc9wB.js";import"./vendor-@remix-run-DIosy_T7.js";import"./vendor-tslib-CGNu0TuM.js";import"./vendor-@emotion-sScrWPmR.js";import"./vendor-stylis-DinRj2j6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();const F="modulepreload",G=function(s){return"/alit/"+s},S={},b=function(t,o,a){let r=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),d=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));r=Promise.allSettled(o.map(l=>{if(l=G(l),l in S)return;S[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const p=document.createElement("link");if(p.rel=c?"stylesheet":F,c||(p.as="script"),p.crossOrigin="",p.href=l,d&&p.setAttribute("nonce",d),document.head.appendChild(p),c)return new Promise((P,T)=>{p.addEventListener("load",P),p.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${l}`)))})}))}function n(i){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=i,window.dispatchEvent(d),!d.defaultPrevented)throw i}return r.then(i=>{for(const d of i||[])d.status==="rejected"&&n(d.reason);return t().catch(n)})},$=m.header.attrs({className:"flex jc-sb ai-c bb pos-s"})`
  background-color: var(--surface-main);
  border-bottom: 1px solid var(--lc-w);
  height: 52px;
  padding: 0 24px;

  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(4px);
`,J=m.h1.attrs({className:"flex jc-c ai-c"})`
  width: fit-content;
  user-select: none;

  & img {
    height: 36px;
  }
`,W=m.nav.attrs({className:"flex ai-c b2"})`
  gap: 8px;
`;function Q(){return e.jsx("svg",{version:"1.0",width:"100%",height:"100%",viewBox:"0 0 144 144",preserveAspectRatio:"xMidYMid meet",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("g",{transform:"translate(0.000000,144.000000) scale(0.100000,-0.100000)",fill:"currentColor",stroke:"none",children:e.jsx("path",{d:"M591 1314 c-325 -70 -535 -394 -466 -719 70 -328 393 -539 720 -470 328 70 539 393 470 720 -70 329 -396 541 -724 469z m269 -564 l0 -410 -40 0 -40 0 0 410 0 410 40 0 40 0 0 -410z m-337 219 c44 -53 6 -129 -64 -129 -61 0 -94 55 -68 114 22 49 96 57 132 15z m530 0 c41 -50 4 -129 -61 -129 -88 0 -114 105 -37 149 27 15 76 5 98 -20z m-373 -424 l0 -205 -40 0 -40 0 0 165 0 165 -110 0 -110 0 0 40 0 40 150 0 150 0 0 -205z m-166 24 c55 -43 18 -139 -54 -139 -19 0 -40 9 -55 25 -73 72 28 178 109 114z m531 -4 c50 -49 15 -135 -55 -135 -41 0 -80 39 -80 80 0 41 39 80 80 80 19 0 40 -9 55 -25z"})})})}const k=m.button`
  font-family: inherit;

  display: inline-flex;
  flex-flow: row nowrap;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;

  user-select: none;
  cursor: pointer;
  transition:
    color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 150ms cubic-bezier(0.4, 0, 0.2, 1);

  background-color: var(--button-bc, initial);
  color: var(--button-fc, inherit);
  border-color: var(--button-lc, initial);

  &:disabled {
    cursor: default;
  }
`,v=m(k)`
  --button-bc: transparent;
  --button-fc: var(--primary);
  --button-lc: var(--lc-w);

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      --button-fc: var(--primary-hover);
      --button-lc: var(--lc);
      --button-bc: var(--lc-w);
    }
  }
  &:disabled {
    --button-fc: var(--primary);
  }

  border-width: 1px;
  border-style: solid;
  border-radius: 12px;
  padding: 8px;
`,X=m(k).attrs({className:"caption fwb"})`
  --button-bc: #14171a;
  --button-fc: #b6bec9;
  --button-lc: #303840;

  border-width: 1px;
  border-style: solid;
`,ee=m(v).attrs({className:"lh",type:"button"})`
  padding: 6px;
  height: 36px;
  gap: 6px;

  @media (max-width: 768px) {
    .desktop {
      display: none;
    }
  }

  .span {
    min-width: 45px;
  }
  .shortcut {
    min-width: 46px;
  }
`,I=m(v).attrs({as:"a",rel:"noopener noreferrer",target:"_blank"})`
  height: 36px;
  padding: 6px;
`,te=m(v).attrs({className:"pos-r"})`
  height: 36px;
  padding: 6px;
`,re=m(X).attrs({as:"span"})`
  border-radius: 6px;
  padding: 0 4px;
`;function oe(){return e.jsx(I,{href:"https://arca.live/b/azurlane/45593816","aria-label":"아카라이브 장비 설명회 페이지로 이동",children:e.jsx(Q,{})})}function ne(){return e.jsx("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 144 144",preserveAspectRatio:"xMidYMid meet",children:e.jsx("g",{transform:"translate(0.000000,144.000000) scale(0.100000,-0.100000)",fill:"currentColor",stroke:"none",children:e.jsx("path",{d:"M582 1345 c-286 -62 -502 -331 -502 -625 0 -95 24 -191 71 -288 57 -117 158 -219 280 -281 115 -58 129 -54 129 39 l0 69 -62 -1 c-83 -2 -121 19 -152 80 -13 26 -40 62 -60 81 -39 37 -38 51 1 51 19 0 43 -18 89 -66 l63 -65 58 3 58 3 21 45 21 45 -53 12 c-137 32 -200 98 -225 238 -13 79 -2 148 33 205 17 28 21 48 19 95 -1 33 2 73 8 88 10 26 14 28 44 22 17 -4 57 -20 87 -36 48 -25 60 -27 95 -19 22 5 74 10 115 10 41 0 93 -5 115 -10 35 -8 47 -6 95 19 30 16 71 32 92 36 32 6 37 4 44 -17 4 -12 8 -55 9 -93 0 -49 5 -79 17 -97 44 -67 48 -200 10 -288 -35 -80 -120 -140 -219 -156 l-42 -6 17 -26 c13 -20 18 -57 22 -155 6 -166 7 -167 127 -107 211 105 353 333 353 570 0 404 -382 711 -778 625z"})})})}function se(){return e.jsx(I,{href:"https://github.com/gateisbug/alit","aria-label":"깃허브 리드미 페이지로 이동",children:e.jsx(ne,{})})}function ie(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"100%",width:"100%",viewBox:"0 -960 960 960",fill:"currentColor",children:e.jsx("path",{d:"M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"})})}const L="search-modal",N="notification-modal",ze="item-modal",A=U(s=>({lists:[],modalAdd:t=>s(({lists:o})=>{const a=E(o),r=a.findIndex(n=>n.id===t.id);return r>=0&&a.splice(r,1),a.push(t),{lists:a}}),modalRemove:t=>s(({lists:o})=>{const a=E(o),r=a.findIndex(n=>n.id===t);return r>=0?(a.splice(r,1),{lists:a}):{lists:o}})})),ce=h.lazy(()=>b(()=>import("./page-5lNUjT2z.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])));function ae(){const{modalAdd:s}=A(),[t,o]=_(),a=()=>{t.set("modal",L),o(t)};return h.useEffect(()=>{s({id:L,children:e.jsx(ce,{})})},[]),h.useEffect(()=>{if(t.get("modal")!==null)return;const n=i=>{i.ctrlKey&&i.key==="k"&&(i.preventDefault(),a())};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[t]),{clickHandler:a}}function le(){const{clickHandler:s}=ae();return e.jsxs(ee,{onClick:s,"aria-label":"검색 버튼",children:[e.jsx(ie,{}),e.jsx("span",{className:"caption desktop span",children:"Search..."}),e.jsx(re,{className:"desktop shortcut",children:"Ctrl+K"})]})}function de(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"100%",width:"100%",viewBox:"0 -960 960 960",fill:"currentColor",children:e.jsx("path",{d:"M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"})})}const ue=m.span`
  position: absolute;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  background-color: var(--badge-bc, inherit);
`,he=m(ue)`
  --badge-bc: #fd5361;

  width: 8px;
  height: 8px;
  border-radius: 50%;

  top: 0;
  right: 0;

  //transition: transform 150ms ease-in-out;
  &[data-show='true'] {
    transform: scale(1);
  }
  &[data-show='false'] {
    transform: scale(0);
  }
`,O={version:"0.0.0",release:"",date:"0000-00-00",patch:[],isOpen:!0},me=h.lazy(()=>b(()=>import("./page-CFWXLCbG.js"),__vite__mapDeps([17,1,4,2,3,5,6,18,7,8,9,10,11])));function pe(){const{modalAdd:s}=A(),[t,o]=_(),a="2.4.7",[r,n]=h.useState(O),i=()=>f(this,null,function*(){n(c=>{const u=y(g({},c),{isOpen:!0});return localStorage.setItem("version",JSON.stringify(u)),u}),t.set("modal",N),o(t)}),d=()=>{var u;const c=(u=localStorage.getItem("version"))!=null?u:"";try{return JSON.parse(c)}catch(p){return}},l=h.useCallback(()=>f(this,null,function*(){var c;try{return(c=yield(yield fetch("json/change.json")).json())!=null?c:O}catch(u){throw new Error("Failed to fetch item")}}),[]);return h.useEffect(()=>{const c=d();(c==null?void 0:c.version)!==a?l().then(u=>{localStorage.setItem("version",JSON.stringify(u)),n(g({},u))}).catch(u=>{throw new Error(u)}):n(c)},[]),h.useEffect(()=>{r!==void 0&&s({id:N,children:e.jsx(me,{log:r})})},[r]),{notOpen:(r==null?void 0:r.isOpen)!==!0,handlerNotiButton:i}}function fe(){const{notOpen:s,handlerNotiButton:t}=pe();return e.jsxs(te,{onClick:t,"aria-label":"변경사항 보기",children:[e.jsx(de,{}),e.jsx(he,{"data-show":s})]})}function xe(){return e.jsx($,{children:e.jsxs("div",{className:"wrap flex jc-sb ai-c bb",children:[e.jsx(J,{children:e.jsx(D,{to:"/item",className:"flex",children:e.jsx("img",{src:"assets/logo.png",width:36,height:36,alt:"logo",className:"b2"})})}),e.jsxs(W,{children:[e.jsx(le,{}),e.jsx(oe,{}),e.jsx(se,{}),e.jsx(fe,{})]})]})})}const be=h.lazy(()=>b(()=>import("./layout-B9NXG6aq.js"),__vite__mapDeps([19,1,7,8,9,10,11,20,21,2,3,4,5,6,12,16])));function ge(){return e.jsxs("div",{className:"flex column h100",children:[e.jsx(xe,{}),e.jsx(h.Suspense,{children:e.jsx(V,{})}),e.jsx(h.Suspense,{children:e.jsx(be,{})})]})}const ve=h.lazy(()=>f(void 0,null,function*(){return b(()=>import("./page-C4pjeqYO.js"),__vite__mapDeps([22,1,13,8,9,10,11,2,3,4,5,6,12,16]))})),we=Z(e.jsxs(x,{path:"/",element:e.jsx(ge,{}),children:[e.jsx(x,{index:!0,element:e.jsx(Y,{to:"item",replace:!0})}),e.jsx(x,{path:"item",children:e.jsx(x,{index:!0,element:e.jsx(ve,{})})})]})),je=H(we,{basename:"/"});function ye(){return e.jsx(K,{router:je})}C(document.getElementById("root")).render(e.jsx(h.StrictMode,{children:e.jsx(ye,{})}));export{ze as I,X as S,b as _,L as a,ie as b,A as u};
