import classNames from "classnames/bind";
import styles from "./Obtain.module.scss";
import { useObtain } from "@src/hooks";

const cx = classNames.bind(styles);

type Props = {
	strings: Array<string>;
}

function Obtain({ strings }:Props) {
	const { getObtain, getImage } = useObtain();

	return (
		<div className={ cx("Obtain") }>
			{ getObtain(strings).map((v, i) => (
				<div key={`Obtain_${i}`}>
					<img src={getImage(v.gain)} />
					{ /*v.gain + v.detail*/ }
				</div>
			)) }
		</div>
	)
}

export default Obtain;