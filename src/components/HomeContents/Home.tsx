import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import Blank from "components/Blank";

const cx = classNames.bind(styles);

export default function HomeContents() {
	return (
		<div className={cx("Home")}>
			<div className={cx("Home-container")}>
				<p><Blank link="https://arca.live/b/azurlane/45593816">이 정보글</Blank>을 개인적으로 보기 편하게 바꿨음.</p>
				<p>디자인은 <Blank link="https://mui.com/store/?utm_source=docs&utm_medium=referral&utm_campaign=templates-store">MUI 예제</Blank>랑
					<Blank link="https://slaimuda.github.io/ectl/#/home">Azur Lane Github io</Blank>를 참고함.</p>
				<p>원래 정보글을 올린 작성자한테 허락 받음.</p>
				<p>장비 이미지는 <Blank link="https://azurlane.koumakan.jp/wiki/Azur_Lane_Wiki">여기서</Blank> 가져옴</p>
				<p>모바일은 최대한 대응해봤는데 잘 됐는지 몰?루</p>
				<p>GitHub 원본 소스는 <Blank link="https://github.com/gateisbug/alit">여기로</Blank></p>
				<p>latest update : 22-11-14</p>
			</div>
		</div>
	)
}