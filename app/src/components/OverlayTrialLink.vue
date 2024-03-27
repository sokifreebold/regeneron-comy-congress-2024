<template>
	<div class="overlay js-animation-popup-slideIn">
		<div class="overlay__content">
			<div class="overlay__close" @click="closeOverlay" />

			<div :class="['overlay__category-icon', `ui-icon-${overlayTrial.icon}`]" />

			<h3 class="overlay__title type-font-condensed">
				{{ $t(`titles.categories.${overlayTrial.id}.home-title`) }}
			</h3>

			<div class="overlay__controls-wrapper">
				<the-button
					class="overlay__controls"
					v-for="(trial, index) in overlayTrial.multipleDse"
					:key="index"
					@click="navigateDse(trial)"
					modifier="simple-white-gradient-bg-01"
				>
					<span>{{ $t(`titles.conditions.learn-more.${trial.id}`) }}</span>

					<template v-slot:rightIcon>
						<img
							class="overlay__content__the-button__arrow-icon"
							src="@/assets/icons/arrow.svg"
						/>
					</template>
				</the-button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { applyElementsRippleFade } from '@/utils/animations';
import { useAppStore } from '@/stores/app';
import { useRouter } from 'vue-router';

const store = useAppStore();
const router = useRouter();

const overlayTrial = computed<any>(() => store.get_overlayTrial);

onMounted(applyAnimations);
function applyAnimations() {
	applyElementsRippleFade('.js-animation-popup-slideIn');
}

function closeOverlay() {
	store.axn_updateOverlayTrial(null);
}

function navigateDse(trial: any) {
	router.push(`/panels/dse/${overlayTrial.value.id}/${trial.id}/${trial.dse}`);
	closeOverlay();
}
</script>

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
		max-width: 900px;

		background: linear-gradient(
			166deg,
			rgba(255, 255, 255, 0.96) 57.85%,
			rgba(255, 255, 255, 0) 260.85%
		);
		box-shadow: 0px 55px 116px 0px #0c2561;

		@include tablet {
			padding: $unit * 12;
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

	&__title {
		color: $primary;
		font-size: 1.5em;
		font-weight: 800;
		line-height: 1.2em;
		margin: $unit * 2 0;
		text-align: center;
	}

	&__category-icon {
		display: flex;
		width: $unit * 8;
		min-width: $unit * 4;
		aspect-ratio: 1;
		margin-right: $unit * 2;
	}

	&__controls {
		&-wrapper {
			margin-top: $unit * 3;
			width: 100%;
		}

		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		margin: $unit 0;
		text-transform: uppercase;

		img {
			width: $unit * 3;
			aspect-ratio: 1;
			margin-left: $unit * 4;
		}
	}

	@include k-desktop {
		&__content {
			max-width: 1260px;
		}

		&__close {
			width: $unit * 5;
			margin: $unit * 3;
		}

		&__controls {
			&-wrapper {
				margin-top: $unit * 8;
			}
			margin: $unit * 3 0;

			img {
				min-width: $unit * 5;
			}
		}

		&__category-icon {
			width: $unit * 15;
		}
	}
}
</style>

<style lang="scss">
.overlay__controls {
	div.button__content {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
}
</style>
