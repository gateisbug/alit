import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { ButtonType } from "@src/defs/components";
import { CSSProperties } from "react";

const cx = classNames.bind(styles);

function Select({ children, padding=undefined, colorSet='Orange' }:ButtonType) {
	const style:CSSProperties = (() => ({
		padding
	}))();

	return (
		<div className={ cx("Button", "Select", colorSet) } style={style}>
			{ children }
		</div>
	)
}

export default Select;