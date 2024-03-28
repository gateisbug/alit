import styled from 'styled-components';

import { ImageCard } from '@components';

import { nationSplit } from '@domain/Item/funcs';

import { ModalSection } from './styled';

// noinspection CssUnusedSymbol
const ObtainSection = styled(ModalSection)`
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
      transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
      opacity: 0;
    }
  }
`;

interface Props {
  selectedItem?: ItemInterface;
}

const ModalObtain = ({ selectedItem }: Props) => {
  return (
    <ObtainSection className='obtain-nation'>
      <div className='obtain'>
        {obtainDelimiter(selectedItem).map((v, i) => (
          <ImageCard
            key={`${selectedItem?.index}_${v.obtain}_${i}`}
            src={v.img}
          >
            <div className='obtain-value fzs fwb'>{v.obtain}</div>
            <div className='obtain-label fzs fws'>{v.label}</div>
          </ImageCard>
        ))}
      </div>

      <div className='nation'>
        <ImageCard
          src={`images/nation/${selectedItem?.nation?.toLowerCase()}.png`}
        >
          <span className='fcs fzs fwb'>
            {nationSplit(selectedItem?.nation, 'nation')}
          </span>
        </ImageCard>
      </div>
    </ObtainSection>
  );
};

export default ModalObtain;

type ObtainType = {
  img: string;
  obtain: string;
  label: string;
};
function obtainDelimiter(value?: ItemInterface): ObtainType[] {
  const obtain = value?.obtain;
  if (!obtain) return [];

  return obtain.map((v) => {
    const e = v.split(':');
    if (e[0] === '이벤트') {
      return {
        img: `images/event/${eventDelimiter(v)}.png`,
        obtain: e[0],
        label: e[1],
      };
    } else {
      let img = '';
      let obtain = e[0];
      let label = e[1];
      switch (e[0]) {
        case '메인':
          img = 'campaign';
          label = e[1].split(',').join(', ');
          break;
        case '상자깡':
          img = 'techbox';
          obtain += `(${nationSplit(value?.nation, 'box')})`;
          break;
        case '장비개발':
          img = 'gearlab';
          label = nationSplit(value?.nation, 'nation') ?? '';
          break;
        case '군부연구실':
          img = 'research';
          break;
        case '코어샵':
          img = 'coredata';
          break;
        case '수집미션':
          img = 'collection';
          break;
        case '서브미션':
          img = e[1].includes('통상파괴') ? 'supply_line_disruption' : 'akashi';
          break;
        case '건조':
          img = 'building';
          label = e[1].split(',').join(', ');
          break;
        case '설계도':
          img = 'augmentation';
          break;
      }
      return {
        img: `images/obtain/${img}.png`,
        obtain,
        label,
      };
    }
  });
}

function eventDelimiter(events: string) {
  switch (events.split(':')[1]) {
    case '핼러윈의 기우':
      return 'Halloween_Hijinks';
    case '템페스타의 비밀 조선소':
      return "Tempesta's_Secret_Shipyard";
    case '허상의 탑':
      return 'Virtual_Tower';
    case '템페스타와 젊음의 샘':
      return 'Tempesta_and_the_Fountain_of_Youth';
    case '동절의 북해':
      return 'Northern_Overture';
    case '새벽녘에 비치는 빙화':
      return 'Khorovod_of_Dawn';
    case '어리석은 자의 천칭':
      return "The_Fool's_Scales";
    case '부흥의 찬송가':
      return 'Daedalian_Hymn';
    case '결상점 작전':
      return 'Operation_Convergence';
    case '극지 폭풍':
      return 'Frostfall';
    case '디바인 트레지 코미디':
      return 'Empyreal_Tragicomedy';
    case '비추는 나선의 경해':
      return 'Mirror_Involution';
    case '짙은 자줏빛의 안개':
      return 'Violet_Tempest,_Blooming_Lycoris';
    case '깊게 울리는 메아리':
      return 'Abyssal_Refrain';
    case '맑고 푸른 바다':
      return 'Upon_the_Shimmering_Blue';
    case '모항춘절(2024)':
      return 'Spring_Festive_Fiasco';
    case '거듭되는 평행세계':
      return 'Parallel_Superimposition';
    case '잿빛 폐허':
      return 'Revelations_of_Dust';
    case '모항춘절(2023)':
      return 'Happy_Lunar_New_Year_2023';
    case '아이리스의 천사':
      return 'Angel_of_the_Iris';
    case '빛나는 정원의 맹세':
      return 'Pledge_of_the_Radiant_Court';
    case '새벽의 어둠':
      return 'Darkness_Within_Dawn';
    case '영원한 밤의 환광':
      return 'Aurora_Noctis';
    case '접해몽화':
      return 'Dreamwakers_Butterfly';
    case '빛을 쫓는 별의 바다':
      return 'Light-Chasing_Sea_of_Stars';
    case '설경미종':
      return 'Snowrealm_Peregrination';
    case '결상점작전':
      return 'Operation_Convergence';
    case '만월이 밝아오기 전에':
      return 'Effulgence_Before_Eclipse';
    default:
      return '';
  }
}
