<script>
	export let description;
	let clazz = '';
	export { clazz as class };

	import { Card, CardHeader } from 'sveltestrap';
</script>

<Card class="m-1 {clazz && clazz}">
	<CardHeader class="md-10 d-flex justify-content-center">{description}</CardHeader>
	<slot />
</Card>
