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
