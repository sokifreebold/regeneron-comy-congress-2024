<template>
	<utils-molecule class="trials__molecule" />
	<utils-molecule class="trials__molecule trials__molecule--secondary" />
	<utils-molecule class="trials__molecule trials__molecule--tertiary" />
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
					title="PDF"
					width="100%"
					height="1000px"
					:src="`./pdfjs-4.0.269-dist/web/viewer.html?file=../../pdfs/${pdfLink}.pdf`"
				></iframe>
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

		&--secondary {
			right: 0px;
			top: auto;
			bottom: 0;
			width: 600px;
			display: none;
		}

		&--tertiary {
			right: auto;
			left: 10%;
			top: 30%;
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

	&__pdf {
		min-height: 100vh;
		display: flex;
		align-items: flex-end;
		flex-direction: column;

		embed,
		object,
		iframe {
			width: 100%;
			min-height: 100vh;
			border: none;
		}

		a {
			position: absolute;
			display: flex;
			font-size: 14px;
			margin-top: -$unit * 5;
			margin-bottom: $unit;
			padding: $unit;
			border-radius: $radius * 0.5;
			background: rgba($primary, 0.1);
			backdrop-filter: blur(7px);
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
