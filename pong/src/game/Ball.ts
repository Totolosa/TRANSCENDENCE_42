import * as THREE from 'three';

export default class Ball {
	color: number;
	geometry: THREE.SphereGeometry;
	material: THREE.MeshBasicMaterial;
	mesh: THREE.Mesh;

	constructor(radius: number, color: number) {
		this.color = color;
		this.geometry = new THREE.SphereGeometry(radius);
		this.material = new THREE.MeshBasicMaterial({ color: color });
		this.mesh = new THREE.Mesh(this.geometry, this.material);
	}
}