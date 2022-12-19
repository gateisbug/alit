import classNames from "classnames/bind";
import styles from "./SideNav.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import usePathfinder from "@src/hooks/usePathfinder";
import { ITEM_PAGE_CATEGORY_URL } from "@src/defs/routes";
import { Sypo } from "@src/components/atoms";

const cx = classNames.bind(styles);

type Props = {
	title: string;
	url: string;
	Icon?: JSX.Element;
}

function NavItem({ Icon=undefined, url, title }:Props) {
	const navigate = useNavigate();
	const { convertUrl } = usePathfinder();
	const { pathname } = useLocation();

	const onClick = () => {
		const _url = convertUrl(ITEM_PAGE_CATEGORY_URL, url);
		navigate(_url)
	}

	return (
		<div className={ cx("NavItem", pathname.includes(url) && 'active') }
		     onClick={onClick}>
			<div className={ cx("icon") }>{ Icon }</div>
			<Sypo type='p2'>{ title }</Sypo>
		</div>
	)
}

export default NavItem;