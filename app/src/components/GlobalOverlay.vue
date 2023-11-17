<template>
	<Teleport to="body">
		<overlay-external-link v-if="externalLink" />
	</Teleport>

	<Teleport to="body">
		<overlay-lymphoma v-if="['lymphoma', 'myeloma'].includes(popup)" />
	</Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useAppStore } from '@/stores/app';

import OverlayExternalLink from './OverlayExternalLink.vue';
import OverlayLymphoma from './OverlayLymphoma.vue';

const store = useAppStore();

const externalLink = computed(() => store.get_externalLink);
const popup = computed(() => store.get_popup);
</script>
