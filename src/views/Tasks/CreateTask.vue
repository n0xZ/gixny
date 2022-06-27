<script setup lang="ts">
	import { ref } from 'vue'
	import { useForm } from 'vee-validate'
	import { toFormValidator } from '@vee-validate/zod'
	import { z } from 'zod'

	import FormField from '@/components/Form/FormField.vue'
	import FormTextArea from '@/components/Form/FormTextArea.vue'

	import TaskCreateDialog from '@/components/task/TaskCreateDialog.vue'

	import { useTaskStore } from '@/store/task'
	import { useAuthStore } from '@/store/auth'
	import { taskSchema } from '@/utils/zod'

	const store = useTaskStore()
	const authStore = useAuthStore()
	const isTaskCreatedSuccesfully = ref<boolean>(false)
	const { errors, handleSubmit, isSubmitting, resetForm } = useForm<
		z.infer<typeof taskSchema>
	>({
		validationSchema: toFormValidator(taskSchema),
	})
	const onSubmit = handleSubmit(async (values) => {
		const taskCreated = await store.createTask(values, authStore.getUserId!)
		if (taskCreated) {
			isTaskCreatedSuccesfully.value = true
			resetForm()
		}
	})
</script>

<template>
	<form
		@submit="onSubmit"
		class="space-y-6 p-3 w-6xl container mx-auto flex flex-col"
	>
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
		<TaskCreateDialog
			:isSubmitting="isSubmitting"
			:isTaskCreatedSuccesfully="isTaskCreatedSuccesfully"
		/>
	</form>
</template>
