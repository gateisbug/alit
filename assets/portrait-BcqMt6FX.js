import{j as a,I as i,p as n}from"./index-ey0nagZQ.js";const f=n.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  //width: 4rem;
  //height: 4rem;
  border-radius: 0.25rem;
  box-sizing: border-box;
  padding: 0.375rem;
  border: 0.1875rem solid #7e5475;

  &[data-stroke='default'] {
    border-color: #7e5475;
  }
  &[data-stroke='red'] {
    border-color: #e4002b;
  }
  &[data-stroke='yellow'] {
    border-color: #f3e500;
  }
  &[data-stroke='blue'] {
    border-color: #0047bb;
  }
  &[data-stroke='violet'] {
    border-color: #ea27c2;
  }

  &[data-tier='N'] {
    background-color: #ddd;
  }
  &[data-tier='R'] {
    background-color: #9fe8ff;
  }
  &[data-tier='SR'] {
    background-color: #c4adff;
  }
  &[data-tier='SSR'] {
    background-color: #ee9;
  }
  &[data-tier='UR'] {
    background: linear-gradient(120deg, #fbffca, #baffbf, #a7efff, #ffabff);
  }
`;function u(o){const{item:e,className:t,size:r=48,style:d}=o,s=(l,c)=>{if(c!=="gun")return"default";switch(l){case"ap":return"blue";case"he":return"red";case"normal":case"type3":return"yellow";case"sap":return"violet";default:return"default"}};return a.jsx(f,{"data-tier":e==null?void 0:e.tier,"data-stroke":s(e==null?void 0:e.type,e==null?void 0:e.domain),className:t,style:d,children:a.jsx(i,{src:`images/items/${e==null?void 0:e.image}.webp`,alt:"images",width:r,height:r,placeholder:`images/items/${e==null?void 0:e.image}_lqip.webp`})})}export{u as P};
