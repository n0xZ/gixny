<script setup lang="ts">
	import { taskStore } from '@/store/task';
	import TaskList from '@/components/Task/TaskList.vue';
	import { onMounted } from 'vue';
	const store = taskStore();
	onMounted(() => store.fetchTasks());
</script>

<template>
	<section :class="$style.tasks__container" v-if="store.tasks.length !== 0">
		<TaskList :tasks="store.tasks" />
	</section>
</template>

<style module>
	.tasks__container {
		margin: 2rem 1rem 2rem 1rem;
	}
</style>
