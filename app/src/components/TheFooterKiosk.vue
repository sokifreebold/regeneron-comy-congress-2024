<template>
	<footer :class="['footer-kiosk', `footer-kiosk--${props.modifier}`]">
		<div class="footer-kiosk__copy">
			<p v-html="$t('footer.shared.copy')" />
			<p v-html="$t('footer.kiosk.jobCode')" />
			<p v-html="$t('footer.shared.copyright')" />
		</div>
	</footer>
</template>

<script setup lang="ts">
const props = defineProps({
	modifier: { type: String, default: 'default' },
});
</script>

<style lang="scss" scoped>
.footer-kiosk {
	color: $white;
	margin: 0 $unit * 4 $unit * 2;
	padding: $unit * 4;

	&__copy {
		p {
			@include px-to-em(12px);
			@include px-to-em(18px, line-height);
			margin: $unit 0;
		}
	}
}
</style>
