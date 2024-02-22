<template>
	<Teleport to="body">
		<overlay-external-link v-if="externalLink" />
	</Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useAppStore } from '@/stores/app';

const store = useAppStore();
const externalLink = computed(() => store.get_externalLink);
</script>
