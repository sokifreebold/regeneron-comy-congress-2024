<template>
	<component :is="renderView" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useAppStore } from '@/stores/app';

import MicrositeTrialView from './microsite/MicrositeTrialView.vue';
import KioskTrialView from './kiosk1/KioskTrialView.vue';

const store = useAppStore();
const version = computed(() => store.get_version);

const renderView = computed(() =>
	version.value === 'kiosk' ? KioskTrialView : MicrositeTrialView,
);
</script>
