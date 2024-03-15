interface IGoogleAnalytics {
	microsite: string;
	kiosk1: string;
	kiosk2: string;
	kiosk3: string;
}

interface IAppConfig {
	googleAnalytics: IGoogleAnalytics;
}

const appConfig: IAppConfig = {
	googleAnalytics: {
		microsite: 'G-5PFE6XXW1Q',
		kiosk1: '',
		kiosk2: '',
		kiosk3: '',
	},
};
export default appConfig;
