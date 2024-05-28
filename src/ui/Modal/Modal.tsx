import { createPortal } from 'react-dom'
import styled from 'styled-components'

import { ModalProps, cx, THEME, useModal } from './preamble'

const ModalBackdrop = styled.div.attrs({
  className: cx('Backdrop'),
})`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.backdrop};
  z-index: 1100;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`
ModalBackdrop.defaultProps = {
  theme: THEME,
}

function ModalComponent({ open, onClickAway, children, theme }: ModalProps) {
  const { backdropRef, onClickAway: hooksOnClickAway } = useModal({
    open,
    onClickAway,
  })

  return open
    ? createPortal(
        <ModalBackdrop
          ref={backdropRef}
          onClick={hooksOnClickAway}
          theme={theme}
        >
          {/* <ModalRoot theme={theme} >{children}</ModalRoot> */}
          {children}
        </ModalBackdrop>,
        document.body,
      )
    : null
}

const Modal = Object.assign(ModalComponent, {
  Backdrop: ModalBackdrop,
  hook: useModal,
})

export default Modal
