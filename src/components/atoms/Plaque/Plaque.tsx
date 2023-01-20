import { ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./Plaque.module.scss";

const cx = classNames.bind(styles);

type Props = {
	size?: "sx"|"mx"|"lx";
	color?: "grey"|"white"|"transparent";
	children: ReactNode;
}

function Plaque({ children, color="grey", size="sx" }:Props) {
	return (
		<div className={ `Plaque ${cx("Plaque", color, size)}` }>
			{ children }
		</div>
	)
}

export default Plaque;