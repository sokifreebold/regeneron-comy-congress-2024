export interface ICategories {
	id: string;
	trials: number;
}

type trialLink = 'card' | 'external';

export interface ITrials {
	id: string;
	categoryId: string;
	type?: trialLink;
	phase?: number;
	phaseMobile?: string;
	nonInterventional?: boolean;
	externalLink?: string;
	nct?: string;
	trialCardPdf?: string;
}

export interface ITrialsRecords {
	trials: ITrials[];
	id?: string;
}
