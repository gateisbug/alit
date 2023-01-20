import classNames from "classnames/bind";
import styles from "./Item.module.scss";
import { Menu } from "@src/components/molecules";

const cx = classNames.bind(styles);

function ItemNav() {
	return (
		<nav className={ cx("item-nav") }>
			<Menu.Item />
		</nav>
	)
}

export default ItemNav;