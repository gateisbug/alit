import classNames from "classnames/bind";
import styles from "./NotFound.module.scss";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function NotFoundPage() {
	const navigate = useNavigate();

	const onClickButton = () => {
		navigate('/')
	}

	return (
		<div className={ cx("NotFound") }>
			<div className={ cx("container") }>
				<h1>404</h1>
				<h2>Page Not Found</h2>
				<p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
			</div>
			<div className={ cx("button") } onClick={onClickButton}>
				HOMEPAGE
			</div>
		</div>
	)
}

export default NotFoundPage;