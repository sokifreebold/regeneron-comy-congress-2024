<template>
	<Teleport to="body">
		<overlay-external-link v-if="type === 'external'" />
		<overlay-external-link-qr-code v-if="type === 'qrCode'" />
	</Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useAppStore } from '@/stores/app';

const store = useAppStore();
const type = computed(() => store.get_externalLinkType);
</script>
