import { defineStore } from 'pinia'
import { User, ApiError } from '@supabase/supabase-js'
import { z } from 'zod'
import { client } from '@/lib/supabase'
import { loginValidator, registerValidator } from '@/utils/zod'

export const useAuthStore = defineStore('User', {
	state: () => {
		return {
			user: null as User | null,
			error: null as ApiError | null,
		}
	},
	getters: {
		isAuthenticated: (state) => (state.user ? true : false),
	},
	actions: {
		async signIn(values: z.infer<typeof loginValidator>) {
			console.log(navigator.onLine)
			const { error, user } = await client.auth.signIn({
				email: values.email,
				password: values.password,
			})
			if (user && !error) {
				this.user = user
			}
			this.error = error
		},
		signOut() {
			if (this.user) {
				client.auth.signOut()
				this.user = null
			}
		},
		async signUp(values: z.infer<typeof registerValidator>) {
			const { error, user } = await client.auth.signUp(
				{
					email: values.email,
					password: values.password,
				},
				{ data: { username: values.username } }
			)
			if (user && !error) {
				this.user = user
			}
			this.error = error
		},
	},
})
