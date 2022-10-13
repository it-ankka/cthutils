<script lang="ts">
	import type { SelectOption } from 'src/types';

	export let value: string | number = 'none';
	export let placeholder = '';
	export let options: SelectOption[] = [];
</script>

<select
	{placeholder}
	class={`select select-bordered select-sm w-full border-neutral-content ${
		!value ? 'text-neutral' : ''
	}`}
    bind:value={value}
	on:change={(e) => {
		if (e.currentTarget.value !== 'none') value = e.currentTarget.value;
	}}
>
	<option disabled selected class="hidden" value="none">{placeholder}</option>
	{#each options as opt}
		<option value={opt.id} class="text-neutral-content">{opt.label}</option>
	{/each}
</select>
