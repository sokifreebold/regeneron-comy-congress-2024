<template>
	<div :class="['app', route.name]">
		<the-header />
		<RouterView />

		<!-- Overlays -->
		<global-overlay />
	</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

import TheHeader from './components/TheHeader.vue';
import GlobalOverlay from './components/GlobalOverlay.vue';

const route = useRoute();
</script>

<style lang="scss" scoped>
.app {
	&.trials,
	&.pdf {
		color: $white;
		background: url('@/assets/backgrounds/trials.png');
		@include bg-cover();
	}
}
</style>
