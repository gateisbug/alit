import inputStyle from '@parakeet/ui/input.style.ts'
import styled from 'styled-components'

import { Shortcut as UIShortcut } from '@components/(common)/buttons.ts'

export const InputBox = styled.div.attrs({
  className: 'flex ai-c bb',
})`
  gap: 12px;
  width: 100%;
  height: 40px;
  padding: 6px 16px 6px 12px;
  background-color: var(--bc);
  border-radius: 20px;
`

export const Icon = styled.div.attrs({
  className: 'flex ai-c',
})`
  user-select: none;
  height: 20px;
  color: var(--primary);
`

export const InputRoot = styled.input.attrs({
  className: 'b1',
})`
  ${inputStyle};
  width: 100%;

  --input-bc: transparent;
  --input-fc: var(--fc);
  --input-lc: transparent;

  &::placeholder {
    color: var(--fc-w);
  }
`

export const Shortcut = styled(UIShortcut).attrs({
  as: 'span',
})`
  border-radius: 6px;
  padding: 0 4px;
`
