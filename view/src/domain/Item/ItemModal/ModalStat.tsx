import styled from 'styled-components';

import { KeyValue } from '@components';

import { ModalSection } from './styled';

const StatSection = styled(ModalSection)`
  display: grid;
  grid-template-columns: repeat(8, auto);
  gap: 1rem;
  grid-template-rows: auto;
`;

interface Props {
  selectedItem?: ItemInterface;
}

const ModalStat = ({ selectedItem }: Props) => {
  return (
    <StatSection className='stat'>
      {selectedItem?.status?.map((v, i) => {
        const item = v.split(':');
        return (
          <KeyValue key={`modal_stat_${i}`} label={item[0]} value={item[1]} />
        );
      })}
    </StatSection>
  );
};

export default ModalStat;
