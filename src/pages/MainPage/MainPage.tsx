import classNames from "classnames/bind";
import styles from "./MainPage.module.scss";
import { Header } from "@src/components/templates";

const cx = classNames.bind(styles);

function MainPage() {
	return (
		<section className={ cx("MainPage") }>
			<Header type="main" />
		</section>
	)
}

export default MainPage;