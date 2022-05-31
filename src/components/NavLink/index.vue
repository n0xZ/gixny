<script setup lang="ts">
	import { RouterLink } from 'vue-router';
	interface Props {
		href: string;
	}

	const { href } = defineProps<Props>();
</script>

<template>
	<RouterLink :to="{ path: href }" :class="$style['nav-link']">
		<slot></slot>
	</RouterLink>
</template>

<style module>
	.nav-link {
		color: black;
		text-decoration: none;
		font-family: 'Lato';
	}
	.nav-link:hover {
		color: #ffc107;
		transition: 0.1s ease-in-out;
	}
</style>
