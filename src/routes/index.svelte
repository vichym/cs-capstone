<script>
	import Welcome from '../components/section1.svelte';
	import About from '../components/section2.svelte';
	import CNN from '../components/section3.svelte';
	let toggleMenu = false;
	let scrollY;
	const wheel = (node, options) => {
		let { scrollable } = options;

		const handler = (e) => {
			if (!scrollable) e.preventDefault();
		};

		node.addEventListener('wheel', handler, { passive: false });

		return {
			update(options) {
				scrollable = options.scrollable;
			},
			destroy() {
				node.removeEventListener('wheel', handler, { passive: false });
			}
		};
	};
</script>

<svelte:window bind:scrollY />
<!-- <svelte:window bind:scrollY use:wheel={false} /> -->

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;302;500;900&display=swap');
	</style>
	<script src="https://kit.fontawesome.com/8d3d8f3c09.js" crossorigin="anonymous"></script>
</svelte:head>

<main>
	<Welcome />
	<CNN />
	<!-- <About /> -->
</main>

<style>
	:global(body) {
		font-family: 'Nunito', sans-serif;
		background-color: aquamarine;
	}
	:global(section) {
		display: flex;
		min-height: 100vh;
		width: 100%;
		align-items: center;
		justify-content: center;
		padding: 1em;
	}

	#info {
		position: fixed;
		right: 10%;
		top: 10%;
	}
</style>
