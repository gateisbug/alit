import { create } from 'zustand/index'

type ModalState = {
  lists: string[]
}

type ModalAction = {
  add: (modalKey: string) => void
  drop: (modalKey: string, isPopAction?: boolean) => void
}

export const useModalStore = create<ModalState & ModalAction>((set) => ({
  lists: [],
  add: (modalKey: string) =>
    set(({ lists }) => {
      // 모달이 열려있을 때 스크롤 방지
      const overflow = document.body.getAttribute('style')
      if (!overflow) {
        // 만약 모달이 처음 열린다면 스크롤 방지 스타일 추가
        document.body.setAttribute(
          'style',
          'overflow:hidden;padding-right:17px;',
        )
      }

      // 찾는 값이 있으면 건너뛰기
      const fIdx = lists.findIndex((v) => v === modalKey)
      if (fIdx >= 0) return { lists }

      // 찾는 값이 없으면 신규 추가
      const current = lists
      current.push(modalKey)
      window.history.pushState(null, '')
      return { lists: [...current] }
    }),
  drop: (modalKey: string, isPopAction = false) =>
    set(({ lists }) => {
      const fIdx = lists.findIndex((v) => v === modalKey)
      if (fIdx >= 0) {
        if (!isPopAction) {
          window.history.back()
        }

        // 찾는 값이 있으면 삭제
        const current = lists
        current.splice(fIdx, 1)

        if (current.length === 0) {
          // 만약 남은 모달이 없다면 body 인라인 스타일 정상화
          document.body.removeAttribute('style')
        }

        return { lists: [...current] }
      }

      // 찾는 값이 없으면 잔류
      return { lists }
    }),
}))
