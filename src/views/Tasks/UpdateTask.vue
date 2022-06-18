<script setup lang="ts">
import { ref } from 'vue';
	import {useRoute,onBeforeRouteUpdate} from 'vue-router'
	import { useForm } from 'vee-validate';
	import { toFormValidator } from '@vee-validate/zod';

	import FormField from '@/components/Form/FormField.vue';
	import Hero from '@/components/Hero/index.vue';
import FormButton from '@/components/form/FormButton.vue';

	import { taskSchema } from '@/utils/zod';
	import {useTaskStore} from '@/store/task'
	import type { Task, TaskFormFields } from '../../types';
import { computed } from '@vue/reactivity';

	const store = useTaskStore();
	const taskParamsId = useRoute().params.id;

   const selectedTask = computed(()=> store.tasks.find((task:Task)=>Number(task.id)===Number(taskParamsId)))


	const { errors, handleSubmit, isSubmitting } = useForm<TaskFormFields>({
		validationSchema: toFormValidator(taskSchema),
		initialValues:selectedTask.value
		
	});
	const onSubmit = handleSubmit(async(values) => {
	await store.updateTask(Number(taskParamsId),values);
	});
</script>

<template>
	<Hero>
		<form @submit="onSubmit">
			<form-field
				:error="errors.title"
				:type="'text'"
				:label="'Titulo de tarea'"
				:placeholder="'Por ej... Mi primer tarea'"
				:name="'title'"
			/>
			<form-field
				:error="errors.description"
				:type="'text'"
				:label="'Descripción de la tarea'"
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
			<form-button :disabled="isSubmitting">Modificar tarea</form-button>
		</form>
	</Hero>
</template>
