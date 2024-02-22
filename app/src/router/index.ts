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

// trackRouter(router); - imp
export default router;
