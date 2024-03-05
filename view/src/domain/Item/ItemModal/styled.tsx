import styled from 'styled-components';

export const ModalContainer = styled.div.attrs({
  className: 'ui-modal-container',
})`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  padding: 1.5rem;
  box-sizing: border-box;
  width: 60rem;
  min-height: 37.5rem;
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
  .title {
    font-size: 1.25rem;
    line-height: 1em;
  }
  .subtitle {
    font-size: 1rem;
    line-height: 1em;
  }
`;
