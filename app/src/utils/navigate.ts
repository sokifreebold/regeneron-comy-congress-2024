import type { ITrials } from '@/@types/data';
import { type RouteLocationNormalizedLoaded, type Router } from 'vue-router';
import { pageview } from 'vue-gtag';

export function navigateTrialCards(
	trial: ITrials,
	router: Router,
	route: RouteLocationNormalizedLoaded,
) {
	const { type, nct } = trial;
	const { trialId } = route.params;

	if (type === 'external') {
		const externalPath = `/trials/${trialId}/${nct}/external`;

		pageview({
			page_path: externalPath,
			page_title: 'trial-card-external',
		});
		router.push(externalPath);
		return;
	}

	if (type === 'pdfCard') {
		const pdfRoutePath = `/trials/${trialId}/${nct}`;
		router.push(pdfRoutePath);
	}
}
