<script setup lang="ts">
	import { RouterView } from 'vue-router';
	import Layout from './components/Layout/Layout.vue';
</script>

<template>
	<Layout>
		<router-view></router-view>
	</Layout>
</template>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
