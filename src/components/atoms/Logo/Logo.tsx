import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Logo.module.scss";
import { ITEM_PAGE_INDEX_URL } from "@src/defs/routes";

const cx = classNames.bind(styles);

function Logo() {
	const navigate = useNavigate();

	const onClickLogo = () => {
		navigate(ITEM_PAGE_INDEX_URL);
	}

	return (
		<h1 className={ cx("Logo") }
		    onClick={onClickLogo}>
			<img src="/assets/logo.png" alt="Logo"/>
		</h1>
	)
}

export default Logo;