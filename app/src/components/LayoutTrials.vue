<template>
	<div class="layout-trials">
		<the-header />

		<div class="container layout-trials__back">
			<slot name="back" />
		</div>

		<main>
			<div class="container container--trials">
				<slot />
			</div>
		</main>

		<the-footer modifier="trials" />
	</div>
</template>

<style lang="scss" scoped>
.layout-trials {
	color: $white;
	background: url('@/assets/backgrounds/trials.png');
	@include bg-cover();
	min-height: 100vh;

	&__back {
		margin-top: $unit * 2;
	}
}
</style>
