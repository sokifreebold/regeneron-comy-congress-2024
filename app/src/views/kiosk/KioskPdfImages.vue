<template>
	<layout-kiosk-overlay
		v-if="!loaded"
		class="layout-kiosk-images-overlay layout-kiosk-images-overlay__loader"
	>
		{{ $t('misc.loading') }}
	</layout-kiosk-overlay>
	<layout-kiosk-overlay class="layout-kiosk-images-overlay">
		<div
			v-if="!(trialData.trialCardImages && trialData.trialCardImages.length > 0)"
			class="kiosk-images-no-data"
		>
			<utils-no-record class="kiosk-images-no-data__no-data">
				{{ $t('misc.noPdf') }}
			</utils-no-record>

			<the-button @click="closeOverlay" modifier="simple-white" :hasLeft="true">
				<template v-slot:leftIcon>
					<img src="@/assets/icons/close-white.svg" />
				</template>

				{{ $t('misc.close') }}
			</the-button>
		</div>

		<div v-else class="kiosk-images">
			<div class="kiosk-images__image">
				<img
					class="carousel__item"
					v-bind:src="`/trialCardImages/${trialData.trialCardImages[currentSlide]}.png`"
					loading="lazy"
				/>
			</div>

			<div class="kiosk-images__thumbnails">
				<button
					:class="[
						'kiosk-images__thumbnails-controls kiosk-images__thumbnails-controls--prev',
						{ 'is-disabled': currentSlide === 0 },
					]"
					@click="navigateSlides(-1)"
				>
					<img src="@/assets/icons/chevron-left-white.svg" />
				</button>
				<div
					v-for="(image, index) in trialData.trialCardImages"
					:key="image"
					:class="[
						'kiosk-images__thumbnails-item',
						{ 'is-active': currentSlide === index },
					]"
				>
					<img
						class="carousel__item carousel__item__thumbnail"
						v-bind:src="`/trialCardImages/${image}.png`"
						@click="slideClicked(index)"
					/>
				</div>
				<button
					:class="[
						'kiosk-images__thumbnails-controls kiosk-images__thumbnails-controls--next',
						{ 'is-disabled': currentSlide === trialData.trialCardImages.length - 1 },
					]"
					@click="navigateSlides(1)"
				>
					<img src="@/assets/icons/chevron-right-white.svg" />
				</button>
			</div>

			<div class="kiosk-images__controls">
				<the-button @click="closeOverlay" modifier="simple-white">
					{{ $t('misc.close') }}

					<template v-slot:rightIcon>
						<img src="@/assets/icons/close-white.svg" />
					</template>
				</the-button>
			</div>
		</div>
	</layout-kiosk-overlay>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { getTrialDatum } from '@/utils/data';

const route = useRoute();
const router = useRouter();

const currentSlide = ref(0);
const loaded = ref(false);

const parentId = computed<string>(() => route.params.parentId as string);
const trialId = computed<string>(() => route.params.trialId as string);
const nctId = computed<string>(() => route.params.nct as string);

const trialData = computed<any>(() => trialDataFunction());

onMounted(() => {
	const images = document.querySelectorAll('img');
	const imageLoadPromises = Array.from(images).map(
		(img) =>
			new Promise((resolve, reject) => {
				img.onload = resolve;
				img.onerror = reject;
			}),
	);

	Promise.all(imageLoadPromises)
		.then(() => {
			loaded.value = true;
		})
		.catch((error) => {
			console.error('At least one image failed to load', error);
		});

	// Fallback to load images
	setTimeout(() => {
		loaded.value = true;
	}, 3000);
});

function trialDataFunction() {
	if (!nctId.value) {
		return;
	}
	const datum = getTrialDatum(trialId.value, nctId.value, parentId.value);
	return datum;
}

function slideClicked(index: number) {
	currentSlide.value = index;
}

function closeOverlay() {
	router.push(`/panels/trials/${parentId.value}/${trialId.value}`);
}

function navigateSlides(dir: number) {
	currentSlide.value = currentSlide.value + dir;
}
</script>

<style lang="scss">
.kiosk-images-no-data {
	display: flex;
	flex-direction: column;
	align-items: center;

	&__no-data {
		margin-bottom: $unit * 5;
	}
}

.layout-kiosk-images-overlay {
	width: 100%;
	.layout-kiosk-overlay__content {
		width: 100%;
		height: 100%;
		padding: $unit * 5 $unit * 10;
	}

	&__loader {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 18px;
		position: fixed;
		inset: 0;
		z-index: 9;

		.layout-kiosk-overlay__content {
			width: 100%;
			height: 100%;
			padding: $unit * 5 $unit * 10;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
}
.kiosk-images {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;

	&__image {
		padding: $unit * 3;
		flex: 1;
		overflow-y: auto;
		@include scrollbar-light();
		max-width: 900px;
		margin: 0 auto;
	}

	&__thumbnails {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: $unit * 3;
		cursor: pointer;

		&-item {
			margin: 0 $unit;
			padding: $unit * 2;
			border-radius: $unit;
			&.is-active {
				border: 2px solid $white;
			}

			img {
				max-width: 70px;
			}
		}

		&-controls {
			display: flex;
			align-items: center;
			justify-content: center;
			border: 2px solid $white;
			height: 60px;
			background: $linear-gradient-02;
			border-radius: 50px;
			margin: $unit * 2 $unit * 3;
			cursor: pointer;

			img {
				max-width: 20px;
				aspect-ratio: 1;
			}

			&--prev {
				background: $linear-gradient-02-alt;
			}

			&.is-disabled {
				pointer-events: none;
				opacity: 0;
			}
		}
	}

	&__controls {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@include k-desktop {
		justify-content: center;
		&__image {
			flex: none;
			max-width: 90%;
		}

		&__thumbnails {
			margin: $unit * 10 auto;
			img {
				max-width: 200px;
			}

			&-controls {
				height: 130px;
				padding: 0 20px;
				img {
					height: 40px;
					aspect-ratio: 1;
				}
			}
		}
	}
}
</style>
