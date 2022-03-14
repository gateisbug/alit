import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import styels from "./styles.module.scss"

const cx = classNames.bind(styels)

export interface Links {
	to: string;
	title: string;
}

interface Props {
	links: Links[];
}

export default function SubNav({ links }:Props) {
	const setActive = ({isActive}:{isActive:boolean}) => (
		isActive ? cx("active") : ""
	)

	return (
		<ul className={cx("Subnav")}>
			{
				links.map((item, idx) => (
					<li key={idx} className={cx("Subnav-item")}>
						<NavLink className={setActive} to={item.to}>{item.title}</NavLink>
					</li>
				))
			}
		</ul>
	)
}