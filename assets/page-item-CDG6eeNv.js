import{u as E,r as s,j as r}from"./index-COo1f1DW.js";import{M as N,a as A,S as v,b as _}from"./section-b4FLVQHN.js";import"./modal.style-CXYTu6C_.js";const T=Object.freeze([{label:"함포",value:"gun"},{label:"항공기",value:"aircraft"},{label:"어뢰",value:"torpedo"},{label:"대공포",value:"antiair"},{label:"설비",value:"accessory"},{label:"특수",value:"special"}]),F=Object.freeze([{value:"gun",items:[{label:"구축포(부포)",value:"dd"},{label:"경순포(부포)",value:"cl"},{label:"중순포",value:"ca"},{label:"전함포",value:"bb"},{label:"대순포",value:"cb"}]},{value:"aircraft",items:[{label:"전투기",value:"fighter"},{label:"폭격기",value:"bomber"},{label:"뇌격기",value:"torpedo-bomber"},{label:"수상기",value:"seaplane"}]},{value:"torpedo",items:[{label:"수면어뢰",value:"surface"},{label:"잠수어뢰",value:"submarine"},{label:"미사일",value:"missile"}]},{value:"antiair",items:[{label:"일반",value:"normal"},{label:"시한신관",value:"fuse"}]},{value:"accessory",items:[{label:"전열",value:"front"},{label:"후열",value:"back"},{label:"범선",value:"sailing"},{label:"공용",value:"common"},{label:"특수",value:"signiture"}]},{value:"special",items:[{label:"공용",value:"normal"},{label:"전용",value:"signiture"}]}]),z=Object.freeze([{label:"R",value:"R"},{label:"SR",value:"SR"},{label:"SSR",value:"SSR"},{label:"UR",value:"UR"}]),U=Object.freeze([{label:"이글",value:"USS"},{label:"로열",value:"HMS"},{label:"중앵",value:"IJN"},{label:"철혈",value:"KMS"},{label:"이스트",value:"ROC"},{label:"사르데냐",value:"RN"},{label:"북련",value:"SN"},{label:"아이리스",value:"FFNF"},{label:"비시아",value:"MNF"},{label:"템페스타",value:"MOT"},{label:"공용",value:"UNIV"}]);function H(){var g,S,R,p,h,C,M,x,I;const[e,i]=E(),[n,f]=s.useState((g=e.get("major"))!=null?g:""),[o,u]=s.useState((R=(S=e.get("minor"))==null?void 0:S.split("_"))!=null?R:[]),[c,d]=s.useState((h=(p=e.get("rarity"))==null?void 0:p.split("_"))!=null?h:[]),[b,j]=s.useState((M=(C=e.get("nation"))==null?void 0:C.split("_"))!=null?M:[]);s.useEffect(()=>{var l;if(n.length)if(((l=e.get("major"))!=null?l:"")!==n)e.set("major",n);else return;else e.delete("major");e.delete("minor"),i(e)},[n]),s.useEffect(()=>{var l;if(o.length){const a=(l=e.get("minor"))!=null?l:"",t=o.join("_");if(a!==t)e.set("minor",t);else return}else e.delete("minor");i(e)},[o]),s.useEffect(()=>{var l;if(c.length){const a=(l=e.get("rarity"))!=null?l:"",t=c.join("_");if(a!==t)e.set("rarity",t);else return}else e.delete("rarity");i(e)},[c]),s.useEffect(()=>{var l;if(b.length){const a=(l=e.get("nation"))!=null?l:"",t=b.join("_");if(a!==t)e.set("nation",t);else return}else e.delete("nation");i(e)},[b]);const m=(l,a)=>{const t=[...l],O=t.findIndex(y=>y===a);return O>-1?(t.splice(O,1),t):(t.push(a),t)},k=()=>{e.delete("modal"),i(e)};return r.jsxs(N,{children:[r.jsxs(A,{children:[r.jsx(v,{header:"대분류",items:T,state:n,onClickAll:()=>{f(""),u([])},onClickItem:l=>{f(l),u([])}}),r.jsx(v,{header:"소분류",items:(I=(x=F.find(l=>l.value===n))==null?void 0:x.items)!=null?I:[],state:o,onClickAll:()=>u([]),onClickItem:l=>{u(a=>m(a,l))}}),r.jsx(v,{header:"등급",items:z,state:c,onClickAll:()=>d([]),onClickItem:l=>{d(a=>m(a,l))}}),r.jsx(v,{header:"국가",items:U,state:b,onClickAll:()=>j([]),onClickItem:l=>{j(a=>m(a,l))}})]}),r.jsx(_,{onClick:k})]})}export{H as default};
