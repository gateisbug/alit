// noinspection CssUnusedSymbol

import styled from 'styled-components';

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
    height: 2.625rem; // 42px;
    max-height: 2.625rem; // 42px;
    font-size: 0.875rem; // 14px;
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

export const SearchBar = styled.header`
  display: flex;
  border-bottom: 1px solid #dfe2e7;
  padding: 4px 8px;
  
  & .search-form {
    display: flex;
    align-items: center;
    height: 56px;
    padding: 0 12px;
    position: relative;
    width: 100%;
    
    & > label {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    & > input {
      padding-left: 1rem;
      font-size: 1rem;
      font-weight: 500;
      
      appearance: none;
      background-color: transparent;
      border: 0;
      color: var(--font-strong);
      flex: 1;
      height: 100%;
      outline: none;
      width: 80%;
      
      &[type="search"]::-webkit-search-cancel-button {
        -webkit-appearance: none;
        appearance: none;
      }
    }
  }
  
  & .search-cancel {
    display: block;
    align-self: center;
    cursor: pointer;
    height: 1.5rem;
    margin-right: 8px;
    padding: 2px 6px 4px;
    font-size: 0;
    border-radius: 6px;

    &::before {
      content: "esc";
      font-size: 0.75rem;
      font-weight: 700;
    }
    
    @media (prefers-color-scheme: light) {
      background-color: #F6F7F8;
      border: 1px solid #DFE2E7;
      &::before {
        color: #303741;
      }
    }
    @media (prefers-color-scheme: dark) {
      background-color: #14171A;
      border: 1px solid #303840;
      &::before {
        color: #b6bec9;
      }
    }        
  }
`