import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Logo.module.scss";

const cx = classNames.bind(styles);

function Logo() {
	const navigate = useNavigate();

	const onClickLogo = () => {
		navigate('/');
	}

	return (
		<h1 className={ cx("Logo") } onClick={onClickLogo}>
			<img src="/img/logo_w.png" alt="Logo"/>
		</h1>
	)
}

export default Logo