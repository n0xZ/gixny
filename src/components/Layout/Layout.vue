<script setup lang="ts">
	import { RouteLocationNormalizedLoaded } from 'vue-router';
import {useAuthStore} from '@/store/auth'
	import Header from './Header.vue';
	interface Props {
		route: RouteLocationNormalizedLoaded;
	}
	const store = useAuthStore()
	const { route } = defineProps<Props>();
</script>
<template>
	<div :key="route.name!">
		<Header />
		<main class="min-h-screen container mx-auto max-w-5xl">
			<slot></slot>
		</main>
		<footer v-if="!store.isAuthenticated" class="p-5 border-t-2 border-gray-400">
		<ul class="flex flex-row items-center justify-center container mx-auto max-w-5xl  space-x-4">
			<li><router-link to="/sign-in">Iniciar sesión</router-link></li>
			<li><router-link to="/sign-up">Unirse ya</router-link></li>
		</ul>
	</footer>
	</div>
</template>
