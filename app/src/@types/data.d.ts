export interface ICategories {
	id: string;
	trials?: number;
	learnMore?: boolean
}

export interface ICategoriesRecords{
	id: string;
	mobileTitleKey: string;
	desktopTitleKey: string;
	categories: ICategories[];
	icon?: string;
}

export interface ILandingPageCategoryGroup{
	id: string;
	title: string;
	icon: string;
	trials: ICategoryRecords[];
}

type trialLink = 'pdfCard' | 'external' | 'qrCode' | 'images';

export interface ITrialsLabels {
	title?: string;
	aside?: string;
}

export interface ITrials {
	id: string;
	type?: trialLink;
	phase?: number;
	phaseMobile?: string;
	nonInterventional?: boolean;
	externalLink?: string;
	nct?: string;
	trialCardPdf?: string;
	trialCardImages?: string[];
	recruiting?: boolean;
	labels?: ITrialsLabels;
	qrCode?: string;
}

export interface ITrialsRecords {
	trials: ITrials[];
	id?: string;
	title?: string;
}
