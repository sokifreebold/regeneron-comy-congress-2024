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

			<!-- Trial Icon -->
			<div :class="['trials__icon', `ui-icon-${trialId}-white`]" />

			<!-- Page Title -->
			<h1 class="type-heading-h1 trials__title" v-html="$t(`titles.trials.${trialId}`)" />

			<!-- Overlay -->
			<div v-if="['lymphoma', 'myeloma'].includes(trialId)" class="trials__overlay">
				<button class="btn-overlay" @click="openTrialOverlay">
					{{ $t(`trials.overlay.${trialId}`) }}
				</button>
			</div>
			<div class="trials__developer-note">Dev Note: Desktop view build in progress</div>

			<!-- Content -->
			<trial-cards />
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
			bottom: 0;
			width: 600px;
			display: none;
		}

		&--tertiary {
			right: auto;
			left: 5%;
			top: 40%;
			width: 250px;
			filter: blur(3px);
		}

		@include desktop {
			right: 0;

			&--secondary {
				display: flex;
			}
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
	}

	&__back {
		display: flex;
		align-items: center;
		margin-bottom: $unit * 6;
		color: $white;
		font-family: 'RobotoCondensed-Regular';
		cursor: pointer;

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
}
</style>
