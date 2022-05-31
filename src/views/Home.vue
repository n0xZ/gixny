<script setup lang="ts">
	import { useTitle } from '@vueuse/core';
	const title = useTitle();
	title.value = 'Gixny - Home';
</script>

<template>
	<section :class="$style.home__hero">
		<h1>Bienvenido a Gixny!</h1>
		<p>Plataforma para la creación de tareas personales</p>
	</section>
</template>

<style module>
	.home__hero {
		display: grid;
		min-height: 100vh;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: auto;
		place-items: center;
	}

	
	.home__paragraph {
	}
</style>
