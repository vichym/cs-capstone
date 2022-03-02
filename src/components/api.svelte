<script>
	export async function getPredition(encodeImage) {
		const result = await fetch('http://1a88-141-140-239-118.ngrok.io/predict', {
			method: 'post',
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
</script>
