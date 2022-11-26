import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { BLUE4 } from "@src/defs/color";
import { Logo, Search } from "@src/components/atoms";
import { ExternLink } from "@src/components/molecules";

const cx = classNames.bind(styles);
type Props = {
	type: "main"|"data";
}

function Header({ type }:Props) {

	if(type === 'main') {
		return (
			<header className={ cx("Header") } style={{ borderBottom:`1px solid ${BLUE4}` }}>
				<div className={ cx("logo") }>
					<Logo />
				</div>
				<div style={{ display: 'flex', flexFlow: 'row nowrap', flexGrow:1, justifyContent:'end' }}>
					<ExternLink />
				</div>
			</header>
		)
	}
	else {
		return (
			<header className={ cx("Header") }>
				<div className={ cx("logo") }>
					<Logo />
				</div>
				<div style={{ display: 'flex', flexFlow: 'row nowrap', flexGrow:1, justifyContent:'space-between' }}>
					<Search />
					<ExternLink />
				</div>
			</header>
		)
	}
}

export default Header;