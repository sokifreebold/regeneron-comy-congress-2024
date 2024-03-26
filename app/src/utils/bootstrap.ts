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
	const { googleAnalytics } = appConfig;
	if (!googleAnalytics) {
		return;
	}

	let tag;
	try {
		if (googleAnalytics[version]) {
			tag = googleAnalytics[version];
		}
	} catch (err) {
		console.warn(err);
	}

	if (!tag) {
		console.log(`[LOG]: No GA Tag found for version ${version}`);
		return;
	}

	console.log(`[LOG GA]: Using GA Tag --tag=${tag} --version=${version}`);
	app.use(
		VueGtag,
		{
			config: { id: tag },
		},
		router,
	);
}
