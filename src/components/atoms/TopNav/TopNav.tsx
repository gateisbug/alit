import { NavList } from "@src/defs/component";
import classNames from "classnames/bind";
import styles from "./TopNav.module.scss";
import { Sypo } from "@src/components/atoms";
import { useLocation, useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

type Props = {
	navList:Array<NavList>;
}

function TopNav({ navList }:Props) {
	return (
		<div className={ cx("TopNav") }>
			{
				navList.map(v => (
					<NavItem title={v.title} url={v.url} />
				))
			}
		</div>
	)
}

function NavItem({ title, url }:NavList) {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const onClick = () => {
		const _url = pathname + `/${url}`;
		navigate(_url)
	}

	return (
		<div className={ cx("NavItem") }
		     onClick={onClick}>
			<Sypo type='p2'>{ title }</Sypo>
		</div>
	)
}

export default TopNav;