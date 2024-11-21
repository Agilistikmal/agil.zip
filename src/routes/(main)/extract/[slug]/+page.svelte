<script lang="ts">
	import { pb } from '$lib/pocketbase/pocketbase';

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
</script>

<section class="bg-gradient-to-tr from-grape to-amethyst">
	<div class="mx-auto min-h-screen w-full max-w-screen-2xl pt-48 pb-32 px-8 text-white space-y-8">
		<div>
			<h1 class="text-gradient from-grape to-white">{data.project.title}</h1>
			<h2>{data.project.short_description}</h2>
			<h5 class="text-gradient from-saffron to-white">{startDate} - {finishDate}</h5>
		</div>
		<div class="flex gap-4 overflow-x-scroll">
			{#each data.project.images as image}
				<div class="min-w-[600px] aspect-video bg-white">
					<img
						src={pb.getFileUrl(data.project, image)}
						alt={image}
						class="w-full h-full object-contain object-center"
					/>
				</div>
			{/each}
		</div>
	</div>
</section>
