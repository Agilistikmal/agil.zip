<script lang="ts">
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';
</script>

<div class="absolute top-12 right-0 w-72 z-50" transition:fly={{ duration: 500, y: -20 }}>
	<div
		class="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg shadow-lg shadow-night/50 p-6"
	>
		<ul class="space-y-5">
			<li class="group">
				<a
					href="/"
					class="flex items-center gap-2 hover:text-gradient from-moonstone to-celeste transition duration-500"
				>
					<Icon
						icon="uim:web-grid"
						width="24"
						height="24"
						class="group-hover:text-moonstone transition duration-500"
					/>
					<span class="group-hover:translate-x-2 transition duration-500">Home</span>
				</a>
			</li>
			<li class="group">
				<a
					href="/#about"
					class="flex items-center gap-2 hover:text-gradient from-moonstone to-celeste transition duration-500"
				>
					<Icon
						icon="uim:document-layout-center"
						width="24"
						height="24"
						class="group-hover:text-moonstone transition duration-500"
					/>
					<span class="group-hover:translate-x-2 transition duration-500">About</span>
				</a>
			</li>
			<li class="group">
				<a
					href="/extract"
					class="flex items-center gap-2 hover:text-gradient from-saffron to-tomato transition duration-500"
				>
					<Icon
						icon="uim:layers-alt"
						width="24"
						height="24"
						class="group-hover:text-saffron transition duration-500"
					/>
					<span class="group-hover:translate-x-2 transition duration-500">
						Extract, view project
					</span>
				</a>
			</li>
			<div class="h-px w-full bg-white/10 my-2"></div>
			<li class="group">
				<div class="flex gap-3 mt-2">
					<a
						href="https://github.com/agilistikmal"
						target="_blank"
						class="text-white/60 hover:text-white transition-colors duration-300 hover:scale-110 transform"
					>
						<Icon icon="uil:github" width="24" height="24" />
					</a>
					<a
						href="https://linkedin.com/in/agilistikmal"
						target="_blank"
						class="text-white/60 hover:text-white transition-colors duration-300 hover:scale-110 transform"
					>
						<Icon icon="uil:linkedin" width="24" height="24" />
					</a>
					<a
						href="mailto:contact@agil.zip"
						class="text-white/60 hover:text-white transition-colors duration-300 hover:scale-110 transform"
					>
						<Icon icon="uil:envelope" width="24" height="24" />
					</a>
				</div>
			</li>
		</ul>
	</div>
</div>
