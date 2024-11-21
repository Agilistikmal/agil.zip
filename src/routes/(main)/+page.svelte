<script lang="ts">
	import Icon from '@iconify/svelte';
	import { onDestroy, onMount } from 'svelte';
	import { fly, scale } from 'svelte/transition';
	import Background from '$lib/components/Background.svelte';

	let texts: string[] = ['archive', '.zip', 'project', 'profile', 'portfolio'];
	let index = 0;
	let roller: NodeJS.Timeout;

	onMount(() => {
		roller = setInterval(() => {
			if (index === texts.length - 1) index = 0;
			else index++;
		}, 3000);
	});

	onDestroy(() => {
		clearInterval(roller);
	});
</script>

<Background />
<section
	transition:fly
	class="mx-auto h-screen w-full max-w-screen-2xl overflow-hidden px-8 text-white"
>
	{#key index}
		<div class="flex h-full w-full items-center">
			<div>
				<h5 class="text-base font-light md:text-xl">Software Engineer</h5>
				<h1 class="md:text-7xl">Agil Ghani Istikmal</h1>
				<div class="mt-2 flex flex-wrap gap-2 overflow-hidden">
					<h3 class="text-nowrap text-xl md:text-3xl">Explore my</h3>
					<h3
						in:fly={{ duration: 500, delay: 500, y: -15 }}
						out:fly={{ duration: 500, delay: 100, y: 15 }}
						class="w-24 overflow-hidden text-center text-xl text-gradient from-saffron to-white font-bold underline md:w-36 md:text-3xl"
					>
						{texts[index]}
					</h3>
					<a href="/extract" class="text-xl md:text-3xl">here.</a>
				</div>
				<div class="mt-5">
					<a
						href="/extract"
						class="flex w-max items-center gap-2 bg-white/25 px-5 py-2 text-white transition duration-500 hover:bg-white hover:text-black"
						data-sveltekit-preload-data
						data-sveltekit-preload-code
					>
						<Icon icon="hugeicons:zip-01" class="text-2xl" />
						<p>Extract to view my projects</p>
					</a>
				</div>
			</div>
		</div>
	{/key}
</section>
