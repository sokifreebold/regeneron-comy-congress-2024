<template>
	<layout-home>
		<div class="home">
			<!-- Home Title -->
			<h1
				class="type-heading-h1 home__title display-mobile-only js-animation-slideIn"
				v-html="$t('home.titleMobile')"
			/>
			<h1
				class="type-heading-h1 home__title display-tablet-only js-animation-slideIn"
				v-html="$t('home.titleDesktop')"
			/>

			<!-- Panel -->
			<div class="home-links">
				<div
					v-for="(item, index) in getHomeCategories()"
					:key="index"
					class="home-links__item js-animation-slideIn"
					:ref="setRef"
				>
					<div :class="['home-links__item-icon', `ui-icon-${item.id}`]" />
					<div class="home-links__item-copy">
						<div class="home-links__item-title type-font-condensed">
							{{ $t(`titles.trials.${item.id}`) }}
						</div>
						<div class="home-links__item-sub-title">
							{{ item.trials }} {{ $t('misc.clinicalTrials') }}
						</div>

						<div class="home-links__item-navigate">
							<div class="button-wrapper">
								<the-button @click="navigateToTrial(item)">
									{{ $t('misc.explore') }}

									<template v-slot:rightIcon>
										<img src="@/assets/icons/chevron-right-gradient.svg" />
									</template>
								</the-button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</layout-home>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { getHomeCategories } from '@/utils/data';
import type { ICategories } from '@/@types/data';

const router = useRouter();
const itemRefs = ref<HTMLElement[]>([]);

const setRef = (el: any) => {
	if (el) {
		itemRefs.value.push(el);
	}
};

function navigateToTrial(item: ICategories) {
	router.push(`/trials/${item.id}`);
}
</script>

<style lang="scss" scoped>
.home {
	// Links
	&-links {
		margin: $unit * 2 0;
		&__item {
			display: flex;
			padding: $unit * 4 $unit * 3;
			margin-bottom: $unit * 3;
			background: rgba($white, 0.8);
			border-radius: 0px $radius;
			border: 1px solid rgba($black, 0.09);
			box-shadow: $box-shadow-01;

			&-title {
				@include px-to-em(24px);
				line-height: 28px;
				font-weight: 700;
				color: $primary;
				text-transform: uppercase;
			}

			&-sub-title {
				margin: $unit 0 $unit * 3 0;
			}

			&-navigate {
				display: flex;
			}

			// Icon
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

		@include large-desktop {
			display: flex;
			flex-wrap: wrap;
			margin-top: $unit * 6;

			.home-links__item {
				flex-basis: 47%;
				margin-right: $unit * 3;
			}
		}
	}
}
</style>
