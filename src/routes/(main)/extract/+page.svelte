<script lang="ts">
	import { onMount } from 'svelte';
	import ProjectCard from './ProjectCard.svelte';
	import { fly } from 'svelte/transition';
	import { pb } from '$lib/pocketbase/pocketbase';
	import type { Project } from '$lib/types/project_types';
	import { page } from '$app/stores';
	import type { TechStack } from '$lib/types/tech_stack_types';

	let paramPage: string | null;
	$: paramPage = $page.url.searchParams.get('page');

	let paramLimit: string | null;
	$: paramLimit = $page.url.searchParams.get('limit');

	let projects: Project[] = [];
	let techStacks: TechStack[] = [];

	onMount(async () => {
		const resultProjects = await pb
			.collection('projects')
			.getList(Number(paramPage), Number(paramLimit), {
				expand: 'contributors,tech_stacks'
			});
		projects = resultProjects.items as Project[];

		const resultTechStacks = await pb.collection('tech_stacks').getFullList();
		techStacks = resultTechStacks as TechStack[];
	});
</script>

<section class="bg-gradient-to-r from-amethyst to-colombiablue">
	<section class="mx-auto min-h-screen w-full max-w-screen-2xl pt-48 pb-32 px-8 text-white">
		<!-- Hero -->
		<div in:fly={{ y: 500, duration: 1000 }}>
			<h1 class="font-bold">
				Project<span class="text-gradient from-saffron to-white">.zip</span> extracted!
			</h1>
			<h4>You can explore my projects now!</h4>
		</div>

		<!-- Search -->
		<div class="mt-48 bg-white/25 backdrop-filter backdrop-blur-sm">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div class="grid grid-cols-2 gap-4">
					<select name="tech_stacks" id="tech_stacks" class="p-5 bg-transparent">
						{#each techStacks as techStack}
							<option value={techStack.slug}>{techStack.name}</option>
						{/each}
					</select>
					<select name="sort" id="sort" class="p-5 bg-transparent">
						<option value="az">Name (Asc)</option>
						<option value="za">Name (Desc)</option>
					</select>
				</div>
				<div>
					<input
						type="text"
						class="p-5 bg-transparent outline-none placeholder:text-white/70"
						placeholder="Search here..."
					/>
				</div>
			</div>
		</div>

		<!-- Project Cards -->
		<div class="mt-5">
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{#each projects as project, i}
					<ProjectCard {project} index={i} />
				{/each}
			</div>
		</div>
	</section>
</section>
