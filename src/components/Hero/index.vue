<template>
	<section :class="$style.hero">
		<slot></slot>
	</section>
</template>

<style module>
	.hero {
		contain: size layout;
	}
	@container (max-width: 1200px) {
		.links {
			color: blue;
		}
	}
</style>
