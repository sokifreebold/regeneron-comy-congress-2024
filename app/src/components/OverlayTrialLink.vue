<template>
	<div class="overlay js-animation-popup-slideIn">
		<div class="overlay__content">
			<div class="overlay__close" @click="closeOverlay" />

			<div :class="['overlay__content__category-icon', `ui-icon-${category.icon}`]" />

			<div class="overlay__content__title">
				{{ $t(`titles.categories.${categoryId}.home-title`) }}
			</div>

			<the-button
				class="overlay__content__the-button"
				v-for="(trialId, index) in trialIds"
				:key="index"
				@click="navigateToCondition(trialId)"
				modifier="simple-white-gradient-bg"
			>
				{{ $t(`titles.conditions.${trialId}`) }}

				<template v-slot:rightIcon>
					<img
						class="overlay__content__the-button__arrow-icon"
						src="@/assets/icons/arrow.svg"
					/>
				</template>
			</the-button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted, shallowRef } from 'vue';
import { useAppStore } from '@/stores/app';
import { useRoute, useRouter } from 'vue-router';
import { applyElementsRippleFade } from '@/utils/animations';
import { getKioskHomeCategories } from '@/utils/data';

const store = useAppStore();

const host = shallowRef<string>(location.host);

const route = useRoute();
const router = useRouter();

const categoryGroupId = computed<string>(() => route.params.categoryGroupId as string);
const categoryId = computed<string>(() => route.params.categoryId as string);
const trialIds = computed<string[]>(() => store.get_trialIds);

onMounted(applyAnimations);
function applyAnimations() {
	applyElementsRippleFade('.js-animation-popup-slideIn');
}

function closeOverlay() {
	store.axn_updateTrialIds([]);
	router.push(`/`);
}

function navigateToCondition(conditionId: string) {
	store.axn_updateTrialIds([]);
	router.push(`/conditions/${conditionId}`);
}

const categoryGroup = computed<ICategoriesKiosk3>(() =>
	getKioskHomeCategories()!.categories.find((c) => c.id === categoryGroupId.value),
);
const category = computed(() =>
	categoryGroup.value.categories.find((c) => c.id === categoryId.value),
);
</script>

<style lang="scss">
div .overlay__content__the-button .button__content {
	justify-content: space-between;
}
</style>

<style lang="scss" scoped>
.overlay {
	position: fixed;
	inset: 0;
	background: rgba($primary, 0.6);
	width: 100%;
	height: 100%;
	z-index: 9;
	display: flex;
	align-items: center;
	justify-content: center;

	&__content {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		background: $white;
		padding: $unit * 6 $unit * 3;
		border-radius: 0px $radius;
		border: 1px solid rgba(255, 255, 255, 0.2);
		overflow: auto;
		margin: $unit * 2;

		background: linear-gradient(
			166deg,
			rgba(255, 255, 255, 0.96) 57.85%,
			rgba(255, 255, 255, 0) 260.85%
		);

		box-shadow: 0px 55px 116px 0px #0c2561;

		@include tablet {
			padding: $unit * 6;
		}

		&__title {
			color: var(--Draft-2023-Primary-Regeneron-Blue, #065baa);
			text-align: center;
			font-family: 'RobotoCondensed-Bold';
			font-size: 3em;
			font-style: normal;
			font-weight: 700;
			line-height: 40px; /* 125% */
			text-transform: uppercase;
			padding-bottom: 1em;
		}

		&__category-icon {
			display: flex;
			width: 6em !important;
			aspect-ratio: 1;
			margin-right: $unit * 2;

			@include tablet {
				width: $unit * 10;
				margin-right: $unit * 6;
			}
		}

		&__the-button {
			width: 100%;
			text-align: left;
			background: linear-gradient(90deg, #2069e7 0%, #9f24e2 100%) !important;
			margin-bottom: 2em;

			&__arrow-icon {
				width: 1em;
			}
		}
	}

	&__close {
		position: absolute;
		top: $unit * 2;
		right: $unit * 2;
		width: $unit * 2;
		aspect-ratio: 1;
		background: url('@/assets/icons/close-icon.svg');
		@include bg-contain();
		cursor: pointer;
	}
}
</style>
