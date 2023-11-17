<template>
	<footer class="footer">
		<div class="container">
			<img
				class="ui-logo-regeneron"
				src="@/assets/images/regeneron-logo.svg"
				alt="Regeneron"
			/>

			<div class="footer__copy">
				<p v-html="$t('home.footer.jobCode')" />
				<p v-html="$t('home.footer.copyright')" />
			</div>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
.footer {
	color: $primary;

	&__copy {
		margin-top: $unit * 4;

		p {
			font-size: 0.75em;
			margin: $unit * 2 0;
		}
	}
}
</style>
