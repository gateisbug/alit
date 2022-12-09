import classNames from "classnames/bind";
import styles from "./Nav.module.scss";

const cx = classNames.bind(styles);

function Nav() {
	return (
		<nav className={ cx("Nav") }>
			Nav
		</nav>
	)
}

export default Nav;