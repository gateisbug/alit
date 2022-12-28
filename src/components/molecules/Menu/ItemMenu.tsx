import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { usePathfinder } from "@src/hooks";
import { Sypo } from "@src/components/atoms";

const cx = classNames.bind(styles);

function ItemMenu() {
	const { category, path, navigate, pathname } = usePathfinder();

	const nav = category('item');
	const division = category(path[1] || '');


	return (
		<nav className={ cx("ItemMenu") }>
			<div className={ cx("item-class") }>
				{
					nav.map(v => (
						<div key={v.url}
						     className={ cx("item-class-box", (pathname.includes(v.url)) && 'active') }
						     onClick={() => navigate(v.url)} >
							<Sypo type='p1' weight={500}>{ v.text }</Sypo>
						</div>
					))
				}
			</div>
			<div className={ cx("line") } />
			<div className={ cx("item-division") }>
				{
					division.map(v => (
						<div key={v.url}
						     className={ cx("item-division-box") }
						     onClick={() => navigate(v.url)}>
							<Sypo type='p2' weight={(pathname === v.url) ? 700:400}>{ v.text }</Sypo>
						</div>
					))
				}
			</div>
		</nav>
	)
}

export default ItemMenu;