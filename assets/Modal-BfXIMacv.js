import{r as c,p as d,b as p,j as i}from"./index-CUNW1xAd.js";import{p as f}from"./utils-Bsz_bQWJ.js";const k={backdrop:"var(--backdrop, #0000007F)"},u=f("Modal"),s=({onClickAway:o})=>{const t=c.useRef(null),r=c.useCallback(a=>{a.target===t.current&&o!==void 0&&o()},[o]);return{backdropRef:t,onClickAway:r}},e=d.div.attrs({className:u("Backdrop")})`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${({theme:o})=>o.backdrop};
  z-index: 1100;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`;e.defaultProps={theme:k};function m({open:o,onClickAway:t,children:r,theme:a}){const{backdropRef:n,onClickAway:l}=s({open:o,onClickAway:t});return o?p.createPortal(i.jsx(e,{ref:n,onClick:l,theme:a,children:r}),document.body):null}const M=Object.assign(m,{Backdrop:e,hook:s});export{M as default};
