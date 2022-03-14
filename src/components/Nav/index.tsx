import classNames from "classnames/bind";
import styles from "./style.module.scss";
import NavItem from "./NavItem";
import NavIcon from "components/NavIcon";

const cx = classNames.bind(styles);

const navLists = [
	{ to:"/main_gun", title:"함포", icon:"https://azurlane.netojuu.com/w/images/thumb/d/d5/Firepower.png/50px-Firepower.png" },
	{ to:"/torpedo", title:"어뢰", icon:"https://azurlane.netojuu.com/w/images/thumb/4/40/Torpedo.png/50px-Torpedo.png" },
	{ to:"/aa_gun", title:"대공포", icon:"https://azurlane.netojuu.com/w/images/thumb/0/0f/AntiAir.png/50px-AntiAir.png" },
	{ to:"/airplane", title:"함재기", icon:"https://azurlane.netojuu.com/w/images/thumb/6/6a/Aviation.png/50px-Aviation.png" },
	{ to:"/auxiliary", title:"보조장비", icon:"https://azurlane.netojuu.com/w/images/thumb/0/06/Armor.png/50px-Armor.png" }
]

export default function Nav() {
	return (
		<>
			<ul className={cx("NavLinks")}>
				{
					navLists.map((nav, idx) => (
						<NavItem key={idx} to={nav.to}>
							<NavIcon title={nav.title} link={nav.icon} />
						</NavItem>
					))
				}
			</ul>
			<hr className={cx("line")} />
		</>
	)
}

