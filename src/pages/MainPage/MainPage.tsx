import classNames from "classnames/bind";
import styles from "./MainPage.module.scss";
import { SearchItem } from "@src/components/molecules";
import { Header, Nav } from "@src/components/templates";
import GunIcon from "@src/assets/GunIcon";

const cx = classNames.bind(styles);

function MainPage() {
	return (
		<section className={ cx("MainPage") }>
			<Header search={<SearchItem />} />
			<section className={ cx("main") }>
				<Nav />
			</section>
		</section>
	)
}

export default MainPage;