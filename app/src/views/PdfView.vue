<template>
	<utils-molecule class="trials__molecule" />
	<main>
		<div class="container">
			<!-- Back Icon -->
			<div class="trials__back">
				<div class="trials__back-button" @click="navigateBack">
					{{ $t('misc.backToTrials') }}
				</div>
			</div>

			<div v-if="pdfLink" class="trials__pdf">
				<iframe
					:src="`./pdfs/${pdfLink}.pdf#toolbar=0`"
					width="100%"
					height="100%"
					frameborder="0"
				/>
			</div>
			<div v-else class="trials__no-pdf">
				{{ $t('misc.noPdf') }}
			</div>
		</div>
	</main>

	<!-- Home Footer -->
	<footer-home />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import pdfData from '@/content/pdfs';

import UtilsMolecule from '@/components/UtilsMolecule.vue';
import FooterHome from '@/components/FooterHome.vue';

const route = useRoute();
const router = useRouter();

const trialId = computed(() => route.params.trialId);
const id = computed(() => route.params.id);

const pdfLink = computed(() => (pdfData as any)[id.value as string] || pdfData.default);

function navigateBack() {
	router.push(`/trials/${trialId.value}`);
}
</script>

<style lang="scss" scoped>
.trials {
	&__molecule {
		right: -50px;
		top: -5%;
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

	&__pdf {
		min-height: 100vh;
		display: flex;

		iframe {
			min-height: 100vh;
		}
	}

	&__no-pdf {
		background: rgba($black, 0.5);
		border-radius: $radius;
		padding: $unit * 4;
		min-height: 60vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
</style>
