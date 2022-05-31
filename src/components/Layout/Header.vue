<script setup lang="ts">
	import NavLink from '../NavLink/index.vue';
	import Public from '../NavItem/Public.vue';
	import Private from '../NavItem/Private.vue';
</script>

<template>
	<header :class="$style.header">
		<nav>
			<h1>
				<NavLink :href="'/'">Home</NavLink>
			</h1>

			<Public />
			<Private />
		</nav>
	</header>
</template>
<style module>
	.header {
		padding: 1.2rem 2rem 1.2rem 2rem;
		background: linear-gradient(to left, #03cea4, #fb4d3d);
	}
	.header > nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
</style>
