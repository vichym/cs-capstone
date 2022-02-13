<script>
	import Upload from './upload.svelte';
	import Result from './result.svelte';
	import PhotoFrame from './photoFrame.svelte';
	import Arrow from './arrow.svelte';

	let image;
	let processingStatus;
</script>

<section id="cnntool-section" class="cnntool-section">
	<div>
		<div class="header">
			<h2>CNN Image Classifier</h2>
		</div>
		<div class="p-2 bd-highlight justify-content-center w-100 dashboard">
			<div class=" container arrow1">
				<Arrow />
			</div>
			<div class=" container arrow2">
				<Arrow down animate />
			</div>
			<div class="upload container">
				<div class="counter"><h1>1</h1></div>
				<div class=" container content">
					<Upload bind:picture={image} />
				</div>
			</div>
			<div class="preview container">
				<div class="  counter">
					<h1>2</h1>
				</div>
				<div class=" container content">
					<PhotoFrame bind:picture={image} bind:loading={processingStatus} />
				</div>
			</div>
			<div class="result container">
				<div class="counter">
					<h1>3</h1>
				</div>
				<div class=" container content align-items-start">
					<Result />
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.cnntool-section {
		background-color: violet;
		display: flex;
		width: 100%;
		height: 100%;
	}

	.dashboard {
		display: grid;
		grid-template-columns: 1fr 4em 1fr 4em 1fr;
		grid-template-areas: 'upload arrow1 preview  arrow2  result';
		grid-row-gap: 0.5rem;
		grid-column-gap: 1rem;
		align-items: center;
		justify-content: space-evenly;
	}
	.container {
		display: flex;
		width: 100%;
		height: 100%;
		padding: 0;
		background: antiquewhite;
		justify-content: center;
		align-items: center;
	}
	.header {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: thistle;
		margin-left: 0.5em;
		margin-right: 0.5em;
	}
	.counter {
		background-color: aquamarine;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.5rem;
	}
	.content {
		padding: 5px;
	}

	.upload {
		grid-area: upload;
	}
	.preview {
		grid-area: preview;
	}
	.result {
		grid-area: result;
	}
	.arrow1 {
		grid-area: arrow1;
		background-color: cornflowerblue;
	}
	.arrow2 {
		grid-area: arrow2;
		background-color: cornflowerblue;
	}

	@media screen and (max-width: 820px) {
		.dashboard {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 4em 1fr 4em 1fr;
			grid-template-areas:
				'upload'
				'arrow1'
				'preview'
				'arrow2'
				'result';
		}

		.rotate {
			transform: rotate(90deg);
		}
	}
</style>
