<template>
	<div class="not-found">
		<!-- 404 View -->
		<div class="not-found__content container">
			<div class="not-found__title">
				{{ $t('notFound.title') }}
			</div>
			<div class="not-found__copy">
				{{ $t('notFound.copy') }}
			</div>

			<div class="not-found__controls">
				<router-link class="not-found__link" to="/">
					<the-button modifier="simple-white">
						{{ $t('notFound.home') }}

						<template v-slot:rightIcon>
							<img src="@/assets/icons/chevron-right-white.svg" />
						</template>
					</the-button>
				</router-link>
			</div>
		</div>
	</div>

	<molecules-trials />
</template>

<style lang="scss" scoped>
.not-found {
	height: 100vh;
	display: flex;
	background: url('@/assets/backgrounds/trials.png');
	@include bg-cover();
	align-items: center;
	padding-bottom: $unit * 10;
	color: $white;

	&__content {
		width: 100%;
		padding: $unit * 4;
	}

	&__title {
		margin-bottom: $unit * 2;
		@include px-to-em(60px);
		line-height: 64px;
		font-family: 'RobotoCondensed-Bold';
	}

	&__link {
		margin-top: $unit * 3;
		color: $white;
		cursor: pointer;
		font-size: 14px;
	}

	&__controls {
		display: flex;
	}
}

.trials {
	&__molecule {
		right: -50px;
		top: -5%;

		&--secondary {
			right: 0px;
			top: auto;
			bottom: -20%;
			width: 600px;
			opacity: 0.3;
			display: none;
		}

		&--tertiary {
			right: auto;
			left: -40px;
			top: 40%;
			width: 250px;
			filter: blur(6px);
			opacity: 0.3;
		}

		@include desktop {
			right: 0;

			&--secondary {
				display: flex;
			}
		}
	}
}
</style>
