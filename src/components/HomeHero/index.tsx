import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import Blank from "components/Blank";

const cx = classNames.bind(styles);

export default function HomeHero() {
	return (
		<div className={cx("HomeHero")}>
			<div className={cx("title")}>Azur Lane Item Lists</div>
			<div className={cx("subtitle")}>
				<Blank link="https://arca.live/b/azurlane/45593816">
					22-08-27 장비 설명회
				</Blank>
			</div>
		</div>
	)
}