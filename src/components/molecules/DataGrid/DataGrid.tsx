import { ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./DataGrid.module.scss";

const cx = classNames.bind(styles);

type Props = {
	children:ReactNode;
}

function DataGrid({ children }:Props) {
	return (
		<div className={ cx("DataGrid") }>
			{ children };
		</div>
	)
}

export default DataGrid;