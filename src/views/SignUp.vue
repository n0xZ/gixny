<script setup lang="ts">
	import { ref } from 'vue'
	import { useTitle } from '@vueuse/core'
	import { useForm } from 'vee-validate'
	import { toFormValidator } from '@vee-validate/zod'
	import { z } from 'zod'
	import FormField from '../components/form/FormField.vue'
	import SignUpSucessful from '@/components/signup/SignUpSucessful.vue'
	import { useAuthStore } from '@/store/auth'
	import { registerValidator } from '@/utils/zod'
	import FormButton from '@/components/form/FormButton.vue'
	const store = useAuthStore()
	const isSignUpSuccessFul = ref(false)

	const title = useTitle()
	title.value = 'Gixny - Crear cuenta'
	const { errors, handleSubmit, isSubmitting } = useForm<
		z.infer<typeof registerValidator>
	>({
		validationSchema: toFormValidator(registerValidator),
	})
	const onSubmit = handleSubmit(async (values) => {
		await store.signUp(values)
		if (store.user) {
			isSignUpSuccessFul.value = true
		}
	})
</script>

<template>
	<article v-if="!isSignUpSuccessFul" class="w-full">
		<h1 class="text-center font-bold">Crear cuenta</h1>
		<form @submit="onSubmit" class="flex flex-col justify-center">
			<form-field
				:type="'text'"
				:name="'username'"
				:label="'Nombre de usuario'"
				:placeholder="'Por ej... pepito123'"
				:error="errors.username"
			/>
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

	<sign-up-sucessful :isLoginSucessful="isSignUpSuccessFul" />
</template>
