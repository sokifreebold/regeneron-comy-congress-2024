// Main data file for trial cards
import type { ICategories } from '@/@types/data';
import lymphomaTrials from './trials/lymphoma';
import myelomaTrials from './trials/myeloma';
import classicalHematologyTrials from './trials/classicalHematology';
import solidTumorTrials from './trials/solidTumor';

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
