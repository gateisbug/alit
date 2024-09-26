import { create } from 'zustand'

interface ItemModalStore {
  select?: ItemInterface
  onOpen: (newValue: ItemInterface) => void
  onClose: () => void
}

export const useItemModalStore = create<ItemModalStore>((set) => ({
  select: undefined,
  onOpen: (newValue: ItemInterface) => set(() => ({ select: newValue })),
  onClose: () => set(() => ({ select: undefined })),
}))
