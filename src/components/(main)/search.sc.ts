// noinspection CssUnusedSymbol

import { ModalBody } from '@components/common'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const SearchModalBody = styled(ModalBody)`
  min-width: 40rem; /* 640 */
  max-width: 40rem; /* 640 */

  min-height: 40rem; /* 640 */

  @media (max-width: 658px) {
    min-width: unset;
    max-width: unset;
    width: 100%;
    min-height: 30rem; /* 480 */
  }

  & .kit-scrollview-root {
    padding: 1rem; /* 16 */
  }
`

export const CategoryTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem 0.75rem 1rem; /* 16 24 12 16 */
  font-size: 0.75rem; /* 12 */
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1rem; /* 1.6 */
  color: var(--font-tip);
  box-sizing: border-box;
`

export const SearchItem = styled(Link)`
  color: var(--link);
  display: flex;
  align-items: center;
  cursor: pointer;
  //width: 100%;
  flex-grow: 1;
  height: 2.625rem; /* 42 */
  max-height: 2.625rem; /* 42 */
  font-size: 0.875rem; /* 14 */
  font-weight: 500;
  padding: 0.125rem 0 0.125rem 1rem; /* 2 0 2 16 */
  border-radius: 0.75rem; /* 12 */
  margin-bottom: 0.5rem; /* 8 */
  box-sizing: border-box;
  transition:
    border 150ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (prefers-color-scheme: light) {
    border: 0.0625rem solid #e8eaee80; /* 1 */
    background-color: #f6f7f866;

    &:hover {
      border-color: #ebf5ff99;
      background-color: #66b3ff66;
    }
  }
  @media (prefers-color-scheme: dark) {
    border: 0.0625rem solid #1d2126cc; /* 1 */
    background-color: #14171a80;

    &:hover {
      border-color: #0061c299;
      background-color: #003b7566;
    }
  }
`

export const ClickableKeybutton = styled.button.attrs({
  type: 'button',
})`
  display: block;
  align-self: center;
  cursor: pointer;
  height: 1.5rem; /* 24 */
  margin-right: 0.5rem; /* 8 */
  padding: 0.125rem 0.375rem 0.25rem; /* 2 6 4 */
  font-size: 0;
  border-radius: 0.375rem; /* 6 */

  background-color: var(--shortcut-surface);
  border: 0.0625rem solid var(--shortcut-line); /* 1 */

  &::before {
    color: var(--shortcut-color);
  }

  &::before {
    content: 'esc';
    font-size: 0.75rem; /* 12 */
    font-weight: 700;
  }
`

export const SearchScreen = styled.div`
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem; /* 16 */
  width: 100%;
  padding-bottom: 1rem; /* 16 */
  box-sizing: border-box;

  div[data-search='true'] > & {
    display: none;
  }
  div[data-search='false'] > & {
    display: grid;
  }

  & .category {
    display: flex;
    flex-flow: column;

    &:first-of-type {
      grid-column: 1 / 3;
    }
  }
`

export const SearchBar = styled.header`
  display: flex;
  padding: 0.25rem 0.5rem; /* 4 8 */

  @media (prefers-color-scheme: light) {
    border-bottom: 0.0625rem solid #dfe2e7; /* 1 */
  }
  @media (prefers-color-scheme: dark) {
    border-bottom: 0.0625rem solid #1d2126; /* 1 */
  }

  & .search-form {
    display: flex;
    align-items: center;
    height: 3.5rem; /* 56 */
    padding: 0 0.75rem; /* 12 */
    position: relative;
    width: 100%;

    & > label {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    & > input {
      padding-left: 1rem; /* 16 */
      font-size: 1rem; /* 16 */
      font-weight: 500;

      appearance: none;
      background-color: transparent;
      border: 0;
      color: var(--font-strong);
      flex: 1;
      height: 100%;
      outline: none;
      width: 80%;

      &[type='search']::-webkit-search-cancel-button {
        -webkit-appearance: none;
        appearance: none;
      }
    }
  }
`

export const SearchResult = styled.div`
  flex-flow: column nowrap;
  div[data-search='false'] > & {
    display: none;
  }
  div[data-search='true'] > & {
    display: flex;
  }

  .nodata {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    gap: 1.5rem; /* 24 */
    padding: 3rem 0; /* 48 */
    color: var(--font-strong);

    p:first-child {
      font-size: 4rem; /* 64 */
      line-height: 1.25em; /* 20 */
    }
    p:last-child {
      font-size: 1.25rem; /* 20 */
    }
  }
`
export const ResultItem = styled.div`
  color: var(--link);
  display: flex;
  gap: 1rem; /* 16 */
  align-items: center;
  cursor: pointer;
  flex-grow: 1;
  height: 4rem; /* 64 */
  font-size: 0.875rem; /* 14 */
  font-weight: 500;
  padding: 0.125rem 1rem; /* 2 16 */
  border-radius: 0.75rem; /* 12 */
  margin-bottom: 0.5rem; /* 8 */
  box-sizing: border-box;

  & > span {
    display: flex;
    align-items: center;
    height: 100%;
    overflow-x: hidden;
  }

  @media (prefers-color-scheme: light) {
    border: 0.0625rem solid #e8eaee80; /* 1 */
    background-color: #f6f7f866;

    &:hover {
      border-color: #ebf5ff99;
      background-color: #66b3ff66;
    }
  }
  @media (prefers-color-scheme: dark) {
    border: 0.0625rem solid #1d2126cc; /* 1 */
    background-color: #14171a80;

    &:hover {
      border-color: #0061c299;
      background-color: #003b7566;
    }
  }
`
