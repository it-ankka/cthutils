<script lang="ts">
	export let name: string | undefined = undefined;
	export let label: string | undefined = undefined;
	export let value: string | number = '';
	export let onchange: (() => void) | undefined = undefined;
	export let placeholder: string = '';
	export let small = false;
	export let onOptionClick: (o: { value: any; id: string; label: string }) => void = () => {};
	export let numberOptions: { min: number | undefined; max: number | undefined } | undefined =
		undefined;

	export let type: 'text' | 'number' | 'select' = 'text';
	export let options: { value: any; id: string; label: string }[] = [];

	let clazz: string = '';
	export { clazz as class };
	export let inputClass: string = '';
</script>

<div class={`form-control ${clazz}`}>
	{#if label}
		<label class="label w-24 font-bold" for={name}>
			<span class="label-text">
				{label}
			</span>
		</label>
	{/if}
	{#if $$slots.left || $$slots.right}
		<label class="input-group">
			<slot name="left" />
			{#if type === 'select'}
				<div class="w-full">
					<select
						{placeholder}
						class={`select select-bordered select-sm w-full border-neutral-content ${
							!value ? 'text-neutral' : ''
						}`}
						value={value || 'none'}
						on:change={(e) => {
							if (e.currentTarget.value !== 'none') value = e.currentTarget.value;
						}}
					>
						<option disabled selected class="hidden" value="none">{placeholder}</option>
						{#each options as opt}
							<option value={opt.id} class="text-neutral-content">{opt.label}</option>
						{/each}
					</select>
				</div>
			{:else if options.length > 0}
				<label class="dropdown w-full">
					<input
						{name}
						min={numberOptions?.min}
						max={numberOptions?.max}
						bind:value
						{placeholder}
						class={`input ${
							small ? 'input-sm' : ''
						} input-current input-bordered w-full appearance-none border-neutral-content ${
							inputClass || ''
						}`}
					/>
					<ul
						tabindex="0"
						class="dropdown-content rounded-box menu-compact max-h-52 w-full overflow-x-scroll bg-base-100 p-2 shadow shadow-black"
					>
						{#each options as o}
							<li
								class="duration-200 hover:text-white"
								tabindex={0}
								on:click={() => onOptionClick(o)}
							>
								{o.label}
							</li>
						{/each}
					</ul>
					<span />
				</label>
			{:else}
				<input
					{name}
					min={numberOptions?.min}
					max={numberOptions?.max}
					bind:value
					{placeholder}
					class={`input ${
						small ? 'input-sm' : ''
					} input-current input-bordered w-full appearance-none border-neutral-content ${
						inputClass || ''
					}`}
				/>
			{/if}
			<slot name="right" />
		</label>
	{:else if type === 'select'}
		<div class="w-full">
			<select
				{placeholder}
				class={`select select-bordered select-sm w-full border-neutral-content ${
					!value ? 'text-neutral' : ''
				}`}
				value={value || 'none'}
				on:change={(e) => {
					if (e.currentTarget.value !== 'none') value = e.currentTarget.value;
				}}
			>
				<option disabled selected class="hidden" value="none">{placeholder}</option>
				{#each options as opt}
					<option value={opt.id} class="text-neutral-content">{opt.label}</option>
				{/each}
			</select>
		</div>
	{:else if options.length > 0}
		<label class="dropdown w-full">
			<input
				{name}
				min={numberOptions?.min}
				max={numberOptions?.max}
				bind:value
				{placeholder}
				class={`input ${
					small ? 'input-sm' : ''
				} input-current input-bordered w-full appearance-none border-neutral-content ${
					inputClass || ''
				}`}
			/>
			<ul
				tabindex="0"
				class="dropdown-content rounded-box menu-compact max-h-52 w-full overflow-x-scroll bg-base-100 p-2 shadow"
			>
				{#each options as o}
					<li
						class="duration-200 hover:text-white"
						on:click={() => onOptionClick(o)}
					>
						{o.label}
					</li>
				{/each}
			</ul>
		</label>
	{:else}
		<input
			{name}
			min={numberOptions?.min}
			max={numberOptions?.max}
			bind:value
			{placeholder}
			class={`input ${
				small ? 'input-sm' : ''
			} input-current input-bordered w-full appearance-none border-neutral-content ${
				inputClass || ''
			}`}
		/>
	{/if}
</div>
