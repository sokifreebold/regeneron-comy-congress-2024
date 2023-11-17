<template>
	<div class="trial-cards">
		<div
			v-for="(section, sectionIndex) in datum"
			:key="sectionIndex"
			class="trial-cards__section"
		>
			<div
				v-if="section.id"
				class="trial-cards__section-title"
				v-html="$t(`titles.cardsSection.${section.id}`)"
			/>
			<div
				v-for="(item, index) in section.trials"
				:key="index"
				:class="['trial-cards__trial', { 'is-non-interventional': item.nonInterventional }]"
			>
				<div>
					<div v-if="'phase' in item" class="trial-cards__trial-phase">
						{{ $t('misc.phase') }} {{ item.phase }}
					</div>
					<div v-else-if="item.nonInterventional" class="trial-cards__trial-phase">
						{{ $t('misc.nonInterventional') }}
					</div>

					<div class="trial-cards__trial-title" v-html="$t(`titles.cards.${item.id}`)" />

					<div v-if="item.type" class="trial-cards__trial-control">
						<button
							v-if="item.type === 'card'"
							class="simple-white"
							@click="navigateToTrialCard(item)"
						>
							{{ $t('misc.seeTrialInfo') }}
						</button>
						<button
							v-if="item.type === 'external'"
							class="simple-white"
							@click="navigateToExternalLink(item)"
						>
							{{ $t('misc.seeClincialGov') }}
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';
import { trialsData } from '@/content/data';

import type { ITrialsRecords, ITrials } from '@/@types/data';

const route = useRoute();
const router = useRouter();

import { useAppStore } from '@/stores/app';
const store = useAppStore();

const datum = computed<ITrialsRecords[]>(() => (trialsData as any)[route.params.trialId as string]);

function navigateToTrialCard(item: ITrials) {
	router.push(`/trials/${item.categoryId}/${item.id}`);
}

function navigateToExternalLink(item: ITrials) {
	if (item.externalLink) {
		store.axn_updateExternalLink(item.externalLink);
	}
}
</script>

<style lang="scss" scoped>
.trial-cards {
	margin: $unit * 3 0;

	&__trial {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		text-align: right;

		background: $linear-gradient-02;
		margin-bottom: $unit;
		padding: $unit * 4;
		border-radius: $radius * 0.5;

		&.is-non-interventional {
			background: rgba(6, 91, 170, 0.7);
			background-blend-mode: multiply;
			backdrop-filter: blur(7px);
		}

		&-phase {
			opacity: 0.6;
			font-size: 1.3em;
			font-weight: 800;
			text-transform: uppercase;
			margin-bottom: $unit;
		}

		&-title {
			max-width: 250px;
			font-size: 1.3em;
			font-family: 'RobotoCondensed-Bold';

			:deep() strong {
				color: $accent;
			}

			@include tablet {
				max-width: 350px;
			}
		}

		&-control {
			margin-top: $unit * 2;
			display: flex;
			align-items: center;
			justify-content: flex-end;
		}
	}

	&__section {
		margin-bottom: $unit * 3;
		&-title {
			font-size: 1.5em;
			font-family: 'RobotoCondensed-Bold';
			text-transform: uppercase;
			margin-bottom: $unit;
			margin-top: $unit * 4;
		}
	}
}
</style>
