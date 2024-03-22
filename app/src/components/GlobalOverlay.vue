<template>
	<Teleport to="body">
		<overlay-external-link v-if="externalLink" />
		<overlay-trial-link v-if="trialIds && trialIds.length > 0" />
	</Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useAppStore } from '@/stores/app';

const store = useAppStore();
const externalLink = computed(() => store.get_externalLink);
const trialIds = computed(() => store.get_trialIds);
</script>
