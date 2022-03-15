import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import Menu from "./Menu";
import {NavLink} from "react-router-dom";

const cx = classNames.bind(styles);

export default function Header() {
	return (
		<header className={cx("header")}>
			<div className={cx("title")}>
				<NavLink to={"/"} children={"AzurLane"} />
			</div>
			<nav>
				<Menu link={"https://arca.live/b/azurlane"}>ArcaLive</Menu>
				<Menu link={"https://gall.dcinside.com/mgallery/board/lists?id=hamumang"}>DCInside</Menu>
			</nav>
		</header>
	)
}

