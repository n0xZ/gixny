<script setup lang="ts">
	import { Task } from '@/types';
	import TaskItem from './TaskItem.vue';
	interface Props {
		tasks: Task[];
	}
	const props = defineProps<Props>();
</script>

<template>
	<article>
		<aside v-for="task in props.tasks">
			<TaskItem :task="task" />
		</aside>
	</article>
</template>
