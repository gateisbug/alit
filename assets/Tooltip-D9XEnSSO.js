import{p as a,c as d,j as t,r as u,b as R}from"./index-rZVYAdaY.js";import{p}from"./utils-Bsz_bQWJ.js";const x={primary:"var(--primary, #ffb74d)",onPrimary:"var(--on-primary, #1c2025)",primaryHover:"var(--primary-hover, #b28035)",disabled:{light:"var(--disabled, #0000001E)",dark:"var(--disabled, #FFFFFF1E)"},onDisabled:{light:"var(--on-disabled, #00000042)",dark:"var(--on-disabled, #FFFFFF4C)"}},H=p("button"),i={variant:"fill",fullWidth:!1,disabled:!1},b=a.button.attrs({className:H("root")})`
  display: inline-flex;
  flex-flow: row nowrap;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;

  user-select: none;
  cursor: pointer;
  transition:
    color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 150ms cubic-bezier(0.4, 0, 0.2, 1);

  border: 0.0625rem solid transparent; /* 1 */
  padding: 0.5rem 1rem; /* 8 16 */
  border-radius: 0.25rem; /* 4 */

  &:hover {
    border-color: transparent;
  }
  &:focus {
    outline: none;
  }

  width: ${({$fullWidth:o})=>o===!0?"100%":"auto"};

  ${({$variant:o})=>{switch(o){case"fill":return d`
          border-color: ${({theme:r})=>r.primary};
          background-color: ${({theme:r})=>r.primary};
          color: ${({theme:r})=>r.onPrimary};
          &:not(:disabled):hover,
          &:not(:disabled):focus {
            border-color: ${({theme:r})=>r.primaryHover};
            background-color: ${({theme:r})=>r.primaryHover};
          }
        `;case"line":return d`
          border-color: ${({theme:r})=>r.primary};
          background-color: transparent;
          color: ${({theme:r})=>r.primary};
          &:not(:disabled):hover,
          &:not(:disabled):focus {
            border-color: ${({theme:r})=>r.primaryHover};
            color: ${({theme:r})=>r.primaryHover};
          }
        `;case"text":default:return d`
          border-color: transparent;
          color: ${({theme:r})=>r.primary};
          background-color: transparent;
          &:not(:disabled):hover,
          &:not(:disabled):focus {
            border-color: transparent;
            color: ${({theme:r})=>r.primary};
            background-color: transparent;
          }
        `}}}

  &:disabled {
    cursor: default;

    @media (prefers-color-scheme: light) {
      ${({$variant:o,theme:r})=>o!=="text"&&d`
          border-color: transparent;
          background-color: ${r.disabled.light};
        `}
      color: ${({theme:o})=>o.onDisabled.light};
    }

    @media (prefers-color-scheme: dark) {
      ${({$variant:o,theme:r})=>o!=="text"&&d`
          border-color: transparent;
          background-color: ${r.disabled.dark};
        `}
      color: ${({theme:o})=>o.onDisabled.dark};
    }
  }
`;b.defaultProps={$variant:i.variant,$fullWidth:i.fullWidth,disabled:i.disabled,theme:x};function z({children:o,disabled:r=i.disabled,fullWidth:e=i.fullWidth,variant:s=i.variant,theme:l=x,onClick:n}){return t.jsx(b,{$variant:s,$fullWidth:e,disabled:r,theme:l,onClick:n,children:o})}const O=Object.assign(z,{Root:b}),y={primary:"var(--primary, #ffb74d)"},m=p("progress"),v=a.div.attrs({className:m("box")})`
  display: flex;
`,f=a.div.attrs({className:m("block")})`
  display: inline-block;
  color: ${({theme:o})=>o.primary};
  transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1);
  animation: 1.4s linear 0s infinite normal none running rotate;

  ${({$width:o,$height:r})=>{const e=typeof o=="number"?`${o}px`:o,s=typeof r=="number"?`${r}px`:r;return`
      width: ${e};
      height: ${s};
    `}};

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;f.defaultProps={$width:40,$height:40,theme:y};const $=a.svg.attrs({className:m("root")})`
  display: block;
`,k=a.circle.attrs({className:m("spinner")})`
  stroke: currentColor;
  stroke-dasharray: 5rem, 12.5rem; /* 80, 200; */
  stroke-dashoffset: 0;
  animation: 1.4s ease-in-out 0s infinite normal none running spinning;

  @keyframes spinning {
    0% {
      stroke-dasharray: 0.0625rem, 12.5rem; /* 1, 200 */
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 6.25rem, 12.5rem; /* 100, 200 */
      stroke-dashoffset: -0.9375rem; /* -15 */
    }
    100% {
      stroke-dasharray: 6.25rem, 12.5rem; /* 100, 200 */
      stroke-dashoffset: -7.8125rem; /* -125 */
    }
  }
`;function N({width:o=40,height:r=40,theme:e=y}){return t.jsx(v,{children:t.jsx(f,{$width:o,$height:r,theme:e,children:t.jsx($,{viewBox:"22 22 44 44",children:t.jsx(k,{cx:"44",cy:"44",r:"20.2",fill:"none",strokeWidth:"3.6"})})})})}const S=Object.assign(N,{Box:v,Block:f,Root:$,Circle:k}),w={surface:"var(--tooltip-surface, #616161EA)"},h=p("tooltip"),C=()=>{const o=u.useRef(null),r=u.useRef(null),[e,s]=u.useState(!1);return u.useLayoutEffect(()=>{if(!e||!(o!=null&&o.current)||!(r!=null&&r.current))return;const{top:l,left:n,height:c,width:P}=o.current.getBoundingClientRect(),{width:B}=r.current.getBoundingClientRect(),F=n-B/2+P/2,T=l+c+window.scrollY;r.current.setAttribute("style",`transform: translate(${F}px, ${T}px)`)},[e]),{containerRef:o,boxRef:r,show:e,setShow:s}},j=a.span.attrs({className:h("container")})`
  position: relative;
  display: inline-block;
`,E=a.div.attrs({className:h("box")})`
  z-index: 1500;
  pointer-events: auto;

  position: absolute;
  inset: 0 auto auto 0;
  margin: 0;
`,g=a.div.attrs({className:h("text")})`
  position: relative;

  background-color: ${({theme:o})=>o.surface};
  border-radius: 0.25rem; /* 4 */
  color: #fff;
  font-size: 0.875rem; /* 14 */
  max-width: 18.75rem; /* 300 */
  margin: 0.125rem; /* 2 */
  overflow-wrap: break-word;

  &[data-placement='bottom'] {
    margin-top: 0.75rem; /* 12 */
    transform-origin: center top;
  }

  &::before {
    content: '■';
    color: ${({theme:o})=>o.surface};
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    rotate: 45deg;
    width: fit-content;
    height: fit-content;
    font-size: 0.875rem; /* 14 */
    border-radius: 0.125rem; /* 2 */
    translate: -50% -50%;
    overflow: hidden;
  }
`;g.defaultProps={theme:w};function W({children:o,title:r,theme:e=w}){const{boxRef:s,containerRef:l,show:n,setShow:c}=C();return t.jsxs(j,{ref:l,onMouseOver:()=>{c(!0)},onMouseLeave:()=>{c(!1)},onClick:()=>{c(!n)},children:[o,n?R.createPortal(t.jsx(E,{ref:s,children:t.jsx(g,{"data-placement":"bottom",theme:e,children:r})}),document.body):null]})}const A=Object.assign(W,{Container:j,Box:E,Text:g,Hooks:C});export{O as B,S as C,A as T};
