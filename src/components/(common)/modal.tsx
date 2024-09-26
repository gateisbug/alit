import { UIModalClose, UIBackdrop } from '@xui/modal.ts'
import { type MouseEvent, type ReactNode, useCallback, useRef } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { create } from 'zustand'

import IconClose from '@assets/icons/icon-close.tsx'

interface IModalStore {
  lists: string[]
  modalOpen: (modalKey: string) => void
  modalClose: (modalKey: string) => void
}

/* @TODO: 모달 추가와 삭제 */
export const modalStore = create<IModalStore>((set) => ({
  lists: [],
  modalOpen: (modalKey: string) =>
    set(({ lists }) => {
      const current = lists

      const overflow = document.body.getAttribute('style')
      if (!overflow) {
        document.body.setAttribute('style', 'overflow:hidden;')
      }

      const fIdx = current.findIndex((v) => v === modalKey)
      if (fIdx >= 0) {
        return { lists }
      }
      current.push(modalKey)
      return { lists: [...current] }
    }),
  modalClose: (modalKey: string) =>
    set(({ lists }) => {
      const current = lists
      const fIdx = current.findIndex((v) => v === modalKey)
      if (fIdx >= 0) {
        current.splice(fIdx, 1)

        if (current.length === 0) {
          document.body.removeAttribute('style')
        }

        return { lists: [...current] }
      }
      return { lists }
    }),
}))

export const ModalClose = styled(UIModalClose).attrs({
  children: <IconClose />,
})``

interface ModalProps {
  open?: boolean
  onClickAway?: () => void
  children?: ReactNode
}

export function Modal({ open, onClickAway, children }: ModalProps) {
  const backdropRef = useRef<HTMLDivElement>(null)

  const modelOnClickAway = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (e.target === backdropRef.current && onClickAway !== undefined) {
        onClickAway()
      }
    },
    [onClickAway],
  )

  // useEffect(() => {
  //   if (open) document.body.setAttribute('style', 'overflow:hidden;')
  //   else document.body.removeAttribute('style')
  //   return () => {
  //     document.body.removeAttribute('style')
  //   }
  // }, [key, lists])

  return open
    ? createPortal(
        <UIBackdrop ref={backdropRef} onClick={modelOnClickAway}>
          {children}
        </UIBackdrop>,
        document.body,
      )
    : null
}
