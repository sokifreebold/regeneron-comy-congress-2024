<template>
	<!-- Floating Molecules -->
	<!-- TODO: Create a common component -->
	<utils-molecule class="trials__molecule" />
	<utils-molecule class="trials__molecule trials__molecule--secondary" />
	<utils-molecule class="trials__molecule trials__molecule--tertiary" />

	<!-- Main PDF View -->
	<main>
		<div class="container">
			<!-- Back Icon -->
			<div class="trials__back">
				<div class="trials__back-button" @click="navigateBack">
					{{ $t('misc.backToTrials') }}
				</div>
			</div>

			<div v-if="pdfData && pdfData.trialCardPdf" class="trials__pdf">
				<!-- Loading PDF from pdf.js viewer -->
				<iframe
					title="PDF"
					width="100%"
					height="100%"
					:src="`./pdfjs-4.0.269-dist/web/viewer.html?file=../../pdfs/${pdfData.trialCardPdf}.pdf`"
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

// Trial data to load PDF
import { trialsData } from '@/content/data';
import type { ITrialsRecords, ITrials } from '@/@types/data';

import UtilsMolecule from '@/components/UtilsMolecule.vue';
import FooterHome from '@/components/FooterHome.vue';

const route = useRoute();
const router = useRouter();

// Values from router
const trialId = computed(() => route.params.trialId);
const id = computed(() => route.params.id);

// Finding the data to load pdf based on nct from URL
const datum = computed<ITrialsRecords[]>(() => (trialsData as any)[route.params.trialId as string]);
const pdfData = computed<ITrials>(() => {
	let obj: any = {};

	datum.value.forEach((record: ITrialsRecords) => {
		const existingRecord = record.trials.find((_: ITrials) => _.nct === id.value);
		if (existingRecord) {
			obj = existingRecord;
		}
	});

	return obj;
});

// Function to navigate back to trial
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
				width: $unit * 3;
				aspect-ratio: 1;
				background: url('@/assets/icons/back-arrow.svg');
				@include bg-contain();
				margin-right: $unit * 1.5;
			}
		}
	}

	&__pdf {
		display: flex;
		align-items: flex-end;
		flex-direction: column;

		embed,
		object {
			width: 100%;
			min-height: 100vh;
		}

		iframe {
			min-height: 70vh;
			border: none;

			@include large-desktop {
				min-height: 100vh;
			}
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
