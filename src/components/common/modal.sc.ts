import styled from 'styled-components'

export const ModalBody = styled.div`
  display: flex;
  flex-flow: column nowrap;
  box-sizing: border-box;
  position: relative;

  min-width: 0;
  width: 100%;
  height: calc(100vh - 8rem);
  max-height: calc(100vh - 8rem);

  @media (min-height: 768px) {
    height: 40rem;
    max-height: 40rem;
  }

  & > div {
    scrollbar-width: thin;
    scrollbar-color: #6c7c93 transparent;
  }
`
