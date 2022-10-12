<script lang="ts">
  import type { NavItem } from "src/types";
  import Hamburger from "$lib/components/icons/Hamburger.svelte";
  import ArrowDown from "$lib/components/icons/ArrowDown.svelte";
  import Cross from "$lib/components/icons/Cross.svelte";
  export let items: NavItem[] = [];
</script>

<div class="drawer">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <!-- Navbar -->
    <div class="w-screen navbar">
      <div class="flex-1">
        <a href="/" class="btn btn-ghost normal-case text-3xl">Cthutils</a>
      </div>
      <div class="flex-none lg:hidden">
        <label for="my-drawer" class="btn btn-square btn-ghost">
          <Hamburger/>
        </label>
      </div>
      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal p-0">
          {#each items as item}
            <li>
              <a href={item.path}>
                {item.label}
                {#if item.subItems}
                  <ArrowDown/>
                {/if}
              </a>
              {#if item.subItems && item.subItems.length > 0}
                <ul class="z-10 p-2 bg-base-100">
                  {#each item.subItems as subItem}
                    <li>
                      <a href={item.path + subItem.path}>{subItem.label}</a>
                    </li>
                  {/each}
                </ul>
              {/if}
            </li>
          {/each}
        </ul>
      </div>
    </div>
    <!-- Page content here -->
    <slot />
  </div>
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay" />
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
      <!-- Sidebar content here -->
      <label for="my-drawer" class="btn btn-circle ml-auto mr-0 mb-2">
        <Cross/>
      </label>
      {#each items as item}
        <li tabindex="0">
          <a href={item.path}>{item.label}</a>
        </li>
        {#if item.subItems && item.subItems.length > 0}
          <ul class="rounded-box bg-base-100 p-2">
            {#each item.subItems as subItem}
              <li><a href={item.path + subItem.path}>{subItem.label}</a></li>
            {/each}
          </ul>
        {/if}
      {/each}
    </ul>
  </div>
</div>
