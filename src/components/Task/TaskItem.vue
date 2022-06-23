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
		class="relative flex flex-col h-28 w-128 rounded-xl border-2 border-gray-500 p-3 overflow-hidden bg-green-500"
	>
		<span class="w-full flex flex-row justify-between items-center">
			<h2 class="font-bold">{{ task.title }}</h2>
			<div class="flex flex-row items-center space-x-5">
				<button
					@click="store.deleteTask(Number(task.id))"
					class="i-carbon-close text-xl"
				>
					Eliminar tarea
				</button>
				<router-link
					:to="`/dashboard/tasks/update/${task.id}`"
					class="i-carbon-magic-wand"
				/>
			</div>
		</span>

		<p>{{ task.description }}</p>
		<p class="rounded-xl px-5 py-3 bg-red-300">{{ task.priority }}</p>
	</aside>
</template>
