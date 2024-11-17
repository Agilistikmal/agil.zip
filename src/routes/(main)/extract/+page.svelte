<script lang="ts">
	import { onMount } from 'svelte';
	import ProjectCard from './ProjectCard.svelte';
	import { fly } from 'svelte/transition';

	let projects: number[] = [];

	onMount(() => {
		projects = [1, 2, 3, 4, 5];
	});
</script>

<section class="bg-gradient-to-r from-amethyst to-colombiablue">
	<section class="mx-auto min-h-screen w-full max-w-screen-2xl pt-48 pb-32 px-8 text-white">
		<div in:fly={{ y: 500, duration: 1000 }}>
			<h1 class="font-bold">
				Project<span class="text-gradient from-saffron to-white">.zip</span> extracted!
			</h1>
			<h4>You can explore my projects now!</h4>
		</div>
		<div class="mt-48">
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{#each projects as _, i}
					<ProjectCard index={i} />
				{/each}
			</div>
		</div>
	</section>
</section>
