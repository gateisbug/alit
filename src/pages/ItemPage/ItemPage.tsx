import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Item } from "@src/components/organisms";
import classNames from "classnames/bind";
import styles from "./ItemPage.module.scss";

const cx = classNames.bind(styles);

function ItemPage() {
	const { pathname, /*search*/ } = useLocation();

	useEffect(() => {
		document.body.scrollIntoView({ behavior: 'smooth' })
	}, [pathname])

	return (
		<section className={ cx("ItemPage") } id='_azurlane-item-page'>
			<div className={ cx("sticky") }>
				<Item.Header />
				<Item.Nav />
			</div>
			<Item.Contents />
		</section>
	)
}

export default ItemPage;