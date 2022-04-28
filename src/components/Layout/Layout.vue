<script setup lang="ts">
	import Header from './Header.vue';
</script>
<template>
	<div>
		<Header />
		<main class="min-h-screen p-4">
			<slot></slot>
		</main>
	</div>
</template>
