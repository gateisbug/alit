import { UIButton } from '@ui'
import styled from 'styled-components'

export const LineButton = styled(UIButton)`
  border-width: 1px;
  border-style: solid;
  border-radius: 12px;
  
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

  padding: 8px;
`