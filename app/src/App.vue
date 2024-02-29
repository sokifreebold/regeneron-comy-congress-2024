<template>
	<router-view />

	<!-- Overlays -->
	<global-overlay />
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { applyElementsRippleFade } from '@/utils/animations';

const route = useRoute();
const routeName = computed(() => route.name);

watch(routeName, applyAnimations, { deep: true });
onMounted(applyAnimations);

function applyAnimations() {
	setTimeout(() => {
		applyElementsRippleFade('.js-animation-slideIn');
	}, 0);
}
</script>
