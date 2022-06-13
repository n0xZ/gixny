<script setup lang="ts">
	import Hero from '@/components/Hero/index.vue';
	import { useAuthStore } from '../store/user';
	const store = useAuthStore();
</script>

<template>
	<Hero>
		<article class="grid grid-cols-2">
			<aside>
				<p>Correo electrónico:{{ store.user?.email }}</p>
			</aside>
			<aside>
				<p>Has realizado x de 300 tareas</p>
			</aside>
		</article>
	</Hero>
</template>

<style module></style>
