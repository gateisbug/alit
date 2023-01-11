import classNames from "classnames/bind";
import styles from "./Obtain.module.scss";

const cx = classNames.bind(styles);

type Type = "상자깡" | "메인" | "장비개발" | "군부연구실" | "코어샵" | "건조" | "서브미션" | "해역구조" | "통상파괴"
			|"빛과 그림자의 아이리스" | "허상의 탑" | "동절의 북해" | "부흥의 찬송가" | "결상점작전" | "하늘 아래의 찬송가" | "디바인 트레지 코미디" | "비추는 나선의 경해" | "짙은 자줏빛의 안개" | "깊게 울리는 메아리" | "맑고 푸른 바다"
			| "거듭되는 평행세계" | "아이리스의 천사" | "빛나는 정원의 맹세" | "영원한 밤의 환광" | "작은 약속" | "거울에 비친 이색" | "접해몽화"

type Props = {
	strings: Array<string>;
	seperator?: string;
}

function Obtain({ strings, seperator='\t' }:Props) {
	const splice = (string:string) => {
		const split = string.split(seperator);

		if(split.length === 0) {
			return {
				head: "-"
			}
		}
		else if(split.length === 1) {
			return {
				head: split[0]
			};
		}
		else {
			let head = split[0];
			let body = '';

			for (let i = 1; i < split.length; i++) {
				body += split[i];

				if(i !== split.length - 1) {
					body += ', ';
				}
			}

			return {
				head, body
			};
		}
	}

	return (
		<div className={ cx("Obtain") }>
		</div>
	)
}

export default Obtain;