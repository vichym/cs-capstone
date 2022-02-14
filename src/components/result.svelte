<script>
	export let prediction;
	// export let result = [
	// 	{ type: '1', prediction: '0.8' },
	// 	{ type: '5', prediction: '0.01' }
	// ];
	// import { Progress, Table } from 'sveltestrap';
	// import Api from './api.svelte';

	function typewriter(node, { speed = 1 }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			tick: (t) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
</script>

<!-- <Table borderless>
	<thead>
		<tr>
			<th>Classification</th>
			<th>Predition</th>
		</tr>
	</thead>

	<tbody>
		{#each result as { type, prediction }}
			<tr>
				<th scope="row">{type}</th>
				<td><Progress value={prediction * 100} /></td>
			</tr>
		{/each}
	</tbody>
</Table> -->

<div class="container">
	{#await prediction}
		Loading...
	{:then value}
		{#if value}
			<div class="result" in:typewriter>
				{value}
			</div>
		{:else}
			<div class="hint" in:typewriter>Upload a Car Picture to Start</div>
		{/if}
	{/await}
</div>

<style>
	.container {
		display: flex;
		width: 100%;
		height: 100%;
		padding: 0;
		background: antiquewhite;
		justify-content: center;
		align-items: center;
	}
	.result {
		font-size: large;
		font-weight: bolder;
	}
	.hint {
		font-size: medium;
	}
</style>
