import styled from 'styled-components';

import { ImageCard } from '@components';

import { nationSplit, obtainDelimiter } from '@domain/Item/funcs';

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

  .obtain {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    gap: 1rem;

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
      color: #101418;
      transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
      opacity: 0;
    }

    & .ui-imgcard-image {
      max-height: 128px;
    }
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
        {obtainDelimiter(selectedItem).map((v, i) => (
          <ImageCard
            key={`${selectedItem?.index}_${v.obtain}_${i}`}
            src={v.img}
          >
            <div className='obtain-value fzs fwm'>{v.obtain}</div>
            <div className='obtain-label fzs fwm'>{v.label}</div>
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
