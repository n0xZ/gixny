<script setup lang="ts">
	import { useForm } from 'vee-validate';
	import { useTitle } from '@vueuse/core';
	import { toFormValidator } from '@vee-validate/zod';
	import NavLink from '../components/NavLink/index.vue';
	import FormField from '../components/Form/FormField.vue';
	import { useAuthStore } from '@/store/user';
	import { loginSchema } from '@/utils/zod';
	import type { Credentials } from '../types';

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
			<p class="mb-5" v-if="!store.error">
				No posee cuenta?
				<NavLink href="/signup">Regístrese aquí</NavLink>
			</p>
			<p v-if="store.error" class="text-red-500 h-12">{{ store.error.message }}</p>
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
