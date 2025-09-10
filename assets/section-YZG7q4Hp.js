import{d as a,j as i,q as c,c as s}from"./index-C4KhKhRK.js";import{m as p}from"./modal.style-DLhHwAjs.js";const g=a.section`
  ${p};
  --modal-bc: var(--surface);
  --modal-shadow: 8px 12px 32px 0 rgba(0, 0, 51, 0.16);

  position: relative;
  display: flex;
  flex-direction: column;
  //gap: 16px;

  width: 100%;
  max-width: 640px;
  padding: 0;
  border-radius: 8px;
  height: fit-content;
  max-height: calc(100vh - 160px);

  //@media (max-width: 480px) {
  //  padding: 16px;
  //}
`,f=a.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--scroll);
    -webkit-border-radius: 4px;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  padding: 32px;
  @media (max-width: 480px) {
    padding: 16px;
  }
`,w=a.button.attrs({"aria-label":"Close",children:i.jsx(c,{})})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 40px;
  height: 40px;
  box-sizing: border-box;

  position: absolute;
  top: 0;
  right: 0;
`,x=a.article`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,b=a.header.attrs({className:"s2 fwb fcs"})``,u=a.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-auto-rows: 40px;
  gap: 12px;
`,e=a.button.attrs({as:"li",className:"fwm"})`
  ${s};
  --button-lc: var(--lc-w);
  --button-fc: var(--link);

  border-width: 1px;
  border-style: solid;
  border-radius: 12px;

  &:hover {
    --button-lc: var(--link-lc);
  }
  &[data-active='true'] {
    --button-lc: var(--link-lc);
    --button-bc: var(--link-bc);
  }
`;function v({header:r,state:o,items:l,onClickAll:n,onClickItem:d}){return i.jsxs(x,{children:[i.jsx(b,{children:r}),i.jsxs(u,{children:[i.jsx(e,{"data-active":!o.length,onClick:n,children:"전체"}),l==null?void 0:l.map(t=>i.jsx(e,{"data-active":typeof o=="string"?o===t.value:o.includes(t.value),onClick:()=>{d(t.value)},children:t.label},`${t.label}+${t.value}`))]})]})}export{g as M,v as S,f as a,w as b};
