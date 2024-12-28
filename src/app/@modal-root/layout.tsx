import backdrop from '@parakeet/ui/backdrop.style.ts'
import { type MouseEvent, useCallback, useEffect, useMemo } from 'react'
import { isMobile } from 'react-device-detect'
import { createPortal } from 'react-dom'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'

import useModalStore from '@util/store/modal.ts'

const MODALID = 'item-modal'

const Backdrop = styled.div`
  ${backdrop};

  --backdrop-bc: rgba(0, 0, 0, 0.5);
  --backdrop-z: 1100;

  padding: 24px;
`

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
    [searchParams, lists],
  )

  useEffect(() => {
    // 모달이 있는 상태로 새로고침 시 스크롤이 사라지는 문제 해결
    const isModal = document.getElementById(MODALID)
    if (isModal === null) {
      searchParams.delete('modal')
      setSearchParams(searchParams)
    }
  }, [])

  useEffect(() => {
    // const isModal = document.getElementById(MODALID)
    const modal = searchParams.get('modal')
    if (modal !== null) {
      // @COMMENT: 스크롤바 유무를 확인하고 flag에 결과를 담기
      const hasScrollbar =
        window.innerWidth > document.documentElement.clientWidth

      // @COMMENT: 만약 모달이 처음 열린다면 스크롤 방지 스타일 추가
      const overflow = document.body.getAttribute('style')

      if (hasScrollbar && !overflow) {
        document.body.setAttribute(
          'style',
          !isMobile
            ? 'overflow:hidden;padding-right:17px;'
            : 'overflow:hidden;',
        )
      }
    } else {
      document.body.removeAttribute('style')
    }
  }, [searchParams, isMobile])

  return find
    ? createPortal(
        <Backdrop
          onClick={(e) => {
            modelOnClickAway(e, find?.id)
          }}
          key={find?.id}
          id={find?.id}
        >
          {find?.children}
        </Backdrop>,
        document.body,
      )
    : null
}
