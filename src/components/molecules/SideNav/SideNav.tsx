import { NavList } from "@src/defs/component";
import NavItem from "./NavItem";
import classNames from "classnames/bind";
import styles from "./SideNav.module.scss";

const cx = classNames.bind(styles);

type Props = {
	navList: Array<NavList>;
}

function SideNav({ navList }:Props) {
	return (
		<div className={ cx("SideNav") }>
			{
				navList.map((v) => (
					<NavItem key={v.url}
					         Icon={v.Icon}
					         url={v.url}
					         title={v.title} />
				))
			}
		</div>
	)
}

export default SideNav;