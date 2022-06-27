<script setup lang="ts">
	import { useMediaQuery } from '@vueuse/core'
	const isLargeScreen = useMediaQuery('(min-width: 1024px)')
</script>

<template>
	<div class="flex flex-row w-full" v-if="isLargeScreen">
		<article
			class="min-h-screen flex flex-col w-72 items-center h-full bg-zinc-900 c-gray-300 font-bold"
		>
			<aside class="flex flex-col justify-center space-y-5 mt-10 w-32">
				<router-link
					to="/dashboard/home"
					class="flex flex-row space-x-2 hover:c-amber duration-150 ease-in"
				>
					<div class="i-carbon-home h-6 w-6"></div>
					<span>Home</span></router-link
				>
				<router-link
					to="/dashboard/tasks/view"
					class="flex flex-row space-x-2 hover:c-amber duration-150 ease-in"
					><div
						area-label="View task Icon"
						class="i-carbon-align-box-middle-left h-6 w-6"
					></div>
					<span>Ver tareas</span></router-link
				>
				<router-link
					to="/dashboard/tasks/create"
					class="flex flex-row items-center space-x-2 hover:c-amber duration-150 ease-in"
				>
					<div class="i-carbon-add-alt h-6 w-6"></div>
					<span>Crear tarea</span></router-link
				>

				<router-link
					to="/dashboard/profile"
					class="flex flex-row items-center space-x-2 hover:c-amber duration-150 ease-in"
					><div class="i-carbon-user-avatar-filled-alt h-6 w-6"></div>
					<span>Mi perfil</span>
				</router-link>
			</aside>
		</article>

		<slot></slot>
	</div>
	<slot v-if="!isLargeScreen"></slot>
</template>
