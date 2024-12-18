import{r,j as m}from"./vendor-react-BgBXYHvm.js";import{l as n,d as p}from"./vendor-styled-components-DQH6gzwU.js";import{i as s}from"./vendor-react-device-detect-DFzDjuWZ.js";import{r as u}from"./vendor-react-dom-BBUhmhcj.js";import{u as b}from"./vendor-react-router-dom-BNlwnQiy.js";import{u as f}from"./index-BDcRepFZ.js";import"./vendor-tslib-wbdO-F7s.js";import"./vendor-@emotion-sScrWPmR.js";import"./vendor-stylis-DinRj2j6.js";import"./vendor-ua-parser-js-CEeYF1zk.js";import"./vendor-scheduler-B7dcc9wB.js";import"./vendor-react-router-4iDMQ-pU.js";import"./vendor-@remix-run-DIosy_T7.js";import"./vendor-lodash-es-B37DsV7W.js";import"./vendor-zustand-BV59WVYb.js";const h=n`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: var(--backdrop-bc, inherit);
  z-index: var(--backdrop-z, 1000);

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`,y="item-modal",g=p.div`
  ${h};

  --backdrop-bc: rgba(0, 0, 0, 0.5);
  --backdrop-z: 1100;
`;function R(){const{lists:a}=f(),[t,l]=b(),o=r.useMemo(()=>a.find(e=>e.id===t.get("modal")),[a,t]),c=r.useCallback((e,d)=>{const i=document.getElementById(d);e.target===i&&(t.delete("keyword"),t.delete("modal"),l(t))},[t,a]);return r.useEffect(()=>{document.getElementById(y)===null&&(t.delete("modal"),l(t))},[]),r.useEffect(()=>{if(t.get("modal")!==null){const d=window.innerWidth>document.documentElement.clientWidth,i=document.body.getAttribute("style");d&&!i&&document.body.setAttribute("style",s?"overflow:hidden;":"overflow:hidden;padding-right:17px;")}else document.body.removeAttribute("style")},[t,s]),o?u.createPortal(m.jsx(g,{onClick:e=>{c(e,o==null?void 0:o.id)},id:o==null?void 0:o.id,children:o==null?void 0:o.children},o==null?void 0:o.id),document.body):null}export{R as default};
