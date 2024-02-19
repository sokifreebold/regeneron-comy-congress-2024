import { createApp } from 'vue';
import { createPinia } from 'pinia';

// IMP: Please include the tag before deploying for production, important for analytics
// import VueGtag from 'vue-gtag';

import App from './App.vue';
import router from './router';
import i18n from './content';

import './scss/core.scss';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);

// IMP: Please include the tag before deploying for production, important for analytics
// TODO: Change to Config
// app.use(
// 	VueGtag,
// 	{
// 		config: { id: 'G-DB0JMEGR0Q' },
// 	},
// 	router,
// );

// Components
import components from './components';
components(app).then(() => {
	app.mount('#app');
});
