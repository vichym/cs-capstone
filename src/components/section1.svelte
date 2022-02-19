<script>
	import { Button } from 'sveltestrap';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('toggle', {
			text: 'true'
		});
	}
</script>

<section id="welcome-section">
	<div class="h-100 ">
		<div class="h-50 d-flex flex-column align-content-end justify-content-end">
			<h1 id="title">Welcome to CS 484 Capstone Project</h1>
			<h4>By Radu Lungu and Vichearith Meas</h4>
		</div>
		<div class="h-50 d-flex align-items-center justify-content-center">
			<Button on:click={handleClick} class="rounded-circle shadow" style={'padding: 0'}>
				<i class="fa-solid fa-circle-play fa-5x" />
			</Button>
		</div>
	</div>
</section>

<style>
	section {
		background-color: aquamarine;
	}
	#title {
		font-size: 3em;
	}
</style>
