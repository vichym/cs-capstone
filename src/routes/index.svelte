<script>
	import Welcome from '../components/section1.svelte';
	import About from '../components/section2.svelte';
	import { elasticIn, quintInOut, circOut } from 'svelte/easing';
	import CNN from '../components/section3.svelte';
	let toggleMenu = false;
	function handleMenu() {
		toggleMenu = true;
	}

	function circle(node, { delay = 0, duration = 300, easing = linear }) {
		return {
			delay,
			duration,
			easing,
			css: (t) => `
			clip-path: circle(${t * 80 + 2}%);
		`
		};
	}
</script>

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap');
	</style>
	<script src="https://kit.fontawesome.com/8d3d8f3c09.js" crossorigin="anonymous"></script>
</svelte:head>

<main>
	{#if !toggleMenu}
		<div out:circle={{ duration: 1000, easing: quintInOut }}>
			<Welcome on:toggle={handleMenu} />
		</div>
	{:else}
		<div in:circle={{ delay: 1500, duration: 3000, easing: elasticIn }}>
			<CNN />
		</div>
	{/if}
	<!-- <About /> -->
</main>

<style>
	:global(body) {
		font-family: 'Rajdhani', sans-serif;
		background-color: black;
	}
	:global(section) {
		display: flex;
		min-height: 100vh;
		width: 100%;
		align-items: center;
		justify-content: center;
		padding: 1em;
	}
</style>
