<template>
	<layout-trials>
		<!-- Back Button -->
		<template v-slot:back>
			<the-button @click="navigateHome" :hasLeft="true" modifier="back">
				{{ $t('misc.back') }}

				<template v-slot:leftIcon>
					<img src="@/assets/icons/back-arrow.svg" />
				</template>
			</the-button>
		</template>

		<div class="trials">
			<!-- Title -->
			<div class="trials__header">
				<div :class="['trials__header-icon', `ui-icon-${trialId}-white`]" />
				<h1 class="type-heading-h1 trials__title" v-html="$t(`titles.trials.${trialId}`)" />
			</div>

			<!-- Trial Cards -->
			<trial-cards />
		</div>
	</layout-trials>
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getTrialDatum } from '@/utils/data';
import { useAppStore } from '@/stores/app';

const router = useRouter();
const route = useRoute();
const store = useAppStore();

const trialId = computed<string>(() => route.params.trialId as string);
const nctId = computed<string>(() => route.params.nct as string);
const viewId = computed(() => route.params.viewId);

watch(route, checkIfExternalOverlay);
onMounted(checkIfExternalOverlay);

function navigateHome() {
	router.push('/');
}

function checkIfExternalOverlay() {
	if (!(nctId.value && viewId.value)) {
		return;
	}
	if (viewId.value !== 'external') {
		return;
	}
	const datum = getTrialDatum(trialId.value, nctId.value);
	if (datum && datum.externalLink) {
		store.axn_updateExternalLink(datum.externalLink!);
		store.axn_updateExternalLinkId(datum.nct || datum.id);
	}
}
</script>

<style lang="scss" scoped>
.trials {
	position: relative;
	z-index: 2;
}
.trials__header {
	display: flex;
	align-items: center;
	margin-bottom: $unit * 4;

	&-icon {
		display: flex;
		width: $unit * 6;
		min-width: $unit * 6;
		aspect-ratio: 1;
		margin-right: $unit * 2;

		@include tablet {
			width: $unit * 8;
			min-width: $unit * 8;
			margin-right: $unit * 6;
		}
	}
}
.trials__title {
	color: $white;
}
</style>
