import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TrialView from '../views/TrialView.vue';

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/trials/:trialId',
			name: 'trials',
			component: TrialView,
		},
	],
});
export default router;
