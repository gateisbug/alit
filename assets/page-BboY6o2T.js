import{d as i,c as s,L as x,e as p,j as e,I as b,f as h,g as v,h as m,k as l,m as f,n as j,o as g,p as y,r as k}from"./index-IQND5Use.js";const c=i.button`
  ${s};

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
`,L=i.div`
  //--speeddial-z: 1050;
  z-index: 1050;
  display: flex;
  align-items: center;
  pointer-events: none;
  flex-direction: column-reverse;
  position: fixed;
  bottom: 16px;
  right: 16px;

  &:hover > ${c} {
    --button-bc: var(--primary-hover);
  }
`,w=i.div`
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
`,r=i.button`
  ${s};

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
`,d=i(r).attrs({as:"a",rel:"noopener noreferrer",target:"_blank"})``,D=i(r).attrs({as:x})``;function I({state:t}){const{pathname:n}=p(),a=n.includes("item")?"/character":"/item",o=n.includes("item")?"함순이 리스트로 이동":"장비 설명회로 이동",u=n.includes("item")?e.jsx(b,{}):e.jsx(h,{});return e.jsx(D,{to:a,"aria-label":o,title:o,"data-active":t,children:u})}function S({state:t}){const{github:n}=l();return e.jsx(d,{href:n.href,"aria-label":n.label,title:n.label,"data-active":t,style:{transitionDelay:t?"90ms":"60ms"},children:e.jsx(v,{})})}function A({state:t}){const{arcaLive:n}=l();return e.jsx(d,{href:n.href,"aria-label":n.label,title:n.label,"data-active":t,style:{transitionDelay:t?"120ms":"30ms"},children:e.jsx(m,{})})}function B({state:t}){const{handlerFilterButton:n,label:a}=f();return e.jsx(r,{onClick:n,"aria-label":a,title:a,"data-active":t,style:{transitionDelay:t?"30ms":"120ms"},children:e.jsx(j,{})})}function z({state:t}){const{handlerNotiButton:n,label:a}=g();return e.jsx(r,{onClick:n,title:a,"aria-label":a,"data-active":t,style:{transitionDelay:t?"60ms":"90ms"},children:e.jsx(y,{})})}function C(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"100%",width:"100%",viewBox:"0 -960 960 960",fill:"currentColor",children:e.jsx("path",{d:"M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"})})}function F(){const[t,n]=k.useState(!1);return e.jsxs(L,{onMouseEnter:()=>{n(!0)},onMouseLeave:()=>{n(!1)},children:[e.jsx(c,{"aria-label":"접근 가능한 메뉴 보기","data-active":t,onClick:()=>{n(!t)},children:e.jsx(C,{})}),e.jsxs(w,{"data-active":t,children:[e.jsx(B,{state:t}),e.jsx(z,{state:t}),e.jsx(I,{state:t}),e.jsx(S,{state:t}),e.jsx(A,{state:t})]})]})}export{F as default};
