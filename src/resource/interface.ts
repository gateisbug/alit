export type category = "Main Gun" | "Torpedo" | "Anti Air" | "Fighter" | "Bomber" | "Attacker" | "Auxiliary" | "Augmentation";
export type tier = "UR" | "SSR" | "SR" | "R" | "N";
export type division = "EndSpec" | "Mainstream" | "Lowend";

export interface IItem {
	title: string;
	comment: string;
	division: division;
	link: string;
	nickname: string[];
	category: category;
	tier: tier;
}

export interface IShip {
	title: string;
	tier: tier;
}