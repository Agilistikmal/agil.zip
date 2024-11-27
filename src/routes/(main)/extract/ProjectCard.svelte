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
	class="block w-full bg-white/10 backdrop-filter backdrop-blur-sm overflow-hidden hover:-translate-y-2 hover:shadow-xl transition duration-500"
	in:fly={{ duration: 500, y: 500, delay: 250 * index }}
>
	<div class="bg-white aspect-video">
		<img
			src={pb.getFileUrl(project, project.images[0])}
			alt={project.images[0]}
			class="object-cover w-full h-full"
		/>
	</div>
	<div class="px-5 pt-2 pb-5">
		<h4 class="truncate text-gradient from-saffron to-white">{project.title}</h4>
		<p class="truncate">
			{project.short_description}
		</p>
		<div class="mt-2">
			<div class="flex items-center gap-1 text-2xl">
				{#each techStacks as techStack}
					<div class="bg-white rounded-full p-1 relative group">
						<Icon icon={techStack.iconify_name} />
						<div class="absolute top-0 left-0 hidden group-hover:block">
							<div class="-translate-y-5 px-2 bg-black rounded-lg text-center w-full mx-auto">
								<p class="text-xs text-nowrap">{techStack.name}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</a>
