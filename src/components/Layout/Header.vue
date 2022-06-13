<script setup lang="ts">
	import NavLink from '../navlink/index.vue';
	import Public from '../navitem/Public.vue';
	import Private from '../navitem/Private.vue';
</script>

<template>
	<header class="p-6 container mx-auto">
		<nav class="flex flex-row items-center justify-between c-gray-900 font-bold">
			<h1>
				<NavLink :href="'/'">Home</NavLink>
			</h1>

			<Public />
			<Private />
		</nav>
	</header>
</template>
