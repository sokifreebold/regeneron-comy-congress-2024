<template>
	<layout-kiosk class="layout-trial-kiosk">
		<div class="trials">
			<!-- Title -->
			<div class="trials__header js-trial-title">
				<div :class="['trials__header-icon', `ui-icon-${trialId}`]" />
				<h1
					class="type-heading-h1 type-color-white trials__title"
					v-html="$t(`titles.trials.${trialId}`)"
				/>
			</div>

			<!-- Breadcrumb -->
			<div class="trials__breadcrumb">
				<div class="trials__breadcrumb-item trials__breadcrumb-item--link">
					<router-link to="/">{{ $t('misc.mainMenu') }}</router-link>
				</div>

				<div class="trials__breadcrumb-item" v-html="$t(`titles.breadcrumb.${trialId}`)" />
			</div>

			<!-- Trial Cards -->
			<trial-cards />

			<div class="trials__controls">
				<the-button @click="navigateHome()" modifier="simple-white">
					{{ $t('misc.mainMenu') }}

					<template v-slot:rightIcon>
						<img src="@/assets/icons/home-icon.svg" />
					</template>
				</the-button>
			</div>
		</div>
	</layout-kiosk>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { fadeIn } from '@/utils/animations';

const route = useRoute();
const router = useRouter();

const trialId = computed<string>(() => route.params.trialId as string);

onMounted(() => {
	animateHeader();
});

function animateHeader() {
	fadeIn('.js-trial-header');
}

function navigateHome() {
	router.push('/');
}
</script>

<style lang="scss" scoped>
.trials {
	position: relative;
	z-index: 2;
}
.trials__header {
	display: flex;
	align-items: center;

	&-icon {
		display: flex;
		width: $unit * 10;
		min-width: $unit * 10;
		aspect-ratio: 1;
		margin-right: $unit * 4;
	}
}

.trials__breadcrumb {
	display: flex;
	align-items: center;
	margin-bottom: $unit * 7;

	&-item {
		&:after {
			content: '>';
			margin: 0 $unit * 1;
		}
		&:last-child {
			&:after {
				display: none;
			}
		}

		&--link {
			a {
				border-bottom: 1px solid $white;
			}
		}
	}
}

.trials__controls {
	display: flex;
	align-items: center;
	justify-content: center;
}

.trials {
	@include k-desktop {
		&__title {
			@include px-to-em(50px);
		}

		&__header {
			margin-bottom: $unit * 5;
			&-icon {
				display: flex;
				width: $unit * 30;
				min-width: $unit * 30;
				margin-right: $unit * 8;
			}
		}

		&__breadcrumb {
			margin-bottom: $unit * 15;
		}
	}
}
</style>

<style lang="scss">
.layout-trial-kiosk {
	.layout-kiosk__main {
		justify-content: flex-start !important;
	}
}
</style>
