<template>
	<layout-kiosk>
		<div
			v-for="(grouping, index) in getKioskHomeCategories()"
			:key="index">
			
			<div>
				<img :src="`src/assets/icons/${grouping.icon}.svg`" class="category-icon"/>
				<h1
					class="type-heading-h1 type-color-white kiosk-home__title js-animation-slideIn"
					v-html="$t(grouping.mobileTitleKey)"
				/>
			</div>

			<!-- Panel -->
		<div class="kiosk-home-links">
			<div
				v-for="(item, index) in grouping.categories"
				:key="index"
				class="kiosk-home-links__item js-animation-slideIn"
			>
				<div :class="['kiosk-home-links__item-icon', `ui-icon-${item.id}`]" />
				<div class="kiosk-home-links__item-copy">
					<div
						class="kiosk-home-links__item-title type-font-condensed"
						v-html="$t(`titles.categories.${item.id}.home-title`)"
					/>

					<div class="kiosk-home-links__item-navigate">
						<div class="button-wrapper">
							<the-button
								@click="navigateToTrial(item)"
								modifier="simple-white-gradient-bg"
							>
								{{item.learnMore ?
									 $t('misc.seePipelineDetails') :
									 $t('misc.learnMore') }}
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
import { useRouter } from 'vue-router';

import { getKioskHomeCategories } from '@/utils/data';
import type { ICategories } from '@/@types/data';

const router = useRouter();

function navigateToTrial(item: ICategories) {
	router.push(`/panels/trials/${item.id}`);
}
</script>

<style lang="scss" scoped>
.kiosk-home {
	&__title {
		font-size: 5.8em;
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
.category-icon{
	width: 5em;
	margin-left: -5em;
	margin-right: 1em;
}
</style>
