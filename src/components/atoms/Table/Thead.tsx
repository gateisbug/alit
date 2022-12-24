import { ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./Table.module.scss";

const cx = classNames.bind(styles);

type Props = {
	children: ReactNode;
}

function Thead({ children }:Props) {
	return (
		<div className={ cx("Thead") }>
			{ children }
		</div>
	)
}

export default Thead;