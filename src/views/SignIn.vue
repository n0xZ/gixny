<script setup lang="ts">
	import { useForm } from 'vee-validate';
	import { useTitle } from '@vueuse/core';
	import { toFormValidator } from '@vee-validate/zod';
	import NavLink from '@/components/NavLink/index.vue';
	import FormField from '@/components/Form/FormField.vue';
	import Button from '@/components/Button/index.vue';
	import { useAuthStore } from '@/store/user';
	import { loginSchema } from '@/utils/zod';
	import type { Credentials } from '@types';

	const title = useTitle();
	title.value = 'Gixny - Iniciar sesión';
	const store = useAuthStore();

	const { errors, handleSubmit, isSubmitting } = useForm<Credentials>({
		validationSchema: toFormValidator(loginSchema),
	});
	const onSubmit = handleSubmit(async (values) => {
		await store.signIn(values);
	});
</script>

<template>
	<h1 :class="$style.signIn__title">Iniciar sesión</h1>
	<form @submit="onSubmit" :class="$style.signIn__container">
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
		<p :class="$style.signIn__advice__link" v-if="!store.error">
			No posee cuenta?
			<NavLink :href="'/signup'">Regístrese aquí</NavLink>
		</p>
		<p :class="$style.signIn__submit_errors" v-if="store.error">
			{{ store.error.message }}
		</p>
		<Button type="submit" :disabled="isSubmitting">
			{{ isSubmitting ? 'Iniciando sesión...' : 'Iniciar sesión' }}
		</Button>
	</form>
</template>

<style module>
	.signIn__container {
		display: flex;
		flex-direction: column;
		justify-content: start;

		height: 100vh;
	}
	.signIn__title {
		font-weight: bold;
		text-align: center;
	}
	.signIn__advice__link {
		color: #00bcd4;
	}
	.signIn__submit_errors {
		margin-bottom: 1rem;
		font-weight: 600;
		color: red;
	}
</style>
