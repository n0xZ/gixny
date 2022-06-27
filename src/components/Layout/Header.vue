<script setup lang="ts">
	import NavLink from '../navlink/index.vue'
	import Public from '../navitem/Public.vue'
	import Private from '../navitem/Private.vue'
	import { useAuthStore } from '@/store/auth'
	const store = useAuthStore()
</script>

<template>
	<header class="relative bg-zinc-900">
		<nav
			class="p-5 flex flex-row items-center container mx-auto justify-between c-gray-300 font-bold"
		>
			<h1 v-if="!store.isAuthenticated">
				<NavLink :href="'/'">Home</NavLink>
			</h1>

			<router-link
				to="/dashboard/home"
				class="flex flex-row items-center space-x-2"
				v-if="store.isAuthenticated"
			>
				<div class="i-carbon-home h-6 w-6"></div>
				<span>Home</span>
			</router-link>
			<Public />
			<Private />
		</nav>
	</header>
</template>
