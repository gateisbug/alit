import classNames from "classnames/bind";
import styles from "./ItemPage.module.scss";

const cx = classNames.bind(styles);

function ItemPage() {
	return (
		<section className={ cx("ItemPage") }>
			ItemPage
		</section>
	)
}

export default ItemPage;