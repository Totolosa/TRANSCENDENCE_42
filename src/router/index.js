import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue"

const routes = [
	{
		name: 'Home',
		path: '/',
		component: Home
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router;
