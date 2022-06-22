<script setup lang="ts">
	import { useField } from 'vee-validate'
	import { z } from 'zod'
	import { taskSchema } from '@/utils/zod'
	type ZodTaskRegister = typeof taskSchema.shape
	type InputName = keyof ZodTaskRegister

	interface FormFieldProps {
		label: string
		name: InputName

		placeholder: string
		error?: string | undefined
	}
	const { error, label, name, placeholder } = defineProps<FormFieldProps>()
	const { value, meta } = useField<string>(name)
</script>

<template>
	<aside class="flex flex-col space-y-5 max-w-6xl">
		<label class="font-bold">{{ label }}</label>

		<textarea
			class="px-4 py-2 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg max-w-4xl"
			:name="name"
			:placeholder="placeholder"
			type="text"
			v-model="value"
		></textarea>
		<span class="c-red-500 h-12">
			{{ error }}
		</span>
	</aside>
</template>
