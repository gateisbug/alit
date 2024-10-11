import { UIBackdrop } from '@xui/modal.ts'
import {
  type MouseEvent,
  useCallback,
  useDeferredValue,
  useEffect,
  useRef,
} from 'react'
import { createPortal } from 'react-dom'

import useModalStore from '@util/store/modal.ts'

export default function ModalRoot() {
  const { lists, modalClose, modalPop } = useModalStore()
  const deferredLists = useDeferredValue(lists)
  const historyLength = useRef(0)

  // const backdropRef = useRef<HTMLDivElement>(null)

  const modelOnClickAway = useCallback(
    (e: MouseEvent<HTMLDivElement>, id: string) => {
      const backdropRef = document.getElementById(id)

      if (e.target === backdropRef) {
        modalClose(id)
      }
    },
    [lists],
  )

  useEffect(() => {
    if (lists.length === 0) {
      if (historyLength.current > 0) {
        window.history.back()
        historyLength.current = 0
      }
      return
    }

    if (historyLength.current === 0) {
      window.history.pushState(null, '')
      historyLength.current = 1
    }

    const handlerPopState = () => {
      if (historyLength.current > 0) {
        modalPop()
        historyLength.current = 0
      }
    }
    window.addEventListener('popstate', handlerPopState)

    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener('popstate', handlerPopState)
    }
  }, [lists])

  useEffect(() => {
    if (lists.length > 0) {
      // 만약 모달이 처음 열린다면 스크롤 방지 스타일 추가
      const overflow = document.body.getAttribute('style')

      if (!overflow) {
        document.body.setAttribute(
          'style',
          'overflow:hidden;padding-right:17px;',
        )
      }
    } else {
      document.body.removeAttribute('style')
    }
  }, [lists])

  return deferredLists.length > 0
    ? createPortal(
        deferredLists.map((v) => (
          <UIBackdrop
            onClick={(e) => {
              modelOnClickAway(e, v.id)
            }}
            key={v.id}
            id={v.id}
          >
            {v.children}
          </UIBackdrop>
        )),
        document.body,
      )
    : null
}
