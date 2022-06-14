<script setup lang="ts">
	import NavLink from '../NavLink/index.vue';
	import { useAuthStore } from '@/store/user';

	const store = useAuthStore();
</script>

<template>
	<ul class="flex flex-row items-center space-x-5 list-none" v-if="!store.user">
		<li class="decoration-none ">
			<NavLink :href="'/signup'">Crear usuario</NavLink>
		</li>
		<li class="decoration-none ">
			<NavLink :href="'/signin'">Iniciar sesión</NavLink>
		</li>
	</ul>
</template>
