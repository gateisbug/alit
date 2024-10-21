var E=Object.defineProperty;var x=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var g=(a,t,r)=>t in a?E(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r,j=(a,t)=>{for(var r in t||(t={}))R.call(t,r)&&g(a,r,t[r]);if(x)for(var r of x(t))I.call(t,r)&&g(a,r,t[r]);return a};var w=(a,t,r)=>g(a,typeof t!="symbol"?t+"":t,r);var d=(a,t,r)=>new Promise((n,o)=>{var e=s=>{try{i(r.next(s))}catch(b){o(b)}},u=s=>{try{i(r.throw(s))}catch(b){o(b)}},i=s=>s.done?n(s.value):Promise.resolve(s.value).then(e,u);i((r=r.apply(a,t)).next())});import{r as h,j as y}from"./vendor-react-BgBXYHvm.js";import{d as A}from"./vendor-styled-components-D-sOn0X5.js";import{o as N}from"./vendor-idb-SGlR87fP.js";function P(a){const{src:t,alt:r,height:n,width:o,placeholder:e,priority:u=!1,defaultImage:i="assets/noImage.svg"}=a,[s,b]=h.useState(e!=null?e:t),p=h.useRef(null);return h.useEffect(()=>{if(!e)return;const l=new IntersectionObserver(v=>{v[0].isIntersecting&&(b(t),l.disconnect())},{threshold:.25});return p.current&&l.observe(p.current),()=>{p.current&&l.unobserve(p.current)}},[e,t]),y.jsx("img",{ref:p,src:s,loading:u?"eager":"lazy",onError:l=>{l.target.src=i,l.target.width=32,l.target.height=32},alt:r,width:o,height:n})}const z=A.div`
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
`;function q({path:a,item:t,size:r=48}){const n=(o,e)=>{if(e!=="gun")return"default";switch(o){case"ap":return"blue";case"he":return"red";case"normal":case"type3":return"yellow";case"sap":return"violet";default:return"default"}};return y.jsx(z,{"data-tier":t==null?void 0:t.tier,"data-stroke":n(t==null?void 0:t.type,t==null?void 0:t.domain),className:"portrait",children:y.jsx(P,{src:a!=null?a:`images/items/${t==null?void 0:t.image}.webp`,alt:"images",width:r,height:r,placeholder:`images/items/${t==null?void 0:t.image}_lqip.webp`})})}function k(){return d(this,null,function*(){var t;return(t=yield(yield fetch("json/all.json")).json())!=null?t:[]})}const O="alit-database",f="item-list",T=3,c=class c{constructor(){w(this,"db",null)}static getInstance(){return d(this,null,function*(){return c.instance||(c.instance=new c,yield c.instance.initialize()),c.instance})}getAllData(){return d(this,null,function*(){if(!this.db)return[];const t=this.db.transaction(f,"readonly"),n=yield t.objectStore(f).getAll();return yield t.done,n.length===0?yield k():n})}initialize(){return d(this,null,function*(){this.db=yield N(O,T,{upgrade(r){return d(this,null,function*(){r.objectStoreNames.contains(f)||r.createObjectStore(f,{keyPath:"no"});const n=yield k(),o=r.transaction(f,"readwrite"),e=o.objectStore(f);n.forEach(u=>{e.put(j({},u)).catch(i=>{throw new Error(i)})}),yield o.done})}})})}};w(c,"instance",null);let S=c;export{S as I,q as P,z as a};
