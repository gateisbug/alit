import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface Props {
	title: string;
	link: string;
	sub?: boolean
}

export default function NavIcon({ title, link, sub }:Props) {
	return (
		<>
			<p className={cx("nav-text")}>
				{title}
			</p>
			<div className={sub ? cx("subnav-icon") : cx("nav-icon")}>
				<img src={link} alt="navIcon"/>
			</div>
		</>
	)
}