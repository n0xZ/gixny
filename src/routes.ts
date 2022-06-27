import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from './store/auth'

export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'PublicHome',
			component: () => import('./views/Home.vue'),
			meta: {
				requiresAuth: false,
			},
		},
		{
			path: '/sign-in',
			name: 'SignIn',
			component: () => import('./views/SignIn.vue'),
			meta: {
				requiresAuth: false,
			},
		},

		{
			path: '/sign-up',
			name: 'SignUp',
			component: () => import('./views/SignUp.vue'),
			meta: {
				requiresAuth: false,
			},
		},
		{
			path: '/dashboard',
			children: [
				{
					path: 'home',
					component: () => import('./views/DashboardHome.vue'),
					meta: {
						requiresAuth: true,
					},
				},
				{
					path: 'tasks/create',
					component: () => import('./views/tasks/CreateTask.vue'),
					meta: {
						requiresAuth: true,
					},
				},
				{
					path: 'tasks/view',
					component: () => import('./views/tasks/ViewTasks.vue'),
					meta: {
						requiresAuth: true,
					},
				},
				{
					path: 'tasks/update/:id',
					component: () => import('./views/tasks/UpdateTask.vue'),
					meta: {
						requiresAuth: true,
					},
				},
				{
					path: 'profile',
					component: () => import('./views/Profile.vue'),
					meta: {
						requiresAuth: true,
					},
				},
			],
			component: () => import('./views/Dashboard.vue'),

			meta: {
				requiresAuth: true,
			},
		},
	],
})

router.beforeEach((to, from, next) => {
	const store = useAuthStore()
	if (to.meta.requiresAuth && !store.isAuthenticated) {
		next({ name: 'SignIn' })
	} else next()
})
