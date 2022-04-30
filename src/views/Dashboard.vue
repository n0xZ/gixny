<script setup lang="ts">
	import { useAuthStore } from '../store';
	const loggedUser = useAuthStore().user;
</script>

<template>
	<section>
		<h1>Bienvenido, {{ loggedUser?.email }}</h1>
		<p>Que desea realizar hoy?</p>
	</section>
</template>
