<script setup lang="ts">
	import { RouterView } from 'vue-router';
	import Layout from './components/Layout/Layout.vue';
	import { client } from './lib/supabase';
	import { useAuthStore } from './store';
	import 'vue-toastification/dist/index.css';
	
	client.auth.onAuthStateChange((event, session) => {
		if (event === 'SIGNED_OUT') {
			useAuthStore().user = null;
		}

		if (event === 'SIGNED_IN' && session) {
			useAuthStore().user = session?.user;
		}
	});
</script>

<template>
	<Layout>
		<router-view v-slot="{ Component }">
			<transition>
				<component :is="Component" />
			</transition>
		</router-view>
	</Layout>
</template>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
