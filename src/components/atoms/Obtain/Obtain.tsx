import classNames from "classnames/bind";
import styles from "./Obtain.module.scss";
import { useObtain } from "@src/hooks";

const cx = classNames.bind(styles);

type Props = {
	strings: Array<string>;
}

function Obtain({ strings }:Props) {
	const { getObtain, getImage } = useObtain();

	const obtains = getObtain(strings);

	return (
		<div className={ cx("Obtain") }>
			<div className={ cx("obtains-container") }>
				{
					obtains.map((v, i, array) => (
						<div key={i} className={ cx("obtains", (array.length > 1) && 'multi-image') }>
							<img src={getImage(v.gain)}
							     alt={v.gain}
							     className={cx("image")} />
							<p className={ cx("gain") }>{v.gain}</p>
							{
								(v.detail.length > 0) && <p className={ cx("detail") }>{v.detail}</p>
							}
						</div>
					))
				}
			</div>
		</div>
	)
}

export default Obtain;