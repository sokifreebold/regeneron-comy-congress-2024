<template>
	<layout-kiosk>
		This is data dump for kiosk 3<br />
		<pre>{{ kiosk3Categories }}</pre>
		<hr />

		Data Render
		<div v-for="(item, index) in kiosk3Categories" :key="index" @click="navigateLanding(item)">
			{{ item }}
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
