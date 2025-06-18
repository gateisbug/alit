var P=(e,n,s)=>new Promise((a,r)=>{var d=o=>{try{l(s.next(o))}catch(c){r(c)}},p=o=>{try{l(s.throw(o))}catch(c){r(c)}},l=o=>o.done?a(o.value):Promise.resolve(o.value).then(d,p);l((s=s.apply(e,n)).next())});import{j as t,d as f,u as N,r as b,a as H}from"./index-CNK18Yuy.js";import{L as M,P as B}from"./styled-BuNtD9U7.js";import{P as z,h as K,u as I,a as Q}from"./useInfiniteGrid-NGielT6q.js";import{M as Y}from"./modal-CIK1RlWw.js";import{m as J}from"./modal.style-DmTxabWt.js";const U=[{label:"아이콘",value:"image"},{label:"함선명",value:"name"},{label:"스탯",value:"stat"},{label:"기술점수",value:"fleet"},{label:"국가",value:"nation"},{label:"구분",value:"category"},{label:"스킬 유형",value:"tag"}],R=Object.freeze(U);function V(e){var s;const n=((s=e==null?void 0:e.rarity)!=null?s:["SSR"])[0];return t.jsx(z,{path:`images/character/${e==null?void 0:e.image}_x72.webp`,lqip:`images/character/${e==null?void 0:e.image}_lqip.webp`,width:72,height:96,tier:n})}function W(e,n){const{name:s=""}=e;return n?K(s,n):s}function X(e){if(!(e!=null&&e.stat)||!e.stat.length)return"";const[n,s]=e.stat[0].split(":"),[a,r]=e.stat[1].split(":"),d=n===a?n.replace(/\|/g,", "):`${n}→${a}`.replace(/\|/g,", ");return t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"fwm",children:d}),t.jsxs("p",{className:"fcs fws",children:[t.jsx("span",{className:"fc fwr",children:"획득: "}),s]}),t.jsxs("p",{className:"fcs fws",children:[t.jsx("span",{className:"fc fwr",children:"lv120: "}),r]})]})}function Z(e){return t.jsx(t.Fragment,{children:["획득","★3","lv120"].map((n,s)=>{var a,r;return t.jsxs("p",{className:"fc",children:[n,": ",t.jsxs("span",{className:"fws fcs",children:["+",(r=(a=e==null?void 0:e.fleet)==null?void 0:a[s])!=null?r:""]})]},n)})})}function ee(e){return e.nation}function te(e){var n;return(n=e.category)==null?void 0:n.join("→")}function ne(){return t.jsx("p",{className:"fc",children:"준비 중"})}const g=Object.freeze({img:V,name:W,stat:X,fleet:Z,nation:ee,category:te,tag:ne}),se=f.section`
  ${J};
  --modal-bc: var(--surface);
  --modal-shadow: 8px 12px 32px 0 rgba(0, 0, 51, 0.16);

  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  width: 100%;
  max-width: 740px;
  max-height: calc(100vh - 160px);
  padding: 32px;
  border-radius: 8px;
`,ae=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 208px;
  height: 272px;
`,A=f.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`,E=f.div`
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 6px 12px;
  border-radius: 4px;
  border: 1px solid var(--lc);
  box-sizing: border-box;

  .box-data {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .data-row {
    display: flex;
    gap: 12px;
  }

  .data-head {
    display: flex;
    justify-content: center;
    width: 48px;
    min-width: 48px;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 440px;
  }
  @media (max-width: 425px) {
    flex-direction: column;
  }
`,ie=f.div`
  display: flex;
  gap: 24px;
  width: 100%;
  height: fit-content;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    & ${A} {
      align-items: center;
    }
  }
`,re=f.div`
  position: absolute;
  top: 0;
  right: 0;

  & > button {
    width: 40px;
    height: 40px;
    padding: 10px;
    z-index: 1;
  }
`;function le({chara:e}){const n=s=>s==null?void 0:s.map(a=>{switch(a){case"구축":return"구축함";case"미구":return"미사일 구축함";case"경순":return"경순양함";case"중순":return"중순양함";case"대순":return"대형순양함";case"모니터":return"모니터함";case"전함":return"전함";case"항전":return"항공전함";case"순전":return"순양전함";case"항모":return"항공모함";case"경항모":return"경항공모함";case"잠수":return"잠수함";case"잠항":return"잠수항모";default:return a}}).join(" → ");return t.jsxs("p",{className:"b1 fcw",children:[e==null?void 0:e.nation,", ",n(e==null?void 0:e.category)]})}function oe({chara:e}){const n=s=>!e||!e.stat||e.stat.length<2?"준비 중":e.stat[s].replace(/\|/g,", ").replace(/:/g,": ");return t.jsxs(E,{children:[t.jsx("h3",{className:"fcs b1 fwr",children:"함대 스탯"}),t.jsx("div",{className:"box-data",children:["획득 시","Lv 120"].map((s,a)=>t.jsxs("div",{className:"data-row",children:[t.jsx("span",{className:"data-head",children:s}),t.jsx("span",{className:"fcs fws",children:n(a)})]},`stat-${s}`))})]})}function ce({chara:e}){const n=s=>!e||!e.fleet||e.fleet.length<3?"준비 중":e.fleet[s];return t.jsxs(E,{children:[t.jsx("h3",{className:"fcs b1 fwr",children:"기술 점수"}),t.jsx("div",{className:"box-data",children:["획득 시","★3","Lv 120"].map((s,a)=>t.jsxs("div",{className:"data-row",children:[t.jsx("span",{className:"data-head",children:s}),t.jsxs("span",{className:"fcs fws",children:["+",n(a)]})]},`fleet-${s}`))})]})}function de({chara:e}){var r;const[n,s]=N(),a=()=>{n.delete("modal"),s(n)};return t.jsxs(se,{children:[t.jsxs(ie,{children:[t.jsx(ae,{children:t.jsx(z,{path:`images/character/${e==null?void 0:e.image}.webp`,lqip:`images/character/${e==null?void 0:e.image}_lqip.webp`,width:192,height:256,tier:((r=e==null?void 0:e.rarity)!=null?r:["R"])[0]})}),t.jsxs(A,{children:[t.jsx("h2",{className:"fcs t2 lh",children:e==null?void 0:e.name}),t.jsx(le,{chara:e}),t.jsx(oe,{chara:e}),t.jsx(ce,{chara:e})]})]}),t.jsx(re,{children:t.jsx(Y,{onClick:a})})]})}const pe=f.div`
  display: flex;
  flex-direction: column;
  user-select: none;
`,i=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  flex-grow: 1;
`,S=f.div`
  display: flex;
  gap: 16px;

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
    padding: 16px 0;

    ${i} {
      height: 32px;
    }
  }
  &[data-type='body'] {
    padding: 12px 0;
    border-bottom: 1px solid var(--lc-w);

    ${i} {
      height: 112px;
    }
  }

  //grid-template-columns: 1:90 2:240 3:240 4:240 5:90 6:90 7:786;
  ${i}:nth-of-type(1),
  ${i}:nth-of-type(5),
  ${i}:nth-of-type(6) {
    flex-basis: 90px;
  }
  ${i}:nth-of-type(2),
  ${i}:nth-of-type(3),
  ${i}:nth-of-type(4) {
    flex-basis: 240px;
  }
  ${i}:nth-of-type(7) {
    flex-basis: 786px;
  }

  ${i}:nth-of-type(1) {
    min-width: 90px;
  }
  ${i}:nth-of-type(2),
  ${i}:nth-of-type(3), 
  ${i}:nth-of-type(4) {
    min-width: 162px;
  }
  ${i}:nth-of-type(5), 
  ${i}:nth-of-type(6) {
    min-width: 72px;
  }
  ${i}:nth-of-type(7) {
    min-width: 240px;
  }

  // (1)icon, (2)name, (3)stat, (4)tech, (5)nation, (6)category, (7)explain
  @media (max-width: 1200px) {
    // (1)icon, (2)name, (3)stat, (4)tech, (5)nation, (6)category
    ${i}:nth-of-type(7) {
      display: none;
    }
  }
  @media (max-width: 900px) {
    // (1)icon, (2)name, (3)stat, (4)tech
    ${i}:nth-of-type(5),
    ${i}:nth-of-type(6) {
      display: none;
    }
  }
  @media (max-width: 680px) {
    // (1)icon, (2)name, (3)stat
    ${i}:nth-of-type(4) {
      display: none;
    }
  }
  @media (max-width: 500px) {
    // (1)icon, (2)name
    ${i}:nth-of-type(2) {
      min-width: 120px;
    }
    ${i}:nth-of-type(3) {
      display: none;
    }
  }
`;function xe(e,n){return e.filter(s=>(n!=null?n:[]).includes(s)).length>0}function L(e,n){return e.filter(s=>(n!=null?n:[]).join("_").includes(s)).length>0}function q(e){var n;return(n=e==null?void 0:e.toLowerCase().replace(/ /g,"").replace(/-/g,"").replace(/\(/g,"").replace(/\)/g,""))!=null?n:""}function me(){const[e]=N(),n=e.get("major"),s=e.get("minor"),a=e.get("rarity"),r=e.get("nation"),d=e.get("keyword"),p=I({queryKey:["alit-character-list"],queryFn:()=>P(this,null,function*(){var h;return(h=yield(yield fetch("json/character.json")).json())!=null?h:[]})}),[l,o]=b.useState([]);return b.useEffect(()=>{var h,j,x,y,u,m;let c;if(!n&&!s&&!a&&!r)c=(h=p.data)!=null?h:[];else{const $=(j=n==null?void 0:n.split("_"))!=null?j:[],v=(x=s==null?void 0:s.split("_"))!=null?x:[],w=(y=a==null?void 0:a.split("_"))!=null?y:[],k=(u=r==null?void 0:r.replace(/-/g,"_").split("_"))!=null?u:[];c=((m=p.data)!=null?m:[]).filter(C=>{var _;const F=$.length>0?L($,C.category):!0,G=v.length>0?L(v,C.stat):!0,O=w.length>0?xe(w,C.rarity):!0,T=k.length>0?k.includes((_=C.nation)!=null?_:""):!0;return F&&G&&O&&T})}if(d){const $=c==null?void 0:c.filter(v=>{var w;return(w=q(v.name))==null?void 0:w.includes(q(d))});o($)}else o(c)},[p.data,d,n,s,a,r]),l}const D="character-modal";function fe(){var j;const{modalAdd:e}=H(),n=me(),{current:s,visibleCount:a,loaderRef:r,LOADER:d}=Q(n!=null?n:[]),[p,l]=N(),o=(j=p.get("keyword"))!=null?j:void 0,c=b.useCallback((x,y)=>{let u="",m;switch(y){case"image":m=g.img(x);break;case"name":m=g.name(x,o);break;case"stat":u="column jc-c",m=g.stat(x);break;case"fleet":u="column jc-c",m=g.fleet(x);break;case"category":m=g.category(x);break;case"tag":m=g.tag();break;default:u="jc-c ta-c word-break",m=x[y];break}return t.jsx(i,{className:u,children:m})},[o]);return{current:s,renderText:c,data:n,visibleCount:a,LOADER:d,loaderRef:r,gridRowClickHandler:x=>{e({id:D,children:t.jsx(de,{chara:x})}),p.set("modal",D),l(p)}}}function ue(){const{current:e,renderText:n,data:s=[],visibleCount:a,LOADER:r,loaderRef:d,gridRowClickHandler:p}=fe();return t.jsxs(t.Fragment,{children:[t.jsxs(pe,{children:[t.jsx(S,{"data-type":"head",className:"fcs fwb",children:R.map(l=>t.jsx(i,{className:"jc-c",children:l.label},`head_${l.value}`))}),e.map(l=>t.jsx(S,{"data-type":"body",onClick:()=>{p(l)},children:R.map(o=>t.jsx(b.Fragment,{children:n(l,o.value)},`cell_${l.index}_${l.name}_${o.value}`))},`row_${l.index}_${l.name}`))]}),s.length>=a&&t.jsx("div",{className:"flex h100 ai-c jc-c",style:{padding:"16px"},ref:e.length>=r?d:void 0,children:t.jsx(M,{})})]})}function $e(){return t.jsx("div",{children:t.jsx(B,{children:t.jsx(b.Suspense,{fallback:t.jsx("div",{className:"flex h100 ai-c jc-c",children:t.jsx(M,{})}),children:t.jsx(ue,{})})})})}export{$e as default};
