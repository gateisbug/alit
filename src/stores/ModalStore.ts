import { atom, selector } from "recoil";
import { ModalControll } from "@src/defs/component";

export const itemDetailAtom = atom<boolean>({
	key: 'stores/ModalStore/itemDetailAtom',
	default: false,
})

export const modalAtom = atom<ModalControll>({
	key: 'stores/ModalStore/modalAtom',
	default: {
		show: false,
		contents: null
	},
})

export const setModalSelector = selector({
	key: 'stores/ModalStore/setModalSelector',
	get: opts => opts,
	set: (opts, newValue) => {
		return newValue;
	}
})