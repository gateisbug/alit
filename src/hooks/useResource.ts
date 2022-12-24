import { useLocation } from "react-router-dom";
import { Gun, Torpedo, Antiair, Airplane, Accessory, Special } from "@src/resoures/Items";
import { Resource } from "@src/defs/resource";

function useResource() {
	const { pathname } = useLocation();

	const getGunData = (path:Array<string>):Array<Resource> => {
		if(path.length === 1) {
			return Gun;
		}
		else {
			switch (path[1]) {
				case 'dd-gun': return Gun.filter(v => v.division == '구축함포');
				case 'cl-gun': return Gun.filter(v => v.division == '경순함포');
				case 'ca-gun': return Gun.filter(v => v.division == '중순함포');
				case 'cb-gun': return Gun.filter(v => v.division == '대순함포');
				case 'bb-gun': return Gun.filter(v => v.division == '전함포');
				default: return [];
			}
		}
	}

	const getTorpedoData = (path:Array<string>):Array<Resource> => {
		if(path.length === 1) {
			return Torpedo;
		}
		else {
			switch (path[1]) {
				case 'surface': return Torpedo.filter(v => v.division === '수면어뢰');
				case 'submarine': return Torpedo.filter(v => v.division === '잠수어뢰');
				default: return [];
			}
		}
	}

	const getAntiairData = (path:Array<string>):Array<Resource> => {
		if(path.length === 1) {
			return Antiair;
		}
		else {
			switch (path[1]) {
				case 'normal': return Antiair.filter(v => v.division === '일반');
				case 'fuse': return Antiair.filter(v => v.division === '시한신관');
				default: return [];
			}
		}
	}

	const getAirplaneData = (path:Array<string>):Array<Resource> => {
		if(path.length === 1) {
			return Airplane;
		}
		else {
			switch (path[1]) {
				case 'fighter': return Airplane.filter(v => v.division === '전투기');
				case 'bomber': return Airplane.filter(v => v.division === '폭격기');
				case 'attacker': return Airplane.filter(v => v.division === '뇌격기');
				default: return [];
			}
		}
	}

	const getAccessoryData = (path:Array<string>):Array<Resource> => {
		if(path.length === 1) {
			return Accessory;
		}
		else {
			switch (path[1]) {
				case 'frontline': return Accessory.filter(v => v.division === '전열');
				case 'backline': return Accessory.filter(v => v.division === '후열');
				case 'common': return Accessory.filter(v => v.division === '공용');
				case 'private': return Accessory.filter(v => v.division === '전용');
				default: return [];
			}
		}
	}

	const getSpecialData = (path:Array<string>):Array<Resource> => {
		if(path.length === 1) {
			return Special;
		}
		else {
			switch (path[1]) {
				case 'common': return Special.filter(v => v.division === '공용');
				case 'private': return Special.filter(v => v.division === '전용');
				default: return [];
			}
		}
	}

	const data:Array<Resource> = (() => {
		if(pathname === '/' || pathname === '/item') {
			return Gun.concat(Torpedo, Antiair, Airplane, Accessory, Special);
		}
		else {
			const path = pathname.split('/');
			path.splice(0, 2)

			if(path.length > 0) {
				switch (path[0]) {
					case 'navalgun': return getGunData(path);
					case 'torpedo': return getTorpedoData(path);
					case 'antiair': return getAntiairData(path);
					case 'airplane': return getAirplaneData(path);
					case 'accessory': return getAccessoryData(path);
					case 'special': return getSpecialData(path);
					default: return [];
				}
			}
			else {
				return [];
			}
		}
	})();

	return data;
}

export default useResource;