<script setup lang="ts">
	import { useTitle } from '@vueuse/core';
	const title = useTitle();
	title.value = 'Gixny - Home';
</script>

<template>
	<section class="m-100 c-yellow-400">
		<h1>Bienvenido a Gixny!</h1>
		<p>Plataforma para la creación de tareas personales</p>
	</section>
</template>
