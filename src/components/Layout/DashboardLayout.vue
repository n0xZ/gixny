<script setup lang="ts">
	import { useMediaQuery } from '@vueuse/core'
	const isLargeScreen = useMediaQuery('(min-width: 1024px)')
</script>

<template>
	<section
		class="min-h-screen flex flex-col w-64  items-center h-full  rounded-md border-r-2 border-t-2 border-gray-500"
		v-if="isLargeScreen"
	>
		<article class="flex flex-col space-y-3 mt-3">
			<router-link to="/dashboard/tasks/view"> Ver tareas</router-link>
			<router-link to="/dashboard/tasks/create">Crear tareas</router-link>
		</article>
	</section>
</template>
