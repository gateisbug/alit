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

	const allCasing = (index:number, length:number) => {
		console.log(index, length)

		switch (true) {
			case length === 0: case index >= 2:
				return null;
			case (index === length-1):
				return (
					<>
						<Seperator seperator={seperator} />
						All
					</>
				);
			default:
				return <Seperator seperator={seperator} />
		}
	}

	return (
		<div className={ cx("Breadcrum") }>
			{
				links.map((v, i) => (
					<div key={i} className={ cx("container") }>
						<Link link={v} />
						{ allCasing(i, links.length) }
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