import styled from 'styled-components';

import { Button } from '@workspace/ui';

export const ModalContainer = styled.div.attrs({
  className: 'ui-modal-container',
})`
  display: flex;
  flex-flow: column nowrap;
  gap: 3rem;
  padding: 1.5rem;
  box-sizing: border-box;
  position: relative;
  min-height: 37.5rem;
  height: fit-content;
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
})``;
