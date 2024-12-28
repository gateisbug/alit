import{j as e,d as l,b as D,r as x,u as K}from"./index-COo1f1DW.js";import{M as V}from"./modal-Cfg4lkgq.js";import{I as X,b as Z,P as G,h as j}from"./useInfiniteGrid-BLQPAlmw.js";import{O as J,N as v,I as $}from"./data-grid-Dg16qEH9.js";import{m as Q}from"./modal.style-CXYTu6C_.js";import"./styled-DFIr-Yv8.js";function U(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"100%",width:"100%",viewBox:"0 -960 960 960",fill:"currentColor",children:e.jsx("path",{d:"M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"})})}const W=l.span.attrs({className:"pos-r"})`
  display: inline-block;
  cursor: default;
`,aa=l.div.attrs(a=>({children:e.jsx("div",{className:"tooltop-text","data-placement":"bottom",children:a.$title}),className:"pos-a"}))`
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
`;function ea(){const a=x.useRef(null),s=x.useRef(null),[n,o]=x.useState(!1);return x.useLayoutEffect(()=>{if(!n||!(a!=null&&a.current)||!(s!=null&&s.current))return;const{top:i,left:d,height:g,width:w}=a.current.getBoundingClientRect(),{width:u}=s.current.getBoundingClientRect(),f=d-u/2+w/2,b=i+g+window.scrollY;s.current.setAttribute("style",`transform: translate(${f}px, ${b}px)`)},[n]),{containerRef:a,boxRef:s,show:n,setShow:o}}function ta({children:a,title:s}){const{boxRef:n,containerRef:o,show:i,setShow:d}=ea();return e.jsxs(W,{ref:o,onMouseOver:()=>{d(!0)},onMouseLeave:()=>{d(!1)},onClick:()=>{d(!i)},children:[a,i?D.createPortal(e.jsx(aa,{ref:n,$title:s}),document.body):null]})}const sa=l.div.attrs(a=>({className:"breadcrumbs flex row ai-c",children:a.$items.filter(s=>typeof s=="string"&&s.length>0).map((s,n,o)=>e.jsxs(x.Fragment,{children:[e.jsx("span",{children:s}),o.length-1!==n&&e.jsx(U,{})]},s))}))`
  gap: 12px;

  & svg {
    width: 14px;
    height: 14px;
  }
`,q=l.div.attrs(a=>({className:"image-card pos-r flex row ai-c jc-c ov-h bb",children:e.jsxs(e.Fragment,{children:[e.jsx(X,{src:`${a.$src}.webp`,alt:a.$alt,placeholder:`${a.$src}_lqip.webp`,height:160}),e.jsx("span",{className:"flex column ai-c jc-c pos-a bb",children:a.$body})]})}))`
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
`,la=l.div.attrs(a=>({className:"keyvalue flex column ai-c",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"key b1 fcw",children:a.$key}),e.jsx("div",{className:"value s2 fcs ta-c ai-c",children:a.$value})]})}))`
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid var(--lc);
  border-radius: 4px;

  & .value {
    display: inline-flex;
    height: 100%;
  }
`,L=l.span.attrs({className:"pos-r flex column"})`
  padding: 8px;
  border-radius: 4px;
  z-index: 1;
`,ra=l.div.attrs(a=>({children:(()=>{const[s,n,o]=a.$value.split("\\t"),[i,d]=s.split("*"),g=o?e.jsxs(L,{children:[e.jsxs("div",{children:["대미지: ",n]}),e.jsxs("div",{children:["관통: ",o.replace(/\//g," / ")]})]}):e.jsxs(L,{children:["대미지: ",n]});return e.jsxs(e.Fragment,{children:[e.jsx(ta,{title:g,children:e.jsx("span",{className:"aircraft-target",children:i})}),e.jsxs(e.Fragment,{children:[" × ",d]})]})})()}))`
  .aircraft-target {
    text-decoration: underline;
  }
`,na=l.span.attrs({className:"b1 lh"})`
  display: inline-flex;
  color: var(--link);
  background-color: var(--link-bc);
  border: 1px solid var(--link-lc);
  padding: 8px 16px;
  border-radius: 32px;
`,oa=l.section.attrs({className:"flex column"})`
  ${Q};
  --modal-bc: var(--surface);
  --modal-shadow: 8px 12px 32px 0 rgba(0, 0, 51, 0.16);

  width: 100%;
  max-width: 960px;
  max-height: calc(100vh - 160px);
  padding: 0;
  border-radius: 8px;
`,ca=l.div.attrs({className:"flex jc-fe"})`
  height: 24px;

  & > button {
    width: 40px;
    height: 40px;
    padding: 10px;
    z-index: 1;
  }
`,da=l.div.attrs({className:"flex column"})`
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
`,Y=l.div.attrs({className:"flex column jc-c"})`
  gap: 10px;
`,ia=l.header.attrs({className:"grid ai-c"})`
  grid-template-columns: 96px auto;
  grid-template-rows: auto;
  gap: 0 32px;

  ${Z} {
    width: 96px;
    height: 96px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    gap: 24px;

    ${Y} {
      align-items: center;
    }
  }
`,pa=l.div.attrs({className:"grid jc-c obtain"})`
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
`,xa=l.div.attrs({className:"flex jc-c"})`
  img {
    width: 160px;
    height: 160px;
  }
`,ha=l.div.attrs({className:"grid"})`
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
`,ga=l.div.attrs({className:"grid"})`
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
`,ua=l.div.attrs({className:"flex column"})`
  gap: 16px;

  @media (max-width: 480px) {
    gap: 12px;
  }
`,fa=l.div.attrs({className:"flex column b1"})`
  border-radius: 4px;
  border: 1px solid var(--lc);
  padding: 12px;
`,ba=l.div.attrs({className:"flex jc-fs ai-c"})`
  display: flex;
  flex-flow: row wrap;
  gap: 8px;

  @media (max-width: 480px) {
    gap: 6px;
  }
`;function ka({item:a}){var u,f,b,N,k,y,C,S,I,M,T,R,z,B,E,F;const[s,n]=K(),o=s.get("keyword"),i=()=>{s.delete("modal"),n(s)},d=x.useCallback(()=>{var t;return(t=a.obtain)==null?void 0:t.map(c=>{var A,O,_,H;const r=(O=(A=J.find(p=>c.includes(p.index)&&c.includes(p.value)))==null?void 0:A.label)!=null?O:"",h=c.split(":");let m=h[0],P=h[1];switch(m){case"상자깡":m+=`(${(_=v.find(p=>p.index===a.nation&&p.value==="box"))==null?void 0:_.label})`;break;case"장비개발":P=`${(H=v.find(p=>p.index===a.nation&&p.value==="nation"))==null?void 0:H.label}`;break}return e.jsx(q,{$src:r,$alt:c,$body:e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"s2 fwb",children:m}),e.jsx("p",{className:"s2 fwm",children:P})]})},`${a.index}_${c}`)})},[]),g=x.useCallback(()=>{var t,c,r;return e.jsx(q,{$src:`images/nation/${(t=a.nation)==null?void 0:t.toLowerCase()}`,$alt:(c=a.nation)!=null?c:"Nation",$body:e.jsx("p",{className:"s2 fwb",children:(r=v.find(h=>h.index===a.nation))==null?void 0:r.label})})},[]),w=x.useCallback(()=>{var t;return(t=a==null?void 0:a.status)==null?void 0:t.map(c=>{const r=c.split(":"),h=(()=>{switch(r[0]){case"스탯":case"스킬":return r[1].replace(/,/g,", ");case"대미지":case"발사패턴":return r[1].replace(/\*/g," × ");case"기총":case"폭장":case"어뢰":case"로켓":return e.jsx(ra,{$value:r[1]});case"사속":case"발사간격":return r[1].replace(/초/g," 초");case"대갑비례":return r[1].replace(/\//g," / ");default:return r[1]}})();return e.jsx(la,{$key:r[0],$value:h},`stat_${a==null?void 0:a.index}_${r[0]}_${r[1]}`)})},[]);return e.jsxs(oa,{children:[e.jsx(ca,{className:"flex jc-fe",children:e.jsx(V,{onClick:i})}),e.jsxs(da,{children:[e.jsxs(ia,{children:[e.jsx(G,{path:`images/items/${a==null?void 0:a.image}.webp`,lqip:`images/items/${a==null?void 0:a.image}_lqip.webp`,size:72,tier:a.tier,stroke:(()=>{if(a.domain!=="gun")return"default";switch(a.type){case"ap":return"blue";case"he":return"red";case"normal":case"type3":return"yellow";case"sap":return"violet";default:return"default"}})()}),e.jsxs(Y,{children:[e.jsx("h2",{className:"s1 fcs",children:j((u=a==null?void 0:a.name)!=null?u:"-",o)}),e.jsx("h3",{className:"b1 fwm fcw",children:j((f=a==null?void 0:a.nickname)!=null?f:"-",o)}),e.jsx(sa,{$items:[(b=$.find(t=>t.index===(a==null?void 0:a.domain)&&t.value===(a==null?void 0:a.domain)))==null?void 0:b.label,(N=$.find(t=>t.index===(a==null?void 0:a.domain)&&t.value===(a==null?void 0:a.class)))==null?void 0:N.label,(C=(y=(k=$.find(t=>t.index===(a==null?void 0:a.domain)&&t.value===(a==null?void 0:a.type)))==null?void 0:k.label)!=null?y:a==null?void 0:a.type)!=null?C:null]})]})]}),(((I=(S=a==null?void 0:a.tag)==null?void 0:S.length)!=null?I:0)>0||((T=(M=a==null?void 0:a.explain)==null?void 0:M.length)!=null?T:0)>0)&&e.jsxs(ua,{children:[(R=a==null?void 0:a.tag)!=null&&R.length?e.jsx(ba,{children:a.tag.map(t=>e.jsx(na,{children:t},t))}):null,(z=a==null?void 0:a.explain)!=null&&z.length?e.jsx(fa,{children:(B=a==null?void 0:a.explain)==null?void 0:B.map(t=>e.jsx("p",{children:j(t,o)},t))}):null]}),e.jsxs(ha,{children:[e.jsx(pa,{children:d()}),e.jsx(xa,{children:g()})]}),e.jsx(ga,{"data-length":Math.round((F=(E=a==null?void 0:a.status)==null?void 0:E.length)!=null?F:8),children:w()})]})]})}export{ka as default};
