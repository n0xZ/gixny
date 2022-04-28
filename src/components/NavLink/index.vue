<script setup lang="ts">
	import { RouterLink } from 'vue-router';
	interface Props {
		href: string;
	}

	const { href } = defineProps<Props>();
</script>

<template>
	<router-link
		:class="'text-zinc-900 font-bold font-lato'"
		:to="{ path: href }"
	>
		<slot></slot>
	</router-link>
</template>
