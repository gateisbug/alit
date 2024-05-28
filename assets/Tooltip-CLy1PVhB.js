import{p as i,c as f,j as n,r as o,d as we,b as Ce}from"./index-BG_pJyP2.js";import{p as m}from"./utils-Bsz_bQWJ.js";const Z={primary:"var(--primary, #ffb74d)",onPrimary:"var(--on-primary, #1c2025)"},G=m("badge"),p={show:!0,variant:"standard",vertical:"top",horizontal:"right",max:99},J=e=>({contents:e.variant!=="standard"?null:typeof e.content=="number"&&e.content>e.max?`${e.max}+`:e.content??""}),K=i.span.attrs({className:G("box")})`
  position: relative;
  display: inline-block;
  width: fit-content;
  height: fit-content;
`,j=i.span.attrs({className:G("root")})`
  position: absolute;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  width: fit-content;
  height: fit-content;
  font-weight: 500;

  transition:
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 150ms cubic-bezier(0.4, 0, 0.2, 1);

  background-color: ${({theme:e})=>e.primary};
  color: ${({theme:e})=>e.onPrimary};

  // show
  display: ${({$show:e})=>e?"flex":"none"};

  // variant
  ${e=>e.$variant==="standard"?f`
        font-size: 0.75rem; // 12px
        padding: 0.25rem 0.5rem; // 4px 8px
        border-radius: 0.75rem; // 12px
      `:f`
      width: 0.5rem; // 8px
      height: 0.5rem; // 8px
      border-radius: 0.25rem; // 4px
    `}

  // vertical | horizontal
  transform: ${({$vertical:e,$horizontal:r})=>e==="top"?r==="right"?"translate(50%, -50%)":"translate(-50%, -50%)":r==="right"?"translate(50%, 50%)":"translate(-50%, 50%)"};
  top: ${({$vertical:e})=>e==="top"?"0":"auto"};
  bottom: ${({$vertical:e})=>e==="bottom"?"0":"auto"};
  right: ${({$horizontal:e})=>e==="right"?"0":"auto"};
  left: ${({$horizontal:e})=>e==="left"?"0":"auto"};
`;j.defaultProps={$show:p.show,$variant:p.variant,$vertical:p.vertical,$horizontal:p.horizontal,theme:Z};function Fe({show:e=p.show,variant:r=p.variant,vertical:a=p.vertical,horizontal:l=p.horizontal,max:s=p.max,theme:t=Z,children:c,content:u}){const{contents:d}=J({variant:r,content:u,max:s});return n.jsxs(K,{children:[c,n.jsx(j,{$variant:r,$show:e,$vertical:a,$horizontal:l,theme:t,children:d})]})}Object.assign(Fe,{Box:K,Root:j,hook:J});const Q={primary:"var(--primary, #ffb74d)",onPrimary:"var(--on-primary, #1c2025)",primaryHover:"var(--primary-hover, #b28035)",disabled:{light:"var(--disabled, #0000001E)",dark:"var(--disabled, #FFFFFF1E)"},onDisabled:{light:"var(--on-disabled, #00000042)",dark:"var(--on-disabled, #FFFFFF4C)"}},je=m("button"),k={variant:"fill",fullWidth:!1,disabled:!1},z=i.button.attrs({className:je("root")})`
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

  border: 0.0625rem solid transparent; // 1px
  padding: 0.5rem 1rem; // 8px 16px
  border-radius: 0.25rem; // 4px

  &:hover {
    border-color: transparent;
  }
  &:focus {
    outline: none;
  }

  // fullWidth
  width: ${({$fullWidth:e})=>e===!0?"100%":"auto"};

  // variant
  ${({$variant:e})=>{switch(e){case"fill":return f`
          border-color: ${({theme:r})=>r.primary};
          background-color: ${({theme:r})=>r.primary};
          color: ${({theme:r})=>r.onPrimary};
          &:not(:disabled):hover,
          &:not(:disabled):focus {
            border-color: ${({theme:r})=>r.primaryHover};
            background-color: ${({theme:r})=>r.primaryHover};
          }
        `;case"line":return f`
          border-color: ${({theme:r})=>r.primary};
          background-color: transparent;
          color: ${({theme:r})=>r.primary};
          &:not(:disabled):hover,
          &:not(:disabled):focus {
            border-color: ${({theme:r})=>r.primaryHover};
            color: ${({theme:r})=>r.primaryHover};
          }
        `;case"text":default:return f`
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

  // disabled
  &:disabled {
    cursor: default;

    @media (prefers-color-scheme: light) {
      ${({$variant:e,theme:r})=>e!=="text"&&f`
          border-color: transparent;
          background-color: ${r.disabled.light};
        `}
      color: ${({theme:e})=>e.onDisabled.light};
    }

    @media (prefers-color-scheme: dark) {
      ${({$variant:e,theme:r})=>e!=="text"&&f`
          border-color: transparent;
          background-color: ${r.disabled.dark};
        `}
      color: ${({theme:e})=>e.onDisabled.dark};
    }
  }
`;z.defaultProps={$variant:k.variant,$fullWidth:k.fullWidth,disabled:k.disabled,theme:Q};function ze({children:e,disabled:r=k.disabled,fullWidth:a=k.fullWidth,variant:l=k.variant,theme:s=Q,onClick:t}){return n.jsx(z,{$variant:l,$fullWidth:a,disabled:r,theme:s,onClick:t,children:e})}const Je=Object.assign(ze,{Root:z}),Ee={primary:"var(--primary, #ffb74d)",default:{light:"var(--default, #00000099)",dark:"var(--default, #FFFFFFB2)"},disabled:{light:"var(--disabled, #00000042)",dark:"var(--disabled, #FFFFFF4C)"}},E=m("check"),Re={type:"checkbox",variant:"standard",vertical:"top",horizontal:"right",max:99},P=i.label.attrs({className:E("box")})`
  display: inline-flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0.25rem; // 4px
  cursor: pointer;

  &:has(input:disabled) {
    cursor: default;
  }
`,R=i.input.attrs({className:E("root")})`
  display: none;
`;R.defaultProps={type:Re.type};const B=i.div.attrs({className:E("mark")})`
  display: inline-block;
  width: 1.5rem; // 24px
  height: 1.5rem; // 24px
  user-select: none;
  transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1);

  input:not(:disabled):checked + & {
    color: ${({theme:e})=>e.primary};
  }

  & {
    @media (prefers-color-scheme: light) {
      color: ${({theme:e})=>e.default.light};
    }
    @media (prefers-color-scheme: dark) {
      color: ${({theme:e})=>e.default.dark};
    }
  }
  input:disabled + & {
    @media (prefers-color-scheme: light) {
      color: ${({theme:e})=>e.disabled.light};
    }
    @media (prefers-color-scheme: dark) {
      color: ${({theme:e})=>e.disabled.dark};
    }
  }

  input:not(:checked) + & path {
    d: path(
      'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'
    );
  }
  input:checked + & path {
    d: path(
      'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
    );
  }
  input[multiple]:checked + & path {
    d: path(
      'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z'
    );
  }
`;B.defaultProps={theme:Ee};function Be({children:e,theme:r,...a}){return n.jsxs(P,{children:[n.jsx(R,{type:"checkbox",checked:a==null?void 0:a.checked,disabled:a==null?void 0:a.disabled,defaultChecked:a==null?void 0:a.defaultChecked,multiple:a==null?void 0:a.multiple,name:a==null?void 0:a.name,value:a==null?void 0:a.value,onChange:a==null?void 0:a.onChange,required:a==null?void 0:a.required,readOnly:a==null?void 0:a.readOnly}),n.jsx(B,{theme:r,children:n.jsx("svg",{focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24",children:n.jsx("path",{fill:"currentColor"})})}),e]})}Object.assign(Be,{Box:P,Root:R,Mark:B});const Te={primary:"var(--primary, #ffb74d)",onPrimary:"var(--on-primary, #1c2025)"},Ne=m("chip"),ee={variant:"fill"},T=i.span.attrs({className:Ne("root")})`
  display: inline-flex;
  flex-flow: row nowrap;
  box-sizing: border-box;
  justify-content: center;
  align-content: center;
  width: fit-content;
  border: 0.0625rem solid transparent; // 1px
  transition:
    color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 150ms cubic-bezier(0.4, 0, 0.2, 1);

  padding: 0.5rem 1rem; // 8px 16px
  border-radius: 3rem; // 48px

  ${({$variant:e})=>{switch(e){case"fill":return f`
          border-color: ${({theme:r})=>r.primary};
          background-color: ${({theme:r})=>r.primary};
          color: ${({theme:r})=>r.onPrimary};
        `;case"line":return f`
          border-color: ${({theme:r})=>r.primary};
          background-color: transparent;
          color: ${({theme:r})=>r.primary};
        `;case"text":default:return f`
          color: ${({theme:r})=>r.primary};
          border-color: transparent;
          background-color: transparent;
        `}}}
`;T.defaultProps={$variant:ee.variant,theme:Te};function Oe({variant:e=ee.variant,children:r,theme:a}){return n.jsx(T,{$variant:e,theme:a,children:r})}Object.assign(Oe,{Root:T});const ae={primary:"var(--primary, #ffb74d)",border:{light:"var(--border, #0000003A)",dark:"var(--border, #ffffff3a)"},invalid:{light:"var(--invalid, #d32f2f)",dark:"var(--invalid, #f44336)"},placeholder:"var(--placeholder, #6B7A90)",disabled:{light:"var(--disabled, #00000042)",dark:"var(--disabled, #FFFFFF4C)"}},re=m("input"),Se={type:"text"},N=i.label.attrs({className:re("box")})`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0.5rem; // 8px
  background-color: transparent;
  box-sizing: border-box;
  transition: border-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: text;

  border: 0.0625rem solid transparent; // 1px
  border-radius: 0.25rem; // 4px
  padding: 0.75rem 1rem; // 12px 16px

  &:has(:focus) {
    border-color: ${({theme:e})=>e.primary};
  }
  &:has(:disabled) {
    cursor: default;
  }

  & {
    @media (prefers-color-scheme: light) {
      border-color: ${({theme:e})=>e.border.light};
      &:has(:invalid) {
        border-color: ${({theme:e})=>e.invalid.light};
      }
    }
    @media (prefers-color-scheme: dark) {
      border-color: ${({theme:e})=>e.border.dark};
      &:has(:invalid) {
        border-color: ${({theme:e})=>e.invalid.dark};
      }
    }
  }
`;N.defaultProps={theme:ae};const O=i.input.attrs({className:re("root")})`
  display: inline-block;
  box-sizing: border-box;
  background-color: transparent;
  color: inherit;
  font-family: inherit;
  font-size: 1rem; // 16px
  width: 100%;
  border: none;
  padding: 0;

  &:disabled {
    cursor: default;

    @media (prefers-color-scheme: light) {
      color: ${({theme:e})=>e.disabled.light};
    }
    @media (prefers-color-scheme: dark) {
      color: ${({theme:e})=>e.disabled.dark};
    }
  }
  &::placeholder {
    color: ${({theme:e})=>e.placeholder};
  }

  &:focus {
    border: none;
    outline: none;
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button,
  &::-webkit-clear-button,
  &::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;O.defaultProps={type:Se.type,theme:ae};function He({type:e="text",theme:r,...a}){return n.jsx(N,{theme:r,children:n.jsx(O,{type:e,theme:r,autoFocus:a==null?void 0:a.autoFocus,defaultValue:a==null?void 0:a.defaultValue,disabled:a==null?void 0:a.disabled,onChange:a==null?void 0:a.onChange,pattern:a==null?void 0:a.pattern,placeholder:a==null?void 0:a.placeholder,readOnly:a==null?void 0:a.readOnly,required:a==null?void 0:a.required,value:a==null?void 0:a.value})})}Object.assign(He,{Box:N,Root:O});const te={primary:"var(--primary, #ffb74d)"},$=m("progress"),ne=i.div.attrs({className:$("box")})`
  display: flex;
`,S=i.div.attrs({className:$("block")})`
  display: inline-block;
  color: ${({theme:e})=>e.primary};
  transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1);
  animation: 1.4s linear 0s infinite normal none running rotate;

  ${({$width:e,$height:r})=>{const a=typeof e=="number"?`${e}px`:e,l=typeof r=="number"?`${r}px`:r;return`
      width: ${a};
      height: ${l};
    `}};

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;S.defaultProps={$width:40,$height:40,theme:te};const ie=i.svg.attrs({className:$("root")})`
  display: block;
`,le=i.circle.attrs({className:$("spinner")})`
  stroke: currentColor;
  stroke-dasharray: 5rem, 12.5rem; /* 80px, 200px; */
  stroke-dashoffset: 0;
  animation: 1.4s ease-in-out 0s infinite normal none running spinning;

  @keyframes spinning {
    0% {
      stroke-dasharray: 0.0625rem, 12.5rem; /* 1px, 200px */
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 6.25rem, 12.5rem; /* 100px, 200px */
      stroke-dashoffset: -0.9375rem; /* -15px */
    }
    100% {
      stroke-dasharray: 6.25rem, 12.5rem; /* 100px, 200px */
      stroke-dashoffset: -7.8125rem; /* -125px */
    }
  }
`;function Me({width:e=40,height:r=40,theme:a=te}){return n.jsx(ne,{children:n.jsx(S,{$width:e,$height:r,theme:a,children:n.jsx(ie,{viewBox:"22 22 44 44",children:n.jsx(le,{cx:"44",cy:"44",r:"20.2",fill:"none",strokeWidth:"3.6"})})})})}const Ke=Object.assign(Me,{Box:ne,Block:S,Root:ie,Circle:le}),Ae={primary:"var(--primary, #ffb74d)",default:{light:"var(--default, #00000099)",dark:"var(--default, #ffffffb2)"},disabled:{light:"var(--disabled, #00000042)",dark:"var(--disabled, #ffffff4c)"}},H=m("radio"),ce=i.label.attrs({className:H("box")})`
  display: inline-flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0.25rem; // 4px
  cursor: pointer;

  &:has(input:disabled) {
    cursor: default;
  }
`,M=i.input.attrs({className:H("root")})`
  display: none;
`;M.defaultProps={type:"radio"};const A=i.div.attrs({className:H("mark")})`
  position: relative;
  display: inline-flex;
  user-select: none;
  width: 1.5rem;
  height: 1.5rem;
  transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1);

  input:not(:disabled):checked + & {
    color: ${({theme:e})=>e.primary};
  }

  & {
    @media (prefers-color-scheme: light) {
      color: ${({theme:e})=>e.default};
      input:disabled + & {
        color: ${({theme:e})=>e.disabled};
      }
    }
    /*noinspection CssUnresolvedCustomProperty*/
    @media (prefers-color-scheme: dark) {
      color: ${({theme:e})=>e.default};
      input:disabled + & {
        color: ${({theme:e})=>e.disabled};
      }
    }
  }

  & > svg {
    width: 1em;
    height: 1em;
    display: inline-block;
    flex-shrink: 0;
    font-size: 1.5rem;
  }
  & > svg:first-of-type {
    transform: scale(1);
  }
  & > svg:last-of-type {
    transform: scale(0);
    position: absolute;
    left: 0;
    transition: transform 150ms cubic-bezier(0.4, 0, 1, 1) 0ms;
  }
  input:not(:disabled):checked + & > svg:last-of-type {
    transform: scale(1);
  }
`;A.defaultProps={theme:Ae};function Le({children:e,theme:r,...a}){return n.jsxs(ce,{children:[n.jsx(M,{type:"radio",checked:a==null?void 0:a.checked,disabled:a==null?void 0:a.disabled,defaultChecked:a==null?void 0:a.defaultChecked,name:a==null?void 0:a.name,onChange:a==null?void 0:a.onChange,required:a==null?void 0:a.require,readOnly:a==null?void 0:a.readOnly,value:a==null?void 0:a.value}),n.jsxs(A,{theme:r,children:[n.jsx("svg",{focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24",children:n.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",fill:"currentColor"})}),n.jsx("svg",{focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24",children:n.jsx("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z",fill:"currentColor"})})]}),e]})}Object.assign(Le,{Box:ce,Root:M,Mark:A});const L={placeholder:"var(--placeholder, #6B7A90)",surface:{light:"var(--surface, #f1f1f2)",dark:"var(--surface, #242424)"},border:{light:"var(--border, #0000003A)",dark:"var(--border, #FFFFFF3A)"}},y=m("select"),se=(e,r)=>{const a=o.useRef(null);return o.useImperativeHandle(r,()=>a.current),o.useEffect(()=>{const l=s=>{var t;(t=a==null?void 0:a.current)!=null&&t.contains(s.target)||e(!1)};return document.addEventListener("click",l),()=>{document.removeEventListener("click",l)}},[e]),a},de=({defaultValue:e,multiple:r,onChange:a})=>{const[l,s]=o.useState(!1),t=o.useCallback(()=>{s(!l)},[l]),c=se(s),[u,d]=o.useState(e??""),x=o.useCallback(b=>{r?d(h=>{const v=h.length>0?h.split(",,"):[],C=(b.value??"").toString(),g=v.findIndex($e=>$e===C);return g>-1?v.splice(g,1):v.push((b.value??"").toString()),v.join(",,")}):(d((b.value??"").toString()),s(!1))},[r]);return o.useEffect(()=>{a&&a(u)},[u,a]),{formRef:c,open:l,inputValue:u,onClickItem:x,onFieldClick:t}},oe=i.div.attrs({className:y("form")})`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
`,I=i.div.attrs({className:y("field")})`
  padding: 0.75rem 1rem; // 12px 16px
  border-radius: 0.25rem; // 4px
  border: 0.0625rem solid transparent; // 1px

  ${({$minWidth:e})=>{if(typeof e=="number")return f`
        min-width: ${e}px;
      `;if(typeof e=="string"&&e.length>0)return f`
        min-width: ${e};
      `}}

  & {
    @media (prefers-color-scheme: light) {
      background-color: ${({theme:e})=>e.surface.light};
      border-color: ${({theme:e})=>e.border.light};
    }
    @media (prefers-color-scheme: dark) {
      background-color: ${({theme:e})=>e.surface.dark};
      border-color: ${({theme:e})=>e.border.dark};
    }
  }
`;I.defaultProps={theme:L};const V=i.span.attrs({className:y("placeholder")})`
  color: ${({theme:e})=>e.placeholder};
`;V.defaultProps={theme:L};const Ie=i.input`
  display: none;
`,D=i.ul.attrs({className:y("Box")})`
  position: absolute;
  top: ${({$top:e})=>e??"calc(100% + 0.5rem)"}; // 8px
  left: 0;
  right: 0;
  z-index: 1;
  display: ${({$open:e})=>e?"flex":"none"};
  flex-flow: column nowrap;
  border-radius: 0.25rem; // 4px
  border: 0.0625rem solid transparent; // 1px
  padding: 0;
  margin: 0;

  & {
    @media (prefers-color-scheme: light) {
      background-color: ${({theme:e})=>e.surface.light};
      border-color: ${({theme:e})=>e.border.light};
    }
    @media (prefers-color-scheme: dark) {
      background-color: ${({theme:e})=>e.surface.dark};
      border-color: ${({theme:e})=>e.border.dark};
    }
  }
`;D.defaultProps={theme:L};const ue=i.li.attrs({className:y("Item")})`
  list-style: none;
`;function Ve({items:e,multiple:r,placeholder:a,theme:l,top:s,children:t,onChange:c,defaultValue:u,minWidth:d}){const{formRef:x,open:b,inputValue:h,onClickItem:v,onFieldClick:C}=de({items:e,multiple:r,placeholder:a,theme:l,top:s,children:t,onChange:c,defaultValue:u});return n.jsxs(oe,{ref:x,children:[n.jsxs(I,{theme:l,onClick:C,$minWidth:d,children:[h.length>0?t??h.split(",,").join(", "):n.jsx(V,{theme:l,children:a??"Please select value."}),n.jsx(Ie,{readOnly:!0,value:h})]}),n.jsx(D,{theme:l,$top:s,$open:b,children:e==null?void 0:e.map(g=>n.jsx(ue,{onClick:()=>{v(g)},children:g.label??g.value},`select-item-${g.value}`))})]})}Object.assign(Ve,{Form:oe,Field:I,Placeholder:V,Box:D,Item:ue,clickAway:se,hook:de});const De={surface:{light:"var(--surface, rgba(0, 0, 0, 0.11))",dark:"var(--surface, rgba(255, 255, 255, 0.13))"}},qe=m("skeleton"),q=i.span.attrs({className:qe("root")})`
  display: block;
  min-width: 1rem; // 16px
  min-height: 1rem; // 16px
  animation: animation-skeleton 2s ease-in-out 0.5s infinite;

  ${({$varient:e})=>{switch(e){case"text":return f`
          border-radius: 0.25rem; // 4px
          transform-origin: 0 55%;
          transform: scale(1, 0.6);
        `;case"circle":return f`
          border-radius: 50%;
        `;case"paragraph":default:return f`
          border-radius: 0.25rem; // 4px
        `}}}

  & {
    @media (prefers-color-scheme: light) {
      background-color: ${({theme:e})=>{var r;return(r=e.surface)==null?void 0:r.light}};
    }

    /*noinspection CssUnresolvedCustomProperty*/
    @media (prefers-color-scheme: dark) {
      background-color: ${({theme:e})=>{var r;return(r=e.surface)==null?void 0:r.dark}};
    }
  }

  &:empty::before {
    display: inline-block;
    content: ' ';
    min-height: 1rem; // 16px
  }

  @keyframes animation-skeleton {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;q.defaultProps={theme:De};function Ue({varient:e,theme:r}){return n.jsx(q,{$varient:e,theme:r})}Object.assign(Ue,{Root:q});const _e={primary:"var(--primary, #ffb74d)"},w=m("tabs"),fe=i.div.attrs({className:w("container")})`
  display: block;
  position: relative;
`,U=i.div.attrs({className:w("bar")})`
  position: absolute;
  width: 0;
  height: 0.125rem;
  bottom: 0;
  left: 0;
  background-color: ${({theme:e})=>e.primary};
  transition:
    left 250ms ease-in-out,
    width 250ms ease-in-out;
`;U.defaultProps={theme:_e};const me=i.div.attrs({className:w("box")})`
  display: flex;
  flex-flow: row nowrap;
  overflow-x: auto;
  gap: 0.75rem;
  padding: 0.125rem;
`,be=i.div.attrs({className:w("tab")})`
  display: inline-block;
  //padding: 0.5rem 0.75rem;
  cursor: pointer;
  border-radius: 1rem;
  transition:
    color 150ms ease-in-out,
    outline-color 150ms ease-in-out;

  &[data-active='true'] {
    color: var(--primary);
    font-weight: 500;
  }
  &[data-active='false']:hover {
    color: var(--primary);
  }
`;function We({item:e,defaultValue:r}){const a=o.useRef(null),l=o.useRef(null),[s,t]=o.useState(r??e[0].label),c=o.useCallback(d=>{t(d)},[]),u=o.useCallback(()=>{var h;const d=(h=a==null?void 0:a.current)==null?void 0:h.querySelector('div[data-active="true"]');if(!a.current||!d||!l.current)return;const x=a.current.getBoundingClientRect(),b=d.getBoundingClientRect();l.current.style.left=`${b.left-x.left}px`,l.current.style.width=`${b.width}px`},[]);return o.useLayoutEffect(()=>{u()},[u]),o.useLayoutEffect(()=>{const d=we(u,200);return window.addEventListener("resize",d),()=>{window.removeEventListener("resize",d)}},[u]),n.jsxs(fe,{ref:a,children:[n.jsx(me,{children:e.map(d=>n.jsx(be,{"data-active":s===d.label,onClick:()=>{c(d.label)},className:"fwr fzp",children:d.render??d.label},`tab-root-${d.label}`))}),n.jsx(U,{ref:l})]})}Object.assign(We,{Container:fe,Bar:U,Box:me,Root:be});const he={primary:"var(--primary, #ffb74d)",placeholder:"var(--placeholder, #6B7A90)",border:{light:"var(--border, #0000003A)",dark:"var(--border, #ffffff3a)"},invalid:{light:"var(--invalid, #d32f2f)",dark:"var(--invalid, #f44336)"},disabled:{light:"var(--disabled, #00000042)",dark:"var(--disabled, #FFFFFF4C)"}},pe=m("textarea"),F={rows:1,autoResize:!0},xe=({autoResize:e,maxHeight:r,onChange:a})=>{const l=o.useRef(null),s=o.useCallback(t=>{const c=l.current;if(e&&c){c.style.height="auto";const u=r?Math.min(c.scrollHeight,r):c.scrollHeight;c.style.height=`${u}px`,r===void 0?c.style.overflowY="hidden":c.style.overflowY=t.target.value.length>0&&c.scrollHeight>r?"auto":"hidden"}a&&a(t)},[e,r,a]);return{internalRef:l,resizeInChange:s}},_=i.label.attrs({className:pe("box")})`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0.5rem; // 8px
  background-color: transparent;
  box-sizing: border-box;
  transition: border-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: text;

  border: 0.0625rem solid transparent; // 1px
  border-radius: 0.25rem; // 4px
  padding: 0.75rem 1rem; // 12px 16px

  &:has(:focus) {
    border-color: ${({theme:e})=>e.primary};
  }
  &:has(:disabled) {
    cursor: default;
  }

  & {
    @media (prefers-color-scheme: light) {
      border-color: ${({theme:e})=>e.border.light};
      &:has(:invalid) {
        border-color: ${({theme:e})=>e.invalid.light};
      }
    }
    @media (prefers-color-scheme: dark) {
      border-color: ${({theme:e})=>e.border.dark};
      &:has(:invalid) {
        border-color: ${({theme:e})=>e.invalid.dark};
      }
    }
  }
`;_.defaultProps={theme:he};const W=i.textarea.attrs({className:pe("root")})`
  display: inline-block;
  box-sizing: border-box;
  background-color: transparent;
  color: inherit;
  font-family: inherit;
  font-size: 1rem; // 16px
  width: 100%;
  border: none;
  padding: 0;
  resize: none;
  overflow-y: hidden;

  &::placeholder {
    color: ${({theme:e})=>e.placeholder};
  }
  &:disabled {
    @media (prefers-color-scheme: light) {
      color: ${({theme:e})=>e.disabled.light};
    }
    @media (prefers-color-scheme: dark) {
      color: ${({theme:e})=>e.disabled.dark};
    }
  }

  &:focus {
    border: none;
    outline: none;
  }
`;W.defaultProps={rows:F.rows,theme:he};function Ye({rows:e=F.rows,onChange:r,theme:a,autoResize:l=F.autoResize,maxHeight:s,...t}){const{internalRef:c,resizeInChange:u}=xe({onChange:r,autoResize:l,maxHeight:s});return n.jsx(_,{theme:a,children:n.jsx(W,{rows:e,theme:a,ref:c,onChange:u,autoFocus:t==null?void 0:t.autoFocus,defaultValue:t==null?void 0:t.defaultValue,disabled:t==null?void 0:t.disabled,placeholder:t==null?void 0:t.placeholder,readOnly:t==null?void 0:t.readOnly,required:t==null?void 0:t.required,value:t==null?void 0:t.value})})}Object.assign(Ye,{Box:_,Root:W,hook:xe});const ge={surface:"var(--tooltip-surface, #616161EA)"},Y=m("tooltip"),ve=()=>{const e=o.useRef(null),r=o.useRef(null),[a,l]=o.useState(!1);return o.useLayoutEffect(()=>{if(!a||!(e!=null&&e.current)||!(r!=null&&r.current))return;const{top:s,left:t,height:c,width:u}=e.current.getBoundingClientRect(),{width:d}=r.current.getBoundingClientRect(),x=t-d/2+u/2,b=s+c+window.scrollY;r.current.setAttribute("style",`transform: translate(${x}px, ${b}px)`)},[a]),{containerRef:e,boxRef:r,show:a,setShow:l}},ke=i.span.attrs({className:Y("container")})`
  position: relative;
  display: inline-block;
`,ye=i.div.attrs({className:Y("box")})`
  z-index: 1500;
  pointer-events: auto;

  position: absolute;
  inset: 0 auto auto 0;
  margin: 0;
`,X=i.div.attrs({className:Y("text")})`
  position: relative;

  background-color: ${({theme:e})=>e.surface};
  border-radius: 0.25rem;
  color: #fff;
  font-size: 0.875rem;
  max-width: 18.75rem;
  margin: 0.125rem;
  overflow-wrap: break-word;

  &[data-placement='bottom'] {
    margin-top: 0.75rem;
    transform-origin: center top;
  }

  &::before {
    content: '■';
    color: ${({theme:e})=>e.surface};
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    rotate: 45deg;
    width: fit-content;
    height: fit-content;
    font-size: 0.875rem;
    border-radius: 0.125rem;
    translate: -50% -50%;
    overflow: hidden;
  }
`;X.defaultProps={theme:ge};function Xe({children:e,title:r,theme:a=ge}){const{boxRef:l,containerRef:s,show:t,setShow:c}=ve();return n.jsxs(ke,{ref:s,onMouseOver:()=>{c(!0)},onMouseLeave:()=>{c(!1)},onClick:()=>{c(!t)},children:[e,t?Ce.createPortal(n.jsx(ye,{ref:l,children:n.jsx(X,{"data-placement":"bottom",theme:a,children:r})}),document.body):null]})}const Qe=Object.assign(Xe,{Container:ke,Box:ye,Text:X,Hooks:ve});export{Je as B,Ke as C,Qe as T};
