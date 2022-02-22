<script>
	export let prediction;
	import { Table, Tooltip } from 'sveltestrap';
	import { fade, slide } from 'svelte/transition';
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

<div class="container">
	{#await prediction}
		<div in:typewriter={{ delaye: 500, speed: 2 }}>Loading...</div>
	{:then value}
		{#if value}
			<div class="container inner-container">
				<Table borderless class="table-sm table-hover mb-0">
					<thead>
						<tr>
							<th>Guess</th>
							<th>Confidence</th>
							<!-- <th>Conf</th> -->
						</tr>
					</thead>
					<tbody in:fade={{ duration: 500 }} class="table-body">
						{#each value.order as class_name}
							<tr class="entries" transition:slide>
								<td>{class_name}</td>
								<td
									><progress value={parseFloat(value.confidence[class_name])} id={class_name} /></td
								>
							</tr>
							<Tooltip target={class_name} placement="right"
								>{parseFloat(value.confidence[class_name])}</Tooltip
							>
						{/each}
					</tbody>
				</Table>
				<div class="container result" in:typewriter>
					{value.order[0]}
				</div>
			</div>
		{:else}
			<div class="hint" in:typewriter={{ speed: 0.5 }}>Upload a Car Picture to Start</div>
		{/if}
	{:catch error}
		<div class="error" in:typewriter={{ speed: 1 }}>{error.message}</div>
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
	.inner-container {
		flex-direction: column;
	}
	.entries {
		font-size: smaller;
		font-weight: normal;
	}
	.result {
		background-color: aliceblue;
		font-size: large;
		font-weight: bolder;
	}
	.hint {
		font-size: medium;
	}
	.error {
		color: red;
	}
</style>
