<template>
	<footer :class="['footer', route.name]">
		<div v-if="route.name === 'home'" class="container">
			<div class="footer__copy">
				<p v-html="$t('home.footer.copy')" />
				<p v-html="$t('home.footer.jobCode')" />
			</div>

			<div class="footer__copy footer__copy--logo">
				<img
					class="ui-logo-regeneron"
					src="../assets/images/regeneron-logo-dark.svg"
					alt="Regeneron"
				/>
				<p v-html="$t('home.footer.copyright')" />
			</div>
		</div>
		<div v-else class="container">
			<div
				v-if="$te(`trials.footer.${trialId}`) && route.name === 'trials'"
				class="footer__copy"
			>
				<p v-html="$t(`trials.footer.${trialId}`)" />
			</div>

			<div class="footer__copy">
				<p v-html="$t('trials.footer.copy')" />
				<p v-html="$t('trials.footer.jobCode')" />
			</div>

			<div class="footer__copy footer__copy--logo">
				<img
					class="ui-logo-regeneron"
					src="../assets/images/regeneron-logo-white.svg"
					alt="Regeneron"
				/>
				<p v-html="$t('home.footer.copyright')" />
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const trialId = computed(() => route.params.trialId as string);
</script>

<style lang="scss" scoped>
.footer {
	color: $primary;

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

	&.trials,
	&.pdf,
	&.trial-card {
		color: $white;
	}
}
</style>
