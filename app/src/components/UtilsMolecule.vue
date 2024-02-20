<template>
	<div :class="['util-molecule', `util-molecule--${props.modifier}`]" />
</template>

<script setup lang="ts">
const props = defineProps({
	modifier: { type: String, default: 'default' },
});
</script>
