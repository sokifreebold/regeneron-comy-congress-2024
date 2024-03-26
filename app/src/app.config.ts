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
		kiosk1: 'G-8L1ERGJGFL',
		kiosk2: 'G-63CCXP41V4',
		kiosk3: 'G-95NKFK2BH8',
	},
};
export default appConfig;
