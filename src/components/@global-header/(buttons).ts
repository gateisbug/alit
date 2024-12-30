import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { LineButton } from '@components/(common)/buttons.ts'

export const ExternLinkButton = styled(LineButton).attrs({
  as: 'a',
  rel: 'noopener noreferrer',
  target: '_blank',
})`
  //--button-fc: var(--link);
  //
  //@media (hover: hover) and (pointer: fine) {
  //  &:hover {
  //    --button-fc: var(--link);
  //  }
  //}

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

export const LinkButton = styled(LineButton).attrs({
  as: Link,
})`
  height: 36px;
  padding: 5px;
`
