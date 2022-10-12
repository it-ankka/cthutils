<script>
	import { navItems } from "./navitems";
	import NavBarDrawer from "$lib/components/NavBarDrawer.svelte";
	import "../app.postcss";
</script>

<NavBarDrawer items={navItems}> 
	<slot />
</NavBarDrawer>
