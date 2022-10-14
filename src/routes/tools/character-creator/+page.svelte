<script lang="ts">
	import AddFile from '$lib/components/icons/AddFile.svelte';
	import GeneralInfoFields from '$lib/views/character-creator/GeneralInfoFields.svelte';
	import { newCharacter } from './character';
	let character = newCharacter();

	const isImage = (src: string) =>
	new Promise<Boolean>((resolve) => {
			const img = new Image();
			img.onload = () => {
				resolve(true)
			};
			img.onerror = () => {
				resolve(false)
			};
			img.src = src
		});

	const handleFileChange = (e: Event & { currentTarget: HTMLInputElement }) => {
		const file = e.currentTarget.files![0];
		if (file) {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = async () => {
				const base64 = reader.result?.toString() || null;
				if(!base64) return
				console.log(base64)
				const valid = await isImage(base64)
				if(!valid) return
				character.image = base64
			};
		}
	};
</script>

<div class="flex w-screen flex-col items-center">
	<h1 class="my-4 text-center text-4xl">Character Creator</h1>
	<h1 class="py-2 text-2xl">General info</h1>
	<div class="flex flex-col gap-2 align-middle md:flex-row-reverse">
		<input type="file" accept="image/*" id="image-input" class="hidden" on:change={handleFileChange} />
		<label
			for="image-input"
			class="btn btn-ghost rounded-box mx-auto flex h-4/5 max-h-[250px] w-4/5 max-w-[200px] cursor-pointer justify-center bg-transparent bg-cover bg-center align-middle outline-dashed outline-4 outline-neutral hover:bg-base-300 hover:outline-current md:h-auto"
			style={`${character.image ? 'background-image: url(' + character.image + ')' : ''}`}
		>
			{#if !character.image}
				<AddFile class="w-12" />
			{/if}
		</label>
		<GeneralInfoFields bind:data={character} />
	</div>
	<div class="divider mx-auto w-3/4" />
	<h1 class="py-2 text-2xl">Characteristics</h1>
</div>
