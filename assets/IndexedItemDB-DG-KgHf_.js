var I=Object.defineProperty;var j=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var p=(a,t,r)=>t in a?I(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r,k=(a,t)=>{for(var r in t||(t={}))R.call(t,r)&&p(a,r,t[r]);if(j)for(var r of j(t))m.call(t,r)&&p(a,r,t[r]);return a};var w=(a,t,r)=>p(a,typeof t!="symbol"?t+"":t,r);var d=(a,t,r)=>new Promise((s,e)=>{var n=o=>{try{i(r.next(o))}catch(b){e(b)}},u=o=>{try{i(r.throw(o))}catch(b){e(b)}},i=o=>o.done?s(o.value):Promise.resolve(o.value).then(n,u);i((r=r.apply(a,t)).next())});import{r as h,j as y}from"./vendor-react-BgBXYHvm.js";import{d as A}from"./vendor-styled-components-DQH6gzwU.js";import{o as N}from"./vendor-idb-SGlR87fP.js";function O(a){const{src:t,alt:r,height:s,width:e,placeholder:n,priority:u=!1,defaultImage:i="assets/noImage.svg"}=a,[o,b]=h.useState(n!=null?n:t),g=h.useRef(null);return h.useEffect(()=>{if(!n)return;const l=new IntersectionObserver(E=>{if(E[0].isIntersecting){const x=new window.Image;x.src=t,x.onload=()=>{b(t)},l.disconnect()}},{threshold:.25});return g.current&&l.observe(g.current),()=>{g.current&&l.unobserve(g.current)}},[n,t]),y.jsx("img",{ref:g,src:o,loading:u?"eager":"lazy",onError:l=>{l.target.src=i,l.target.width=32,l.target.height=32},alt:r,width:e,height:s})}const P=A.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  box-sizing: border-box;
  padding: 5px;
  border-width: 3px;
  border-style: solid;
  border-color: var(--portrait-lc);
  background-color: var(--portrait-bc);

  user-select: none;

  &[data-stroke='default'] {
    --portrait-lc: #7e5475;
  }
  &[data-stroke='red'] {
    --portrait-lc: #e4002b;
  }
  &[data-stroke='yellow'] {
    --portrait-lc: #f3e500;
  }
  &[data-stroke='blue'] {
    --portrait-lc: #0047bb;
  }
  &[data-stroke='violet'] {
    --portrait-lc: #ea27c2;
  }

  &[data-tier='N'] {
    --portrait-bc: #ddd;
  }
  &[data-tier='R'] {
    --portrait-bc: #9fe8ff;
  }
  &[data-tier='SR'] {
    --portrait-bc: #c4adff;
  }
  &[data-tier='SSR'] {
    --portrait-bc: #ee9;
  }
  &[data-tier='UR'] {
    --portrait-bc: transparent;
    background: linear-gradient(120deg, #fbffca, #baffbf, #a7efff, #ffabff);
  }
`;function q({path:a,item:t,size:r=48}){const s=(e,n)=>{if(n!=="gun")return"default";switch(e){case"ap":return"blue";case"he":return"red";case"normal":case"type3":return"yellow";case"sap":return"violet";default:return"default"}};return y.jsx(P,{"data-tier":t==null?void 0:t.tier,"data-stroke":s(t==null?void 0:t.type,t==null?void 0:t.domain),className:"portrait",children:y.jsx(O,{src:a!=null?a:`images/items/${t==null?void 0:t.image}.webp`,alt:"images",width:r,height:r,placeholder:`images/items/${t==null?void 0:t.image}_lqip.webp`})})}function S(){return d(this,null,function*(){var t;return(t=yield(yield fetch("json/item.json")).json())!=null?t:[]})}const z="alit-database",f="item-list",T=9,c=class c{constructor(){w(this,"db",null)}static getInstance(){return d(this,null,function*(){return c.instance||(c.instance=new c,yield c.instance.initialize()),c.instance})}getAllData(){return d(this,null,function*(){const t=()=>d(this,null,function*(){return yield S()});if(!this.db)return t();const r=this.db.transaction(f,"readonly"),e=yield r.objectStore(f).getAll();return yield r.done,e.length===0?t():e})}initialize(){return d(this,null,function*(){this.db=yield N(z,T,{upgrade(r){return d(this,null,function*(){r.objectStoreNames.contains(f)||r.createObjectStore(f,{keyPath:"no"});const s=yield S(),e=r.transaction(f,"readwrite"),n=e.objectStore(f);s.forEach(u=>{n.put(k({},u)).catch(i=>{throw new Error(i)})}),yield e.done})}})})}};w(c,"instance",null);let v=c;export{v as I,q as P,O as a,P as b};
