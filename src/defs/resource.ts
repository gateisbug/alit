export type Resource = {
	index: string;
	name: string;
	usage: string;
	explaine: string;
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