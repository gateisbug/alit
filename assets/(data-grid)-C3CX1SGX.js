const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/page-BjEsBuGD.js","assets/vendor-react-BgBXYHvm.js","assets/vendor-react-router-dom-BNlwnQiy.js","assets/vendor-react-dom-BBUhmhcj.js","assets/vendor-scheduler-B7dcc9wB.js","assets/vendor-react-router-4iDMQ-pU.js","assets/vendor-@remix-run-DIosy_T7.js","assets/modal-uNky51QX.js","assets/modal-Bgum7afW.js","assets/vendor-styled-components-D-sOn0X5.js","assets/vendor-tslib-CGNu0TuM.js","assets/vendor-@emotion-sScrWPmR.js","assets/vendor-stylis-DinRj2j6.js","assets/IndexedItemDB-D-Rctx5O.js","assets/vendor-idb-SGlR87fP.js","assets/obtains-cWKSO7e0.js"])))=>i.map(i=>d[i]);
var w=(n,t,a)=>new Promise((o,e)=>{var s=i=>{try{c(a.next(i))}catch(f){e(f)}},d=i=>{try{c(a.throw(i))}catch(f){e(f)}},c=i=>i.done?o(i.value):Promise.resolve(i.value).then(s,d);c((a=a.apply(n,t)).next())});import{_ as R,u as C,I as j}from"./index-ByPMXIoW.js";import{r as p,j as l}from"./vendor-react-BgBXYHvm.js";import{u as _}from"./vendor-react-router-dom-BNlwnQiy.js";import{I as N,P as D}from"./IndexedItemDB-D-Rctx5O.js";import{L as O}from"./loader-CF7w1U0Z.js";import{d as b}from"./vendor-styled-components-D-sOn0X5.js";import{i as G}from"./vendor-react-device-detect-DFzDjuWZ.js";import{N as S,I}from"./obtains-cWKSO7e0.js";import"./vendor-react-dom-BBUhmhcj.js";import"./vendor-scheduler-B7dcc9wB.js";import"./vendor-lodash-es-B37DsV7W.js";import"./vendor-zustand-BV59WVYb.js";import"./vendor-react-router-4iDMQ-pU.js";import"./vendor-@remix-run-DIosy_T7.js";import"./vendor-tslib-CGNu0TuM.js";import"./vendor-@emotion-sScrWPmR.js";import"./vendor-stylis-DinRj2j6.js";import"./vendor-idb-SGlR87fP.js";import"./vendor-ua-parser-js-CEeYF1zk.js";function A(){const[n]=_(),t=n.get("category"),a=n.get("division"),[o,e]=p.useState([]),[s,d]=p.useState(o);return p.useEffect(()=>{w(this,null,function*(){const i=yield(yield N.getInstance()).getAllData();e(i)}).catch(i=>{throw new Error(i)})},[]),p.useEffect(()=>{if(!t&&!a)d(o);else{const c=o.filter(i=>a?i.domain===t&&i.class===a:i.domain===t);d(c)}},[o,t,a]),s}function L(n){const t=p.useRef(null);return p.useEffect(()=>{const a=new IntersectionObserver(o=>{o[0].isIntersecting&&n()},{threshold:.2});return t.current&&a.observe(t.current),()=>{t.current&&a.unobserve(t.current)}},[n]),t}const y=10;function M(n){const[t,a]=p.useState([]),[o,e]=p.useState(y),s=L(()=>{e(d=>d+y)});return p.useEffect(()=>{a(n.slice(0,o))},[o,n]),p.useEffect(()=>()=>{a([]),e(y)},[n]),{current:t,visibleCount:o,loaderRef:s,LOADER:y}}const P=b.div.attrs({className:"flex column"})`
  user-select: none;
`,T=b.div.attrs({className:"flex"})`
  gap: 16px;
`,z=b.div.attrs({className:"bb"})`
  box-sizing: border-box;
  flex-grow: 1;
`,H=b(P)``,r=b(z).attrs({className:"flex ai-c"})`
  min-height: 64px;
`,k=b(T)`
  transition: background-color 150ms ease-in-out;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      cursor: pointer;
      background-color: var(--lc-w);
    }
  }

  &[data-type='head'] {
    cursor: default;
    border-bottom: 1px solid var(--lc);
    background-color: transparent !important;

    ${r} {
      padding: 16px 0;
      height: fit-content;
      text-align: center;
    }
  }
  &[data-type='body'] {
    padding: 12px 0;
    border-bottom: 1px solid var(--lc-w);
  }

  //grid-template-columns: 1:90 2:240 3:160 4:240 5:90 6:90 7:90 8:743;
  ${r}:nth-of-type(1),
  ${r}:nth-of-type(5),
  ${r}:nth-of-type(6),
  ${r}:nth-of-type(7) {
    flex-basis: 90px;
  }
  ${r}:nth-of-type(2),
  ${r}:nth-of-type(4) {
    flex-basis: 240px;
  }
  ${r}:nth-of-type(3) {
    flex-basis: 160px;
  }
  ${r}:nth-of-type(8) {
    flex-basis: 743px;
  }

  ${r}:nth-of-type(1) {
    min-width: 90px;
  }
  ${r}:nth-of-type(2) {
    min-width: 178px;
  }
  ${r}:nth-of-type(3) {
    min-width: 98px;
  }
  ${r}:nth-of-type(4) {
    min-width: 162px;
  }
  ${r}:nth-of-type(5) {
    min-width: 32px;
  }
  ${r}:nth-of-type(6) {
    min-width: 68px;
  }
  ${r}:nth-of-type(7) {
    min-width: 72px;
  }

  @media (max-width: 1200px) {
    ${r}:nth-of-type(5),
    ${r}:nth-of-type(6),
    ${r}:nth-of-type(7) {
      display: none;
    }
  }
  //@COMMENT: (1)icon, (2)name, (3)nickname, (4)obtain, (5)nation, (6)category, (7)type, (8)explain
  @media (max-width: 900px) {
    ${r}:nth-of-type(5),
    ${r}:nth-of-type(6),
    ${r}:nth-of-type(7) {
      display: none;
    }
  }
  @media (max-width: 900px) {
    ${r}:nth-of-type(4) {
      display: none;
    }
  }
  @media (max-width: 700px) {
    ${r}:nth-of-type(3) {
      display: none;
    }
  }
  @media (max-width: 550px) {
    ${r}:nth-of-type(8) {
      display: none;
    }
  }
  @media (max-width: 440px) {
    ${r}:nth-of-type(2) {
      min-width: 120px;
    }
  }
`,F=[{label:"아이콘",value:"image"},{label:"장비명",value:"name"},{label:"별명",value:"nickname"},{label:"획득처",value:"obtain"},{label:"국가",value:"nation"},{label:"구분",value:"class"},{label:"종류",value:"type"},{label:"설명",value:"explain"}],E=Object.freeze(F);function V(n){return l.jsx(D,{path:G?`images/items/${n==null?void 0:n.image}.webp`:`images/items/${n==null?void 0:n.image}_x48.webp`,item:n})}function B(n){var a;const{nickname:t}=n;return((a=t==null?void 0:t.length)!=null?a:0)>0?t==null?void 0:t.replace(/,/g,", "):"-"}function $(n,t){var o,e;const{nation:a}=n;return t==="prefix"?a!=null?a:"ALL":(e=(o=S.find(s=>s.index===a&&s.value===t))==null?void 0:o.label)!=null?e:"전체"}function K(n){const{obtain:t}=n,a=t==null?void 0:t.map(e=>e.split(":")),o=e=>{var s;switch(e==null?void 0:e[0]){case"군부연구실":return`${e==null?void 0:e[0]}: ${(s=e==null?void 0:e[1])!=null?s:"?"}`;case"상자깡":return`${e==null?void 0:e[0]}: ${$(n,"box")}(${e==null?void 0:e[1]})`;case"장비개발":return`${e==null?void 0:e[0]}: ${$(n,"nation")}`;case"이벤트":return`${e==null?void 0:e[1]}`;default:return e==null?void 0:e[0]}};return a==null?void 0:a.map(o).map((e,s,d)=>d.length>2&&e.includes("메인")?null:l.jsx("span",{children:e},e))}function Y(n){var o,e;const{domain:t,class:a}=n;return(e=(o=I.find(s=>s.index===t&&s.value===a))==null?void 0:o.label)!=null?e:"-"}function q(n){var o,e;const{domain:t,type:a}=n;return(e=(o=I.find(s=>s.index===t&&s.value===a))==null?void 0:o.label)!=null?e:a}function J(n){const{explain:t}=n;return l.jsx("div",{className:"el-2",children:t==null?void 0:t.join(". ")})}const x=Object.freeze({img:V,nickname:B,obtain:K,nation:$,class:Y,type:q,explain:J}),Q=p.lazy(()=>R(()=>import("./page-BjEsBuGD.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])));function U(){const n=A(),{current:t,visibleCount:a,loaderRef:o,LOADER:e}=M(n),{modalAdd:s}=C(),[d,c]=_(),i=p.useCallback((u,g)=>{let h="",m;switch(g){case"image":h="jc-c",m=x.img(u);break;case"nickname":h="jc-c ta-c word-break",m=x.nickname(u);break;case"obtain":h="column ai-fs jc-c",m=x.obtain(u);break;case"class":h="jc-c",m=x.class(u);break;case"type":h="jc-c",m=x.type(u);break;case"explain":m=x.explain(u);break;default:h="jc-c ta-c word-break",m=u[g];break}return l.jsx(r,{className:h,children:m})},[]);return{current:t,renderText:i,data:n,visibleCount:a,LOADER:e,loaderRef:o,gridRowClickHandler:u=>{s({id:j,children:l.jsx(Q,{item:u})}),d.set("modal",j),c(d)}}}function xe(){const{current:n,renderText:t,data:a,visibleCount:o,LOADER:e,loaderRef:s,gridRowClickHandler:d}=U();return l.jsxs(l.Fragment,{children:[l.jsxs(H,{className:"b1",children:[l.jsx(k,{className:"fwb fcs","data-type":"head",children:E.map(c=>l.jsx(r,{className:"jc-c",children:c.label},`head_${c.value}`))}),n.map((c,i)=>l.jsx(k,{"data-type":"body",onClick:()=>{d(c)},children:E.map(f=>l.jsx(p.Fragment,{children:t(c,f.value)},`cell_${c.index}_${f.value}_${i}`))},`row_${c.index}_${c.name}`))]}),a.length>=o&&l.jsx("div",{className:"flex h100 ai-c jc-c",style:{padding:"16px"},ref:n.length>=e?s:void 0,children:l.jsx(O,{})})]})}export{xe as default};
