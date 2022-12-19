import { MouseEvent } from "react";
import classNames from "classnames/bind";
import styles from "./DataGrid.module.scss";

const cx = classNames.bind(styles);

type Props = {
	data: Array<string>;
	onClick?: (e:MouseEvent) => void;
}

function GridRow({ data, onClick }:Props) {
	return (
		<div className={ cx("GridRow") }
		     onClick={onClick}>
			{
				data.map(value => (
					<div key={value}
					     className={ cx("Column") } >
						{value}
					</div>
				))
			}
		</div>
	)
}

export default GridRow;