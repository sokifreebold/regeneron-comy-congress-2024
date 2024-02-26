<template>
	<layout-trials>
		<!-- Back Button -->
		<template v-slot:back>
			<the-button @click="navigateBackToTrials" :hasLeft="true" modifier="back">
				{{ $t('misc.backToTrials') }}

				<template v-slot:leftIcon>
					<img src="@/assets/icons/back-arrow.svg" />
				</template>
			</the-button>
		</template>

		<Carousel id="gallery" v-model="currentSlide">
			<Slide v-for="image in images" :key="image">
				<img class="carousel__item" v-bind:src="`../src/assets/images/${image}.png`" />
			</Slide>

			<template #addons>
			<Navigation />
			<Pagination />
			</template>
		</Carousel>


		<Carousel id="thumbnails" :items-to-show="3" ref="carousel" v-model="currentSlide">
			<Slide v-for="image in images" :key="image">
				<img class="carousel__item" v-bind:src="`../src/assets/images/${image}.png`" />
			</Slide>
		</Carousel>
		
	</layout-trials>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import type { ITrials } from '@/@types/data';
import { getTrialDatum } from '@/utils/data';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

const router = useRouter();
const route = useRoute();

const trialId = computed<string>(() => route.params.trialId as string);
const nctId = computed<string>(() => route.params.nct as string);
const datum = computed<ITrials | null>(() => getTrialDatum(trialId.value, nctId.value));
const images = datum.value.images;

const currentSlide = ref(0);

function navigateBackToTrials() {
	router.push(`/trials/${trialId.value}`);
}


</script>

<style lang="scss" scoped>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

</style>
