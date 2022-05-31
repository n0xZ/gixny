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
		<main :class="$style.main__content">
			<slot></slot>
		</main>
	</div>
</template>

<style module>
	.main__content {
		min-height: 100vh;
		padding: 1rem 0 1rem 0;
	}
</style>
