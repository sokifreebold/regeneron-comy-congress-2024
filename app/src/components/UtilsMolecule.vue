<template>
	<div class="molecule" />
</template>

<style lang="scss" scoped>
.molecule {
	position: fixed;
	width: 300px;
	aspect-ratio: 1;
	background: url('@/assets/images/image-mol.png');
	@include bg-contain();
	z-index: 0;
	pointer-events: none;
	opacity: 0.7;
}
</style>
