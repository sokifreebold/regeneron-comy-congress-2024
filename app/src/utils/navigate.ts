import type { ITrials } from '@/@types/data';
import { type RouteLocationNormalizedLoaded, type Router } from 'vue-router';
import { pageview } from 'vue-gtag';
import { useAppStore } from '@/stores/app';
import { computed } from 'vue';

export function navigateTrialCards(
	trial: ITrials,
	router: Router,
	route: RouteLocationNormalizedLoaded,
) {
	const { type, nct } = trial;
	const { trialId, parentId } = route.params;

	const store = useAppStore();
	const version = computed(() => store.get_version);

	if (type === 'external') {
		let pageTitle = 'trial-card-external';
		let externalPath = `/trials/${trialId}/${nct}/external`;

		if (version.value.includes('kiosk')) {
			externalPath = `/panels/${parentId}${externalPath}`;
			pageTitle = 'panels-trial-card-external';
		}

		if (version.value !== 'kiosk') {
			pageview({
				page_path: externalPath,
				page_title: pageTitle,
			});
		}
		router.push(externalPath);
		return;
	}

	if (type === 'pdfCard') {
		let pdfRoutePath = `/trials/${trialId}/${nct}`;
		if (version.value.includes('kiosk')) {
			pdfRoutePath = `/panels/${parentId}${pdfRoutePath}`;
		}
		router.push(pdfRoutePath);
	}
}
