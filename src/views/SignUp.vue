<script setup lang="ts">
	import { ref } from 'vue';
	import { useTitle } from '@vueuse/core';
	import { useForm } from 'vee-validate';
	import { toFormValidator } from '@vee-validate/zod';
	import FormField from '../components/form/FormField.vue';
	import SignUpSucessful from '@/components/signup/SignUpSucessful.vue';
	import { useAuthStore } from '@/store/user';
	import { loginSchema } from '@/utils/zod';
	import type { Credentials } from '../types';
	import Button from '@/components/button/index.vue';
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
	<article v-if="!isSignUpSuccessFul">
		<h1 :class="$style.signUp__title">Crear cuenta</h1>
		<form @submit="onSubmit" class="grid grid-rows-3   place-items-center ">
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
			<Button type="submit" :disabled="isSubmitting">
				{{ isSubmitting ? 'Cargando...' : 'Crear cuenta' }}
			</Button>
		</form>
	</article>

	<SignUpSucessful :isLoginSucessful="isSignUpSuccessFul" />
</template>
<style module>
	.signUp__container {
		display: flex;
		flex-direction: column;
		justify-content: start;

		height: 100vh;
	}
	.signUp__title {
		font-weight: bold;
		text-align: center;
	}
	.signUp__advice__link {
		color: #00bcd4;
	}
	.signUp__submit_errors {
		margin-bottom: 1rem;
		font-weight: 600;
		color: red;
	}
</style>
