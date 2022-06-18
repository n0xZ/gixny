<script setup lang="ts">
	import NavLink from '../NavLink/index.vue';
	import { useAuthStore } from '@/store/auth';

	const store = useAuthStore();
</script>

<template>
	<ul class="flex flex-row items-center space-x-5 list-none" v-if="!store.user">
		<li class="decoration-none ">
			<nav-link :href="'/sign-up'">Crear usuario</nav-link>
		</li>
		<li class="decoration-none ">
			<nav-link :href="'/sign-in'">Iniciar sesión</nav-link>
		</li>
	</ul>
</template>
