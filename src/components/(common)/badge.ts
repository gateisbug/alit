import badgeStyle from '@parakeet/ui/badge.style.ts'
import styled from 'styled-components'

export const Badge = styled.span`
  ${badgeStyle};
  --badge-bc: #fd5361;

  width: 8px;
  height: 8px;
  border-radius: 50%;

  top: 0;
  right: 0;

  //transition: transform 150ms ease-in-out;
  &[data-show='true'] {
    transform: scale(1);
  }
  &[data-show='false'] {
    transform: scale(0);
  }
`
