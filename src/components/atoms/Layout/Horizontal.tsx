import { ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./Layout.module.scss";

const cx = classNames.bind(styles);

type Props = {
	children?: ReactNode;
}

function Horizontal({ children }:Props) {
	return (
		<header className={ cx("Horizontal") }>
			{ children }
		</header>
	)
}

export default Horizontal;