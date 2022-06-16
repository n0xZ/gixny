<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useTaskStore} from '@/store/task'
	import { Task } from '@/types';

	interface Props {
		task: Task;
	}
	const { task } = defineProps<Props>();
const store = useTaskStore()
</script>

<template>
<aside class="relative grid place-items-center h-[13rem] w-[19rem] rounded-xl border-2 border-gray-500 p-3">
	<h2 class="font-bold">{{ task.title }}</h2>
	<p>{{ task.description }}</p>
	<p class="rounded-xl px-5 py-3 bg-red-300 ">{{ task.priority }}</p>
<span class="w-full">
<button @click="store.deleteTask(Number(task.id))"  class="rounded-xl px-2 py-1 border-2 border-gray-500">Eliminar tarea</button>
	<router-link   :to="`/dashboard/tasks/update/${task.id}`" class="rounded-xl px-2 py-1 border-2 border-gray-500">Modificar tarea</router-link></span>
	</aside>
</template>
