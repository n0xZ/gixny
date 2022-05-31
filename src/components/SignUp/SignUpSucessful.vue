<script setup lang="ts">
	interface Props {
		isLoginSucessful: boolean;
	}
	const props = defineProps<Props>();
</script>
<template>
	<article :class="$style['sign-up-successful']" v-if="props.isLoginSucessful">
		<p>Por favor, revise su mail para confirmar su registro.</p>
	</article>
</template>

<style module>
	.sign-up-successful {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	
</style>
