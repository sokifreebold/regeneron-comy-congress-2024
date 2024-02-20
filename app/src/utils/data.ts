import type { ITrialsRecords } from '@/@types/data';
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
