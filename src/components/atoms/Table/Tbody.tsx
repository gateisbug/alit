import { ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./Table.module.scss";

const cx = classNames.bind(styles);

type Props = {
	children: ReactNode;
}

function Tbody({ children }:Props) {
	return (
		<div className={ cx("Tbody") }>
			{ children }
		</div>
	)
}

export default Tbody;