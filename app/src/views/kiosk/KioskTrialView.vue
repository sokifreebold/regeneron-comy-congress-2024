<template>
	<layout-kiosk class="layout-trial-kiosk">
		<img src="@/assets/icons/main-menu-button.svg" class="menu-button" @click="navigateHome()"/>
	
		<div class="trials">
			<!-- Title -->
			<div class="trials__header js-animation-slideIn">
				<div :class="['trials__header-icon', `ui-icon-${trialId}`]" />
				<h1
					class="type-heading-h1 type-color-white trials__title"
					v-html="$t(`titles.trials.${trialId}`)"
				/>
			</div>

			<!-- Trial Cards -->
			<trial-cards />

			<div class="trials__controls js-animation-slideIn">
				<the-button @click="navigateHome()" modifier="simple-white">
					{{ $t('misc.mainMenu') }}

					<template v-slot:rightIcon>
						<img src="@/assets/icons/home-icon.svg" class="kiosk-icon--lg" />
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

.trials__title {
	font-size: 3em;
}

.trials {
	@include k-desktop {
		&__title {
			@include px-to-em(44px);
		}

		&__header {
			margin-bottom: $unit * 4;
			&-icon {
				display: flex;
				width: $unit * 25;
				min-width: $unit * 25;
				margin-right: $unit * 8;
			}
		}

		&__breadcrumb {
			margin-bottom: $unit * 5;
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

.menu-button{
	width: 12em;
	margin-left: -5em;
}
</style>
