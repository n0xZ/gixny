<script setup lang="ts">
	import { taskStore } from '@/store/task';
	import TaskList from '@/components/Task/TaskList.vue';
	import { onMounted } from 'vue';
	const store = taskStore();
	onMounted(() => store.fetchTasks());
</script>

<template>
	<section class="container mx-auto max-w-5xl" v-if="store.tasks.length !== 0">
		<TaskList :tasks="store.tasks" />
	</section>
</template>


