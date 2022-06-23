<script setup lang="ts">
	import { onMounted, ref } from 'vue'
	import TaskList from '@/components/Task/TaskList.vue'
	import { useTaskStore } from '@/store/task'
	const store = useTaskStore()
	const loading = ref<boolean>(true)
	onMounted(() =>
		store.fetchTasks().then(() => (loading.value = !loading.value))
	)
</script>

<template>
	<p v-if="loading">Cargando...</p>
	<section class="grid grid-cols-3" v-if="store.tasks.length !== 0 && !loading">
		<TaskList :tasks="store.tasks" />
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
