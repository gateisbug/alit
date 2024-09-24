import {
  UIModalClose,
  UIModalContainer,
  IModalUIProps,
  UIBackdrop,
  useModal,
} from '@xui/modal.ts'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

import IconClose from '@assets/icons/icon-close.tsx'

const ModalClose = styled(UIModalClose).attrs({
  children: <IconClose />,
})``

const ModalContainer = styled(UIModalContainer)`
  --modal-surface: var(--surface);
`

function ModalMain({ open, onClickAway, children }: IModalUIProps) {
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

const Modal = Object.assign(ModalMain, {
  Container: ModalContainer,
  Close: ModalClose,
})

export default Modal
