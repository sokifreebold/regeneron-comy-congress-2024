<template>
	<div class="overlay">
		<div class="overlay__close" @click="closeOverlay">
			<button>{{ $t('misc.close') }}</button>
		</div>
		<div class="overlay__content">
			<div v-if="popup === 'lymphoma'">
				<div class="overlay__meta">
					<div class="overlay__meta-top">
						<img src="@/assets/images/lymphoma-overlay.png" alt="Lymphoma" />

						<p>
							Odronextamab is an investigational agent and has not been fully
							evaluated by any regulatory authority.
						</p>

						<p class="overlay__meta-plus">Plus sign denotes activation.</p>
					</div>
					<div class="overlay__meta-bottom">
						<small>A CD20xCD3 BISPECIFIC ANTIBODY</small>
						<strong>Odronextamab</strong>
					</div>
				</div>
				<div class="overlay__copy">
					<p>
						CD20 is a protein expressed on the surface of B cells, including in chronic
						lymphocytic leukemia and lymphomas.
					</p>
					<p>
						Odronextamab is designed to bridge CD20 on cancer cells with CD3 on T cells
						to facilitate local T-cell activation and cytotoxicity.
					</p>
					<small>Note: Healthy cells may be targeted</small>
				</div>
			</div>

			<div v-if="popup === 'myeloma'">
				<div class="overlay__meta">
					<div class="overlay__meta-top">
						<img src="@/assets/images/myeloma-overlay.png" alt="myeloma" />

						<p>
							Linvosteltamab is an investigational agent and has not been fully
							evaluated by any regulatory authority.
						</p>

						<p class="overlay__meta-plus">Plus sign denotes activation.</p>
					</div>
					<div class="overlay__meta-bottom">
						<small>A BCMAxCD3 BISPECIFIC ANTIBODY</small>
						<strong>Linvoseltamab</strong>
					</div>
				</div>
				<div class="overlay__copy">
					<p>
						BCMA is a cell surface protein with increased expression in multiple myeloma
						compared with normal plasma cells.
					</p>
					<p>
						Linvoseltamab is designed to bridge BCMA on cancer cells with CD3 on T cells
						to facilitate local T-cell activation and cytotoxicity.
					</p>
					<small>Note: Healthy cells may be targeted</small>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useAppStore } from '@/stores/app';
const store = useAppStore();

const popup = computed(() => store.get_popup);

function closeOverlay() {
	store.axn_updatePopup('');
}
</script>

<style lang="scss" scoped>
.overlay {
	position: fixed;
	inset: 0;
	background: rgba($black, 1);
	width: 100%;
	height: 100%;
	z-index: 9;
	display: flex;
	align-items: center;
	justify-content: center;

	&__close {
		position: absolute;
		top: $unit * 3;
		right: $unit * 3;
		aspect-ratio: 1;

		button {
			border: 2px solid $white;
			color: $white;
			text-transform: uppercase;

			&:after {
				display: none;
			}

			&:before {
				display: flex;
				content: '';
				width: $unit * 1.5;
				aspect-ratio: 1;
				background: url('@/assets/icons/close-white.svg');
				@include bg-contain();
				margin-right: $unit * 1;
			}
		}
	}

	&__content {
		color: $white;
		width: 100%;
		max-width: 600px;
		max-height: 80vh;
		overflow-y: auto;
		padding: $unit * 2;
		@include scrollbar-light();
	}

	&__copy {
		padding: $unit * 3;
		font-family: 'RobotoCondensed-Regular';
		p {
			font-size: 1.3em;
			margin-bottom: $unit * 3;
		}
	}

	&__meta {
		font-family: 'RobotoCondensed-Regular';
		border-radius: 0px $radius;
		background: $linear-gradient-02;

		img {
			margin-bottom: $unit * 3;
		}

		&-top {
			padding: $unit * 3;
			background: linear-gradient(
				rgba(255, 255, 255, 0.96) 57.85%,
				rgba(255, 255, 255, 0) 260.85%
			);
			border-radius: 0px $radius;
			color: $copy;
		}

		&-bottom {
			padding: $unit * 3;
			display: flex;
			flex-direction: column;

			strong {
				font-size: 1.75em;
				text-transform: uppercase;
			}
		}

		&-plus {
			position: relative;
			display: flex;
			align-items: center;
			padding-left: $unit * 3;
			margin-top: $unit * 3;

			&:before {
				content: '';
				position: absolute;
				width: $unit * 2;
				aspect-ratio: 1;
				background: url('@/assets/icons/plus-icon.svg');
				@include bg-contain();
				left: 0;
			}
		}
	}
}
</style>
