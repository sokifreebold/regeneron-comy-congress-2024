<template>
	<!-- Floating Molecules -->
	<utils-molecule class="home__molecule" />

	<!-- Home View -->
	<main>
		<div class="container container--home">
			<!-- Page Title -->
			<h1 class="type-heading-h1 home__title" v-html="$t('home.title')" />

			<!-- Links -->
			<div class="home-links">
				<div v-for="(item, index) in categories" :key="index" class="home-links__item">
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
								<button @click="navigateToTrial(item)">
									{{ $t('misc.explore') }}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>

	<!-- Home Footer -->
	<footer-home />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

// Data to draw categories on home page
import { categories } from '@/content/data';
import type { ICategories } from '@/@types/data';

import UtilsMolecule from '@/components/UtilsMolecule.vue';
import FooterHome from '@/components/FooterHome.vue';

const router = useRouter();

// Function to navigate to the relevant section
function navigateToTrial(trial: ICategories) {
	router.push(`/trials/${trial.id}`);
}
</script>

<style lang="scss" scoped>
.home {
	&__molecule {
		right: -150px;
		top: -5%;

		@include desktop {
			right: 0;
		}
	}

	&__title {
		margin-top: $unit * 3;
		@include px-to-em(60px);
		line-height: 64px;
	}

	// Links
	&-links {
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

			.home-links__item {
				flex-basis: 48%;
				margin-right: $unit * 3;
			}
		}
	}
}

@include large-desktop {
	.container--home {
		margin-top: $unit * 5;
		max-width: 1086px;

		.home-links__item {
			flex-basis: 47%;
		}
	}
}
</style>
