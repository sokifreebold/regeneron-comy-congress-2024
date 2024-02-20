<template>
	<div
		:class="[
			'util-molecule',
			`util-molecule--${props.modifier}`,
			`util-molecule--${props.view}`,
		]"
	/>
</template>

<script setup lang="ts">
const props = defineProps({
	modifier: { type: String, default: 'default' },
	view: { type: String, default: 'default' },
});
</script>
