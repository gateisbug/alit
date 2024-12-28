import{d as n,c as o,j as e,I as d,e as u,f as s,g as x,h as b,k as p,m as h,r as v}from"./index-ChMF3pDD.js";const l=n.button`
  ${o};

  --button-bc: var(--primary);
  --button-fc: var(--on-primary);
  --button-lc: transparent;

  width: 56px;
  height: 56px;
  border-radius: 50%;

  box-shadow:
    rgba(0, 0, 0, 0.2) 0 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0 6px 10px 0,
    rgba(0, 0, 0, 0.12) 0 1px 18px 0;
  pointer-events: auto;

  & > svg {
    width: 24px;
    height: 24px;
    transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }
  &[data-active='true'] > svg {
    transform: rotate(45deg);
    --button-bc: var(--primary-hover);
  }
`,f=n.div`
  //--speeddial-z: 1050;
  z-index: 1050;
  display: flex;
  align-items: center;
  pointer-events: none;
  flex-direction: column-reverse;
  position: fixed;
  bottom: 16px;
  right: 16px;

  &:hover > ${l} {
    --button-bc: var(--primary-hover);
  }
`,m=n.div`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: -32px;
  padding-bottom: 48px;
  pointer-events: none;
  transition: top 0.2s linear;

  &[data-active='true'] {
    pointer-events: auto;
  }

  & > div {
    width: 48px;
    height: 48px;
  }
`,i=n.button`
  ${o};

  --button-bc: transparent;
  --button-fc: var(--primary);
  --button-lc: transparent;

  width: 48px;
  height: 48px;
  padding: 12px;
  border-radius: 12px;
  transition:
    transform 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: scale(0);

  &[data-active='true'] {
    transform: scale(1);
  }
  &:hover {
    --button-bc: var(--bc);
  }
`,c=n(i).attrs({as:"a",rel:"noopener noreferrer",target:"_blank"})``;function g({state:t}){const{github:a}=s();return e.jsx(c,{href:a.href,"aria-label":a.label,title:a.label,"data-active":t,style:{transitionDelay:t?"90ms":"60ms"},children:e.jsx(d,{})})}function j({state:t}){const{arcaLive:a}=s();return e.jsx(c,{href:a.href,"aria-label":a.label,title:a.label,"data-active":t,style:{transitionDelay:t?"120ms":"30ms"},children:e.jsx(u,{})})}function y({state:t}){const{handlerFilterButton:a,label:r}=x();return e.jsx(i,{onClick:a,"aria-label":r,title:r,"data-active":t,style:{transitionDelay:t?"30ms":"120ms"},children:e.jsx(b,{})})}function w({state:t}){const{handlerNotiButton:a,label:r}=p();return e.jsx(i,{onClick:a,title:r,"aria-label":r,"data-active":t,style:{transitionDelay:t?"60ms":"90ms"},children:e.jsx(h,{})})}function k(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"100%",width:"100%",viewBox:"0 -960 960 960",fill:"currentColor",children:e.jsx("path",{d:"M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"})})}function D(){const[t,a]=v.useState(!1);return e.jsxs(f,{onMouseEnter:()=>{a(!0)},onMouseLeave:()=>{a(!1)},children:[e.jsx(l,{"aria-label":"접근 가능한 메뉴 보기","data-active":t,onClick:()=>{a(!t)},children:e.jsx(k,{})}),e.jsxs(m,{"data-active":t,children:[e.jsx(y,{state:t}),e.jsx(w,{state:t}),e.jsx(g,{state:t}),e.jsx(j,{state:t})]})]})}export{D as default};
