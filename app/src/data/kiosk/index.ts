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

export const kiosk3Categories: ICategoriesKiosk3[] = [
	{
		id: 'solid-tumors',
	},
	{
		id: 'hematology',
	},
];
