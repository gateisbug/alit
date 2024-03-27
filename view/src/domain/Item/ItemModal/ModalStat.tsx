import styled from 'styled-components';

import { KeyValue, Tooltip } from '@components';

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
`;

interface Props {
  selectedItem?: ItemInterface;
}

const ModalStat = ({ selectedItem }: Props) => {
  return (
    <StatSection className='stat' data-domain={selectedItem?.domain}>
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

const Aircraft = styled.span`
  text-decoration: underline;
`;
const State = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;
  padding: 0.5rem;
  background-color: rgba(97, 97, 97, 0.92);
  border-radius: 0.25rem;
  z-index: 1;
`;

function aircraftRender(value: string) {
  const [string, damage, ap] = value.split('\\t');
  const [weapon, count] = string.split('*');

  const title = ap ? (
    <State>
      <div>대미지: {damage}</div>
      <div>관통: {ap.replace(/\//g, ' / ')}</div>
    </State>
  ) : (
    <State>대미지: {damage}</State>
  );

  return (
    <>
      <Tooltip title={title}>
        <Aircraft>{weapon}</Aircraft>
      </Tooltip>
      <>&nbsp;× {count}</>
    </>
  );
}

function statDelimiter(value: string[]) {
  switch (value[0]) {
    case '스탯':
    case '스킬':
      return value[1].replace(/,/g, ', ');
    case '대미지':
    case '발사패턴':
      return value[1].replace(/\*/g, ' × ');
    case '기총':
    case '폭장':
    case '어뢰':
    case '로켓':
      return aircraftRender(value[1]);
    case '사속':
    case '발사간격':
      return value[1].replace(/초/g, ' 초');
    case '대갑비례':
      return value[1].replace(/\//g, ' / ');
    default:
      return value[1];
  }
}
