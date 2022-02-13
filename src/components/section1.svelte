<script>
	import { Button } from 'sveltestrap';
</script>

<section id="welcome-section">
	<div class="h-100 ">
		<div class="h-50 d-flex flex-column align-content-end justify-content-end">
			<h1 id="title">Welcome to CS 445 Capstone Project</h1>
			<p>By Radu Lungu and Vichearith Meas</p>
		</div>
		<div class="h-50 d-flex align-items-center justify-content-center">
			<Button href="#cnntool-section" class="rounded-circle shadow" style={'padding: 0'}>
				<i class="fa-solid fa-circle-play fa-5x" />
			</Button>
		</div>
	</div>
</section>

<style>
	#title {
		font-size: 3em;
	}
</style>
