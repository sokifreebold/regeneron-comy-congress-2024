<template>
	<utils-molecule class="trials__molecule" />
	<main>
		<div class="container">
			<!-- Page Title -->
			<h1 class="type-heading-h1 trials__title" v-html="$t(`titles.trials.${trialId}`)" />
		</div>
	</main>

	<!-- Home Footer -->
	<footer-home />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import UtilsMolecule from '@/components/UtilsMolecule.vue';
import FooterHome from '@/components/FooterHome.vue';

const route = useRoute();

const trialId = computed(() => route.params.trialId);
</script>

<style lang="scss" scoped>
.trials {
	&__molecule {
		right: -50px;
		top: -5%;
	}

	&__title {
		margin-top: $unit * 3;
		color: $white;
	}
}
</style>
