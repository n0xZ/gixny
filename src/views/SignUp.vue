<script setup lang="ts">
	import { ref } from 'vue';
	import { useTitle } from '@vueuse/core';
	import { useForm } from 'vee-validate';
	import { toFormValidator } from '@vee-validate/zod';
	import FormField from '../components/Form/FormField.vue';
	import SignUpSucessful from '@/components/SignUp/SignUpSucessful.vue';
	import { useAuthStore } from '@/store/user';
	import { loginSchema } from '@/utils/zod';
	import type { Credentials } from '../types';
	const store = useAuthStore();
	const isSignUpSuccessFul = ref(false);

	const title = useTitle();
	title.value = 'Gixny - Crear cuenta';
	const { errors, handleSubmit, isSubmitting } = useForm<Credentials>({
		validationSchema: toFormValidator(loginSchema),
	});
	const onSubmit = handleSubmit(async (values) => {
		await store.signUp(values);
		if (store.user) {
			isSignUpSuccessFul.value = true;
		}
	});
</script>

<template>
	<section class="container mx-auto max-w-4xl">
		<article v-if="!isSignUpSuccessFul">
			<h1 class="text-center text-2xl mb-3">Crear cuenta</h1>
			<form @submit="onSubmit">
				<FormField
					:type="'text'"
					:name="'email'"
					:label="'Correo electrónico'"
					:placeholder="'Por ej... elmaildepepito123@gmail.com'"
					:error="errors.email"
				/>
				<FormField
					:name="'password'"
					:type="'password'"
					:label="'Contraseña'"
					:placeholder="'Por ej... lacontraseñadepepito123*'"
					:error="errors.password"
				/>
				<button
					type="submit"
					class="px-5 py-3 rounded-md bg-zinc-900 text-white"
					:disabled="isSubmitting"
				>
					{{ isSubmitting ? 'Cargando...' : 'Crear cuenta' }}
				</button>
			</form>
		</article>

		<SignUpSucessful :isLoginSucessful="isSignUpSuccessFul" />
	</section>
</template>
