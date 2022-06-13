<script setup lang="ts">
	import { RouteLocationNormalizedLoaded } from 'vue-router';

	import Header from './Header.vue';
	interface Props {
		route: RouteLocationNormalizedLoaded;
	}
	const { route } = defineProps<Props>();
	console.log();
</script>
<template>
	<div :key="route.name!">
		<Header />
		<main class="min-h-screen container mx-auto max-w-5xl">
			<slot></slot>
		</main>
	</div>
</template>

