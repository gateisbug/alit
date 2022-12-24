import { CSSProperties, ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./Table.module.scss";

const cx = classNames.bind(styles);

type Props = {
	children: ReactNode;
	width?: string;
	flexGrow?: number;
	flexBasis?: string;
	flexShrink?: string;
	align?: string;
}

function Cell({ children, width='auto', flexGrow=0, flexBasis='auto', flexShrink='1', align='center' }:Props) {
	const style:CSSProperties = (() => {
		return {
			width,
			flexGrow,
			flexBasis,
			flexShrink,
			justifyContent: align,
			textAlign: (align as any),
		}
	})();

	return (
		<div className={ cx("Cell") } style={style}>
			{ children }
		</div>
	)
}

export default Cell;