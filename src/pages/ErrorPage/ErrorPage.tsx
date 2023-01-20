import classNames from "classnames/bind";
import styles from "./ErrorPage.module.scss";

const cx = classNames.bind(styles);

function ErrorPage() {
	return (
		<section className={ cx("Error") }>
			Not Found
		</section>
	)
}

export default ErrorPage;