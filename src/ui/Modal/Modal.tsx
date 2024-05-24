'use client'

import { createPortal } from 'react-dom'
import styled from 'styled-components'

import { ModalProps, px, THEME, useModal } from './preamble'

const ModalBackdrop = styled.div.attrs({
  className: px('Backdrop'),
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

// const ModalRoot = styled.div.attrs({
//   className: px('Root'),
// })`
//   display: flex;
//   flex-flow: column nowrap;
//   align-items: center;
//   min-width: 0;
//   width: 100%;
//   //max-width: 60rem;
//   //max-height: calc(100vh - 8rem);
//   overflow-y: auto;
//
//   ///* @device: Laptop */
//   //@media (max-width: 768px) {
//   //  width: 100%;
//   //}
//
//   // background-color: ${({ theme }) => theme.surface};
//   // border-radius: 0.5rem; // 8px
//   // box-shadow: 0 0.25rem 1rem 0 ${({ theme }) =>
//     theme.shadow}; // 0 4px 16px 0
// `
// ModalRoot.defaultProps = {
//   theme: THEME,
// }

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
  // Root: ModalRoot,
  hook: useModal,
  // scrollBlock: useScrollBlock,
})

export default Modal
