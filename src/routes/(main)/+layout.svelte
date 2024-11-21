<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();
</script>

<div class={`min-h-screen`}>
	<Navbar />
	{@render children()}
</div>
