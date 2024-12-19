import{j as t,r as x}from"./vendor-react-BgBXYHvm.js";import{u as Y}from"./vendor-react-router-dom-BNlwnQiy.js";import{M as q}from"./modal-sOZdsX9r.js";import{a as D,b as K,P as V}from"./IndexedItemDB-CummaS_s.js";import{O as X,N as j,I as v}from"./obtains-cWKSO7e0.js";import{d as s}from"./vendor-styled-components-DQH6gzwU.js";import{r as Z}from"./vendor-react-dom-BBUhmhcj.js";import{m as G}from"./modal.style-D6mj1fKM.js";import"./vendor-react-router-4iDMQ-pU.js";import"./vendor-@remix-run-DIosy_T7.js";import"./vendor-idb-SGlR87fP.js";import"./vendor-tslib-wbdO-F7s.js";import"./vendor-@emotion-sScrWPmR.js";import"./vendor-stylis-DinRj2j6.js";import"./vendor-scheduler-B7dcc9wB.js";function J(){return t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"100%",width:"100%",viewBox:"0 -960 960 960",fill:"currentColor",children:t.jsx("path",{d:"M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"})})}const Q=s.span.attrs({className:"pos-r"})`
  display: inline-block;
  cursor: default;
`,U=s.div.attrs(a=>({children:t.jsx("div",{className:"tooltop-text","data-placement":"bottom",children:a.$title}),className:"pos-a"}))`
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
`;function W(){const a=x.useRef(null),r=x.useRef(null),[n,o]=x.useState(!1);return x.useLayoutEffect(()=>{if(!n||!(a!=null&&a.current)||!(r!=null&&r.current))return;const{top:i,left:d,height:g,width:u}=a.current.getBoundingClientRect(),{width:f}=r.current.getBoundingClientRect(),m=d-f/2+u/2,b=i+g+window.scrollY;r.current.setAttribute("style",`transform: translate(${m}px, ${b}px)`)},[n]),{containerRef:a,boxRef:r,show:n,setShow:o}}function aa({children:a,title:r}){const{boxRef:n,containerRef:o,show:i,setShow:d}=W();return t.jsxs(Q,{ref:o,onMouseOver:()=>{d(!0)},onMouseLeave:()=>{d(!1)},onClick:()=>{d(!i)},children:[a,i?Z.createPortal(t.jsx(U,{ref:n,$title:r}),document.body):null]})}const ta=s.div.attrs(a=>({className:"breadcrumbs flex row ai-c",children:a.$items.filter(r=>typeof r=="string"&&r.length>0).map((r,n,o)=>t.jsxs(x.Fragment,{children:[t.jsx("span",{children:r}),o.length-1!==n&&t.jsx(J,{})]},r))}))`
  gap: 12px;

  & svg {
    width: 14px;
    height: 14px;
  }
`,_=s.div.attrs(a=>({className:"image-card pos-r flex row ai-c jc-c ov-h bb",children:t.jsxs(t.Fragment,{children:[t.jsx(D,{src:`${a.$src}.webp`,alt:a.$alt,placeholder:`${a.$src}_lqip.webp`,height:160}),t.jsx("span",{className:"flex column ai-c jc-c pos-a bb",children:a.$body})]})}))`
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
`,ea=s.div.attrs(a=>({className:"keyvalue flex column ai-c",children:t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"key b1 fcw",children:a.$key}),t.jsx("div",{className:"value s2 fcs ta-c ai-c",children:a.$value})]})}))`
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid var(--lc);
  border-radius: 4px;

  & .value {
    display: inline-flex;
    height: 100%;
  }
`,H=s.span.attrs({className:"pos-r flex column"})`
  padding: 8px;
  border-radius: 4px;
  z-index: 1;
`,sa=s.div.attrs(a=>({children:(()=>{const[r,n,o]=a.$value.split("\\t"),[i,d]=r.split("*"),g=o?t.jsxs(H,{children:[t.jsxs("div",{children:["대미지: ",n]}),t.jsxs("div",{children:["관통: ",o.replace(/\//g," / ")]})]}):t.jsxs(H,{children:["대미지: ",n]});return t.jsxs(t.Fragment,{children:[t.jsx(aa,{title:g,children:t.jsx("span",{className:"aircraft-target",children:i})}),t.jsxs(t.Fragment,{children:[" × ",d]})]})})()}))`
  .aircraft-target {
    text-decoration: underline;
  }
`,ra=s.span.attrs({className:"b1 lh"})`
  display: inline-flex;
  color: var(--link);
  background-color: var(--link-bc);
  border: 1px solid var(--link-lc);
  padding: 8px 16px;
  border-radius: 32px;
`,la=s.section.attrs({className:"flex column"})`
  ${G};
  --modal-bc: var(--surface);
  --modal-shadow: 8px 12px 32px 0 rgba(0, 0, 51, 0.16);

  width: 100%;
  max-width: 960px;
  max-height: calc(100vh - 128px);
  padding: 0;
  border-radius: 8px;
`,na=s.div.attrs({className:"flex jc-fe"})`
  height: 24px;

  & > button {
    width: 40px;
    height: 40px;
    padding: 10px;
    z-index: 1;
  }
`,oa=s.div.attrs({className:"flex column"})`
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
`,L=s.div.attrs({className:"flex column jc-c"})`
  gap: 10px;
`,ca=s.header.attrs({className:"grid ai-c"})`
  grid-template-columns: 96px auto;
  grid-template-rows: auto;
  gap: 0 32px;

  ${K} {
    width: 96px;
    height: 96px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    gap: 24px;

    ${L} {
      align-items: center;
    }
  }
`,da=s.div.attrs({className:"grid jc-c obtain"})`
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
`,ia=s.div.attrs({className:"flex jc-c"})`
  img {
    width: 160px;
    height: 160px;
  }
`,pa=s.div.attrs({className:"grid"})`
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
`,xa=s.div.attrs({className:"grid"})`
  grid-auto-flow: row;
  gap: 12px;

  &[data-length='1'],
  &[data-length='2'],
  &[data-length='3'] {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }
  &[data-length='4'],
  &[data-length='5'],
  &[data-length='6'],
  &[data-length='7'],
  &[data-length='8'] {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  .keyvalue > div {
    line-height: 1em !important;
  }

  @media (max-width: 768px) {
    &[data-length='1'],
    &[data-length='2'],
    &[data-length='3'],
    &[data-length='4'],
    &[data-length='5'],
    &[data-length='6'],
    &[data-length='7'],
    &[data-length='8'] {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  @media (max-width: 480px) {
    gap: 8px;

    &[data-length='1'],
    &[data-length='2'],
    &[data-length='3'],
    &[data-length='4'],
    &[data-length='5'],
    &[data-length='6'],
    &[data-length='7'],
    &[data-length='8'] {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
  }
`,ha=s.div.attrs({className:"flex column"})`
  gap: 16px;

  @media (max-width: 480px) {
    gap: 12px;
  }
`,ga=s.div.attrs({className:"flex column b1"})`
  border-radius: 4px;
  border: 1px solid var(--lc);
  padding: 12px;
`,ua=s.div.attrs({className:"flex jc-fs ai-c"})`
  display: flex;
  flex-flow: row wrap;
  gap: 8px;

  @media (max-width: 480px) {
    gap: 6px;
  }
`;function Ra({item:a}){var u,f,m,b,N,$,k,y,C,S,M,I,T,R,z,B;const[r,n]=Y(),o=()=>{r.delete("modal"),n(r)},i=x.useCallback(()=>{var e;return(e=a.obtain)==null?void 0:e.map(c=>{var F,P,A,O;const l=(P=(F=X.find(p=>c.includes(p.index)&&c.includes(p.value)))==null?void 0:F.label)!=null?P:"",h=c.split(":");let w=h[0],E=h[1];switch(w){case"상자깡":w+=`(${(A=j.find(p=>p.index===a.nation&&p.value==="box"))==null?void 0:A.label})`;break;case"장비개발":E=`${(O=j.find(p=>p.index===a.nation&&p.value==="nation"))==null?void 0:O.label}`;break}return t.jsx(_,{$src:l,$alt:c,$body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"s2 fwb",children:w}),t.jsx("p",{className:"s2 fwm",children:E})]})},`${a.index}_${c}`)})},[]),d=x.useCallback(()=>{var e,c,l;return t.jsx(_,{$src:`images/nation/${(e=a.nation)==null?void 0:e.toLowerCase()}`,$alt:(c=a.nation)!=null?c:"Nation",$body:t.jsx("p",{className:"s2 fwb",children:(l=j.find(h=>h.index===a.nation))==null?void 0:l.label})})},[]),g=x.useCallback(()=>{var e;return(e=a==null?void 0:a.status)==null?void 0:e.map(c=>{const l=c.split(":"),h=(()=>{switch(l[0]){case"스탯":case"스킬":return l[1].replace(/,/g,", ");case"대미지":case"발사패턴":return l[1].replace(/\*/g," × ");case"기총":case"폭장":case"어뢰":case"로켓":return t.jsx(sa,{$value:l[1]});case"사속":case"발사간격":return l[1].replace(/초/g," 초");case"대갑비례":return l[1].replace(/\//g," / ");default:return l[1]}})();return t.jsx(ea,{$key:l[0],$value:h},`stat_${a==null?void 0:a.index}_${l[0]}_${l[1]}`)})},[]);return t.jsxs(la,{children:[t.jsx(na,{className:"flex jc-fe",children:t.jsx(q,{onClick:o})}),t.jsxs(oa,{children:[t.jsxs(ca,{children:[t.jsx(V,{path:`images/items/${a==null?void 0:a.image}.webp`,size:72,item:a}),t.jsxs(L,{children:[t.jsx("h2",{className:"s1 fcs",children:(u=a==null?void 0:a.name)!=null?u:"-"}),t.jsx("h3",{className:"b1 fwm fcw",children:(f=a==null?void 0:a.nickname)!=null?f:"-"}),t.jsx(ta,{$items:[(m=v.find(e=>e.index===(a==null?void 0:a.domain)&&e.value===(a==null?void 0:a.domain)))==null?void 0:m.label,(b=v.find(e=>e.index===(a==null?void 0:a.domain)&&e.value===(a==null?void 0:a.class)))==null?void 0:b.label,(k=($=(N=v.find(e=>e.index===(a==null?void 0:a.domain)&&e.value===(a==null?void 0:a.type)))==null?void 0:N.label)!=null?$:a==null?void 0:a.type)!=null?k:null]})]})]}),(((C=(y=a==null?void 0:a.tag)==null?void 0:y.length)!=null?C:0)>0||((M=(S=a==null?void 0:a.explain)==null?void 0:S.length)!=null?M:0)>0)&&t.jsxs(ha,{children:[(I=a==null?void 0:a.tag)!=null&&I.length?t.jsx(ua,{children:a.tag.map(e=>t.jsx(ra,{children:e},e))}):null,(T=a==null?void 0:a.explain)!=null&&T.length?t.jsx(ga,{children:(R=a==null?void 0:a.explain)==null?void 0:R.map(e=>t.jsx("p",{children:e},e))}):null]}),t.jsxs(pa,{children:[t.jsx(da,{children:i()}),t.jsx(ia,{children:d()})]}),t.jsx(xa,{"data-length":Math.round((B=(z=a==null?void 0:a.status)==null?void 0:z.length)!=null?B:8),children:g()})]})]})}export{Ra as default};
