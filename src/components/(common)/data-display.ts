import { UIBadge } from '@xui/badge.ts'
import styled from 'styled-components'

export const Badge = styled(UIBadge)`
  --badge-bc: #fd5361;

  width: 8px;
  height: 8px;
  border-radius: 50%;

  top: 0;
  right: 0;
  //transform: translate(50%, -50%);

  transition: transform 150ms ease-in-out;
  &[data-show='true'] {
    transform: scale(1);
  }
  &[data-show='false'] {
    transform: scale(0);
  }
`
