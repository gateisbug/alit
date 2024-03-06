import styled from 'styled-components';
import { Button } from '@workspace/ui';

export const ModalContainer = styled.div.attrs({
  className: 'ui-modal-container',
})`
  display: flex;
  flex-flow: column nowrap;
  padding: 1.5rem;
  box-sizing: border-box;
  width: 60rem;
  min-height: 37.5rem;
  position: relative;
`;

export const CloseButton = styled(Button.Root)`
  width: fit-content;
  height: fit-content;
  padding: 0;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  color: var(--font-strong);
  &:not(:disabled):hover {
    color: var(--font);
  }
`;

export const ModalHeader = styled.div.attrs({
  className: 'ui-modal-header',
})`
  display: grid;
  grid-template-columns: 6rem auto;
  grid-template-rows: auto;
  gap: 0 3rem;

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
`;
