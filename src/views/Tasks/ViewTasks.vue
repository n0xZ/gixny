<script setup lang="ts">
	import { onBeforeMount, ref } from 'vue'
	import { useAsyncState } from '@vueuse/core'
	import TaskList from '@/components/Task/TaskList.vue'
	import { useTaskStore } from '@/store/task'
	import { useAuthStore } from '@/store/auth'
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
	<p v-if="loading">Cargando...</p>
	<section
		class="grid grid-cols-3 container mx-auto"
		v-if="store.tasks.length !== 0 && !loading"
	>
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
