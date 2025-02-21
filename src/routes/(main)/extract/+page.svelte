<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

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

<section class="bg-gradient-to-tr from-night to-dark">
	<div
		transition:fly
		class="mx-auto min-h-screen w-full max-w-screen-2xl pt-48 pb-32 px-8 text-white"
	>
		<!-- Hero -->
		<div in:fly={{ y: 500, duration: 1000 }}>
			<h1 class="font-bold">
				Project<span class="text-gradient from-saffron to-white">.zip</span> extracted!
			</h1>
			<h4>You can explore my projects now!</h4>
		</div>

		<!-- Search -->
		<div in:fly={{ opacity: 0, delay: 500, duration: 500 }} class="mt-24">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div class="grid grid-cols-2 bg-white/25 backdrop-filter backdrop-blur-sm">
					<label for="tech_stacks" class="p-5 w-full h-full">
						<p class="text-xs">TechStack</p>
						<select
							name="tech_stacks"
							id="tech_stacks"
							class="bg-transparent w-full"
							onchange={handleTechStack}
						>
							<option value="">All</option>
							{#each data.techStacks as techStack}
								<option value={techStack.slug}>{techStack.name}</option>
							{/each}
						</select>
					</label>
					<label for="sort" class="p-5 w-full h-full">
						<p class="text-xs">Sort by</p>
						<select name="sort" id="sort" class="bg-transparent w-full" onchange={handleSort}>
							<option value="newest">Newest</option>
							<option value="oldest">Oldest</option>
							<option value="az">Name (Asc)</option>
							<option value="za">Name (Desc)</option>
						</select>
					</label>
				</div>
				<label for="search" class="p-5 w-full h-full bg-white/25 backdrop-filter backdrop-blur-sm">
					<p class="text-xs">Search</p>
					<input
						name="search"
						id="search"
						type="text"
						class="bg-transparent outline-none placeholder:text-white/70 w-full"
						placeholder="Search here..."
						onkeyup={handleSearch}
					/>
				</label>
			</div>
		</div>

		<!-- Project Cards -->
		<div class="mt-5">
			{#if data.projects.totalItems == 0}
				<div>
					<p>not found</p>
				</div>
			{:else}
				<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
