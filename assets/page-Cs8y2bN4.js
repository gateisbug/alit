const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/page-BmWq1YfB.js","assets/vendor-react-BgBXYHvm.js","assets/vendor-react-router-dom-BNlwnQiy.js","assets/vendor-react-dom-BBUhmhcj.js","assets/vendor-scheduler-B7dcc9wB.js","assets/vendor-react-router-4iDMQ-pU.js","assets/vendor-@remix-run-DIosy_T7.js","assets/modal-DOf8EwIw.js","assets/modal-Bgum7afW.js","assets/vendor-styled-components-D-sOn0X5.js","assets/vendor-tslib-CGNu0TuM.js","assets/vendor-@emotion-sScrWPmR.js","assets/vendor-stylis-DinRj2j6.js","assets/IndexedItemDB-BE9qtrG0.js","assets/vendor-idb-SGlR87fP.js","assets/obtains-B8wT_VoV.js"])))=>i.map(i=>d[i]);
var v=(b,r,i)=>new Promise((p,d)=>{var m=n=>{try{g(i.next(n))}catch(s){d(s)}},o=n=>{try{g(i.throw(n))}catch(s){d(s)}},g=n=>n.done?p(n.value):Promise.resolve(n.value).then(m,o);g((i=i.apply(b,r)).next())});import{r as l,j as e}from"./vendor-react-BgBXYHvm.js";import{r as I}from"./vendor-react-dom-BBUhmhcj.js";import{L as C,u as D,S as M}from"./vendor-react-router-dom-BNlwnQiy.js";import{S as R,u as L,a as j,_ as P,I as w,b as _}from"./index-HP2Up328.js";import{a as z}from"./modal-Bgum7afW.js";import{d as c}from"./vendor-styled-components-D-sOn0X5.js";import{d as A}from"./vendor-lodash-es-B37DsV7W.js";import{L as H}from"./loader-CF7w1U0Z.js";import{P as B,I as K}from"./IndexedItemDB-BE9qtrG0.js";import"./vendor-scheduler-B7dcc9wB.js";import"./vendor-react-router-4iDMQ-pU.js";import"./vendor-@remix-run-DIosy_T7.js";import"./vendor-zustand-BV59WVYb.js";import"./vendor-tslib-CGNu0TuM.js";import"./vendor-@emotion-sScrWPmR.js";import"./vendor-stylis-DinRj2j6.js";import"./vendor-idb-SGlR87fP.js";const O=c(z).attrs({className:"flex column"})`
  --modal-surface: var(--surface);

  width: 100%;
  max-width: 640px;
  padding: 0;
  border-radius: 8px;
  min-height: 640px;
  max-height: calc(100vh - 128px);
`,U=c.header.attrs({className:"flex ai-c"})`
  padding: 4px 8px;
  border-bottom: 1px solid var(--lc);
`,V=c.div.attrs({className:"flex ai-c pos-r"})`
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
`,F=c(R).attrs({className:"fwb caption lh"})`
  border-radius: 6px;
  height: 24px;
  margin-right: 8px;
  padding: 2px 6px 4px;
`,G=c.div`
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
`,T=c.div.attrs({className:"ai-fs"})`
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 16px;
  padding-bottom: 16px;
  box-sizing: border-box;
`,Y=c.div.attrs({className:"flex column"})`
  &:first-child {
    grid-column: 1 / -1;
  }

  h3 {
    padding: 16px 24px 12px 16px;
    letter-spacing: 0.1em;
    color: #98a4b3;
  }
`,$=c(C).attrs({className:"flex ai-c cur-p bb b2 fwm"})`
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
`,q=c.div.attrs({className:"column"})`
  .nodata {
    gap: 24px;
    padding: 48px 0;
  }
`,J=c.button.attrs({className:"flex ai-c cur-p b2 fwm bb"})`
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

  & > span {
    overflow-x: hidden;
  }
`,Q=Object.freeze([{label:"전체",items:[{label:"전체 아이템",link:"/item"}]},{label:"함포",items:[{label:"전체",link:"/item?category=gun"},{label:"구축포(부포)",link:"/item?category=gun&division=dd"},{label:"경순포(부포)",link:"/item?category=gun&division=cl"},{label:"중순포",link:"/item?category=gun&division=ca"},{label:"전함포",link:"/item?category=gun&division=bb"},{label:"대순포",link:"/item?category=gun&division=cb"}]},{label:"항공기",items:[{label:"전체",link:"/item?category=aircraft"},{label:"전투기",link:"/item?category=aircraft&division=fighter"},{label:"폭격기",link:"/item?category=aircraft&division=bomber"},{label:"뇌격기",link:"/item?category=aircraft&division=torpedo-bomber"},{label:"수상기",link:"/item?category=aircraft&division=seaplane"}]},{label:"어뢰",items:[{label:"전체",link:"/item?category=torpedo"},{label:"수면어뢰",link:"/item?category=torpedo&division=surface"},{label:"잠수어뢰",link:"/item?category=torpedo&division=submarine"},{label:"미사일",link:"/item?category=torpedo&division=missile"}]},{label:"대공포",items:[{label:"전체",link:"/item?category=antiair"},{label:"일반",link:"/item?category=antiair&division=normal"},{label:"시한신관",link:"/item?category=antiair&division=fuse"}]},{label:"설비",items:[{label:"전체",link:"/item?category=accessory"},{label:"전열",link:"/item?category=accessory&division=frontline"},{label:"후열",link:"/item?category=accessory&division=backline"},{label:"특수",link:"/item?category=accessory&division=signiture"}]},{label:"특수",items:[{label:"전체",link:"/item?category=special"},{label:"공용",link:"/item?category=special&division=normal"},{label:"전용",link:"/item?category=special&division=signiture"}]}]),W=l.lazy(()=>P(()=>import("./page-BmWq1YfB.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])));function X(){const{modalAdd:b}=L(),[r,i]=D(),p=l.useId(),[d,m]=l.useState(""),o=l.useDeferredValue(d),[g,n]=l.useState(void 0),s=l.useDeferredValue(g),S=l.useCallback(A(a=>{m(a)},250),[]);l.useEffect(()=>{if(d.length===0){n(void 0);return}v(this,null,function*(){const t=yield(yield K.getInstance()).getAllData(),h=t==null?void 0:t.filter(u=>{var x,f,k,y;return((x=u.name)==null?void 0:x.includes(o))||((f=u.nickname)==null?void 0:f.includes(o))||((k=u.type)==null?void 0:k.includes(o))||((y=u.explain)==null?void 0:y.join(". ").includes(o))});n([...h])}).catch(t=>{throw new Error(t)})},[o]);const N=a=>{b({id:w,children:e.jsx(W,{item:a})}),r.set("modal",w),i(r)},E=l.useCallback(()=>o.length===0?null:s?(s==null?void 0:s.length)===0?e.jsxs("div",{className:"flex column ai-c jc-c fcs nodata",children:[e.jsx("p",{className:"e1",children:"\\(o_o)/"}),e.jsx("p",{className:"t4",children:"No Search Data"})]}):s.map(a=>e.jsxs(J,{onClick:()=>{N(a)},children:[e.jsx(B,{item:a,path:`images/items/${a==null?void 0:a.image}_x48.webp`,size:36}),e.jsx("span",{children:a.name})]},a==null?void 0:a.index)):e.jsx("div",{className:"flex h100 ai-c jc-c",children:e.jsx(H,{})}),[o,s]);return l.useEffect(()=>{const a=t=>{r.get("modal")===j&&t.key==="Escape"&&(t.preventDefault(),r.delete("modal"),i(r))};return window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}},[r]),l.useEffect(()=>{if(r.get("modal")===j){const t=document.getElementById(p);t&&t.focus()}},[p,r]),{id:p,search:d,onChangeInput:S,renderResult:E,closeHandler:()=>{r.delete("modal"),i(r)}}}function xe(){const{id:b,onChangeInput:r,search:i,renderResult:p,closeHandler:d}=X();return e.jsxs(O,{children:[e.jsxs(U,{children:[e.jsxs(V,{children:[e.jsx("label",{htmlFor:b,className:"flex ai-c jc-c",children:e.jsx(_,{})}),e.jsx("input",{id:b,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",enterKeyHint:"search",spellCheck:"false",placeholder:"검색: 장비명, 별명, 설명",type:"search",maxLength:64,onChange:m=>{r(m.target.value)},className:"b1 fwm fcs",tabIndex:0})]}),e.jsx(F,{onClick:d,children:"esc"})]}),e.jsxs(G,{className:"ov-a bb",children:[e.jsx(q,{className:i.length>0?"flex":"none",children:p()}),e.jsx(T,{className:i.length>0?"none":"grid",children:Q.map(m=>e.jsxs(Y,{children:[e.jsx("h3",{className:"b2 fwm bb",children:m.label}),m.items.map(o=>e.jsx($,{to:o.link,onClick:()=>{I.createPortal(e.jsx(M,{}),document.body),d()},children:o.label},o.label))]},m.label))})]})]})}export{xe as default};
