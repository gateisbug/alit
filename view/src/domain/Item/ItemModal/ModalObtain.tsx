import styled from 'styled-components';

import { ImageCard } from '@components';

import { nationSplit } from '@domain/Item/funcs';

export const ModalSection = styled.div.attrs({
  className: 'ui-modal-section',
})`
  display: grid;
  min-height: 8rem;
  grid-template-columns: 1fr 8rem;
  gap: 1rem;

  /* @device: Tablet */
  @media (max-width: 768px) {
    grid-template-columns: auto;
    grid-template-rows: auto;
  }

  .nation {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;

    & .ui-imgcard-container {
      border-radius: 0.25rem;
      width: 8rem;
      height: 8rem;
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
      background-color: rgba(var(--hover-surface));
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
    <ModalSection className='obtain-nation'>
      <div className='obtain'>
        {selectedItem?.obtain?.map((v, i) => (
          <ImageCard key={`${selectedItem?.index}_${v}_${i}`} src='#'>
            <span>{v}</span>
          </ImageCard>
        ))}
      </div>

      <div className='nation'>
        <ImageCard
          src={`images/nation/${selectedItem?.nation?.toLowerCase()}.png`}
        >
          <span className='fcs fzs'>
            {nationSplit(selectedItem?.nation, 'nation')}
          </span>
        </ImageCard>
      </div>
    </ModalSection>
  );
};

export default ModalObtain;
