import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { usePathfinder } from "@src/hooks";
import { SearchBar, Sypo } from "@src/components/atoms";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import useResponsive from "@src/hooks/useResponsive";

const cx = classNames.bind(styles);

function ItemMenu() {
	const { isMobile, isSmall } = useResponsive();

	const [searchParams, setSearchParams] = useSearchParams();
	const { category, path, navigate, pathname } = usePathfinder();

	const nav = category('item', isMobile);
	const division = category(path[1] || '');

	const onSearchKeyword = (value:string) => {
		if(value.length === 0) {
			setSearchParams(undefined);
		}
		else {
			setSearchParams({ search:value });
		}
	}

	useEffect(() => {
		document.body.scrollIntoView({ behavior: 'smooth' });
	}, [searchParams])


	return (
		<nav className={ cx("ItemMenu") }>
			<div className={ cx("nav") }>
				<div className={ cx("item-class") }>
					{
						nav.map(v => (
							<div key={v.url}
							     className={ cx("item-class-box", (pathname.includes(v.url)) && 'active') }
							     onClick={() => navigate(v.url)} >
								{
									!isMobile
									? (<Sypo type='p1' weight={500}>{ v.text }</Sypo>)
									: (<div className={ cx("Icon") }>{v.text}</div>)
								}
							</div>
						))
					}
				</div>
				{
					(!isSmall) ? <SearchBar onSearch={onSearchKeyword} /> : null
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