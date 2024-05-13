import styled from 'styled-components';

// noinspection CssUnusedSymbol
export const ModalBody = styled.div`
  display: flex;
  flex-flow: column nowrap;
  //padding: 1.5rem;
  box-sizing: border-box;
  position: relative;
  min-width: 40rem;
  min-height: 37.5rem;
  max-height: 37.5rem;

  /* @device: MobileL */
  @media (max-width: 425px) {
    padding: 1.5rem 1rem;
  }

  & .kit-scrollview-root {
    padding: 1rem;
    scrollbar-width: thin;
    scrollbar-color: #6c7c93 transparent;
  }
`;

// export const CloseButton = styled(Button.Root)`
//   width: fit-content;
//   height: fit-content;
//   padding: 0.25rem;
//   position: absolute;
//   top: 0.75rem;
//   right: 0.75rem;
//   border-radius: 0.75rem;
//
//   &:not(:disabled):hover {
//     background-color: var(--border-weak);
//   }
// `;

// noinspection CssUnusedSymbol
export const SearchScreen = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
  padding-bottom: 1rem;
  box-sizing: border-box;
  
  & .category {
    display: flex;
    flex-flow: column;
    
    &:first-of-type {
      grid-column: 1 / 3;
    }
  }
  
  & .category-title {
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem 0.75rem 1rem;
    font-size: 0.6875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: var(--font-tip);
    box-sizing: border-box;
  }
  
  & .search-item {
    color: var(--link);
    display: flex;
    align-items: center;
    cursor: pointer;
    //width: 100%;
    flex-grow: 1;
    height: 2.625rem;
    max-height: 2.625rem;
    font-size: 0.875rem;
    font-weight: 500;
    padding: 2px 0 2px 16px;
    border-radius: 12px;
    margin-bottom: 0.5rem;
    box-sizing: border-box;
    
    @media (prefers-color-scheme: light) {
      border: 1px solid #e8eaee80;
      background-color: #f6f7f866;

      &:hover {
        border-color: #ebf5ff;
        background-color: #66b3ff;
      }
    }
    @media (prefers-color-scheme: dark) {
      border: 1px solid #1d2126cc;
      background-color: #14171a80;

      &:hover {
        border-color: #0061c299;
        background-color: #003b7566;
      }
    }
  }
`;