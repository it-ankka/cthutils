import type { Character } from "src/types";

export const newCharacter = (): Character => ({
		// General info
		name: '',
		pronoun: '',
		residence: '',
		birthplace: '',
		occupation: '',
		age: 25,
		// Stats
		characteristics: {
			str: 0,
			con: 0,
			dex: 0,
			int: 0,
			siz: 0,
			pow: 0,
			app: 0,
			edu: 0
		},
		skills: {},

		// Derived
		hp: { max: 0, current: 0 },
		mp: { max: 0, current: 0 },
		luck: { starting: 0, current: 0 },
		sanity: { starting: 0, current: 0 },

		// Other
		story: '',
		backstory: {},
		gearAndPossessions: [],
		wealth: {
			cash: 0,
			spendingLevel: 20,
			assets: []
		},
		notes: ''
});
