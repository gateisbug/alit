import classNames from "classnames/bind";
import styles from "./Nav.module.scss";
import { ItemSide } from "@src/components/molecules";

const cx = classNames.bind(styles);

function Nav() {
	return (
		<nav className={ cx("Nav") }>
			<ItemSide />
		</nav>
	)
}

export default Nav;