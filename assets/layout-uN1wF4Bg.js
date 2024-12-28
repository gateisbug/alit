import{l as i,a as m,u,r as a,i as c,b,j as p,d as f}from"./index-ChMF3pDD.js";const g=i`
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
`,h="item-modal",x=f.div`
  ${g};

  --backdrop-bc: rgba(0, 0, 0, 0.5);
  --backdrop-z: 1100;

  padding: 24px;
`;function k(){const{lists:d}=m(),[t,s]=u(),e=a.useMemo(()=>d.find(o=>o.id===t.get("modal")),[d,t]),n=a.useCallback((o,l)=>{const r=document.getElementById(l);o.target===r&&(t.delete("modal"),s(t))},[t,d]);return a.useEffect(()=>{document.getElementById(h)===null&&(t.delete("modal"),s(t))},[]),a.useEffect(()=>{if(t.get("modal")!==null){const l=window.innerWidth>document.documentElement.clientWidth,r=document.body.getAttribute("style");l&&!r&&document.body.setAttribute("style",c?"overflow:hidden;":"overflow:hidden;padding-right:17px;")}else document.body.removeAttribute("style")},[t,c]),e?b.createPortal(p.jsx(x,{onClick:o=>{n(o,e==null?void 0:e.id)},id:e==null?void 0:e.id,children:e==null?void 0:e.children},e==null?void 0:e.id),document.body):null}export{k as default};
