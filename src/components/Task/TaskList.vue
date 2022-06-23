<script setup lang="ts">
	import TaskItem from './TaskItem.vue'
	import { Task } from '@/types'
	interface Props {
		tasks: Task[]
	}
	const props = defineProps<Props>()
</script>

<template>
	<article v-for="task in props.tasks" class="grid grid-rows-2 gap-6">
		<TaskItem :task="task" />
	</article>
</template>
