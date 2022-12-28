import { useLocation, useNavigate } from "react-router-dom";
import { LinkType } from "@src/defs/types";
import { Sypo } from "@src/components/atoms";
import classNames from "classnames/bind";
import styles from "./Subway.module.scss";

const cx = classNames.bind(styles);

type Props = {
	link: LinkType;
	disable?: boolean;
}

function Link({ link, disable=false }:Props) {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const isCurrent = (() => {
		return (pathname === link.url);
	})();

	const onClick = () => {
		if(isCurrent) return;
		else {
			navigate(link.url);
		}
	}

	return (
		<div className={ cx("Link", (isCurrent) && 'current', (!disable) && 'disable') } onClick={onClick}>
			<Sypo type='p1'>
				{ link.text }
			</Sypo>
		</div>
	)
}

export default Link;