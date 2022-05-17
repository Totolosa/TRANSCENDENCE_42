<template>
	<div id="scene-container">
	</div>
</template>

<script lang="ts" setup>
import { onMounted, ref, Ref } from 'vue'
import * as THREE from 'three';


let container: Ref<Element | null>;
let scene: THREE.Scene;

let cube_dim: {
	l: number;
	w: number;
	h: number;
} = { 
	l: 2,
	w : 2,
	h : 2,
};


function init() {
	container = ref(document.querySelector('#scene-container'));
	console.log('clientWidth = ', container.value!.clientWidth);
	console.log('clientHeight = ', container.value!.clientHeight);

	scene = new THREE.Scene();
	scene.background = new THREE.Color('skyblue');

	const fov = 35; // AKA Field of View
	const aspect = container.value!.clientWidth / container.value!.clientHeight;
	// const aspect = 1;
	console.log(aspect);
	const near = 0.1; // the near clipping plane
	const far = 100; // the far clipping plane
	const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

	camera.position.set(0, 0, 10);

	const geometry = new THREE.BoxBufferGeometry(cube_dim.l, cube_dim.w, cube_dim.h);
	const material = new THREE.MeshBasicMaterial();
	const cube = new THREE.Mesh(geometry, material);

	scene.add(cube);

	const geometry2 = new THREE.BoxGeometry( 3, 3, 3 );
	const edges = new THREE.EdgesGeometry( geometry2 );
	const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 10 } ) );
	scene.add( line );

	const renderer = new THREE.WebGLRenderer();
	renderer.setSize(container.value!.clientWidth, container.value!.clientHeight);
	// renderer.setSize(container.value!.clientWidth, 300);
	renderer.setPixelRatio(window.devicePixelRatio);

	container.value!.append(renderer.domElement);

	renderer.render(scene, camera);
	console.log(container.value!);
}

onMounted( () => {
	init();
})


</script>


<style scoped>
	#scene-container {
		height: 300px;
	}
</style>

