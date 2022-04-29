import { defineStore } from 'pinia';
import { client } from '@/lib/supabase';
import { User } from '@supabase/supabase-js';
import type { Credentials } from 'src/types';
export const useAuthStore = defineStore('Auth', {
	state: () => {
		return {
			user: null as User | null,
		};
	},
	getters: {
		isAuthenticated: (state) => (state.user ? true : false),
	},
	actions: {
		async login(values: Credentials) {
			const { error, user } = await client.auth.signIn({
				email: values.email,
				password: values.password,
			});
			if (user && !error) {
				this.user = user;
			}
			throw new Error(error?.message);
		},
		logout() {
			if (this.user) {
				client.auth.signOut();
				this.user = null;
			}
		},
	},
});
