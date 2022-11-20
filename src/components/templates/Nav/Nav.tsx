import classNames from "classnames/bind";
import styles from "./Nav.module.scss";
import { ReactNode } from "react";

const cx = classNames.bind(styles)

type Props = {
	children: ReactNode;
}

function Nav({ children }:Props) {
	return (
		<nav className={ cx("Nav") }>
			{ children }
		</nav>
	)
}

export default Nav;