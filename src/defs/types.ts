import { ReactNode } from "react";

export type TypoTypes = 'h1' | 'h2' | 'p1' | 'p2' | 'p3';
export type TypoWeight = 700 | 500 | 400;
export type TypoLine = 'S'|'M';

export type LinkType = {
	url: string;
	text: ReactNode;
}

export type Resource = {
	index: string;
	name: string;
	usage: string;
	explain: string;
	gain: Array<string>;
	class: string;
	division: string;
	category: string;
	nickname: string;
	tier: string;
	status: Array<Status>;
}

export type Status = {
	state: string;
	value: string;
}

export type JsonChain = {
	index: string;
	text: string;
	size: Size;
}

export type Size = 'sx'|'mx'|'lx'|'xx';

export type ScreenSize = 'desktop'|'laptop'|'tablet'|'mobile'|'nano';

export type ModalProps = {
	show: boolean;
	id?: string;
	contents?: ReactNode;
}

export type TObtain = {
	title: ObtainType;
	url: string,
	detail: string
}

export type ObtainType = "상자깡" | "메인" | "장비개발" | "군부연구실" | "코어샵" | "건조" | "서브미션" | "해역구조" | "통상파괴"
	| "빛과 그림자의 아이리스" | "허상의 탑" | "동절의 북해" | "부흥의 찬송가" | "결상점작전" | "하늘 아래의 찬송가" | "디바인 트레지 코미디"
	| "비추는 나선의 경해" | "짙은 자줏빛의 안개" | "깊게 울리는 메아리" | "맑고 푸른 바다" | "거듭되는 평행세계" | "아이리스의 천사"
	| "빛나는 정원의 맹세" | "영원한 밤의 환광" | "작은 약속" | "거울에 비친 이색" | "접해몽화" | "잿빛 폐허" |"-";