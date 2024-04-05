<template>
	<layout-kiosk :class="['kiosk-grouped', { 'is-expanded': activeCategory }]">
		<img
			src="@/assets/icons/main-menu-button.svg"
			class="menu-button kiosk3-home-menu-button"
			@click="resetLayout"
		/>

		<p class="kiosk-grouped__intro kiosk3-home-title">
			{{ $t('titles.trials.intro') }}
		</p>

		<div
			class="kiosk-grouped__categories"
			v-for="(category, index) in kioskCategoriesData.categories"
			:key="index"
		>
			<!-- Header -->
			<div
				:class="['kiosk-grouped__header', { 'is-active': category.id === activeCategory }]"
				@click="toggleActiveCategory(category.id)"
			>
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
import {
	slideIn,
	slideOut,
	kiosk3HomeAnimations,
	kiosk3HomeAnimationsReverse,
} from '@/utils/animations';

const store = useAppStore();

const activeCategory = ref('');

const kioskCategoriesData = computed<ICategoriesKiosk>(() => getKioskHomeCategories()!);
const overlayTrial = computed<any>(() => store.get_overlayTrial);

function toggleActiveCategory(categoryId: string) {
	if (activeCategory.value === categoryId) {
		slideOut('.kiosk-grouped__content', 0.75, () => {
			activeCategory.value = '';
			kiosk3HomeAnimationsReverse();
		});

		return;
	}

	activeCategory.value = categoryId;
	const duration = activeCategory.value === 'solid-tumors' ? 2 : 4.5;
	setTimeout(() => {
		slideIn('.kiosk-grouped__content', duration);
		kiosk3HomeAnimations();
	}, 0);
}

function resetLayout() {
	slideOut('.kiosk-grouped__content', 0.75, () => {
		activeCategory.value = '';
		kiosk3HomeAnimationsReverse();
	});
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
		padding: 1em 1em;
		border-radius: 20px 20px 20px 0;
		background: rgba($white, 0.05);
		border: 1px solid rgba($white, 0.2);
		backdrop-filter: blur(10px);
		margin-bottom: 20px;
		transition: all 0.5s ease;
	}

	&__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.5em;
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

		&-title {
			transition: all 0.3s ease;
		}

		&-expand {
			display: flex;
			align-items: center;
			justify-content: center;
			width: $unit * 4;
			aspect-ratio: 1;
			background: url(@/assets/icons/expand-more.svg);
			@include bg-contain();

			&.is-active {
				transform: rotate(-180deg);
			}
		}
	}

	&__content {
		margin-top: $unit * 3;
		padding: 1em;
		max-height: 0px;
		overflow: hidden;
	}

	// Expanded State
	&.is-expanded {
		.kiosk-grouped {
			&__categories {
				padding: 1em 1em;
			}

			&__header {
				&-title {
					font-size: 1.5em;
					transition: all 0.5s ease;
				}

				&.is-active {
					.kiosk-grouped__header-title {
						font-size: 2em;
					}
				}
			}
		}
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
			margin: $unit * 5 $unit;
			padding: 0 1em;
		}
	}
}

.menu-button {
	width: 12em;
	position: fixed;
	left: 0;
	top: $unit * 8;
	z-index: 3;
	opacity: 0;
	transform: translateX(-500px);
}

.longfade-enter-active,
.longfade-leave-active {
	transition: all 0.4s ease;
}
.longfade-enter-from,
.longfade-leave-to {
	opacity: 0;
}

.longfade-enter-to {
	opacity: 1;
}
</style>
