import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface Props {
	link: string;
	children: any;
}

export default function Menu({ link, children }:Props) {
	return ( <div className={cx("menu")}><a href={link} target="_blank" rel="noreferrer">{children}</a></div> )
}