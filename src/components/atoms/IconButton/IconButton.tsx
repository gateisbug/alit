import { ReactNode, MouseEventHandler } from "react";
import classNames from "classnames/bind";
import styles from "./IconButton.module.scss";

const cx = classNames.bind(styles);

type Props = {
	element: ReactNode;
	onClick?: MouseEventHandler<HTMLDivElement>;
}

function IconButton({ element, onClick=undefined }:Props) {
	return (
		<div className={ cx("IconButton") } onClick={onClick}>
			{ element }
		</div>
	)
}

export default IconButton;