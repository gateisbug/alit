import{r,h as C,i as _,d as w,j as s,k as y,f as b,l as $}from"./index-BG_pJyP2.js";import{P as D}from"./portrait-wNO2b9n2.js";import{s as N}from"./itemStore-Cb1Wj6Xl.js";const m=["gun","torpedo","antiair","aircraft","accessory","special"];function J(x){const{value:i,onClickClose:p}=x,[o,j]=r.useState([]),[u,a]=r.useState([]),S=r.useDeferredValue(u),g=C(N);r.useEffect(()=>{_().then(e=>{const c=[];for(let l=0;l<m.length;l+=1)c.push(...e[m[l]]);j(c)}).catch(e=>{throw new Error(e)})},[]);const d=r.useMemo(()=>w((e,c)=>{const l=e.filter(t=>{var n;return(n=t.name)==null?void 0:n.includes(c)}),k=e.filter(t=>{var n;return(n=t.nickname)==null?void 0:n.includes(c)}),E=e.filter(t=>{var n,h;return(h=(n=t.explain)==null?void 0:n.join(". "))==null?void 0:h.includes(c)}),f=new Set,I=l.concat(k,E).filter(t=>f.has(t.index)?!1:(f.add(t.index),!0));a(I)},300),[]);r.useEffect(()=>{o.length===0||i.length===0||d(o,i)},[o,d,i]),r.useEffect(()=>{i.length===0&&a([])},[i]),r.useEffect(()=>()=>{a([])},[]);const R=e=>{g(e),p()};return s.jsxs(y,{children:[s.jsx(b,{children:"Result"}),s.jsxs("div",{children:[S.map(e=>s.jsxs($,{onClick:()=>{R(e)},children:[s.jsx(D,{item:e,size:36,style:{width:"3rem",height:"3rem",borderWidth:"3px"}}),s.jsx("span",{children:e.name})]},`${e.index}_${e.name}_${e.tier}`)),u.length===0&&s.jsxs("div",{className:"nodata",children:[s.jsx("p",{children:"\\(o_o)/"}),s.jsx("p",{children:"No Search Data"})]})]})]})}export{J as default};
