import type { ICategories } from '@/@types/data';
import lymphomaTrials from './lymphomaTrials';
import myleomaTrials from './myleomaTrials';
import classicalHematologyTrials from './classicalHematologyTrials';
import solidTumorTrials from './solidTumorTrials';

export const categories: ICategories[] = [
	{ id: 'lymphoma', trials: 11 },
	{ id: 'myleoma', trials: 6 },
	{ id: 'classical-hematology', trials: 6 },
	{ id: 'solid-tumor', trials: 21 },
];

export const trialsData = {
	lymphoma: lymphomaTrials,
	myleoma: myleomaTrials,
	'classical-hematology': classicalHematologyTrials,
	'solid-tumor': solidTumorTrials,
};
