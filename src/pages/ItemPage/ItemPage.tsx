import { Item } from "@src/components/templates";
import classNames from "classnames/bind";
import styles from "./ItemPage.module.scss";
import Breadcrum from "@src/components/atoms/Breadcrum";

const cx = classNames.bind(styles);

function ItemPage() {

	return (
		<section className={ cx("ItemPage") }>
			<Item.Header />
			<Breadcrum />
		</section>
	)
}

export default ItemPage;