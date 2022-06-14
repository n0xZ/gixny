<script setup lang="ts">
	import { useTitle } from '@vueuse/core';

	import { RouterLink, RouterView, useRoute } from 'vue-router';
	import Hero from '@/components/Hero/index.vue';
	import { useAuthStore } from '../store/user';

	const title = useTitle();
	title.value = 'Gixny - Dashboard';
	const { path } = useRoute();
</script>

<template>
	<Hero>
		<RouterLink to="/dashboard/tasks/create">Crear tareas</RouterLink>
		<RouterLink to="/dashboard/tasks/view">Ver tareas</RouterLink>
	</Hero>
</template>
