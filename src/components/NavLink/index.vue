<script setup lang="ts">
	import { RouterLink } from 'vue-router';
	interface Props {
		href: string;
	}

	const { href } = defineProps<Props>();
</script>

<template>
	<RouterLink :to="{ path: href }" class="c-zinc-800 hover:c-yellow-400 decoration-none duration-150 ease-in-out">
		<slot></slot>
	</RouterLink>
</template>
