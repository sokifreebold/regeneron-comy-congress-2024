import type { ICategoriesKiosk } from '@/@types/data';

import trailsNoneSmallCellLungCancer from './kiosk1/nonSmallCellLungCancer';
import trailsMelanoma from './kiosk1/trailsMelanoma';

import trialsMopcd from './kiosk2/mopcd';
import trialsLymphoma2 from './kiosk2/lymphoma';

import trailsNonMelanoma from './kiosk3/nonMelanoma';
import trailsMelanoma3 from './kiosk3/melanoma';
import trailsNsclc from './kiosk3/nsclc';
import trialsGenitourinaryCancer from './kiosk3/genitourinaryCancer';
import trialsOvarianCancer from './kiosk3/ovarianCancer';
import trialsMultipleTumors from './kiosk3/multipleTumors';
import trialsMyeloma from './kiosk3/myeloma';
import trialsLymphoma from './kiosk3/lymphoma';

const nonMelanoma = {
	id: 'non-melanoma',
	title: 'titles.categories.non-melanoma',
	icon: 'hand-glass-dark',
	data: trailsNonMelanoma,
	multipleDse: [
		{
			id: 'bcc',
			dse: 'REG1123083_AACR_BCC_Interactive_Kiosk_R8',
		},
		{
			id: 'cscc',
			dse: 'REG1123083_AACR_CSCC_Interactive_Kiosk_R8',
		},
	],
};

const melanoma = {
	id: 'melanoma',
	title: 'titles.categories.melanoma',
	icon: 'hand-glass-dark',
	data: trailsMelanoma3,
	dse: 'REG1123079_Melanoma_AACR_Kiosk_R9',
};

const nsclc = {
	id: 'nsclc',
	title: 'titles.categories.nsclc',
	icon: 'lung-icon-dark',
	data: trailsNsclc,
	dse: 'REG1123083_AACR_NSCLC_Interactive_Kiosk_R7',
};

const genitourinaryCancer = {
	id: 'genitourinary',
	title: 'titles.categories.genitourinary',
	icon: 'prostate-dark',
	data: trialsGenitourinaryCancer,
	dse: 'REG1123083_AACR_PROSTATE_Interactive_Kiosk_R7',
};

const ovarian = {
	id: 'ovarian',
	title: 'titles.categories.ovarian',
	icon: 'gynecologic-dark',
	data: trialsOvarianCancer,
	dse: 'REG1123083_AACR_OVARIAN_Interactive_Kiosk_R6',
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
	dse: 'REG1123083_AACR_MM_Interactive_Kiosk_R10',
};

const lymphoma = {
	id: 'lymphoma',
	title: 'titles.categories.lymphoma',
	icon: 'lymphoma-dark',
	data: trialsLymphoma,
	dse: 'REG1123083_AACR_NHL_Interactive_Kiosk_R10',
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
						data: trailsNoneSmallCellLungCancer,
					},
					{
						id: 'nsclc-disease-state-education',
						trials: 6,
						dse: 'REG1123083_AACR_NSCLC_Interactive_Kiosk_R7',
					},
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
						data: trailsMelanoma,
					},
					{
						id: 'melanoma-disease-state-education',
						trials: 3,
						dse: 'REG1123079_Melanoma_AACR_Kiosk_R9',
					},
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
						data: trialsMopcd,
					},
					{
						id: 'mopcd-disease-state-education',
						trials: 6,
						dse: 'REG1123083_AACR_MM_Interactive_Kiosk_R10',
					},
				],
				icon: 'myeloma-whi',
			},
			{
				id: 'lymphoma',
				title: 'Lymphoma',
				categories: [
					{
						id: 'lymphoma-clinical-trial-information',
						trials: 3,
						data: trialsLymphoma2,
					},
					{
						id: 'lymphoma-disease-state-education',
						trials: 3,
						dse: 'REG1123083_AACR_NHL_Interactive_Kiosk_R10',
					},
				],
				icon: 'lymphoma-whi',
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
