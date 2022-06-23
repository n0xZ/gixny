<script setup lang="ts">
	import NavLink from '../navlink/index.vue';
	import Public from '../navitem/Public.vue';
	import Private from '../navitem/Private.vue';
	import { useAuthStore } from '@/store/auth';

	const store = useAuthStore();
</script>

<template>
	<header class="p-5 container mx-auto">
		<nav class="flex flex-row items-center justify-between c-gray-900 font-bold">
			<h1 v-if="!store.isAuthenticated">
				<NavLink :href="'/'">Home</NavLink>
			</h1>
			<h1 v-if="store.isAuthenticated" class="i-carbon-home">
				<NavLink :href="'/dashboard'"></NavLink>
			</h1>
			<Public />
			<Private />
		</nav>
	</header>
</template>
