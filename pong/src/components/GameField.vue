<template>
	<div id="scene-container">
		<PlayerBar :scene="scene" :camera="camera" :renderer="renderer" id="pbar1"></PlayerBar>
		<PlayerBar :scene="scene" :camera="camera" :renderer="renderer" id="pbar2"></PlayerBar>
	</div>
	<!-- <img src="@/assets/logo.png"> -->
</template>

<script lang="ts" setup>
import PlayerBar from './PlayerBar.vue';
import { onMounted, ref, Ref } from 'vue';
import * as THREE from 'three';
import { CSG } from 'three-csg-ts';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// let loader:  GLTFLoader;

let container = ref(document.querySelector('#scene-container'));

let scene = new THREE.Scene();
scene.background = new THREE.Color('white');

const fov = 35; // AKA Field of View
// const aspect = container.value!.clientWidth / container.value!.clientHeight;
const aspect = 1.5;
console.log(aspect);
const near = 0.1; // the near clipping plane
const far = 100; // the far clipping plane
let camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

let renderer = new THREE.WebGLRenderer();
// renderer.setSize(container.value!.clientWidth, container.value!.clientHeight);
renderer.setSize(500, 300);
renderer.setPixelRatio(window.devicePixelRatio);



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
	// ADD EDGES LINES
	// const geometry2 = new THREE.BoxGeometry( 3, 3, 3 );
	// const edges = new THREE.EdgesGeometry( geometry2 );
	// const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 10 } ) );
	// scene.add( line );

	// // ADD 3D MODEL
	// loader = new GLTFLoader();
	// // console.log('pwd = ', process.cwd());
	// // loader.load( '/Users/tdayde/Documents/TRANSCENDENCE_42/pong/formes_blender/terrain.glb', function ( gltf ) {
	// loader.load( './terrain.glb', function ( gltf ) {
	// 	scene.add( gltf.scene );
	// }, undefined, function ( error ) {
		// 	console.error( error );
	// } );


	const geometry = new THREE.BoxGeometry(10, 7, 0.01);
	const material = new THREE.MeshBasicMaterial({ color: 0x16638D });
	const cube = new THREE.Mesh(geometry, material);
	const geometry2 = new THREE.BoxGeometry(9.9, 6.9, 2);
	const material2 = new THREE.MeshBasicMaterial({ color: 0x16638D });
	const cube2 = new THREE.Mesh(geometry2, material2);

	let field = CSG.subtract(cube, cube2);
	const edges = new THREE.EdgesGeometry( field.geometry );
	const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
	// field.material.color.setHex(0x16638D);

	const geometry3 = new THREE.PlaneGeometry( 10, 7 );
	const material3 = new THREE.MeshBasicMaterial( {color: 0xE5F4FB, side: THREE.DoubleSide} );
	const plane = new THREE.Mesh( geometry3, material3 );
	scene.add( plane );
	scene.add(field);


	container.value!.append(renderer.domElement);
	renderer.render(scene, camera);
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

