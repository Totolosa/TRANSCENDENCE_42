<template>
	<div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


let scene: THREE.Scene;

export default defineComponent({
	name: 'GameField',
	props: {
		containerId: {
			type: String,
			required: true
		},
		modelSettings: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			scene: new THREE.Scene,
			// camera: undefined,
			// renderer: undefined
		}
	},
	methods: {
		// renderScene() {
		// 	// if (this.renderer)
		// 		(this.renderer!).render(this.scene, this.camera);
		// },
		init() {
			// if (typeof this.scene === "Scene")
				this.scene = new THREE.Scene();
			// this.scene.backgroud = null;
			// this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
			// this.renderer.outputEncoding = THREE.sRGBEncoding;
			// this.renderer.setPixelRatio(window.devicePixelRatio);
		}
	},
	mounted () {
		this.init();
	}
})
</script>

<style scoped>

</style>

