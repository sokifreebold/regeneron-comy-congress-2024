<template>
	<layout-kiosk class="kiosk-grouped">
		<p class="kiosk-grouped__intro">{{ $t('titles.trials.intro') }}</p>

		<div
			class="kiosk-grouped__categories"
			v-for="(category, index) in kioskCategoriesData.categories"
			:key="index"
		>
			<!-- Header -->
			<div class="kiosk-grouped__header" @click="toggleActiveCategory(category.id)">
				<div class="kiosk-grouped__header-copy">
					<div :class="['kiosk-grouped__header-icon', `ui-icon-${category.icon}`]" />
					<p
						class="kiosk-grouped__header-title type-heading-h2 type-font-condensed"
						v-html="$t(`titles.categories.${category.id}`)"
					/>
				</div>
				<div
					:class="[
						'kiosk-grouped__header-expand',
						{ 'is-active': category.id === activeCategory },
					]"
				/>
			</div>

			<!-- Categories -->
			<div v-if="category.id === activeCategory" class="kiosk-grouped__content">
				<landing-page-category-group
					:categories="category.categories"
					:parentId="activeCategory"
				/>
			</div>
		</div>

		<overlay-trial-link v-if="overlayTrial" />
	</layout-kiosk>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useAppStore } from '@/stores/app';

import { getKioskHomeCategories } from '@/utils/data';
import type { ICategoriesKiosk } from '@/@types/data';

const store = useAppStore();

const activeCategory = ref('');

const kioskCategoriesData = computed<ICategoriesKiosk>(() => getKioskHomeCategories()!);
const overlayTrial = computed<any>(() => store.get_overlayTrial);

function toggleActiveCategory(categoryId: string) {
	activeCategory.value = activeCategory.value !== categoryId ? categoryId : '';
}
</script>

<style lang="scss" scoped>
.kiosk-grouped {
	&__intro {
		margin-bottom: $unit * 5;
		font-family: 'RobotoCondensed-Bold';
		font-size: 2em;
	}

	&__categories {
		display: flex;
		flex-direction: column;
		padding: 3em 2em 3em 2em;
		border-radius: 20px 20px 20px 0;
		background: rgba($white, 0.1);
		backdrop-filter: blur(3px);
		margin-bottom: 20px;
	}

	&__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1em;
		width: 100%;
		font-size: 1.5em;
		cursor: pointer;

		&-copy {
			display: flex;
			align-items: center;
		}

		&-icon {
			display: flex;
			width: $unit * 8;
			min-width: $unit * 8;
			aspect-ratio: 1;
			margin-right: $unit * 2;

			@include tablet {
				width: $unit * 10;
				margin-right: $unit * 6;
			}
		}

		&-expand {
			display: flex;
			align-items: center;
			justify-content: center;
			width: $unit * 4;
			aspect-ratio: 1;
			background: url(@/assets/icons/expand-more.svg);
			@include bg-contain();
			transition: all 0.5s ease;

			&.is-active {
				transform: rotate(-180deg);
			}
		}
	}

	&__content {
		margin-top: $unit * 3;
		padding: 1em;
	}

	@include k-desktop {
		&__intro {
			margin-bottom: $unit * 10;
		}

		&__categories {
			border-radius: 40px 40px 40px 0;
			margin: $unit * 5 0;
		}

		&__header {
			&-icon {
				width: $unit * 20;
				min-width: $unit * 20;
				margin-right: $unit * 10;
			}
			&-expand {
				width: $unit * 10;
			}
		}

		&__content {
			margin-top: $unit * 10;
		}
	}
}
</style>
