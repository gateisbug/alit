import{l as u,a as m,u as b,r,i as c,b as p,j as f,d as y}from"./index-hp0bncMg.js";const k=u`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: var(--backdrop-bc, inherit);
  z-index: var(--backdrop-z, 1000);

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`,w="item-modal",h=y.div`
  ${k};

  --backdrop-bc: rgba(0, 0, 0, 0.5);
  --backdrop-z: 1100;

  padding: 24px;
`;function x(){const{lists:a}=m(),[o,l]=b(),d=o.get("modal"),e=r.useMemo(()=>a.find(t=>t.id===d),[a,d]),i=r.useCallback((t,s)=>{const n=document.getElementById(s);t.target===n&&(o.delete("modal"),l(o))},[o,a]);return r.useEffect(()=>{document.getElementById(w)===null&&(o.delete("modal"),l(o))},[]),r.useEffect(()=>{if(d!==null){const t=window.innerWidth>document.documentElement.clientWidth,s=document.body.getAttribute("style");t&&!s?document.body.setAttribute("style","overflow:hidden;padding-right:17px;"):c&&!s&&document.body.setAttribute("style","overflow:hidden;")}else document.body.removeAttribute("style")},[d,c]),r.useEffect(()=>{const t=s=>{var n;s.key==="Escape"&&(s.preventDefault(),((n=d==null?void 0:d.length)!=null?n:0)>0&&(o.delete("modal"),l(o)))};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[o]),e?p.createPortal(f.jsx(h,{onClick:t=>{i(t,e==null?void 0:e.id)},id:e==null?void 0:e.id,children:e==null?void 0:e.children},e==null?void 0:e.id),document.body):null}export{x as default};
