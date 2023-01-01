import { usePathfinder } from "@src/hooks/index";
import { Resource } from "@src/defs/types";
import { Accessory, Airplane, Antiair, Gun, Special, Torpedo } from "@src/defs/items";
import { URL_INDEX, URL_ITEM_INDEX } from "@src/defs/routes";
import { useLocation } from "react-router-dom";

function useResource() {
	const { search } = useLocation();
	const { path, pathname } = usePathfinder();

	const getGunData = ():Array<Resource> => {
		if(path.length === 2) {
			return Gun;
		}
		else {
			switch (path[2]) {
				case 'dd-gun': return Gun.filter(v => v.division == '구축함포');
				case 'cl-gun': return Gun.filter(v => v.division == '경순함포');
				case 'ca-gun': return Gun.filter(v => v.division == '중순함포');
				case 'cb-gun': return Gun.filter(v => v.division == '대순함포');
				case 'bb-gun': return Gun.filter(v => v.division == '전함포');
				default: return [];
			}
		}
	}

	const getTorpedoData = ():Array<Resource> => {
		if(path.length === 2) {
			return Torpedo;
		}
		else {
			switch (path[2]) {
				case 'surface': return Torpedo.filter(v => v.division === '수면어뢰');
				case 'submarine': return Torpedo.filter(v => v.division === '잠수어뢰');
				default: return [];
			}
		}
	}

	const getAntiairData = ():Array<Resource> => {
		if(path.length === 2) {
			return Antiair;
		}
		else {
			switch (path[2]) {
				case 'normal': return Antiair.filter(v => v.division === '일반');
				case 'fuse': return Antiair.filter(v => v.division === '시한신관');
				default: return [];
			}
		}
	}

	const getAirplaneData = ():Array<Resource> => {
		if(path.length === 2) {
			return Airplane;
		}
		else {
			switch (path[2]) {
				case 'fighter': return Airplane.filter(v => v.division === '전투기');
				case 'bomber': return Airplane.filter(v => v.division === '폭격기');
				case 'attacker': return Airplane.filter(v => v.division === '뇌격기');
				case 'seaplane': return Airplane.filter(v => v.division === '수상기');
				default: return [];
			}
		}
	}

	const getAccessoryData = ():Array<Resource> => {
		if(path.length === 2) {
			return Accessory;
		}
		else {
			switch (path[2]) {
				case 'frontline': return Accessory.filter(v => v.division === '전열');
				case 'backline': return Accessory.filter(v => v.division === '후열');
				// case 'common': return Accessory.filter(v => v.division === '공용');
				case 'private': return Accessory.filter(v => v.division === '전용');
				default: return [];
			}
		}
	}

	const getSpecialData = ():Array<Resource> => {
		return Special;
	}

	const data:Array<Resource> = (() => {
		if(pathname === URL_INDEX || pathname === URL_ITEM_INDEX) {
			return Gun.concat(Torpedo, Antiair, Airplane, Accessory, Special);
		}
		else {
			switch (path[1]) {
				case 'navalgun': return getGunData();
				case 'torpedo': return getTorpedoData();
				case 'antiair': return getAntiairData();
				case 'airplane': return getAirplaneData();
				case 'accessory': return getAccessoryData();
				case 'special': return getSpecialData();
				default: return [];
			}
		}
	})();

	const searchData:Array<Resource> = (() => {
		const _search = decodeURI(search).replace('?search=', '');

		const filtering = (v:Resource) => {
			return (v.index === _search)
				|| (v.name.includes(_search))
				|| (v.nickname.includes(_search))
				|| (v.class === _search)
				|| (v.division === _search)
				|| (v.category === _search)
				|| (v.tier === _search.toUpperCase())
				|| (v.gain.includes(_search));
		}

		return data.filter(filtering);
	})();

	return { data, searchData };
}

export default useResource;