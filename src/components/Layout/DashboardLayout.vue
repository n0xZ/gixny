<script setup lang="ts">
	import { useMediaQuery } from '@vueuse/core'
	const isLargeScreen = useMediaQuery('(min-width: 1024px)')
</script>

<template>
	<div class="flex flex-row w-full" v-if="isLargeScreen">
		<article
			class="min-h-screen flex flex-col w-64 items-center h-full rounded-md border-r-2 border-t-2 border-zinc-900 bg-zinc-900 c-gray-300 font-bold"
		>
			<aside class="flex flex-col space-y-3 mt-3">
				<router-link
					to="/dashboard/tasks/view"
					class="flex flex-row space-x-2 hover:c-amber duration-150 ease-in"
					><div area-label="View task Icon"></div>
					<span>Ver tareas</span></router-link
				>
				<router-link to="/dashboard/tasks/create">Crear tareas</router-link>
			</aside>
		</article>

		<slot></slot>
	</div>
	<slot v-if="!isLargeScreen"></slot>
</template>
