<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<nav class="fixed left-0 top-0 w-full backdrop-blur-3xl z-50">
	<div class="mx-auto w-full max-w-screen-2xl px-8 py-5 text-white">
		<div class="flex items-center justify-between gap-4">
			<a href="/">
				<Icon icon="duo-icons:campground" class="text-6xl" />
			</a>
			<div class="flex items-center gap-2">
				<span>Menu</span>
				<Icon icon="duo-icons:app" class="text-3xl" />
			</div>
		</div>
	</div>
</nav>
