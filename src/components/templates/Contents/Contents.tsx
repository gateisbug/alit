import classNames from "classnames/bind";
import styles from "./Contents.module.scss";
import { ReactNode } from "react";

const cx = classNames.bind(styles);

type Props = {
	children: ReactNode;
	scroll?: boolean;
}

function Contents({ children, scroll=false }:Props) {
	if(scroll) {
		return (
			<div className={ cx("scroll") }>
				<main className={ cx("Contents") }>
					{ children }
				</main>
			</div>
		)
	}
	else {
		return (
			<main className={ cx("Contents") }>
				{ children }
			</main>
		)
	}
}

export default Contents;