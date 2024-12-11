import { modalClose } from '@parakeet/ui/modal.style.ts'
import styled from 'styled-components'

import IconClose from '@assets/icons/icon-close.tsx'

export const ModalClose = styled.button.attrs({
  'aria-label': 'Close',
  children: <IconClose />,
})`
  ${modalClose};
`
