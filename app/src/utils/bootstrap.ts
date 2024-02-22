import VueGtag from 'vue-gtag';
import appConfig from '@/app.config';
import type { App } from 'vue';
import type { Router } from 'vue-router';

export function initialiseGoogleAnalytics(app: App<Element>, router: Router) {
	if (!appConfig.googleAnalyticsTag) {
		return;
	}

	app.use(
		VueGtag,
		{
			config: { id: 'G-DB0JMEGR0Q' },
		},
		router,
	);
}
