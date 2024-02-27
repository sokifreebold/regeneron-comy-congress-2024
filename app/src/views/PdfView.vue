<template>
	<layout-trials>
		<!-- Back Button -->
		<template v-slot:back>
			<the-button @click="navigateBackToTrials" :hasLeft="true" modifier="back">
				{{ $t('misc.backToTrials') }}

				<template v-slot:leftIcon>
					<img src="@/assets/icons/back-arrow.svg" />
				</template>
			</the-button>
		</template>

		<div class="trials-pdf">
			<div v-if="datum && datum.trialCardPdf" class="trials-pdf__pdf">
				<!-- Loading PDF from pdf.js viewer -->
				<iframe
					title="PDF"
					width="100%"
					height="100%"
					:src="`./pdfjs-4.0.269-dist-custom/web/viewer.html?file=../../pdfs/${datum.trialCardPdf}.pdf`"
				></iframe>
			</div>
			<utils-no-record v-else class="trials-pdf__no-data">
				{{ $t('misc.noPdf') }}
			</utils-no-record>
		</div>
	</layout-trials>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import type { ITrials } from '@/@types/data';
import { getTrialDatum } from '@/utils/data';

const router = useRouter();
const route = useRoute();

const trialId = computed<string>(() => route.params.trialId as string);
const nctId = computed<string>(() => route.params.nct as string);
const datum = computed<ITrials | null>(() => getTrialDatum(trialId.value, nctId.value));

onMounted(() => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
});

function navigateBackToTrials() {
	router.push(`/trials/${trialId.value}`);
}
</script>

<style lang="scss" scoped>
.trials-pdf {
	&__no-data {
		min-height: 400px;
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
	}
}
</style>
