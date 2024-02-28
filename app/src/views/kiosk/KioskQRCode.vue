<template>
	<layout-kiosk-overlay>
		<div class="kiosk-overlay">
			<img
				class="ui-logo-regeneron"
				src="../../assets/images/regeneron-logo-dark.svg"
				alt="Regeneron"
			/>

			<div class="kiosk-overlay__content">
				<div class="kiosk-overlay__qr">
					<qrcode-vue :value="trialData.externalLink" :size="150" />
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
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getTrialDatum } from '@/utils/data';

import QrcodeVue from 'qrcode.vue';

const route = useRoute();
const router = useRouter();

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
}
</style>
