<script setup lang="ts">
	import { useTitle } from '@vueuse/core';
	import Hero from '@/components/Hero/index.vue';
	import { useAuthStore } from '../store';
	const loggedUser = useAuthStore().user;
	const title = useTitle();
	title.value = 'Gixny - Dashboard';
</script>

<template>
	<Hero>
		<article class="grid grid-cols-2">
			<h1>Bienvenido, {{ loggedUser?.email }}</h1>
			<p>Que desea realizar hoy?</p>
		</article>
	</Hero>
</template>
