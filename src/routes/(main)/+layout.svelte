<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();
</script>

<div class={`min-h-screen`}>
	<Navbar />
	{@render children()}
	<Footer />
</div>
