import styled from 'styled-components'

import { LineButton } from '@components/(common)'

export const SearchButton = styled(LineButton).attrs({
  className: 'lh',
  type: 'button',
})`
  padding: 6px 8px;
  height: 36px;
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
