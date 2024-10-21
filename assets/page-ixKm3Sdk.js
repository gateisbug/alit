import{j as e,r as x}from"./vendor-react-BgBXYHvm.js";import{u as F}from"./vendor-react-router-dom-BNlwnQiy.js";import{M as P}from"./modal-DOf8EwIw.js";import{a as A,P as E}from"./IndexedItemDB-CEKjFcG0.js";import{O,N as j,I as R}from"./obtains-BMOwt3CL.js";import{d as r}from"./vendor-styled-components-D-sOn0X5.js";import{r as _}from"./vendor-react-dom-BBUhmhcj.js";import{a as L}from"./modal-Bgum7afW.js";import"./vendor-react-router-4iDMQ-pU.js";import"./vendor-@remix-run-DIosy_T7.js";import"./vendor-idb-SGlR87fP.js";import"./vendor-tslib-CGNu0TuM.js";import"./vendor-@emotion-sScrWPmR.js";import"./vendor-stylis-DinRj2j6.js";import"./vendor-scheduler-B7dcc9wB.js";function H(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"100%",width:"100%",viewBox:"0 -960 960 960",fill:"currentColor",children:e.jsx("path",{d:"M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"})})}const Y=r.span.attrs({className:"pos-r"})`
  display: inline-block;
  cursor: default;
`,D=r.div.attrs(a=>({children:e.jsx("div",{className:"tooltop-text","data-placement":"bottom",children:a.$title}),className:"pos-a"}))`
  z-index: 1500;
  pointer-events: auto;
  inset: 0 auto auto 0;
  margin: 0;

  @media (prefers-color-scheme: dark) {
    --tooltip-bc: rgba(97, 97, 97, 92);
    --tooltop-fc: #fff;
  }
  @media (prefers-color-scheme: light) {
    --tooltip-bc: rgba(97, 97, 97, 92);
    --tooltop-fc: #fff;
  }

  .tooltop-text {
    position: relative;
    background-color: var(--tooltip-bc);
    border-radius: 4px;
    color: var(--tooltop-fc);
    max-width: 300px;
    margin: 2px;
    overflow-wrap: break-word;

    &[data-placement='bottom'] {
      margin-top: 12px;
      transform-origin: center top;
    }

    &::before {
      content: '■';
      color: var(--tooltip-bc);
      display: block;
      position: absolute;
      top: 0;
      left: 50%;
      rotate: 45deg;
      width: fit-content;
      height: fit-content;
      font-size: 14px;
      border-radius: 2px;
      translate: -50% -50%;
      overflow: hidden;
      z-index: -1;
    }
  }
`;function K(){const a=x.useRef(null),t=x.useRef(null),[n,l]=x.useState(!1);return x.useLayoutEffect(()=>{if(!n||!(a!=null&&a.current)||!(t!=null&&t.current))return;const{top:d,left:i,height:u,width:g}=a.current.getBoundingClientRect(),{width:f}=t.current.getBoundingClientRect(),m=i-f/2+g/2,b=d+u+window.scrollY;t.current.setAttribute("style",`transform: translate(${m}px, ${b}px)`)},[n]),{containerRef:a,boxRef:t,show:n,setShow:l}}function U({children:a,title:t}){const{boxRef:n,containerRef:l,show:d,setShow:i}=K();return e.jsxs(Y,{ref:l,onMouseOver:()=>{i(!0)},onMouseLeave:()=>{i(!1)},onClick:()=>{i(!d)},children:[a,d?_.createPortal(e.jsx(D,{ref:n,$title:t}),document.body):null]})}const V=r.div.attrs(a=>({className:"breadcrumbs flex row ai-c",children:a.$items.filter(t=>typeof t=="string").map((t,n,l)=>e.jsxs(x.Fragment,{children:[e.jsx("span",{children:t}),l.length-1!==n&&e.jsx(H,{})]},t))}))`
  gap: 12px;

  & svg {
    width: 14px;
    height: 14px;
  }
`,T=r.div.attrs(a=>({className:"image-card pos-r flex row ai-c jc-c ov-h bb",children:e.jsxs(e.Fragment,{children:[e.jsx("img",{src:a.$src,alt:a.$alt}),e.jsx("span",{className:"flex column ai-c jc-c pos-a bb",children:a.$body})]})}))`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  user-select: none;

  &:hover > span {
    opacity: 0;
  }

  & > span {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);

    background-color: #ffffffb2;
    color: #1c2025;
    cursor: default;
  }
`,X=r.div.attrs(a=>({className:"keyvalue flex column ai-c",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"key b1 fcw",children:a.$key}),e.jsx("div",{className:"value s2 fcs ta-c ai-c",children:a.$value})]})}))`
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid var(--lc);
  border-radius: 4px;

  & .value {
    display: inline-flex;
    height: 100%;
  }
`,z=r.span.attrs({className:"pos-r flex column"})`
  padding: 8px;
  border-radius: 4px;
  z-index: 1;
`,Z=r.div.attrs(a=>({children:(()=>{const[t,n,l]=a.$value.split("\\t"),[d,i]=t.split("*"),u=l?e.jsxs(z,{children:[e.jsxs("div",{children:["대미지: ",n]}),e.jsxs("div",{children:["관통: ",l.replace(/\//g," / ")]})]}):e.jsxs(z,{children:["대미지: ",n]});return e.jsxs(e.Fragment,{children:[e.jsx(U,{title:u,children:e.jsx("span",{className:"aircraft-target",children:d})}),e.jsxs(e.Fragment,{children:[" × ",i]})]})})()}))`
  .aircraft-target {
    text-decoration: underline;
  }
`,q=r(L).attrs({className:"flex column"})`
  --modal-surface: var(--surface);

  width: 100%;
  max-width: 960px;
  max-height: calc(100vh - 128px);
  padding: 0;
  border-radius: 8px;
`,G=r.div.attrs({className:"flex jc-fe"})`
  height: 24px;

  & > button {
    width: 40px;
    height: 40px;
    padding: 10px;
    z-index: 1;
  }
`,J=r.div.attrs({className:"flex column"})`
  padding: 0 24px 24px;
  gap: 48px;
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

  @media (max-width: 768px) {
    gap: 32px;
  }
  @media (max-width: 480px) {
    gap: 24px;
  }
  @media (max-width: 480px) {
    gap: 24px;
  }
`,B=r.div.attrs({className:"flex column jc-c"})`
  gap: 10px;
`,Q=r.header.attrs({className:"grid ai-c"})`
  grid-template-columns: 96px auto;
  grid-template-rows: auto;
  gap: 0 32px;

  ${A} {
    width: 96px;
    height: 96px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    gap: 24px;

    ${B} {
      align-items: center;
    }
  }
`,W=r.div.attrs({className:"grid jc-c obtain"})`
  gap: 16px;

  grid-auto-flow: column;
  grid-auto-columns: minmax(200px, 440px);

  img {
    min-height: 160px;
    max-height: 160px;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 440px));
    grid-auto-flow: unset;
    grid-auto-columns: unset;
  }
  @media (max-width: 480px) {
    gap: 12px;
  }
`,aa=r.div.attrs({className:"flex jc-c"})`
  img {
    width: 160px;
    height: 160px;
  }
`,ea=r.div.attrs({className:"grid"})`
  //min-height: 128px;
  grid-template-columns: auto 160px;
  gap: 16px;

  @media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
  @media (max-width: 480px) {
    gap: 12px;
  }
`,ta=r.div.attrs({className:"grid"})`
  grid-auto-flow: row;
  gap: 12px;

  &[data-length='1'],
  &[data-length='3'],
  &[data-length='5'] {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  &[data-length='2'],
  &[data-length='4'],
  &[data-length='6'] {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  .keyvalue > div {
    line-height: 1em !important;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }
`,sa=r.div.attrs({className:"flex column b1"})`
  border-radius: 4px;
  border: 1px solid var(--lc);
  padding: 12px;
`;function wa({item:a}){var g,f,m,b,v,N,$,k;const[t,n]=F(),l=()=>{t.delete("modal"),n(t)},d=x.useCallback(()=>{var s;return(s=a.obtain)==null?void 0:s.map(c=>{var C,S,M,I;const o=(S=(C=O.find(p=>c.includes(p.index)&&c.includes(p.value)))==null?void 0:C.label)!=null?S:"",h=c.split(":");let w=h[0],y=h[1];switch(w){case"상자깡":w+=`(${(M=j.find(p=>p.index===a.nation&&p.value==="box"))==null?void 0:M.label})`;break;case"장비개발":y=`${(I=j.find(p=>p.index===a.nation&&p.value==="nation"))==null?void 0:I.label}`;break}return e.jsx(T,{$src:o,$alt:c,$body:e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"s2 fwb",children:w}),e.jsx("p",{className:"s2 fwm",children:y})]})},`${a.index}_${c}`)})},[]),i=x.useCallback(()=>{var s,c,o;return e.jsx(T,{$src:`images/nation/${(s=a.nation)==null?void 0:s.toLowerCase()}.webp`,$alt:(c=a.nation)!=null?c:"Nation",$body:e.jsx("p",{className:"s2 fwb",children:(o=j.find(h=>h.index===a.nation))==null?void 0:o.label})})},[]),u=x.useCallback(()=>{var s;return(s=a==null?void 0:a.status)==null?void 0:s.map(c=>{const o=c.split(":"),h=(()=>{switch(o[0]){case"스탯":case"스킬":return o[1].replace(/,/g,", ");case"대미지":case"발사패턴":return o[1].replace(/\*/g," × ");case"기총":case"폭장":case"어뢰":case"로켓":return e.jsx(Z,{$value:o[1]});case"사속":case"발사간격":return o[1].replace(/초/g," 초");case"대갑비례":return o[1].replace(/\//g," / ");default:return o[1]}})();return e.jsx(X,{$key:o[0],$value:h},`stat_${a==null?void 0:a.index}_${o[0]}_${o[1]}`)})},[]);return e.jsxs(q,{children:[e.jsx(G,{className:"flex jc-fe",children:e.jsx(P,{onClick:l})}),e.jsxs(J,{children:[e.jsxs(Q,{children:[e.jsx(E,{path:`images/items/${a==null?void 0:a.image}.webp`,size:72,item:a}),e.jsxs(B,{children:[e.jsx("h2",{className:"s1 fcs",children:(g=a==null?void 0:a.name)!=null?g:"-"}),e.jsx("h3",{className:"b1 fwm fcw",children:(f=a==null?void 0:a.nickname)!=null?f:"-"}),e.jsx(V,{$items:[(m=R.find(s=>s.index===(a==null?void 0:a.domain)&&s.value===(a==null?void 0:a.class)))==null?void 0:m.label,(b=R.find(s=>s.index===(a==null?void 0:a.domain)&&s.value===(a==null?void 0:a.type)))==null?void 0:b.label]})]})]}),(v=a==null?void 0:a.explain)!=null&&v.length?e.jsx(sa,{children:(N=a==null?void 0:a.explain)==null?void 0:N.map(s=>e.jsx("p",{children:s},s))}):null,e.jsxs(ea,{children:[e.jsx(W,{children:d()}),e.jsx(aa,{children:i()})]}),e.jsx(ta,{"data-length":Math.round(((k=($=a==null?void 0:a.status)==null?void 0:$.length)!=null?k:8)/2),children:u()})]})]})}export{wa as default};
