<template>
	<router-view />

	<!-- Overlays -->
	<global-overlay />
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

watch(
	route,
	() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	},
	{ deep: true },
);
</script>
