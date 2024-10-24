import { UIModalClose } from '@xui/modal.ts'
import styled from 'styled-components'

import IconClose from '@assets/icons/icon-close.tsx'

export const ModalClose = styled(UIModalClose).attrs({
  'aria-label': 'Close',
  children: <IconClose />,
})``
