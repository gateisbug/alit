import styled from 'styled-components';

import { ModalSection } from './styled';

const ExplainSection = styled(ModalSection).attrs({
  className: 'status-explains',
})`
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;
  border-radius: 0.25rem;
  border: 0.0625rem solid var(--border);
  padding: 1rem;
  line-height: 1.125rem;
`;

interface Props {
  selectedItem?: ItemInterface;
}

const ModalExplain = ({ selectedItem }: Props) => {
  return (
    <ExplainSection>
      {(selectedItem?.explain?.length ?? 0) > 0
        ? selectedItem?.explain?.map((v, i) => <p key={i}>{v}</p>)
        : '0v0'}
    </ExplainSection>
  );
};

export default ModalExplain;
