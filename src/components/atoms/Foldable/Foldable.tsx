import { ReactElement, ReactNode } from "react";
import Collapsible from "react-collapsible";
import classNames from "classnames/bind";
import styles from "./Foldable.module.scss";

const cx = classNames.bind(styles);

type Props = {
	header: ReactElement;
	body: ReactNode;
}

function Foldable({ header, body }:Props) {
	return (
		<Collapsible trigger={header}>
			<div className={ cx("Foldable-container") }>
				{ body }
			</div>
		</Collapsible>
	)
}

export default Foldable;