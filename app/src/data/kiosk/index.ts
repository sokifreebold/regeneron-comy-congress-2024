import type { ICategoriesKiosk } from '@/@types/data';

import trailsNoneSmallCellLungCancer from './nonSmallCellLungCancer';
import trailsMelanoma from './trailsMelanoma';
import trailsNonMelanoma from './kiosk3/nonMelanoma';
import trailsMelanoma3 from './kiosk3/melanoma';
import trailsNsclc from './kiosk3/nsclc';
import trialsGenitourinaryCancer from './kiosk3/genitourinaryCancer';
import trialsOvarianCancer from './kiosk3/ovarianCancer';
import trialsMultipleTumors from './kiosk3/multipleTumors';
import trialsMyeloma from './kiosk3/myeloma';
import trialsLymphoma from './kiosk3/lymphoma';
import trialsMopcd from './kiosk2/mopcd';
import trialsLymphoma2 from './kiosk2/lymphoma';

const nsclc = {
	id: 'nsclc',
	title: 'titles.categories.nsclc',
	icon: 'lung-icon-dark',
	data: trailsNsclc,
};

const nonMelanoma = {
	id: 'non-melanoma',
	title: 'titles.categories.non-melanoma',
	icon: 'hand-glass-dark',
	data: trailsNonMelanoma,
	trialIds: ['bcc', 'cscc'],
};

const melanoma = {
	id: 'melanoma',
	title: 'titles.categories.melanoma',
	icon: 'hand-glass-dark',
	data: trailsMelanoma3,
};

const genitourinaryCancer = {
	id: 'genitourinary',
	title: 'titles.categories.genitourinary',
	icon: 'prostate-dark',
	data: trialsGenitourinaryCancer,
};

const ovarian = {
	id: 'ovarian',
	title: 'titles.categories.ovarian',
	icon: 'gynecologic-dark',
	data: trialsOvarianCancer,
};

const multipleTumors = {
	id: 'multiple-tumors',
	title: 'titles.categories.multiple-tumors',
	icon: 'multiple-tumors-dark',
	data: trialsMultipleTumors,
};

const myeloma = {
	id: 'myeloma',
	title: 'titles.categories.myeloma',
	icon: 'myeloma-dark',
	data: trialsMyeloma,
};

const lymphoma = {
	id: 'lymphoma',
	title: 'titles.categories.lymphoma',
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
					{
						id: 'mopcd-clinical-trial-information',
						trials: 4,
						learnMore: true,
						data: trialsMopcd,
					},
					{ id: 'mopcd-disease-state-education', trials: 6 },
				],
				icon: 'myeloma-dark',
			},
			{
				id: 'lymphoma',
				title: 'Lymphoma',
				categories: [
					{
						id: 'lymphoma-clinical-trial-information',
						trials: 3,
						learnMore: true,
						data: trialsLymphoma2,
					},
					{ id: 'lymphoma-disease-state-education', trials: 3 },
				],
				icon: 'lymphoma-dark',
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
