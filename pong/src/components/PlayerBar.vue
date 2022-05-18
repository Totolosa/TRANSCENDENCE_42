<template>
	<div class="playerBar">

	</div>
</template>

<script setup lang="ts">
import { defineProps, initCustomFormatter, onMounted, ref, Ref } from 'vue';
import * as THREE from 'three';
import { CSG } from 'three-csg-ts';

const props = defineProps( {
	scene: THREE.Scene,
	renderer: THREE.WebGLRenderer,
	camera: THREE.PerspectiveCamera
	// container: Ref<Element | null>,
	// scene: THREE.Scene,
	// loader:  GLTFLoader,
});

function init() {
	const geometry = new THREE.BoxGeometry(2, 0.2, 0.01);
	const material = new THREE.MeshBasicMaterial({ color: 0x16638D });
	const bar = new THREE.Mesh(geometry, material);
	console.log('Scene in playerbar = ', props.scene);
	props.scene!.add(bar);
	// container.value!.append(renderer.domElement);
}

onMounted( () => {
	init();
})

</script>

<style scoped>

</style>