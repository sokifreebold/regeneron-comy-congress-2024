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
	nonInterventional?: boolean;
	externalLink?: string;
}

export interface ITrialsRecords {
	trials: ITrials[];
	id?: string;
}
