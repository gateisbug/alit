import { ReactNode } from "react";

export type IconType = {
	size?: number;
	color?: string;
	fill?: string;
	padding?: number;
}

export type ButtonType = {
	children: ReactNode;
	padding?: string;
	colorSet?: 'Orange' | 'Blue';
}