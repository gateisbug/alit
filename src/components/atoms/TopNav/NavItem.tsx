import { useRecoilValue } from "recoil";
import { useLocation, useNavigate } from "react-router-dom";
import { NavList } from "@src/defs/component";
import { postfixAtom, prefixAtom } from "@src/stores/GridStore";
import { Sypo } from "@src/components/atoms";
import classNames from "classnames/bind";
import styles from "./TopNav.module.scss";

const cx = classNames.bind(styles);

function NavItem({ title, url, Icon=undefined }:NavList) {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const prefix = useRecoilValue(prefixAtom);
	const postfix = useRecoilValue(postfixAtom);

	const active = (() => {
		if(pathname.includes(url)) return 'active'
		else return undefined;
	})();

	const onClick = () => {
		const _url = `/${prefix}/${postfix}/${url}`;
		navigate(_url)
	}

	return (
		<div className={ cx("NavItem", active) }
		     onClick={onClick}>
			{ Icon !== undefined ? Icon:null }
			<Sypo type='p2'>{ title }</Sypo>
		</div>
	)
}

export default NavItem;