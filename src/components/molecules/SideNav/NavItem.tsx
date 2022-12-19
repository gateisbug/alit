import classNames from "classnames/bind";
import styles from "./SideNav.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { Sypo } from "@src/components/atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { postfixAtom, prefixAtom } from "@src/stores/GridStore";

const cx = classNames.bind(styles);

type Props = {
	title: string;
	url: string;
	Icon?: JSX.Element;
}

function NavItem({ Icon=undefined, url, title }:Props) {
	const prefix = useRecoilValue(prefixAtom);
	const setPostfix = useSetRecoilState(postfixAtom);
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const onClick = () => {
		const _url = `/${prefix}/${url}`;
		navigate(_url);
		setPostfix(url);
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