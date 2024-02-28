import VueGtag from 'vue-gtag';
import appConfig from '@/app.config';
import type { App } from 'vue';
import type { Router } from 'vue-router';

// import { isLocalEnvironment } from './environment';
import { version } from '@/version.config';

export function initialiseGoogleAnalytics(app: App<Element>, router: Router) {
	// if (isLocalEnvironment()) {
	// 	return;
	// }

	let tag = appConfig.googleAnalyticsTagMicrosite;
	try {
		if ((version as any) === 'kiosk') {
			tag = appConfig.googleAnalyticsTagKiosk;
		}
	} catch (err) {
		console.warn(err);
	}

	if (!tag) {
		return;
	}

	console.log(`[LOG]: Using GA Tag ${tag}`);
	app.use(
		VueGtag,
		{
			config: { id: tag },
		},
		router,
	);
}
