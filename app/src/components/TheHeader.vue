<template>
	<header class="header">
		<div class="container">
			<img
				v-if="route.name === 'home'"
				class="ui-logo-regeneron"
				src="../assets/images/regeneron-logo-dark.svg"
				alt="Regeneron"
			/>
			<img
				v-else
				class="ui-logo-regeneron"
				src="../assets/images/regeneron-logo-white.svg"
				alt="Regeneron"
				@click="navigateHome"
			/>
		</div>
	</header>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

function navigateHome() {
	router.push('/');
}
</script>

<style lang="scss" scoped>
.header {
	border-bottom: 1px solid $primary;
}
</style>
