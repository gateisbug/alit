import{j as a}from"./index-BG_pJyP2.js";import{P as m}from"./portrait-wNO2b9n2.js";import{W as b,o as x,c as h,t as u,E as j,C as f,B as d,R as o,a as c}from"./const-DmkPB8qD.js";import"./Tooltip-CLy1PVhB.js";import"./utils-Bsz_bQWJ.js";import"./Modal-FG2fneDI.js";import"./ScrollView-l227WBYN.js";const p=[{value:"link",label:"아이콘",render:e=>a.jsx(m,{item:e,size:48,style:{width:"4rem",height:"4rem"}})},{value:"name",label:"장비명"},{value:"nickname",label:"별명",render:e=>{var l,n;return(((l=e.nickname)==null?void 0:l.length)??0)>0?(n=e.nickname)==null?void 0:n.replace(/,/g,", "):"-"}},{value:"obtain",label:"획득처",render:e=>{var l;return a.jsx(b,{children:(l=x(e))==null?void 0:l.map((n,i,t)=>t.length>2&&n.includes("메인")?null:a.jsx("span",{children:n},n))})}},{value:"nation",label:"국가"},{value:"class",label:"구분",render:e=>h(e)},{value:"type",label:"종류",render:e=>u(e)},{value:"explain",label:"설명",render:e=>{var l;return a.jsx(j,{children:(l=e.explain)==null?void 0:l.join(". ")})}}];function g(e){const{items:l,rowClickHandler:n}=e,i=()=>p.map(r=>a.jsx(c,{"data-type":"th","data-key":r.value,className:"fzp fwb fcs",children:r.label},r.value)),t=()=>l.map(r=>a.jsx(o,{"data-type":"row",onClick:()=>{n(r)},children:p.map(s=>a.jsx(c,{"data-type":"td","data-key":s.value,className:"fzp fwr fc",children:s.render?s.render(r):r[s.value]},`${s.label}_${r.index}_${s.value}`))},`${r.name}_${r.index}`));return a.jsxs(f,{children:[a.jsx(d,{className:"table-header",children:a.jsx(o,{children:i()})}),a.jsx(d,{className:"table-body",children:t()})]})}export{g as default};
