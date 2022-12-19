import { atom } from "recoil";
import { ITEM_GRID_PREFIX, ITEM_GUN_POSTFIX } from "@src/defs/constance";

export const prefixAtom = atom<string>({
	key: 'stores/GridStore/prefixAtom',
	default: ITEM_GRID_PREFIX,
})

export const postfixAtom = atom<string>({
	key: 'store/GridStore/postfixAtom',
	default: ITEM_GUN_POSTFIX,
})