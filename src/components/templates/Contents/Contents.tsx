import classNames from "classnames/bind";
import styles from "./Contents.module.scss";
import { ReactNode } from "react";

const cx = classNames.bind(styles);

type Props = {
	children: ReactNode;
}

function Contents({ children }:Props) {
	return (
		<main className={ cx("Contents") }>
			{ children }
		</main>
	)
}

export default Contents;