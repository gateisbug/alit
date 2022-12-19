import {
	ITEM_ACCESSORY_POSTFIX,
	ITEM_AIRPLANE_POSTFIX,
	ITEM_ANTIAIR_POSTFIX,
	ITEM_GUN_POSTFIX, ITEM_SPECIAL_POSTFIX,
	ITEM_TORPEDO_POSTFIX
} from "@src/defs/constance";
import { useLocation } from "react-router-dom";
import { NavList } from "@src/defs/component";

function useTopnav() {
	const { pathname } = useLocation();

	const gunList:Array<NavList> = [
		{ title: '구축함포', url: 'dd-gun' },
		{ title: '경순함포', url: 'cl-gun' },
		{ title: '중순함포', url: 'ca-gun' },
		{ title: '대순함포', url: 'cb-gun' },
		{ title: '전함포', url: 'bb-gun' },
	];
	const torpedoList:Array<NavList> = [
		{ title: '수면어뢰', url: 'surface' },
		{ title: '잠수어뢰', url: 'submarine' },
	];
	const antiairList:Array<NavList> = [
		{ title: '일반', url: 'normal' },
		{ title: '시한신관', url: 'fuse' },
	];
	const airplaneList:Array<NavList> = [
		{ title: '전투기', url: 'fighter' },
		{ title: '폭격기', url: 'bomber' },
		{ title: '뇌격기', url: 'attacker' },
	];
	const accessoryList:Array<NavList> = [
		{ title: '전열', url: 'frontline' },
		{ title: '후열', url: 'backline' },
		{ title: '공용', url: 'common' },
		{ title: '전용', url: 'private' },
	];
	const specialList:Array<NavList> = [
		{ title: '공용', url: 'common' },
		{ title: '전용', url: 'private' },
	];

	const topnav = (() => {
		const postfix = pathname.split('/')[2];
		switch (postfix) {
			case ITEM_GUN_POSTFIX:       return gunList;
			case ITEM_TORPEDO_POSTFIX:   return torpedoList;
			case ITEM_ANTIAIR_POSTFIX:   return antiairList;
			case ITEM_AIRPLANE_POSTFIX:  return airplaneList;
			case ITEM_ACCESSORY_POSTFIX: return accessoryList;
			case ITEM_SPECIAL_POSTFIX:   return specialList;
			default:                     return undefined;
		}
	})();

	return { topnav };
}

export default useTopnav;