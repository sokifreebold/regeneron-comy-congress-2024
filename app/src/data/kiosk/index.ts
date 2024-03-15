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

const nsclc = { id: 'nsclc', mobileTitleKey: 'titles.categories.nsclc', desktopTitleKey: 'titles.categories.nsclc', categories: [],
icon: 'lung-icon-dark'};

const nonMelanoma = { id: 'non-melanoma', mobileTitleKey: 'titles.categories.non-melanoma', desktopTitleKey: 'titles.categories.non-melanoma', categories: [],
icon: 'hand-glass-dark'};

const melanoma = { id: 'melanoma', mobileTitleKey: 'titles.categories.melanoma', desktopTitleKey: 'titles.categories.melanoma', categories: [],
icon: 'hand-glass-dark'};

const genitourinaryCancer = { id: 'genitourinary', mobileTitleKey: 'titles.categories.genitourinary', desktopTitleKey: 'titles.categories.genitourinary', categories: [],
icon: 'prostate-dark'};

const ovarian = { id: 'ovarian', mobileTitleKey: 'titles.categories.ovarian', desktopTitleKey: 'titles.categories.ovarian', categories: [],
icon: 'gynecologic-dark'};

const multipleTumors = { id: 'multiple-tumors', mobileTitleKey: 'titles.categories.multiple-tumors', desktopTitleKey: 'titles.categories.multiple-tumors', categories: [],
icon: 'multiple-tumors-dark'};

const myeloma = { id: 'myeloma', mobileTitleKey: 'titles.categories.myeloma', desktopTitleKey: 'titles.categories.myeloma', categories: [],
icon: 'myeloma-dark'};

const lymphoma = { id: 'lymphoma', mobileTitleKey: 'titles.categories.lymphoma', desktopTitleKey: 'titles.categories.lymphoma', categories: [],
icon: 'lymphoma-dark'};

export const kiosk3Categories: ICategoriesKiosk3[] = [
	{id: 'solid-tumors', title: 'Solid Tumors', icon: 'bubble-cloud', trials: [
		nonMelanoma, melanoma, nsclc, genitourinaryCancer, ovarian, multipleTumors
	]},
	{id: 'hematology', title: 'Hematology', icon: 'bubble-cloud', trials: [
		myeloma, lymphoma
	]}
];