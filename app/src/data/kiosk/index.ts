import type { ICategoriesKiosk, ICategoriesKiosk3 } from '@/@types/data';

import trailsNoneSmallCellLungCancer from './nonSmallCellLungCancer';
import trailsMelanoma from './trailsMelanoma';
import trailsNonMelanoma from './nonMelanoma';
import trailsMelanoma3 from './melanoma';
import trailsNsclc from './nsclc';
import trialsGenitourinaryCancer from './genitourinaryCancer';
import trialsOvarianCancer from './ovarianCancer';
import trialsMultipleTumors from './multipleTumors';
import trialsMyeloma from './myeloma';
import trialsLymphoma from './lymphoma';

const nsclc = {
	id: 'nsclc',
	title: 'titles.categories.nsclc',
	categories: [{ id: 'nsclc', trials: 0 }],
	icon: 'lung-icon-dark',
	data: trailsNsclc,
};

const nonMelanoma = {
	id: 'non-melanoma',
	title: 'titles.categories.non-melanoma',
	categories: [{ id: 'non-melanoma', trials: 0 }],
	icon: 'hand-glass-dark',
	data: trailsNonMelanoma,
	trialIds: ['bcc', 'cscc'],
};

const melanoma = {
	id: 'melanoma',
	title: 'titles.categories.melanoma',
	categories: [{ id: 'melanoma', trials: 0 }],
	icon: 'hand-glass-dark',
	data: trailsMelanoma3,
};

const genitourinaryCancer = {
	id: 'genitourinary',
	title: 'titles.categories.genitourinary',
	categories: [{ id: 'genitourinary', trials: 0 }],
	icon: 'prostate-dark',
	data: trialsGenitourinaryCancer,
};

const ovarian = {
	id: 'ovarian',
	title: 'titles.categories.ovarian',
	categories: [{ id: 'ovarian', trials: 0 }],
	icon: 'gynecologic-dark',
	data: trialsOvarianCancer,
};

const multipleTumors = {
	id: 'multiple-tumors',
	title: 'titles.categories.multiple-tumors',
	categories: [{ id: 'multiple-tumors', trials: 0 }],
	icon: 'multiple-tumors-dark',
	data: trialsMultipleTumors,
};

const myeloma = {
	id: 'myeloma',
	title: 'titles.categories.myeloma',
	categories: [{ id: 'myeloma', trials: 0 }],
	icon: 'myeloma-dark',
	data: trialsMyeloma,
};

const lymphoma = {
	id: 'lymphoma',
	title: 'titles.categories.lymphoma',
	categories: [{ id: 'lymphoma', trials: 0 }],
	icon: 'lymphoma-dark',
	data: trialsLymphoma,
};

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
	{
		kiosk: 'kiosk3',
		categories: [
			{
				id: 'solid-tumors',
				title: 'Solid Tumors',
				icon: 'bubble-cloud',
				categories: [
					nonMelanoma,
					melanoma,
					nsclc,
					genitourinaryCancer,
					ovarian,
					multipleTumors,
				],
			},
			{
				id: 'hematology',
				title: 'Hematology',
				icon: 'hematology',
				categories: [myeloma, lymphoma],
			},
		],
	},
];
