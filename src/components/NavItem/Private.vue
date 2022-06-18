<script setup lang="ts">
	import NavLink from '../NavLink/index.vue';
	import { useAuthStore } from '@/store/auth';

	const store = useAuthStore();
</script>

<template>
	<ul class="flex flex-row items-center space-x-5 list-none" v-if="store.user">
		<li  class="decoration-none">
			<nav-link :href="'/profile'"> Mi perfíl</nav-link>
		</li>
		<li  class="decoration-none">
			<button
				class="rounded-xl border-2 border-gray-600 p-2 bg-transparent"
				@click="store.signOut"
			>
				Cerrar sesión
			</button>
		</li>
	</ul>
</template>
