<script lang="ts">
	import { pb } from '$lib/pocketbase/pocketbase';
	import type { TechStack } from '$lib/types/tech_stack_types.js';
	import type { User } from '$lib/types/user_types.js';
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';

	const { data } = $props();

	const startDate = new Date(data.project.started_at).toLocaleDateString('en-US', {
		dateStyle: 'long',
		timeZone: 'Asia/Jakarta'
	});

	const finishDate = data.project.finish_at
		? new Date(data.project.finish_at).toLocaleDateString('en-US', {
				dateStyle: 'long',
				timeZone: 'Asia/Jakarta'
			})
		: 'Present';

	const techStacks: TechStack[] = data.project.expand?.tech_stacks;
	const contributors: User[] = data.project.expand?.contributors;
</script>

<svelte:head>
	<title>agil.zip | {data.project.title}</title>
	<meta name="description" content={data.project.description} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content={`https://agil.zip/extract/${data.project.slug}`} />
	<meta name="twitter:title" content={`agil.zip | ${data.project.title}`} />
	<meta name="twitter:description" content={data.project.short_description} />
	<meta name="twitter:image" content={pb.getFileUrl(data.project, data.project.images[0])} />

	<meta property="og:type" content="article" />
	<meta property="og:title" content="agil.zip" />
	<meta property="og:description" content={data.project.short_description} />
	<meta property="og:url" content={`https://agil.zip/extract/${data.project.slug}`} />
	<meta property="og:image" content={pb.getFileUrl(data.project, data.project.images[0])} />
</svelte:head>

<section class="bg-gradient-to-tr from-night to-dark">
	<div
		transition:fly
		class="mx-auto min-h-screen w-full max-w-screen-2xl py-32 px-8 text-white space-y-8"
	>
		<div in:fly={{ x: -50, duration: 500, delay: 500 }}>
			<a href="/extract" class="flex items-center gap-2">
				<Icon icon="uim:arrow-circle-left" class="text-2xl" />
				<p>Back</p>
			</a>
		</div>
		<div in:fly={{ y: 50, duration: 500, delay: 500 }}>
			<h1 class="text-gradient from-grape to-white py-2">{data.project.title}</h1>
			<h2>{data.project.short_description}</h2>
			<h5 class="text-gradient from-saffron to-white">{startDate} - {finishDate}</h5>
		</div>
		<div in:fly={{ y: -50, duration: 500, delay: 500 }} class="flex gap-4 overflow-x-scroll">
			{#each data.project.images as image}
				<div class="min-h-[480px] max-h-[480px] bg-white/10">
					<img
						src={pb.getFileUrl(data.project, image)}
						alt={image}
						class="w-full h-full object-contain object-center"
					/>
				</div>
			{/each}
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
			<div in:fly={{ y: -50, duration: 500, delay: 800 }} class="bg-white/10 p-5 w-full">
				<h4 class="text-gradient from-grape to-white font-bold">Description</h4>
				<p class="prose text-white prose-a:text-amethyst">{@html data.project.description}</p>
			</div>
			<div class="space-y-2">
				<div in:fly={{ y: -50, duration: 500, delay: 800 }} class="bg-white/10 p-5 w-full">
					<h4 class="text-gradient from-grape to-white font-bold">Techstacks</h4>
					<div class="flex items-center gap-2 flex-wrap">
						{#each techStacks as techStack}
							<div class="bg-white/10 px-5 py-2 relative group">
								<div class="flex items-center gap-2">
									<Icon icon={techStack.iconify_name} class="text-2xl" />
									<p class="text-nowrap">{techStack.name}</p>
								</div>
							</div>
						{/each}
					</div>
				</div>
				<div in:fly={{ y: -50, duration: 500, delay: 800 }} class="bg-white/10 p-5 w-full">
					<h4 class="text-gradient from-grape to-white font-bold">Contributors</h4>
					<div class="flex items-center gap-2 flex-wrap">
						{#each contributors as contributor}
							<div class="bg-white/10 px-5 py-2">
								<div class="flex items-center gap-2">
									<img
										src={pb.files.getUrl(contributor, contributor.avatar)}
										alt={contributor.avatar}
										class="h-8 aspect-square bg-white rounded-full"
									/>
									<p>{contributor.name}</p>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
