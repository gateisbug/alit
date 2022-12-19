import { NavList } from "@src/defs/component";
import classNames from "classnames/bind";
import styles from "./TopNav.module.scss";
import NavItem from "./NavItem";

const cx = classNames.bind(styles);

type Props = {
	navList:Array<NavList>;
}

function TopNav({ navList }:Props) {
	return (
		<div className={ cx("TopNav") }>
			{
				navList.map(v => (
					<NavItem key={v.url} title={v.title} url={v.url} />
				))
			}
		</div>
	)
}



export default TopNav;