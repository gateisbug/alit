import classNames from "classnames/bind";
import styles from "./NotFound.module.scss";

const cx = classNames.bind(styles);

function NotFoundPage() {
	return (
		<section className={ cx("NotFound") }>
			Not Found
		</section>
	)
}

export default NotFoundPage;