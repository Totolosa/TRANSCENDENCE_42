<template>
	<div id="scene-container">
		<!-- <PlayerBar :scene="scene" :camera="camera" :renderer="renderer" id="pbar1"></PlayerBar>
		<PlayerBar :scene="scene" :camera="camera" :renderer="renderer" id="pbar2"></PlayerBar> -->
	</div>
</template>

<script lang="ts" setup>
// import PlayerBar from './PlayerBar.vue';
import FieldBorders from '@/game/FieldBorders' 
import FieldPlane from '@/game/FieldPlane' 
import PlayerBar from '@/game/PlayerBar' 
import { onMounted, ref, Ref } from 'vue';
import * as THREE from 'three';
import { CSG } from 'three-csg-ts';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import PlayerBarVue from './PlayerBar.vue';

// let loader:  GLTFLoader;

let height = 10;
let width = 15;
let border = 0.1;

let scene = new THREE.Scene();
scene.background = new THREE.Color('green');

let camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2);
camera.position.set(0, 0, 20);

let renderer = new THREE.WebGLRenderer();

// function mooveBar(dir: string) {
// 	if (dir == 'up')
// 		bar1.val
// }

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
	let container = document.querySelector('#scene-container');

	let field = new FieldBorders(width, height, border, 0x16638D);
	let plane = new FieldPlane(width, height, 0xE5F4FB);
	let bar1 = new PlayerBar(1, width, border, 0x000000);
	let bar2 = new PlayerBar(2, width, border, 0x000000);

	scene.add( plane.mesh, field.mesh, bar1.mesh, bar2.mesh );


	renderer.setSize(container!.clientWidth, container!.clientHeight);
	renderer.setPixelRatio(window.devicePixelRatio);
	container!.append(renderer.domElement);
	renderer.render(scene, camera);

	// container!.addEventListener('keydown', function(e) {
	// 	if (e.code == 'ArrowDown' || e.code == 'ArrowUp')
	// 		mooveBar(e.code);
	// })
}

onMounted( () => {
	init();
})


</script>


<style scoped>
	#scene-container {
		margin:auto;
		height: 400px;
		width: 600px;
	}
</style>

