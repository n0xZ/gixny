<script setup lang="ts">
	import NavLink from '../NavLink/index.vue';
	import { useAuthStore } from '@/store/user';

	const store = useAuthStore();
</script>

<template>
	<ul :class="$style['nav-items__list']" v-if="!store.user">
		<li :class="$style['nav-items__list__item']">
			<NavLink :href="'/signup'">Crear usuario</NavLink>
		</li>
		<li :class="$style['nav-items__list__item']">
			<NavLink :href="'/signin'">Iniciar sesión</NavLink>
		</li>
	</ul>
</template>

<style module>
	.nav-items__list {
		display: flex;
		flex-direction: row;

		align-items: center;
	}
	.nav-items__list__item {
		list-style: none;
		margin-left: 1rem;
	}
</style>
