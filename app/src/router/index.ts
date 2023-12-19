import { createRouter, createWebHashHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import TrialView from '../views/TrialView.vue';
import PdfView from '../views/PdfView.vue';
import NotFound from '../views/NotFound.vue';
import { changeToSentenceCase } from '../utils';

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
			meta: { title: 'Regeneron ASH 2023 - Our Pipeline' },
		},
		{
			path: '/trials/:trialId/:nct?/:viewId?',
			name: 'trials',
			component: TrialView,
		},
		{
			path: '/trials/:trialId/:id',
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

// Router guard to change the page tile dynamically
router.beforeEach((to: any, from, next) => {
	let title = to.meta.title || 'Regeneron ASH 2023';

	try {
		const trialId = to.params.trialId;
		if (trialId) {
			const trialIdSentenceCase = changeToSentenceCase(trialId);
			if (to.name === 'trials') {
				title = `${title} - ${trialIdSentenceCase}`;
			}

			if (to.name === 'trial-card') {
				title = `${title} - ${trialIdSentenceCase}, ${to.params.id}`;
			}
		}
	} catch (err) {
		console.warn(err);
	}
	document.title = title;
	next();
});

// trackRouter(router);
export default router;
