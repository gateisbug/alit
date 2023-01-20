import { MouseEvent, ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./Table.module.scss";

const cx = classNames.bind(styles);

type Props = {
	children: ReactNode;
	onClick?: (e:MouseEvent) => void;
}

function Body({ children, onClick }:Props) {
	return (
		<div className={ cx("Body") }
		     onClick={onClick}>
			{ children }
		</div>
	)
}

export default Body;