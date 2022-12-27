import classNames from "classnames/bind";
import styles from "./Item.module.scss";
import { Horizontal, Logo, SearchBar, Breadcrum } from "@src/components/atoms";
import { Links } from "@src/components/molecules";

const cx = classNames.bind(styles);

function ItemHeader() {
	const onSearchKeyword = (value:string) => {
		console.log(value);
	}

	return (
		<Horizontal>
			<Logo />
			<Breadcrum />
			<SearchBar onSearch={onSearchKeyword} />
			<div className={ cx("flex-end") }>
				<Links />
			</div>
		</Horizontal>
	)
}

export default ItemHeader;