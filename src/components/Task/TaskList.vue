<script setup lang="ts">
	import { Task } from '../../types';
	import TaskItem from './TaskItem.vue';
	interface Props {
		tasks: Task[];
	}
	const props = defineProps<Props>();
</script>

<template>
		<article v-for="task in props.tasks"  class="grid grid-rows-2  gap-6">
			<TaskItem :task="task" />
		</article>
</template>
