<template>
	<div class="layout-kiosk-overlay">
		<div class="layout-kiosk-overlay__content">
			<slot />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.layout-kiosk-overlay {
	background: $black;
	color: $white;
	height: 100vh;

	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
