import usePathfinder from "@src/hooks/common/usePathfinder";
import { Sypo } from "@src/components/atoms";
import Link from "./Link";
import classNames from "classnames/bind";
import styles from "./Breadcrum.module.scss";

const cx = classNames.bind(styles);

type Props = {
	seperator?: string;
}

function Breadcrum({ seperator='>' }:Props) {
	const { links } = usePathfinder();

	return (
		<div className={ cx("Breadcrum") }>
			{
				links.map((v, i) => (
					<div key={i} className={ cx("container") }>
						<Link link={v} />
						{
							i !== (links.length - 1)
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