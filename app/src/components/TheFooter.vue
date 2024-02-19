<template>
	<footer :class="['footer', { 'is-home': route.name === 'home' }]">
		<div class="container">
			<div class="footer__copy">
				<p v-html="$t('footer.shared.copy')" />
				<p v-html="$t('footer.shared.jobCode')" />
			</div>

			<div class="footer__copy footer__copy--logo">
				<img
					class="ui-logo-regeneron"
					src="../assets/images/regeneron-logo-dark.svg"
					alt="Regeneron"
				/>
				<p v-html="$t('footer.shared.copyright')" />
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<style lang="scss" scoped>
.footer {
	color: $white;

	&__copy {
		margin-top: $unit * 4;
		max-width: 768px;

		p {
			@include px-to-em(12px);
			line-height: 18px;
			margin: $unit 0;
		}

		&--logo {
			img {
				margin-bottom: $unit * 0.25;
			}
		}
	}

	&.is-home {
		color: $primary;
	}
}
</style>
