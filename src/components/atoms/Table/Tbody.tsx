import { MouseEvent, ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./Table.module.scss";

const cx = classNames.bind(styles);

type Props = {
	children: ReactNode;
	onClick?: (e:MouseEvent) => void;
}

function Tbody({ children, onClick }:Props) {
	return (
		<div className={ cx("Tbody") } onClick={onClick}>
			{ children }
		</div>
	)
}

export default Tbody;