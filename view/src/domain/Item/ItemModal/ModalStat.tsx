import styled from 'styled-components';

import { KeyValue } from '@components';

import { ModalSection } from './styled';

// noinspection CssUnusedSymbol
const StatSection = styled(ModalSection)`
  //display: grid;
  //grid-template-columns: repeat(8, auto);
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1rem;
  grid-template-rows: auto;

  .ui-keyvalue-container {
    flex-basis: fit-content;
    flex-grow: 1;
    //max-width: 138px;

    //&.skill {
    //  flex-basis: fit-content;
    //  flex-grow: 0;
    //  width: fit-content;
    //  .ui-keyvalue-box {
    //    width: 100%;
    //  }
    //  max-width: none;
    //}
  }
  .ui-keyvalue-box {
    width: 100%;
    align-items: center;
  }
`;

interface Props {
  selectedItem?: ItemInterface;
}

const ModalStat = ({ selectedItem }: Props) => {
  return (
    <StatSection className='stat'>
      {selectedItem?.status?.map((v, i) => {
        const item = v.split(':');
        const value = statDelimiter(item);
        return (
          <KeyValue
            key={`modal_stat_${i}`}
            // className={v.includes('스킬') ? 'skill' : undefined}
            label={item[0]}
            value={value}
          />
        );
      })}
    </StatSection>
  );
};

export default ModalStat;

// const AP = styled.div`
//   span:nth-child(1) {
//     color: #e4002b;
//   }
//   span:nth-child(3) {
//     color: #f3e500;
//   }
//   span:nth-child(5) {
//     color: #0047bb;
//   }
//   span:nth-child(2),
//   span:nth-child(4) {
//     margin: 0.25rem;
//   }
// `;

function statDelimiter(value: string[]) {
  switch (value[0]) {
    case '스탯':
    case '스킬':
      return value[1].replace(/,/g, ', ');
    case '대미지':
    case '발사패턴':
    case '기총':
    case '폭장':
    case '어뢰':
    case '로켓':
      return value[1].replace(/\*/g, ' × ');
    case '사속':
    case '발사간격':
      return value[1].replace(/초/g, ' 초');
    // case '대갑비례':
    //   return (
    //     <AP>
    //       {value[1].split(' / ').map((v, i) => (
    //         <Fragment key={v}>
    //           <span>{v}</span>
    //           {i < 2 && <span>/</span>}
    //         </Fragment>
    //       ))}
    //     </AP>
    //   );
    default:
      return value[1];
  }
}
