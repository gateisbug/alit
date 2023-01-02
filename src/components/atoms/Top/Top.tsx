import classNames from "classnames/bind";
import styles from "./Top.module.scss";

const cx = classNames.bind(styles);

function Top() {
	return (
		<div className={ cx("Top") }>
			Top
		</div>
	)
}

export default Top;