import classNames from "classnames/bind";
import styles from "./ItemPage.module.scss";
import { SearchItem } from "@src/components/molecules";
import { Header, Nav } from "@src/components/templates";

const cx = classNames.bind(styles);

function ItemPage() {
	return (
		<section className={ cx("ItemPage") }>
			<Header search={<SearchItem />} />
			<div className={ cx("body") }>
				<Nav />
			</div>
		</section>
	)
}

export default ItemPage;