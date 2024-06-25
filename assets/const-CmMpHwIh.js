import{p as i,M as p}from"./index-JulrNZiT.js";import{B as f}from"./Tooltip-Bfn1PYDW.js";import"./Modal-CrycsAo-.js";import"./ScrollView-NmNW81ec.js";const A=i.section`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  gap: 0.5rem; /* 0 48 */
`,b=i.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;

  &.table-body {
    border-bottom: 0.125rem solid transparent; /* 2 */

    @media (prefers-color-scheme: light) {
      border-color: rgba(0, 0, 0, 0.16);
    }
    @media (prefers-color-scheme: dark) {
      border-color: rgba(255, 255, 255, 0.16);
    }
  }
`,S=i.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 1rem; /* 16 */

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${b} > &[data-type='row'] {
    padding: 0.75rem 0; /* 12 0 */
    border-bottom: 0.0625rem solid transparent; /* 1 */
    cursor: pointer;
    min-width: fit-content;
    width: 100%;
    box-sizing: border-box;
    height: 5.5625rem; /* 89 */

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
`,y=i.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  background-color: transparent;

  line-height: 1.5em;
  text-align: center;

  &[data-type='th'] {
    display: inline-block;
    width: 100%;
  }
  &[data-type='td'] {
    word-break: keep-all;

    &[data-key='explain'],
    &[data-key='obtain'] {
      justify-content: flex-start;
      text-align: start;
    }
  }

  &[data-key='link'] {
    flex-basis: 90px; /* fix */
    min-width: 64px; /* fix */
  }
  &[data-key='name'] {
    flex-basis: 240px; /* fix */
    min-width: 180px; /* fix */
  }
  &[data-key='nickname'] {
    flex-basis: 150px; /* fix */
    min-width: 100px; /* fix */
  }
  &[data-key='obtain'] {
    flex-basis: 240px; /* fix */
    min-width: 168px; /* fix */
  }
  &[data-key='nation'],
  &[data-key='type'],
  &[data-key='class'] {
    flex-basis: 100px; /* fix */
    min-width: 60px; /* fix */
  }
  &[data-key='explain'] {
    flex-basis: 468px; /* fix */
    min-width: 200px; /* fix */
  }

  @media (max-width: 1080px) {
    &[data-key='nation'],
    &[data-key='type'],
    &[data-key='class'] {
      display: none;
    }
  }
  @media (max-width: 860px) {
    &[data-key='obtain'] {
      display: none;
    }
  }
  @media (max-width: 660px) {
    &[data-key='explain'] {
      display: none;
    }
  }
  @media (max-width: 460px) {
    &[data-key='nickname'] {
      display: none;
    }
  }
  @media (max-width: 340px) {
    &[data-key='name'] {
      min-width: 100px; /* fix */
    }
  }
`,R=i.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
`,C=i.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
`,_=i(p)`
  min-width: 60rem; /* 960 */
  max-width: 60rem; /* 960 */
  width: 100%;

  @media (max-width: 980px) {
    min-width: unset;
    max-width: unset;
  }
  @media (max-width: 768px) {
    min-height: 30rem; /* 480 */
  }

  & .modal-container {
    display: flex;
    flex-flow: column nowrap;
    gap: 3rem; /* 48 */
    padding: 1.5rem; /* 24 */
    height: fit-content;
  }
`;i(f.Root)`
  width: fit-content;
  height: fit-content;
  padding: 0;
  position: absolute;
  top: 0.75rem; /* 12 */
  right: 0.75rem; /* 12 */
  color: var(--font-strong);
  &:not(:disabled):hover {
    color: var(--font);
  }
`;const k=i.div`
  display: grid;
  grid-template-columns: 6rem auto; /* 96 auto */
  grid-template-rows: auto;
  gap: 0 3rem; /* 0 48 */
  align-items: center;

  /* @device: Tablet */
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    gap: 1.5rem 0; /* 24 0 */
    justify-items: center;
  }

  .section {
    display: flex;
    flex-flow: column nowrap;
    gap: 1rem; /* 16 */
    justify-content: center;
    line-height: inherit;
  }

  /* @device: Tablet */
  @media (max-width: 768px) {
    .section {
      align-items: center;
      gap: 0.75rem; /* 12 */
    }
  }
`,I=i.div`
  display: grid;
  min-height: 8rem; /* 128 */
  grid-template-columns: 1fr 10rem; /* 1fr 160 */
  gap: 1rem; /* 16 */

  /* @device: Tablet */
  @media (max-width: 768px) {
    grid-template-columns: auto;
    grid-template-rows: auto;
  }

  .obtain {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    gap: 1rem; /* 16 */

    /* @device: Tablet */
    @media (max-width: 700px) {
      flex-flow: column nowrap;
      align-items: center;
    }

    & .imgcard-container {
      width: fit-content;
      & > img {
        max-height: 10rem; /* 160 */
      }
    }
    & .imgcard-textbox {
      padding: 0.75rem; /* 12 */
    }
  }

  .nation {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;

    & .imgcard-container {
      width: 10rem; /* 160 */
      height: 10rem; /* 160 */
      padding: 0.75rem; /* 12 */
    }
  }
`,T=i.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1rem; /* 16 */
  grid-template-rows: auto;

  .keyvalue-container {
    flex: 1 1 20%;
    max-width: 14rem; /* 224 */
  }
  .keyvalue-box {
    width: 100%;
    align-items: center;
  }
  &[data-domain='antiair'] .keyvalue-container {
    flex: 1 1 16%;
  }
  &[data-domain='aircraft'],
  &[data-domain='accessory'] {
    .keyvalue-container {
      flex: 1 1 30%;
    }
  }
  &[data-domain='accessory'] .keyvalue-container {
    max-width: 20rem; /* 320 */
  }

  /* @device: Tablet */
  @media (max-width: 768px) {
    &,
    &[data-domain='antiair'],
    &[data-domain='aircraft'] {
      .keyvalue-container {
        flex: 1 1 25%;
        max-width: 14rem; /* 224 */
      }
    }
    &[data-domain='accessory'] .keyvalue-container {
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
      .keyvalue-container {
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
      .keyvalue-container {
        flex: 1 1 100%;
        max-width: 100%;
      }
    }
  }
`,O=i.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem; /* 8 */
  border-radius: 0.25rem; /* 4 */
  border: 0.0625rem solid var(--border); /* 1 */
  padding: 1rem; /* 16 */
  line-height: 1.125rem; /* 18 */
`,n={ALL:"all",GUN:"gun",TORPEDO:"torpedo",ANTIAIR:"antiair",AIRCRAFT:"aircraft",ACCESSORY:"accessory",SPECIAL:"special"},o={ALL:"전체",GUN:"함포",TORPEDO:"어뢰",ANTIAIR:"대공",AIRCRAFT:"함재기",ACCESSORY:"설비",SPECIAL:"특수"},r={ALL:{},GUN:{DD:{value:"dd",label:"구축포"},CL:{value:"cl",label:"경순포"},CA:{value:"ca",label:"중순포"},BB:{value:"bb",label:"전함포"},CB:{value:"cb",label:"대순포"}},TORPEDO:{SR:{value:"surface",label:"수면어뢰"},SB:{value:"submarine",label:"잠수어뢰"},MS:{value:"missile",label:"미사일"}},ANTIAIR:{NOR:{value:"normal",label:"일반"},FUS:{value:"fuse",label:"시한신관"}},AIRCRAFT:{FA:{value:"fighter",label:"전투기"},BA:{value:"bomber",label:"폭격기"},SA:{value:"seaplane",label:"수상기"},TA:{value:"torpedo-bomber",label:"뇌격기"}},ACCESSORY:{BL:{value:"backline",label:"주력(후열)"},FL:{value:"frontline",label:"선봉(전열)"},SIG:{value:"signiture",label:"특수"}},SPECIAL:{NOR:{value:"normal",label:"공용"},SIG:{value:"signiture",label:"전용"}}};function u(e){switch(e.split(":")[1]){case"핼러윈의 기우":return"Halloween_Hijinks";case"템페스타의 비밀 조선소":return"Tempesta's_Secret_Shipyard";case"허상의 탑":return"Virtual_Tower";case"템페스타와 젊음의 샘":return"Tempesta_and_the_Fountain_of_Youth";case"동절의 북해":return"Northern_Overture";case"새벽녘에 비치는 빙화":return"Khorovod_of_Dawn";case"어리석은 자의 천칭":return"The_Fool's_Scales";case"부흥의 찬송가":return"Daedalian_Hymn";case"결상점 작전":return"Operation_Convergence";case"극지 폭풍":return"Frostfall";case"디바인 트레지 코미디":return"Empyreal_Tragicomedy";case"비추는 나선의 경해":return"Mirror_Involution";case"짙은 자줏빛의 안개":return"Violet_Tempest,_Blooming_Lycoris";case"깊게 울리는 메아리":return"Abyssal_Refrain";case"맑고 푸른 바다":return"Upon_the_Shimmering_Blue";case"모항춘절(2024)":return"Spring_Festive_Fiasco";case"거듭되는 평행세계":return"Parallel_Superimposition";case"잿빛 폐허":return"Revelations_of_Dust";case"모항춘절(2023)":return"Happy_Lunar_New_Year_2023";case"아이리스의 천사":return"Angel_of_the_Iris";case"빛나는 정원의 맹세":return"Pledge_of_the_Radiant_Court";case"새벽의 어둠":return"Darkness_Within_Dawn";case"영원한 밤의 환광":return"Aurora_Noctis";case"접해몽화":return"Dreamwakers_Butterfly";case"빛을 쫓는 별의 바다":return"Light-Chasing_Sea_of_Stars";case"설경미종":return"Snowrealm_Peregrination";case"결상점작전":return"Operation_Convergence";case"만월이 밝아오기 전에":return"Effulgence_Before_Eclipse";case"휘광의 성에서 피어나라":return"Light_of_the_Martyrium_Event_Banner";default:return""}}function N(e){if(e!=null&&e.domain&&(e!=null&&e.class)){if((e==null?void 0:e.domain)===n.GUN)switch(e==null?void 0:e.class){case r.GUN.DD.value:return r.GUN.DD.label;case r.GUN.CL.value:return r.GUN.CL.label;case r.GUN.CA.value:return r.GUN.CA.label;case r.GUN.BB.value:return r.GUN.BB.label;case r.GUN.CB.value:return r.GUN.CB.label;default:return""}else if((e==null?void 0:e.domain)===n.TORPEDO)switch(e==null?void 0:e.class){case r.TORPEDO.SR.value:return r.TORPEDO.SR.label;case r.TORPEDO.SB.value:return r.TORPEDO.SB.label;case r.TORPEDO.MS.value:return r.TORPEDO.MS.label;default:return""}else if((e==null?void 0:e.domain)===n.ANTIAIR)switch(e==null?void 0:e.class){case r.ANTIAIR.NOR.value:return r.ANTIAIR.NOR.label;case r.ANTIAIR.FUS.value:return r.ANTIAIR.FUS.label;default:return""}else if((e==null?void 0:e.domain)===n.AIRCRAFT)switch(e==null?void 0:e.class){case r.AIRCRAFT.FA.value:return r.AIRCRAFT.FA.label;case r.AIRCRAFT.BA.value:return r.AIRCRAFT.BA.label;case r.AIRCRAFT.SA.value:return r.AIRCRAFT.SA.label;case r.AIRCRAFT.TA.value:return r.AIRCRAFT.TA.label;default:return""}else if((e==null?void 0:e.domain)===n.ACCESSORY)switch(e==null?void 0:e.class){case r.ACCESSORY.BL.value:return r.ACCESSORY.BL.label;case r.ACCESSORY.FL.value:return r.ACCESSORY.FL.label;case r.ACCESSORY.SIG.value:return r.ACCESSORY.SIG.label;default:return""}else if((e==null?void 0:e.domain)===n.SPECIAL)switch(e==null?void 0:e.class){case r.SPECIAL.NOR.value:return r.SPECIAL.NOR.label;case r.SPECIAL.SIG.value:return r.SPECIAL.SIG.label;default:return""}}return""}function E(e){if(e!=null&&e.domain&&e.type){if((e==null?void 0:e.domain)==="gun")switch(e.type){case"normal":return"통상탄";case"he":return"고폭탄";case"ap":return"철갑탄";case"sap":return"SAP탄";case"type3":return"삼식탄";default:return""}else if((e==null?void 0:e.domain)==="torpedo")switch(e.type){case"passive":return"수동";case"active":return"유도";default:return""}else if((e==null?void 0:e.domain)==="aircraft")switch(e.type){case"old":return"구3대장";case"old low":return"구3대장↓";case"old over":return"구3대장↑";case"new":return"3대장";case"dogfight":return"도그파이트";case"hornet material":return"시호넷 재료";case"deprecated":return"안씀";case"rocket":return"로켓장착";case"god":return"신";case"cooldown":return"사속조절";case"normal":return"일반";case"shit":return"쓰레기";case"straight":return"직선";case"focus":return"핀포인트";default:return""}else if((e==null?void 0:e.domain)==="accessory")switch(e.type){case"bb":return"전함";case"ac":return"항모";case"normal":return"범용";case"asw":return"대잠";case"ss":return"잠수함";case"maritime":return"운송";case"repair":return"공작";default:return""}else if((e==null?void 0:e.domain)==="special")switch(e.type){case"dd":return"구축";case"cl":return"경순";case"ca&cb":return"중·대순";case"bb":return"전함";case"ac":return"항모";case"ss":return"잠수";default:return""}}return""}function l(e,s){if(s==="nation")switch(e){case"USS":return"이글";case"HMS":return"로열";case"IJN":return"중앵";case"KMS":case"SMS":return"철혈";case"ROC":case"PRAN":return"이스트";case"SN":return"북련";case"FFNF":case"MNF":return"엘랑";case"RN":return"사르데냐";case"MOT":return"템페스타";default:return"전체"}if(s==="box")switch(e){case"USS":return"크록히드";case"HMS":return"비스커";case"IJN":return"자오중공";case"KMS":case"SMS":return"크라프";case"ROC":case"PRAN":return"이스트";case"SN":return"북련";case"FFNF":case"MNF":return"아이리스";case"RN":return"사르데냐";case"MOT":return"템페스타";default:return"전체"}return e}function F(e){var a;const s=(a=e==null?void 0:e.obtain)==null?void 0:a.map(t=>t.split(":")),d=t=>{switch(t[0]){case"군부연구실":return`${t[0]}: ${t[1]??"?"}`;case"상자깡":return`${t[0]}: ${l(e==null?void 0:e.nation,"box")}(${t[1]})`;case"장비개발":return`${t[0]}: ${l(e==null?void 0:e.nation,"nation")}`;case"이벤트":return`${t[1]}`;default:return t[0]}};return s==null?void 0:s.map(d)}function L(e){switch(e){case n.GUN:return o.GUN;case n.TORPEDO:return o.TORPEDO;case n.ANTIAIR:return o.ANTIAIR;case n.AIRCRAFT:return o.AIRCRAFT;case n.ACCESSORY:return o.ACCESSORY;case n.SPECIAL:return o.SPECIAL;default:return""}}function B(e){const s=e==null?void 0:e.obtain;return s?s.map(d=>{const a=d.split(":");if(a[0]==="이벤트")return{img:`images/event/${u(d)}.png`,obtain:a[0],label:a[1]};let t="",m=a[0],c=a[1];switch(a[0]){case"메인":t="campaign",c=a[1].split(",").join(", ");break;case"상자깡":t="techbox",m+=`(${l(e==null?void 0:e.nation,"box")})`;break;case"장비개발":t="gearlab",c=l(e==null?void 0:e.nation,"nation")??"";break;case"군부연구실":t="research";break;case"코어샵":t="coredata";break;case"수집미션":t="collection";break;case"서브미션":t=a[1].includes("통상파괴")?"supply_line_disruption":"akashi";break;case"건조":t="building",c=a[1].split(",").join(", ");break;case"설계도":t="augmentation";break;default:c="unknown"}return{img:`images/obtain/${t}.png`,obtain:m,label:c}}):[]}export{b as B,A as C,C as E,_ as I,k as M,I as O,S as R,T as S,R as W,y as a,B as b,N as c,L as d,O as e,l as n,F as o,E as t};
