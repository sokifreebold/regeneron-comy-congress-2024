<template>
	<layout-kiosk-overlay class="layout-kiosk-overlay">
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
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { getTrialDatum } from '@/utils/data';

const route = useRoute();
const router = useRouter();

const currentSlide = ref(0);

const trialId = computed<string>(() => route.params.trialId as string);
const nctId = computed<string>(() => route.params.nct as string);

const trialData = computed<any>(() => trialDataFunction());

function trialDataFunction() {
	if (!nctId.value) {
		return;
	}
	const datum = getTrialDatum(trialId.value, nctId.value);
	return datum;
}

function slideClicked(index: number) {
	currentSlide.value = index;
}

function closeOverlay() {
	router.push(`/panels/trials/${trialId.value}`);
}
</script>

<style lang="scss" scoped>
.kiosk-images-no-data {
	display: flex;
	flex-direction: column;
	align-items: center;

	&__no-data {
		margin-bottom: $unit * 5;
	}
}

.layout-kiosk-overlay {
	width: 100%;
	:deep() .layout-kiosk-overlay__content {
		width: 100%;
		height: 100%;
		padding: $unit * 5 $unit * 10;
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

		img {
			// max-height: 100%;
		}
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
		}
	}
}
</style>
