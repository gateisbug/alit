import styled from 'styled-components'

import { LineButton } from '@components/(common)/buttons.ts'

export const LinkButton = styled(LineButton).attrs({
  as: 'a',
  rel: 'noopener noreferrer',
  target: '_blank',
})`
  height: 36px;
  padding: 5px;
`

export const BadgeButton = styled(LineButton).attrs({
  className: 'pos-r',
})`
  height: 36px;
  padding: 5px;
`

export const ActionButton = styled(LineButton).attrs({
  className: 'pos-r',
})`
  height: 36px;
  padding: 5px;
`
