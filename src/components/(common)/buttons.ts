import ButtonStyle from '@parakeet/ui/button.style.ts'
import styled from 'styled-components'

export const LineButton = styled.button`
  ${ButtonStyle};

  --button-bc: transparent;
  --button-fc: var(--primary);
  --button-lc: var(--lc-w);

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      --button-fc: var(--primary-hover);
      --button-lc: var(--lc);
      --button-bc: var(--lc-w);
    }
  }
  &:disabled {
    --button-fc: var(--primary);
  }

  border-width: 1px;
  border-style: solid;
  border-radius: 12px;
  padding: 8px;
`

export const Shortcut = styled.button.attrs({
  className: 'caption fwb',
})`
  ${ButtonStyle};

  --button-bc: #14171a;
  --button-fc: #b6bec9;
  --button-lc: #303840;

  border-width: 1px;
  border-style: solid;
`
