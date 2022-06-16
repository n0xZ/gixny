<script setup lang="ts">
	import { Task } from '@/types';

	interface Props {
		task: Task;
	}
	const { task } = defineProps<Props>();
</script>

<template>
	<h2 class="font-bold">{{ task.title }}</h2>
	<p>{{ task.description }}</p>
	<p>{{ task.status }}</p>
</template>
