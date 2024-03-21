<template>
	<div class="kiosk-home-links__item-copy">
		<div class="kiosk-home-links__item js-animation-slideIn">
			<div class="kiosk-home-links__item-navigate">
				<div class="kiosk-home-links__category-group-header">
					<div
						@click="toggleExpand"
						class="kiosk-home-links__category-group-header__title-and-icon"
					>
						<span
							:class="[
								'kiosk-home-links__item-icon category-icon',
								`ui-icon-${categoryGroup.icon}`,
							]"
						/>
						<p
							class="kiosk-home-links__item-title type-heading-h2 type-font-condensed"
							v-html="$t(`titles.categories.${categoryGroup.id}`)"
						/>
					</div>
					<img
						v-if="!showing"
						src="@/assets/icons/expand-more.svg"
						class="expand"
						@click="toggleExpand()"
					/>
					<img
						v-if="showing"
						src="@/assets/icons/expand-less.svg"
						class="expand"
						@click="toggleExpand()"
					/>
				</div>
				<div class="category-contents" v-if="showing">
					<div
						v-for="(category, index) in categoryGroup.categories"
						:key="index"
						class="category-content-wrapper"
					>
						<div class="category-content">
							<div class="category-content__trial-icon-and-title">
								<div
									:class="[
										'kiosk-home-links__item-icon category-content__trial-icon-and-title__trial-icon',
										`ui-icon-${category.icon}`,
									]"
								/>
								<p
									class="category-content__trial-icon-and-title__trial-title type-font-condensed type-heading-h1"
								>
									{{ $t(`${category.title}.trial-title`) }}
								</p>
							</div>

							<div class="category-content__navigation-buttons">
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
									@click="learnMore(category)"
									class="button-wrapper"
									modifier="simple-white-gradient-bg"
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
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import type { ICategories } from '@/@types/data';
import type { ICategoriesRecords } from '@/@types/data';

const { categoryGroup } = defineProps<{ categoryGroup: ICategoriesRecords }>();

const router = useRouter();

const showing = ref(false);

function toggleExpand() {
	showing.value = !showing.value;
}

function learnMore(item: ICategories) {
	if (item.trialIds && item.trialIds.length > 0) {
		router.push(`/overlay/${categoryGroup.id}/${item.id}`);
	} else {
		// TODO change to link the dse pages
		navigateToTrial(item);
	}
}

function navigateToTrial(item: ICategories) {
	router.push(`/panels/trials/${categoryGroup.id}/${item.id}`);
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

		&__category-group-header {
			display: flex;
			justify-content: space-between;
			align-items: center;

			&__title-and-icon {
				display: flex;
				align-items: center;
			}
		}
		&__item {
			display: flex;
			padding: 5em 3em 5em 3em;
			border-radius: 20px 20px 20px 0;
			background: rgba($white, 0.1);
			backdrop-filter: blur(3px);
			margin-bottom: 20px;

			&-copy {
				margin-bottom: 0.5em;
				margin-top: 1.5em;
				border-radius: 20px 20px 20px 0px;
				backdrop-filter: blur(20px);
			}
			&-title {
				// @include px-to-em(40px);
				font-size: 3em;
				line-height: 35px;
				margin-bottom: $unit * 4;
			}

			&-icon {
				display: flex;
				width: $unit * 8;
				min-width: $unit * 4;
				aspect-ratio: 1;
				margin-right: $unit * 2;

				@include tablet {
					width: $unit * 10;
					margin-right: $unit * 6;
				}
			}
		}

		&__item-navigate {
			width: 100%;
		}
	}
}

.category-icon {
	width: 3em;
	margin-right: 1em;
	margin-bottom: 1em;
}

.expand {
	width: 1.5em;
}

.category-contents {
	display: flex;
	flex-flow: row wrap;
	align-items: stretch;
	gap: $unit * 5;
}

.category-content-wrapper {
	flex: 1 1 0px;
	margin: 0.5em;
}

.category-content {
	height: 100%;
	padding: 1em;
	padding-left: 1.5em;
	padding-right: 1.5em;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: $white;
	border-radius: 0px $radius;
	border: 1px solid rgba(255, 255, 255, 0.2);
	min-width: 15em;
	max-height: 90vh;
	overflow: auto;
	background: linear-gradient(
		166deg,
		rgba(255, 255, 255, 0.96) 57.85%,
		rgba(255, 255, 255, 0) 260.85%
	);
	box-shadow: 0px 55px 116px 0px #0c2561;

	&__navigation-buttons {
		display: flex;
		flex-direction: column;
		margin-top: 1em;
	}

	&__trial-icon-and-title {
		display: flex;
		flex-direction: column;
		align-items: center;

		&__trial-icon {
			display: block;
			margin-left: auto;
			margin-right: auto;
			width: 3em;
		}

		&__trial-title {
			color: #065baa;
			font-size: 1.2em;
			text-align: center;
		}
	}
}

.button-wrapper {
	display: flex;
	justify-content: center !important;
}
</style>
