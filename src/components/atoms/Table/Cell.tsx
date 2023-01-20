import { CSSProperties, MouseEvent, ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./Table.module.scss";
import { Size } from "@src/defs/types";

const cx = classNames.bind(styles);

type Props = {
	children: ReactNode;
	size: Size;
	style?: CSSProperties;
	onClick?: (e:MouseEvent) => void;
}

function Cell({ children, size, style, onClick }:Props) {
	return (
		<div className={ cx("Cell", size) }
		     onClick={onClick}
		     style={style}>
			{ children }
		</div>
	)
}

export default Cell;