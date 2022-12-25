import { CSSProperties, MouseEvent, ReactNode } from "react";
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
	onClick?: (e:MouseEvent) => void;
}

function Cell(props:Props) {
	const {
		children,
		width='auto',
		flexGrow=0,
		flexBasis='auto',
		flexShrink='1',
		align='center',
		onClick=undefined
	} = props;

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
		<div className={ cx("Cell", (!!onClick) && 'onClick') }
		     style={style}
		     onClick={onClick}>
			{ children }
		</div>
	)
}

export default Cell;