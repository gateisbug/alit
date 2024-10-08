import { UIBackdrop, UIModalClose } from '@xui/modal.ts'
import {
  type MouseEvent,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
} from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

import IconClose from '@assets/icons/icon-close.tsx'
import { useModalStore } from '@components/(common)/modal/useModalState.ts'

export const ModalClose = styled(UIModalClose).attrs({
  children: <IconClose />,
})``

interface ModalProps {
  id: string
  children?: ReactNode
}

export function Modal({ id, children }: ModalProps) {
  const { lists, drop } = useModalStore()
  const backdropRef = useRef<HTMLDivElement>(null)

  const modelOnClickAway = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (e.target === backdropRef.current) drop(id)
    },
    [id],
  )

  useEffect(() => {
    if (lists.length === 0 || !lists.includes(id)) return

    const handlerPopState = () => {
      drop(id, true)
    }

    window.addEventListener('popstate', handlerPopState)
    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener('popstate', handlerPopState)
    }
  }, [lists, id])

  return lists.includes(id)
    ? createPortal(
        <UIBackdrop ref={backdropRef} onClick={modelOnClickAway}>
          {children}
        </UIBackdrop>,
        document.body,
      )
    : null
}
