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
  modalAdd: (modal: ModalType) => void
  modalRemove: (modalKey: string) => void
}

const useModalStore = create<ModalState & ModalAction>((set) => ({
  lists: [],
  modalAdd: (modal) =>
    set(({ lists }) => {
      const current = cloneDeep(lists)
      const fidx = current.findIndex((v) => v.id === modal.id)

      if (fidx >= 0) current.splice(fidx, 1)
      current.push(modal)
      return { lists: current }
    }),
  modalRemove: (modalKey) =>
    set(({ lists }) => {
      const current = cloneDeep(lists)
      const fidx = current.findIndex((v) => v.id === modalKey)

      if (fidx >= 0) {
        current.splice(fidx, 1)
        return { lists: current }
      }

      return { lists }
    }),
}))

export default useModalStore
