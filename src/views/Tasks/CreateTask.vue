<script setup lang="ts">
	import { useForm } from 'vee-validate'
	import { toFormValidator } from '@vee-validate/zod'
	import { z } from 'zod'
	import FormField from '@/components/Form/FormField.vue'
	import FormTextArea from '@/components/Form/FormTextArea.vue'

	import FormButton from '@/components/form/FormButton.vue'
	import { useTaskStore } from '@/store/task'
	import { taskSchema } from '@/utils/zod'

	const store = useTaskStore()
	const { errors, handleSubmit, isSubmitting } = useForm<
		z.infer<typeof taskSchema>
	>({
		validationSchema: toFormValidator(taskSchema),
	})
	const onSubmit = handleSubmit(async (values) => {
		await store.createTask(values)
	})
</script>

<template>
	<form @submit="onSubmit" class="space-y-6">
		<form-field
			:error="errors.title"
			:type="'text'"
			:label="'Titulo de tarea'"
			:placeholder="'Por ej... Mi primer tarea'"
			:name="'title'"
		/>
		<form-text-area
			:error="errors.description"
			:label="'Titulo de tarea'"
			:placeholder="'Por ej... la descripción de mi tarea'"
			:name="'description'"
		/>
		<form-field
			:error="errors.priority"
			:type="'text'"
			:label="'Prioridad de la tarea'"
			:placeholder="'Por ej... Mi primer tarea'"
			:name="'priority'"
		/>
		<form-button type="submit" :disabled="isSubmitting"
			>Crear nueva tarea</form-button
		>
	</form>
</template>
