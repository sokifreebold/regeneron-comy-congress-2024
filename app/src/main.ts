import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueGtag from 'vue-gtag';

import App from './App.vue';
import router from './router';
import i18n from './content';

import './scss/core.scss';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);

app.use(
	VueGtag,
	{
		config: { id: 'G-DB0JMEGR0Q' },
	},
	router,
);

app.mount('#app');
