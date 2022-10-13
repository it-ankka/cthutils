/* eslint-disable @typescript-eslint/no-explicit-any */
import skills from "$lib/data/skills"
export type NavItem = {
	label: string;
	path: string;
	subItems?: NavItem[];
}


export type SelectOption = { value: any; id: string; label: string }

export type Characteristics = {
	str: number,
	dex: number
	pow: number
	con: number
	app: number
	edu: number
	siz: number
	int: number
}

export type Characteristic = keyof Characteristics

export type Skills = {
	[key: (keyof skills) | string]: number
}

export type Backstory = {
	personalDescription: string;
	traits: string;
	ideologyAndBeliefs: string;
	injuriesAndScars: string;
	phobiasAndManias: string;
	significantPeople: string;
	meaningfulLocations: string;
	arcaneTomesAndSpells: string;
	treasuredPossessions: string;
	encountersWithStrangeEntities: string
}

export type Wealth = {
	spendingLevel: number;
	cash: number;
	assets: {name: string, value: number}[]
}

export type Character = {
	// General info
	name: string;
	occupation: string;
	birthplace: string;
	residence: string;
	pronoun: string;
	age: number;

	// Stats
	characteristics: Characteristics;
	skills: Skills;

	// Derived
	hp: {max: number, current: number};
	mp: {max: number, current: number};
	luck: {starting: number, current: number}
	sanity: {starting: number, current: number}

	// Other
	story: string;
	backstory: BackStory
	gearAndPossessions: string[];
	wealth: Wealth;

	notes: string;

}
