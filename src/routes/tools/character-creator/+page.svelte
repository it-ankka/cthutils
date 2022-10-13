<script lang="ts">
	import AddFile from '$lib/components/icons/AddFile.svelte';
	import GeneralInfoFields from '$lib/views/character-creator/GeneralInfoFields.svelte';
	import { newCharacter } from './character';
	let character = newCharacter();
</script>

<div class="flex w-screen flex-col items-center">
	<h1 class="my-4 text-center text-4xl">Character Creator</h1>
	<h1 class="py-2 text-2xl">General info</h1>
	<div class="flex flex-col gap-2 align-middle md:flex-row-reverse">
		<label
			for="image-input"
			class="btn btn-ghost rounded-box mx-auto flex h-4/5 max-h-[250px] w-4/5 max-w-[200px] cursor-pointer justify-center bg-transparent align-middle outline-dashed outline-4 outline-neutral hover:bg-base-300 hover:outline-current md:h-auto"
		>
			<AddFile class="w-12" />
		</label>
		<input type="file" id="image-input" class="hidden" />
		<GeneralInfoFields bind:data={character} />
	</div>
	<div class="divider mx-auto w-3/4" />
	<h1 class="py-2 text-2xl">Characteristics</h1>
</div>
