<template>
	<div class="playerBar">

	</div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, ref, Ref } from 'vue';
import * as THREE from 'three';
import { CSG } from 'three-csg-ts';

console.log('payerbar component');

const props = defineProps( {
	scene: THREE.Scene,
	renderer: THREE.WebGLRenderer,
	camera: THREE.OrthographicCamera
	// container: Ref<Element | null>,
	// scene: THREE.Scene,
	// loader:  GLTFLoader,
});

function init() {
	let container = ref(document.querySelector('#scene-container'));
	const geometry = new THREE.BoxGeometry(0.1, 1, 0.01);
	const material = new THREE.MeshBasicMaterial({ color: 0x000000 });
	const bar = new THREE.Mesh(geometry, material);
	bar.position.x = -4.8
	
	console.log('Scene in playerbar = ', props.scene);
	props.scene!.add(bar);
	container.value!.append(props.renderer!.domElement);
}

onMounted( () => {
	console.log('start mounted payerbar');
	init();
})

</script>

<style scoped>

</style>