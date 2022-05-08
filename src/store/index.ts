import { defineStore } from 'pinia';
import { User, ApiError } from '@supabase/supabase-js';
import { client } from '@/lib/supabase';
import type { Credentials } from 'src/types';

export const useAuthStore = defineStore('User', {
	state: () => {
		return {
			user: null as User | null,
			error: null as ApiError | null,
		};
	},
	getters: {
		isAuthenticated: (state) => (state.user ? true : false),
	},
	actions: {
		async signIn(values: Credentials) {
			const { error, user } =
				await client.auth.signIn({
					email: values.email,
					password: values.password,
				});
			if (user && !error) {
				this.user = user;
			}
			this.error = error;
		},
		signOut() {
			if (this.user) {
				client.auth.signOut();
				this.user = null;
			}
		},
		async signUp(values: Credentials) {
			const { error, user } = await client.auth.signUp({
				email: values.email,
				password: values.password,
			});
			if (user && !error) {
				this.user = user;
			}
			this.error = error;
		},
	},
});
