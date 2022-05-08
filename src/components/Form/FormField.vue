<script setup lang="ts">
	import { useField } from 'vee-validate';
	import type { Credentials, TaskFormValues } from '../../types';
	type InputType = 'text' | 'password';
	type InputName = keyof Credentials | keyof TaskFormValues;

	interface FormFieldProps {
		label: string;
		name: InputName;
		type: InputType;
		placeholder: string;
		error?: string | undefined;
	}
	const { error, label, name, placeholder, type } =
		defineProps<FormFieldProps>();
	const { value } = useField(name);
</script>

<template>
	<aside class="flex flex-col">
		<label class="mb-2">{{ label }}</label>
		<input
			:autocomplete="type === 'password' ? 'new-password' : 'email'"
			:name="name"
			class="w-full p-4 pr-12 text-sm border-zinc-600 rounded-lg shadow-sm"
			:type="type"
			:placeholder="placeholder"
			v-model="value"
		/>
		<span class="text-red-500 h-12">
			<p v-if="error?.length !== 0">{{ error }}</p>
		</span>
	</aside>
</template>
