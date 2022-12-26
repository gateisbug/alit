import classNames from "classnames/bind";
import styles from "./Item.module.scss";
import { Horizontal, Logo } from "@src/components/atoms";

const cx = classNames.bind(styles);

function ItemHeader() {
	return (
		<Horizontal>
			<Logo />
		</Horizontal>
	)
}

export default ItemHeader;