<script>
	export let picture;
	export let loadingPromise;
	import { Card, CardImg, Spinner } from 'sveltestrap';
</script>

{#if picture}
	<Card>
		<div class="picture">
			<CardImg class=" img-thumbnail" src={picture} alt="d" />
		</div>
		<div class="card-img-overlay d-flex">
			{#await loadingPromise}
				<Spinner info />
				<p>Processing</p>
			{:then}
				<p class="success">Success !</p>
			{:catch error}
				<p style="color: red">{error.message}</p>
			{/await}
		</div>
	</Card>
{:else}
	<div class="picture">
		<img class=" img-thumbnail picture" src="build/static/house.png" alt="d" />
	</div>
{/if}

<style>
	.picture {
		max-width: 15em;
		max-height: 15em;
	}
	.success {
		font-size: medium;
		font-weight: bold;
	}
	.card-img-overlay {
		display: none;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: rgb(183 255 159 / 59%);
	}
</style>
