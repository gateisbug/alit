import styled from 'styled-components'

export const ModalBody = styled.div`
  display: flex;
  flex-flow: column nowrap;
  box-sizing: border-box;
  position: relative;

  background-color: ${({ theme }) => theme.surface};
  border-radius: 0.5rem; // 8px
  box-shadow: 0 0.25rem 1rem 0 ${({ theme }) => theme.shadow}; // 0 4px 16px 0

  min-width: 0;
  width: 100%;
  max-height: calc(100vh - 8rem);
  height: fit-content;

  //@media (min-height: 768px) {
  //  height: 40rem;
  //  max-height: 40rem;
  //}

  & > div {
    scrollbar-width: thin;
    scrollbar-color: #6c7c93 transparent;
  }
`
ModalBody.defaultProps = {
  theme: {
    surface: 'var(--surface, #fff)',
    shadow: 'var(--shadow, #00000099)',
  },
}
