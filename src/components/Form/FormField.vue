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
	<aside class="flex flex-col  space-y-5 max-w-6xl">
		<label class="font-bold">{{ label }}</label>
		<input
			class="px-4 py-2 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg max-w-4xl"
			:autocomplete="type === 'password' ? 'new-password' : 'email'"
			:name="name"
			:type="type"
			:placeholder="placeholder"
			v-model="value"
		/>
		<span
			class="c-red-500 h-12"
			v-if="error?.length !== 0 && meta.touched"
		>
			{{ error }}
		</span>
	</aside>
</template>