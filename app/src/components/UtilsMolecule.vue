<template>
	<div
		:class="[
			'util-molecule',
			`util-molecule--${props.modifier}`,
			`util-molecule--${props.view}`,
			'js-molecule',
		]"
	/>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from 'gsap';

const props = defineProps({
	modifier: { type: String, default: 'default' },
	view: { type: String, default: 'default' },
});

onMounted(() => {
	animateMolecule();
});

function animateMolecule() {
	const element = document.querySelector('.js-molecule');
	if (!element) {
		return;
	}

	gsap.fromTo(
		element,
		{ opacity: 0, scale: 0.8 },
		{ opacity: 1, scale: 1, duration: 1, ease: 'power1.out' },
	);
}
</script>
