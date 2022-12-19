import classNames from "classnames/bind";
import styles from "./ItemPage.module.scss";
import { SearchItem } from "@src/components/molecules";
import { Contents, Header, Nav } from "@src/components/templates";
import { ItemGrid, ItemSide } from "@src/components/organisms";

const cx = classNames.bind(styles);

function ItemPage() {
	return (
		<section className={ cx("ItemPage") }>
			<Header search={<SearchItem />} />
			<div className={ cx("body") }>
				<Nav>
					<ItemSide />
				</Nav>
				<Contents>
					<ItemGrid />
				</Contents>
			</div>
		</section>
	)
}

export default ItemPage;