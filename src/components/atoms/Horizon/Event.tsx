import classNames from "classnames/bind";
import styles from "./Horizon.module.scss";
import { Evental } from "@src/defs/component";

const cx = classNames.bind(styles);

type Props = {
	event: Evental;
}

function Event({ event }:Props) {
	const getGain = () => {
	}

	return (
		<div className={ cx("Event") }>
			<img src="#" alt="background" className={ cx('background') }/>
			<div className={ cx("text") }>Text</div>
		</div>
	)
}

export default Event;