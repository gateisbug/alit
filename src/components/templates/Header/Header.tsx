import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { ReactNode } from "react";
import { Typo } from "@src/components/atoms";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

type Props = {
	children: ReactNode;
}

function Header({ children }:Props) {
	const navigate = useNavigate();

	const onClickLogo = () => {
		navigate('/')
	}

	return (
		<header className={ cx("Header") }>
			<div className={ cx("Logo") } onClick={onClickLogo}>
				<Typo t="title">Azur Lane</Typo>
			</div>
			{ children }
		</header>
	)
}

export default Header;