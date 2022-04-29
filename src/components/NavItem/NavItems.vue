<script setup lang="ts">
	import NavLink from '../NavLink/index.vue';
	import { useAuthStore } from '@/store/index';
	const isAuth = useAuthStore().isAuthenticated;
</script>

<template>
	<ul class="flex flex-row items-center" v-if="!isAuth">
		<li class="mx-2">
			<NavLink href="/signup">Crear usuario</NavLink>
		</li>
		<li class="mx-2">
			<NavLink href="/signin">Iniciar sesión</NavLink>
		</li>
	</ul>
	<ul class="flex flex-row items-center" v-if="isAuth">
		<li class="mx-2">
			<NavLink href="/signup"> Mi perfíl</NavLink>
		</li>
		<li>
			<button
				class="px-5 py-3 rounded-lg text-white bg-zinc-900"
			>
				Cerrar sesión
			</button>
		</li>
	</ul>
</template>
