<template>
	<layout-kiosk-overlay>
		<div class="kiosk-overlay js-animate-overlay">
			<img
				class="ui-logo-regeneron"
				src="../../assets/images/regeneron-logo-dark.svg"
				alt="Regeneron"
			/>

			<div class="kiosk-overlay__content">
				<div class="kiosk-overlay__qr">
					<qrcode-vue :value="trialData.externalLink" :size="200" />
				</div>
			</div>

			<div class="kiosk-overlay__copy">
				<strong>{{ $t('kiosk.qr.title') }}</strong>
				<p>{{ $t('kiosk.qr.copy') }}</p>
			</div>

			<div class="kiosk-overlay__controls">
				<the-button @click="closeOverlay" modifier="simple-white-gradient-bg">
					{{ $t('misc.done') }}
				</the-button>
			</div>
		</div>
	</layout-kiosk-overlay>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getTrialDatum } from '@/utils/data';

import QrcodeVue from 'qrcode.vue';
import { fadeIn } from '@/utils/animations';
// import { useAppStore } from '@/stores/app';

const route = useRoute();
const router = useRouter();

// const store = useAppStore();

const trialId = computed<string>(() => route.params.trialId as string);
const nctId = computed<string>(() => route.params.nct as string);

const trialData = computed<any>(() => trialDataFunction());
// const version = computed(() => store.get_version);
// const size = computed(() => (version.value === 'kiosk' & (window as any).innerWidth ? 400 : 300));

onMounted(() => {
	fadeIn('.js-animate-overlay');
});

function trialDataFunction() {
	if (!nctId.value) {
		return;
	}
	const datum = getTrialDatum(trialId.value, nctId.value);
	return datum;
}

function closeOverlay() {
	router.push(`/panels/trials/${trialId.value}`);
}
</script>

<style lang="scss" scoped>
.kiosk-overlay {
	background: rgba($white, 0.95);
	color: $black;
	padding: $unit * 6 $unit * 6;
	border-radius: 0px $radius * 2;
	box-shadow: $box-shadow-03;

	&__content {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: $unit * 5 0;
	}

	&__qr {
		background: $white;
		padding: $unit * 2;

		@media screen and (max-width: 1600px) {
			canvas {
				width: 100px !important;
				height: 100px !important;
			}
		}
	}

	&__copy {
		strong {
			display: flex;
			@include px-to-em(24px);
			margin-bottom: $unit * 2;
		}
		p {
			@include px-to-em(18px);
		}
	}

	&__controls {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: $unit * 5;

		:deep() .button__icon {
			display: none;
		}
	}

	@include k-desktop {
		max-width: 1200px;
		padding: $unit * 10;

		img {
			max-width: 500px;
		}

		&__qr {
			margin: $unit * 5;
		}

		&__copy {
			margin: $unit * 10 0;
			strong {
				line-height: 1.3;
				@include px-to-em(18px);
				margin-bottom: $unit * 4;
			}
			p {
				@include px-to-em(16px);
				line-height: 1.1;
			}
		}
	}
}
</style>
