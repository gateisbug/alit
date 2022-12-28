import { Sypo } from "@src/components/atoms";
import classNames from "classnames/bind";
import styles from "./Breadcrum.module.scss";
import { ReactNode } from "react";

const cx = classNames.bind(styles);

type Props = {
	bread: Array<ReactNode>;
	seperator?: string;
}

function Breadcrum({ bread, seperator='>' }:Props) {
	return (
		<div className={ cx("Breadcrum") }>
			{
				bread.map((v, i) => (
					<div key={i} className={ cx("container") }>
						{ v }
						{
							(bread.length-1 !== i)
								? <Seperator seperator={seperator} />
								: null
						}
					</div>
				))
			}
		</div>
	)
}

type SProps = {
	seperator: string;
}

function Seperator({ seperator }:SProps) {
	return (
		<div className={ cx("Seperator") }>
			<Sypo type='p1'>{ seperator }</Sypo>
		</div>
	)
}

export default Breadcrum;