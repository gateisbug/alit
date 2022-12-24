import classNames from "classnames/bind";
import styles from "./MainPage.module.scss";
import { SearchItem } from "@src/components/molecules";
import { Header } from "@src/components/templates";

const cx = classNames.bind(styles);

function MainPage() {
	return (
		<section className={ cx("MainPage") }>
			<Header search={<SearchItem />} />
			<section className={ cx("main") }>
				main
			</section>
		</section>
	)
}

export default MainPage;