import { atom } from 'recoil'

const prefix = '@/util/item/itemStore/'

export const selectItemStore = atom<ItemInterface | undefined>({
  key: `${prefix}selectItemStore`,
  default: undefined,
})
