<script setup lang="ts">
	import { RouterLink } from 'vue-router';
	interface Props {
		href: string;
	}

	const { href } = defineProps<Props>();
</script>

<template>
	<RouterLink :to="{ path: href }">
		<slot></slot>
	</RouterLink>
</template>

<style scoped>
	a {
		color: black;
		text-decoration: none;
		font-family: 'Lato';
	}
	a:hover {
		color: #ffc107;
		transition: 0.1s ease-in-out;
	}
</style>
