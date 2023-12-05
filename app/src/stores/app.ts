import { defineStore } from 'pinia';

export const useAppStore = defineStore('appStore', {
	state: () => ({
		externalLink: '',
		externalLinkId: '',
		popup: '',
	}),
	getters: {
		get_externalLink: (state) => state.externalLink,
		get_externalLinkId: (state) => state.externalLinkId,
		get_popup: (state) => state.popup,
	},
	actions: {
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
