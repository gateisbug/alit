import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export default function HomeHero() {
	return (
		<div className={cx("HomeHero")}>
			<div className={cx("title")}>Azur Lane Item Lists</div>
			<div className={cx("subtitle")}>
				<a href="https://arca.live/b/azurlane/45593816">
					22-03-07 장비 설명회
				</a>
			</div>
		</div>
	)
}