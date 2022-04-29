<script setup lang="ts">
	interface Props {
		isLoginSucessful: boolean;
	}
	const props = defineProps<Props>();
</script>
<template>
	<article v-if="props.isLoginSucessful">
		<p>
			Por favor, revise su mail para confirmar su registro.
		</p>
	</article>
</template>
