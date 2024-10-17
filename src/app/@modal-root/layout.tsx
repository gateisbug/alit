import { UIBackdrop } from '@xui/modal.ts'
import { type MouseEvent, useCallback, useEffect, useMemo } from 'react'
import { createPortal } from 'react-dom'
import { useSearchParams } from 'react-router-dom'

import useModalStore from '@util/store/modal.ts'

export default function ModalRoot() {
  const { lists } = useModalStore()
  const [searchParams, setSearchParams] = useSearchParams()

  const find = useMemo(
    () => lists.find((v) => v.id === searchParams.get('modal')),
    [lists, searchParams],
  )

  const modelOnClickAway = useCallback(
    (e: MouseEvent<HTMLDivElement>, id: string) => {
      const backdropRef = document.getElementById(id)

      if (e.target === backdropRef) {
        searchParams.delete('modal')
        setSearchParams(searchParams)
      }
    },
    [searchParams],
  )

  useEffect(() => {
    const modal = searchParams.get('modal')
    if (typeof modal === 'string') {
      // @COMMENT: 만약 모달이 처음 열린다면 스크롤 방지 스타일 추가
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
  }, [searchParams])

  return find
    ? createPortal(
        <UIBackdrop
          onClick={(e) => {
            modelOnClickAway(e, find?.id)
          }}
          key={find?.id}
          id={find?.id}
        >
          {find?.children}
        </UIBackdrop>,
        document.body,
      )
    : null
}
