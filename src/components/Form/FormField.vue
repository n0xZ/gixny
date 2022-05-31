<script setup lang="ts">
	import { useField } from 'vee-validate';
	import type { Credentials, TaskFormFields } from '../../types';
	type InputType = 'text' | 'password';
	type InputName = keyof Credentials | keyof TaskFormFields;

	interface FormFieldProps {
		label: string;
		name: InputName;
		type: InputType;
		placeholder: string;
		error?: string | undefined;
	}
	const { error, label, name, placeholder, type } =
		defineProps<FormFieldProps>();
	const { value, meta } = useField(name);
</script>

<template>
	<aside :class="$style['form-field']">
		<label :class="$style['form-field__label']">{{ label }}</label>
		<input
			:class="$style['form-field__input']"
			:autocomplete="type === 'password' ? 'new-password' : 'email'"
			:name="name"
			:type="type"
			:placeholder="placeholder"
			v-model="value"
		/>
		<span
			:class="$style['form-field__error__label']"
			v-if="error?.length !== 0 && meta.touched"
		>
			{{ error }}
		</span>
	</aside>
</template>

<style module>
	.form-field {
		margin-bottom: 2rem;
	}
	.form-field__label {
		display: block;
		margin-bottom: 0.5rem;
	}
	.form-field__input {
		display: block;
		width: 100%;
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 0.25rem;
	}
	.form-field__input:focus {
		border-color: #000;
	}
	.form-field__input:invalid {
		border-color: #f00;
	}
	.form-field__error__label {
		margin-top: 1rem;
		color: red;
	}
</style>
