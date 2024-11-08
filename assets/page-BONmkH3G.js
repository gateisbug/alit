const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/page-AJd-meBO.js","assets/vendor-react-BgBXYHvm.js","assets/vendor-react-router-dom-BNlwnQiy.js","assets/vendor-react-dom-BBUhmhcj.js","assets/vendor-scheduler-B7dcc9wB.js","assets/vendor-react-router-4iDMQ-pU.js","assets/vendor-@remix-run-DIosy_T7.js","assets/modal-uNky51QX.js","assets/modal-Bgum7afW.js","assets/vendor-styled-components-D-sOn0X5.js","assets/vendor-tslib-CGNu0TuM.js","assets/vendor-@emotion-sScrWPmR.js","assets/vendor-stylis-DinRj2j6.js","assets/IndexedItemDB-B-djnPLx.js","assets/vendor-idb-SGlR87fP.js","assets/obtains-cWKSO7e0.js"])))=>i.map(i=>d[i]);
var y=(u,r,l)=>new Promise((n,s)=>{var p=c=>{try{b(l.next(c))}catch(d){s(d)}},i=c=>{try{b(l.throw(c))}catch(d){s(d)}},b=c=>c.done?n(c.value):Promise.resolve(c.value).then(p,i);b((l=l.apply(u,r)).next())});import{r as t,j as a}from"./vendor-react-BgBXYHvm.js";import{r as N}from"./vendor-react-dom-BBUhmhcj.js";import{L as C,u as D,S as M}from"./vendor-react-router-dom-BNlwnQiy.js";import{S as R,u as _,a as v,_ as A,I as w,b as L}from"./index-3nzSJAJi.js";import{a as P}from"./modal-Bgum7afW.js";import{d as m}from"./vendor-styled-components-D-sOn0X5.js";import{d as z}from"./vendor-lodash-es-B37DsV7W.js";import{L as B}from"./loader-CF7w1U0Z.js";import{P as H,I as K}from"./IndexedItemDB-B-djnPLx.js";import"./vendor-scheduler-B7dcc9wB.js";import"./vendor-react-router-4iDMQ-pU.js";import"./vendor-@remix-run-DIosy_T7.js";import"./vendor-zustand-BV59WVYb.js";import"./vendor-tslib-CGNu0TuM.js";import"./vendor-@emotion-sScrWPmR.js";import"./vendor-stylis-DinRj2j6.js";import"./vendor-idb-SGlR87fP.js";const O=m(P).attrs({className:"flex column"})`
  --modal-surface: var(--surface);

  width: 100%;
  max-width: 640px;
  padding: 0;
  border-radius: 8px;
  min-height: 640px;
  max-height: calc(100vh - 128px);
`,$=m.header.attrs({className:"flex ai-c"})`
  padding: 4px 8px;
  border-bottom: 1px solid var(--lc);
`,T=m.div.attrs({className:"flex ai-c pos-r"})`
  height: 56px;
  padding: 0 12px;
  width: 100%;

  & > label {
    display: block;
    width: 24px;
    height: 24px;
    color: var(--primary);
  }

  & > input {
    appearance: none;
    background-color: transparent;
    border: 0;
    outline: none;
    flex: 1;
    width: 0;
    height: 100%;
    padding-left: 16px;

    &::placeholder {
      font-family: -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo',
        'Pretendard Variable', Pretendard, Roboto, 'Noto Sans KR', 'Segoe UI',
        'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
        'Segoe UI Symbol', sans-serif;
      color: var(--fc-w);
    }

    &[type='search']::-webkit-search-cancel-button {
      -webkit-appearance: none;
      appearance: none;
    }
  }
`,U=m(R).attrs({className:"fwb caption lh"})`
  border-radius: 6px;
  height: 24px;
  margin-right: 8px;
  padding: 2px 6px 4px;
`,V=m.div`
  width: 100%;
  max-width: 640px;
  padding: 16px;

  @media (prefers-color-scheme: light) {
    --border: rgba(232, 234, 238, 0.5);
    --background: rgba(246, 247, 248, 0.4);
  }
  @media (prefers-color-scheme: dark) {
    --border: rgba(29, 33, 38, 0.8);
    --background: rgba(20, 23, 26, 0.5);
  }
`,F=m.div.attrs({className:"ai-fs"})`
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 16px;
  padding-bottom: 16px;
  box-sizing: border-box;
`,G=m.div.attrs({className:"flex column"})`
  &:first-child {
    grid-column: 1 / -1;
  }

  h3 {
    padding: 16px 24px 12px 16px;
    letter-spacing: 0.1em;
    color: #98a4b3;
  }
`,Y=m(C).attrs({className:"flex ai-c cur-p bb b2 fwm"})`
  font-family: inherit;
  color: var(--link);
  flex-grow: 1;
  height: 42px;
  padding: 2px 0 2px 16px;
  border-radius: 12px;
  margin-bottom: 8px;
  transition:
    border 150ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);

  border: 1px solid var(--border);
  background-color: var(--background);
  &:hover {
    border-color: var(--link-lc);
    background-color: var(--link-bc);
  }
`,q=m.div.attrs({className:"column"})`
  .nodata {
    gap: 24px;
    padding: 48px 0;
  }
`,J=m.button.attrs({className:"flex ai-c cur-p b2 fwm bb"})`
  color: var(--link);
  gap: 16px;
  flex-grow: 1;
  min-height: 64px;
  padding: 2px 16px;
  border-radius: 12px;
  margin-bottom: 8px;

  transition:
    border 150ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);

  border: 1px solid var(--border);
  background-color: var(--background);
  &:hover {
    border-color: var(--link-lc);
    background-color: var(--link-bc);
  }

  & > .info {
    overflow-x: hidden;
    flex-grow: 1;
  }
`,Q=Object.freeze([{label:"전체",items:[{label:"전체 아이템",link:"/item"}]},{label:"함포",items:[{label:"전체",link:"/item?category=gun"},{label:"구축포(부포)",link:"/item?category=gun&division=dd"},{label:"경순포(부포)",link:"/item?category=gun&division=cl"},{label:"중순포",link:"/item?category=gun&division=ca"},{label:"전함포",link:"/item?category=gun&division=bb"},{label:"대순포",link:"/item?category=gun&division=cb"}]},{label:"항공기",items:[{label:"전체",link:"/item?category=aircraft"},{label:"전투기",link:"/item?category=aircraft&division=fighter"},{label:"폭격기",link:"/item?category=aircraft&division=bomber"},{label:"뇌격기",link:"/item?category=aircraft&division=torpedo-bomber"},{label:"수상기",link:"/item?category=aircraft&division=seaplane"}]},{label:"어뢰",items:[{label:"전체",link:"/item?category=torpedo"},{label:"수면어뢰",link:"/item?category=torpedo&division=surface"},{label:"잠수어뢰",link:"/item?category=torpedo&division=submarine"},{label:"미사일",link:"/item?category=torpedo&division=missile"}]},{label:"대공포",items:[{label:"전체",link:"/item?category=antiair"},{label:"일반",link:"/item?category=antiair&division=normal"},{label:"시한신관",link:"/item?category=antiair&division=fuse"}]},{label:"설비",items:[{label:"전체",link:"/item?category=accessory"},{label:"전열",link:"/item?category=accessory&division=front"},{label:"후열",link:"/item?category=accessory&division=back"},{label:"범선",link:"/item?category=accessory&division=sailing"},{label:"공용",link:"/item?category=accessory&division=common"},{label:"특수",link:"/item?category=accessory&division=signiture"}]},{label:"특수",items:[{label:"전체",link:"/item?category=special"},{label:"공용",link:"/item?category=special&division=normal"},{label:"전용",link:"/item?category=special&division=signiture"}]}]),W=t.lazy(()=>A(()=>import("./page-AJd-meBO.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])));function X(){const{modalAdd:u}=_(),[r,l]=D(),n=t.useId(),[s,p]=t.useState(""),i=t.useDeferredValue(s),[b,c]=t.useState(void 0),d=t.useDeferredValue(b),j=t.useCallback(z(o=>{p(o),r.set("keyword",o),l(r)},300),[]),S=o=>{p(o),r.set("keyword",o),l(r)};t.useEffect(()=>{if(s.length===0){c(void 0);return}y(this,null,function*(){const e=yield(yield K.getInstance()).getAllData(),f=e==null?void 0:e.filter(x=>{var g;return(g=x.name)==null?void 0:g.includes(i)}),h=e==null?void 0:e.filter(x=>{var g;return(g=x.nickname)==null?void 0:g.includes(i)}),k=e==null?void 0:e.filter(x=>{var g;return(g=x.explain)==null?void 0:g.join(". ").includes(i)});c(Array.from(new Set(f.concat(h,k))))}).catch(e=>{throw new Error(e)})},[i]);const E=o=>{u({id:w,children:a.jsx(W,{item:o})}),r.set("modal",w),l(r)},I=t.useCallback(()=>{if(i.length===0)return null;if(!d)return a.jsx("div",{className:"flex h100 ai-c jc-c",children:a.jsx(B,{})});if((d==null?void 0:d.length)===0)return a.jsxs("div",{className:"flex column ai-c jc-c fcs nodata",children:[a.jsx("p",{className:"e1",children:"\\(o_o)/"}),a.jsx("p",{className:"t4",children:"No Search Data"})]});const o=e=>e&&e.split(new RegExp(`(${i})`,"gi")).map((h,k)=>h.includes(s)?a.jsx("mark",{children:h},`${h}_${k}`):h);return d.map(e=>a.jsxs(J,{onClick:()=>{E(e)},children:[a.jsx(H,{item:e,path:`images/items/${e==null?void 0:e.image}_x48.webp`,size:36}),a.jsxs("div",{className:"flex column jc-c ai-fs info",children:[a.jsx("div",{children:o(e.name)}),a.jsx("div",{className:"fcw",children:o(e.nickname)})]})]},e==null?void 0:e.index))},[i,d]);return t.useEffect(()=>{const o=e=>{r.get("modal")===v&&e.key==="Escape"&&(e.preventDefault(),r.delete("modal"),r.delete("keyword"),l(r))};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[r]),t.useEffect(()=>{if(r.get("modal")===v){const e=document.getElementById(n);e&&e.focus()}},[n,r]),t.useEffect(()=>{if(r.get("keyword")===null){p("");const e=document.getElementById(n);e&&(e.value="")}},[r]),t.useEffect(()=>{var e;const o=r.get("keyword");if(s.length===0&&o!==null&&((e=o.length)!=null?e:0)>0){p(o);const f=document.getElementById(n);f&&(f.value=o)}},[n,s,r]),{id:n,search:s,onChangeInput:j,onInputEnter:S,renderResult:I,closeHandler:()=>{r.delete("modal"),r.delete("keyword"),l(r)}}}function he(){const{id:u,onChangeInput:r,onInputEnter:l,search:n,renderResult:s,closeHandler:p}=X();return a.jsxs(O,{children:[a.jsxs($,{children:[a.jsxs(T,{children:[a.jsx("label",{htmlFor:u,className:"flex ai-c jc-c",children:a.jsx(L,{})}),a.jsx("input",{id:u,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",enterKeyHint:"search",spellCheck:"false",placeholder:"검색: 장비명, 별명, 설명",type:"search",maxLength:64,onChange:i=>{r(i.target.value)},onKeyDown:i=>{i.key==="Enter"&&l(i.target.value)},className:"b1 fwm fcs",tabIndex:0})]}),a.jsx(U,{onClick:p,children:"esc"})]}),a.jsxs(V,{className:"ov-a bb",children:[a.jsx(q,{className:n.length>0?"flex":"none",children:s()}),a.jsx(F,{className:n.length>0?"none":"grid",children:Q.map(i=>a.jsxs(G,{children:[a.jsx("h3",{className:"b2 fwm bb",children:i.label}),i.items.map(b=>a.jsx(Y,{to:b.link,onClick:()=>{N.createPortal(a.jsx(M,{}),document.body),p()},children:b.label},b.label))]},i.label))})]})]})}export{he as default};
