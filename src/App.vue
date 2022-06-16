<script setup lang="ts">
	import { RouterView, useRouter } from 'vue-router';

	import Layout from './components/layout/Layout.vue';
	import { client } from './lib/supabase';
	import { useAuthStore } from './store/auth';

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
	<router-view v-slot="{ Component, route }">
		<transition
			enter-active-class="duration-300 ease-out"
			enter-from-class="transform opacity-0"
			enter-to-class="opacity-100"
			leave-active-class="duration-200 ease-in"
			leave-from-class="opacity-100"
			leave-to-class="transform opacity-0"
			><Layout :route="route">
				<component :is="Component" />
			</Layout>
		</transition>
	</router-view>
</template>
