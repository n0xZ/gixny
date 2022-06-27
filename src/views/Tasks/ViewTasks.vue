<script setup lang="ts">
	import { onBeforeMount, ref } from 'vue'

	import TaskList from '@/components/Task/TaskList.vue'
	import { useTaskStore } from '@/store/task'
	import { useAuthStore } from '@/store/auth'
	import Skeleton from '@/components/loading/Skeleton.vue'
	const store = useTaskStore()
	const authStore = useAuthStore()
	const loading = ref<boolean>(true)
	onBeforeMount(() =>
		store
			.fetchTasks(authStore.getUserId!)
			.then(() => (loading.value = !loading.value))
	)
</script>

<template>
	<Skeleton v-if="loading" />
	<section
		class="flex flex-col container mx-auto mt-6"
		v-if="store.tasks.length !== 0 && !loading"
	>
		<h2 class="font-bold text-2xl text-center mb-3">Lista de tareas</h2>

		<task-list :tasks="store.getActiveTasks" />
	</section>
	<router-link
		v-if="!loading"
		to="/dashboard/tasks/create"
		class="flex flex-row space-x-2 items-center hover:c-yellow-400 duration-150 ease-in-out"
	>
		<div class="i-carbon-add-alt"></div>
		<span>Agregar nuevas tareas</span></router-link
	>
</template>
