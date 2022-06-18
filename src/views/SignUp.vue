<script setup lang="ts">
	import { ref } from 'vue'
	import { useTitle } from '@vueuse/core'
	import { useForm } from 'vee-validate'
	import { toFormValidator } from '@vee-validate/zod'
	import FormField from '../components/form/FormField.vue'
	import SignUpSucessful from '@/components/signup/SignUpSucessful.vue'
	import { useAuthStore } from '@/store/auth'
	import { loginSchema } from '@/utils/zod'
	import type { Credentials } from '../types'
	import FormButton from '@/components/form/FormButton.vue'
	const store = useAuthStore()
	const isSignUpSuccessFul = ref(false)

	const title = useTitle()
	title.value = 'Gixny - Crear cuenta'
	const { errors, handleSubmit, isSubmitting } = useForm<Credentials>({
		validationSchema: toFormValidator(loginSchema),
	})
	const onSubmit = handleSubmit(async (values) => {
		await store.signUp(values)
		if (store.user) {
			isSignUpSuccessFul.value = true
		}
	})
</script>

<template>
	<article v-if="!isSignUpSuccessFul">
		<h1 class="text-center font-bold">Crear cuenta</h1>
		<form @submit="onSubmit" class="grid grid-rows-3 place-items-center">
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
			<form-button type="submit" :disabled="isSubmitting">
				{{ isSubmitting ? 'Cargando...' : 'Crear cuenta' }}
			</form-button>
		</form>
	</article>

	<SignUpSucessful :isLoginSucessful="isSignUpSuccessFul" />
</template>
