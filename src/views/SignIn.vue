<script setup lang="ts">
	import { useForm } from 'vee-validate';
	import { useTitle } from '@vueuse/core';
	import { toFormValidator } from '@vee-validate/zod';
	import { useToast } from 'vue-toastification';
	import NavLink from '../components/NavLink/index.vue';
	import FormField from '../components/Form/FormField.vue';
	import { useAuthStore } from '@/store/index';
	import { loginSchema } from '@/utils/zod';
	import type { Login } from '../types';

	const title = useTitle();
	title.value = 'Gixny - Iniciar sesión';
	const store = useAuthStore();
	const toast = useToast();
	const { errors, handleSubmit, isSubmitting } = useForm<Login>({
		validationSchema: toFormValidator(loginSchema),
	});
	const onSubmit = handleSubmit(async (values) => {
		await store.signIn(values);

		if (store.error?.status === 400) {
			toast.error('Credenciales incorrectas. Ingrese nuevamente.');
		}
	});
</script>

<template>
	<section class="container mx-auto max-w-4xl mt-7">
		<h1 class="text-center text-2xl">Iniciar sesión</h1>
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
			<p class="mb-5">
				No posee cuenta?
				<NavLink href="/signup">Regístrese aquí</NavLink>
			</p>
			<button
				type="submit"
				class="px-5 py-3 w-full rounded-md bg-zinc-900 text-white"
				:disabled="isSubmitting"
			>
				{{ isSubmitting ? 'Iniciando sesión...' : 'Iniciar sesión' }}
			</button>
		</form>
	</section>
</template>
