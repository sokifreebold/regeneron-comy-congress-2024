<template>
	<component :is="renderView" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useAppStore } from '@/stores/app';

import MicrositeHomeView from './microsite/MicrositeHomeView.vue';
import KioskHomeView from './kiosk/KioskHomeView.vue';
import Kiosk3HomeView from './kiosk3/Kiosk3HomeView.vue';

const store = useAppStore();
const version = computed(() => store.get_version);

const renderView = computed(() => {
	if (version.value === 'kiosk3') {
		return Kiosk3HomeView;
	}
	return version.value.includes('kiosk') ? KioskHomeView : MicrositeHomeView;
});
</script>
