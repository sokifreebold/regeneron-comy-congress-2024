import { defineStore } from 'pinia';

export const useAppStore = defineStore('appStore', {
	state: () => ({
		externalLink: 'http;//google.com',
	}),
	getters: {
		get_externalLink: (state) => state.externalLink,
	},
	actions: {
		axn_updateExternalLink(value: string) {
			this.externalLink = value;
		},
	},
});
