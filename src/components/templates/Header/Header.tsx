import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Logo } from "@src/components/atoms";
import { Links } from "@src/components/molecules";
import { ReactNode } from "react";

const cx = classNames.bind(styles);

type Props = {
	search: ReactNode;
}

function Header({ search }:Props) {
	return (
		<header className={ cx("Header") }>
			<Logo />
			<div className={ cx("search-area") }>
				{ search }
			</div>
			<Links />
		</header>
	)
}

export default Header;