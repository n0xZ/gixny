<script setup lang="ts">
	import NavLink from '../NavLink/index.vue';
	import NavItems from '../NavItem/NavItems.vue';
</script>

<template>
	<header class="p-4 border-b-2 border-zinc-50">
		<nav
			class="container mx-auto flex flex-row items-center justify-between"
		>
			<h1>
				<NavLink :href="'/'">Home</NavLink>
			</h1>

			<NavItems />
		</nav>
	</header>
</template>
