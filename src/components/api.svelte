<script>
	export async function getPredition(base64Image) {
		const res = await fetch('http://127.0.0.1:5000/predict', {
			method: 'post',
			body: JSON.stringify({ image: base64Image })
		});
		const text = await res.text();

		if (res.ok) {
			return text;
		} else {
			throw new Error(text);
		}
	}
</script>
