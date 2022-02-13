<script>
	export let picture;
	export let loading;
	import { Card, CardImg, Spinner } from 'sveltestrap';
	let michael = '../../static/michael-scott.gif';
</script>

{#if picture}
	<Card>
		<div class="picture">
			<CardImg class=" img-thumbnail" src={picture} alt="d" />
		</div>
		<div class="card-img-overlay {loading && 'd-flex'}">
			<Spinner info />
			<p>Processing</p>
		</div>
	</Card>
{:else}
	<div class="picture">
		<img class=" img-thumbnail picture" src={michael} alt="d" />
	</div>
{/if}

<style>
	.picture {
		max-width: 15em;
		max-height: 15em;
	}
	.card-img-overlay {
		display: none;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: rgba(195, 122, 255, 0.411);
	}
</style>
