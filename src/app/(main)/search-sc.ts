import styled from 'styled-components';

import { Button } from '@ui';

export const ModalBody = styled.div`
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
  padding: 0.25rem;
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  border-radius: 0.75rem;
  
  &:not(:disabled):hover {
    background-color: var(--border-weak);
  }
`;