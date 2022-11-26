import classNames from "classnames/bind";
import styles from "./Logo.module.scss";
// import src from "@src/assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Typo } from "@src/components/atoms";

const cx = classNames.bind(styles);

function Logo() {
	const navigate = useNavigate();

	const onClickLogo = () => {
		navigate('/');
	}

	return (
		<h1 className={ cx("Logo") } onClick={onClickLogo}>
			{/*<img src={src} alt="Logo"/>*/}
			<Typo t={"title"}>Azur Base</Typo>
		</h1>
	)
}

export default Logo;