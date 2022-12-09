import { CSSProperties, MouseEventHandler, ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

type Props = {
	children: ReactNode;
	onClick?: MouseEventHandler<HTMLDivElement>;
	colorSet?: "light"|"dark";
	padding?: number;
}

function Select({ children, onClick, padding, colorSet="light" }:Props) {
	const styles = (() => {
		const output:CSSProperties = {
			padding
		};

		return output;
	})();

	return (
		<div className={ cx("Button", "Select", colorSet) }
		     style={styles}
		     onClick={onClick}>
			{ children }
		</div>
	)
}

export default Select;