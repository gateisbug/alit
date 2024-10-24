import{j as s}from"./vendor-react-BgBXYHvm.js";import{L as n,u as d}from"./vendor-react-router-dom-BNlwnQiy.js";import{M as l}from"./modal-uNky51QX.js";import{a as c}from"./modal-Bgum7afW.js";import{d as a}from"./vendor-styled-components-D-sOn0X5.js";import"./vendor-react-dom-BBUhmhcj.js";import"./vendor-scheduler-B7dcc9wB.js";import"./vendor-react-router-4iDMQ-pU.js";import"./vendor-@remix-run-DIosy_T7.js";import"./vendor-tslib-CGNu0TuM.js";import"./vendor-@emotion-sScrWPmR.js";import"./vendor-stylis-DinRj2j6.js";const p=a(c).attrs({className:"pos-r"})`
  --modal-surface: var(--surface);

  width: 100%;
  height: fit-content;
  max-width: 640px;
  max-height: 640px;
  padding: 0;
  border-radius: 8px;
  //gap: 16px;
`,m=a.header.attrs({className:"pos-a"})`
  //gap: 16px;
  padding: 8px;
  top: 0;
  right: 0;
`,x=a.div.attrs({className:"flex column bb"})`
  width: 100%;
  min-height: 120px;
  padding: 32px;
  gap: 12px;
  justify-content: flex-start;
`,h=a(n).attrs({children:"Release"})`
  display: block;
  width: fit-content;
`,f=a.ul.attrs({className:"flex column fcs"})`
  list-style: circle;
  padding-left: 32px;
  gap: 4px;
`;function u(){const[t,e]=d();return{onClose:()=>{t.delete("modal"),e(t)}}}function R({log:t}){var o,r;const{onClose:e}=u();return t?s.jsxs(p,{children:[s.jsx(m,{children:s.jsx(l,{onClick:e})}),s.jsxs(x,{children:[s.jsxs("h2",{className:"t3 fwb fcs",children:["v",t.version," 변경사항"]}),s.jsx(h,{to:(o=t.release)!=null?o:""}),s.jsxs("address",{children:[t.date," 배포"]}),s.jsx(f,{children:(r=t.patch)==null?void 0:r.map(i=>s.jsx("li",{children:i},i))})]})]}):null}export{R as default};
