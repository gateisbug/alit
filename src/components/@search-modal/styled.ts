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
    height: 100%;
    padding-left: 16px;

    &::placeholder {
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
`
