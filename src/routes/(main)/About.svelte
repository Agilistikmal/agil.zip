<script lang="ts">
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';
</script>

<section id="about" class="bg-gradient-to-tr from-grape to-amethyst h-full">
	<div
		transition:fly
		class="mx-auto min-h-screen w-full max-w-screen-2xl pt-48 pb-32 px-8 text-white"
	>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
			<!-- Left Side -->
			<div class="min-h-96">
				<!-- Hero -->
				<div in:fly={{ y: 500, duration: 1000 }}>
					<h1 class="font-bold">
						<span class="text-gradient from-saffron to-white">Agil</span> Ghani
						<span class="text-gradient from-saffron to-white">Istikmal</span>
					</h1>
					<h4>or known as <span class="text-gradient from-saffron to-white">Agilistikmal</span></h4>
				</div>

				<!-- Biography -->
				<div in:fly={{ y: 500, duration: 1000, delay: 500 }} class="mt-5">
					<p class="w-full max-w-screen-md text-xl text-justify">
						I am a versatile fullstack developer who loves creating cutting-edge web and mobile
						apps. From frontend and backend development, I have experience with every step of the
						development stack. <span class="text-gradient from-tomato to-white"
							>Golang, Rust, Node.js, Java, Python, React, Vue, and Svelte</span
						> are just a few of the programming languages and frameworks in which I am skilled. I also
						have a solid background in reverse engineering and scraping, which helps me to glean insightful
						information from data and create unique solutions.
					</p>
				</div>
			</div>

			<!-- Right Side -->
			<div>
				<img src="/logo/agil.zip.white.png" alt="" class="mx-auto" />
			</div>
		</div>

		<!-- Skills -->
		<div class="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			<!-- Frontend -->
			<div class="space-y-2" in:fly={{ y: 500, duration: 500, delay: 1000 }}>
				<h3>Backend</h3>
				<div class="flex items-center gap-2">
					<Icon icon="skill-icons:golang" width="50" height="50" />
					<Icon icon="skill-icons:rust" width="50" height="50" />
					<Icon icon="skill-icons:bun-light" width="50" height="50" />
					<Icon icon="skill-icons:nodejs-light" width="50" height="50" />
					<Icon icon="skill-icons:python-light" width="50" height="50" />
					<Icon icon="skill-icons:java-light" width="50" height="50" />
					<Icon icon="skill-icons:spring-light" width="50" height="50" />
				</div>
			</div>
			<div class="space-y-2" in:fly={{ y: 500, duration: 500, delay: 1000 * 1.5 }}>
				<h3>Frontend</h3>
				<div class="flex items-center gap-2">
					<Icon icon="skill-icons:figma-light" width="50" height="50" />
					<Icon icon="skill-icons:nextjs-light" width="50" height="50" />
					<Icon icon="skill-icons:vuejs-light" width="50" height="50" />
					<Icon icon="skill-icons:svelte" width="50" height="50" />
					<Icon icon="skill-icons:tailwindcss-light" width="50" height="50" />
					<Icon icon="skill-icons:react-light" width="50" height="50" />
					<Icon icon="skill-icons:flutter-light" width="50" height="50" />
				</div>
			</div>
			<div class="space-y-2" in:fly={{ y: 500, duration: 500, delay: 1000 * 2 }}>
				<h3>Datastore</h3>
				<div class="flex items-center gap-2">
					<Icon icon="skill-icons:postgresql-light" width="50" height="50" />
					<Icon icon="skill-icons:redis-light" width="50" height="50" />
					<Icon icon="skill-icons:rabbitmq-light" width="50" height="50" />
					<Icon icon="skill-icons:mongodb" width="50" height="50" />
					<Icon icon="skill-icons:supabase-light" width="50" height="50" />
				</div>
			</div>
			<div class="space-y-2" in:fly={{ y: 500, duration: 500, delay: 1000 * 2.5 }}>
				<h3>Deployment</h3>
				<div class="flex items-center gap-2">
					<Icon icon="skill-icons:linux-light" width="50" height="50" />
					<Icon icon="skill-icons:docker" width="50" height="50" />
					<Icon icon="skill-icons:github-light" width="50" height="50" />
					<Icon icon="skill-icons:githubactions-light" width="50" height="50" />
					<Icon icon="skill-icons:nginx" width="50" height="50" />
				</div>
			</div>
			<div class="space-y-2" in:fly={{ y: 500, duration: 500, delay: 1000 * 3 }}>
				<h3>Code Editor</h3>
				<div class="flex items-center gap-2">
					<Icon icon="skill-icons:vscode-light" width="50" height="50" />
					<Icon icon="skill-icons:idea-light" width="50" height="50" />
				</div>
			</div>
		</div>
	</div>
</section>
