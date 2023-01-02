import { useLocation, useNavigate } from "react-router-dom";
import { LinkType } from "@src/defs/types";
import {
	ROUTE_MAIN_PAGE, URL_INDEX,
	URL_ITEM_ACCESSORY, URL_ITEM_ACCESSORY_BL, URL_ITEM_ACCESSORY_COM, URL_ITEM_ACCESSORY_FL, URL_ITEM_ACCESSORY_PRI,
	URL_ITEM_AIRPLANE, URL_ITEM_AIRPLANE_ATK, URL_ITEM_AIRPLANE_BOM, URL_ITEM_AIRPLANE_FIT, URL_ITEM_AIRPLANE_SPL,
	URL_ITEM_ANTIAIR, URL_ITEM_ANTIAIR_FUS, URL_ITEM_ANTIAIR_NOR,
	URL_ITEM_INDEX,
	URL_ITEM_NAVALGUN, URL_ITEM_NAVALGUN_BB,
	URL_ITEM_NAVALGUN_CA,
	URL_ITEM_NAVALGUN_CB,
	URL_ITEM_NAVALGUN_CL,
	URL_ITEM_NAVALGUN_DD,
	URL_ITEM_SPECIAL,
	URL_ITEM_TORPEDO, URL_ITEM_TORPEDO_SUB, URL_ITEM_TORPEDO_SUR
} from "@src/defs/routes";
import { Icon } from "@src/assets";

function usePathfinder() {
	const navigate = useNavigate();
	const { pathname, search } = useLocation();

	const path = (() => {
		if(pathname === '/') return [];

		const output = pathname.split('/');
		output.splice(0, 1);

		return output;
	})();

	const backward = (index:number) => {
		let url = '';

		if((path.length - 1) <= index) {
			return;
		}
		else {
			for (let i = 0; i < index+1; i++) {
				url += `/${path[i]}`;
			}

			navigate(url);
		}
	}

	const transfer = (index:number, link:string) => {
		let url = '';

		for (let i = 0; i < index; i++) {
			url += `/${path[i]}`;
		}
		url += `/${link}`;

		navigate(url);
	}


	const centrifuge = (_path:string):LinkType => {
		switch (_path) {
			case 'item': return { url: URL_ITEM_INDEX, text: '장비' };

			case 'navalgun': return { url: URL_ITEM_NAVALGUN, text: '함포' };
			case 'dd-gun': return { url: URL_ITEM_NAVALGUN_DD, text: '구축' };
			case 'cl-gun': return { url: URL_ITEM_NAVALGUN_CL, text: '경순' };
			case 'ca-gun': return { url: URL_ITEM_NAVALGUN_CA, text: '중순' };
			case 'cb-gun': return { url: URL_ITEM_NAVALGUN_CB, text: '대형' };
			case 'bb-gun': return { url: URL_ITEM_NAVALGUN_BB, text: '전함' };

			case 'torpedo': return { url: URL_ITEM_TORPEDO, text: '어뢰' };
			case 'surface': return { url: URL_ITEM_TORPEDO_SUR, text: '수면어뢰' };
			case 'submarine': return { url: URL_ITEM_TORPEDO_SUB, text: '잠수어뢰' };

			case 'antiair': return { url: URL_ITEM_ANTIAIR, text: '대공포' };
			case 'normal': return { url: URL_ITEM_ANTIAIR_NOR, text: '통상' };
			case 'fuse': return { url: URL_ITEM_ANTIAIR_FUS, text: '시한신관' };

			case 'airplane': return { url: URL_ITEM_AIRPLANE, text: '함재기' };
			case 'fighter': return { url: URL_ITEM_AIRPLANE_FIT, text: '전투기' };
			case 'bomber': return { url: URL_ITEM_AIRPLANE_BOM, text: '폭격기' };
			case 'attacker': return { url: URL_ITEM_AIRPLANE_ATK, text: '뇌격기' };
			case 'seaplane': return { url: URL_ITEM_AIRPLANE_SPL, text: '수상기' };

			case 'accessory': return { url: URL_ITEM_ACCESSORY, text: '보조장비' };
			case 'backline': return { url: URL_ITEM_ACCESSORY_BL, text: '후열' };
			case 'frontline': return { url: URL_ITEM_ACCESSORY_FL, text: '전열' };
			// case 'common': return { url: URL_ITEM_ACCESSORY_COM, text: '공용' };
			case 'private': return { url: URL_ITEM_ACCESSORY_PRI, text: '전용' };

			case 'special': return { url: URL_ITEM_SPECIAL, text: '특수장비' };

			default: return { url: ROUTE_MAIN_PAGE, text: 'Undefined' };
		}
	}

	const lastPath = (() => {
		const idx = (path.length - 1 >= 0) ? (path.length - 1):0;
		return path[idx];
	})();

	const category = (division:string, responsive=false):Array<LinkType> => {
		// const idx = (path.length - 1 >= 0) ? (path.length - 1):0;
		// const division:string = path[idx];

		if(division === 'item') {
			if(!responsive) {
				return [
					{ url: URL_ITEM_NAVALGUN, text: '함포' },
					{ url: URL_ITEM_TORPEDO, text: '어뢰' },
					{ url: URL_ITEM_ANTIAIR, text: '대공포' },
					{ url: URL_ITEM_AIRPLANE, text: '함재기' },
					{ url: URL_ITEM_ACCESSORY, text: '보조장비' },
					{ url: URL_ITEM_SPECIAL, text: '특수장비' }
				];
			}
			else {
				return [
					{ url: URL_ITEM_NAVALGUN, text: <Icon.Gun /> },
					{ url: URL_ITEM_TORPEDO, text: <Icon.Torpedo /> },
					{ url: URL_ITEM_ANTIAIR, text: <Icon.Antiair /> },
					{ url: URL_ITEM_AIRPLANE, text: <Icon.Airplane /> },
					{ url: URL_ITEM_ACCESSORY, text: <Icon.Accessory /> },
					{ url: URL_ITEM_SPECIAL, text: <Icon.Special /> }
				];
			}
		}

		switch (division) {
			case 'navalgun': return [
				{ url: URL_ITEM_NAVALGUN_DD, text: '구축' },
				{ url: URL_ITEM_NAVALGUN_CL, text: '경순' },
				{ url: URL_ITEM_NAVALGUN_CA, text: '중순' },
				{ url: URL_ITEM_NAVALGUN_CB, text: '대형' },
				{ url: URL_ITEM_NAVALGUN_BB, text: '전함' }
			];
			case 'torpedo': return [
				{ url: URL_ITEM_TORPEDO_SUR, text: '수면어뢰' },
				{ url: URL_ITEM_TORPEDO_SUB, text: '잠수어뢰' }
			];
			case 'antiair': return [
				{ url: URL_ITEM_ANTIAIR_NOR, text: '통상' },
				{ url: URL_ITEM_ANTIAIR_FUS, text: '시한신관' }
			];
			case 'airplane': return [
				{ url: URL_ITEM_AIRPLANE_FIT, text: '전투기' },
				{ url: URL_ITEM_AIRPLANE_BOM, text: '폭격기' },
				{ url: URL_ITEM_AIRPLANE_ATK, text: '뇌격기' },
				{ url: URL_ITEM_AIRPLANE_SPL, text: '수상기' }
			];
			case 'accessory': return [
				{ url: URL_ITEM_ACCESSORY_BL, text: '후열' },
				{ url: URL_ITEM_ACCESSORY_FL, text: '전열' },
				// { url: URL_ITEM_ACCESSORY_COM, text: '공용' },
				{ url: URL_ITEM_ACCESSORY_PRI, text: '전용' }
			];
			default: return [];
		}
	}

	const links = ((_path:Array<string>) => {
		if(_path.length === 0) {
			return [{
				url: URL_INDEX,
				text: '장비'
			}]
		}

		const output:Array<LinkType> = [];

		for (let i = 0; i < _path.length; i++) {
			output.push(centrifuge(_path[i]))
		}

		return output;
	})(path);

	return {
		path, links, lastPath, pathname,
		backward,
		transfer,
		category,
		navigate,
		query: search,
	}
}

export default usePathfinder;