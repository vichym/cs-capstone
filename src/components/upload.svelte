<script>
	export let picture, base64Image;
	let fileinput;

	const onFileSelected = (e) => {
		let reader = new FileReader();
		//  For previewing
		reader.readAsDataURL(e.target.files[0]);
		//  Set image to return to parent component
		reader.onload = (e) => {
			picture = e.target.result;
			base64Image = reader.result.replace('data:image/png;base64,', '');
		};
	};
</script>

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
			accept="image/*"
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
