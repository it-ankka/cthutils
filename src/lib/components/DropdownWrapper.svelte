<script lang="ts">
  import type { SelectOption } from "src/types";
  export let options: SelectOption[] = []
  export let onItemClick: ((o: SelectOption) => void) | undefined = undefined;
  let clazz: string = ""
  export {clazz as class}
</script>

<span class={"dropdown " + clazz}>
    <slot/>
  {#if options.length > 0}
    <ul
        tabindex="0"
        class="dropdown-content rounded-box menu-compact max-h-52 w-full overflow-x-scroll bg-base-100 shadow shadow-black"
    >
        {#each options as o}
            <li
                class="duration-200 hover:text-white m-0 p-2 hover:bg-base-300"
                tabindex={0}
                on:click={() => onItemClick && onItemClick(o)}
            >
                {o.label}
            </li>
        {/each}
    </ul>
  {/if}
</span>
