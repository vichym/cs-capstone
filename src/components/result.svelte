<script>
	export let result = [
		{ type: '1', prediction: '0.8' },
		{ type: '5', prediction: '0.01' }
	];
	import { Progress, Table } from 'sveltestrap';
</script>

<Table borderless>
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
</Table>
