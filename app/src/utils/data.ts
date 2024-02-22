import type { ITrials, ITrialsRecords } from '@/@types/data';
import { categories, trialsData } from '@/data/microsite';

export function getHomeCategories() {
	return categories;
}

export function getTrialData(trial: string): ITrialsRecords[] {
	if (!trialsData[trial]) {
		return [];
	}

	return trialsData[trial];
}

export function getTrialDatum(trial: string, nct: string): ITrials | null {
	if (!trialsData[trial]) {
		return null;
	}

	try {
		const data = trialsData[trial].map((_: ITrialsRecords) => _.trials).flat();
		return data.find((_: ITrials) => _.nct === nct);
	} catch (err) {
		console.error(err);
		return null;
	}
}
