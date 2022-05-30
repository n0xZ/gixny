<script setup lang="ts">
	import NavLink from '../NavLink/index.vue';
	import { useAuthStore } from '@/store/user';

	const store = useAuthStore();
</script>

<template>
	<ul v-if="!store.user">
		<li>
			<NavLink href="/signup">Crear usuario</NavLink>
		</li>
		<li>
			<NavLink href="/signin">Iniciar sesión</NavLink>
		</li>
	</ul>
	<ul v-if="store.user">
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
<style scoped>
	ul {
		display: flex;
		flex-direction: row;

		align-items: center;
	}
	li {
		list-style: none;
		margin-left: 1rem;
	}
	button {
		border: none;
		background: none;
		cursor: pointer;
		border-radius: 2rem;
		color: white;
		background: #000;
		padding: 1rem 0.5rem 1rem 0.5rem;
	}
</style>
