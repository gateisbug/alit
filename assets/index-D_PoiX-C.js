const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/page-BImB3E6v.js","assets/vendor-react-BgBXYHvm.js","assets/vendor-react-dom-BBUhmhcj.js","assets/vendor-scheduler-B7dcc9wB.js","assets/vendor-react-router-dom-BNlwnQiy.js","assets/vendor-react-router-4iDMQ-pU.js","assets/vendor-@remix-run-DIosy_T7.js","assets/modal-Bgum7afW.js","assets/vendor-styled-components-D-sOn0X5.js","assets/vendor-tslib-CGNu0TuM.js","assets/vendor-@emotion-sScrWPmR.js","assets/vendor-stylis-DinRj2j6.js","assets/vendor-lodash-es-B37DsV7W.js","assets/loader-CF7w1U0Z.js","assets/IndexedItemDB-CEKjFcG0.js","assets/vendor-idb-SGlR87fP.js","assets/vendor-zustand-BV59WVYb.js","assets/page-8l51R71Z.js","assets/modal-DOf8EwIw.js","assets/layout-BLJZTP1J.js","assets/vendor-react-device-detect-DFzDjuWZ.js","assets/vendor-ua-parser-js-CEeYF1zk.js","assets/page-BwyHpBkQ.js"])))=>i.map(i=>d[i]);
var x=(c,s,i)=>new Promise((a,t)=>{var r=o=>{try{l(i.next(o))}catch(h){t(h)}},n=o=>{try{l(i.throw(o))}catch(h){t(h)}},l=o=>o.done?a(o.value):Promise.resolve(o.value).then(r,n);l((i=i.apply(c,s)).next())});import{j as e,r as d}from"./vendor-react-BgBXYHvm.js";import{c as P}from"./vendor-react-dom-BBUhmhcj.js";import{u as E,L as q,c as I,R as T}from"./vendor-react-router-dom-BNlwnQiy.js";import{d as u}from"./vendor-styled-components-D-sOn0X5.js";import{c as v}from"./vendor-lodash-es-B37DsV7W.js";import{c as A}from"./vendor-zustand-BV59WVYb.js";import{O as R,h as z,i as p,j as O}from"./vendor-react-router-4iDMQ-pU.js";import"./vendor-scheduler-B7dcc9wB.js";import"./vendor-@remix-run-DIosy_T7.js";import"./vendor-tslib-CGNu0TuM.js";import"./vendor-@emotion-sScrWPmR.js";import"./vendor-stylis-DinRj2j6.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const B="modulepreload",M=function(c){return"/alit/"+c},w={},f=function(s,i,a){let t=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),l=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));t=Promise.allSettled(i.map(o=>{if(o=M(o),o in w)return;w[o]=!0;const h=o.endsWith(".css"),g=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${g}`))return;const m=document.createElement("link");if(m.rel=h?"stylesheet":B,h||(m.as="script"),m.crossOrigin="",m.href=o,l&&m.setAttribute("nonce",l),document.head.appendChild(m),h)return new Promise((k,N)=>{m.addEventListener("load",k),m.addEventListener("error",()=>N(new Error(`Unable to preload CSS for ${o}`)))})}))}function r(n){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=n,window.dispatchEvent(l),!l.defaultPrevented)throw n}return t.then(n=>{for(const l of n||[])l.status==="rejected"&&r(l.reason);return s().catch(r)})},C=u.header.attrs({className:"flex jc-sb ai-c bb pos-s"})`
  background-color: var(--surface-main);
  border-bottom: 1px solid var(--lc-w);
  height: 52px;
  padding: 0 24px;

  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(4px);
`,D=u.h1.attrs({className:"flex jc-c ai-c"})`
  width: fit-content;
  user-select: none;

  & img {
    height: 36px;
  }
`,H=u.nav.attrs({className:"flex ai-c b2"})`
  gap: 8px;
`;function K(){return e.jsx("svg",{version:"1.0",width:"100%",height:"100%",viewBox:"0 0 144 144",preserveAspectRatio:"xMidYMid meet",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("g",{transform:"translate(0.000000,144.000000) scale(0.100000,-0.100000)",fill:"currentColor",stroke:"none",children:e.jsx("path",{d:"M591 1314 c-325 -70 -535 -394 -466 -719 70 -328 393 -539 720 -470 328 70 539 393 470 720 -70 329 -396 541 -724 469z m269 -564 l0 -410 -40 0 -40 0 0 410 0 410 40 0 40 0 0 -410z m-337 219 c44 -53 6 -129 -64 -129 -61 0 -94 55 -68 114 22 49 96 57 132 15z m530 0 c41 -50 4 -129 -61 -129 -88 0 -114 105 -37 149 27 15 76 5 98 -20z m-373 -424 l0 -205 -40 0 -40 0 0 165 0 165 -110 0 -110 0 0 40 0 40 150 0 150 0 0 -205z m-166 24 c55 -43 18 -139 -54 -139 -19 0 -40 9 -55 25 -73 72 28 178 109 114z m531 -4 c50 -49 15 -135 -55 -135 -41 0 -80 39 -80 80 0 41 39 80 80 80 19 0 40 -9 55 -25z"})})})}const L=u.button`
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
`,b=u(L)`
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
`,V=u(L).attrs({className:"caption fwb"})`
  --button-bc: #14171a;
  --button-fc: #b6bec9;
  --button-lc: #303840;

  border-width: 1px;
  border-style: solid;
`,Z=u(b).attrs({className:"lh",type:"button"})`
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
`,S=u(b).attrs({as:"a",rel:"noopener noreferrer",target:"_blank"})`
  height: 36px;
  padding: 6px;
`,U=u(b).attrs({className:"pos-r"})`
  height: 36px;
  padding: 6px;
`,Y=u(V).attrs({as:"span"})`
  border-radius: 6px;
  padding: 0 4px;
`;function $(){return e.jsx(S,{href:"https://arca.live/b/azurlane/45593816","aria-label":"아카라이브 장비 설명회 페이지로 이동",children:e.jsx(K,{})})}function G(){return e.jsx("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 144 144",preserveAspectRatio:"xMidYMid meet",children:e.jsx("g",{transform:"translate(0.000000,144.000000) scale(0.100000,-0.100000)",fill:"currentColor",stroke:"none",children:e.jsx("path",{d:"M582 1345 c-286 -62 -502 -331 -502 -625 0 -95 24 -191 71 -288 57 -117 158 -219 280 -281 115 -58 129 -54 129 39 l0 69 -62 -1 c-83 -2 -121 19 -152 80 -13 26 -40 62 -60 81 -39 37 -38 51 1 51 19 0 43 -18 89 -66 l63 -65 58 3 58 3 21 45 21 45 -53 12 c-137 32 -200 98 -225 238 -13 79 -2 148 33 205 17 28 21 48 19 95 -1 33 2 73 8 88 10 26 14 28 44 22 17 -4 57 -20 87 -36 48 -25 60 -27 95 -19 22 5 74 10 115 10 41 0 93 -5 115 -10 35 -8 47 -6 95 19 30 16 71 32 92 36 32 6 37 4 44 -17 4 -12 8 -55 9 -93 0 -49 5 -79 17 -97 44 -67 48 -200 10 -288 -35 -80 -120 -140 -219 -156 l-42 -6 17 -26 c13 -20 18 -57 22 -155 6 -166 7 -167 127 -107 211 105 353 333 353 570 0 404 -382 711 -778 625z"})})})}function F(){return e.jsx(S,{href:"https://github.com/gateisbug/alit","aria-label":"깃허브 리드미 페이지로 이동",children:e.jsx(G,{})})}function J(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"100%",width:"100%",viewBox:"0 -960 960 960",fill:"currentColor",children:e.jsx("path",{d:"M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"})})}const j="search-modal",y="notification-modal",_e="item-modal",_=A(c=>({lists:[],modalAdd:s=>c(({lists:i})=>{const a=v(i),t=a.findIndex(r=>r.id===s.id);return t>=0&&a.splice(t,1),a.push(s),{lists:a}}),modalRemove:s=>c(({lists:i})=>{const a=v(i),t=a.findIndex(r=>r.id===s);return t>=0?(a.splice(t,1),{lists:a}):{lists:i}})})),W=d.lazy(()=>f(()=>import("./page-BImB3E6v.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])));function Q(){const{modalAdd:c}=_(),[s,i]=E(),a=()=>{s.set("modal",j),i(s)};return d.useEffect(()=>{c({id:j,children:e.jsx(W,{})})},[]),d.useEffect(()=>{if(s.get("modal")!==null)return;const r=n=>{n.ctrlKey&&n.key==="k"&&(n.preventDefault(),a())};return window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}},[s]),{clickHandler:a}}function X(){const{clickHandler:c}=Q();return e.jsxs(Z,{onClick:c,"aria-label":"검색 버튼",children:[e.jsx(J,{}),e.jsx("span",{className:"caption desktop span",children:"Search..."}),e.jsx(Y,{className:"desktop shortcut",children:"Ctrl+K"})]})}function ee(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"100%",width:"100%",viewBox:"0 -960 960 960",fill:"currentColor",children:e.jsx("path",{d:"M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"})})}const te=u.span`
  position: absolute;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  background-color: var(--badge-bc, inherit);
`,re=u(te)`
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
`,oe=d.lazy(()=>f(()=>import("./page-8l51R71Z.js"),__vite__mapDeps([17,1,4,2,3,5,6,18,7,8,9,10,11])));function ne(){const{modalAdd:c}=_(),[s,i]=E(),a="2.4.0",[t,r]=d.useState(!1),n=()=>x(this,null,function*(){r(!1),s.set("modal",y),i(s)}),l=()=>{var h;const o=(h=localStorage.getItem("version"))!=null?h:"";try{return JSON.parse(o)}catch(g){return}};return d.useEffect(()=>{const o=l();r((o==null?void 0:o.version)!==a)},[]),d.useEffect(()=>{const o=l();c({id:y,children:e.jsx(oe,{log:t?void 0:o})})},[t]),{versionChange:t,handlerNotiButton:n}}function se(){const{versionChange:c,handlerNotiButton:s}=ne();return e.jsxs(U,{onClick:s,"aria-label":"변경사항 보기",children:[e.jsx(ee,{}),e.jsx(re,{"data-show":c})]})}function ie(){return e.jsx(C,{children:e.jsxs("div",{className:"wrap flex jc-sb ai-c bb",children:[e.jsx(D,{children:e.jsx(q,{to:"/item",className:"flex",children:e.jsx("img",{src:"assets/logo.png",width:36,height:36,alt:"logo",className:"b2"})})}),e.jsxs(H,{children:[e.jsx(X,{}),e.jsx($,{}),e.jsx(F,{}),e.jsx(se,{})]})]})})}const ae=d.lazy(()=>f(()=>import("./layout-BLJZTP1J.js"),__vite__mapDeps([19,1,7,8,9,10,11,2,3,4,5,6,20,21,12,16])));function ce(){return e.jsxs("div",{className:"flex column h100",children:[e.jsx(ie,{}),e.jsx(d.Suspense,{children:e.jsx(R,{})}),e.jsx(d.Suspense,{children:e.jsx(ae,{})})]})}const le=d.lazy(()=>x(void 0,null,function*(){return f(()=>import("./page-BwyHpBkQ.js"),__vite__mapDeps([22,1,13,8,9,10,11,2,3,4,5,6,12,16]))})),de=z(e.jsxs(p,{path:"/",element:e.jsx(ce,{}),children:[e.jsx(p,{index:!0,element:e.jsx(O,{to:"item",replace:!0})}),e.jsx(p,{path:"item",children:e.jsx(p,{index:!0,element:e.jsx(le,{})})})]})),ue=I(de,{basename:"/"});function he(){return e.jsx(T,{router:ue})}P(document.getElementById("root")).render(e.jsx(d.StrictMode,{children:e.jsx(he,{})}));export{_e as I,V as S,f as _,j as a,J as b,_ as u};
