import {
  UIModalClose,
  UIModalContainer,
  IModalUIProps,
  UIBackdrop,
  useModal,
} from '@xui/modal.ts'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

import { IconClose } from '@assets/icons'

export const ModalClose = styled(UIModalClose).attrs({
  children: <IconClose />,
})``

export const ModalContainer = styled(UIModalContainer)`
  --modal-surface: var(--surface-main);
`

export default function Modal({ open, onClickAway, children }: IModalUIProps) {
  const { backdropRef, modelOnClickAway } = useModal({ open, onClickAway })

  return open
    ? createPortal(
        <UIBackdrop ref={backdropRef} onClick={modelOnClickAway}>
          {children}
        </UIBackdrop>,
        document.body,
      )
    : null
}
