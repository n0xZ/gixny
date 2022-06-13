<script setup lang="ts">
	import NavLink from '../NavLink/index.vue';
	import { useAuthStore } from '@/store/user';

	const store = useAuthStore();
</script>

<template>
	<ul class="flex flex-row items-center space-x-5" v-if="store.user">
		<li  class="decoration-none">
			<NavLink :href="'/profile'"> Mi perfíl</NavLink>
		</li>
		<li  class="decoration-none">
			<button
				class="btn btn-primary"
				@click="store.signOut"
			>
				Cerrar sesión
			</button>
		</li>
	</ul>
</template>
