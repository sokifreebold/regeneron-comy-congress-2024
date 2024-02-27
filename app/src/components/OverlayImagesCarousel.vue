<template>
	<div class="overlay">
		<div class="overlay__content">
			<div class="overlay__close" @click="closeOverlay" />

			<Carousel id="gallery" v-model="currentSlide">
				<Slide v-for="image in images" :key="image">
					<img class="carousel__item" v-bind:src="`../src/assets/images/${image}.png`" />
				</Slide>
			</Carousel>

			<Carousel
				class="thumbnail-carousel"
				id="thumbnails"
				:items-to-show="2"
				ref="carousel"
				v-model="currentSlide"
			>
				<Slide v-for="(image, index) in images" :key="image">
					<div
						:class="{
							carousel__wrapper: true,
							current__carousel__wrapper: currentSlide === index,
						}"
					>
						<img
							class="carousel__item carousel__item__thumbnail"
							v-bind:src="`../src/assets/images/${image}.png`"
							@click="slideClicked(index)"
						/>
					</div>

					<span>Page {{ index + 1 }}</span>
				</Slide>

				<template #addons>
					<Navigation />
				</template>
			</Carousel>

			<div class="overlay__controls">
				<button @click="closeOverlay">Close</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useAppStore } from '@/stores/app';
import { useRoute, useRouter } from 'vue-router';
// import type { ITrials } from '@/@types/data';
import { getTrialDatum } from '@/utils/data';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

const store = useAppStore();

const route = useRoute();
const router = useRouter();

const trialId = computed<string>(() => route.params.trialId as string);
const nctId = computed<string>(() => route.params.nct as string);
const datum = computed<any>(() => getTrialDatum(trialId.value, nctId.value));
const images = datum.value.images;

const currentSlide = ref(0);

function slideClicked(index: number) {
	currentSlide.value = index;
}

function closeOverlay() {
	store.axn_updateExternalLink('');
	store.axn_updateExternalLinkId('');
	router.push(`/trials/${trialId.value}`);
}
</script>

<style lang="scss" scoped>
.overlay {
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.88);
	width: 100%;
	height: 100%;
	z-index: 9;
	display: flex;
	align-items: center;
	justify-content: center;

	&__content {
		position: relative;
		background: rgba(0, 0, 0, 0.88);
		padding: $unit * 6 $unit * 3;
		border-radius: 0px $radius;
		border: 1px solid rgba(255, 255, 255, 0.2);
		max-width: 500px;
		max-height: 90vh;
		overflow: auto;
		margin: $unit * 2;
		display: flex;
		flex-direction: column;

		box-shadow: 0px 55px 116px 0px #0c2561;

		@include tablet {
			padding: $unit * 6;
		}
	}

	&__copy {
		margin-top: $unit * 5;
		h3 {
			font-size: 1.1em;
			line-height: 1.5;
			font-weight: 800;
			margin-bottom: $unit * 2;
		}
	}

	&__controls {
		margin-top: $unit * 5;
		display: flex;
		justify-content: center;

		a {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-bottom: $unit;
			background: $primary-2;
			color: $white;

			&:after {
				content: '';
				display: flex;
				background: url('@/assets/icons/chevron-next-white.svg');
				@include bg-contain();
				width: $unit * 2;
				aspect-ratio: 1;

				position: absolute;
				right: $unit * 2;
			}

			&:hover {
				background: $accent-1;
				border: 2px solid $accent-1;
			}
		}

		a,
		button {
			padding: $unit * 1.5 $unit * 3;
			width: auto;
			border-radius: $radius * 2;
			border: 2px solid white;
			font-family: 'RobotoCondensed-Bold';
			font-size: 1em;
			text-align: center;
			cursor: pointer;
			transition: all 0.5s ease;
			background: black;
			color: white;
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

.carousel__item {
	width: 100%;
	background: rgba(255, 255, 255, 0.88);
	color: var(--vc-clr-white);
	font-size: 20px;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.carousel__item__thumbnail {
	border: 2px solid #ffffff;
}

.carousel__wrapper {
	padding: 0.5rem 0.5rem 0.5rem 0.5rem;
}

.current__carousel__wrapper {
	border: 2px solid white;
}

.carousel__slide {
	padding: 10px;
	flex-direction: column;
}

.carousel__prev,
.carousel__next {
	box-sizing: content-box;
	border: 5px solid white;
}
</style>
