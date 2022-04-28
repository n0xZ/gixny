<script setup lang="ts">
	import NavLink from '../NavLink/index.vue';
</script>

<template>
	<header class="p-4 border-b-2 border-zinc-50">
		<nav
			class="container mx-auto flex flex-row items-center justify-between"
		>
			<h1>
				<NavLink :href="'/'">Home</NavLink>
			</h1>
			<ul class="flex flex-row items-center">
				<li class="mx-2">
					<NavLink :href="'/register'">Crear usuario</NavLink>
				</li>
				<li class="mx-2">
					<NavLink :href="'/login'">Iniciar sesión</NavLink>
				</li>
			</ul>
		</nav>
	</header>
</template>
