import { LinkType } from "@src/defs/types";
import useTransfer from "@src/hooks/common/useTransfer";
import classNames from "classnames/bind";
import styles from "./Breadcrum.module.scss";

const cx = classNames.bind(styles);

type Props = {
	links: Array<LinkType>;
}

function Breadcrum() {
	const { transfer } = useTransfer();

	return (
		<div className={ cx("Breadcrum") }></div>
	)
}

export default Breadcrum;