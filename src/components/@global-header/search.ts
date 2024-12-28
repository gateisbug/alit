import buttonStyle from '@parakeet/ui/button.style.ts'
import inputStyle from '@parakeet/ui/input.style.ts'
import styled from 'styled-components'

import { Shortcut as UIShortcut } from '@components/(common)/buttons.ts'

export const InputBox = styled.div.attrs({
  className: 'flex ai-c bb',
})`
  gap: 4px;
  width: 100%;
  height: 40px;
  padding: 6px 16px 6px 12px;
  background-color: var(--bc);
  border-radius: 20px;

  box-shadow: 0 1px 8px 0 rgba(32, 33, 36, 0.16);
  //box-shadow: 8px 12px 32px 0 rgba(0, 0, 51, 0.16);
`

export const Icon = styled.div.attrs({
  className: 'flex ai-c',
})`
  user-select: none;
  height: 20px;
  color: var(--primary);
`

export const IconButton = styled.button`
  ${buttonStyle};
  width: 22px;
  height: 22px;
  //color: var(--primary);
`

export const InputRoot = styled.input.attrs({
  className: 'b1',
})`
  ${inputStyle};
  width: 100%;
  padding: 0 8px;

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
