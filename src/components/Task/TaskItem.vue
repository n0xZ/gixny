<script setup lang="ts">
	import { RouterLink } from 'vue-router'
	import { useTaskStore } from '@/store/task'
	import { Task } from '@/types'

	interface Props {
		task: Task
	}
	const { task } = defineProps<Props>()
	const store = useTaskStore()
</script>

<template>
	<aside
		class="relative flex flex-col h-28 w-74 rounded-lg p-3 space-y-3 overflow-hidden bg-green-400"
	>
		<span class="w-full flex flex-row justify-between items-center">
			<h2 class="font-bold">{{ task.title }}</h2>
			<div class="flex flex-row items-center space-x-3">
				<button
					@click="store.deleteTask(Number(task.id))"
					class="i-carbon-close h-6 w-6"
				>
					Eliminar tarea
				</button>
				<router-link
					:to="`/dashboard/tasks/update/${task.id}`"
					class="i-carbon-magic-wand h-6 w-6"
				/>
			</div>
		</span>

		<p>{{ task.description }}</p>
		<p class=" bg-red-500">{{ task.priority }}</p>
	</aside>
</template>
