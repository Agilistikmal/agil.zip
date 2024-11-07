<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { Motion } from 'svelte-motion';

	let bgColors = ['#6F2DBD', '#F15946', '#E01A4F', '#0C090D'];
	let index = $state(0);
	let roller: NodeJS.Timeout;

	onMount(() => {
		roller = setInterval(() => {
			if (index === bgColors.length - 1) index = 0;
			else index++;
		}, 8000);
	});

	onDestroy(() => {
		clearInterval(roller);
	});
</script>

<Motion animate={{ backgroundColor: bgColors[index] }} transition={{ duration: 1 }} let:motion>
	<div use:motion class="absolute left-0 top-0 -z-50 h-full w-full"></div>
</Motion>
