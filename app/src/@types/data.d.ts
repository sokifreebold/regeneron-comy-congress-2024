export interface ICategories {
	id: string;
	trials?: number;
	learnMore?: boolean;
	data?: ITrialsRecords[];
	icon?: string;
	title?: string;
	trialIds?: string[];
}

export interface ICategoriesRecords {
	id: string;
	title?: string;
	categories: ICategories[];
	icon?: string;
}

export interface ICategoriesKiosk {
	kiosk: string;
	categories: ICategoriesRecords[];
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
