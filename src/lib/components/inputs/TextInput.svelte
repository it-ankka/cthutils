<script lang="ts">
	export let name = '';
	export let placeholder = '';
	export let value: string | number | undefined = undefined;
	export let min: number | undefined = undefined;
	export let max: number | undefined = undefined;
	let clazz = '';
	export { clazz as class };
</script>

{#if typeof value === 'number'}
	<input
		{name}
		{min}
		{max}
		type="number"
		bind:value
		{placeholder}
		class={`input input-sm rounded-none border-b-current ${clazz || ''}`}
	/>
{:else}
	<input
		{name}
		bind:value
		{placeholder}
		class={`input input-sm rounded-none border-b-current ${clazz || ''}`}
	/>
{/if}
