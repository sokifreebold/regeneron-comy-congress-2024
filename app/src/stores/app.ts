import { defineStore } from 'pinia';
import { version } from '@/version.config';

// type linkType = Omit<trialLink, 'pdfCard'>;

export const useAppStore = defineStore('appStore', {
	state: () => ({
		version: version || 'microsite',
		externalLink: '',
		externalLinkId: '',
		linkType: undefined,
		popup: '',
	}),
	getters: {
		get_version: (state) => state.version,
		get_externalLink: (state) => state.externalLink,
		get_externalLinkId: (state) => state.externalLinkId,
		get_externalLinkType: (state) => state.linkType,
		get_popup: (state) => state.popup,
	},
	actions: {
		axn_updateVersion(value: string) {
			this.version = value;
		},
		axn_updateExternalLink(value: string) {
			this.externalLink = value;
		},
		axn_updateExternalLinkId(value: string) {
			this.externalLinkId = value;
		},
		axn_updatePopup(value: string) {
			this.popup = value;
		},
	},
});
