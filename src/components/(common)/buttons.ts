import { UIButton } from '@ui'
import styled from 'styled-components'

export const LineButton = styled(UIButton)`
  --button-bc: transparent;
  --button-fc: var(--primary);
  --button-lc: var(--lc-w);
  &:hover {
    --button-fc: var(--primary-hover);
    --button-lc: var(--lc);
    --button-bc: var(--lc-w);
  }
  &:disabled {
    --button-fc: var(--primary);
  }
  
  border-width: 1px;
  border-style: solid;
  border-radius: 12px;
  padding: 8px;
`

export const Shortcut = styled(UIButton).attrs({
  className: 'caption fwb'
})`
  --button-bc: #14171a;
  --button-fc: #b6bec9;
  --button-lc: #303840;
  
  border-width: 1px;
  border-style: solid;
`