<script lang="ts">
	import Navbar from './Navbar.svelte';
	import Background from './Background.svelte';

	let { children } = $props();
</script>

<div class={`min-h-screen`}>
	<Background />
	<Navbar />
	{@render children()}
</div>
