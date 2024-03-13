import type { ICategoriesKiosk, ICategoriesKiosk3 } from '@/@types/data';

import trailsNoneSmallCellLungCancer from './nonSmallCellLungCancer';
import trailsMelanoma from './trailsMelanoma';

export const categoriesKiosk: ICategoriesKiosk[] = [
	{
		kiosk: 'kiosk1',
		categories: [
			{
				id: 'nsclc',
				title: 'Non-Small cell lung cancer (NSCLC)',
				categories: [
					{
						id: 'nsclc-clinical-trial-information',
						trials: 4,
						learnMore: true,
						data: trailsNoneSmallCellLungCancer,
					},
					{ id: 'nsclc-disease-state-education', trials: 6 },
				],
				icon: 'lung-icon',
			},
			{
				id: 'melanoma',
				title: 'Melanoma',
				categories: [
					{
						id: 'melanoma-clinical-trial-information',
						trials: 3,
						learnMore: true,
						data: trailsMelanoma,
					},
					{ id: 'melanoma-disease-state-education', trials: 3 },
				],
				icon: 'hand-glass',
			},
		],
	},
	{
		kiosk: 'kiosk2',
		categories: [
			{
				id: 'mopcd',
				title: 'Myeloma and other plasma cell dyscrasias',
				categories: [
					{ id: 'mopcd-clinical-trial-information', trials: 4, learnMore: true },
					{ id: 'mopcd-disease-state-education', trials: 6 },
				],
				icon: 'lung-icon',
			},
			{
				id: 'lymphoma',
				title: 'Lymphoma',
				categories: [
					{ id: 'lymphoma-clinical-trial-information', trials: 3, learnMore: true },
					{ id: 'lymphoma-disease-state-education', trials: 3 },
				],
				icon: 'hand-glass',
			},
		],
	},
];


// TODO Move to kiosk 3 when available
const nsclc = { id: 'nsclc', mobileTitleKey: 'titles.categories.nsclc', desktopTitleKey: 'titles.categories.nsclc', categories: [ 
	{ id: 'nsclc-clinical-trial-information', trials: 4, learnMore: true },
	{ id: 'nsclc-disease-state-education', trials: 6 },
],
icon: 'lung-icon-dark'};

const melanoma = { id: 'melanoma', mobileTitleKey: 'titles.categories.melanoma', desktopTitleKey: 'titles.categories.melanoma', categories: [
	{ id: 'melanoma-clinical-trial-information', trials: 3, learnMore: true },
	{ id: 'melanoma-disease-state-education', trials: 3},
],
icon: 'hand-glass-dark'};


export const kiosk3Categories: ICategoriesKiosk3[] = [
	{id: 'solid-tumors', title: 'Solid Tumors', icon: 'bubble-cloud', trials: [
		melanoma, nsclc
		// TODO create the rest of the trials data
	]}
];