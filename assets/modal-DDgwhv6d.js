import{p as c,j as e,r as f,I as g}from"./index-ey0nagZQ.js";import{d as u,c as j,t as b,I as w,M as y,O as v,b as N,n as k,S as z,e as S}from"./const-C4evr9t1.js";import{T as $}from"./Tooltip-Bx8JbFgm.js";import C from"./Modal-BdKzuw0Y.js";import I from"./ScrollView-C2fUc6IP.js";import{P as B}from"./portrait-BcqMt6FX.js";import"./utils-Bsz_bQWJ.js";const M=c.span`
  text-decoration: underline;
`,d=c.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;
  padding: 0.5rem;
  background-color: rgba(97, 97, 97, 0.92);
  border-radius: 0.25rem;
  z-index: 1;
`;function _({value:r}){const[s,n,t]=r.split("\\t"),[i,o]=s.split("*"),a=t?e.jsxs(d,{children:[e.jsxs("div",{children:["대미지: ",n]}),e.jsxs("div",{children:["관통: ",t.replace(/\//g," / ")]})]}):e.jsxs(d,{children:["대미지: ",n]});return e.jsxs(e.Fragment,{children:[e.jsx($,{title:a,children:e.jsx(M,{children:i})}),e.jsxs(e.Fragment,{children:[" × ",o]})]})}const T=c.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0.75rem;
`;function A({item:r}){const s=(()=>{const n=u(r==null?void 0:r.domain),t=j(r),i=b(r),o=[];return n.length>0&&o.push(n),t.length>0&&o.push(t),i.length>0&&o.push(i),o})();return e.jsx(T,{children:s.map((n,t,i)=>e.jsxs(f.Fragment,{children:[e.jsx("span",{children:n}),i.length-1!==t&&e.jsx(g,{src:"assets/arrow.svg",alt:"seperator",width:14,height:14})]},n))})}const h=c.div.attrs({className:"imgcard-textbox"})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  opacity: 0;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);

  background-color: rgba(255, 255, 255, 0.8);
  color: #1c2025;

  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  cursor: default;
`,E=c.div.attrs({className:"imgcard-container"})`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  //min-width: 15rem; /* 240 */
  //min-height: 8.75rem; /* 140 */

  border-radius: 0.25rem;
  overflow: hidden;
  box-sizing: border-box;

  &:hover ${h} {
    opacity: 1;
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`;function p(r){const{src:s,children:n,alt:t,style:i}=r;return e.jsxs(E,{style:i,children:[e.jsx("img",{src:s,alt:t}),e.jsx(h,{children:n})]})}const F=c.div.attrs({className:"keyvalue-container"})`
  display: flex;
  flex-flow: row nowrap;
  gap: 1rem;
`,H=c.div.attrs({className:"keyvalue-box"})`
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border: 0.0625rem solid var(--border);
  border-radius: 0.25rem;
`,x=c.div.attrs({className:"keyvalue-span"})`
  &[data-type='key'] {
    color: var(--font-weak);
    font-size: 1rem;
  }
  &[data-type='value'] {
    color: var(--font-strong);
    font-size: 1.125rem;
    text-align: center;
    display: inline-flex;
    align-items: center;
    height: 100%;
  }
`;function O({label:r,value:s,className:n}){return e.jsx(F,{className:n,children:e.jsxs(H,{children:[e.jsx(x,{"data-type":"key",children:r}),e.jsx(x,{"data-type":"value",children:s})]})})}const D=r=>{switch(r[0]){case"스탯":case"스킬":return r[1].replace(/,/g,", ");case"대미지":case"발사패턴":return r[1].replace(/\*/g," × ");case"기총":case"폭장":case"어뢰":case"로켓":return e.jsx(_,{value:r[1]});case"사속":case"발사간격":return r[1].replace(/초/g," 초");case"대갑비례":return r[1].replace(/\//g," / ");default:return r[1]}};function G(r){var t,i,o;const{item:s,clickAway:n}=r;return e.jsx(C,{open:s!==void 0,onClickAway:n,children:e.jsx(w,{children:e.jsx(I,{children:e.jsxs("div",{className:"modal-container",children:[e.jsxs(y,{children:[e.jsx(B,{item:s,size:72,style:{width:"6rem",height:"6rem"}}),e.jsxs("div",{className:"section",children:[e.jsx("h2",{className:"fcs fzl",children:s==null?void 0:s.name}),e.jsx("p",{className:"fcw fzp",children:s==null?void 0:s.nickname}),e.jsx(A,{item:s})]})]}),e.jsxs(v,{children:[e.jsx("div",{className:"obtain",children:N(s).map(a=>e.jsxs(p,{src:a.img,alt:a.img,style:{minWidth:"15rem",minHeight:"8.75rem"},children:[e.jsx("div",{className:"fzs fwb",children:a.obtain}),e.jsx("div",{className:"fzs fws",children:a.label})]},`${s==null?void 0:s.index}_${a.obtain}_${a.label}`))}),e.jsx("div",{className:"nation",children:e.jsx(p,{src:`images/nation/${(t=s==null?void 0:s.nation)==null?void 0:t.toLowerCase()}.webp`,alt:(s==null?void 0:s.nation)??"unknown nation",style:{minWidth:"10rem",minHeight:"10rem"},children:e.jsx("span",{className:"nation-value fzs fwb",children:k(s==null?void 0:s.nation,"nation")})})})]}),e.jsx(z,{children:(i=s==null?void 0:s.status)==null?void 0:i.map(a=>{const l=a.split(":"),m=D(l);return e.jsx(O,{label:l[0],value:m},`stat_${s==null?void 0:s.index}_${l[0]}_${l[1]}`)})}),e.jsx(S,{children:(o=s==null?void 0:s.explain)==null?void 0:o.map(a=>e.jsx("p",{children:a},a))})]})})})})}export{G as default};
