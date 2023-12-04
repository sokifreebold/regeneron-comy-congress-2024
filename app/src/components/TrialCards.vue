<template>
	<div class="trial-cards">
		<!-- base -->
		<div class="trial-cards__base trial-cards__base--header trial-cols">
			<div class="trial-cards__base-col-1 trial-col trial-col--base"></div>
			<div class="trial-cards__base-col-2 trial-col trial-col--mute">
				<label>Phase</label><strong>1</strong>
			</div>
			<div class="trial-cards__base-col-3 trial-col trial-col--mute">
				<label>Phase</label><strong>2</strong>
			</div>
			<div class="trial-cards__base-col-4 trial-col trial-col--mute">
				<label>Phase</label><strong>3</strong>
			</div>
			<div class="trial-cards__base-col-5 trial-col trial-col--mute">NON-INTERVENTIONAL</div>
		</div>

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
				<div class="trial-cards__base trial-cols">
					<div class="trial-col trial-col--category">
						<div :class="['trial-col--category-icon ui-trial-icon', item.id]" />
						<div
							class="trial-col--category-title"
							v-html="$t(`titles.tags.${item.id}`)"
						/>
					</div>
					<div
						v-if="item.phase"
						:class="['trial-col trial-col--data', `phase-${item.phase}`]"
					>
						<div
							class="trial-cards__trial-title"
							v-html="$t(`titles.cards.${item.id}`)"
						/>

						<div v-if="item.type" class="trial-cards__trial-control">
							<button
								v-if="item.type === 'card'"
								class="btn simple-white mobile-only"
								@click="navigateToTrialCard(item)"
							>
								{{ $t('misc.seeTrialInfo') }}
							</button>
							<button
								v-if="item.type === 'external'"
								:class="['simple-white', item.type]"
								@click="navigateToExternalLink(item)"
							>
								{{ $t('misc.seeTrialInfo') }}
							</button>
						</div>
					</div>
					<div class="trial-col trial-col--blank">
						<div
							v-if="item.nonInterventional || item.phase === 0"
							class="trial-cards__trial-title"
							v-html="$t(`titles.cards.${item.id}`)"
						/>

						<div
							v-if="item.type && (item.nonInterventional || item.phase === 0)"
							class="trial-cards__trial-control"
						>
							<button
								v-if="item.type === 'card'"
								class="btn simple-white mobile-only"
								@click="navigateToTrialCard(item)"
							>
								{{ $t('misc.seeTrialInfo') }}
							</button>
							<button
								v-if="item.type === 'external'"
								:class="['simple-white', item.type]"
								@click="navigateToExternalLink(item)"
							>
								{{ $t('misc.seeTrialInfo') }}
							</button>
						</div>
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
import { event } from 'vue-gtag';
import { useAppStore } from '@/stores/app';

import type { ITrialsRecords, ITrials } from '@/@types/data';

const route = useRoute();
const router = useRouter();
const store = useAppStore();

const datum = computed<ITrialsRecords[]>(() => (trialsData as any)[route.params.trialId as string]);

function navigateToTrialCard(item: ITrials) {
	if (item.trialCardPdf) {
		event('link', {
			event_category: 'trial-pdf',
			event_label: item.categoryId,
			value: item.trialCardPdf,
		});

		router.push(`/trials/${item.categoryId}/${item.id}`);
	}
}

function navigateToExternalLink(item: ITrials) {
	if (item.externalLink) {
		event('trial_card_visited', {
			event_category: 'clinicaltrials.gov',
			event_label: item.categoryId,
			value: item.externalLink,
		});

		event('link', {
			event_category: 'clinicaltrials.gov',
			event_label: item.categoryId,
			value: item.externalLink,
		});

		store.axn_updateExternalLink(item.externalLink);
	}
}

function getPdfLink(item: ITrials) {
	const pdfLink = item.trialCardPdf;
	return `./pdfs/${pdfLink}.pdf`;
}
</script>

<style lang="scss" scoped>
.trial-cards {
	display: flex;
	flex-direction: column;
	margin: $unit * 3 0;

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

	&__base {
		display: flex;
		font-family: 'RobotoCondensed-Bold';
		border-radius: 0 $radius * 0.5;

		&--header {
			height: 100px;
			display: none;

			@include large-desktop {
				display: flex;
			}
		}

		& > div {
			flex: 1;
			margin: 0 $unit $unit 0;
			padding: $unit * 3 $unit;
			text-align: center;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		label {
			font-size: 1em;
			text-transform: uppercase;
		}

		strong {
			font-size: 3em;
		}
	}

	.trial-col {
		margin: 0 $unit $unit 0;
		border-radius: $radius * 0.5;
		min-height: 200px;

		&--base {
			width: 200px;
			max-width: 200px;
			background: none;
		}

		&--category {
			display: none;
			@include large-desktop {
				display: flex;
			}

			flex-shrink: 0;
			width: 200px;
			max-width: 200px;
			border-radius: 0 $radius * 0.5;
			background: $white;
			color: $black;

			flex-direction: column;
			justify-content: space-between;

			&-icon {
				width: 70%;
				aspect-ratio: 1;
				margin-bottom: $unit * 3;
			}
			&-title {
				text-transform: uppercase;
				text-align: center;
				padding: 0 $unit * 2;
				font-size: 14px;
				line-height: 16px;
				font-family: 'RobotoCondensed-Bold';
			}
		}

		&--data {
			flex: 0;
			background: $linear-gradient-02;
			display: flex;
			align-items: flex-end;
			justify-content: center;
			padding: $unit * 2;

			min-width: 100%;
			@include large-desktop {
				min-width: 62%;
				&.phase-1 {
					min-width: 20%;
				}

				&.phase-2 {
					min-width: 41%;
				}
			}
		}

		&--blank {
			background: rgba($dark-blue, 0.5);
			backdrop-filter: blur(7px);
			text-align: left;
			align-items: flex-start;
			padding-left: $unit * 3;

			display: none;
			@include large-desktop {
				display: flex;
			}

			.trial-cards__trial-title {
				text-align: left;
				max-width: 100%;
			}
		}
		&--mute {
			background: none;
			min-height: auto;
		}
	}

	&__trial {
		&-title {
			max-width: 250px;
			font-size: 1.3em;
			font-family: 'RobotoCondensed-Bold';
			text-align: right;

			:deep() strong {
				color: $accent;
			}

			@include large-desktop {
				max-width: 100%;
			}
		}

		&-control {
			margin-top: $unit * 2;
			display: flex;
			align-items: center;
			justify-content: flex-end;
		}

		&.is-non-interventional {
			.trial-col.trial-col--blank {
				margin-left: 0px;
				margin-right: 0px;
				padding-right: $unit * 3;
				display: flex;
				align-items: flex-end;
				justify-content: center;

				.trial-cards__trial-title {
					text-align: right;
				}

				@include large-desktop {
					align-items: flex-start;
					.trial-cards__trial-title {
						text-align: left;
					}
				}
			}
		}
	}
}
</style>
