<template>
	<footer :class="['footer', route.name]">
		<div v-if="route.name === 'home'" class="container">
			<img
				class="ui-logo-regeneron"
				src="../assets/images/regeneron-logo-dark.svg"
				alt="Regeneron"
			/>

			<div class="footer__copy">
				<p v-html="$t('home.footer.jobCode')" />
				<p v-html="$t('home.footer.copyright')" />
			</div>
		</div>
		<div v-else class="container">
			<img
				class="ui-logo-regeneron"
				src="../assets/images/regeneron-logo-white.svg"
				alt="Regeneron"
			/>

			<div class="footer__copy">
				<p v-html="$t('trials.footer.meta')" />
				<p v-html="$t('trials.footer.jobCode')" />
				<p v-html="$t('trials.footer.enclosed')" />
				<p v-html="$t('trials.footer.copyright')" />
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
	color: $primary;

	&__copy {
		margin-top: $unit * 4;

		p {
			font-size: 0.75em;
			margin: $unit * 2 0;
		}
	}

	&.trials,
	&.pdf {
		color: $white;
	}
}
</style>
