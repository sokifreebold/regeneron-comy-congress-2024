<template>
	<div class="overlay">
		<div class="overlay__content">
			<div class="overlay__close" @click="closeOverlay" />

			<img
				class="ui-logo-regeneron"
				src="../assets/images/regeneron-logo-dark.svg"
				alt="Regeneron"
			/>

			<div class="overlay__copy">
				<h3>
					You are now leaving
					<span class="ui-domain">{{ host }}</span>
				</h3>
				<p>We encourage you to read the privacy policy of every website you visit.</p>
			</div>

			<div class="overlay__controls">
				<button class="primary" @click="submitRequest">Continue</button>
				<button class="secondary" @click="closeOverlay">Cancel</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, shallowRef } from 'vue';
import { useAppStore } from '@/stores/app';
const store = useAppStore();

const host = shallowRef<string>(location.host);
const externalLink = computed(() => store.get_externalLink);

function closeOverlay() {
	store.axn_updateExternalLink('');
}

function submitRequest() {
	window.open(externalLink.value, '_blank');
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
		position: relative;
		background: $white;
		padding: $unit * 6;
		border-radius: 0px $radius;
		border: 1px solid rgba(255, 255, 255, 0.2);
		max-width: 500px;
		max-height: 90vh;
		overflow: auto;
		margin: $unit * 2;

		background: linear-gradient(
			166deg,
			rgba(255, 255, 255, 0.96) 57.85%,
			rgba(255, 255, 255, 0) 260.85%
		);

		box-shadow: 0px 55px 116px 0px #0c2561;
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

		button {
			margin-bottom: $unit;
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
