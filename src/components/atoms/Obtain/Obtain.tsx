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
			<div className={ cx("Images") }>
				{
					obtains.map((v, i) => (
						<img key={i} src={getImage(v.gain)} alt={v.gain} className={cx("Image")} />
					))
				}
			</div>
			<div className={ cx("Text") }>
				{
					obtains.map((v, i) => (
						<div key={i} className={ cx("obtain-text") }>
							<p className={ cx("gain") }>{v.gain}</p>
							<p className={ cx("detail") }>{v.detail}</p>
						</div>
					))
				}
			</div>
		</div>
	)
}

export default Obtain;