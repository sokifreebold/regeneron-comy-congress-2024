<template>
	<!-- TODO: Change kiosk version class to multiple kiosk -->
	<button
		:class="[
			'button',
			`button--${props.modifier}`,
			{ 'is-disabled': props.disabled },
			{ kiosk: version.includes('kiosk') },
			version,
		]"
	>
		<div class="button__content">
			<div v-if="hasLeft" class="button__icon button__icon--left">
				<slot name="leftIcon" />
			</div>

			<slot />

			<div v-if="!hasLeft" class="button__icon">
				<slot name="rightIcon" />
			</div>
		</div>
	</button>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app';
import { computed } from 'vue';

const props = defineProps({
	modifier: { type: String, default: 'default' },
	hasLeft: { type: Boolean, default: false },
	disabled: { type: Boolean, default: false },
});

const store = useAppStore();

const version = computed(() => store.get_version);
</script>

<style lang="scss" scoped>
.button {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: $radius * 2;
	border: none;
	padding: 0;
	height: 45px;
	background: $linear-gradient-01;
	cursor: pointer;

	&__content {
		display: flex;
		align-items: center;
		font-family: 'RobotoCondensed-Bold';
		font-size: 16px;
		color: $secondary;
		background: $white;
		padding: $unit * 1.5 $unit * 3;
		border-radius: $radius * 2;
		width: calc(100% - 4px);
		height: calc(100% - 4px);
		transition: all 0.25s linear;
		white-space: nowrap;
		justify-content: center;
	}

	&__icon {
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: $unit * 1.25;
		aspect-ratio: 1;
		margin-left: $unit;

		&--left {
			margin-left: 0;
			margin-right: $unit;
		}
	}

	&:hover {
		.button__content {
			width: calc(100% - 6px);
			height: calc(100% - 6px);
			transition: all 0.15s linear;
		}
	}

	&.is-disabled {
		opacity: 0.5;
		pointer-events: none;
	}

	// Modifier
	&--back {
		background: none;
		height: auto;

		.button {
			&__content {
				background: none;
				color: $white;
				padding: 0;
				padding: $unit;
			}
		}

		&:hover {
			.button__content {
				width: calc(100% - 4px);
				height: calc(100% - 4px);
			}
		}
	}

	&--simple-white,
	&--simple-white-gradient-bg,
	&--simple-white-gradient-bg-01 {
		position: relative;
		background: none;
		.button {
			&__content {
				background: none;
				color: $white;
			}
		}

		&:before {
			position: absolute;
			content: '';
			border: 2px solid $white;
			width: 100%;
			height: 100%;
			border-radius: $radius * 2;
			transition: all 0.15s linear;
		}

		&:hover {
			.button__content {
				width: calc(100% - 6px);
				height: calc(100% - 6px);
			}
			&:before {
				border: 4px solid $white;
				transition: all 0.15s linear;
			}
		}
	}

	&--simple-white-gradient-bg-01 {
		background: $linear-gradient-01;
	}
	&--simple-white-gradient-bg {
		background: $linear-gradient-02;
	}

	@include k-desktop {
		&.kiosk {
			height: 100px;

			.button {
				&__content {
					font-size: 40px;
					line-height: 1.1;
					padding: $unit * 10 $unit * 5;
					border-radius: $radius * 5;
				}

				&__icon {
					min-width: $unit * 3;
					margin-left: $unit * 3;
				}
			}
		}
	}
}
</style>

<style lang="scss">
.kiosk .button {
	@include k-desktop {
		.kiosk-icon--lg {
			min-width: $unit * 5;
		}
	}
}
</style>
