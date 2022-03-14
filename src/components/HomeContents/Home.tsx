import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export default function HomeContents() {
	return (
		<div className={cx("Home")}>
			<div className={cx("Home-container")}>
				<p><a href="https://arca.live/b/azurlane/45593816">이 정보글</a>을 개인적으로 보기 편하게 바꿨음.</p>
				<p>디자인은 <a href="https://mui.com/store/?utm_source=docs&utm_medium=referral&utm_campaign=templates-store">MUI 예제</a>랑 <a href="https://slaimuda.github.io/ectl/#/home">Azur Lane Github io</a>를 참고함.</p>
				<p>원래 정보글을 올린 작성자한테 허락 받음.</p>
				<p>장비 이미지는 <a href="https://azurlane.koumakan.jp/wiki/Azur_Lane_Wiki">여기서</a> 가져옴</p>
				<p>모바일은 최대한 대응해봤는데 잘 됐는지 몰?루</p>
				<p>GitHub 원본 소스는 <a href="https://github.com/gateisbug/azurlane">여기로</a></p>
			</div>
		</div>
	)
}