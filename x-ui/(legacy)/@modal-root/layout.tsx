/*
import { UIBackdrop } from '@xui/modal.ts'
import { type MouseEvent, useCallback, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

import useModalStore from '@util/store/modal.ts'

export default function ModalRoot() {
  const { lists, modalClose, modalPop } = useModalStore()
  const historyLength = useRef(0)

  const modelOnClickAway = useCallback(
    (e: MouseEvent<HTMLDivElement>, id: string) => {
      const backdropRef = document.getElementById(id)

      if (e.target === backdropRef) {
        modalClose(id)
      }
    },
    [lists],
  )

  //@COMMENT: 뒤로가기 대응 기능
  useEffect(() => {
    if (lists.length === 0) {
      //@COMMENT: 모달이 없는 경우 통과
      if (historyLength.current > 0) {
        //@COMMENT: 모달이 없지만 히스토리 레퍼런스가 존재하는 경우
        window.history.back() //@COMMENT: 뒤로가기를 하고
        historyLength.current = 0 //@COMMENT: 히스토리 레퍼런스를 비운다
      }
      return
    }

    if (historyLength.current === 0) {
      //@COMMENT: 히스토리가 비워져 있는 경우
      window.history.pushState(null, '') //@COMMENT: 히스토리를 충전하고
      historyLength.current = 1 //@COMMENT: 히스토리 레퍼런스를 1개 추가
    }

    //@COMMENT: 뒤로가기 함수
    const handlerPopState = () => {
      if (historyLength.current > 0) {
        //@COMMENT: 히스토리 레퍼런스가 1 이상인 경우
        modalPop() //@COMMENT: 모든 모달을 제거하고
        historyLength.current = 0 //@COMMENT: 히스토리 레퍼런스 비우기
      }
    }
    window.addEventListener('popstate', handlerPopState)

    return () => {
      window.removeEventListener('popstate', handlerPopState)
    }
  }, [lists])

  useEffect(() => {
    if (lists.length > 0) {
      //@COMMENT: 만약 모달이 처음 열린다면 스크롤 방지 스타일 추가
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

  return lists.length > 0
    ? createPortal(
        lists.map((v) => (
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
*/
