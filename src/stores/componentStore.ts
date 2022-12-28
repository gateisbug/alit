import { atom } from "recoil";

export const detailAtom = atom<boolean>({
	key: 'stores/componentStore/detailAtom',
	default: false,
})