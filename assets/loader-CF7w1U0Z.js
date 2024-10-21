import{j as o}from"./vendor-react-BgBXYHvm.js";import{d as r}from"./vendor-styled-components-D-sOn0X5.js";const e=r.div`
  display: flex;
  width: 40px;
  height: 40px;

  color: var(--loader-color, gold);
  //transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1);
  animation: 1.4s linear 0s infinite normal none running rotate;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,s=r.svg`
  display: block;

  & > circle {
    stroke: currentColor;
    stroke-dasharray: 80px 200px; /* 80, 200; */
    stroke-dashoffset: 0;
    animation: 1.4s ease-in-out 0s infinite normal none running spinning;
  }

  @keyframes spinning {
    0% {
      stroke-dasharray: 1px 200px; /* 1, 200 */
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 100px 200px; /* 100, 200 */
      stroke-dashoffset: -15px; /* -15 */
    }
    100% {
      stroke-dasharray: 100px 200px; /* 100, 200 */
      stroke-dashoffset: -125px; /* -125 */
    }
  }
`,t=r(e)`
  --loader-color: var(--primary);
`,a=r(s).attrs({children:o.jsx("circle",{cx:"44",cy:"44",r:"20.2",fill:"none",strokeWidth:"3.6"})})``;function d(){return o.jsx(t,{children:o.jsx(a,{viewBox:"22 22 44 44"})})}export{d as L};
