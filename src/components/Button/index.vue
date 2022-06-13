<script setup lang="ts">
	import { ButtonHTMLAttributes } from 'vue';
	interface Props extends ButtonHTMLAttributes {}

	const props = defineProps<Props>();
</script>

<template>
	<button class="px-5 py-3 rounded-xl border-2 border-zinc-600 text-zinc-900 " v-bind="props">
		<slot></slot>
	</button>
</template>

