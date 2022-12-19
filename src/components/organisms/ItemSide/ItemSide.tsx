import classNames from "classnames/bind";
import styles from "./ItemSide.module.scss";
import { NavList } from "@src/defs/component";
import { SideNav } from "@src/components/molecules";
import * as Icon from "@src/assets";

const cx = classNames.bind(styles);
const { GunIcon, TorpedoIcon, AntiAirIcon, AirplaneIcon, AccessoryIcon, SpecialIcon } = Icon;


function ItemSide() {
	const navList:Array<NavList> = [
		{ title:"함포", url:"navalgun", Icon: <GunIcon key={0} size={32} /> },
		{ title:"어뢰", url:"torpedo", Icon: <TorpedoIcon key={1} size={32} /> },
		{ title:"대공장비", url:"antiair", Icon: <AntiAirIcon key={2} size={32} /> },
		{ title:"항공기", url:"airplane", Icon: <AirplaneIcon key={3} size={32} /> },
		{ title:"보조장비", url:"accessory", Icon: <AccessoryIcon key={4} size={32} /> },
		{ title:"특수장비", url:"special", Icon: <SpecialIcon key={5} size={32} /> },
	]

	return (
		<div className={ cx("ItemSide") }>
			<SideNav navList={navList} />
		</div>
	)
}

export default ItemSide;