<script setup lang="ts">
	import { Task } from 'src/types';

	interface Props {
		task: Task;
	}
	const { task } = defineProps<Props>();
</script>

<template>
	<h2>{{ task.title }}</h2>
	<p>{{ task.description }}</p>
	<p>{{ task.status }}</p>
</template>
<style module>
	.task__container {
		margin: 2rem 1rem 2rem 1 rem;
	}
</style>
