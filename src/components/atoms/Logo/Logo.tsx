import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Logo.module.scss";
import { ROUTE_ITEM_PAGE } from "@src/defs/routes";

const cx = classNames.bind(styles);

function Logo() {
	const navigate = useNavigate();

	const onClickLogo = () => {
		navigate(ROUTE_ITEM_PAGE);
	}

	return (
		<h1 className={ cx("Logo") }
		    onClick={onClickLogo}>
			<img src="/assets/logo.png" alt="Logo"/>
		</h1>
	)
}

export default Logo;