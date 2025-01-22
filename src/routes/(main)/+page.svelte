<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	import IntersectionObserver from 'svelte-intersection-observer';

	let texts: string[] = ['archive', '.zip', 'project', 'profile', 'portfolio'];
	let index = 0;
	let roller: NodeJS.Timeout;

	let aboutElement: HTMLElement;
	let aboutIntersecting: boolean | undefined;

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

<svelte:head>
	<title>agil.zip</title>
	<meta
		name="description"
		content="I am a versatile fullstack developer who loves creating cutting-edge web and mobile apps. From frontend and backend development, I have experience with every step of the development stack. Golang, Rust, Node.js, Java, Python, React, Vue, and Svelte are just a few of the programming languages and frameworks in which I am skilled. I also have a solid background in reverse engineering and scraping, which helps me to glean insightful information from data and create unique solutions.
"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="https://agil.zip" />
	<meta name="twitter:title" content="agil.zip" />
	<meta
		name="twitter:description"
		content="I am a versatile fullstack developer who loves creating cutting-edge web and mobile apps. From frontend and backend development, I have experience with every step of the development stack. Golang, Rust, Node.js, Java, Python, React, Vue, and Svelte are just a few of the programming languages and frameworks in which I am skilled. I also have a solid background in reverse engineering and scraping, which helps me to glean insightful information from data and create unique solutions.
"
	/>
	<meta name="twitter:image" content="/logo/BG White.png" />

	<meta property="og:type" content="article" />
	<meta property="og:title" content="agil.zip" />
	<meta
		property="og:description"
		content="I am a versatile fullstack developer who loves creating cutting-edge web and mobile apps. From frontend and backend development, I have experience with every step of the development stack. Golang, Rust, Node.js, Java, Python, React, Vue, and Svelte are just a few of the programming languages and frameworks in which I am skilled. I also have a solid background in reverse engineering and scraping, which helps me to glean insightful information from data and create unique solutions.
"
	/>
	<meta property="og:url" content="https://agil.zip" />
	<meta property="og:image" content="/logo/BG White.png" />
</svelte:head>

<!-- Home -->
<section id="home" class="bg-gradient-to-tr from-night to-dark h-full pb-16">
	<div
		transition:fly
		class="mx-auto h-screen w-full max-w-screen-2xl overflow-hidden px-8 text-white"
	>
		<div class="flex h-full w-full items-center">
			<div>
				<h5 class="font-light">Software Engineer</h5>
				<h1>Agil Ghani Istikmal</h1>
				<div class="mt-2 flex flex-wrap gap-2 overflow-hidden">
					<h3 class="text-nowrap">Explore my</h3>
					<div class="w-24 md:w-36 h-10 overflow-hidden">
						{#key index}
							<h3
								in:fly={{ duration: 500, delay: 500, y: -15 }}
								out:fly={{ duration: 500, delay: 0, y: 15 }}
								class="text-center text-gradient from-saffron to-white font-bold underline md:w-36"
							>
								{texts[index]}
							</h3>
						{/key}
					</div>
					<a href="/extract">
						<h3>here.</h3>
					</a>
				</div>
				<div class="mt-5 flex items-center gap-2 flex-wrap">
					<a
						href="/extract"
						class="flex w-max items-center gap-2 bg-grape px-5 py-2 text-white transition duration-500 hover:bg-white/25 group"
						data-sveltekit-preload-data
						data-sveltekit-preload-code
					>
						<div class="relative h-5 aspect-square">
							<img
								src="/logo/Logo White (Archive).svg"
								alt="agil.zip"
								class="h-6 opacity-100 group-hover:opacity-0 transition duration-500 absolute top-0 left-0"
							/>
							<img
								src="/logo/Logo (Archive).svg"
								alt="agil.zip"
								class="h-6 opacity-0 group-hover:opacity-100 transition duration-500 absolute top-0 left-0"
							/>
						</div>
						<p>Extract to view my projects</p>
					</a>

					<a
						href="#about"
						class="flex w-max items-center gap-2 bg-white/5 px-5 py-2 text-white transition duration-500 hover:bg-white/25 group"
						data-sveltekit-preload-data
						data-sveltekit-preload-code
					>
						<Icon icon="uim:angle-down" width="24" height="24" />
						<p>Explore more details</p>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- About -->
<section
	id="about"
	class="bg-gradient-to-tr from-night to-dark h-full min-h-screen"
	aria-label="about"
	bind:this={aboutElement}
>
	<IntersectionObserver element={aboutElement} bind:intersecting={aboutIntersecting}>
		{#if aboutIntersecting == true}
			<div
				transition:fly
				class="mx-auto min-h-screen w-full max-w-screen-2xl pt-32 md:pt-48 pb-32 px-8 text-white"
			>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
					<!-- Left Side -->
					<div class="md:min-h-96">
						<!-- Hero -->
						<div in:fly={{ y: 500, duration: 1000 }}>
							<h1 class="font-bold text-xl lg:text-5xl">
								<span class="text-gradient from-saffron to-white">Agil</span> Ghani
								<span class="text-gradient from-saffron to-white">Istikmal</span>
							</h1>
							<h4 class="text-sm lg:text-lg">
								or known as <span class="text-gradient from-saffron to-white">Agilistikmal</span>
							</h4>
						</div>

						<!-- Biography -->
						<div in:fly={{ y: 500, duration: 1000, delay: 500 }} class="mt-5">
							<p class="w-full max-w-screen-md text-sm lg:text-xl text-justify">
								I am a versatile fullstack developer who loves creating cutting-edge web and mobile
								apps. From frontend and backend development, I have experience with every step of
								the development stack. <span class="text-gradient from-tomato to-white"
									>Golang, Rust, Node.js, Java, Python, React, Vue, and Svelte</span
								> are just a few of the programming languages and frameworks in which I am skilled. I
								also have a solid background in reverse engineering and scraping, which helps me to glean
								insightful information from data and create unique solutions.
							</p>
						</div>

						<!-- Button View Project -->
						<div in:fly={{ y: 500, duration: 1000, delay: 500 }} class="mt-5">
							<a href="/extract" class="flex items-center gap-2 text-gradient from-grape to-white">
								<Icon icon="uim:layers-alt" width="24" height="24" class="text-amethyst" />
								<span>Explore my projects</span>
							</a>
						</div>
					</div>

					<!-- Right Side -->
					<div
						in:fly={{ duration: 500, delay: 100 }}
						class="hidden h-full lg:flex items-center justify-center relative z-0"
					>
						<img src="/logo/agil.zip.white.png" alt="" class="w-[144px] md:w-[360px]" />
						<div
							class="absolute top-0 left-20 w-56 h-56 bg-grape blur-3xl rounded-full opacity-50 -z-10"
						></div>
						<div class="absolute top-0 left-0 w-full -z-10">
							<div class="mx-auto w-96 h-96 bg-amaranth blur-3xl rounded-full opacity-25"></div>
						</div>
						<div
							class="absolute bottom-0 right-20 w-56 h-56 bg-amaranth blur-3xl rounded-full opacity-50 -z-10"
						></div>
					</div>
				</div>

				<!-- Skills -->
				<div class="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
					<!-- Frontend -->
					<div class="space-y-2" in:fly={{ y: 500, duration: 500, delay: 1000 }}>
						<h3>Backend</h3>
						<div class="flex items-center gap-2 flex-wrap">
							<Icon icon="skill-icons:golang" width="50" height="50" />
							<Icon icon="skill-icons:rust" width="50" height="50" />
							<Icon icon="skill-icons:bun-light" width="50" height="50" />
							<Icon icon="skill-icons:nodejs-light" width="50" height="50" />
							<Icon icon="skill-icons:python-light" width="50" height="50" />
							<Icon icon="skill-icons:java-light" width="50" height="50" />
							<Icon icon="skill-icons:spring-light" width="50" height="50" />
						</div>
					</div>
					<div class="space-y-2" in:fly={{ y: 500, duration: 500, delay: 1000 * 1.2 }}>
						<h3>Frontend</h3>
						<div class="flex items-center gap-2 flex-wrap">
							<Icon icon="skill-icons:figma-light" width="50" height="50" />
							<Icon icon="skill-icons:nextjs-light" width="50" height="50" />
							<Icon icon="skill-icons:vuejs-light" width="50" height="50" />
							<Icon icon="skill-icons:svelte" width="50" height="50" />
							<Icon icon="skill-icons:tailwindcss-light" width="50" height="50" />
							<Icon icon="skill-icons:react-light" width="50" height="50" />
							<Icon icon="skill-icons:flutter-light" width="50" height="50" />
						</div>
					</div>
					<div class="space-y-2" in:fly={{ y: 500, duration: 500, delay: 1000 * 1.4 }}>
						<h3>Datastore</h3>
						<div class="flex items-center gap-2 flex-wrap">
							<Icon icon="skill-icons:postgresql-light" width="50" height="50" />
							<Icon icon="skill-icons:redis-light" width="50" height="50" />
							<Icon icon="skill-icons:rabbitmq-light" width="50" height="50" />
							<Icon icon="skill-icons:mongodb" width="50" height="50" />
							<Icon icon="skill-icons:supabase-light" width="50" height="50" />
						</div>
					</div>
					<div class="space-y-2" in:fly={{ y: 500, duration: 500, delay: 1000 * 1.6 }}>
						<h3>Deployment</h3>
						<div class="flex items-center gap-2 flex-wrap">
							<Icon icon="skill-icons:linux-light" width="50" height="50" />
							<Icon icon="skill-icons:docker" width="50" height="50" />
							<Icon icon="skill-icons:github-light" width="50" height="50" />
							<Icon icon="skill-icons:githubactions-light" width="50" height="50" />
							<Icon icon="skill-icons:nginx" width="50" height="50" />
						</div>
					</div>
					<div class="space-y-2" in:fly={{ y: 500, duration: 500, delay: 1000 * 1.8 }}>
						<h3>Code Editor</h3>
						<div class="flex items-center gap-2 flex-wrap">
							<Icon icon="skill-icons:vscode-light" width="50" height="50" />
							<Icon icon="skill-icons:idea-light" width="50" height="50" />
						</div>
					</div>
				</div>
			</div>
		{/if}
	</IntersectionObserver>
</section>
