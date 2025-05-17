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

<section class="bg-gradient-to-tr from-night to-dark min-h-screen relative overflow-hidden">
	<!-- Decorative background elements -->
	<div
		class="absolute top-20 right-10 w-80 h-80 bg-grape/20 blur-3xl rounded-full opacity-30 animate-pulse -z-0"
	></div>
	<div
		class="absolute bottom-20 left-10 w-96 h-96 bg-amaranth/20 blur-3xl rounded-full opacity-30 animate-pulse -z-0"
	></div>
	<div
		class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-moonstone/10 blur-3xl rounded-full opacity-20 animate-pulse -z-0"
	></div>

	<div
		transition:fly
		class="mx-auto min-h-screen w-full max-w-screen-2xl py-36 px-8 text-white relative z-10"
	>
		<!-- Back Button -->
		<div in:fly={{ x: -20, duration: 500, delay: 300 }} class="mb-8">
			<a
				href="/extract"
				class="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:bg-white/10 transition duration-300 w-max"
			>
				<Icon icon="uim:angle-left" class="text-xl" />
				<p>Back to Projects</p>
			</a>
		</div>

		<!-- Header -->
		<div in:fly={{ y: 30, duration: 500, delay: 300 }} class="mb-12">
			<div class="flex gap-2 items-center mb-2">
				<div class="h-1 w-10 bg-gradient-to-r from-grape to-amethyst"></div>
				<h5 class="font-medium tracking-wider text-white/70">PROJECT DETAILS</h5>
			</div>
			<h1 class="text-gradient from-grape to-white font-bold pb-2">{data.project.title}</h1>
			<h3 class="text-white/80 max-w-3xl">{data.project.short_description}</h3>
			<div class="flex items-center gap-2 mt-4 text-white/60">
				<Icon icon="uim:calendar-alt" class="text-xl" />
				<h5 class="text-gradient from-saffron to-tomato">{startDate} - {finishDate}</h5>
			</div>
		</div>

		<!-- Image Gallery -->
		<div class="mb-16">
			<div in:fly={{ y: 30, duration: 500, delay: 400 }} class="mb-4">
				<div class="flex gap-2 items-center mb-2">
					<div class="h-1 w-10 bg-gradient-to-r from-moonstone to-celeste"></div>
					<h5 class="font-medium tracking-wider text-white/70">GALLERY</h5>
				</div>
			</div>
			<div
				in:fly={{ y: 30, duration: 500, delay: 500 }}
				class="grid grid-cols-1 md:grid-cols-3 gap-4"
			>
				{#each data.project.images as image, i}
					<div
						class="rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg shadow-night/30 hover:shadow-night/50 transition duration-300 group"
					>
						<img
							src={pb.getFileUrl(data.project, image)}
							alt={image}
							class="object-cover w-full h-full aspect-video group-hover:scale-105 transition-transform duration-700"
						/>
					</div>
				{/each}
			</div>
		</div>

		<!-- Details -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<!-- Description -->
			<div
				in:fly={{ y: 30, duration: 500, delay: 600 }}
				class="col-span-2 bg-white/5 backdrop-blur-lg p-8 rounded-lg border border-white/10 shadow-lg shadow-night/30"
			>
				<h3 class="text-gradient from-grape to-white font-bold mb-4 flex items-center gap-2">
					<Icon icon="uim:document-layout-left" />
					Description
				</h3>
				<div
					class="prose prose-invert text-white/80 prose-headings:text-white prose-a:text-amethyst hover:prose-a:text-wisteria prose-a:transition-colors prose-a:duration-300 max-w-none"
				>
					{@html data.project.description}
				</div>
			</div>

			<!-- Side details -->
			<div class="space-y-6">
				<!-- Techstacks -->
				<div
					in:fly={{ y: 30, duration: 500, delay: 700 }}
					class="bg-white/5 backdrop-blur-lg p-6 rounded-lg border border-white/10 shadow-lg shadow-night/30"
				>
					<h3 class="text-gradient from-grape to-white font-bold mb-4 flex items-center gap-2">
						<Icon icon="uim:layers-alt" />
						Tech Stack
					</h3>
					<div class="flex items-center gap-3 flex-wrap">
						{#each techStacks as techStack}
							<div
								class="bg-white/10 px-4 py-2 rounded-md border border-white/5 hover:bg-white/15 transition-colors duration-300 hover:scale-105 transform"
							>
								<div class="flex items-center gap-2">
									<Icon icon={techStack.iconify_name} class="text-2xl" />
									<p class="text-nowrap text-white/90">{techStack.name}</p>
								</div>
							</div>
						{/each}
					</div>
				</div>

				<!-- Contributors -->
				<div
					in:fly={{ y: 30, duration: 500, delay: 800 }}
					class="bg-white/5 backdrop-blur-lg p-6 rounded-lg border border-white/10 shadow-lg shadow-night/30"
				>
					<h3 class="text-gradient from-grape to-white font-bold mb-4 flex items-center gap-2">
						<Icon icon="uim:users-alt" />
						Contributors
					</h3>
					<div class="space-y-3">
						{#each contributors as contributor}
							<div
								class="bg-white/10 px-4 py-2 rounded-md border border-white/5 hover:bg-white/15 transition-colors duration-300 group"
							>
								<div class="flex items-center gap-3">
									<img
										src={pb.files.getUrl(contributor, contributor.avatar)}
										alt={contributor.avatar}
										class="h-10 aspect-square bg-white rounded-full group-hover:scale-110 transition-transform duration-300"
									/>
									<div>
										<p class="font-medium">{contributor.name}</p>
										<p class="text-white/60 text-sm">{contributor.role || 'Contributor'}</p>
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
