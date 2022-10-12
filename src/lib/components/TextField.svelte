<script lang="ts">
    export let name: string | undefined = undefined;
    export let label: string | undefined = undefined;
    export let value: string | number = "";
    export let placeholder: string = "";
    export let small = false;
    export let onOptionClick: ((o: { value: any; id: string; label: string }) => void) = () => {}
    export let numberOptions:
        | { min: number | undefined; max: number | undefined }
        | undefined = undefined;

    export let type: "text" | "number" | "select" = "text";
    export let options: { value: any; id: string; label: string }[] = [];

    let clazz: string = "";
    export { clazz as class };
    export let inputClass: string = "";
</script>

<div class={`form-control ${clazz}`}>
    {#if label}
        <label class="label font-bold w-24" for={name}>
            <span class="label-text">
                {label}
            </span>
        </label>
    {/if}
    {#if $$slots.left || $$slots.right}
        <label class="input-group dropdown">
            <slot name="left" />
            {#if type === "select"}
                <div class="w-full">
                    <select
                        {placeholder}
                        class={`select select-bordered border-neutral-content select-sm w-full ${
                            !value ? "text-neutral" : ""
                        }`}
                        value={value || "none"}
                        on:change={(e) => {
                            if (e.currentTarget.value !== "none")
                                value = e.currentTarget.value;
                        }}
                    >
                        <option disabled selected class="hidden" value="none"
                            >{placeholder}</option
                        >
                        {#each options as opt}
                            <option value={opt.id} class="text-neutral-content"
                                >{opt.label}</option
                            >
                        {/each}
                    </select>
                </div>
            {:else}
                <input
                    {name}
                    {type}
                    min={numberOptions?.min}
                    max={numberOptions?.max}
                    {value}
                    {placeholder}
                    class={`input ${
                        small ? "input-sm" : ""
                    } appearance-none input-bordered border-neutral-content input-current w-full ${
                        inputClass || ""
                    }`}
                />
                {#if options.length > 0}
                    <ul
                        tabindex="0"
                        class="dropdown-content menu-compact p-2 shadow bg-base-100 rounded-box mt-8 max-h-52 overflow-x-scroll"
                    >
                        {#each options as o}
                            <li on:click={() => onOptionClick(o)}>{o.label}</li>
                        {/each}
                    </ul>
                {/if}
            {/if}
            <slot name="right" />
        </label>
    {:else if type === "select"}
        <div class="w-full">
            <select
                {placeholder}
                class={`select select-bordered border-neutral-content select-sm w-full ${
                    !value ? "text-neutral" : ""
                }`}
                value={value || "none"}
                on:change={(e) => {
                    if (e.currentTarget.value !== "none")
                        value = e.currentTarget.value;
                }}
            >
                <option disabled selected class="hidden" value="none"
                    >{placeholder}</option
                >
                {#each options as opt}
                    <option value={opt.id} class="text-neutral-content"
                        >{opt.label}</option
                    >
                {/each}
            </select>
        </div>
    {:else}
        <input
            {name}
            {type}
            min={numberOptions?.min}
            max={numberOptions?.max}
            {value}
            {placeholder}
            class={`input ${
                small ? "input-sm" : ""
            } appearance-none input-bordered border-current w-full ${
                inputClass || ""
            }`}
        />

        {#if options.length > 0}
            <ul
                tabindex="0"
                class="dropdown-content menu-compact p-2 shadow bg-base-100 rounded-box mt-8 max-h-52 overflow-x-scroll"
            >
                {#each options as o}
                    <li on:click={() => onOptionClick(o)}>{o.label}</li>
                {/each}
            </ul>
        {/if}
    {/if}
</div>
