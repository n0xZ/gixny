<script setup lang="ts">
	import { useTitle } from '@vueuse/core';
	import { useAuthStore } from '../store';
	const loggedUser = useAuthStore().user;
	const title = useTitle();
	title.value = 'Gixny - Dashboard';
</script>

<template>
	<section>
		<h1>Bienvenido, {{ loggedUser?.email }}</h1>
		<p>Que desea realizar hoy?</p>
	</section>
</template>
