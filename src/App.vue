<script setup lang="ts">
	import { RouterView, useRouter } from 'vue-router';

	import Layout from './components/Layout/Layout.vue';
	import { client } from './lib/supabase';
	import { useAuthStore } from './store/user';

	const router = useRouter();
	client.auth.onAuthStateChange((event, session) => {
		if (event === 'SIGNED_OUT') {
			useAuthStore().user = null;
			router.push('/');
		}

		if (event === 'SIGNED_IN' && session) {
			useAuthStore().user = session?.user;
			router.push('/dashboard');
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
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: Inconsolata;
	}
	p {
		max-width: 75ch;
	}
</style>
