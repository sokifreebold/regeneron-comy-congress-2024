<template>
	<div
		:class="[
			'util-molecule',
			`util-molecule--${props.modifier}`,
			`util-molecule--${props.view}`,
			{ 'js-molecule-fade': props.fadeIn },
		]"
	/>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { simpleFade } from '@/utils/animations';

const props = defineProps({
	modifier: { type: String, default: 'default' },
	view: { type: String, default: 'default' },
	fadeIn: { type: Boolean, default: false },
});

onMounted(() => {
	animateMolecule();
});

function animateMolecule() {
	simpleFade('.js-molecule-fade');
}
</script>
