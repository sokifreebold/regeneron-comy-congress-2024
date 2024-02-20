<template>
	<button :class="['button', `button--${props.modifier}`]">
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
const props = defineProps({
	modifier: { type: String, default: 'default' },
	hasLeft: { type: Boolean, default: false },
});
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
			transition: all 0.25s linear;
		}
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
}
</style>
