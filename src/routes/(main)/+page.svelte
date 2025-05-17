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
<section
	id="home"
	class="bg-gradient-to-tr from-night to-dark h-full pb-16 overflow-hidden relative"
>
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
		class="mx-auto h-screen w-full max-w-screen-2xl overflow-hidden px-8 text-white relative z-10"
	>
		<div class="flex h-full w-full items-center">
			<div class="relative z-10">
				<div class="flex gap-2 items-center mb-2">
					<div class="h-1 w-10 bg-gradient-to-r from-amaranth to-grape"></div>
					<h5 class="font-light">Software Engineer</h5>
				</div>
				<h1 class="text-gradient from-moonstone to-white">Agil Ghani Istikmal</h1>
				<div class="mt-4 flex flex-wrap gap-2 overflow-hidden">
					<h3 class="text-nowrap">Explore my</h3>
					<div class="w-24 md:w-36 h-10 overflow-hidden">
						{#key index}
							<h3
								in:fly={{ duration: 500, delay: 500, y: -15 }}
								out:fly={{ duration: 500, delay: 0, y: 15 }}
								class="text-center text-gradient from-saffron to-tomato font-bold underline md:w-36"
							>
								{texts[index]}
							</h3>
						{/key}
					</div>
					<a href="/extract">
						<h3>here.</h3>
					</a>
				</div>
				<div class="mt-8 flex items-center gap-3 flex-wrap">
					<a
						href="/extract"
						class="flex w-max items-center gap-2 bg-gradient-to-r from-grape to-amethyst px-5 py-2.5 text-white transition duration-500 hover:shadow-lg hover:shadow-grape/30 group rounded"
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
						class="flex w-max items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 text-white transition duration-500 hover:bg-white/20 hover:shadow-lg hover:shadow-white/5 group rounded border border-white/10"
						data-sveltekit-preload-data
						data-sveltekit-preload-code
					>
						<Icon
							icon="uim:angle-down"
							width="24"
							height="24"
							class="group-hover:translate-y-1 transition-transform duration-300"
						/>
						<p>Explore more details</p>
					</a>
				</div>

				<!-- Social links -->
				<div class="mt-8 flex gap-4">
					<a
						href="https://github.com/agilistikmal"
						target="_blank"
						class="text-white/60 hover:text-white transition-colors duration-300"
					>
						<Icon icon="uil:github" width="24" height="24" />
					</a>
					<a
						href="https://linkedin.com/in/agilistikmal"
						target="_blank"
						class="text-white/60 hover:text-white transition-colors duration-300"
					>
						<Icon icon="uil:linkedin" width="24" height="24" />
					</a>
					<a
						href="mailto:contact@agil.zip"
						class="text-white/60 hover:text-white transition-colors duration-300"
					>
						<Icon icon="uil:envelope" width="24" height="24" />
					</a>
				</div>
			</div>

			<!-- Decorative element for desktop -->
			<div class="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block">
				<div class="relative">
					<img src="/logo/agil.zip.white.png" alt="agil.zip logo" class="w-96" />
				</div>
			</div>
		</div>

		<!-- Scroll indicator -->
		<div
			class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce"
		>
			<p class="text-white/60 text-sm mb-2">Scroll down</p>
			<Icon icon="uim:angle-down" width="20" height="20" class="text-white/60" />
		</div>
	</div>
</section>

<!-- About -->
<section
	id="about"
	class="bg-gradient-to-tr from-night to-dark h-full min-h-screen relative"
	aria-label="about"
	bind:this={aboutElement}
>
	<!-- Decorative background elements -->
	<div
		class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-grape/20 blur-3xl rounded-full opacity-20 -z-0"
	></div>
	<div
		class="absolute top-0 left-0 w-[300px] h-[300px] bg-tomato/10 blur-3xl rounded-full opacity-20 -z-0"
	></div>

	<IntersectionObserver element={aboutElement} bind:intersecting={aboutIntersecting}>
		{#if aboutIntersecting == true}
			<div
				transition:fly
				class="mx-auto min-h-screen w-full max-w-screen-2xl pt-32 md:pt-48 pb-32 px-8 text-white relative z-10"
			>
				<div class="flex gap-2 items-center mb-4">
					<div class="h-1 w-10 bg-gradient-to-r from-saffron to-amaranth"></div>
					<h5 class="font-medium tracking-wider">ABOUT ME</h5>
				</div>

				<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<!-- Left Side -->
					<div class="md:min-h-96">
						<!-- Hero -->
						<div in:fly={{ y: 100, duration: 800 }}>
							<h1 class="font-bold text-xl lg:text-5xl">
								<span class="text-gradient from-saffron to-tomato">Agil</span> Ghani
								<span class="text-gradient from-saffron to-tomato">Istikmal</span>
							</h1>
							<h4 class="text-sm lg:text-lg mt-1">
								or known as <span class="text-gradient from-saffron to-tomato font-semibold"
									>Agilistikmal</span
								>
							</h4>
						</div>

						<!-- Biography -->
						<div in:fly={{ y: 100, duration: 800, delay: 300 }} class="mt-6">
							<p class="w-full max-w-screen-md text-sm lg:text-xl text-white/90 leading-relaxed">
								I am a versatile fullstack developer who loves creating cutting-edge web and mobile
								apps. From frontend and backend development, I have experience with every step of
								the development stack. <span class="text-gradient from-tomato to-white font-medium"
									>Golang, Rust, Node.js, Java, Python, React, Vue, and Svelte</span
								> are just a few of the programming languages and frameworks in which I am skilled. I
								also have a solid background in reverse engineering and scraping, which helps me to glean
								insightful information from data and create unique solutions.
							</p>
						</div>

						<!-- Button View Project -->
						<div in:fly={{ y: 100, duration: 800, delay: 400 }} class="mt-6">
							<a
								href="/extract"
								class="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-grape/20 to-amethyst/20 rounded-md backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group w-max"
							>
								<Icon icon="uim:layers-alt" width="24" height="24" class="text-amethyst" />
								<span
									class="text-gradient from-grape to-white group-hover:translate-x-1 transition-transform duration-300"
									>Explore my projects</span
								>
							</a>
						</div>
					</div>

					<!-- Right Side -->
					<div
						in:fly={{ duration: 800, delay: 200 }}
						class="hidden h-full lg:flex items-center justify-center relative z-0"
					>
						<div class="relative">
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
				</div>

				<!-- Skills -->
				<div class="mt-16">
					<div class="flex gap-2 items-center mb-8">
						<div class="h-1 w-10 bg-gradient-to-r from-moonstone to-celeste"></div>
						<h5 class="font-medium tracking-wider">MY SKILLS</h5>
					</div>

					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 overflow-hidden">
						<!-- Frontend -->
						<div
							class="space-y-4 bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10"
							in:fly={{ y: 100, duration: 500, delay: 500 }}
						>
							<h3 class="font-semibold text-gradient from-moonstone to-celeste">Backend</h3>
							<div class="flex items-center gap-3 flex-wrap">
								<Icon
									icon="skill-icons:golang"
									width="50"
									height="50"
									class="hover:scale-110 transition-transform duration-300"
								/>
								<Icon
									icon="skill-icons:rust"
									width="50"
									height="50"
									class="hover:scale-110 transition-transform duration-300"
								/>
								<Icon
									icon="skill-icons:bun-light"
									width="50"
									height="50"
									class="hover:scale-110 transition-transform duration-300"
								/>
								<Icon
									icon="skill-icons:nodejs-light"
									width="50"
									height="50"
									class="hover:scale-110 transition-transform duration-300"
								/>
								<Icon
									icon="skill-icons:python-light"
									width="50"
									height="50"
									class="hover:scale-110 transition-transform duration-300"
								/>
								<Icon
									icon="skill-icons:java-light"
									width="50"
									height="50"
									class="hover:scale-110 transition-transform duration-300"
								/>
								<Icon
									icon="skill-icons:spring-light"
									width="50"
									height="50"
									class="hover:scale-110 transition-transform duration-300"
								/>
							</div>
						</div>
						<div
							class="space-y-4 bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10"
							in:fly={{ y: 100, duration: 500, delay: 600 }}
						>
							<h3 class="font-semibold text-gradient from-moonstone to-celeste">Frontend</h3>
							<div class="flex items-center gap-3 flex-wrap">
								<Icon
									icon="skill-icons:figma-light"
									width="50"
									height="50"
									class="hover:scale-110 transition-transform duration-300"
								/>
								<Icon
									icon="skill-icons:nextjs-light"
									width="50"
									height="50"
									class="hover:scale-110 transition-transform duration-300"
								/>
								<Icon
									icon="skill-icons:vuejs-light"
									width="50"
									height="50"
									class="hover:scale-110 transition-transform duration-300"
								/>
								<Icon
									icon="skill-icons:svelte"
									width="50"
									height="50"
									class="hover:scale-110 transition-transform duration-300"
								/>
								<Icon
									icon="skill-icons:tailwindcss-light"
									width="50"
									height="50"
									class="hover:scale-110 transition-transform duration-300"
								/>
								<Icon
									icon="skill-icons:react-light"
									width="50"
									height="50"
									class="hover:scale-110 transition-transform duration-300"
								/>
								<Icon
									icon="skill-icons:flutter-light"
									width="50"
									height="50"
									class="hover:scale-110 transition-transform duration-300"
								/>
							</div>
						</div>
						<div
							class="space-y-4 bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10"
							in:fly={{ y: 100, duration: 500, delay: 700 }}
						>
							<h3 class="font-semibold text-gradient from-moonstone to-celeste">Datastore</h3>
							<div class="flex items-center gap-3 flex-wrap">
								<Icon
									icon="skill-icons:postgresql-light"
									width="50"
									height="50"
									class="hover:scale-110 transition-transform duration-300"
								/>
								<Icon
									icon="skill-icons:redis-light"
									width="50"
									height="50"
									class="hover:scale-110 transition-transform duration-300"
								/>
								<Icon
									icon="skill-icons:rabbitmq-light"
									width="50"
									height="50"
									class="hover:scale-110 transition-transform duration-300"
								/>
								<Icon
									icon="skill-icons:mongodb"
									width="50"
									height="50"
									class="hover:scale-110 transition-transform duration-300"
								/>
								<Icon
									icon="skill-icons:supabase-light"
									width="50"
									height="50"
									class="hover:scale-110 transition-transform duration-300"
								/>
							</div>
						</div>
						<div
							class="space-y-4 bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10"
							in:fly={{ y: 100, duration: 500, delay: 800 }}
						>
							<h3 class="font-semibold text-gradient from-moonstone to-celeste">Deployment</h3>
							<div class="flex items-center gap-3 flex-wrap">
								<Icon
									icon="skill-icons:linux-light"
									width="50"
									height="50"
									class="hover:scale-110 transition-transform duration-300"
								/>
								<Icon
									icon="skill-icons:docker"
									width="50"
									height="50"
									class="hover:scale-110 transition-transform duration-300"
								/>
								<Icon
									icon="skill-icons:github-light"
									width="50"
									height="50"
									class="hover:scale-110 transition-transform duration-300"
								/>
								<Icon
									icon="skill-icons:githubactions-light"
									width="50"
									height="50"
									class="hover:scale-110 transition-transform duration-300"
								/>
								<Icon
									icon="skill-icons:nginx"
									width="50"
									height="50"
									class="hover:scale-110 transition-transform duration-300"
								/>
							</div>
						</div>
						<div
							class="space-y-4 bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10"
							in:fly={{ y: 100, duration: 500, delay: 900 }}
						>
							<h3 class="font-semibold text-gradient from-moonstone to-celeste">Code Editor</h3>
							<div class="flex items-center gap-3 flex-wrap">
								<Icon
									icon="skill-icons:vscode-light"
									width="50"
									height="50"
									class="hover:scale-110 transition-transform duration-300"
								/>
								<Icon
									icon="skill-icons:idea-light"
									width="50"
									height="50"
									class="hover:scale-110 transition-transform duration-300"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</IntersectionObserver>
</section>
