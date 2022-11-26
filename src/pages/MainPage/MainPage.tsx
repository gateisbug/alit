import classNames from "classnames/bind";
import styles from "./MainPage.module.scss";

const cx = classNames.bind(styles);

function MainPage() {
	return (
		<section className={ cx("MainPage") }>
			"a"
		</section>
	)
}

export default MainPage;