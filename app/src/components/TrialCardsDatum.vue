<template>
	<div class="trial-card">
		<div class="trial-card__aside display-large-desktop-only">
			<div class="trial-card__aside-card">
				<div
					:class="['trial-card__aside-card-icon', `trial-aside-icon--${props.datum.id}`]"
				/>
				<p v-if="props.datum.labels?.aside" v-html="props.datum.labels?.aside" />
			</div>
		</div>
		<div
			:class="[
				'trial-card__datum trial-card__row',
				{ 'is-non-interventional': props.datum.nonInterventional },
			]"
		>
			<div :class="['trial-card__row-record', `phase-${props.datum.phase}`]">
				<div v-if="props.datum.recruiting" class="trial-card__badge">
					{{ $t('misc.recruiting') }}
				</div>
				<h3 class="trial-card__row-title" v-html="props.datum.labels?.title" />
				<the-button
					class="trial-card__row-control"
					@click="() => {}"
					modifier="simple-white"
					:disabled="true"
				>
					{{ $t('misc.seeTrialInfo') }}

					<template v-slot:rightIcon>
						<img
							v-if="props.datum.type === 'external'"
							src="@/assets/icons/external-link.svg"
						/>
						<img v-else src="@/assets/icons/chevron-right-white.svg" />
					</template>
				</the-button>
			</div>
			<div
				v-if="!props.datum.nonInterventional"
				class="trial-card__row-record trial-card__row-record--blank display-large-desktop-only"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { ITrials } from '@/@types/data';

const props = defineProps({
	datum: { type: Object as PropType<ITrials>, required: true },
});
</script>
