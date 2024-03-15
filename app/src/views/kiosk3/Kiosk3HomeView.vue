<template>
	<layout-kiosk>
		<p>Please select a treatment area</p>
			<div class="category-container"
			v-for="(grouping, index) in kiosk3Categories"
			:key="index">
			<landing-page-category-group
				:categoryGroup="grouping"
			></landing-page-category-group>
		</div>

	</layout-kiosk>
</template>

<script setup lang="ts">
import { kiosk3Categories } from '@/data/kiosk';
import type { ICategoriesKiosk3 } from '@/@types/data';
import { useRouter } from 'vue-router';

const router = useRouter();

function navigateLanding(item: ICategoriesKiosk3) {
	router.push(`/panels/landing/${item.id}`);
}
</script>
