import { ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./ScrollView.module.scss";

const cx = classNames.bind(styles);

type Props = {
	children: ReactNode;
}

function ScrollView({ children }:Props) {
	return (
		<div className={ cx("ScrollView") }>
			<div className={ cx("container") }>
				{ children }
			</div>
		</div>
	)
}

export default ScrollView;