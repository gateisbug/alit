// noinspection CssUnusedSymbol

import { ModalBody } from '@components/common'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const SearchModalBody = styled(ModalBody)`
  min-width: 40rem;
  max-width: 40rem;

  min-height: 40rem;

  @media (max-width: 658px) {
    min-width: unset;
    max-width: unset;
    width: 100%;
  }

  & .kit-scrollview-root {
    padding: 1rem;
  }
`

export const CategoryTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem 0.75rem 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
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
  height: 2.625rem; // 42px;
  max-height: 2.625rem; // 42px;
  font-size: 0.875rem; // 14px;
  font-weight: 500;
  padding: 2px 0 2px 16px;
  border-radius: 12px;
  margin-bottom: 0.5rem;
  box-sizing: border-box;
  transition:
    border 150ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);

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
`

export const ClickableKeybutton = styled.button.attrs({
  type: 'button',
})`
  display: block;
  align-self: center;
  cursor: pointer;
  height: 1.5rem;
  margin-right: 8px;
  padding: 2px 6px 4px;
  font-size: 0;
  border-radius: 6px;

  background-color: var(--shortcut-surface);
  border: 1px solid var(--shortcut-line);

  &::before {
    color: var(--shortcut-color);
  }

  &::before {
    content: 'esc';
    font-size: 0.75rem;
    font-weight: 700;
  }
`

export const SearchScreen = styled.div`
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
  padding-bottom: 1rem;
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
  padding: 4px 8px;

  @media (prefers-color-scheme: light) {
    border-bottom: 1px solid #dfe2e7;
  }
  @media (prefers-color-scheme: dark) {
    border-bottom: 1px solid #1d2126;
  }

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
    gap: 1.5rem;
    padding: 3rem 0;
    color: var(--font-strong);

    p:first-child {
      font-size: 4rem;
      line-height: 1.25em;
    }
    p:last-child {
      font-size: 1.25rem;
    }
  }
`
export const ResultItem = styled.div`
  color: var(--link);
  display: flex;
  gap: 1rem;
  align-items: center;
  cursor: pointer;
  flex-grow: 1;
  height: 64px; // 42px;
  font-size: 0.875rem; // 14px;
  font-weight: 500;
  padding: 2px 16px;
  border-radius: 12px;
  margin-bottom: 0.5rem;
  box-sizing: border-box;

  & > span {
    display: flex;
    align-items: center;
    height: 100%;
    overflow-x: hidden;
  }

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
`
