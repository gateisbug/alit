import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Shortcut as UIShortcut } from '@components/(common)/buttons.ts'

export const ModalHeader = styled.header.attrs({
  className: 'flex ai-c',
})`
  //gap: 16px;
  padding: 4px 8px;
  border-bottom: 1px solid var(--lc);
`

export const ModalSearchForm = styled.div.attrs({
  className: 'flex ai-c pos-r',
})`
  height: 56px;
  padding: 0 12px;
  width: 100%;

  & > label {
    display: block;
    width: 24px;
    height: 24px;
    color: var(--primary);
  }

  & > input {
    appearance: none;
    background-color: transparent;
    border: 0;
    outline: none;
    flex: 1;
    width: 0;
    height: 100%;
    padding-left: 16px;

    &::placeholder {
      font-family:
        Pretendard,
        Inter,
        system-ui,
        -apple-system,
        Segoe UI,
        Roboto,
        Ubuntu,
        Cantarell,
        Noto Sans,
        sans-serif,
        Avenir,
        Helvetica,
        Arial,
        sans-serif;
      color: var(--fc-w);
    }

    &[type='search']::-webkit-search-cancel-button {
      -webkit-appearance: none;
      appearance: none;
    }
  }
`

export const Shortcut = styled(UIShortcut).attrs({
  className: 'fwb caption lh',
})`
  border-radius: 6px;
  height: 24px;
  margin-right: 8px;
  padding: 2px 6px 4px;
`

export const ModalBody = styled.div`
  width: 100%;
  max-width: 640px;
  padding: 16px;
`

export const SearchScreen = styled.div.attrs({
  className: 'ai-fs',
})`
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 16px;
  padding-bottom: 16px;
  box-sizing: border-box;
`

export const CategoryBox = styled.div.attrs({
  className: 'flex column',
})`
  &:first-child {
    grid-column: 1 / -1;
  }

  h3 {
    padding: 16px 24px 12px 16px;
    letter-spacing: 0.1em;
    color: #98a4b3;
  }
`
export const CatrgoryItem = styled(Link).attrs({
  className: 'flex ai-c cur-p bb b2 fwm',
})`
  font-family: inherit;
  color: var(--link);
  flex-grow: 1;
  height: 42px;
  padding: 2px 0 2px 16px;
  border-radius: 12px;
  margin-bottom: 8px;

  transition:
    border 150ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(29, 33, 38, 0.8);
  background-color: rgba(20, 23, 26, 0.5);
  &:hover {
    border-color: rgba(0, 97, 194, 0.6);
    background-color: rgba(0, 59, 117, 0.4);
  }
`

export const SearchResult = styled.div.attrs({
  className: 'column',
})``

export const ResultItem = styled.button.attrs({
  className: 'flex ai-c cur-p b2 fwm bb',
})`
  color: var(--link);
  gap: 16px;
  flex-grow: 1;
  height: 64px;
  padding: 2px 16px;
  border-radius: 12px;
  margin-bottom: 8px;

  & > span {
    overflow-x: hidden;
  }

  transition:
    border 150ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(29, 33, 38, 0.8);
  background-color: rgba(20, 23, 26, 0.5);
  &:hover {
    border-color: rgba(0, 97, 194, 0.6);
    background-color: rgba(0, 59, 117, 0.4);
  }
`
