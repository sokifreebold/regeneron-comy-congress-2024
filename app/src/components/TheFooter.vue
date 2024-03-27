<template>
	<footer
		:class="[
			'footer is-animating',
			{ 'is-home': route.name === 'home' },
			`footer--${props.modifier}`,
		]"
		ref="footer"
	>
		<div class="container">
			<div class="footer__copy">
				<p
					v-if="$te(`footer.${trialId}.copy`) && route.name === 'trials'"
					v-html="$t(`footer.${trialId}.copy`)"
				/>
				<p v-else v-html="$t('footer.shared.copy')" />
			</div>

			<div class="footer__copy footer__copy--logo">
				<img
					v-if="route.name === 'home'"
					class="ui-logo-regeneron"
					src="../assets/images/regeneron-logo-dark.svg"
					alt="Regeneron"
				/>
				<img
					v-else
					class="ui-logo-regeneron"
					src="../assets/images/regeneron-logo-white.svg"
					alt="Regeneron"
				/>
				<p v-html="$t('footer.shared.copyright')" />
				<p v-html="$t('footer.shared.jobCode')" />
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
	modifier: { type: String, default: 'default' },
});

const route = useRoute();

const trialId = computed<string>(() => route.params.trialId as string);
</script>

<style lang="scss" scoped>
.footer {
	color: $white;

	&--trials {
		.container {
			max-width: 1086px;
		}
	}

	&__copy {
		margin-top: $unit * 4;
		max-width: 1024px;

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
