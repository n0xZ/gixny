<script setup lang="ts">
	import { useTitle } from '@vueuse/core';
	const title = useTitle();
	title.value = 'Gixny - Home';
</script>

<template>
	<section>Bienvenido a Gixny!</section>
</template>
