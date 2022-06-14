<script setup lang="ts">
	import { useForm } from 'vee-validate';
	import { toFormValidator } from '@vee-validate/zod';
	import FormField from '@/components/Form/FormField.vue';
	import FormTextArea from '@/components/Form/FormTextArea.vue';
	import Hero from '@/components/Hero/index.vue';
	import Button from '@/components/Button/index.vue';
	import { taskStore } from '@/store/task';

	import { taskSchema } from '../../utils/zod';
	import type { TaskFormFields } from '../../types';
	const store = taskStore();
	const { errors, handleSubmit, isSubmitting } = useForm<TaskFormFields>({
		validationSchema: toFormValidator(taskSchema),
	});
	const onSubmit = handleSubmit(async (values) => {
		await store.createTask(values);
	});
</script>

<template>
	<form @submit="onSubmit">
		<FormField
			:error="errors.title"
			:type="'text'"
			:label="'Titulo de tarea'"
			:placeholder="'Por ej... Mi primer tarea'"
			:name="'title'"
		/>
		<FormTextArea
			:error="errors.description"
			:label="'Titulo de tarea'"
			:placeholder="'Por ej... la descripción de mi tarea'"
			:name="'description'"
		/>
		<FormField
			:error="errors.priority"
			:type="'text'"
			:label="'Prioridad de la tarea'"
			:placeholder="'Por ej... Mi primer tarea'"
			:name="'priority'"
		/>
		<Button type="submit" :disabled="isSubmitting">Crear nueva tarea</Button>
	</form>
</template>
