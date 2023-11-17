<template>
	<the-header />
	<RouterView />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from '@/components/TheHeader.vue';

export default defineComponent({
	components: {
		TheHeader,
	},
});
</script>
