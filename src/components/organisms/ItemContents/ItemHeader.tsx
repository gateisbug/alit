import { useSearchParams } from "react-router-dom";
import { Horizontal, Logo, SearchBar } from "@src/components/atoms";
import { Bakery, Links } from "@src/components/molecules";
import classNames from "classnames/bind";
import styles from "./Item.module.scss";
import { useEffect } from "react";

const cx = classNames.bind(styles);

function ItemHeader() {
	const [searchParams, setSearchParams] = useSearchParams();

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
		<Horizontal>
			<Logo />
			{/*<Bakery.Item />*/}
			<SearchBar onSearch={onSearchKeyword} />
			<div className={ cx("flex-end") }>
				<Links />
			</div>
		</Horizontal>
	)
}

export default ItemHeader;