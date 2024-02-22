import VueGtag from 'vue-gtag';
import appConfig from '@/app.config';
import type { App } from 'vue';
import type { Router } from 'vue-router';

import { isLocalEnvironment } from './environment';

export function initialiseGoogleAnalytics(app: App<Element>, router: Router) {
	if (isLocalEnvironment() || !appConfig.googleAnalyticsTag) {
		return;
	}

	app.use(
		VueGtag,
		{
			config: { id: appConfig.googleAnalyticsTag },
		},
		router,
	);
}
