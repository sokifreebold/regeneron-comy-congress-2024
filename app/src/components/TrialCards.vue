<template>
	<utils-no-record v-if="!(trialData && trialData.length > 0)">
		{{ $t('misc.noData') }}
	</utils-no-record>
	<div v-else>
		<div v-for="(section, index) in trialData" :key="index" class="trial-cards">
			<h2
				v-if="section.title"
				class="type-heading-h2 type-font-condensed trial-cards__title"
				v-html="section.title"
			/>

			<utils-no-record v-if="!(section.trials && section.trials.length > 0)">
				{{ $t('misc.noData') }}
			</utils-no-record>
			<utils-no-record v-else>
				{{ $t('misc.noData') }}
			</utils-no-record>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import { getTrialData } from '@/utils/data';
import type { ITrialsRecords } from '@/@types/data';

const route = useRoute();

const trialId = computed<string>(() => route.params.trialId as string);
const trialData = computed<ITrialsRecords[]>(() => getTrialData(trialId.value));
</script>

<style lang="scss" scoped>
.trial-cards {
	margin-bottom: $unit * 10;

	&__title {
		margin-bottom: $unit * 2;
	}
}
</style>
