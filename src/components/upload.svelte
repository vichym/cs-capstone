<script>
	export let picture;
	let fileinput;
	let windowH;
	let windowW;
	import { Carousel, CarouselItem } from 'sveltestrap';

	$: mheight = windowH * 0.7;
	$: mwidth = windowW * 0.9;

	const onFileSelected = (e) => {
		let image = e.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onload = (e) => {
			picture = e.target.result;
		};
	};
</script>

<svelte:window bind:innerWidth={windowW} bind:innerHeight={windowH} />

<div class="main-container">
	<div
		class="upload-area m-auto"
		on:click={() => {
			fileinput.click();
		}}
	>
		<div class="center">
			<i class="fa-solid fa-cloud-arrow-up fa-7x" />
			Choose Image
		</div>
		<input
			style="display:none"
			type="file"
			accept=".jpg, .jpeg, .png"
			on:change={(e) => onFileSelected(e)}
			bind:this={fileinput}
		/>
	</div>
</div>

<style>
	.main-container {
		display: flex;
		flex-direction: column;
		max-width: inherit;
		max-height: inherit;
		margin: 2em;
	}
	.upload-area {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-flow: column;
		cursor: pointer;
	}

	.center {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
