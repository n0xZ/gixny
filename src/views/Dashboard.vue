<script setup lang="ts">
	import { useTitle } from '@vueuse/core';

	import { RouterLink } from 'vue-router';
	import Hero from '@/components/Hero/index.vue';
	const title = useTitle();
	title.value = 'Gixny - Dashboard';
</script>

<template>
	<Hero>
		<RouterLink to="/dashboard/tasks/create">Crear tareas</RouterLink>
		<RouterLink to="/dashboard/tasks/view">Ver tareas</RouterLink>
	</Hero>
</template>
