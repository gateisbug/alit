import classNames from "classnames/bind";
import { Breadcrum, Subway } from "@src/components/atoms";
import { usePathfinder } from "@src/hooks";
import styles from "./Bakery.module.scss";

const cx = classNames.bind(styles);

function ItemBakery() {
	const { links } = usePathfinder();

	return (
		<Breadcrum bread={
			links.map((v) => (
				<div className={ cx("bakery-box") }>
					<Subway link={v} key={v.url} />
				</div>
			))
		} />
	)
}

export default ItemBakery;