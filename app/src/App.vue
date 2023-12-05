<template>
	<div :class="['app', route.name]">
		<the-header />
		<RouterView />

		<!-- Overlays -->
		<global-overlay />
	</div>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useRoute } from 'vue-router';

import TheHeader from './components/TheHeader.vue';
import GlobalOverlay from './components/GlobalOverlay.vue';

const route = useRoute();

watch(
	route,
	() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	},
	{ deep: true },
);
</script>

<style lang="scss" scoped>
.app {
	&.trials,
	&.pdf,
	&.trial-card,
	&.not-found {
		color: $white;
		background: url('@/assets/backgrounds/trials.png');
		@include bg-cover();
	}
}
</style>
