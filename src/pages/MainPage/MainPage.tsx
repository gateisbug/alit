import classNames from "classnames/bind";
import styles from "./MainPage.module.scss";

const cx = classNames.bind(styles);

function MainPage() {
	return (
		<section className={ cx("MainPage") }>
			Main
		</section>
	)
}

export default MainPage;