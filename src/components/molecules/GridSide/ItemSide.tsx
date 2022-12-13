import { useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./GridSide.module.scss";
import gunIcon from "@src/resoures/Icon/Gun.png";
import torpedoIcon from "@src/resoures/Icon/Torpedo.png";
import aaIcon from "@src/resoures/Icon/Antiair.png";
import airplaneIcon from "@src/resoures/Icon/Airplane.png";
import acceIcon from "@src/resoures/Icon/Accessory.png";
import specIcon from "@src/resoures/Icon/Special.png";
import { Sypo } from "@src/components/atoms";
import * as Icon from "@src/assets";
import usePathfinder from "@src/hooks/usePathfinder";
import { ITEM_PAGE_CATEGORY_URL } from "@src/defs/routes";

const cx = classNames.bind(styles);
const { GunIcon } = Icon;

function ItemSide() {
	const navigate = useNavigate();
	const { convertUrl } = usePathfinder();
	const { pathname } = useLocation();

	const sideList = [
		{ text:"함포", link:"navalgun", icon: gunIcon },
		{ text:"어뢰", link:"torpedo", icon: torpedoIcon },
		{ text:"대공장비", link:"antiair", icon: aaIcon },
		{ text:"항공기", link:"airplane", icon: airplaneIcon },
		{ text:"보조장비", link:"accessory", icon: acceIcon },
		{ text:"특수장비", link:"special", icon: specIcon },
	];

	const onClickSideItem = (link:string) => {
		const url = convertUrl(ITEM_PAGE_CATEGORY_URL, link);
		navigate(url)
	}
	
	return (
		<aside className={ cx("GridSide", "ItemSide") }>
			{
				sideList.map((v, i) => (
					<div key={i}
					     className={ cx("SideItem", pathname.includes(v.link) && 'active' ) }
					     onClick={() => {onClickSideItem(v.link)}} >
						<img src={v.icon} alt={v.text}
						     className={ cx("SideIcon") }/>
						<Sypo type='p1'>{v.text}</Sypo>
					</div>
				))
			}
		</aside>
	)
}

export default ItemSide;