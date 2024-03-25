import { useAppStore } from '@/stores/app';
import { createRouter, createWebHashHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';

import MicrositeTrialView from '../views/microsite/MicrositeTrialView.vue';
import KioskTrialView from '@/views/kiosk/KioskTrialView.vue';

import KioskQRCode from '@/views/kiosk/KioskQRCode.vue';
import KioskPdfImages from '@/views/kiosk/KioskPdfImages.vue';
import KioskDseView from '@/views/kiosk/KioskDseView.vue';

import PdfView from '../views/PdfView.vue';
import NotFound from '../views/NotFound.vue';

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/:overlayId?',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/trials/:trialId/:nct?/:viewId?',
			name: 'trials',
			component: MicrositeTrialView,
		},
		{
			path: '/trials/:trialId/:nct',
			name: 'trial-card',
			component: PdfView,
		},
		{
			path: '/panels/trials/:parentId/:trialId',
			name: 'panels-trials',
			component: KioskTrialView,
		},
		{
			path: '/panels/:parentId/trials/:trialId/:nct',
			name: 'panels-trial-card',
			component: KioskPdfImages,
		},
		{
			path: '/panels/:parentId/trials/:trialId/:nct/external',
			name: 'panels-trial-card-external',
			component: KioskQRCode,
		},
		{
			path: '/panels/dse/:parentId/:trialId/:dseId',
			name: 'panels-dse',
			component: KioskDseView,
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'not-found',
			component: NotFound,
		},
	],
});

// Route guard
router.beforeEach((to: any, from, next) => {
	const obj = {
		event: 'pageview',
		pageId: to.name,
		pagePath: to.fullPath,
	};

	const { query } = to;
	if (query && ['kiosk1', 'kiosk2', 'kiosk3'].includes(query.mode)) {
		const store = useAppStore();
		store.axn_updateVersion(query.mode);
	}

	// Offline tracking
	if (
		(window as any).electronAPI &&
		typeof (window as any).electronAPI.appendToCSV === 'function'
	) {
		(window as any).electronAPI.appendToCSV(obj);
	}
	next();
});

export default router;
