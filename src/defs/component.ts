export type TypoType = "h1"|'h2'|'h3'|'p1'|'p2'|'p3';
export type TypoLine = 'single'|'multi';
export type TypoWeight = 'bold'|'medium'|'regular'|700|500|400|'b'|'m'|'r';

export type IconType = {
	size?: number;
	color?: string;
	fill?: string;
	padding?: number;
}

export type NavList = {
	title: string;
	url: string;
	Icon?: JSX.Element;
}