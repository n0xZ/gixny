import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';

export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home,
		},
		{
			path: '/signin',
			component: () => import('./views/SignIn.vue'),
		},

		{
			path: '/signup',
			component: () => import('./views/SignUp.vue'),
		},
	],
});
