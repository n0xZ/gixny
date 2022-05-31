<script setup lang="ts">
	import NavLink from '../NavLink/index.vue';
	import { useAuthStore } from '@/store/user';

	const store = useAuthStore();
</script>

<template>
	<ul :class="$style['nav-items__list']" v-if="store.user">
		<li :class="$style['nav-items__list__item']">
			<NavLink :href="'/profile'"> Mi perfíl</NavLink>
		</li>
		<li :class="$style['nav-items__list__item']">
			<button
				:class="$style['nav-items__list__logout__button']"
				@click="store.signOut"
			>
				Cerrar sesión
			</button>
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
	.nav-items__list__logout__button {
		border: none;
		background: none;
		cursor: pointer;
		border-radius: 2rem;
		color: white;
		background: #000;
		padding: 1rem 0.5rem 1rem 0.5rem;
	}
</style>
