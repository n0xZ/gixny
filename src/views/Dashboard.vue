<script setup lang="ts">
	import { useTitle } from '@vueuse/core'

	import { RouterLink, RouterView } from 'vue-router'
	import DashboardLayout from '@/components/layout/DashboardLayout.vue'
	const title = useTitle()

	title.value = 'Gixny - Dashboard'
</script>

<template>
	<dashboard-layout />

	<section class="container mx-auto">
		<router-view v-slot="{ Component }">
			<component :is="Component" />
		</router-view>
	</section>
</template>
