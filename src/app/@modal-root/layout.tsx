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

  const modal = searchParams.get('modal')

  /**
   * 현재 활성화된 모달
   */
  const find = useMemo(() => lists.find((v) => v.id === modal), [lists, modal])

  /**
   * 모달의 외부를 클릭시 모달이 종료되도록하는 핸들러
   */
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

  /**
   * 모달이 있는 상태로 새로고침 시 스크롤이 사라지는 문제 해결을 위한 사이드 이펙트
   */
  useEffect(() => {
    // 모달이 있는 상태로 새로고침 시 스크롤이 사라지는 문제 해결
    const isModal = document.getElementById(MODALID)
    if (isModal === null) {
      searchParams.delete('modal')
      setSearchParams(searchParams)
    }
  }, [])

  /**
   * 모달이 열리면 스크롤이 안되도록 수정하는 사이드 이펙트
   */
  useEffect(() => {
    if (modal !== null) {
      // @COMMENT: 스크롤바 유무를 확인하고 flag에 결과를 담기
      const hasScrollbar =
        window.innerWidth > document.documentElement.clientWidth

      // @COMMENT: 만약 모달이 처음 열린다면 스크롤 방지 스타일 추가
      const overflow = document.body.getAttribute('style')

      if (hasScrollbar && !overflow) {
        document.body.setAttribute(
          'style',
          'overflow:hidden;padding-right:17px;',
        )
      } else if (isMobile && !overflow) {
        document.body.setAttribute('style', 'overflow:hidden;')
      }
    } else {
      document.body.removeAttribute('style')
    }
  }, [modal, isMobile])

  /**
   * 모달이 켜져있을 때 esc를 입력하면 꺼짐
   */
  useEffect(() => {
    const keypressHandler = (e: any) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        if ((modal?.length ?? 0) > 0) {
          searchParams.delete('modal')
          setSearchParams(searchParams)
        }
      }
    }

    window.addEventListener('keydown', keypressHandler)
    return () => {
      window.removeEventListener('keydown', keypressHandler)
    }
  }, [searchParams])

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
