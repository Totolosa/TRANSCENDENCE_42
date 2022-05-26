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
import Ball from '@/game/Ball' 
import { onMounted, ref, Ref } from 'vue';
import * as THREE from 'three';
import { CSG } from 'three-csg-ts';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import PlayerBarVue from './PlayerBar.vue';

// let loader:  GLTFLoader;

let height = 10;
let width = 15;
let border = 0.05;

let field: FieldBorders;
let plane: FieldPlane;
let bar1: PlayerBar;
let bar2: PlayerBar;
let ball: Ball;

let barSpeed = 0.02;
let upBool = 0;
let downBool = 0;
let IDanimation: number;
let microtime1: number;
let microtime2: number;
let barBorder: number;

let scene = new THREE.Scene();
scene.background = new THREE.Color(0xE5F4FB);
let camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2);
camera.position.set(0, 0, 20);
let renderer = new THREE.WebGLRenderer();

function keyDown(dir: string) {
	let vitesse = 0.4; 
	if (dir == 'ArrowUp') {
		console.log('up');
		upBool = 1;
		// console.log('bar1.mesh.position.y = ', bar1.mesh.position.y);
		// bar1.mesh.position.y += vitesse;
	}
	else {
		console.log('down');
		downBool = -1;
		// console.log('bar1.mesh.position.y = ', bar1.mesh.position.y);
		// bar1.mesh.position.y -= vitesse;
	}
}
function keyUp(dir: string) {
	let vitesse = 0.4; 
	if (dir == 'ArrowUp') {
		// console.log('up');
		upBool = 0;
		// console.log('bar1.mesh.position.y = ', bar1.mesh.position.y);
		// bar1.mesh.position.y += vitesse;
	}
	else {
		// console.log('down');
		downBool = 0;
		// console.log('bar1.mesh.position.y = ', bar1.mesh.position.y);
		// bar1.mesh.position.y -= vitesse;
	}
}


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
	let container = document.getElementById('scene-container');

	field = new FieldBorders(width, height, border, 0x16638D);
	// plane = new FieldPlane(width, height, 0xE5F4FB);
	bar1 = new PlayerBar(1, width, border, 0x000000);
	bar2 = new PlayerBar(2, width, border, 0x000000);
	ball = new Ball(0.2, 0xF5E400);

	scene.add(  field.mesh, bar1.mesh, bar2.mesh, ball.mesh );


	renderer.setSize(container!.clientWidth, container!.clientHeight);
	renderer.setPixelRatio(window.devicePixelRatio);
	container!.append(renderer.domElement);
	renderer.render(scene, camera);

	document.addEventListener('keydown', function(event){
		const e = event as KeyboardEvent;
		// console.log('e.code = ', e.code);
		if (e.code == 'ArrowDown' || e.code == 'ArrowUp')
			keyDown(e.code);
	})
	document.addEventListener('keyup', function(event){
		const e = event as KeyboardEvent;
		// console.log('e.code = ', e.code);
		if (e.code == 'ArrowDown' || e.code == 'ArrowUp')
			keyUp(e.code);
	})
	barBorder = (height / 2) - border - (bar1.geometry.parameters.height / 2);
	console.log(barBorder);
	microtime1 = performance.now();
	animate();
}

onMounted( () => {
	init();
})

// function mooveBar (elapse: number, ) {

// }

// function mooveBall () {

// }

function animate() {
	microtime2 = performance.now();
	let elapsed = microtime2 - microtime1;
	let newPos = bar1.mesh.position.y + (upBool + downBool) * elapsed * barSpeed;
	if (newPos < barBorder && newPos > -barBorder )
		bar1.mesh.position.y = newPos;
	else if (newPos >= barBorder)
		bar1.mesh.position.y = barBorder;
	else
		bar1.mesh.position.y = - barBorder;
	ball.mesh.position
	console.log('barY = ', bar1.mesh.position.y);
	microtime1 = microtime2;
	renderer.render(scene, camera);
	IDanimation = window.requestAnimationFrame(animate);
}

</script>


<style scoped>
	#scene-container {
		margin:auto;
		height: 400px;
		width: 600px;
	}
</style>

