import classNames from "classnames/bind";
import styles from "./ItemGrid.module.scss";
import { TopNav } from "@src/components/atoms";
import { DataGrid, GridHead, GridRow } from "@src/components/molecules";
import useTopnav from "@src/components/organisms/ItemGrid/useTopnav";

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
			<div className={ cx("contents-area") }>
				<DataGrid>
					<GridHead data={[ 'A', 'B', 'C' ]} />
					<GridRow data={[ 'a', 'b', 'c' ]} />
				</DataGrid>
			</div>
		</div>
	)
}

export default ItemGrid;