// Main index file for internalisation plugin
// Content in ./messages.ts file

import { createI18n } from 'vue-i18n';
import messages from './messages';

export default createI18n({
	locale: 'en',
	fallbackLocale: 'en',
	messages,
});
