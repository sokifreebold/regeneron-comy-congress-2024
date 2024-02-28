<template>
	<layout-kiosk>
		<h1
			class="type-heading-h1 type-color-white home__title js-home-title"
			v-html="$t('home.kioskTitle')"
		/>

		<!-- Panel -->
		<div class="kiosk-home-links">
			<div
				v-for="(item, index) in getKioskHomeCategories()"
				:key="index"
				class="kiosk-home-links__item"
				:ref="setRef"
			>
				<div :class="['kiosk-home-links__item-icon', `ui-icon-${item.id}`]" />
				<div class="kiosk-home-links__item-copy">
					<div
						class="kiosk-home-links__item-title type-font-condensed"
						v-html="$t(`titles.trials.${item.id}`)"
					/>

					<div class="kiosk-home-links__item-navigate">
						<div class="button-wrapper">
							<the-button
								@click="navigateToTrial(item)"
								modifier="simple-white-gradient-bg"
							>
								{{ $t('misc.seePipelineDetails') }}

								<template v-slot:rightIcon>
									<img src="@/assets/icons/chevron-right-white.svg" />
								</template>
							</the-button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</layout-kiosk>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

import { getKioskHomeCategories } from '@/utils/data';
import type { ICategories } from '@/@types/data';
import { fadeIn, fadeInRipple } from '@/utils/animations';
import { gsap } from 'gsap';

const router = useRouter();

const itemRefs = ref<HTMLElement[]>([]);

const setRef = (el: any) => {
	if (el) {
		itemRefs.value.push(el);
	}
};

onMounted(() => {
	animateHeader();
	animateList();
});

function animateHeader() {
	fadeIn('.js-home-title');
}

function animateList() {
	const tl = gsap.timeline();
	itemRefs.value.forEach((item, index) => {
		fadeInRipple(item, tl, index * 0.25);
	});
}

function navigateToTrial(item: ICategories) {
	router.push(`/panels/trials/${item.id}`);
}
</script>

<style lang="scss" scoped>
.kiosk-home {
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
					margin-right: $unit * 15;
					aspect-ratio: 1;
				}
			}
		}
	}
}
</style>
