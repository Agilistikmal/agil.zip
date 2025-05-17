<script lang="ts">
	import type { Project } from '$lib/types/project_types';
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';

	type Params = {
		project: Project;
		index: number;
	};
	import { pb } from '$lib/pocketbase/pocketbase';
	import type { User } from '$lib/types/user_types';
	import type { TechStack } from '$lib/types/tech_stack_types';

	let { index, project }: Params = $props();

	const techStacks: TechStack[] = project.expand?.tech_stacks;
</script>

<a
	href={`/extract/${project.slug}`}
	class="block w-full h-full bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 shadow-md shadow-night/20 overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-grape/20 hover:border-white/20 transition duration-500 group"
	in:fly={{ duration: 500, y: 50, delay: 250 * index }}
>
	<div class="bg-white/90 aspect-video overflow-hidden">
		<img
			src={pb.getFileUrl(project, project.images[0])}
			alt={project.images[0]}
			class="object-cover object-top w-full h-full group-hover:scale-105 transition-transform duration-700"
		/>
	</div>
	<div class="px-5 pt-4 pb-5">
		<h4 class="font-semibold text-gradient from-saffron to-tomato">{project.title}</h4>
		<p class="truncate text-white/80 text-sm mt-1">
			{project.short_description}
		</p>
		<div class="mt-4 flex justify-between items-center">
			<div class="flex items-center gap-2 flex-wrap">
				{#each techStacks.slice(0, 4) as techStack, i}
					<div
						class="bg-white/10 rounded-full p-1.5 hover:bg-white/20 transition-colors duration-300 relative group/tech cursor-pointer"
					>
						<Icon icon={techStack.iconify_name} class="text-xl" />
						<div
							class="absolute bottom-full left-1/2 -translate-x-1/2 hidden group-hover/tech:block z-20 mb-1"
						>
							<div
								class="px-2 py-1 bg-dark/90 backdrop-blur-md rounded-md text-center whitespace-nowrap shadow-lg"
							>
								<p class="text-xs">{techStack.name}</p>
							</div>
						</div>
					</div>
				{/each}
				{#if techStacks.length > 4}
					<div class="bg-white/10 rounded-full px-2 py-0.5 text-xs">
						+{techStacks.length - 4}
					</div>
				{/if}
			</div>
			<div class="text-white/40 group-hover:text-grape transition-colors duration-300">
				<Icon
					icon="uim:angle-right-b"
					class="text-xl group-hover:translate-x-1 transition-transform duration-300"
				/>
			</div>
		</div>
	</div>
</a>
