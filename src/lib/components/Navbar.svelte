<script lang="ts">
	import Icon from '@iconify/svelte';
	import NavbarMenu from './NavbarMenu.svelte';
	import { isMenuOpen } from '$lib/state/navbar';
	import { clickOutside } from '$lib/utils/clickOutside';

	function setIsMenuOpen() {
		isMenuOpen.update((value) => !value);
	}

	function closeMenu() {
		isMenuOpen.update((value) => false);
	}
</script>

<nav class="fixed left-0 top-0 w-full backdrop-blur-3xl z-50">
	<div class="mx-auto w-full max-w-screen-2xl px-8 py-5 text-white">
		<div class="flex items-center justify-between gap-4">
			<a href="/" data-sveltekit-preload-data data-sveltekit-preload-code>
				<img src="/logo/agil.zip.white.png" alt="agil.zip.white.png" class="h-8" />
			</a>
			<div id="navbarMenu" class="relative" use:clickOutside on:clickOutside={closeMenu}>
				<button class="flex items-center gap-2" on:click={setIsMenuOpen}>
					<span>Menu</span>
					<Icon icon="duo-icons:app" class="text-3xl" />
				</button>

				{#if $isMenuOpen}
					<NavbarMenu />
				{/if}
			</div>
		</div>
	</div>
</nav>
