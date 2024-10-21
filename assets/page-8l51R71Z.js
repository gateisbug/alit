var m=(i,e,s)=>new Promise((r,n)=>{var c=a=>{try{t(s.next(a))}catch(d){n(d)}},p=a=>{try{t(s.throw(a))}catch(d){n(d)}},t=a=>a.done?r(a.value):Promise.resolve(a.value).then(c,p);t((s=s.apply(i,e)).next())});import{j as o,r as h}from"./vendor-react-BgBXYHvm.js";import{L as x,u as f}from"./vendor-react-router-dom-BNlwnQiy.js";import{M as u}from"./modal-DOf8EwIw.js";import{a as g}from"./modal-Bgum7afW.js";import{d as l}from"./vendor-styled-components-D-sOn0X5.js";import"./vendor-react-dom-BBUhmhcj.js";import"./vendor-scheduler-B7dcc9wB.js";import"./vendor-react-router-4iDMQ-pU.js";import"./vendor-@remix-run-DIosy_T7.js";import"./vendor-tslib-CGNu0TuM.js";import"./vendor-@emotion-sScrWPmR.js";import"./vendor-stylis-DinRj2j6.js";const j=l(g).attrs({className:"pos-r"})`
  --modal-surface: var(--surface);

  width: 100%;
  height: fit-content;
  max-width: 640px;
  max-height: 640px;
  padding: 0;
  border-radius: 8px;
  //gap: 16px;
`,w=l.header.attrs({className:"pos-a"})`
  //gap: 16px;
  padding: 8px;
  top: 0;
  right: 0;
`,C=l.div.attrs({className:"flex column bb"})`
  width: 100%;
  min-height: 120px;
  padding: 32px;
  gap: 12px;
  justify-content: flex-start;
`,N=l(x).attrs({children:"Release"})`
  display: block;
  width: fit-content;
`,M=l.ul.attrs({className:"flex column fcs"})`
  list-style: circle;
  padding-left: 32px;
  gap: 4px;
`,y={version:"0.0.0",release:"",date:"0000-00-00",patch:[]};function E(i){const[e,s]=h.useState(void 0),[r,n]=f(),c=h.useCallback(()=>m(this,null,function*(){var t;try{return(t=yield(yield fetch("json/change.json")).json())!=null?t:y}catch(a){throw new Error("Failed to fetch item")}}),[]),p=()=>{r.delete("modal"),n(r)};return h.useEffect(()=>{i?s(i):c().then(t=>{s(t),localStorage.setItem("version",JSON.stringify(t))}).catch(t=>{throw new Error(t)})},[]),{change:e,onClose:p}}function D({log:i}){var r,n;const{change:e,onClose:s}=E(i);return e?o.jsxs(j,{children:[o.jsx(w,{children:o.jsx(u,{onClick:s})}),o.jsxs(C,{children:[o.jsxs("h2",{className:"t3 fwb fcs",children:["v",e.version," 변경사항"]}),o.jsx(N,{to:(r=e.release)!=null?r:""}),o.jsxs("address",{children:[e.date," 배포"]}),o.jsx(M,{children:(n=e.patch)==null?void 0:n.map(c=>o.jsx("li",{children:c},c))})]})]}):null}export{D as default};
