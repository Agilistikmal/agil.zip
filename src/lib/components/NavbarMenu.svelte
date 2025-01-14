<script lang="ts">
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';
</script>

<div class="absolute top-12 right-0 w-72" transition:fly={{ duration: 500, y: -20 }}>
	<div class="bg-white/10 backdrop-filter backdrop-blur-sm p-5">
		<ul class="space-y-4">
			<li class="group">
				<a href="/" class="flex items-center gap-1">
					<Icon
						icon="uim:web-grid"
						width="24"
						height="24"
						class="group-hover:text-colombiablue transition duration-500"
					/>
					<span class="group-hover:translate-x-2 transition duration-500">Home</span>
				</a>
			</li>
			<li class="group">
				<a href="/#about" class="flex items-center gap-1">
					<Icon
						icon="uim:document-layout-center"
						width="24"
						height="24"
						class="group-hover:text-colombiablue transition duration-500"
					/>
					<span class="group-hover:translate-x-2 transition duration-500">About</span>
				</a>
			</li>
			<li class="group">
				<a href="/extract" class="flex items-center gap-1">
					<Icon
						icon="uim:layers-alt"
						width="24"
						height="24"
						class="group-hover:text-colombiablue transition duration-500"
					/>
					<span class="group-hover:translate-x-2 transition duration-500">
						Extract, view project
					</span>
				</a>
			</li>
		</ul>
	</div>
</div>
