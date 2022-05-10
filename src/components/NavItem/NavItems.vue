<script setup lang="ts">
	import NavLink from '../NavLink/index.vue';
	import { useAuthStore } from '@/store/user';

	const store = useAuthStore();
</script>

<template>
	<ul
		class="flex flex-row items-center space-x-5"
		v-if="!store.user"
	>
		<li>
			<NavLink href="/signup">Crear usuario</NavLink>
		</li>
		<li>
			<NavLink href="/signin">Iniciar sesión</NavLink>
		</li>
	</ul>
	<ul
		class="flex flex-row items-center space-x-5"
		v-if="store.user"
	>
		<li>
			<NavLink href="/profile"> Mi perfíl</NavLink>
		</li>
		<li>
			<button
				class="px-5 py-3 rounded-lg text-white bg-zinc-900"
				@click="store.signOut"
			>
				Cerrar sesión
			</button>
		</li>
	</ul>
</template>
