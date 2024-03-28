import{r as h,j as r,C as Z,a as v,B as ee,T as re,u as c,R as u,A as ae,G as te,I as ne,L as ie,M as O,b as se,c as y,d as R,e as z,l as E,f as oe,D as ce,F as le,S as de,g as me,h as ue,i as pe,k as L,P as Y,m as j,n as he,o as xe,p as fe,q as D,s as B,t as be,v as ge,w as G,x as we,y as Ae}from"./index-GNXpynwY.js";const Se=({children:e,title:a})=>{const n=h.useRef(null),t=h.useRef(null),[i,o]=h.useState(!1);return h.useLayoutEffect(()=>{if(!i||!(n!=null&&n.current)||!(t!=null&&t.current))return;const{top:l,left:x,height:m,width:p}=n.current.getBoundingClientRect(),{width:b}=t.current.getBoundingClientRect(),f=x-b/2+p/2,g=l+m+window.scrollY;t.current.setAttribute("style",`transform: translate(${f}px, ${g}px)`)},[i]),r.jsxs(Z,{ref:n,onMouseOver:()=>{o(!0)},onMouseLeave:()=>{o(!1)},onClick:()=>{o(!i)},children:[e,i?v.createPortal(r.jsx(ee,{ref:t,children:r.jsx(re,{"data-placement":"bottom",children:a})}),document.body):null]})},Re=c(O).attrs({className:"ui-exlink-iconbtn"})`
  padding: 0.25rem;
  width: 2rem;
  height: 2rem;
`,Ce=({to:e,children:a})=>r.jsx(ie,{to:e,children:r.jsx(Re,{variant:"line",children:a})}),ye=c.div.attrs({className:"ui-exlink-groupcontainer"})`
  display: flex;
  flex-flow: row nowrap;
  gap: 1.5rem;

  /* @device: MobileL */
  @media (max-width: 425px) {
    gap: 0.5rem;
  }
`,Ne=()=>{const e=u.useRef([{to:"https://arca.live/b/azurlane/45593816",render:r.jsx(ae,{})},{to:"https://github.com/gateisbug/alit",render:r.jsx(te,{})},{to:"https://azurlane.koumakan.jp/wiki/Azur_Lane_Wiki",render:r.jsx(ne,{})}]);return r.jsx(ye,{children:e.current.map(a=>r.jsx(Ce,{to:a.to,children:a.render},a.to))})},je=u.memo(Ne),Te=c.header.attrs({className:"ui-header-root"})`
  background-color: var(--main);
  height: fit-content;
  width: 100%;
`,ke=c.div.attrs({className:"ui-header-wrap"})`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  /* @device: MobileL */
  @media (max-width: 425px) {
    padding: 0 1.5rem;
  }
`,Ee=()=>{const e=u.useRef(null);return u.useEffect(()=>{const a=window.innerWidth-document.documentElement.clientWidth;e&&e.current&&(e.current.style.minWidth=`calc(100vw - ${a}px);`)},[]),r.jsx(Te,{ref:e,children:r.jsxs(ke,{className:"max-wrap",children:[r.jsx(se,{}),r.jsx(je,{})]})})};c.div.attrs({className:"ui-wrap-root"})`
  max-width: 1600px;
  width: 100%;
`;const N="Item/store/",_=y({key:N+"filterStore",default:[]}),T=y({key:N+"searchStore",default:""}),W=y({key:N+"itemStore",default:[]}),H=y({key:N+"modalItemStore",default:void 0}),V=y({key:N+"modalShowStore",default:!1}),Oe=["ALL","GUN","TORPEDO","ANTIAIR","AIRCRAFT","ACCESSORY","SPECIAL"],Le={ALL:"/item",GUN:"/item/gun",TORPEDO:"/item/torpedo",ANTIAIR:"/item/antiair",AIRCRAFT:"/item/aircraft",ACCESSORY:"/item/accessory",SPECIAL:"/item/special"},d={ALL:"all",GUN:"gun",TORPEDO:"torpedo",ANTIAIR:"antiair",AIRCRAFT:"aircraft",ACCESSORY:"accessory",SPECIAL:"special"},A={ALL:"전체",GUN:"함포",TORPEDO:"어뢰",ANTIAIR:"대공",AIRCRAFT:"함재기",ACCESSORY:"설비",SPECIAL:"특수"},s={ALL:{},GUN:{DD:{value:"dd",label:"구축포"},CL:{value:"cl",label:"경순포"},CA:{value:"ca",label:"중순포"},BB:{value:"bb",label:"전함포"},CB:{value:"cb",label:"대순포"}},TORPEDO:{SR:{value:"surface",label:"수면어뢰"},SB:{value:"submarine",label:"잠수어뢰"},MS:{value:"missile",label:"미사일"}},ANTIAIR:{NOR:{value:"normal",label:"일반"},FUS:{value:"fuse",label:"시한신관"}},AIRCRAFT:{FA:{value:"fighter",label:"전투기"},BA:{value:"bomber",label:"폭격기"},SA:{value:"seaplane",label:"수상기"},TA:{value:"torpedo-bomber",label:"뇌격기"}},ACCESSORY:{BL:{value:"backline",label:"주력(후열)"},FL:{value:"frontline",label:"선봉(전열)"},SIG:{value:"signiture",label:"특수"}},SPECIAL:{NOR:{value:"normal",label:"공용"},SIG:{value:"signiture",label:"전용"}}},w={ALL:[],GUN:[s.GUN.DD,s.GUN.CL,s.GUN.CA,s.GUN.BB,s.GUN.CB],TORPEDO:[s.TORPEDO.SR,s.TORPEDO.SB,s.TORPEDO.MS],ANTIAIR:[s.ANTIAIR.NOR,s.ANTIAIR.FUS],AIRCRAFT:[s.AIRCRAFT.FA,s.AIRCRAFT.BA,s.AIRCRAFT.SA,s.AIRCRAFT.TA],ACCESSORY:[s.ACCESSORY.BL,s.ACCESSORY.FL,s.ACCESSORY.SIG],SPECIAL:[s.SPECIAL.NOR,s.SPECIAL.SIG]},_e=c.div.attrs({className:"item-filter-container"})`
  .ui-dropd-container {
    min-width: 3.75rem;
  }

  /* @device: Tablet */
  @media (max-width: 768px) {
    .ui-dropd-container {
      min-width: 2.5rem;
    }
  }
`,Fe=c(O).attrs({className:"ui-itemfilter-button"})`
  display: inline-flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0;
  border: none;

  /* @device: Tablet */
  @media (max-width: 768px) {
    padding: 0.375rem 0.5rem;
    & .item-span {
      display: none;
    }
  }
`,Me=c.div.attrs({className:"ui-itemfilter-box"})`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  box-shadow: 0 0.25rem 0.3125rem 0 rgba(0, 0, 0, 14%);
  background-color: var(--surface);
  gap: 0.75rem;
  border: 0.0625rem solid var(--border);
`,Ie=c.form.attrs({className:"ui-itemfilter-list"})`
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;
  padding: 0.5rem 0;
`,Pe=()=>{const e=u.useRef(null),a=u.useRef(null),n=R(_),t=z().category??"all",[i,o]=u.useState(!1);u.useEffect(()=>{o(!1)},[t]);const l=u.useCallback(E.debounce(()=>{switch(!0){case t===d.GUN:return w.GUN;case t===d.TORPEDO:return w.TORPEDO;case t===d.ANTIAIR:return w.ANTIAIR;case t===d.AIRCRAFT:return w.AIRCRAFT;case t===d.ACCESSORY:return w.ACCESSORY;case t===d.SPECIAL:return w.SPECIAL;default:return w.ALL}},200),[t]),x=u.useCallback(E.debounce(()=>{const p=document.querySelectorAll('input[type="checkbox"][name="category"]'),b=[];for(let f=0;f<p.length;f++){const g=p[f];g.checked&&b.push(g.value)}n(b)},200),[]),m=u.useCallback(()=>t===d.ALL?null:r.jsx(Me,{ref:a,children:r.jsx(Ie,{children:(l()??[]).map(p=>r.jsx(oe,{name:"category",value:p.value,defaultChecked:!0,onChange:x,children:p.label},p.value))})}),[t]);return r.jsx(_e,{children:r.jsx(ce,{show:i,contents:m(),children:r.jsxs(Fe,{ref:e,variant:"text",onClick:()=>{o(!i)},disabled:t===d.ALL,className:"ff fzp fwr",children:[r.jsx(le,{}),r.jsx("span",{className:"item-span",children:"필터"})]})})})},De=u.memo(Pe),Be=()=>{const e=R(T),a=u.useCallback(E.debounce(n=>(e(n),n),500),[]);return r.jsx(de,{setValue:a})},Ge=u.memo(Be),$e=c.div.attrs({className:"ui-itemcontroller-container"})`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  min-height: 2.25rem;
  gap: 1rem;

  /* @device: Tablet */
  @media (max-width: 768px) {
    gap: 0.25rem;
  }
`,Ue=()=>r.jsxs($e,{children:[r.jsx(Ge,{}),r.jsx(De,{})]}),ze=c.div.attrs({className:"item-fitbox"})`
  width: fit-content;
  min-width: 28.75rem;

  /* @device: Tablet */
  @media (max-width: 768px) {
    min-width: 23.75rem;
    & .ui-tabs-box {
      gap: 0;
    }
  }
`,Ye=c(pe).attrs({className:"ui-itemtabs-anchor"})`
  display: block;
  padding: 0.5rem 0.75rem;
  color: inherit;
  text-decoration: none;
`,$=Oe.map(e=>({l:d[e],t:Le[e],r:A[e]})),We=()=>{var n;const{pathname:e}=me(),a=u.useRef($.map(t=>({label:t.l,render:r.jsx(Ye,{to:t.t,children:t.r})})));return r.jsx(ze,{children:r.jsx(ue,{item:a.current,defaultValue:((n=$.find(t=>e===t.t))==null?void 0:n.l)??void 0})})},He=u.memo(We);function S(e){const a=u.useCallback(o=>typeof window<"u"?window.matchMedia(o).matches:!1,[]),[n,t]=u.useState(a(e)),i=u.useCallback(()=>{t(a(e))},[e]);return u.useEffect(()=>{const o=window.matchMedia(e);return i(),o.addEventListener("change",i),()=>{o.removeEventListener("change",i)}},[e]),n}function Ve(){const e=S("(min-width: 1024px)"),a=S("(min-width: 768px) and (max-width: 1024px)"),n=S("(max-width: 768px)"),t=S("(min-width: 375px) and (max-width: 768px)"),i=S("(min-width: 320px) and (max-width: 375px)"),o=S("(max-width: 320px)");return{isDesktop:e,isTablet:a,isMobileL:t,isMobileM:i,isMobileS:o,isMobile:n}}async function Ke(e){const a=await fetch(e);try{return await a.json()}catch{return}}function K(e,a){if(a!=="gun")return"default";switch(e){case"ap":return"blue";case"he":return"red";case"normal":case"type3":return"yellow";case"sap":return"violet";default:return"default"}}function Je(e){switch(e){case d.GUN:return A.GUN;case d.TORPEDO:return A.TORPEDO;case d.ANTIAIR:return A.ANTIAIR;case d.AIRCRAFT:return A.AIRCRAFT;case d.ACCESSORY:return A.ACCESSORY;case d.SPECIAL:return A.SPECIAL;default:return""}}function J(e){if(e!=null&&e.domain&&(e!=null&&e.class)){if((e==null?void 0:e.domain)===d.GUN)switch(e==null?void 0:e.class){case s.GUN.DD.value:return s.GUN.DD.label;case s.GUN.CL.value:return s.GUN.CL.label;case s.GUN.CA.value:return s.GUN.CA.label;case s.GUN.BB.value:return s.GUN.BB.label;case s.GUN.CB.value:return s.GUN.CB.label}else if((e==null?void 0:e.domain)===d.TORPEDO)switch(e==null?void 0:e.class){case s.TORPEDO.SR.value:return s.TORPEDO.SR.label;case s.TORPEDO.SB.value:return s.TORPEDO.SB.label;case s.TORPEDO.MS.value:return s.TORPEDO.MS.label}else if((e==null?void 0:e.domain)===d.ANTIAIR)switch(e==null?void 0:e.class){case s.ANTIAIR.NOR.value:return s.ANTIAIR.NOR.label;case s.ANTIAIR.FUS.value:return s.ANTIAIR.FUS.label}else if((e==null?void 0:e.domain)===d.AIRCRAFT)switch(e==null?void 0:e.class){case s.AIRCRAFT.FA.value:return s.AIRCRAFT.FA.label;case s.AIRCRAFT.BA.value:return s.AIRCRAFT.BA.label;case s.AIRCRAFT.SA.value:return s.AIRCRAFT.SA.label;case s.AIRCRAFT.TA.value:return s.AIRCRAFT.TA.label}else if((e==null?void 0:e.domain)===d.ACCESSORY)switch(e==null?void 0:e.class){case s.ACCESSORY.BL.value:return s.ACCESSORY.BL.label;case s.ACCESSORY.FL.value:return s.ACCESSORY.FL.label;case s.ACCESSORY.SIG.value:return s.ACCESSORY.SIG.label}else if((e==null?void 0:e.domain)===d.SPECIAL)switch(e==null?void 0:e.class){case s.SPECIAL.NOR.value:return s.SPECIAL.NOR.label;case s.SPECIAL.SIG.value:return s.SPECIAL.SIG.label}}return""}function X(e){if(e!=null&&e.domain&&e.type){if((e==null?void 0:e.domain)==="gun")switch(e.type){case"normal":return"통상탄";case"he":return"고폭탄";case"ap":return"철갑탄";case"sap":return"SAP탄";case"type3":return"삼식탄"}else if((e==null?void 0:e.domain)==="torpedo")switch(e.type){case"passive":return"수동";case"active":return"유도"}else if((e==null?void 0:e.domain)==="aircraft")switch(e.type){case"old":return"구3대장";case"old low":return"구3대장↓";case"old over":return"구3대장↑";case"new":return"3대장";case"dogfight":return"도그파이트";case"hornet material":return"시호넷 재료";case"deprecated":return"안씀";case"rocket":return"로켓장착";case"god":return"신";case"cooldown":return"사속조절";case"normal":return"일반";case"shit":return"쓰레기";case"straight":return"직선";case"focus":return"핀포인트"}else if((e==null?void 0:e.domain)==="accessory")switch(e.type){case"bb":return"전함";case"ac":return"항모";case"normal":return"범용";case"asw":return"대잠";case"ss":return"잠수함";case"maritime":return"운송";case"repair":return"공작"}else if((e==null?void 0:e.domain)==="special")switch(e.type){case"dd":return"구축";case"cl":return"경순";case"ca&cb":return"중·대순";case"bb":return"전함";case"ac":return"항모";case"ss":return"잠수"}}return""}function C(e,a){if(a==="nation")switch(e){case"USS":return"이글";case"HMS":return"로열";case"IJN":return"중앵";case"KMS":case"SMS":return"철혈";case"ROC":case"PRAN":return"이스트";case"SN":return"북련";case"FFNF":case"MNF":return"엘랑";case"RN":return"사르데냐";case"MOT":return"템페스타";default:return"전체"}if(a==="box")switch(e){case"USS":return"크록히드";case"HMS":return"비스커";case"IJN":return"자오중공";case"KMS":case"SMS":return"크라프";case"ROC":case"PRAN":return"이스트";case"SN":return"북련";case"FFNF":case"MNF":return"아이리스";case"RN":return"사르데냐";case"MOT":return"템페스타";default:return"전체"}return e}function Xe(e){var t;const a=(t=e==null?void 0:e.obtain)==null?void 0:t.map(i=>i.split(":")),n=i=>{switch(i[0]){case"군부연구실":return`${i[0]}: ${i[1]??"?"}`;case"상자깡":return`${i[0]}: ${C(e==null?void 0:e.nation,"box")}(${i[1]})`;case"장비개발":return`${i[0]}: ${C(e==null?void 0:e.nation,"nation")}`;case"이벤트":return`${i[1]}`;default:return i[0]}};return a==null?void 0:a.map(n)}const Qe=c(L.Container).attrs({className:"ui-itemtable-container"})`
  margin-top: 2rem;
  //padding-bottom: 3rem;
  overflow-x: auto;
`,F=c.div.attrs({className:"ui-itemtable-box"})`
  display: flex;
  flex-flow: column nowrap;
  width: fit-content;
  //width: 100%;

  &.table-body {
    border-bottom: 0.125rem solid transparent;

    @media (prefers-color-scheme: light) {
      border-color: rgba(0, 0, 0, 0.16);
    }
    @media (prefers-color-scheme: dark) {
      border-color: rgba(255, 255, 255, 0.16);
    }
  }
`,Q=c(L.Row).attrs({className:"ui-itemtable-row"})`
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${F} > &[data-type='row'] {
    padding: 0.75rem 0;
    border-bottom: 0.0625rem solid transparent;
    cursor: pointer;

    @media (prefers-color-scheme: light) {
      border-color: rgba(0, 0, 0, 0.08);
    }
    @media (prefers-color-scheme: dark) {
      border-color: rgba(255, 255, 255, 0.08);
    }

    &:last-of-type {
      border-bottom: none;
    }

    &:hover {
      @media (prefers-color-scheme: light) {
        background-color: rgba(0, 0, 0, 0.04);
      }
      @media (prefers-color-scheme: dark) {
        background-color: rgba(255, 255, 255, 0.04);
      }
    }
  }
`,q=c(L.Cell).attrs({className:"ui-itemtable-cell"})`
  line-height: 1.5em;
  text-align: center;

  &[data-type='th'] {
    display: inline-block;
    width: 100%;
  }
  &[data-type='td'] {
    word-break: keep-all;
  }
  &[data-key='explain'],
  &[data-key='obtain'] {
    justify-content: flex-start;
    text-align: start;
  }
`,qe=c.div.attrs({className:"ui-itemtable-cellbox"})`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
`,Ze=c.div.attrs({className:"ui-itemtable-ellipsis"})`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
`,ve=c.div.attrs({className:"ui-itemtable-nodata"})`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 3rem 0;
  color: var(--font-strong);

  p:first-child {
    font-size: 12.5rem;
    line-height: 1.25em;
  }
  p:last-child {
    font-size: 1.5rem;
  }
`,k=[{value:"link",label:"아이콘",basis:"90px",minWidth:"64px",render:e=>r.jsx(Y,{src:`images/items/${e.image}.png`,placeholder:`images/items/${e.image}_lqip.png`,stroke:K(e.type,e.domain),tier:e.tier})},{value:"name",label:"장비명",basis:"240px",minWidth:"180px"},{value:"nickname",label:"별명",basis:"150px",minWidth:"100px",render:e=>{var a,n;return(((a=e.nickname)==null?void 0:a.length)??0)>0?(n=e.nickname)==null?void 0:n.replace(/,/g,", "):"-"}},{value:"obtain",label:"획득처",basis:"240px",minWidth:"160px",render:e=>{var a;return r.jsx(qe,{children:(a=Xe(e))==null?void 0:a.map((n,t,i)=>i.length>2&&n.includes("메인")?null:r.jsx("span",{children:n},t))})}},{value:"nation",label:"국가",basis:"100px",minWidth:"60px"},{value:"class",label:"구분",basis:"100px",minWidth:"60px",render:e=>J(e)},{value:"type",label:"종류",basis:"100px",minWidth:"60px",render:e=>X(e)},{value:"explain",label:"설명",basis:"468px",minWidth:"200px",render:e=>{var a;return r.jsx(Ze,{children:(a=e.explain)==null?void 0:a.join(". ")})}}],er=async e=>{const a=async n=>await Ke(`/alit/json/${n}.json`)??[];if(e!=="all")return await a(e);{const n=[d.GUN,d.TORPEDO,d.ANTIAIR,d.AIRCRAFT,d.ACCESSORY];let t=[];for(let i=0;i<n.length;i++){const o=await a(n[i]);t=t.concat(o)}return t}},rr=({columns:e=[]})=>r.jsx(F,{className:"table-header",children:r.jsx(Q,{children:e.map(a=>r.jsx(q,{style:{flexBasis:a.basis,minWidth:a.minWidth},"data-type":"th",className:"ff fzp fwb fcs",children:a.label},a.value))})}),ar=({columns:e=[],items:a=[]})=>{const n=R(V),t=R(H),i=j(T),o=h.useCallback(l=>{n(!0),t(l)},[]);return r.jsxs(F,{className:"table-body",children:[a.map((l,x)=>r.jsx(Q,{"data-type":"row",onClick:()=>{o(l)},children:e.map(m=>r.jsx(q,{style:{flexBasis:m.basis,minWidth:m.minWidth},"data-type":"td","data-key":m.value,className:"ff fzp fwr fc",children:m.render?m.render(l):l[m.value]},`${l.name}_${x}_${m.value}`))},`${l.name}_${x}`)),i.length>0&&((a==null?void 0:a.length)??0)===0?r.jsxs(ve,{children:[r.jsx("p",{children:"\\(o_o)/"}),r.jsx("p",{children:"No Search Data"})]}):null]})},tr=()=>{const e=j(W),a=j(_),n=j(T),{isDesktop:t,isTablet:i,isMobile:o}=Ve(),l=h.useMemo(()=>o?k.filter(m=>["link","name","class","explain"].includes(m.value)):i?k.filter(m=>["link","name","obtain","class","type","explain"].includes(m.value)):k,[t,i,o]),x=h.useMemo(()=>{let m=e;return m.length===0?[]:(a.length>0&&(m=a.length===0?m:m.filter(p=>a.includes(p.class??""))),n.length>0&&(m=m.filter(p=>{var b,f,g,I,P;return((b=p.name)==null?void 0:b.includes(n))||((f=p.nickname)==null?void 0:f.includes(n))||((g=p.obtain)==null?void 0:g.join("|").includes(n))||((I=p.nation)==null?void 0:I.includes(n))||((P=p.explain)==null?void 0:P.join("|").includes(n))})),m)},[e,a,n]);return r.jsx(he,{children:r.jsxs(Qe,{children:[r.jsx(rr,{columns:l}),r.jsx(ar,{columns:l,items:x})]})})},nr=c.div.attrs({className:"ui-modal-container"})`
  display: flex;
  flex-flow: column nowrap;
  gap: 3rem;
  padding: 1.5rem;
  box-sizing: border-box;
  position: relative;
  //min-height: fit-content;
  min-height: 37.5rem;
  width: 100%;

  /* @device: MobileL */
  @media (max-width: 425px) {
    padding: 1.5rem 1rem;
  }
`,ir=c(O.Root)`
  width: fit-content;
  height: fit-content;
  padding: 0;
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  color: var(--font-strong);
  &:not(:disabled):hover {
    color: var(--font);
  }
`,sr=c.div.attrs({className:"ui-modal-header"})`
  display: grid;
  grid-template-columns: 6rem auto;
  grid-template-rows: auto;
  //justify-content: center;
  gap: 0 3rem;
  align-items: center;

  .portrait {
    width: 6rem;
    height: 6rem;
    border-width: 0.25rem;
  }
  .section {
    display: flex;
    flex-flow: column nowrap;
    gap: 1rem;
    justify-content: center;
  }
  .title,
  .subtitle {
    line-height: 1em;
  }

  /* @device: Tablet */
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    gap: 1.5rem 0;
    justify-items: center;

    .section {
      align-items: center;
      gap: 0.75rem;
    }
  }
`,M=c.div.attrs({className:"ui-modal-section"})``,or=c(M).attrs({className:"status-explains"})`
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;
  border-radius: 0.25rem;
  border: 0.0625rem solid var(--border);
  padding: 1rem;
  line-height: 1.125rem;
`,cr=({selectedItem:e})=>{var a,n;return r.jsx(or,{children:(((a=e==null?void 0:e.explain)==null?void 0:a.length)??0)>0?(n=e==null?void 0:e.explain)==null?void 0:n.map((t,i)=>r.jsx("p",{children:t},i)):"0v0"})},lr=c(M)`
  //display: grid;
  //grid-template-columns: repeat(8, auto);
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1rem;
  grid-template-rows: auto;

  .ui-keyvalue-container {
    flex: 1 1 20%;
    max-width: 14rem;
  }
  .ui-keyvalue-box {
    width: 100%;
    align-items: center;
  }
  &[data-domain='antiair'] .ui-keyvalue-container {
    flex: 1 1 16%;
  }
  &[data-domain='aircraft'],
  &[data-domain='accessory'] {
    .ui-keyvalue-container {
      flex: 1 1 30%;
    }
  }
  &[data-domain='accessory'] .ui-keyvalue-container {
    max-width: 20rem;
  }

  /* @device: Tablet */
  @media (max-width: 768px) {
    &,
    &[data-domain='antiair'],
    &[data-domain='aircraft'] {
      .ui-keyvalue-container {
        flex: 1 1 25%;
        max-width: 14rem;
      }
    }
    &[data-domain='accessory'] .ui-keyvalue-container {
      flex: 1 1 33%;
      max-width: 100%;
    }
  }

  /* @device: MobileL */
  @media (max-width: 425px) {
    &,
    &[data-domain='antiair'],
    &[data-domain='aircraft'],
    &[data-domain='accessory'] {
      .ui-keyvalue-container {
        flex: 1 1 33%;
        max-width: 100%;
      }
    }
  }

  /* @device: MobileM */
  @media (max-width: 375px) {
    &,
    &[data-domain='antiair'],
    &[data-domain='aircraft'],
    &[data-domain='accessory'] {
      .ui-keyvalue-container {
        flex: 1 1 100%;
        max-width: 100%;
      }
    }
  }
`,dr=({selectedItem:e})=>{var a;return r.jsx(lr,{className:"stat","data-domain":e==null?void 0:e.domain,children:(a=e==null?void 0:e.status)==null?void 0:a.map((n,t)=>{const i=n.split(":"),o=pr(i);return r.jsx(xe,{label:i[0],value:o},`modal_stat_${t}`)})})},mr=c.span`
  text-decoration: underline;
`,U=c.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;
  padding: 0.5rem;
  background-color: rgba(97, 97, 97, 0.92);
  border-radius: 0.25rem;
  z-index: 1;
`;function ur(e){const[a,n,t]=e.split("\\t"),[i,o]=a.split("*"),l=t?r.jsxs(U,{children:[r.jsxs("div",{children:["대미지: ",n]}),r.jsxs("div",{children:["관통: ",t.replace(/\//g," / ")]})]}):r.jsxs(U,{children:["대미지: ",n]});return r.jsxs(r.Fragment,{children:[r.jsx(Se,{title:l,children:r.jsx(mr,{children:i})}),r.jsxs(r.Fragment,{children:[" × ",o]})]})}function pr(e){switch(e[0]){case"스탯":case"스킬":return e[1].replace(/,/g,", ");case"대미지":case"발사패턴":return e[1].replace(/\*/g," × ");case"기총":case"폭장":case"어뢰":case"로켓":return ur(e[1]);case"사속":case"발사간격":return e[1].replace(/초/g," 초");case"대갑비례":return e[1].replace(/\//g," / ");default:return e[1]}}const hr=({selectedItem:e})=>{const a=h.useCallback(()=>({src:`images/items/${e==null?void 0:e.image}.png`,className:"portrait",tier:e==null?void 0:e.tier,stroke:K(e==null?void 0:e.type,e==null?void 0:e.domain)}),[e]),n=h.useCallback(()=>{const t=Je(e==null?void 0:e.domain),i=J(e),o=X(e),l=[];return t.length>0&&l.push(t),i.length>0&&l.push(i),o.length>0&&l.push(o),l},[e]);return r.jsxs(sr,{children:[r.jsx(Y,{...a()}),r.jsxs("div",{className:"section",children:[r.jsx("h2",{className:"title fcs fzl",children:e==null?void 0:e.name}),r.jsx("p",{className:"subtitle fcw fzp",children:e==null?void 0:e.nickname}),r.jsx(fe,{texts:n()})]})]})},xr=c(M)`
  display: grid;
  min-height: 8rem;
  grid-template-columns: 1fr 10rem;
  gap: 1rem;

  /* @device: Tablet */
  @media (max-width: 768px) {
    grid-template-columns: auto;
    grid-template-rows: auto;
  }

  .obtain {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    gap: 1rem;

    /* @device: Tablet */
    @media (max-width: 700px) {
      flex-flow: column nowrap;
      align-items: center;
    }

    & .ui-imgcard-container {
      border-radius: 0.25rem;
      overflow: hidden;
      box-sizing: border-box;
      width: fit-content;

      &:hover .ui-imgcard-textbox {
        opacity: 1;
      }
    }
    & .ui-imgcard-textbox {
      display: flex;
      flex-flow: column nowrap;
      gap: 0.5rem;
      align-items: center;
      justify-content: center;
      background-color: rgba(255, 255, 255, 0.8);
      cursor: default;
      padding: 0.75rem;
      box-sizing: border-box;
      color: #1c2025;
      transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
      opacity: 0;
    }

    & .ui-imgcard-image {
      max-height: 10rem;
    }
  }

  .nation {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;

    & .ui-imgcard-container {
      border-radius: 0.25rem;
      width: 10rem;
      height: 10rem;
      overflow: hidden;
      padding: 0.75rem;
      box-sizing: border-box;

      &:hover .ui-imgcard-textbox {
        opacity: 1;
      }
    }
    & .ui-imgcard-textbox {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      background-color: rgba(255, 255, 255, 0.8);
      cursor: default;
      color: #1c2025;
      transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
      opacity: 0;
    }
  }
`,fr=({selectedItem:e})=>{var a;return r.jsxs(xr,{className:"obtain-nation",children:[r.jsx("div",{className:"obtain",children:br(e).map((n,t)=>r.jsxs(D,{src:n.img,children:[r.jsx("div",{className:"obtain-value fzs fwb",children:n.obtain}),r.jsx("div",{className:"obtain-label fzs fws",children:n.label})]},`${e==null?void 0:e.index}_${n.obtain}_${t}`))}),r.jsx("div",{className:"nation",children:r.jsx(D,{src:`images/nation/${(a=e==null?void 0:e.nation)==null?void 0:a.toLowerCase()}.png`,children:r.jsx("span",{className:"nation-value fzs fwb",children:C(e==null?void 0:e.nation,"nation")})})})]})};function br(e){const a=e==null?void 0:e.obtain;return a?a.map(n=>{const t=n.split(":");if(t[0]==="이벤트")return{img:`images/event/${gr(n)}.png`,obtain:t[0],label:t[1]};{let i="",o=t[0],l=t[1];switch(t[0]){case"메인":i="campaign",l=t[1].split(",").join(", ");break;case"상자깡":i="techbox",o+=`(${C(e==null?void 0:e.nation,"box")})`;break;case"장비개발":i="gearlab",l=C(e==null?void 0:e.nation,"nation")??"";break;case"군부연구실":i="research";break;case"코어샵":i="coredata";break;case"수집미션":i="collection";break;case"서브미션":i=t[1].includes("통상파괴")?"supply_line_disruption":"akashi";break;case"건조":i="building",l=t[1].split(",").join(", ");break;case"설계도":i="augmentation";break}return{img:`images/obtain/${i}.png`,obtain:o,label:l}}}):[]}function gr(e){switch(e.split(":")[1]){case"핼러윈의 기우":return"Halloween_Hijinks";case"템페스타의 비밀 조선소":return"Tempesta's_Secret_Shipyard";case"허상의 탑":return"Virtual_Tower";case"템페스타와 젊음의 샘":return"Tempesta_and_the_Fountain_of_Youth";case"동절의 북해":return"Northern_Overture";case"새벽녘에 비치는 빙화":return"Khorovod_of_Dawn";case"어리석은 자의 천칭":return"The_Fool's_Scales";case"부흥의 찬송가":return"Daedalian_Hymn";case"결상점 작전":return"Operation_Convergence";case"극지 폭풍":return"Frostfall";case"디바인 트레지 코미디":return"Empyreal_Tragicomedy";case"비추는 나선의 경해":return"Mirror_Involution";case"짙은 자줏빛의 안개":return"Violet_Tempest,_Blooming_Lycoris";case"깊게 울리는 메아리":return"Abyssal_Refrain";case"맑고 푸른 바다":return"Upon_the_Shimmering_Blue";case"모항춘절(2024)":return"Spring_Festive_Fiasco";case"거듭되는 평행세계":return"Parallel_Superimposition";case"잿빛 폐허":return"Revelations_of_Dust";case"모항춘절(2023)":return"Happy_Lunar_New_Year_2023";case"아이리스의 천사":return"Angel_of_the_Iris";case"빛나는 정원의 맹세":return"Pledge_of_the_Radiant_Court";case"새벽의 어둠":return"Darkness_Within_Dawn";case"영원한 밤의 환광":return"Aurora_Noctis";case"접해몽화":return"Dreamwakers_Butterfly";case"빛을 쫓는 별의 바다":return"Light-Chasing_Sea_of_Stars";case"설경미종":return"Snowrealm_Peregrination";case"결상점작전":return"Operation_Convergence";case"만월이 밝아오기 전에":return"Effulgence_Before_Eclipse";default:return""}}const wr=()=>{const[e,a]=B(H),[n,t]=B(V),i=h.useCallback(()=>{t(!1),a(void 0)},[]);return r.jsx(be,{open:n,onClickAway:i,children:r.jsxs(nr,{children:[r.jsx(hr,{selectedItem:e}),r.jsx(fr,{selectedItem:e}),r.jsx(dr,{selectedItem:e}),r.jsx(cr,{selectedItem:e}),r.jsx(ir,{$variant:"text",onClick:i,children:r.jsx(ge,{})})]})})},Ar=c.div`
  padding: 3rem 2rem 0;
  //padding-bottom: 3rem;
`,Sr=c.div.attrs({className:"ui-table-controller"})`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  gap: 2rem;
  background-color: var(--surface);
  overflow-x: auto;
`,Rr=()=>{const e=z(),a=R(W),n=G(_),t=G(T);return u.useEffect(()=>{n(),t();const i=(e==null?void 0:e.category)??"all";er(i).then(o=>{a(o)}).catch(o=>{a([]),console.error(o)})},[e]),r.jsxs("div",{children:[r.jsx(Ee,{}),r.jsxs(Ar,{className:"wrap",style:{paddingBottom:"2rem"},children:[r.jsxs(Sr,{children:[r.jsx(He,{}),r.jsx(Ue,{})]}),r.jsx(tr,{})]}),r.jsx(we,{children:r.jsx(Ae,{width:"1.5rem",height:"1.5rem"})}),r.jsx(wr,{})]})},yr=Rr;export{yr as default};
