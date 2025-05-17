<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import Icon from '@iconify/svelte';

	let { data } = $props();

	let query = new URLSearchParams($page.url.searchParams.toString());

	async function handleSearch(
		e: KeyboardEvent & {
			currentTarget: EventTarget & HTMLInputElement;
		}
	) {
		const search = e.currentTarget.value;
		query.set('search', search);
		goto('?' + query.toString(), { keepFocus: true });
	}

	async function handleSort(
		e: Event & {
			currentTarget: EventTarget & HTMLSelectElement;
		}
	) {
		const sort = e.currentTarget.value;
		query.set('sort', sort);
		goto('?' + query.toString(), { keepFocus: true });
	}

	async function handleTechStack(
		e: Event & {
			currentTarget: EventTarget & HTMLSelectElement;
		}
	) {
		const techStack = e.currentTarget.value;
		query.set('techStack', techStack);
		goto('?' + query.toString(), { keepFocus: true });
	}
</script>

<svelte:head>
	<title>agil.zip | Projects</title>
	<meta
		name="description"
		content="I'm a passionate fullstack developer with expertise in front-end and back-end development. View my portfolio to see how I create innovative and user-friendly solutions."
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="https://agil.zip" />
	<meta name="twitter:title" content="agil.zip" />
	<meta
		name="twitter:description"
		content="I'm a passionate fullstack developer with expertise in front-end and back-end development. View my portfolio to see how I create innovative and user-friendly solutions."
	/>
	<meta name="twitter:image" content="/logo/BG White.png" />

	<meta property="og:type" content="article" />
	<meta property="og:title" content="agil.zip" />
	<meta
		property="og:description"
		content="I'm a passionate fullstack developer with expertise in front-end and back-end development. View my portfolio to see how I create innovative and user-friendly solutions."
	/>
	<meta property="og:url" content="https://agil.zip" />
	<meta property="og:image" content="/logo/BG White.png" />
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
		class="mx-auto min-h-screen w-full max-w-screen-2xl pt-36 pb-32 px-8 text-white relative z-10"
	>
		<!-- Hero -->
		<div in:fly={{ y: 100, duration: 800 }} class="mb-12">
			<div class="flex gap-2 items-center mb-4">
				<div class="h-1 w-10 bg-gradient-to-r from-saffron to-amaranth"></div>
				<h5 class="font-medium tracking-wider">PROJECTS</h5>
			</div>
			<h1 class="font-bold text-gradient from-moonstone to-celeste">
				Project<span class="text-gradient from-saffron to-tomato">.zip</span> extracted!
			</h1>
			<h4 class="text-white/80 mt-2">Explore my portfolio and recent projects</h4>
		</div>

		<!-- Search -->
		<div in:fly={{ opacity: 0, y: 50, delay: 300, duration: 800 }} class="mt-16">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div class="grid grid-cols-2 gap-4">
					<label
						for="tech_stacks"
						class="p-5 w-full h-full bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 shadow-md shadow-night/20 hover:border-white/20 transition duration-300"
					>
						<p class="text-xs text-white/60 mb-2">TechStack</p>
						<select
							name="tech_stacks"
							id="tech_stacks"
							class="bg-transparent w-full focus:outline-none"
							onchange={handleTechStack}
						>
							<option value="">All</option>
							{#each data.techStacks as techStack}
								<option value={techStack.slug}>{techStack.name}</option>
							{/each}
						</select>
					</label>
					<label
						for="sort"
						class="p-5 w-full h-full bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 shadow-md shadow-night/20 hover:border-white/20 transition duration-300"
					>
						<p class="text-xs text-white/60 mb-2">Sort by</p>
						<select
							name="sort"
							id="sort"
							class="bg-transparent w-full focus:outline-none"
							onchange={handleSort}
						>
							<option value="newest">Newest</option>
							<option value="oldest">Oldest</option>
							<option value="az">Name (Asc)</option>
							<option value="za">Name (Desc)</option>
						</select>
					</label>
				</div>
				<label
					for="search"
					class="p-5 w-full h-full bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 shadow-md shadow-night/20 hover:border-white/20 transition duration-300"
				>
					<p class="text-xs text-white/60 mb-2">Search</p>
					<input
						name="search"
						id="search"
						type="text"
						class="bg-transparent outline-none placeholder:text-white/50 w-full"
						placeholder="Search projects..."
						onkeyup={handleSearch}
					/>
				</label>
			</div>
		</div>

		<!-- Project Cards -->
		<div class="mt-10">
			{#if data.projects.totalItems == 0}
				<div
					in:fly={{ y: 50, duration: 500, delay: 500 }}
					class="text-center py-10 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
				>
					<Icon icon="uim:box" class="text-5xl mx-auto mb-4 text-white/50" />
					<p class="text-white/70">No projects found. Try adjusting your search criteria.</p>
				</div>
			{:else}
				<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
					{#key data.projects}
						{#each data.projects.items as project, i}
							<ProjectCard {project} index={i} />
						{/each}
					{/key}
				</div>
			{/if}
		</div>
	</div>
</section>
