import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from './store/user';
import Home from './views/Home.vue';

export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'PublicHome',
			component: Home,
			meta: {
				requiresAuth: false,
			},
		},
		{
			path: '/signin',
			name: 'SignIn',
			component: () => import('./views/SignIn.vue'),
			meta: {
				requiresAuth: false,
			},
		},

		{
			path: '/signup',
			name: 'SignUp',
			component: () => import('./views/SignUp.vue'),
			meta: {
				requiresAuth: false,
			},
		},
		{
			path: '/dashboard',
			name: 'Dashboard',

			component: () => import('./views/Dashboard.vue'),
			meta: {
				requiresAuth: true,
			},
		},
		{
			path: '/profile',
			name: 'Profile',
			component: () => import('./views/Profile.vue'),
			meta: {
				requiresAuth: true,
			},
		},
	],
});

router.beforeEach((to, from, next) => {
	const store = useAuthStore();
	if (to.meta.requiresAuth && !store.isAuthenticated) {
		next({ name: 'SignIn' });
	} else next();
});
