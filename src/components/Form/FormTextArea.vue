<script setup lang="ts">
	import { useField } from 'vee-validate';
	import type { Credentials, TaskFormFields } from '../../types';

	type InputName = keyof Credentials | keyof TaskFormFields;

	interface FormFieldProps {
		label: string;
		name: InputName;

		placeholder: string;
		error?: string | undefined;
	}
	const { error, label, name, placeholder } = defineProps<FormFieldProps>();
	const { value, meta } = useField(name);
</script>

<template>
	<aside :class="$style['form-field']">
		<label :class="$style['form-field__label']">{{ label }}</label>
		// @ts-ignore
		<textarea
			:class="$style['form-field__textarea']"
			:name="name"
			:placeholder="placeholder"
			type="text"
			v-model="value"
		></textarea>
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
		margin-bottom: 1rem;
	}

	.form-field {
		margin-bottom: 1rem;
	}
	.form-field__label {
		display: block;
		margin-bottom: 0.5rem;
	}
	.form-field__textarea {
		display: block;
		width: 100%;
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 0.25rem;
		transition: border-color 0.2s ease-in-out;
	}
	.form-field__input:focus {
		border-color: #000;
	}
	.form-field__input:invalid {
		border-color: #f00;
	}
	.form-field__error__label {
		color: red;
	}
</style>
