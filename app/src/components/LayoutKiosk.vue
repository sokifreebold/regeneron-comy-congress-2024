<template>
	<div class="layout-kiosk kiosk-app">
		<div class="kiosk-container layout-kiosk__main">
			<slot />
		</div>

		<the-footer-kiosk />

		<molecules-kiosk />
	</div>
</template>

<style lang="scss" scoped>
.layout-kiosk {
	color: $white;
	background: url('@/assets/backgrounds/trials.png');
	@include bg-cover();
	height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: center;

	&__main {
		position: relative;
		display: flex;
		flex-direction: column;
		z-index: 1;
	}

	&__main {
		flex: 1;
		overflow-y: auto;
		@include scrollbar-light();
	}

	@include k-desktop {
		&__main {
			justify-content: center;
		}
	}
}
</style>
