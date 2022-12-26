import { LinkType } from "@src/defs/types";
import classNames from "classnames/bind";
import styles from "./Breadcrum.module.scss";

const cx = classNames.bind(styles);

type Props = {
	link: LinkType;
	index: number;
}

function Link({ link }:Props) {

}

export default Link;