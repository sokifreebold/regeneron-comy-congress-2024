<template>
	<div class="overlay">
		<div class="overlay__content">
			<div class="overlay__close" @click="closeOverlay" />

			<img
				class="ui-logo-regeneron"
				src="../assets/images/regeneron-logo-dark.svg"
				alt="Regeneron"
			/>

			
			<div class="overlay__qr-code"><qrcode-vue :value="externalLink"></qrcode-vue></div>
			
			<div class="overlay__copy">
				<h3>
					Scan QR code above to access trial information
				</h3>
				<p>We encourage you to read the privacy policy of every website you visit.</p>
			</div>

			<div class="overlay__controls">
				<button @click="closeOverlay">Done</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useAppStore } from '@/stores/app';
import { useRoute, useRouter } from 'vue-router';
import QrcodeVue from 'qrcode.vue';

const store = useAppStore();

const route = useRoute();
const router = useRouter();

const trialId = computed<string>(() => route.params.trialId as string);
const externalLink = computed(() => store.get_externalLink);
const externalLinkId = computed(() => store.get_externalLinkId);

function closeOverlay() {
	store.axn_updateExternalLink('', undefined);
	store.axn_updateExternalLinkId('');
	router.push(`/trials/${trialId.value}`);
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
		position: relative;
		background: $white;
		padding: $unit * 6 $unit * 3;
		border-radius: 0px $radius;
		border: 1px solid rgba(255, 255, 255, 0.2);
		max-width: 500px;
		max-height: 90vh;
		overflow: auto;
		margin: $unit * 2;
		display: flex;
		flex-direction: column;

		background: linear-gradient(
			166deg,
			rgba(255, 255, 255, 0.96) 57.85%,
			rgba(255, 255, 255, 0) 260.85%
		);

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
			border: 2px solid transparent;
			font-family: 'RobotoCondensed-Bold';
			font-size: 1em;
			text-align: center;
			cursor: pointer;
			transition: all 0.5s ease;
			background: linear-gradient(90deg, #9F24E2 0%, #3F00C5 100%);
			color: white;
		}
	
	}

	&__qr-code {
		align-self: center;
		padding-top: 2rem;
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
