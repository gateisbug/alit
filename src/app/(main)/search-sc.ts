import styled from 'styled-components';

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
