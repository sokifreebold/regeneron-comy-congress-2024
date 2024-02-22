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

// Analytics
import { initialiseGoogleAnalytics } from './utils/bootstrap';
initialiseGoogleAnalytics(app, router);

// Components
import components from './components';
components(app).then(() => {
	app.mount('#app');
});
