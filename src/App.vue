<script setup lang="ts">
	import { RouterView, useRouter } from 'vue-router';

	import Layout from './components/layout/Layout.vue';
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
	<router-view v-slot="{ Component, route }">
		<transition name="nested"
			><Layout :route="route">
				<component :is="Component" />
			</Layout>
		</transition>
	</router-view>
</template>
<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Barlow', sans-serif;
	}
	p {
		max-width: 75ch;
	}
	.nested-enter-active .inner,
	.nested-leave-active .inner {
		transition: all 0.3s ease-in-out;
	}

	.nested-enter-from .inner,
	.nested-leave-to .inner {
		transform: translateX(30px);
		opacity: 0;
	}
</style>
