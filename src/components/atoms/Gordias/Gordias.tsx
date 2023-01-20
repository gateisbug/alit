import classNames from "classnames/bind";
import styles from "./Gordias.module.scss";
import { Sypo } from "@src/components/atoms";
import { useObtain } from "@src/hooks";

const cx = classNames.bind(styles);

type Props = {
	strings: Array<string>;
}

function Gordias({ strings }:Props) {
	const { getObtain } = useObtain();

	const casing = (obtain:any) => {
		switch (true) {
			case (obtain.gain === '-'):
				return <Sypo type='p2'>-</Sypo>;
			case (obtain.detail.length === 0):
				return <div className={ cx("single") }>{obtain.gain}</div>
			default:
				return ( <>
					<div className={ cx("head") } title={obtain.gain}>{ obtain.gain }</div>
					<div className={ cx("body") }>{ obtain.detail }</div>
				</> )
		}
	}


	return (
		<div className={ cx("Gordias") }>
			{
				getObtain(strings).map((v, i) => (
					<div className={ cx("splice") } key={i}>
						{ casing(v) }
					</div>
				))
			}
		</div>
	)
}

export default Gordias;