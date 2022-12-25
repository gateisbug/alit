import { atom, selector } from "recoil";
import { ModalControll } from "@src/defs/component";

export const modalAtom = atom<ModalControll>({
	key: 'stores/ModalStore/modalAtom',
	default: {
		show: false,
		contents: null
	},
});