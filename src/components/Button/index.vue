<script setup lang="ts">
	import { ButtonHTMLAttributes } from 'vue';
	interface Props extends ButtonHTMLAttributes {}

	const props = defineProps<Props>();
</script>

<template>
	<button class="px-6 py-3 rounded-xl border-2 border-zinc-500 bg-gray-200 font-semibold text-zinc-900 w-full" v-bind="props">
		<slot></slot>
	</button>
</template>

