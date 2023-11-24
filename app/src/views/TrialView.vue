<template>
	<utils-molecule class="trials__molecule" />
	<utils-molecule class="trials__molecule trials__molecule--secondary" />
	<utils-molecule class="trials__molecule trials__molecule--tertiary" />
	<main>
		<div class="container">
			<!-- Back Icon -->
			<div class="trials__back">
				<div class="trials__back-button" @click="navigateHome">
					{{ $t('misc.back') }}
				</div>
			</div>

			<div class="trials__header">
				<!-- Trial Icon -->
				<div :class="['trials__icon', `ui-icon-${trialId}-white`]" />

				<!-- Page Title -->
				<h1 class="type-heading-h1 trials__title" v-html="$t(`titles.trials.${trialId}`)" />
			</div>

			<!-- Overlay -->
			<div v-if="['lymphoma', 'myeloma'].includes(trialId)" class="trials__overlay">
				<button class="btn-overlay" @click="openTrialOverlay">
					{{ $t(`trials.overlay.${trialId}`) }}
				</button>
			</div>

			<!-- Content -->
			<trial-cards class="trials__view--mobile" />
			<trial-cards-desktop class="trials__view--desktop" />
		</div>
	</main>

	<!-- Home Footer -->
	<footer-home />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAppStore } from '@/stores/app';

import UtilsMolecule from '@/components/UtilsMolecule.vue';
import FooterHome from '@/components/FooterHome.vue';
import TrialCards from '@/components/TrialCards.vue';
import TrialCardsDesktop from '@/components/TrialCardsDesktop.vue';

const route = useRoute();
const router = useRouter();
const store = useAppStore();

const trialId = computed(() => route.params.trialId as string);

function navigateHome() {
	router.push('/');
}

function openTrialOverlay() {
	store.axn_updatePopup(trialId.value as string);
}
</script>

<style lang="scss" scoped>
.trials {
	&__molecule {
		right: -50px;
		top: -5%;

		&--secondary {
			right: 0px;
			top: auto;
			bottom: -20%;
			width: 600px;
			display: none;
		}

		&--tertiary {
			right: auto;
			left: -40px;
			top: 40%;
			width: 250px;
			filter: blur(6px);
			opacity: 0.5;
		}

		@include desktop {
			right: 0;

			&--secondary {
				display: flex;
			}
		}
	}

	&__header {
		@include desktop {
			display: flex;
			align-items: center;
		}
	}

	&__title {
		margin-top: $unit * 3;
		color: $white;
	}

	&__icon {
		display: flex;
		width: $unit * 10;
		aspect-ratio: 1;

		@include desktop {
			width: $unit * 8;
			margin-right: $unit * 2;
		}
	}

	&__back {
		display: flex;
		align-items: center;
		margin-bottom: $unit * 6;
		color: $white;
		font-family: 'RobotoCondensed-Bold';
		font-size: 16px;

		@include desktop {
			margin-bottom: $unit * 4;
		}

		&-button {
			cursor: pointer;
			display: flex;
			align-items: center;
			padding: $unit $unit $unit 0;
			background: transparent;

			&:before {
				content: '';
				display: flex;
				width: $unit * 2.5;
				aspect-ratio: 1;
				background: url('@/assets/icons/back-arrow.svg');
				@include bg-contain();
				margin-right: $unit * 1.5;
			}
		}
	}

	&__overlay {
		margin-bottom: $unit * 5;
	}

	&__developer-note {
		color: $accent;
		font-family: 'RobotoCondensed-Bold';
		text-align: right;
		opacity: 0.5;
		display: none;

		@include large-desktop {
			display: flex;
			justify-content: flex-end;
		}
	}

	&__view {
		&--desktop {
			display: none;
		}

		@include large-desktop {
			&--mobile {
				display: none;
			}
			&--desktop {
				display: flex;
			}
		}
	}
}
</style>
