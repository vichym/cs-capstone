<!-- 
Credit: Double Arrow Button
by : Manel Roig 
-->
<script>
	export let animate;
</script>

<div class="center-con rotate">
	<div class="round">
		<div id="cta">
			<span class="arrow primera next {animate && 'animate'}" />
			<span class="arrow segunda next {animate && 'animate'}" />
		</div>
	</div>
</div>

<style>
	a {
		text-decoration: none;
		color: #ffff;
	}

	.center-con {
		display: flex;
		height: 3em;
		width: 3em;
		align-items: center;
		justify-content: center;
		border-radius: 1rem;
	}

	.round {
		position: absolute;
		/* border: 2px solid #fff; */
		width: 3em;
		height: 3em;
		border-radius: 100%;
		/* background-color: blue; */
	}

	#cta {
		width: 100%;
		cursor: pointer;
		position: absolute;
	}

	#cta .arrow {
		left: 30%;
	}
	.arrow {
		position: absolute;
		bottom: 0;
		margin-left: 0px;
		width: 1em;
		height: 1em;
		background-size: contain;
		top: 15px;
	}
	.segunda {
		margin-left: 8px;
	}
	.next {
		background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHN0eWxlPi5zdDB7ZmlsbDojZmZmfTwvc3R5bGU+PHBhdGggY2xhc3M9InN0MCIgZD0iTTMxOS4xIDIxN2MyMC4yIDIwLjIgMTkuOSA1My4yLS42IDczLjdzLTUzLjUgMjAuOC03My43LjZsLTE5MC0xOTBjLTIwLjEtMjAuMi0xOS44LTUzLjIuNy03My43UzEwOSA2LjggMTI5LjEgMjdsMTkwIDE5MHoiLz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzE5LjEgMjkwLjVjMjAuMi0yMC4yIDE5LjktNTMuMi0uNi03My43cy01My41LTIwLjgtNzMuNy0uNmwtMTkwIDE5MGMtMjAuMiAyMC4yLTE5LjkgNTMuMi42IDczLjdzNTMuNSAyMC44IDczLjcuNmwxOTAtMTkweiIvPjwvc3ZnPg==);
	}

	@keyframes bounceAlpha {
		0% {
			opacity: 1;
			transform: translateX(0px) scale(1);
		}
		25% {
			opacity: 0;
			transform: translateX(10px) scale(0.9);
		}
		26% {
			opacity: 0;
			transform: translateX(-10px) scale(0.9);
		}
		55% {
			opacity: 1;
			transform: translateX(0px) scale(1);
		}
	}

	.bounceAlpha {
		animation-name: bounceAlpha;
		animation-duration: 1.4s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}

	.round .arrow.animate {
		animation-name: bounceAlpha;
		animation-duration: 1.4s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}
	.round .arrow.primera.animate {
		animation-name: bounceAlpha;
		animation-duration: 1.4s;
		animation-delay: 0.2s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}

	@media screen and (max-width: 820px) {
		.rotate {
			transform: rotate(90deg);
		}
	}
</style>
