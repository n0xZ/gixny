<script setup lang="ts">
	import { ButtonHTMLAttributes } from 'vue';
	interface Props extends ButtonHTMLAttributes {}

	const props = defineProps<Props>();
</script>

<template>
	<button :class="$style.button" v-bind="props">
		<slot></slot>
	</button>
</template>

<style module>
	.button {
		background: linear-gradient(to left, #f9b47d, #cb45a8);
		padding: 1rem 2rem 1rem 2rem;
		width: 100%;
		font-size: larger;
		border: 2px transparent;
		border-radius: 6px ;
		cursor: pointer;
	}
</style>
