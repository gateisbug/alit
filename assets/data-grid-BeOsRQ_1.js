const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/page-D4rmwnUy.js","assets/index-CNK18Yuy.js","assets/index-EHUB-4pU.css","assets/modal-CIK1RlWw.js","assets/modal.style-DmTxabWt.js","assets/useInfiniteGrid-NGielT6q.js","assets/styled-BuNtD9U7.js"])))=>i.map(i=>d[i]);
var T=(l,n,a)=>new Promise((s,e)=>{var t=c=>{try{r(a.next(c))}catch(v){e(v)}},o=c=>{try{r(a.throw(c))}catch(v){e(v)}},r=c=>c.done?s(c.value):Promise.resolve(c.value).then(t,o);r((a=a.apply(l,n)).next())});import{d as h,L as V,j as d,u as E,r as $,_ as K,a as W}from"./index-CNK18Yuy.js";import{L as Y}from"./styled-BuNtD9U7.js";import{P as J,h as N,u as Q,a as X}from"./useInfiniteGrid-NGielT6q.js";const Z=h.div.attrs({className:"flex column"})`
  user-select: none;
`,ee=h.div.attrs({className:"flex"})`
  gap: 16px;
`,ae=h.div.attrs({className:"bb"})`
  box-sizing: border-box;
  flex-grow: 1;
`,le=h(Z)``,i=h(ae).attrs({className:"flex ai-c"})`
  min-height: 64px;
`,P=h(ee)`
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
`,H=h(V)`
  color: var(--primary);
  &:hover {
    text-decoration: underline;
  }
`,R=[{index:"gun",value:"gun",label:"함포"},{index:"gun",value:"dd",label:"구축포"},{index:"gun",value:"cl",label:"경순포"},{index:"gun",value:"ca",label:"중순포"},{index:"gun",value:"bb",label:"전함포"},{index:"gun",value:"cb",label:"대순포"},{index:"torpedo",value:"torpedo",label:"어뢰"},{index:"torpedo",value:"surface",label:"수면어뢰"},{index:"torpedo",value:"submarine",label:"잠수어뢰"},{index:"torpedo",value:"missile",label:"미사일"},{index:"antiair",value:"antiair",label:"대공포"},{index:"antiair",value:"normal",label:"일반"},{index:"antiair",value:"fuse",label:"시한신관"},{index:"aircraft",value:"aircraft",label:"항공기"},{index:"aircraft",value:"fighter",label:"전투기"},{index:"aircraft",value:"bomber",label:"폭격기"},{index:"aircraft",value:"seaplane",label:"수상기"},{index:"aircraft",value:"torpedo-bomber",label:"뇌격기"},{index:"accessory",value:"accessory",label:"설비"},{index:"accessory",value:"back",label:"주력(후열)"},{index:"accessory",value:"front",label:"선봉(전열)"},{index:"accessory",value:"signiture",label:"특수"},{index:"special",value:"special",label:"특수장비"},{index:"special",value:"normal",label:"공용"},{index:"special",value:"signiture",label:"전용"},{index:"gun",value:"normal",label:"통상탄"},{index:"gun",value:"he",label:"고폭탄"},{index:"gun",value:"ap",label:"철갑탄"},{index:"gun",value:"sap",label:"SAP탄"},{index:"gun",value:"type3",label:"삼식탄"},{index:"torpedo",value:"passive",label:"수동"},{index:"torpedo",value:"active",label:"유도"},{index:"aircraft",value:"old",label:"구3대장"},{index:"aircraft",value:"old low",label:"구3대장급"},{index:"aircraft",value:"old over",label:"구3대장↑"},{index:"aircraft",value:"new",label:"3대장"},{index:"aircraft",value:"dogfight",label:"도그파이트"},{index:"aircraft",value:"hornet+material",label:"시호넷 재료"},{index:"aircraft",value:"deprecated",label:"안씀"},{index:"aircraft",value:"rocket",label:"로켓장착"},{index:"aircraft",value:"god",label:"신"},{index:"aircraft",value:"cooldown",label:"사속조절"},{index:"aircraft",value:"normal",label:"일반"},{index:"aircraft",value:"shit",label:"쓰레기"},{index:"aircraft",value:"straight",label:"직선"},{index:"aircraft",value:"focus",label:"핀포인트"},{index:"accessory",value:"back",label:"주력(후열)"},{index:"accessory",value:"front",label:"선봉(전열)"},{index:"accessory",value:"common",label:"공용"},{index:"accessory",value:"signiture",label:"특수"},{index:"accessory",value:"sailing",label:"범선"},{index:"special",value:"dd",label:"구축"},{index:"special",value:"cl",label:"경순"},{index:"special",value:"ca+cb",label:"중·대순"},{index:"special",value:"bb",label:"전함"},{index:"special",value:"ac",label:"항모"},{index:"special",value:"ss",label:"잠수함"}];Object.freeze(R);const G=[{index:"USS",value:"nation",label:"이글"},{index:"HMS",value:"nation",label:"로열"},{index:"IJN",value:"nation",label:"중앵"},{index:"KMS",value:"nation",label:"철혈"},{index:"SMS",value:"nation",label:"철혈"},{index:"ROC",value:"nation",label:"이스트 글림"},{index:"PRAN",value:"nation",label:"이스트"},{index:"SN",value:"nation",label:"북련"},{index:"FFNF",value:"nation",label:"아이리스"},{index:"MNF",value:"nation",label:"비시아"},{index:"RN",value:"nation",label:"사르데냐"},{index:"MOT",value:"nation",label:"템페스타"},{index:"USS",value:"box",label:"크록히드"},{index:"HMS",value:"box",label:"비스커"},{index:"IJN",value:"box",label:"자오중공"},{index:"KMS",value:"box",label:"크라프"},{index:"SMS",value:"box",label:"크라프"},{index:"ROC",value:"box",label:"이스트"},{index:"PRAN",value:"box",label:"이스트"},{index:"SN",value:"box",label:"북련"},{index:"FFNF",value:"box",label:"아이리스"},{index:"MNF",value:"box",label:"비시아"},{index:"RN",value:"box",label:"사르데냐"},{index:"MOT",value:"box",label:"템페스타"},{index:"UNIV",value:"box",label:"전체"}];Object.freeze(G);const ne=[{index:"이벤트",value:"핼러윈의 기우",label:"images/event/Halloween_Hijinks"},{index:"이벤트",value:"템페스타의 비밀 조선소",label:"images/event/Tempesta's_Secret_Shipyard"},{index:"이벤트",value:"허상의 탑",label:"images/event/Virtual_Tower"},{index:"이벤트",value:"템페스타와 젊음의 샘",label:"images/event/Tempesta_and_the_Fountain_of_Youth"},{index:"이벤트",value:"동절의 북해",label:"images/event/Northern_Overture"},{index:"이벤트",value:"새벽녘에 비치는 빙화",label:"images/event/Khorovod_of_Dawn"},{index:"이벤트",value:"어리석은 자의 천칭",label:"images/event/The_Fool's_Scales"},{index:"이벤트",value:"부흥의 찬송가",label:"images/event/Daedalian_Hymn"},{index:"이벤트",value:"결상점작전",label:"images/event/Operation_Convergence"},{index:"이벤트",value:"극지 폭풍",label:"images/event/Frostfall"},{index:"이벤트",value:"디바인 트레지 코미디",label:"images/event/Empyreal_Tragicomedy"},{index:"이벤트",value:"비추는 나선의 경해",label:"images/event/Mirror_Involution"},{index:"이벤트",value:"짙은 자줏빛의 안개",label:"images/event/Violet_Tempest,_Blooming_Lycoris"},{index:"이벤트",value:"깊게 울리는 메아리",label:"images/event/Abyssal_Refrain"},{index:"이벤트",value:"맑고 푸른 바다",label:"images/event/Upon_the_Shimmering_Blue"},{index:"이벤트",value:"모항춘절(2024)",label:"images/event/Spring_Festive_Fiasco"},{index:"이벤트",value:"거듭되는 평행세계",label:"images/event/Parallel_Superimposition"},{index:"이벤트",value:"잿빛 폐허",label:"images/event/Revelations_of_Dust"},{index:"이벤트",value:"모항춘절(2023)",label:"images/event/Happy_Lunar_New_Year_2023"},{index:"이벤트",value:"아이리스의 천사",label:"images/event/Angel_of_the_Iris"},{index:"이벤트",value:"빛나는 정원의 맹세",label:"images/event/Pledge_of_the_Radiant_Court"},{index:"이벤트",value:"영원한 밤의 환광",label:"images/event/Aurora_Noctis"},{index:"이벤트",value:"접해몽화",label:"images/event/Dreamwakers_Butterfly"},{index:"이벤트",value:"빛을 쫓는 별의 바다",label:"images/event/Light-Chasing_Sea_of_Stars"},{index:"이벤트",value:"설경미종",label:"images/event/Snowrealm_Peregrination"},{index:"이벤트",value:"결상점 작전",label:"images/event/Operation_Convergence"},{index:"이벤트",value:"만월이 밝아오기 전에",label:"images/event/Effulgence_Before_Eclipse"},{index:"이벤트",value:"휘광의 성에서 피어나라",label:"images/event/Light_of_the_Martyrium_Event_Banner"},{index:"이벤트",value:"리틀 학원에 어서오세요",label:"images/event/Welcome_to_Little_Academy"},{index:"이벤트",value:"격창의 유니버스",label:"images/event/Universe_in_Unison"},{index:"이벤트",value:"격주의 폴라리스",label:"images/event/Crescendo_of_Polaris"},{index:"이벤트",value:"공명의 패션",label:"images/event/Heart-Linking_Harmony"},{index:"이벤트",value:"철익 경풍",label:"images/event/Windborne_Steel_Wings"},{index:"이벤트",value:"싸워라 로열 메이드 3rd",label:"images/event/Fight_On,_Royal_Maids!_(Part 3)"},{index:"이벤트",value:"제로부터 시작하는 마왕 토벌",label:"images/event/Rising_of_the_Ship_Heroes!"},{index:"이벤트",value:"독수리의 서사곡",label:"images/event/Aquilifer's_Ballade"},{index:"이벤트",value:"오엽각 교차점",label:"images/event/Confluence of Nothingness"},{index:"이벤트",value:"오아시스 옛담",label:"images/event/Reflections_of_the_Oasis"},{index:"이벤트",value:"몽환의 간주곡",label:"images/event/Interlude_of_Illusions"},{index:"이벤트",value:"저편에 핀 꽃의 향기",label:"images/event/Spider_Lily's_Redolence"},{index:"이벤트",value:"저편에 핀 꽃의 향기",label:"images/event/Spider_Lily's_Redolence"},{index:"이벤트",value:"정보 대항 모의 테스트",label:"images/event/Charge!_My_Trusty_Steeds!"},{index:"이벤트",value:"템페스타와 잠든 바다",label:"images/event/Tempesta_and_the_Sleeping_Sea"},{index:"이벤트",value:"새장에 갇힌 신의 빛",label:"images/event/Paradiso_of_Shackled_Light"},{index:"이벤트",value:"높은 탑의 장미",label:"images/event/A_Rose_on_the_High_Tower"},{index:"메인",value:"",label:"images/obtain/campaign"},{index:"상자깡",value:"",label:"images/obtain/techbox"},{index:"장비개발",value:"",label:"images/obtain/gearlab"},{index:"군부연구실",value:"",label:"images/obtain/research"},{index:"코어샵",value:"",label:"images/obtain/coredata"},{index:"수집미션",value:"",label:"images/obtain/collection"},{index:"서브미션",value:"통상파괴",label:"images/obtain/supply_line_disruption"},{index:"서브미션",value:"아카시",label:"images/obtain/akashi"},{index:"건조",value:"",label:"images/obtain/building"},{index:"설계도",value:"",label:"images/obtain/augmentation"},{index:"몰?루",value:"",label:"images/obtain/unknown"}];Object.freeze(ne);const ie=[{label:"아이콘",value:"image"},{label:"장비명",value:"name"},{label:"별명",value:"nickname"},{label:"획득처",value:"obtain"},{label:"국가",value:"nation"},{label:"구분",value:"class"},{label:"종류",value:"type"},{label:"설명",value:"explain"}],A=Object.freeze(ie);function te(l){const n=(()=>{if(l.domain!=="gun")return"default";switch(l.type){case"ap":return"blue";case"he":return"red";case"normal":case"type3":return"yellow";case"sap":return"violet";default:return"default"}})();return d.jsx(J,{path:`images/items/${l==null?void 0:l.image}_x48.webp`,lqip:`images/items/${l==null?void 0:l.image}_lqip.webp`,tier:l.tier,stroke:n})}function oe(l,n){const{name:a=""}=l;return n?N(a,n):a}function se(l,n){var e,t;const{nickname:a=""}=l,s=(t=((e=a==null?void 0:a.length)!=null?e:0)>0?a==null?void 0:a.replace(/,/g,", "):"-")!=null?t:"-";return n?N(s,n):s}function S(l,n){var s,e;const{nation:a}=l;return n==="prefix"?a!=null?a:"ALL":(e=(s=G.find(t=>t.index===a&&t.value===n))==null?void 0:s.label)!=null?e:"전체"}function re(l){const{obtain:n}=l,a=n==null?void 0:n.map(e=>e.split(":")),s=e=>{var t;switch(e==null?void 0:e[0]){case"군부연구실":return`${e==null?void 0:e[0]}: ${(t=e==null?void 0:e[1])!=null?t:"?"}`;case"상자깡":return`${e==null?void 0:e[0]}: ${S(l,"box")}(${e==null?void 0:e[1]})`;case"장비개발":return`${e==null?void 0:e[0]}: ${S(l,"nation")}`;case"이벤트":return`${e==null?void 0:e[1]}`;default:return e==null?void 0:e[0]}};return a==null?void 0:a.map(s).map((e,t,o)=>o.length>2&&e.includes("메인")?null:d.jsx("span",{children:e},e))}function de(l){var e,t;const{domain:n,class:a}=l,s=(t=(e=R.find(o=>o.index===n&&o.value===a))==null?void 0:e.label)!=null?t:"-";return d.jsx(H,{to:`?major=${n}&minor=${a}`,onClick:o=>{o.stopPropagation()},children:s})}function ce(l){var e,t;const{domain:n,type:a}=l,s=(t=(e=R.find(o=>o.index===n&&o.value===a))==null?void 0:e.label)!=null?t:a;return d.jsx(H,{to:`?major=${n}&type=${a}`,onClick:o=>{o.stopPropagation()},children:s})}function ue(l,n){var e;const{explain:a}=l,s=(e=a==null?void 0:a.join(". "))!=null?e:"-";return n?d.jsx("div",{className:"el-2",children:N(s,n)}):d.jsx("div",{className:"el-2",children:a==null?void 0:a.join(". ")})}const _=Object.freeze({img:te,name:oe,nickname:se,obtain:re,nation:S,class:de,type:ce,explain:ue});function F(l){var n;return(n=l==null?void 0:l.toLowerCase().replace(/ /g,""))!=null?n:""}function be(){const[l]=E(),n=l.get("major"),a=l.get("minor"),s=l.get("type"),e=l.get("rarity"),t=l.get("nation"),o=l.get("keyword"),r=Q({queryKey:["alit-item-list"],queryFn:()=>T(this,null,function*(){var f;return(f=yield(yield fetch("json/item.json")).json())!=null?f:[]})}),[c,v]=$.useState([]);return $.useEffect(()=>{var f,x,y,p,m;let u;if(!n&&!a&&!e&&!t&&!s)u=(f=r.data)!=null?f:[];else{const j=(x=a==null?void 0:a.split("_"))!=null?x:[],k=(y=e==null?void 0:e.split("_"))!=null?y:[],w=(p=t==null?void 0:t.split("_"))!=null?p:[],g=s;u=((m=r.data)!=null?m:[]).filter(b=>{var C,O,M,L;const z=n!==null?b.domain===n:!0,B=j.length>0?j.includes((C=b.class)!=null?C:""):!0,D=k.length>0?k.includes((O=b.tier)!=null?O:""):!0,q=w.length>0?w.includes((M=b.nation)!=null?M:""):!0,U=((L=g==null?void 0:g.length)!=null?L:0)>0?g===b.type:!0;return z&&B&&D&&q&&U})}if(o){const j=u==null?void 0:u.filter(g=>{var b;return(b=F(g.name))==null?void 0:b.includes(F(o))}),k=u==null?void 0:u.filter(g=>{var b;return(b=g.nickname)==null?void 0:b.includes(o)}),w=u==null?void 0:u.filter(g=>{var b;return(b=g.explain)==null?void 0:b.join(". ").includes(o)});v(Array.from(new Set(j.concat(k,w))))}else v(u)},[r.data,o,n,a,e,t,s]),c}const xe=$.lazy(()=>K(()=>import("./page-D4rmwnUy.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),I="item-modal";function me(){var f;const{modalAdd:l}=W(),n=be(),{current:a,visibleCount:s,loaderRef:e,LOADER:t}=X(n!=null?n:[]),[o,r]=E(),c=(f=o.get("keyword"))!=null?f:void 0,v=$.useCallback((x,y)=>{let p="",m;switch(y){case"image":p="jc-c",m=_.img(x);break;case"name":p="jc-c ta-c word-break",m=_.name(x,c);break;case"nickname":p="jc-c ta-c word-break",m=_.nickname(x,c);break;case"obtain":p="column ai-fs jc-c",m=_.obtain(x);break;case"class":p="jc-c",m=_.class(x);break;case"type":p="jc-c",m=_.type(x);break;case"explain":m=_.explain(x,c);break;default:p="jc-c ta-c word-break",m=x[y];break}return d.jsx(i,{className:p,children:m})},[c]);return{current:a,renderText:v,data:n,visibleCount:s,LOADER:t,loaderRef:e,gridRowClickHandler:x=>{l({id:I,children:d.jsx(xe,{item:x})}),o.set("modal",I),r(o)}}}function ve(){const{current:l,renderText:n,data:a=[],visibleCount:s,LOADER:e,loaderRef:t,gridRowClickHandler:o}=me();return d.jsxs(d.Fragment,{children:[d.jsxs(le,{className:"b1",children:[d.jsx(P,{className:"fwb fcs","data-type":"head",children:A.map(r=>d.jsx(i,{className:"jc-c",children:r.label},`head_${r.value}`))}),l.map((r,c)=>d.jsx(P,{"data-type":"body",onClick:()=>{o(r)},children:A.map(v=>d.jsx($.Fragment,{children:n(r,v.value)},`cell_${r.index}_${r.name}_${v.value}_${c}`))},`row_${r.index}_${r.name}`))]}),a.length>=s&&d.jsx("div",{className:"flex h100 ai-c jc-c",style:{padding:"16px"},ref:l.length>=e?t:void 0,children:d.jsx(Y,{})})]})}const he=Object.freeze(Object.defineProperty({__proto__:null,default:ve},Symbol.toStringTag,{value:"Module"}));export{R as I,G as N,ne as O,he as d};
