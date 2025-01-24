import{d as e,L as l,j as s,u as d}from"./index-cThg7JWm.js";import{M as i}from"./modal-BuZl5UqC.js";import{m as c}from"./modal.style-QXajm_cs.js";const p=e.section.attrs({className:"pos-r"})`
  ${c};
  --modal-bc: var(--surface);
  --modal-shadow: 8px 12px 32px 0 rgba(0, 0, 51, 0.16);

  width: 100%;
  height: fit-content;
  max-width: 640px;
  max-height: 640px;
  padding: 0;
  border-radius: 8px;
  //gap: 16px;
`,x=e.header.attrs({className:"pos-a"})`
  //gap: 16px;
  padding: 8px;
  top: 0;
  right: 0;
`,h=e.div.attrs({className:"flex column bb"})`
  width: 100%;
  min-height: 120px;
  padding: 32px;
  gap: 12px;
  justify-content: flex-start;
`,m=e(l).attrs({children:"Release",rel:"noopener noreferrer",target:"_blank"})`
  display: block;
  width: fit-content;
`,f=e.ul.attrs({className:"flex column fcs"})`
  list-style: circle;
  padding-left: 32px;
  gap: 4px;
`;function u(){const[a,t]=d();return{onClose:()=>{a.delete("modal"),t(a)}}}function C({log:a}){var o,r;const{onClose:t}=u();return a?s.jsxs(p,{children:[s.jsx(x,{children:s.jsx(i,{onClick:t})}),s.jsxs(h,{children:[s.jsxs("h2",{className:"t3 fwb fcs",children:["v",a.version," 변경사항"]}),s.jsx(m,{to:(o=a.release)!=null?o:""}),s.jsxs("address",{children:[a.date," 배포"]}),s.jsx(f,{children:(r=a.patch)==null?void 0:r.map(n=>s.jsx("li",{children:n},n))})]})]}):null}export{C as default};
