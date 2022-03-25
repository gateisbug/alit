import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import Menu from "./Menu";
import {NavLink} from "react-router-dom";

const cx = classNames.bind(styles);

export default function Header() {
	return (
		<header className={cx("header")}>
			<div className={cx("title")}>
				<NavLink to={"/"} children={"Azur Lane"} />
			</div>
			<nav>
				<Menu link={"https://arca.live/b/azurlane"}>ArcaLive</Menu>
				<Menu link={"https://arca.live/b/manjuugame"}>Manjuu</Menu>
			</nav>
		</header>
	)
}

