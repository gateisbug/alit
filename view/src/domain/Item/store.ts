import { atom } from 'recoil';

const prefix = 'Item/store/';

export const filterStore = atom<string[]>({
  key: prefix + 'filterStore',
  default: [],
});

export const searchStore = atom<string>({
  key: prefix + 'searchStore',
  default: '',
});

export const itemStore = atom<ItemInterface[]>({
  key: prefix + 'itemStore',
  default: [],
});

export const modalItemStore = atom<ItemInterface | undefined>({
  key: prefix + 'modalItemStore',
  default: undefined,
});

export const modalShowStore = atom<boolean>({
  key: prefix + 'modalShowStore',
  default: false,
});
