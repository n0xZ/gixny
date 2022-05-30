<script setup lang="ts">
	import Header from './Header.vue';
</script>
<template>
	<div>
		<Header />
		<main>
			<slot></slot>
		</main>
	</div>
</template>

<style scoped>
	main {
		min-height: 100vh;
		padding: 1rem 0 1rem 0;
	}
</style>
