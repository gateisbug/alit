import styled from 'styled-components'

export const ModalBody = styled.div`
  display: flex;
  flex-flow: column nowrap;
  box-sizing: border-box;
  position: relative;
  min-width: 40rem;
  height: calc(100vh - 6rem);
  max-height: calc(100vh - 6rem);

  ///* @device: MobileL */
  //@media (max-width: 425px) {
  //  padding: 1.5rem 1rem;
  //}

  & > div {
    scrollbar-width: thin;
    scrollbar-color: #6c7c93 transparent;
  }
`
