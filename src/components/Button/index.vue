<script setup lang="ts">
	import { ButtonHTMLAttributes } from 'vue';
	interface Props extends ButtonHTMLAttributes {}

	const props = defineProps<Props>();
</script>

<template>
	<button v-bind="props" class="px-5 py-3 rounded-md bg-zinc-900 text-white">
		<slot></slot>
	</button>
</template>
