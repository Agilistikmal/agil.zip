<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { fly } from 'svelte/transition';

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

{#key index}
	<section class="mx-auto h-screen w-full max-w-screen-2xl overflow-hidden px-8 text-white">
		<div class="flex h-full w-full items-center">
			<div>
				<h5 class="font-light">Software Engineer</h5>
				<h1 class="text-7xl">Agil Ghani Istikmal</h1>
				<div class="mt-2 flex flex-wrap gap-2 overflow-hidden">
					<h3 class="text-nowrap">Explore my</h3>
					<h3
						in:fly={{ duration: 500, delay: 500, y: -30 }}
						out:fly={{ duration: 500, delay: 100, y: 30 }}
						class="w-36 overflow-hidden text-center font-bold underline"
					>
						{texts[index]}
					</h3>
					<h3>here.</h3>
				</div>
			</div>
		</div>
	</section>
{/key}
