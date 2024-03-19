import styled from 'styled-components';

import { Button } from '@workspace/ui';

export const ModalContainer = styled.div.attrs({
  className: 'ui-modal-container',
})`
  display: flex;
  flex-flow: column nowrap;
  gap: 2rem;
  padding: 1.5rem;
  box-sizing: border-box;
  position: relative;
  //min-height: fit-content;
  min-height: 37.5rem;
  width: 100%;

  /* @device: MobileL */
  @media (max-width: 425px) {
    padding: 1.5rem 1rem;
  }
`;

export const CloseButton = styled(Button.Root)`
  width: fit-content;
  height: fit-content;
  padding: 0;
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  color: var(--font-strong);
  &:not(:disabled):hover {
    color: var(--font);
  }
`;

// noinspection CssUnusedSymbol
export const ModalHeader = styled.div.attrs({
  className: 'ui-modal-header',
})`
  display: grid;
  grid-template-columns: 6rem auto;
  grid-template-rows: auto;
  //justify-content: center;
  gap: 0 3rem;
  align-items: center;

  .portrait {
    width: 6rem;
    height: 6rem;
    border-width: 0.25rem;
  }
  .section {
    display: flex;
    flex-flow: column nowrap;
    gap: 1rem;
    justify-content: center;
  }
  .title,
  .subtitle {
    line-height: 1em;
  }

  /* @device: Tablet */
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    gap: 1.5rem 0;
    justify-items: center;

    .section {
      align-items: center;
      gap: 0.75rem;
    }
  }
`;

// noinspection CssUnusedSymbol
export const ModalSection = styled.div.attrs({
  className: 'ui-modal-section',
})`
  display: flex;
  flex-flow: column nowrap;
  //padding: 0.5rem;

  &.obtain-nation {
    display: grid;
    min-height: 6rem;
    grid-template-columns: 1fr 8rem;
    gap: 1rem;

    .nation {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      & .ui-imgcard-container {
        border-radius: 0.25rem;
        width: 8rem;
        height: 8rem;
        overflow: hidden;
      }
      & .ui-imgcard-textbox {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        background-color: rgba(var(--hover-surface));
      }
    }
  }
`;
