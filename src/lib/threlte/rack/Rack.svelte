<script lang="ts">
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import { T, useLoader } from '@threlte/core';

	const gltf = useLoader(GLTFLoader).load('/src/lib/threlte/rack/scene.gltf');
</script>

<T.PerspectiveCamera makeDefault position={[10, 5, 10]} lookAt.y={0.5}></T.PerspectiveCamera>

{#if $gltf}
	<T is={$gltf.scene} {...$$restProps} rotation={[Math.PI / 2, 0, 0]} scale={1}></T>
{/if}
