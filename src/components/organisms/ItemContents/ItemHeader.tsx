import { Horizontal, Logo } from "@src/components/atoms";
import { Links } from "@src/components/molecules";
import classNames from "classnames/bind";
import styles from "./Item.module.scss";

const cx = classNames.bind(styles);

function ItemHeader() {
	return (
		<Horizontal>
			<Logo />
			<div className={ cx("flex-end") }>
				<Links />
			</div>
		</Horizontal>
	)
}

export default ItemHeader;