import type { ICategories } from '@/@types/data';
import lymphomaTrials from './lymphomaTrials';
import myelomaTrials from './myelomaTrials';
import classicalHematologyTrials from './classicalHematologyTrials';
import solidTumorTrials from './solidTumorTrials';

export const categories: ICategories[] = [
	{ id: 'lymphoma', trials: 9 },
	{ id: 'myeloma', trials: 6 },
	{ id: 'classical-hematology', trials: 6 },
	{ id: 'solid-tumor', trials: 20 },
];

export const trialsData = {
	lymphoma: lymphomaTrials,
	myeloma: myelomaTrials,
	'classical-hematology': classicalHematologyTrials,
	'solid-tumor': solidTumorTrials,
};
