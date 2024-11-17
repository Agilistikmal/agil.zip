<script lang="ts">
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';

	type Params = {
		index: number;
	};

	let { index }: Params = $props();
</script>

<div
	class="w-full bg-white/10 backdrop-filter backdrop-blur-sm overflow-hidden hover:-translate-y-2 hover:shadow-xl transition duration-500"
	in:fly={{ duration: 500, y: 500, delay: 250 * index }}
>
	<div class="bg-white aspect-video">
		<img
			src="https://source.verdex.id/_next/image?url=https%3A%2F%2Fsource-pb.verdex.id%2Fapi%2Ffiles%2Fh0x3epvbx8o8njb%2Fgmiijek2mcpzvn4%2Flogo_uwu_gRLtcMUhFJ.png&w=1920&q=100"
			alt=""
			class="object-cover"
		/>
	</div>
	<div class="px-5 pt-2 pb-5">
		<h4 class="truncate text-gradient from-saffron to-white">VueJS Starter Kit</h4>
		<p class="truncate">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor excepturi natus suscipit, non
			ducimus facilis qui, quaerat quos itaque praesentium perspiciatis consectetur quod, reiciendis
			recusandae saepe! Dolorum similique corrupti hic?
		</p>
		<div class="mt-2">
			<div class="flex items-center gap-1 text-2xl">
				<div class="bg-white rounded-full p-1">
					<Icon icon="vscode-icons:file-type-vue" />
				</div>
				<div class="bg-white rounded-full p-1">
					<Icon icon="vscode-icons:file-type-vite" />
				</div>
				<div class="bg-white rounded-full p-1">
					<Icon icon="vscode-icons:file-type-tailwind" />
				</div>
				<div class="bg-white rounded-full p-1">
					<Icon icon="vscode-icons:file-type-typescript-official" />
				</div>
			</div>
		</div>
	</div>
</div>
