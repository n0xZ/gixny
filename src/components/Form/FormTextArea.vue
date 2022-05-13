<script setup lang="ts">
	import { useField } from 'vee-validate';
	import type { Credentials, TaskFormFields } from '../../types';
	type InputType = 'text' | 'password';
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
	<aside class="flex flex-col">
		<label class="mb-2">{{ label }}</label>
		<textarea
			:name="name"
			class="w-full p-4 pr-12 text-sm border-zinc-600 rounded-lg shadow-sm"
			:placeholder="placeholder"
			type="text"
			v-model="value"
		></textarea>
		<span class="text-red-500 h-12" v-if="error?.length !== 0 && meta.touched">
			{{ error }}
		</span>
	</aside>
</template>
