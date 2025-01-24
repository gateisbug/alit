const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/page-cbshK-Sh.js","assets/index-CNlcmZE9.js","assets/index-EHUB-4pU.css","assets/modal-BB8FoycR.js","assets/modal.style-C8hTN0jJ.js","assets/useInfiniteGrid-CdpRa9Gm.js","assets/styled-Dj0hc8R6.js"])))=>i.map(i=>d[i]);
var M=(l,n,a)=>new Promise((t,e)=>{var s=d=>{try{o(a.next(d))}catch(r){e(r)}},b=d=>{try{o(a.throw(d))}catch(r){e(r)}},o=d=>d.done?t(d.value):Promise.resolve(d.value).then(s,b);o((a=a.apply(l,n)).next())});import{d as _,j as u,u as L,r as $,_ as z,a as B}from"./index-CNlcmZE9.js";import{L as D}from"./styled-Dj0hc8R6.js";import{P as q,h as k,u as U,a as V}from"./useInfiniteGrid-CdpRa9Gm.js";const K=_.div.attrs({className:"flex column"})`
  user-select: none;
`,W=_.div.attrs({className:"flex"})`
  gap: 16px;
`,Y=_.div.attrs({className:"bb"})`
  box-sizing: border-box;
  flex-grow: 1;
`,J=_(K)``,i=_(Y).attrs({className:"flex ai-c"})`
  min-height: 64px;
`,T=_(W)`
  transition: background-color 150ms ease-in-out;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      cursor: pointer;
      background-color: var(--lc-w);
    }
  }

  &[data-type='head'] {
    cursor: default;
    border-bottom: 1px solid var(--lc);
    background-color: transparent !important;

    ${i} {
      padding: 16px 0;
      height: fit-content;
      text-align: center;
    }
  }
  &[data-type='body'] {
    padding: 12px 0;
    border-bottom: 1px solid var(--lc-w);
  }

  //grid-template-columns: 1:90 2:240 3:160 4:240 5:90 6:90 7:90 8:743;
  ${i}:nth-of-type(1),
  ${i}:nth-of-type(5),
  ${i}:nth-of-type(6),
  ${i}:nth-of-type(7) {
    flex-basis: 90px;
  }
  ${i}:nth-of-type(2),
  ${i}:nth-of-type(4) {
    flex-basis: 240px;
  }
  ${i}:nth-of-type(3) {
    flex-basis: 160px;
  }
  ${i}:nth-of-type(8) {
    flex-basis: 743px;
  }

  ${i}:nth-of-type(1) {
    min-width: 90px;
  }
  ${i}:nth-of-type(2) {
    min-width: 178px;
  }
  ${i}:nth-of-type(3) {
    min-width: 98px;
  }
  ${i}:nth-of-type(4) {
    min-width: 162px;
  }
  ${i}:nth-of-type(5) {
    min-width: 32px;
  }
  ${i}:nth-of-type(6) {
    min-width: 68px;
  }
  ${i}:nth-of-type(7) {
    min-width: 72px;
  }

  @media (max-width: 1200px) {
    ${i}:nth-of-type(5),
    ${i}:nth-of-type(6),
    ${i}:nth-of-type(7) {
      display: none;
    }
  }
  //@COMMENT: (1)icon, (2)name, (3)nickname, (4)obtain, (5)nation, (6)category, (7)type, (8)explain
  @media (max-width: 900px) {
    ${i}:nth-of-type(5),
    ${i}:nth-of-type(6),
    ${i}:nth-of-type(7) {
      display: none;
    }
  }
  @media (max-width: 900px) {
    ${i}:nth-of-type(4) {
      display: none;
    }
  }
  @media (max-width: 700px) {
    ${i}:nth-of-type(3) {
      display: none;
    }
  }
  @media (max-width: 550px) {
    ${i}:nth-of-type(8) {
      display: none;
    }
  }
  @media (max-width: 440px) {
    ${i}:nth-of-type(2) {
      min-width: 120px;
    }
  }
`,N=[{index:"gun",value:"gun",label:"함포"},{index:"gun",value:"dd",label:"구축포"},{index:"gun",value:"cl",label:"경순포"},{index:"gun",value:"ca",label:"중순포"},{index:"gun",value:"bb",label:"전함포"},{index:"gun",value:"cb",label:"대순포"},{index:"torpedo",value:"torpedo",label:"어뢰"},{index:"torpedo",value:"surface",label:"수면어뢰"},{index:"torpedo",value:"submarine",label:"잠수어뢰"},{index:"torpedo",value:"missile",label:"미사일"},{index:"antiair",value:"antiair",label:"대공포"},{index:"antiair",value:"normal",label:"일반"},{index:"antiair",value:"fuse",label:"시한신관"},{index:"aircraft",value:"aircraft",label:"항공기"},{index:"aircraft",value:"fighter",label:"전투기"},{index:"aircraft",value:"bomber",label:"폭격기"},{index:"aircraft",value:"seaplane",label:"수상기"},{index:"aircraft",value:"torpedo-bomber",label:"뇌격기"},{index:"accessory",value:"accessory",label:"설비"},{index:"accessory",value:"back",label:"주력(후열)"},{index:"accessory",value:"front",label:"선봉(전열)"},{index:"accessory",value:"signiture",label:"특수"},{index:"special",value:"special",label:"특수장비"},{index:"special",value:"normal",label:"공용"},{index:"special",value:"signiture",label:"전용"},{index:"gun",value:"normal",label:"통상탄"},{index:"gun",value:"he",label:"고폭탄"},{index:"gun",value:"ap",label:"철갑탄"},{index:"gun",value:"sap",label:"SAP탄"},{index:"gun",value:"type3",label:"삼식탄"},{index:"torpedo",value:"passive",label:"수동"},{index:"torpedo",value:"active",label:"유도"},{index:"aircraft",value:"old",label:"구3대장"},{index:"aircraft",value:"old low",label:"구3대장="},{index:"aircraft",value:"old over",label:"구3대장↑"},{index:"aircraft",value:"new",label:"3대장"},{index:"aircraft",value:"dogfight",label:"도그파이트"},{index:"aircraft",value:"hornet material",label:"시호넷 재료"},{index:"aircraft",value:"deprecated",label:"안씀"},{index:"aircraft",value:"rocket",label:"로켓장착"},{index:"aircraft",value:"god",label:"신"},{index:"aircraft",value:"cooldown",label:"사속조절"},{index:"aircraft",value:"normal",label:"일반"},{index:"aircraft",value:"shit",label:"쓰레기"},{index:"aircraft",value:"straight",label:"직선"},{index:"aircraft",value:"focus",label:"핀포인트"},{index:"accessory",value:"back",label:"주력(후열)"},{index:"accessory",value:"front",label:"선봉(전열)"},{index:"accessory",value:"common",label:"공용"},{index:"accessory",value:"signiture",label:"특수"},{index:"accessory",value:"sailing",label:"범선"},{index:"special",value:"dd",label:"구축"},{index:"special",value:"cl",label:"경순"},{index:"special",value:"ca&cb",label:"중·대순"},{index:"special",value:"bb",label:"전함"},{index:"special",value:"ac",label:"항모"},{index:"special",value:"ss",label:"잠수함"}];Object.freeze(N);const P=[{index:"USS",value:"nation",label:"이글"},{index:"HMS",value:"nation",label:"로열"},{index:"IJN",value:"nation",label:"중앵"},{index:"KMS",value:"nation",label:"철혈"},{index:"SMS",value:"nation",label:"철혈"},{index:"ROC",value:"nation",label:"이스트 글림"},{index:"PRAN",value:"nation",label:"이스트"},{index:"SN",value:"nation",label:"북련"},{index:"FFNF",value:"nation",label:"아이리스"},{index:"MNF",value:"nation",label:"비시아"},{index:"RN",value:"nation",label:"사르데냐"},{index:"MOT",value:"nation",label:"템페스타"},{index:"USS",value:"box",label:"크록히드"},{index:"HMS",value:"box",label:"비스커"},{index:"IJN",value:"box",label:"자오중공"},{index:"KMS",value:"box",label:"크라프"},{index:"SMS",value:"box",label:"크라프"},{index:"ROC",value:"box",label:"이스트"},{index:"PRAN",value:"box",label:"이스트"},{index:"SN",value:"box",label:"북련"},{index:"FFNF",value:"box",label:"아이리스"},{index:"MNF",value:"box",label:"비시아"},{index:"RN",value:"box",label:"사르데냐"},{index:"MOT",value:"box",label:"템페스타"},{index:"UNIV",value:"box",label:"전체"}];Object.freeze(P);const Q=[{index:"이벤트",value:"핼러윈의 기우",label:"images/event/Halloween_Hijinks"},{index:"이벤트",value:"템페스타의 비밀 조선소",label:"images/event/Tempesta's_Secret_Shipyard"},{index:"이벤트",value:"허상의 탑",label:"images/event/Virtual_Tower"},{index:"이벤트",value:"템페스타와 젊음의 샘",label:"images/event/Tempesta_and_the_Fountain_of_Youth"},{index:"이벤트",value:"동절의 북해",label:"images/event/Northern_Overture"},{index:"이벤트",value:"새벽녘에 비치는 빙화",label:"images/event/Khorovod_of_Dawn"},{index:"이벤트",value:"어리석은 자의 천칭",label:"images/event/The_Fool's_Scales"},{index:"이벤트",value:"부흥의 찬송가",label:"images/event/Daedalian_Hymn"},{index:"이벤트",value:"결상점작전",label:"images/event/Operation_Convergence"},{index:"이벤트",value:"극지 폭풍",label:"images/event/Frostfall"},{index:"이벤트",value:"디바인 트레지 코미디",label:"images/event/Empyreal_Tragicomedy"},{index:"이벤트",value:"비추는 나선의 경해",label:"images/event/Mirror_Involution"},{index:"이벤트",value:"짙은 자줏빛의 안개",label:"images/event/Violet_Tempest,_Blooming_Lycoris"},{index:"이벤트",value:"깊게 울리는 메아리",label:"images/event/Abyssal_Refrain"},{index:"이벤트",value:"맑고 푸른 바다",label:"images/event/Upon_the_Shimmering_Blue"},{index:"이벤트",value:"모항춘절(2024)",label:"images/event/Spring_Festive_Fiasco"},{index:"이벤트",value:"거듭되는 평행세계",label:"images/event/Parallel_Superimposition"},{index:"이벤트",value:"잿빛 폐허",label:"images/event/Revelations_of_Dust"},{index:"이벤트",value:"모항춘절(2023)",label:"images/event/Happy_Lunar_New_Year_2023"},{index:"이벤트",value:"아이리스의 천사",label:"images/event/Angel_of_the_Iris"},{index:"이벤트",value:"빛나는 정원의 맹세",label:"images/event/Pledge_of_the_Radiant_Court"},{index:"이벤트",value:"영원한 밤의 환광",label:"images/event/Aurora_Noctis"},{index:"이벤트",value:"접해몽화",label:"images/event/Dreamwakers_Butterfly"},{index:"이벤트",value:"빛을 쫓는 별의 바다",label:"images/event/Light-Chasing_Sea_of_Stars"},{index:"이벤트",value:"설경미종",label:"images/event/Snowrealm_Peregrination"},{index:"이벤트",value:"결상점 작전",label:"images/event/Operation_Convergence"},{index:"이벤트",value:"만월이 밝아오기 전에",label:"images/event/Effulgence_Before_Eclipse"},{index:"이벤트",value:"휘광의 성에서 피어나라",label:"images/event/Light_of_the_Martyrium_Event_Banner"},{index:"이벤트",value:"리틀 학원에 어서오세요",label:"images/event/Welcome_to_Little_Academy"},{index:"이벤트",value:"격창의 유니버스",label:"images/event/Universe_in_Unison"},{index:"이벤트",value:"격주의 폴라리스",label:"images/event/Crescendo_of_Polaris"},{index:"이벤트",value:"공명의 패션",label:"images/event/Heart-Linking_Harmony"},{index:"이벤트",value:"철익 경풍",label:"images/event/Windborne_Steel_Wings"},{index:"이벤트",value:"싸워라 로열 메이드 3rd",label:"images/event/Fight_On,_Royal_Maids!_(Part 3)"},{index:"이벤트",value:"제로부터 시작하는 마왕 토벌",label:"images/event/Rising_of_the_Ship_Heroes!"},{index:"이벤트",value:"독수리의 서사곡",label:"images/event/Aquilifer's_Ballade"},{index:"이벤트",value:"오엽각 교차점",label:"images/event/Confluence of Nothingness"},{index:"이벤트",value:"오아시스 옛담",label:"images/event/Reflections_of_the_Oasis"},{index:"이벤트",value:"몽환의 간주곡",label:"images/event/Interlude_of_Illusions"},{index:"이벤트",value:"저편에 핀 꽃의 향기",label:"images/event/Spider_Lily's_Redolence"},{index:"이벤트",value:"저편에 핀 꽃의 향기",label:"images/event/Spider_Lily's_Redolence"},{index:"이벤트",value:"정보 대항 모의 테스트",label:"images/event/Charge!_My_Trusty_Steeds!"},{index:"이벤트",value:"템페스타와 잠든 바다",label:"images/event/Tempesta_and_the_Sleeping_Sea"},{index:"메인",value:"",label:"images/obtain/campaign"},{index:"상자깡",value:"",label:"images/obtain/techbox"},{index:"장비개발",value:"",label:"images/obtain/gearlab"},{index:"군부연구실",value:"",label:"images/obtain/research"},{index:"코어샵",value:"",label:"images/obtain/coredata"},{index:"수집미션",value:"",label:"images/obtain/collection"},{index:"서브미션",value:"통상파괴",label:"images/obtain/supply_line_disruption"},{index:"서브미션",value:"아카시",label:"images/obtain/akashi"},{index:"건조",value:"",label:"images/obtain/building"},{index:"설계도",value:"",label:"images/obtain/augmentation"},{index:"몰?루",value:"",label:"images/obtain/unknown"}];Object.freeze(Q);const X=[{label:"아이콘",value:"image"},{label:"장비명",value:"name"},{label:"별명",value:"nickname"},{label:"획득처",value:"obtain"},{label:"국가",value:"nation"},{label:"구분",value:"class"},{label:"종류",value:"type"},{label:"설명",value:"explain"}],A=Object.freeze(X);function Z(l){const n=(()=>{if(l.domain!=="gun")return"default";switch(l.type){case"ap":return"blue";case"he":return"red";case"normal":case"type3":return"yellow";case"sap":return"violet";default:return"default"}})();return u.jsx(q,{path:`images/items/${l==null?void 0:l.image}_x48.webp`,lqip:`images/items/${l==null?void 0:l.image}_lqip.webp`,tier:l.tier,stroke:n})}function ee(l,n){const{name:a=""}=l;return n?k(a,n):a}function ae(l,n){var e,s;const{nickname:a=""}=l,t=(s=((e=a==null?void 0:a.length)!=null?e:0)>0?a==null?void 0:a.replace(/,/g,", "):"-")!=null?s:"-";return n?k(t,n):t}function S(l,n){var t,e;const{nation:a}=l;return n==="prefix"?a!=null?a:"ALL":(e=(t=P.find(s=>s.index===a&&s.value===n))==null?void 0:t.label)!=null?e:"전체"}function le(l){const{obtain:n}=l,a=n==null?void 0:n.map(e=>e.split(":")),t=e=>{var s;switch(e==null?void 0:e[0]){case"군부연구실":return`${e==null?void 0:e[0]}: ${(s=e==null?void 0:e[1])!=null?s:"?"}`;case"상자깡":return`${e==null?void 0:e[0]}: ${S(l,"box")}(${e==null?void 0:e[1]})`;case"장비개발":return`${e==null?void 0:e[0]}: ${S(l,"nation")}`;case"이벤트":return`${e==null?void 0:e[1]}`;default:return e==null?void 0:e[0]}};return a==null?void 0:a.map(t).map((e,s,b)=>b.length>2&&e.includes("메인")?null:u.jsx("span",{children:e},e))}function ne(l){var t,e;const{domain:n,class:a}=l;return(e=(t=N.find(s=>s.index===n&&s.value===a))==null?void 0:t.label)!=null?e:"-"}function ie(l){var t,e;const{domain:n,type:a}=l;return(e=(t=N.find(s=>s.index===n&&s.value===a))==null?void 0:t.label)!=null?e:a}function te(l,n){var e;const{explain:a}=l,t=(e=a==null?void 0:a.join(". "))!=null?e:"-";return n?u.jsx("div",{className:"el-2",children:k(t,n)}):u.jsx("div",{className:"el-2",children:a==null?void 0:a.join(". ")})}const g=Object.freeze({img:Z,name:ee,nickname:ae,obtain:le,nation:S,class:ne,type:ie,explain:te});function F(l){var n;return(n=l==null?void 0:l.toLowerCase().replace(/ /g,""))!=null?n:""}function se(){const[l]=L(),n=l.get("major"),a=l.get("minor"),t=l.get("rarity"),e=l.get("nation"),s=l.get("keyword"),b=U({queryKey:["alit-item-list"],queryFn:()=>M(this,null,function*(){var f;return(f=yield(yield fetch("json/item.json")).json())!=null?f:[]})}),[o,d]=$.useState([]);return $.useEffect(()=>{var f,h,x,y,m;let r;if(!n&&!a&&!t&&!e)r=(f=b.data)!=null?f:[];else{const c=(h=a==null?void 0:a.split("_"))!=null?h:[],w=(x=t==null?void 0:t.split("_"))!=null?x:[],j=(y=e==null?void 0:e.split("_"))!=null?y:[];r=((m=b.data)!=null?m:[]).filter(v=>{var O,R,C;const p=n!==null?v.domain===n:!0,E=c.length>0?c.includes((O=v.class)!=null?O:""):!0,H=w.length>0?w.includes((R=v.tier)!=null?R:""):!0,G=j.length>0?j.includes((C=v.nation)!=null?C:""):!0;return p&&E&&H&&G})}if(s){const c=r==null?void 0:r.filter(v=>{var p;return(p=F(v.name))==null?void 0:p.includes(F(s))}),w=r==null?void 0:r.filter(v=>{var p;return(p=v.nickname)==null?void 0:p.includes(s)}),j=r==null?void 0:r.filter(v=>{var p;return(p=v.explain)==null?void 0:p.join(". ").includes(s)});d(Array.from(new Set(c.concat(w,j))))}else d(r)},[b.data,s,n,a,t,e]),o}const re=$.lazy(()=>z(()=>import("./page-cbshK-Sh.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),I="item-modal";function oe(){var h;const{modalAdd:l}=B(),n=se(),{current:a,visibleCount:t,loaderRef:e,LOADER:s}=V(n!=null?n:[]),[b,o]=L(),d=(h=b.get("keyword"))!=null?h:void 0,r=$.useCallback((x,y)=>{let m="",c;switch(y){case"image":m="jc-c",c=g.img(x);break;case"name":m="jc-c ta-c word-break",c=g.name(x,d);break;case"nickname":m="jc-c ta-c word-break",c=g.nickname(x,d);break;case"obtain":m="column ai-fs jc-c",c=g.obtain(x);break;case"class":m="jc-c",c=g.class(x);break;case"type":m="jc-c",c=g.type(x);break;case"explain":c=g.explain(x,d);break;default:m="jc-c ta-c word-break",c=x[y];break}return u.jsx(i,{className:m,children:c})},[d]);return{current:a,renderText:r,data:n,visibleCount:t,LOADER:s,loaderRef:e,gridRowClickHandler:x=>{l({id:I,children:u.jsx(re,{item:x})}),b.set("modal",I),o(b)}}}function de(){const{current:l,renderText:n,data:a=[],visibleCount:t,LOADER:e,loaderRef:s,gridRowClickHandler:b}=oe();return u.jsxs(u.Fragment,{children:[u.jsxs(J,{className:"b1",children:[u.jsx(T,{className:"fwb fcs","data-type":"head",children:A.map(o=>u.jsx(i,{className:"jc-c",children:o.label},`head_${o.value}`))}),l.map((o,d)=>u.jsx(T,{"data-type":"body",onClick:()=>{b(o)},children:A.map(r=>u.jsx($.Fragment,{children:n(o,r.value)},`cell_${o.index}_${o.name}_${r.value}_${d}`))},`row_${o.index}_${o.name}`))]}),a.length>=t&&u.jsx("div",{className:"flex h100 ai-c jc-c",style:{padding:"16px"},ref:l.length>=e?s:void 0,children:u.jsx(D,{})})]})}const me=Object.freeze(Object.defineProperty({__proto__:null,default:de},Symbol.toStringTag,{value:"Module"}));export{N as I,P as N,Q as O,me as d};
