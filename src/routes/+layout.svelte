<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>agil.zip</title>
	<meta name="description" content="Agil Ghani Istikmal | Personal Website | Software Engineer" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="https://agil.zip" />
	<meta name="twitter:title" content="agil.zip" />
	<meta
		name="twitter:description"
		content="Agil Ghani Istikmal | Personal Website | Software Engineer"
	/>
	<meta name="twitter:image" content="/logo/BG White.png" />

	<meta property="og:type" content="article" />
	<meta property="og:title" content="agil.zip" />
	<meta
		property="og:description"
		content="Agil Ghani Istikmal | Personal Website | Software Engineer"
	/>
	<meta property="og:url" content="https://agil.zip" />
	<meta property="og:image" content="/logo/BG White.png" />
</svelte:head>

<main class="font-lexend">
	{@render children()}
</main>
