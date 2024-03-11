import { computed } from 'vue';
import { useAppStore } from '@/stores/app';
import type { ITrials, ITrialsRecords } from '@/@types/data';
import { categories, trialsData } from '@/data/microsite';
import { categoriesKiosk, trialsDataKiosk } from '@/data/kiosk';

export function getHomeCategories() {
	return categories;
} 

export function getTrialData(trial: string): ITrialsRecords[] {
	const store = useAppStore();
	const version = computed(() => store.get_version);

	const datum = version.value === 'kiosk' ? trialsDataKiosk : trialsData;
	if (!datum[trial]) {
		return [];
	}

	return datum[trial];
}

export function getTrialDatum(trial: string, nct: string): ITrials | null {
	const store = useAppStore();
	const version = computed(() => store.get_version);

	const datum = version.value === 'kiosk' ? trialsDataKiosk : trialsData;
	if (!datum[trial]) {
		return null;
	}

	try {
		const data = datum[trial].map((_: ITrialsRecords) => _.trials).flat();
		return data.find((_: ITrials) => _.nct === nct);
	} catch (err) {
		console.error(err);
		return null;
	}
}

// Kiosk Data
export function getKioskHomeCategories() {
	return categoriesKiosk;
}
