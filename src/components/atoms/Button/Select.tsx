import { CSSProperties, MouseEvent, ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

type Props = {
	children: ReactNode;
	onClick?: (e:MouseEvent) => void;
	colorSet?: 'light'|'dark';
	padding?: number;
}

function Select(props:Props) {
	const {
		children,
		onClick = undefined,
		// colorSet = 'light',
		padding = 8
	} = props;

	const style = (() => {
		const output:CSSProperties = {
			padding,
		}

		return output;
	})();

	return (
		<div className={ cx("Button", "Select") }
		     style={style}
		     onClick={onClick}>
			{ children }
		</div>
	)
}

export default Select;