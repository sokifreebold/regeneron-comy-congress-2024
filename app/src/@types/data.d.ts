export interface ICategories {
	id: string;
	trials?: number;
}

type trialLink = 'pdfCard' | 'external' | 'qrCode';

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
	images?: string[];
	recruiting?: boolean;
	labels?: ITrialsLabels;
}

export interface ITrialsRecords {
	trials: ITrials[];
	id?: string;
	title?: string;
}
