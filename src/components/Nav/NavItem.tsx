import {NavLink} from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./style.module.scss";

const cx = classNames.bind(styles);

interface Props {
	to: string;
	children?: any;
}

export default function NavItem({ to, children }:Props) {
	const setActive = ({isActive}:{isActive:boolean}) => (
		isActive ? cx("active") : ""
	)

	return <li><NavLink to={to} className={setActive}>{children}</NavLink></li>
}