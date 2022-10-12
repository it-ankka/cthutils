<script lang="ts">
	import names from "$lib/data/names.json";
	import occupations from "$lib/data/occupations.json";
	import TextField from "$lib/components/TextField.svelte";
	import type { Character } from "src/types";
	import Dice from "$lib/components/icons/Dice.svelte";
	import Info from "$lib/components/icons/Info.svelte";

	let character: Character = {
		// General info
		name: "",
		pronoun: "",
		residence: "",
		birthplace: "",
		occupation: "",
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
			edu: 0,
		},
		skills: {},

		// Derived
		hp: { max: 0, current: 0 },
		mp: { max: 0, current: 0 },
		luck: { starting: 0, current: 0 },
		sanity: { starting: 0, current: 0 },

		// Other
		story: "",
		backstory: {},
		gearAndPossessions: [],
		wealth: {
			cash: 0,
			spendingLevel: 20,
			assets: [],
		},
		notes: "",
	};
	let count = 0;
	const randomizeName = () => {
		const len = names.surname.length;
		const firstnameIdx = Math.floor(Math.random() * len);
		const surnameIdx = Math.floor(Math.random() * len);
		const firstname =
			count % 2 === 0
				? names.male[firstnameIdx]
				: names.female[firstnameIdx];
		const lastname = names.surname[surnameIdx];
		count++;
		return firstname + " " + lastname;
	};

	const search = (query: string, values: string[]) => {
		return values.filter((x) =>
			x.toLowerCase().includes(query.toLowerCase())
		);
	};

	let suggestions: {id: string, label: string, value: any}[] = []
	$: suggestions = search(character.occupation, occupations).map((o) => ({id: o, label: o, value: o}))
</script>

<div class="flex flex-col items-center w-screen">
	<h1 class="text-4xl text-center mx-auto my-4">Character Creator</h1>
	<h1 class="text-2xl py-2">General info</h1>
	<div
		class="grid mx-auto px-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2"
	>
		<TextField
			small
			label="Name"
			bind:value={character.name}
			placeholder="Name"
			class="flex md:flex-row"
			inputClass="text-white"
		>
			<button
				slot="right"
				class="btn btn-outline fill-current btn-sm"
				on:click={() => {
					character = { ...character, name: randomizeName() };
				}}
			>
				<Dice class="fill-current hover:fill-current h-6" />
			</button>
		</TextField>
		<TextField
			small
			class="flex md:flex-row"
			label="Occupation"
			bind:value={character.occupation}
			bind:options={suggestions}
			onOptionClick={(o) => character.occupation = o.value}
			placeholder="Occupation"
		>
			<button slot="right" class="btn btn-outline btn-sm">
				<Info />
			</button>
		</TextField>

		<TextField
			small
			class="flex md:flex-row"
			label="Birthplace"
			bind:value={character.birthplace}
			placeholder="Birthplace"
		/>
		<TextField
			small
			class="flex md:flex-row"
			label="Residence"
			bind:value={character.residence}
			placeholder="Residence"
		/>
		<TextField
			small
			class="flex md:flex-row"
			label="Pronoun"
			bind:value={character.pronoun}
			placeholder="Pronoun"
		/>
		<TextField
			small
			class="flex md:flex-row"
			label="Age"
			type="number"
			bind:value={character.age}
			placeholder="Age"
		/>
	</div>
	<h1 class="text-2xl py-2">Characteristics</h1>
</div>
