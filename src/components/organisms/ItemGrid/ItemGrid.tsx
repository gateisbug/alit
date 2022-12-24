import classNames from "classnames/bind";
import styles from "./ItemGrid.module.scss";
import { TopNav } from "@src/components/atoms";
import useTopnav from "./useTopnav";
import { ItemTable } from "@src/components/molecules";

const cx = classNames.bind(styles);

function ItemGrid() {
	const { topnav } = useTopnav();

	return (
		<div className={ cx("ItemGrid") }>
			{
				(!!topnav) &&
				<div className={ cx("nav-area") }>
					<TopNav navList={topnav} />
				</div>
			}
			<ItemTable />
		</div>
	)
}

export default ItemGrid;