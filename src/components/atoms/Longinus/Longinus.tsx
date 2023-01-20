import classNames from "classnames/bind";
import styles from "./Longinus.module.scss";

const cx = classNames.bind(styles);

type Props = {
	long: string;
}

function Longinus({ long }:Props) {
	return (
		<div className={ cx("Longinus") }>
			{ long }
		</div>
	)
}

export default Longinus;