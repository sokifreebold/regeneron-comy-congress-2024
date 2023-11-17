import type { ICategories } from '@/@types/data';
import lymphomaTrials from './lymphomaTrials';

export const categories: ICategories[] = [
	{ id: 'lymphoma', trials: 11 },
	{ id: 'myleoma', trials: 6 },
	{ id: 'classical-hematology', trials: 6 },
	{ id: 'solid-tumor', trials: 21 },
];

export const trialsData = {
	lymphoma: lymphomaTrials,
	myleoma: [],
	'classical-hematology': [],
	'solid-tumor': [],
};
