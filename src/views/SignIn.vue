<script setup lang="ts">
	import { useForm } from 'vee-validate';
	import { toFormValidator } from '@vee-validate/zod';
	import { useToast } from 'vue-toastification';
	import NavLink from '../components/NavLink/index.vue';
	import FormField from '../components/Form/FormField.vue';
	import { useAuthStore } from '@/store/index';
	import { loginSchema } from '@/utils/zod';
	import type { Credentials } from '../types';

	const store = useAuthStore();
	const toast = useToast();
	const { errors, handleSubmit } = useForm<Credentials>({
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
	<section class="container mx-auto max-w-4xl">
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
			<button type="submit" class="px-5 py-3 rounded-md bg-zinc-900 text-white">
				Iniciar sesión
			</button>
		</form>
		<p>
			No posee cuenta?
			<NavLink href="/signup">Regístrese aquí</NavLink>
		</p>
	</section>
</template>
