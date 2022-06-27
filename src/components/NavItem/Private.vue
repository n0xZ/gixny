<script setup lang="ts">
	import { useAuthStore } from '@/store/auth'
	const store = useAuthStore()
</script>

<template>
	<ul class="flex flex-row items-center space-x-5 list-none" v-if="store.user">
		<li class="decoration-none">
			<button
				class="rounded-xl border-2 border-gray-600 p-2 bg-transparent hover:bg-amber hover:c-gray-900 hover:border-amber duration-150 ease-in-out"
				@click="store.signOut"
			>
				Cerrar sesión
			</button>
		</li>
	</ul>
</template>
