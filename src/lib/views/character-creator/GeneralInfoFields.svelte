<script lang="ts">
import names from '$lib/data/names.json';
import occupations from '$lib/data/occupations.json';

import type {Character} from "src/types"
import DropdownWrapper from "$lib/components/DropdownWrapper.svelte";
import Dice from "$lib/components/icons/Dice.svelte";
import Info from "$lib/components/icons/Info.svelte";
import Label from "$lib/components/inputs/Label.svelte";
import TextInput from "$lib/components/inputs/TextInput.svelte";

let character: Character

export  {character as data}
let count = 0;

const randomizeName = () => {
	const len = names.surname.length;
	const firstnameIdx = Math.floor(Math.random() * len);
	const surnameIdx = Math.floor(Math.random() * len);
	const firstname = count % 2 === 0 ? names.male[firstnameIdx] : names.female[firstnameIdx];
	const lastname = names.surname[surnameIdx];
	count++;
	return firstname + ' ' + lastname;
};

const search = (query: string, values: string[]) => {
	return values.filter((x) => x.toLowerCase().includes(query.toLowerCase()));
};

$: suggestions = search(character.occupation, occupations).map((o) => ({
	id: o,
	label: o,
	value: o
}));

</script>

	<div class="mx-auto grid max-w-md grid-cols-4 gap-x-2 px-2">
		<Label for="name">Name:</Label>
		<span class="col-span-3 flex flex-row">
			<TextInput class="w-full" bind:value={character.name} placeholder="Name" />
			<button
				class="btn btn-ghost btn-circle btn-sm"
				on:click={() => {
					character = { ...character, name: randomizeName() };
				}}
			>
				<Dice class="h-5 fill-current hover:fill-current" />
			</button>
		</span>
		<Label for="occupation">Occupation:</Label>
		<span class="col-span-3 flex flex-row">
			<DropdownWrapper
				class="w-full"
				options={suggestions}
				onItemClick={(o) => (character.occupation = o.value)}
			>
				<TextInput
					class="w-full"
					name="occupation"
					bind:value={character.occupation}
					placeholder="Occupation"
				/>
			</DropdownWrapper>
			<button
				class="btn btn-ghost btn-circle btn-sm"
				on:click={(e) => {
					e.preventDefault();
					e.stopPropagation();
				}}
			>
				<Info />
			</button>
		</span>
		<Label for="birthplace">Birthplace:</Label>
		<TextInput
			class="col-span-3"
			name="birthplace"
			bind:value={character.birthplace}
			placeholder="Birthplace"
		/>
		<Label for="residence">Residence:</Label>
		<TextInput
			class="col-span-3"
			name="residence"
			bind:value={character.residence}
			placeholder="Residence"
		/>
		<Label class="col-span-1 md:col-span-1" for="pronoun">Pronoun:</Label>
		<TextInput class="col-span-3 md:col-span-1" name="pronoun" bind:value={character.pronoun} placeholder="Pronoun" />
		<Label class="col-span-1 md:col-span-1" for="age">Age:</Label>
		<TextInput class="col-span-3 md:col-span-1" name="age" bind:value={character.age} min={0} max={99} placeholder="Age" />
	</div>
