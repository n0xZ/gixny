<script setup lang="ts">
	import { useForm } from 'vee-validate';
	import { toFormValidator } from '@vee-validate/zod';
	import FormField from '@/components/Form/FormField.vue';
	import Hero from '@/components/Hero/index.vue';
    import {} from '@/utils/zod'
import type {TaskFormFields} from '../../types'

</script>

<template>
	<Hero>
		<form>
			<FormField
               
				:label="'Titulo de tarea'"
				:placeholder="'Por ej... Mi primer tarea'"
				:name="'title'"
			/>
		</form>
	</Hero>
</template>
