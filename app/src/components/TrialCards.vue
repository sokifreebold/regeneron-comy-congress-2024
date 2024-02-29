<template>
	<utils-no-record v-if="!(trialData && trialData.length > 0)">
		{{ $t('misc.noData') }}
	</utils-no-record>
	<div v-else>
		<div
			v-for="(section, index) in trialData"
			:key="index"
			:class="['trial-cards', { kiosk: version === 'kiosk' }]"
		>
			<h2
				v-if="section.title"
				class="type-heading-h2 type-font-condensed trial-cards__title js-trial-section-title js-animation-slideIn"
				v-html="section.title"
			/>

			<utils-no-record v-if="!(section.trials && section.trials.length > 0)">
				{{ $t('misc.noData') }}
			</utils-no-record>
			<div v-else>
				<trial-cards-phases
					class="display-large-desktop-only js-phases js-animation-slideIn"
				/>
				<div :ref="setRef">
					<trial-cards-datum
						v-for="(datum, index) in section.trials"
						:key="index"
						:datum="datum"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

import { getTrialData } from '@/utils/data';
import type { ITrialsRecords } from '@/@types/data';
import { useAppStore } from '@/stores/app';

const route = useRoute();
const itemRefs = ref<HTMLElement[]>([]);

const store = useAppStore();
const version = computed(() => store.get_version);

const setRef = (el: any) => {
	if (el) {
		itemRefs.value.push(el);
	}
};

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
