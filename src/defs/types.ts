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

export type ScreenSize = 'desktop'|'laptop'|'tablet'|'mobile';

export type ModalProps = {
	show: boolean;
	id?: string;
	contents?: ReactNode;
}