<script setup lang="ts">
	import { RouterView } from 'vue-router';
	import Layout from './components/Layout/Layout.vue';
	import { client } from './lib/supabase';
	import { useAuthStore } from './store';

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
		<router-view></router-view>
	</Layout>
</template>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
