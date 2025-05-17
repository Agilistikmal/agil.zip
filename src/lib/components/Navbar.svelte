<script lang="ts">
	import Icon from '@iconify/svelte';
	import NavbarMenu from './NavbarMenu.svelte';
	import { isMenuOpen } from '$lib/state/navbar';
	import { clickOutside } from '$lib/utils/clickOutside';
	import { onMount } from 'svelte';

	let scrollY = 0;
	let isScrolled = false;

	// Computed property untuk class tambahan saat scroll
	$: scrolledClasses = isScrolled ? 'bg-night/25 backdrop-blur-xl shadow-lg shadow-night/30' : '';

	function setIsMenuOpen() {
		isMenuOpen.update((value) => !value);
	}

	function closeMenu() {
		isMenuOpen.update((value) => false);
	}

	// Handle scroll events to change navbar appearance
	function handleScroll() {
		scrollY = window.scrollY;
		isScrolled = scrollY > 20;
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<nav class="fixed left-0 top-0 w-full z-50 transition-all duration-500 {scrolledClasses}">
	<div class="mx-auto w-full max-w-screen-2xl px-8 py-5 text-white">
		<div class="flex items-center justify-between gap-4">
			<a
				href="/"
				data-sveltekit-preload-data
				data-sveltekit-preload-code
				class="flex items-center gap-3 group"
			>
				<img
					src="/logo/agil.zip.white.png"
					alt="agil.zip.white.png"
					class="h-8 group-hover:scale-105 transition-transform duration-300"
				/>
				<span
					class="text-lg font-medium text-gradient from-moonstone to-celeste opacity-0 translate-x-[-10px] transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0"
					>agil.zip</span
				>
			</a>
			<div id="navbarMenu" class="relative" use:clickOutside on:clickOutside={closeMenu}>
				<button
					class="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full transition-all duration-300 border border-white/10"
					on:click={setIsMenuOpen}
				>
					<span>Menu</span>
					<Icon icon="duo-icons:app" class="text-2xl" />
				</button>

				{#if $isMenuOpen}
					<NavbarMenu />
				{/if}
			</div>
		</div>
	</div>
</nav>
