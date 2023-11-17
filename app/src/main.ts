import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import i18n from './content';

import './scss/core.scss';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);

// Components
app.mount('#app');
// import components from './components';
// components(app).then(() => {
// 	app.mount('#app');
// });
