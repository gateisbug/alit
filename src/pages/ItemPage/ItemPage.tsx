import { Item } from "@src/components/templates";
import classNames from "classnames/bind";
import styles from "./ItemPage.module.scss";

const cx = classNames.bind(styles);

function ItemPage() {

	return (
		<section className={ cx("ItemPage") }>
			<Item.Header />
		</section>
	)
}

export default ItemPage;