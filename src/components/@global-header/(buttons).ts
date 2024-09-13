import styled from 'styled-components'

import {
  LineButton,
  Shortcut as UIShortcut,
} from '@components/(common)/buttons.ts'

// noinspection CssUnusedSymbol
export const SearchButton = styled(LineButton).attrs({
  className: 'lh',
  type: 'button',
})`
  padding: 6px;
  height: 36px;
  gap: 6px;

  @media (max-width: 768px) {
    .desktop {
      display: none;
    }
  }

  .span {
    min-width: 45px;
  }
  .shortcut {
    min-width: 46px;
  }
`

export const LinkButton = styled(LineButton).attrs({
  as: 'a',
  rel: 'noopener noreferrer',
  target: '_blank',
})`
  height: 36px;
  padding: 6px;
`

export const BadgeButton = styled(LineButton).attrs({
  as: 'div',
  className: 'pos-r',
})`
  height: 36px;
  padding: 6px;
`

export const Shortcut = styled(UIShortcut).attrs({
  as: 'span',
})`
  border-radius: 6px;
  padding: 0 4px;
`
