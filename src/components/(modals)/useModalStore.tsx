import cloneDeep from 'lodash-es/cloneDeep'
import { type ReactNode } from 'react'
import { create } from 'zustand/index'

type ModalType = {
  id: string
  children: ReactNode
}

type ModalState = {
  lists: ModalType[]
}

type ModalAction = {
  modalOpen: (modal: ModalType) => void
  modalClose: (modalKey: string) => void
  modalPop: () => void
}

export const useModalStore = create<ModalState & ModalAction>((set) => ({
  lists: [],
  modalOpen: (modal) =>
    set(({ lists }) => {
      const current = cloneDeep(lists)
      const fidx = current.findIndex((v) => v.id === modal.id)

      if (fidx >= 0) current.splice(fidx, 1)
      current.push(modal)
      return { lists: current }
    }),
  modalClose: (modalKey) =>
    set(({ lists }) => {
      const current = cloneDeep(lists)
      const fidx = current.findIndex((v) => v.id === modalKey)

      if (fidx >= 0) {
        window.history.back()
        current.splice(fidx, 1)
        return { lists: current }
      }

      return { lists }
    }),
  modalPop: () =>
    set(({ lists }) => {
      if (lists.length > 0) {
        const current = cloneDeep(lists)
        current.pop()
        return { lists: current }
      }

      return { lists }
    }),
}))
