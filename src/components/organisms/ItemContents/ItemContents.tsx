import classNames from "classnames/bind";
import styles from "./Item.module.scss";
import { Datagrid } from "@src/components/molecules";

const cx = classNames.bind(styles);

function ItemContents() {
	return (
		<main className={ cx("item-contents") }>
			<Datagrid.Item />
		</main>
	)
}

export default ItemContents;