<script setup lang="ts">
	import { useForm } from 'vee-validate';
	import { toFormValidator } from '@vee-validate/zod';
	import FormField from '../components/Form/FormField.vue';
	import { loginSchema } from '../utils/zod';
	import type { Login } from '../types';
	import NavLink from '../components/NavLink/index.vue';
	const { errors, handleSubmit, values } = useForm<Login>({
		initialValues: { email: '', password: '' },
		validationSchema: toFormValidator(loginSchema),
	});
	const onSubmit = handleSubmit((values) => {
		console.log(values);
	});
	console.log(errors.value.email);
</script>

<template>
	<section>
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
			>
				Iniciar sesión
			</button>
		</form>
		<p>
			No posee cuenta? 
			<NavLink :href="'/register'">Regístrese aquí</NavLink>
		</p>
	</section>
</template>
