<script>
	import Upload from './upload.svelte';
	import Result from './result.svelte';
	import PhotoFrame from './photoFrame.svelte';
	import Arrow from './arrow.svelte';

	import { BACKEND_API } from '$lib/Env';

	let backend_api;
	if (process.env.NODE_ENV === 'production') {
		// For production
		backend_api = process.env.BACKEND_API;
	} else {
		// For development
		backend_api = BACKEND_API;
	}

	let image;
	let base64Image;
	let predictionPromise;

	async function getPredition(encodeImage) {
		const result = await fetch(`${backend_api}/predict`, {
			method: 'post',
			mode: 'cors',
			body: JSON.stringify({ image: encodeImage })
		})
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				console.log(res.vgg16_2_model);
				return res.vgg16_2_model;
			})
			.catch((error) => {
				throw new Error(error);
			});
		return result;
	}
	$: if (base64Image) {
		predictionPromise = getPredition(base64Image);
	}
</script>

<section id="cnntool-section" class="cnntool-section">
	<div>
		<div class="header">
			<h1>CNN Image Classifier</h1>
		</div>
		<div class="p-2 bd-highlight justify-content-center w-100 dashboard">
			<div class=" container arrow1">
				<Arrow animate />
			</div>
			<div class=" container arrow2">
				<Arrow animate />
			</div>
			<div class="upload container">
				<div class="container wrapper">
					<div class="counter">
						<h1>1</h1>
					</div>
					<div class=" container content">
						<Upload bind:picture={image} bind:base64Image />
					</div>
				</div>
			</div>
			<div class="preview container">
				<div class="container wrapper">
					<div class="  counter">
						<h1>2</h1>
					</div>
					<div class=" container content">
						<PhotoFrame bind:picture={image} bind:loadingPromise={predictionPromise} />
					</div>
				</div>
			</div>
			<div class="result container">
				<div class="container wrapper">
					<div class="counter ">
						<h1>3</h1>
					</div>
					<div class=" container content">
						<Result bind:prediction={predictionPromise} />
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.cnntool-section {
		background: url('/ai.png');
		background-repeat: no-repeat;
		background-size: cover;
		display: flex;
		width: 100%;
		height: 100%;
	}

	.dashboard {
		display: grid;
		grid-template-columns: 1fr 2em 1fr 2em 1fr;
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
		justify-content: center;
		align-items: center;
	}
	.header {
		display: flex;
		color: white;
		justify-content: center;
		align-items: center;
		margin-left: 0.5em;
		margin-right: 0.5em;
		font-size: larger;
		font-weight: 700;
	}
	.wrapper {
		border-radius: 0.5em;
		background-color: antiquewhite;
		overflow: hidden;
	}
	.counter {
		display: flex;
		background-color: aquamarine;
		height: 100%;
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
		border-radius: 1em;
	}
	.arrow2 {
		grid-area: arrow2;
		border-radius: 1em;
		background-color: cornflowerblue;
	}

	@media screen and (max-width: 920px) {
		.dashboard {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 2em 1fr 2em 1fr;
			grid-template-areas:
				'upload'
				'arrow1'
				'preview'
				'arrow2'
				'result';
		}
	}
</style>
