var P=(e,s,n)=>new Promise((a,r)=>{var c=o=>{try{l(n.next(o))}catch(p){r(p)}},d=o=>{try{l(n.throw(o))}catch(p){r(p)}},l=o=>o.done?a(o.value):Promise.resolve(o.value).then(c,d);l((n=n.apply(e,s)).next())});import{j as t,d as f,u as C,r as b,a as T}from"./index-COo1f1DW.js";import{L,P as H}from"./styled-DFIr-Yv8.js";import{P as M,h as B,u as K,a as I}from"./useInfiniteGrid-BLQPAlmw.js";import{M as Q}from"./modal-Cfg4lkgq.js";import{m as Y}from"./modal.style-CXYTu6C_.js";const J=[{label:"아이콘",value:"image"},{label:"함선명",value:"name"},{label:"스탯",value:"stat"},{label:"기술점수",value:"fleet"},{label:"국가",value:"nation"},{label:"구분",value:"category"},{label:"스킬 유형",value:"tag"}],R=Object.freeze(J);function U(e){var n;const s=((n=e==null?void 0:e.rarity)!=null?n:["SSR"])[0];return t.jsx(M,{path:`images/character/${e==null?void 0:e.image}_x72.webp`,lqip:`images/character/${e==null?void 0:e.image}_lqip.webp`,width:72,height:96,tier:s})}function V(e,s){const{name:n=""}=e;return s?B(n,s):n}function W(e){if(!(e!=null&&e.stat)||!e.stat.length)return"";const[s,n]=e.stat[0].split(":"),[a,r]=e.stat[1].split(":"),c=s===a?s.replace(/\|/g,", "):`${s}→${a}`.replace(/\|/g,", ");return t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"fwm",children:c}),t.jsxs("p",{className:"fcs fws",children:[t.jsx("span",{className:"fc fwr",children:"획득: "}),n]}),t.jsxs("p",{className:"fcs fws",children:[t.jsx("span",{className:"fc fwr",children:"lv120: "}),r]})]})}function X(e){var r,c,d;const s=((r=e.fleet)!=null?r:[""])[0],n=((c=e.fleet)!=null?c:[""])[0],a=((d=e.fleet)!=null?d:[""])[0];return t.jsxs(t.Fragment,{children:[t.jsxs("p",{className:"fc",children:["획득: ",t.jsxs("span",{className:"fws fcs",children:["+",s]})]}),t.jsxs("p",{className:"fc",children:["★3: ",t.jsxs("span",{className:"fws fcs",children:["+",n]})]}),t.jsxs("p",{className:"fc",children:["lv120: ",t.jsxs("span",{className:"fws fcs",children:["+",a]})]})]})}function Z(e){return e.nation}function ee(e){var s;return(s=e.category)==null?void 0:s.join("→")}function te(){return t.jsx("p",{className:"fc",children:"준비 중"})}const g=Object.freeze({img:U,name:V,stat:W,fleet:X,nation:Z,category:ee,tag:te}),se=f.section`
  ${Y};
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
`,ne=f.div`
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
`,ae=f.div`
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
`,ie=f.div`
  position: absolute;
  top: 0;
  right: 0;

  & > button {
    width: 40px;
    height: 40px;
    padding: 10px;
    z-index: 1;
  }
`;function re({chara:e}){const s=n=>n==null?void 0:n.map(a=>{switch(a){case"구축":return"구축함";case"미구":return"미사일 구축함";case"경순":return"경순양함";case"중순":return"중순양함";case"대순":return"대형순양함";case"모니터":return"모니터함";case"전함":return"전함";case"항전":return"항공전함";case"순전":return"순양전함";case"항모":return"항공모함";case"경항모":return"경항공모함";case"잠수":return"잠수함";case"잠항":return"잠수항모";default:return a}}).join(" → ");return t.jsxs("p",{className:"b1 fcw",children:[e==null?void 0:e.nation,", ",s(e==null?void 0:e.category)]})}function le({chara:e}){const s=n=>!e||!e.stat||e.stat.length<2?"준비 중":e.stat[n].replace(/\|/g,", ").replace(/:/g,": ");return t.jsxs(E,{children:[t.jsx("h3",{className:"fcs b1 fwr",children:"함대 스탯"}),t.jsx("div",{className:"box-data",children:["획득 시","Lv 120"].map((n,a)=>t.jsxs("div",{className:"data-row",children:[t.jsx("span",{className:"data-head",children:n}),t.jsx("span",{className:"fcs fws",children:s(a)})]},`stat-${n}`))})]})}function oe({chara:e}){const s=n=>!e||!e.fleet||e.fleet.length<3?"준비 중":e.fleet[n];return t.jsxs(E,{children:[t.jsx("h3",{className:"fcs b1 fwr",children:"기술 점수"}),t.jsx("div",{className:"box-data",children:["획득 시","★3","Lv 120"].map((n,a)=>t.jsxs("div",{className:"data-row",children:[t.jsx("span",{className:"data-head",children:n}),t.jsxs("span",{className:"fcs fws",children:["+",s(a)]})]},`fleet-${n}`))})]})}function ce({chara:e}){var r;const[s,n]=C(),a=()=>{s.delete("modal"),n(s)};return t.jsxs(se,{children:[t.jsxs(ae,{children:[t.jsx(ne,{children:t.jsx(M,{path:`images/character/${e==null?void 0:e.image}.webp`,lqip:`images/character/${e==null?void 0:e.image}_lqip.webp`,width:192,height:256,tier:((r=e==null?void 0:e.rarity)!=null?r:["R"])[0]})}),t.jsxs(A,{children:[t.jsx("h2",{className:"fcs t2 lh",children:e==null?void 0:e.name}),t.jsx(re,{chara:e}),t.jsx(le,{chara:e}),t.jsx(oe,{chara:e})]})]}),t.jsx(ie,{children:t.jsx(Q,{onClick:a})})]})}const de=f.div`
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
`;function pe(e,s){return e.filter(n=>(s!=null?s:[]).includes(n)).length>0}function q(e,s){return e.filter(n=>(s!=null?s:[]).join("_").includes(n)).length>0}function xe(){const[e]=C(),s=e.get("major"),n=e.get("minor"),a=e.get("rarity"),r=e.get("nation"),c=e.get("keyword"),d=K({queryKey:["alit-character-list"],queryFn:()=>P(this,null,function*(){var h;return(h=yield(yield fetch("json/character.json")).json())!=null?h:[]})}),[l,o]=b.useState([]);return b.useEffect(()=>{var h,j,x,y,u,m;let p;if(!s&&!n&&!a&&!r)p=(h=d.data)!=null?h:[];else{const $=(j=s==null?void 0:s.split("_"))!=null?j:[],v=(x=n==null?void 0:n.split("_"))!=null?x:[],w=(y=a==null?void 0:a.split("_"))!=null?y:[],k=(u=r==null?void 0:r.replace(/-/g,"_").split("_"))!=null?u:[];p=((m=d.data)!=null?m:[]).filter(N=>{var _;const F=$.length>0?q($,N.category):!0,G=v.length>0?q(v,N.stat):!0,O=w.length>0?pe(w,N.rarity):!0,z=k.length>0?k.includes((_=N.nation)!=null?_:""):!0;return F&&G&&O&&z})}if(c){const $=p==null?void 0:p.filter(v=>{var w;return(w=v.name)==null?void 0:w.includes(c)});o($)}else o(p)},[d.data,c,s,n,a,r]),l}const D="character-modal";function me(){var j;const{modalAdd:e}=T(),s=xe(),{current:n,visibleCount:a,loaderRef:r,LOADER:c}=I(s!=null?s:[]),[d,l]=C(),o=(j=d.get("keyword"))!=null?j:void 0,p=b.useCallback((x,y)=>{let u="",m;switch(y){case"image":m=g.img(x);break;case"name":m=g.name(x,o);break;case"stat":u="column jc-c",m=g.stat(x);break;case"fleet":u="column jc-c",m=g.fleet(x);break;case"category":m=g.category(x);break;case"tag":m=g.tag();break;default:u="jc-c ta-c word-break",m=x[y];break}return t.jsx(i,{className:u,children:m})},[o]);return{current:n,renderText:p,data:s,visibleCount:a,LOADER:c,loaderRef:r,gridRowClickHandler:x=>{e({id:D,children:t.jsx(ce,{chara:x})}),d.set("modal",D),l(d)}}}function fe(){const{current:e,renderText:s,data:n=[],visibleCount:a,LOADER:r,loaderRef:c,gridRowClickHandler:d}=me();return t.jsxs(t.Fragment,{children:[t.jsxs(de,{children:[t.jsx(S,{"data-type":"head",className:"fcs fwb",children:R.map(l=>t.jsx(i,{className:"jc-c",children:l.label},`head_${l.value}`))}),e.map(l=>t.jsx(S,{"data-type":"body",onClick:()=>{d(l)},children:R.map(o=>t.jsx(b.Fragment,{children:s(l,o.value)},`cell_${l.index}_${l.name}_${o.value}`))},`row_${l.index}_${l.name}`))]}),n.length>=a&&t.jsx("div",{className:"flex h100 ai-c jc-c",style:{padding:"16px"},ref:e.length>=r?c:void 0,children:t.jsx(L,{})})]})}function be(){return t.jsx("div",{children:t.jsx(H,{children:t.jsx(b.Suspense,{fallback:t.jsx("div",{className:"flex h100 ai-c jc-c",children:t.jsx(L,{})}),children:t.jsx(fe,{})})})})}export{be as default};
