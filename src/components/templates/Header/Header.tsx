import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Logo } from "@src/components/atoms";
import { Links, SearchItem } from "@src/components/molecules";

const cx = classNames.bind(styles);

function Header() {
	return (
		<header className={ cx("Header") }>
			<Logo />
			<div className={ cx("search-area") }>
				<SearchItem />
			</div>
			<Links />
		</header>
	)
}

export default Header;