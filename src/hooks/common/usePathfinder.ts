import { useLocation, useNavigate } from "react-router-dom";
import { LinkType } from "@src/defs/types";
import {
	ROUTE_MAIN_PAGE, URL_INDEX,
	URL_ITEM_ACCESSORY, URL_ITEM_ACCESSORY_BL, URL_ITEM_ACCESSORY_COM, URL_ITEM_ACCESSORY_FL, URL_ITEM_ACCESSORY_PRI,
	URL_ITEM_AIRPLANE, URL_ITEM_AIRPLANE_ATK, URL_ITEM_AIRPLANE_BOM, URL_ITEM_AIRPLANE_FIT,
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

function usePathfinder() {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const path = (() => {
		if(pathname === '/') return [];

		const output = pathname.split('/');
		output.splice(0, 1);

		return output;
	})();

	const backward = (index:number) => {
		let url = '';

		if((path.length - 1) <= index) {
			// console.warn('This link cannot be reached.');
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

			case 'torpedo': return { url: URL_ITEM_TORPEDO, text: 'Torpedo' };
			case 'surface': return { url: URL_ITEM_TORPEDO_SUR, text: 'Surface' };
			case 'submarine': return { url: URL_ITEM_TORPEDO_SUB, text: 'Submarine' };

			case 'antiair': return { url: URL_ITEM_ANTIAIR, text: 'Anti Air' };
			case 'normal': return { url: URL_ITEM_ANTIAIR_NOR, text: 'Normal' };
			case 'fuse': return { url: URL_ITEM_ANTIAIR_FUS, text: 'Timer' };

			case 'airplane': return { url: URL_ITEM_AIRPLANE, text: 'Airplane' };
			case 'fighter': return { url: URL_ITEM_AIRPLANE_FIT, text: 'Fighter' };
			case 'bomber': return { url: URL_ITEM_AIRPLANE_BOM, text: 'Bomber' };
			case 'attacker': return { url: URL_ITEM_AIRPLANE_ATK, text: 'Attacker' };

			case 'accessory': return { url: URL_ITEM_ACCESSORY, text: 'Accessory' };
			case 'frontline': return { url: URL_ITEM_ACCESSORY_FL, text: 'Frontline' };
			case 'backline': return { url: URL_ITEM_ACCESSORY_BL, text: 'Backline' };
			case 'common': return { url: URL_ITEM_ACCESSORY_COM, text: 'Common' };
			case 'private': return { url: URL_ITEM_ACCESSORY_PRI, text: 'Private' };

			case 'special': return { url: URL_ITEM_SPECIAL, text: 'Special' };

			default: return { url: ROUTE_MAIN_PAGE, text: 'Undefined' };
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
		path, links,
		backward,
		transfer
	}
}

export default usePathfinder;