import{j as e,r as x}from"./vendor-react-BgBXYHvm.js";import{u as Y}from"./vendor-react-router-dom-BNlwnQiy.js";import{M as D}from"./modal-DOf8EwIw.js";import{a as K,P as U}from"./IndexedItemDB-BE9qtrG0.js";import{O as V,N as j,I as v}from"./obtains-B8wT_VoV.js";import{d as s}from"./vendor-styled-components-D-sOn0X5.js";import{r as X}from"./vendor-react-dom-BBUhmhcj.js";import{a as Z}from"./modal-Bgum7afW.js";import"./vendor-react-router-4iDMQ-pU.js";import"./vendor-@remix-run-DIosy_T7.js";import"./vendor-idb-SGlR87fP.js";import"./vendor-tslib-CGNu0TuM.js";import"./vendor-@emotion-sScrWPmR.js";import"./vendor-stylis-DinRj2j6.js";import"./vendor-scheduler-B7dcc9wB.js";function q(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"100%",width:"100%",viewBox:"0 -960 960 960",fill:"currentColor",children:e.jsx("path",{d:"M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"})})}const G=s.span.attrs({className:"pos-r"})`
  display: inline-block;
  cursor: default;
`,J=s.div.attrs(a=>({children:e.jsx("div",{className:"tooltop-text","data-placement":"bottom",children:a.$title}),className:"pos-a"}))`
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
`;function Q(){const a=x.useRef(null),r=x.useRef(null),[n,o]=x.useState(!1);return x.useLayoutEffect(()=>{if(!n||!(a!=null&&a.current)||!(r!=null&&r.current))return;const{top:i,left:d,height:u,width:g}=a.current.getBoundingClientRect(),{width:f}=r.current.getBoundingClientRect(),m=d-f/2+g/2,b=i+u+window.scrollY;r.current.setAttribute("style",`transform: translate(${m}px, ${b}px)`)},[n]),{containerRef:a,boxRef:r,show:n,setShow:o}}function W({children:a,title:r}){const{boxRef:n,containerRef:o,show:i,setShow:d}=Q();return e.jsxs(G,{ref:o,onMouseOver:()=>{d(!0)},onMouseLeave:()=>{d(!1)},onClick:()=>{d(!i)},children:[a,i?X.createPortal(e.jsx(J,{ref:n,$title:r}),document.body):null]})}const aa=s.div.attrs(a=>({className:"breadcrumbs flex row ai-c",children:a.$items.filter(r=>typeof r=="string"&&r.length>0).map((r,n,o)=>e.jsxs(x.Fragment,{children:[e.jsx("span",{children:r}),o.length-1!==n&&e.jsx(q,{})]},r))}))`
  gap: 12px;

  & svg {
    width: 14px;
    height: 14px;
  }
`,H=s.div.attrs(a=>({className:"image-card pos-r flex row ai-c jc-c ov-h bb",children:e.jsxs(e.Fragment,{children:[e.jsx("img",{src:a.$src,alt:a.$alt}),e.jsx("span",{className:"flex column ai-c jc-c pos-a bb",children:a.$body})]})}))`
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
`,ea=s.div.attrs(a=>({className:"keyvalue flex column ai-c",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"key b1 fcw",children:a.$key}),e.jsx("div",{className:"value s2 fcs ta-c ai-c",children:a.$value})]})}))`
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid var(--lc);
  border-radius: 4px;

  & .value {
    display: inline-flex;
    height: 100%;
  }
`,_=s.span.attrs({className:"pos-r flex column"})`
  padding: 8px;
  border-radius: 4px;
  z-index: 1;
`,ta=s.div.attrs(a=>({children:(()=>{const[r,n,o]=a.$value.split("\\t"),[i,d]=r.split("*"),u=o?e.jsxs(_,{children:[e.jsxs("div",{children:["대미지: ",n]}),e.jsxs("div",{children:["관통: ",o.replace(/\//g," / ")]})]}):e.jsxs(_,{children:["대미지: ",n]});return e.jsxs(e.Fragment,{children:[e.jsx(W,{title:u,children:e.jsx("span",{className:"aircraft-target",children:i})}),e.jsxs(e.Fragment,{children:[" × ",d]})]})})()}))`
  .aircraft-target {
    text-decoration: underline;
  }
`,sa=s.span.attrs({className:"b1 lh"})`
  display: inline-flex;
  color: var(--link);
  background-color: var(--link-bc);
  border: 1px solid var(--link-lc);
  padding: 8px 16px;
  border-radius: 32px;
`,ra=s(Z).attrs({className:"flex column"})`
  --modal-surface: var(--surface);

  width: 100%;
  max-width: 960px;
  max-height: calc(100vh - 128px);
  padding: 0;
  border-radius: 8px;
`,la=s.div.attrs({className:"flex jc-fe"})`
  height: 24px;

  & > button {
    width: 40px;
    height: 40px;
    padding: 10px;
    z-index: 1;
  }
`,na=s.div.attrs({className:"flex column"})`
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
`,oa=s.header.attrs({className:"grid ai-c"})`
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
`,ca=s.div.attrs({className:"grid jc-c obtain"})`
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
`,da=s.div.attrs({className:"flex jc-c"})`
  img {
    width: 160px;
    height: 160px;
  }
`,ia=s.div.attrs({className:"grid"})`
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
`,pa=s.div.attrs({className:"grid"})`
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

  @media (max-width: 480px) {
    &[data-length='1'],
    &[data-length='2'],
    &[data-length='3'],
    &[data-length='4'],
    &[data-length='5'],
    &[data-length='6'] {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
  }
`,xa=s.div.attrs({className:"flex column"})`
  gap: 16px;

  @media (max-width: 480px) {
    gap: 12px;
  }
`,ha=s.div.attrs({className:"flex column b1"})`
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
`;function Ta({item:a}){var g,f,m,b,N,$,k,y,C,S,M,I,T,R,z,B;const[r,n]=Y(),o=()=>{r.delete("modal"),n(r)},i=x.useCallback(()=>{var t;return(t=a.obtain)==null?void 0:t.map(c=>{var F,P,A,O;const l=(P=(F=V.find(p=>c.includes(p.index)&&c.includes(p.value)))==null?void 0:F.label)!=null?P:"",h=c.split(":");let w=h[0],E=h[1];switch(w){case"상자깡":w+=`(${(A=j.find(p=>p.index===a.nation&&p.value==="box"))==null?void 0:A.label})`;break;case"장비개발":E=`${(O=j.find(p=>p.index===a.nation&&p.value==="nation"))==null?void 0:O.label}`;break}return e.jsx(H,{$src:l,$alt:c,$body:e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"s2 fwb",children:w}),e.jsx("p",{className:"s2 fwm",children:E})]})},`${a.index}_${c}`)})},[]),d=x.useCallback(()=>{var t,c,l;return e.jsx(H,{$src:`images/nation/${(t=a.nation)==null?void 0:t.toLowerCase()}.webp`,$alt:(c=a.nation)!=null?c:"Nation",$body:e.jsx("p",{className:"s2 fwb",children:(l=j.find(h=>h.index===a.nation))==null?void 0:l.label})})},[]),u=x.useCallback(()=>{var t;return(t=a==null?void 0:a.status)==null?void 0:t.map(c=>{const l=c.split(":"),h=(()=>{switch(l[0]){case"스탯":case"스킬":return l[1].replace(/,/g,", ");case"대미지":case"발사패턴":return l[1].replace(/\*/g," × ");case"기총":case"폭장":case"어뢰":case"로켓":return e.jsx(ta,{$value:l[1]});case"사속":case"발사간격":return l[1].replace(/초/g," 초");case"대갑비례":return l[1].replace(/\//g," / ");default:return l[1]}})();return e.jsx(ea,{$key:l[0],$value:h},`stat_${a==null?void 0:a.index}_${l[0]}_${l[1]}`)})},[]);return e.jsxs(ra,{children:[e.jsx(la,{className:"flex jc-fe",children:e.jsx(D,{onClick:o})}),e.jsxs(na,{children:[e.jsxs(oa,{children:[e.jsx(U,{path:`images/items/${a==null?void 0:a.image}.webp`,size:72,item:a}),e.jsxs(L,{children:[e.jsx("h2",{className:"s1 fcs",children:(g=a==null?void 0:a.name)!=null?g:"-"}),e.jsx("h3",{className:"b1 fwm fcw",children:(f=a==null?void 0:a.nickname)!=null?f:"-"}),e.jsx(aa,{$items:[(m=v.find(t=>t.index===(a==null?void 0:a.domain)&&t.value===(a==null?void 0:a.domain)))==null?void 0:m.label,(b=v.find(t=>t.index===(a==null?void 0:a.domain)&&t.value===(a==null?void 0:a.class)))==null?void 0:b.label,(k=($=(N=v.find(t=>t.index===(a==null?void 0:a.domain)&&t.value===(a==null?void 0:a.type)))==null?void 0:N.label)!=null?$:a==null?void 0:a.type)!=null?k:null]})]})]}),(((C=(y=a==null?void 0:a.tag)==null?void 0:y.length)!=null?C:0)>0||((M=(S=a==null?void 0:a.explain)==null?void 0:S.length)!=null?M:0)>0)&&e.jsxs(xa,{children:[(I=a==null?void 0:a.tag)!=null&&I.length?e.jsx(ua,{children:a.tag.map(t=>e.jsx(sa,{children:t},t))}):null,(T=a==null?void 0:a.explain)!=null&&T.length?e.jsx(ha,{children:(R=a==null?void 0:a.explain)==null?void 0:R.map(t=>e.jsx("p",{children:t},t))}):null]}),e.jsxs(ia,{children:[e.jsx(ca,{children:i()}),e.jsx(da,{children:d()})]}),e.jsx(pa,{"data-length":Math.round(((B=(z=a==null?void 0:a.status)==null?void 0:z.length)!=null?B:8)/2),children:u()})]})]})}export{Ta as default};
