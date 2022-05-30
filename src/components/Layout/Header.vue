<script setup lang="ts">
	import NavLink from '../NavLink/index.vue';
	import NavItems from '../NavItem/NavItems.vue';
</script>

<template>
	<header>
		<nav>
			<h1>
				<NavLink :href="'/'">Home</NavLink>
			</h1>

			<NavItems />
		</nav>
	</header>
</template>
<style scoped>
	header {
		padding: 1.5rem 3rem 1.5rem 3rem;
		background: linear-gradient(to left,#F9B47D,#CB45A8);
	}
	header > nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
</style>
