<template>
	<layout-kiosk class="kiosk">
		<p class="intro-text">{{ $t('titles.trials.intro') }}</p>

		<div
			class="category-container"
			v-for="(grouping, index) in kioskCategoriesData"
			:key="index"
		>
			<landing-page-category-group :categoryGroup="grouping"></landing-page-category-group>
		</div>
	</layout-kiosk>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { ICategoriesKiosk3 } from '@/@types/data';
import { useRouter } from 'vue-router';
import { useAppStore } from '@/stores/app';
import { getKioskHomeCategories } from '@/utils/data';

const store = useAppStore();
store.axn_updateVersion('kiosk3');

const router = useRouter();

function navigateLanding(item: ICategoriesKiosk3) {
	router.push(`/panels/landing/${item.id}`);
}

const kioskCategoriesData = computed<ICategoriesKiosk3[]>(
	() => getKioskHomeCategories()!.categories,
);
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
		margin-bottom: 0.5em;
	}
}
</style>
