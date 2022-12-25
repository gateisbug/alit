import classNames from "classnames/bind";
import styles from "./ModalContent.module.scss";
import { Resource } from "@src/defs/resource";
import { Portrait, Sypo } from "@src/components/atoms";

const cx = classNames.bind(styles);

type Props = {
	datum: Resource;
}

function ItemModal({ datum }:Props) {
	return (
		<div className={ cx("ItemModal") }>
			<header className={ cx("header") }>
				<Sypo type='h3' weight={700}>{ datum.name }</Sypo>
			</header>
			<nav className={ cx("status") }>
				<Portrait datum={datum} sz='lx' />
			</nav>
		</div>
	)
}

export default ItemModal;