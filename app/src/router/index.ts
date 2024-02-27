import { useAppStore } from '@/stores/app';
import { createRouter, createWebHashHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import TrialView from '../views/TrialView.vue';
import PdfView from '../views/PdfView.vue';
import NotFound from '../views/NotFound.vue';

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/trials/:trialId/:nct?/:viewId?',
			name: 'trials',
			component: TrialView,
		},
		{
			path: '/trials/:trialId/:nct',
			name: 'trial-card',
			component: PdfView,
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
		pageId: to.name,
		pagePath: to.fullPath,
	};

	const { query } = to;
	if (query && query.mode === 'kiosk') {
		const store = useAppStore();
		store.axn_updateVersion('kiosk');
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
