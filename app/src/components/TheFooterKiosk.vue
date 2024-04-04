<template>
	<footer :class="['footer-kiosk', `footer-kiosk--${props.modifier}`]">
		<div class="footer-kiosk__copy">
			<p v-if="$te(`footer.${trialId}.copy`)" v-html="$t(`footer.${trialId}.copy`)" />
			<p v-else v-html="$t('footer.shared.copy')" />

			<p v-html="$t('footer.shared.copyright')" />
			<p v-html="$t(`footer.${version}.jobCode`)" />
		</div>
	</footer>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
	modifier: { type: String, default: 'default' },
});

const store = useAppStore();
const version = computed(() => store.get_version);

const route = useRoute();
const trialId = computed<string>(() => route.params.trialId as string);
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
			line-height: 1.4;
		}
	}

	@include k-desktop {
		&__copy {
			p {
				margin-bottom: $unit * 4;
			}
		}
	}
}
</style>
