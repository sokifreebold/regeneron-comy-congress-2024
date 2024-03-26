<template>
	<div class="kiosk-grouping-category">
		<div
			v-for="(category, index) in props.categories"
			:key="index"
			class="kiosk-grouping-category__wrapper"
		>
			<div class="kiosk-grouping-category__content">
				<div class="kiosk-grouping-category__header">
					<div
						:class="[
							'kiosk-grouping-category__header-icon',
							`ui-icon-${category.icon}`,
						]"
					/>
					<p
						class="kiosk-grouping-category__header-title type-font-condensed type-heading-h1"
					>
						{{ $t(`${category.title}.trial-title`) }}
					</p>
				</div>

				<div class="kiosk-grouping-category__controls">
					<the-button
						@click="navigateToTrial(category)"
						class="button-wrapper"
						modifier="simple-white-gradient-bg"
					>
						{{ $t('misc.seePipelineDetails') }}
						<template v-slot:rightIcon>
							<img src="@/assets/icons/chevron-right-white.svg" />
						</template>
					</the-button>

					<the-button
						v-if="category.dse"
						class="button-wrapper"
						modifier="simple-white-gradient-bg"
						@click="navigateToDse(category)"
					>
						{{ $t('misc.learnMore') }}
						<template v-slot:rightIcon>
							<img src="@/assets/icons/chevron-right-white.svg" />
						</template>
					</the-button>

					<the-button
						v-if="category.multipleDse && category.multipleDse.length > 0"
						class="button-wrapper"
						modifier="simple-white-gradient-bg"
						@click="navigateToMultipleDse(category)"
					>
						{{ $t('misc.learnMore') }}
						<template v-slot:rightIcon>
							<img src="@/assets/icons/chevron-right-white.svg" />
						</template>
					</the-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import type { PropType } from 'vue';
import type { ICategories } from '@/@types/data';
import { useAppStore } from '@/stores/app';
import { pageview } from 'vue-gtag';

const props = defineProps({
	categories: { type: Object as PropType<any>, required: true },
	parentId: { type: String, required: true },
});

const store = useAppStore();
const router = useRouter();

function navigateToDse(item: ICategories) {
	router.push(`/panels/dse/${props.parentId}/${item.id}/${item.dse}`);
}

function navigateToTrial(item: ICategories) {
	router.push(`/panels/trials/${props.parentId}/${item.id}`);
}

function navigateToMultipleDse(item: any) {
	pageview({
		page_path: `/?overlay=${item.id}`,
		page_title: 'panels-trials-overlay',
	});
	store.axn_updateOverlayTrial(item);
}
</script>

<style lang="scss" scoped>
.kiosk-grouping-category {
	display: flex;
	flex-flow: row wrap;
	align-items: stretch;
	gap: $unit * 5;

	&__wrapper {
		width: 47%;
	}

	&__content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		height: 100%;
		padding: 1.5em;
		border-radius: 0px 20px 0 20px;
		background: rgba($white, 0.9);
		margin-bottom: $unit * 4;
		backdrop-filter: blur(5px);
	}

	&__header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		width: 100%;

		&-icon {
			display: flex;
			width: $unit * 8;
			min-width: $unit * 4;
			aspect-ratio: 1;
			margin-right: $unit * 2;
		}
		&-title {
			font-size: 1.5em;
			line-height: 1.2em;
			margin: $unit * 2 0;
		}
	}

	&__controls {
		width: 100%;

		.button-wrapper {
			width: 100%;
			margin: $unit * 2 0;
		}
	}

	@include k-desktop {
		&__header {
			&-icon {
				width: $unit * 15;
			}
		}
		&__content {
			border-radius: 0px 40px 0 40px;
		}
	}
}
</style>
