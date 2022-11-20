import classNames from "classnames/bind";
import styles from "./MainPage.module.scss";
import { Header, Nav, Contents } from "@src/components/templates";
import { ExternLinks } from "@src/components/molecules";

const cx = classNames.bind(styles);

function MainPage() {
	return (
		<section className={ cx("MainPage") }>
			<Header>
				<div className={ cx("header-container") }>
					<p></p>
					<ExternLinks />
				</div>
			</Header>
			{/*<Nav>*/}
			{/*	Nav Area*/}
			{/*</Nav>*/}
			<Contents>
				Contents Area
			</Contents>
		</section>
	)
}

export default MainPage;