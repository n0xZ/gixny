<script setup lang="ts">
	import type { ApiError } from '@supabase/supabase-js/'
	interface Props {
		errors: ApiError | null
	}
	const props = defineProps<Props>()
</script>

<template>
	<p class="c-red-400" v-if="props.errors">
		{{ props.errors.message }}
	</p>
</template>
