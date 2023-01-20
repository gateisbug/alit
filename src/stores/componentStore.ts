import { atom } from "recoil";
import { ModalProps } from "@src/defs/types";

export const detailAtom = atom<boolean>({
	key: 'stores/componentStore/detailAtom',
	default: false,
})

export const modalAtom = atom<ModalProps>({
	key: 'stores/componentStore/modalAtom',
	default: {
		show: false,
		id: undefined,
		contents: undefined
	},
})