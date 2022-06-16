<script setup lang="ts">
	import { onMounted,ref } from 'vue';
	import TaskList from '@/components/Task/TaskList.vue';
	import { useTaskStore } from '../../store/task';
	const store = useTaskStore();
const loading = ref<boolean>(true)
	onMounted(() => store.fetchTasks().then(()=>loading.value=!loading.value));
</script>

<template>
<p v-if="loading">Cargando...</p>
	<section class="container mx-auto" v-if="store.tasks.length !== 0 && !loading">
		<TaskList :tasks="store.tasks" />
	</section>
</template>


