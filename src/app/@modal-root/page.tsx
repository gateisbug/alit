import { UIBackdrop } from '@xui/modal.ts'
import { type MouseEvent, useCallback, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

import { useModalStore } from '@components/(modals)/useModalStore.tsx'

export default function ModalRoot() {
  const { lists, modalClose, modalPop } = useModalStore()

  const backdropRef = useRef<HTMLDivElement>(null)

  const modelOnClickAway = useCallback(
    (e: MouseEvent<HTMLDivElement>, id: string) => {
      if (e.target === backdropRef.current) {
        modalClose(id)
      }
    },
    [lists],
  )

  useEffect(() => {
    if (lists.length === 0) return

    window.history.pushState(null, '')

    const handlerPopState = () => {
      modalPop()
    }

    window.addEventListener('popstate', handlerPopState)
    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener('popstate', handlerPopState)
    }
  }, [lists])

  return lists.length > 0
    ? createPortal(
        lists.map((v) => (
          <UIBackdrop
            ref={backdropRef}
            onClick={(e) => {
              modelOnClickAway(e, v.id)
            }}
            key={v.id}
          >
            {v.children}
          </UIBackdrop>
        )),
        document.body,
      )
    : null
}
