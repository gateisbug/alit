import{d as o,j as a}from"./index-ChMF3pDD.js";const s=o.div.attrs({children:a.jsx("svg",{viewBox:"22 22 44 44",children:a.jsx("circle",{cx:"44",cy:"44",r:"20.2",fill:"none",strokeWidth:"3.6"})})})`
  display: flex;
  width: ${({$size:r})=>r!=null?r:40}px;
  height: ${({$size:r})=>r!=null?r:40}px;

  color: var(--loader-color, gold);
  animation: 1.4s linear 0s infinite normal none running rotate;

  & > svg {
    display: block;

    & > circle {
      stroke: currentColor;
      stroke-dasharray: 80px 200px;
      stroke-dashoffset: 0;
      animation: 1.4s ease-in-out 0s infinite normal none running spinning;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spinning {
    0% {
      stroke-dasharray: 1px 200px;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 100px 200px;
      stroke-dashoffset: -15px;
    }
    100% {
      stroke-dasharray: 100px 200px;
      stroke-dashoffset: -125px;
    }
  }
`,n=o.main.attrs({className:"h100"})`
  display: flex;
  flex-direction: column;
  padding: 0 24px 24px;

  margin: 0 auto;
`;export{s as L,n as P};
