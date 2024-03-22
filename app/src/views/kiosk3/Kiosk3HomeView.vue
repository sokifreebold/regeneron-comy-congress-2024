<template>
	<layout-kiosk class="kiosk">
		<p class="intro-text">{{ $t('titles.trials.intro') }}</p>

		<div
			class="category-container"
			v-for="(grouping, index) in kioskCategoriesData.categories"
			:key="index"
		>
			<landing-page-category-group :categoryGroup="grouping"></landing-page-category-group>
		</div>
	</layout-kiosk>
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from 'vue';
import type { ICategoriesKiosk } from '@/@types/data';
import { useRoute } from 'vue-router';
import { useAppStore } from '@/stores/app';
import { getKioskHomeCategories } from '@/utils/data';

const store = useAppStore();
store.axn_updateVersion('kiosk3');

const route = useRoute();
const categoryGroupId = computed<string>(() => route.params.categoryGroupId as string);
const categoryId = computed<string>(() => route.params.categoryId as string);

const kioskCategoriesData = computed<ICategoriesKiosk>(() => getKioskHomeCategories()!);

function checkIfOverlay() {
	if (!categoryGroupId.value) {
		return;
	}
	const categoryGroup = kioskCategoriesData.value.categories.find(
		(cd) => cd.id === categoryGroupId.value,
	);
	if (categoryGroup) {
		const category = categoryGroup.categories.find((c) => c.id === categoryId.value);
		if (category && category.trialIds && category.trialIds.length > 0) {
			store.axn_updateTrialIds(category.trialIds);
		}
	}
}

onMounted(() => {
	checkIfOverlay();
});
watch(route, checkIfOverlay);
</script>

<style lang="scss" scoped>
.kiosk {
	.intro-text {
		font-family: 'RobotoCondensed-Bold';
		font-size: 2em;
		font-weight: 700;
		line-height: 48px;
		letter-spacing: 0em;
		text-align: left;
		margin-top: 1em;
		margin-bottom: 0.5em;
	}
}
</style>
