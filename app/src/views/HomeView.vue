<template>
	<component :is="renderView" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useAppStore } from '@/stores/app';

import MicrositeHomeView from './microsite/MicrositeHomeView.vue';
import KioskHomeView from './kiosk/KioskHomeView.vue';

const store = useAppStore();
const version = computed(() => store.get_version);

const renderView = computed(() => (version.value === 'kiosk' ? KioskHomeView : MicrositeHomeView));
</script>
