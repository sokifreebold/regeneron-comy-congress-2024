<template>
	<div class="no-record">
		<div class="no-record__content">
			<slot />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.no-record {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: $unit * 2;
	background: rgba($blue-shade-1, 0.4);
	color: $white;
	border-radius: $unit;
	min-height: 200px;
	backdrop-filter: blur(5px);
	font-size: 12px;
	text-transform: uppercase;
	letter-spacing: 2px;
}
</style>
