<script setup lang="ts">
	import { useForm } from 'vee-validate'
	import { useTitle } from '@vueuse/core'
	import { toFormValidator } from '@vee-validate/zod'
	import { z } from 'zod'
	import NavLink from '@/components/NavLink/index.vue'
	import FormField from '@/components/Form/FormField.vue'
	import FormButton from '@/components/form/FormButton.vue'
	import { useAuthStore } from '@/store/auth'
	import { loginValidator } from '@/utils/zod'

	import FormError from '@/components/form/FormError.vue'

	const title = useTitle()
	title.value = 'Gixny - Iniciar sesión'
	const store = useAuthStore()

	const { errors, handleSubmit, isSubmitting } = useForm<
		z.infer<typeof loginValidator>
	>({
		validationSchema: toFormValidator(loginValidator),
	})
	const onSubmit = handleSubmit(async (values) => {
		await store.signIn(values)
	})
</script>

<template>
	<h2 class="font-bold text-center mb-4">Iniciar sesión</h2>
	<form
		@submit="onSubmit"
		class="flex flex-col h-screen space-y-6 "
	>
		<form-field
			:type="'text'"
			:name="'email'"
			:label="'Correo electrónico'"
			:placeholder="'Por ej... elmaildepepito123@gmail.com'"
			:error="errors.email"
		/>
		<form-field
			:name="'password'"
			:type="'password'"
			:label="'Contraseña'"
			:placeholder="'Por ej... lacontraseñadepepito123*'"
			:error="errors.password"
		/>
		<p v-if="!store.error">
			No posee cuenta?
			<NavLink :href="'/sign-up'">Registrarse</NavLink>
		</p>
		<form-error :errors="store.error" />
		<form-button type="submit" :disabled="isSubmitting">
			{{ isSubmitting ? 'Iniciando sesión...' : 'Iniciar sesión' }}
		</form-button>
	</form>
</template>
