import { computed } from 'vue';
import { useAppStore } from '@/stores/app';
import type { ICategories, ICategoriesKiosk, ITrials, ITrialsRecords } from '@/@types/data';
import { categories, trialsData } from '@/data/microsite';
import { categoriesKiosk } from '@/data/kiosk';

export function getHomeCategories() {
	return categories;
}

export function getTrialData(trial: string, parentId?: string): ITrialsRecords[] {
	const store = useAppStore();
	const version = computed(() => store.get_version);
	if (version.value === 'microsite') {
		const datum = trialsData;
		return datum[trial] ?? [];
	}

	if (version.value.includes('kiosk')) {
		let datum: ITrialsRecords[] = [];
		const kioskCategories = getKioskHomeCategories();
		if (kioskCategories) {
			const parentCategory = kioskCategories.categories.find(
				(_: ICategories) => _.id === parentId,
			);

			if (parentCategory) {
				const childCategory = parentCategory.categories.find(
					(_: ICategories) => _.id === trial,
				);
				if (childCategory && childCategory.data) {
					datum = childCategory.data;
				}
			}
		}

		return datum ?? [];
	}

	return [];
}

export function getTrialDatum(trial: string, nct: string, parentId?: string): ITrials | null {
	const store = useAppStore();
	const version = computed(() => store.get_version);

	if (version.value === 'microsite') {
		const datum = trialsData;
		if (!datum[trial]) {
			return null;
		}
		const data = datum[trial].map((_: ITrialsRecords) => _.trials).flat();
		return data.find((_: ITrials) => _.nct === nct);
	}

	if (version.value.includes('kiosk')) {
		let datum: ITrialsRecords[] = [];
		const kioskCategories = getKioskHomeCategories();
		if (kioskCategories) {
			const parentCategory = kioskCategories.categories.find(
				(_: ICategories) => _.id === parentId,
			);

			if (parentCategory) {
				const childCategory = parentCategory.categories.find(
					(_: ICategories) => _.id === trial,
				);
				if (childCategory && childCategory.data) {
					datum = childCategory.data;
				}
			}
		}

		if (datum) {
			const data = datum.map((_: ITrialsRecords) => _.trials).flat();
			return data.find((_: ITrials) => _.nct === nct)!;
		}
	}

	return null;
}

// Kiosk Data
export function getKioskHomeCategories() {
	const store = useAppStore();
	const version = computed(() => store.get_version);
	const kioskRecords = categoriesKiosk.find((_: ICategoriesKiosk) => _.kiosk === version.value);
	return kioskRecords;
}
