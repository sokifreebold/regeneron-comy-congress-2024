<template>
	<layout-kiosk>
		<div
			class="category-container"
			v-for="(grouping, index) in kioskCategoriesData.categories"
			:key="index"
		>
			<div class="category-header">
				<div
					:class="[
						'kiosk-home-links__item-icon category-icon',
						`ui-icon-${grouping.icon}`,
					]"
				/>
				<h1
					class="type-heading-h1 type-color-white kiosk-home__title js-animation-slideIn"
					v-html="grouping.title"
				/>
			</div>

			<!-- Panel -->
			<div class="kiosk-home-links">
				<div
					v-for="(item, index) in grouping.categories"
					:key="index"
					class="kiosk-home-links__item js-animation-slideIn"
				>
					<div class="kiosk-home-links__item-copy">
						<div
							class="kiosk-home-links__item-title type-heading-h2 type-font-condensed"
							v-html="$t(`titles.categories.${item.id}.home-title`)"
						/>

						<div class="kiosk-home-links__item-navigate">
							<div class="button-wrapper">
								<the-button
									@click="navigateToTrial(grouping.id, item)"
									modifier="simple-white-gradient-bg"
								>
									{{
										item.learnMore
											? $t('misc.seePipelineDetails')
											: $t('misc.learnMore')
									}}
									<template v-slot:rightIcon>
										<img src="@/assets/icons/chevron-right-white.svg" />
									</template>
								</the-button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</layout-kiosk>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';

import { getKioskHomeCategories } from '@/utils/data';
import type { ICategories, ICategoriesKiosk } from '@/@types/data';

const router = useRouter();

const kioskCategoriesData = computed<ICategoriesKiosk>(() => getKioskHomeCategories()!);

function navigateToTrial(parentCategory: string, item: ICategories) {
	router.push(`/panels/trials/${parentCategory}/${item.id}`);
}
</script>

<style lang="scss" scoped>
.kiosk-home {
	&__title {
		font-size: 5em;
		line-height: 1;
		display: inline;
	}
	&-links {
		margin-top: $unit * 5;

		&__item {
			display: flex;
			padding: 60px 40px;
			border-radius: 20px 20px 20px 0;
			background: rgba($white, 0.1);
			backdrop-filter: blur(3px);
			margin-bottom: 20px;

			&-title {
				@include px-to-em(30px);
				line-height: 35px;
				margin-bottom: $unit * 4;
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
		}
	}

	@include k-desktop {
		&-links {
			margin-top: $unit * 10;

			&__item {
				margin-bottom: 40px;

				&-title {
					line-height: 1.2;
				}

				&-icon {
					width: $unit * 20;
					min-width: $unit * 20;
					margin-left: $unit * 5;
					margin-right: $unit * 10;
					margin-top: $unit * 5;
					aspect-ratio: 1;
				}
			}
		}
	}
}

.category-container {
	margin-top: 3em;
}
.category-icon {
	width: 5em;
	margin-left: -2em;
	margin-right: 1em;
	flex-shrink: 0;
}

.category-header {
	display: flex;
	align-items: center;
}
</style>
