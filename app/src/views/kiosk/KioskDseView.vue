<template>
	<div class="kiosk-dse-wrapper">
		<div class="kiosk-dse-wrapper__main-menu" @click="navigateHome" />
		<iframe :src="`/dse/${dseId}/index.html?id=${dseId}`" />
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const route = useRoute();
const router = useRouter();

const dseId = computed<string>(() => route.params.dseId as string);

function navigateHome() {
	router.push('/');
}
</script>

<style lang="scss" scoped>
.kiosk-dse-wrapper {
	width: 100vw;
	height: 100vh;
	overflow: hidden;

	iframe {
		width: 100%;
		height: 100%;
	}

	&__main-menu {
		position: fixed;
		top: 0em;
		left: 0;
		width: 100%;
		height: 60px;
		background: transparent;
		z-index: 9;

		@include k-desktop {
			height: 300px;
		}
	}
}
</style>
