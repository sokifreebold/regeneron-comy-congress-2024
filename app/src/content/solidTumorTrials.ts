import type { ITrialsRecords } from '@/@types/data';
const datum: ITrialsRecords[] = [
	{
		id: 'skin-cancer',
		trials: [
			{
				id: 'pd-1-monoclonal-p3',
				categoryId: 'solid-tumor',
				type: 'card',
				phase: 3,
				nct: 'NCT03969004',
				trialCardPdf: 'NCT03969004 (C-POST)_R15_CEM-EM-0030_844REGN-MID (1)',
			},
			{
				id: 'pd-1-monoclonal-p2',
				categoryId: 'solid-tumor',
				type: 'external',
				phase: 2,
				nct: 'NCT04154943',
				externalLink: 'https://clinicaltrials.gov/study/NCT04154943',
			},
			{
				id: 'pd-1-monoclonal-p1',
				categoryId: 'solid-tumor',
				type: 'external',
				phase: 1,
				nct: 'NCT03889912',
				externalLink: 'https://clinicaltrials.gov/study/NCT03889912',
			},
		],
	},
	{
		id: 'lung-cancer',
		trials: [
			{
				id: 'solid-tumor-lung-cancer-01',
				categoryId: 'solid-tumor',
				type: 'card',
				phase: 3,
				nct: 'NCT05785767',
				trialCardPdf: 'NCT03916627_R19_CEM-EM-0029_844REGN-MID (1)',
			},
			{
				id: 'solid-tumor-lung-cancer-02',
				categoryId: 'solid-tumor',
				type: 'card',
				phase: 3,
				nct: 'NCT05800015',
				trialCardPdf: 'NCT05800015_R20_FIA-EM-0011_844REGN-MID (1)',
			},
			{
				id: 'solid-tumor-lung-cancer-03',
				categoryId: 'solid-tumor',
				type: 'external',
				phase: 3,
				nct: 'NCT03409614',
				externalLink: 'https://clinicaltrials.gov/study/NCT03409614',
			},
			{
				id: 'solid-tumor-lung-cancer-04',
				categoryId: 'solid-tumor',
				type: 'external',
				phase: 2,
				nct: 'NCT04077099',
				externalLink: 'https://clinicaltrials.gov/study/NCT04077099',
			},
			{
				id: 'solid-tumor-lung-cancer-05',
				categoryId: 'solid-tumor',
				type: 'card',
				phase: 2,
				nct: 'NCT04982224',
				trialCardPdf: 'NCT04982224_R18_ESMO_REGN5093-M114-EM-0003_844REGN-MID (1)',
			},
		],
	},
	{
		id: 'melanoma',
		trials: [
			{
				id: 'solid-tumor-melanoma-01',
				categoryId: 'solid-tumor',
				type: 'card',
				phase: 3,
				nct: 'NCT05352672',
				trialCardPdf: 'NCT05352672_R16_FIA-EM-0003_844REGN-MID (1)',
			},
			{
				id: 'solid-tumor-melanoma-02',
				categoryId: 'solid-tumor',
				type: 'card',
				phase: 3,
				nct: 'NCT05608291',
				trialCardPdf: 'NCT05608291_R16_FIA-EM-0009_844REGN-MID (1)',
			},
		],
	},
	{
		id: 'prostate',
		trials: [
			{
				id: 'solid-tumor-prostate-01',
				categoryId: 'solid-tumor',
				type: 'external',
				phase: 2,
				nct: 'NCT05125016',
				externalLink: 'https://clinicaltrials.gov/study/NCT05125016',
			},
			{
				id: 'solid-tumor-prostate-02',
				categoryId: 'solid-tumor',
				type: 'external',
				phase: 2,
				nct: 'NCT03972657',
				externalLink: 'https://clinicaltrials.gov/study/NCT03972657',
			},
		],
	},
	{
		id: 'ovarian',
		trials: [
			{
				id: 'solid-tumor-ovarian-01',
				categoryId: 'solid-tumor',
				type: 'card',
				phase: 2,
				nct: 'NCT03564340',
				trialCardPdf: 'NCT04590326_R18_REGN4018-EM-0003_844REGN-MID',
			},
			{
				id: 'solid-tumor-ovarian-02',
				categoryId: 'solid-tumor',
				type: 'card',
				phase: 2,
				nct: 'NCT04590326',
				trialCardPdf: 'NCT04590326_R18_REGN4018-EM-0003_844REGN-MID (1)',
			},
			{
				id: 'solid-tumor-ovarian-03',
				categoryId: 'solid-tumor',
				type: 'card',
				phase: 2,
				nct: 'NCT04590326',
				trialCardPdf: 'NCT04590326_R18_REGN4018-EM-0003_844REGN-MID (1)',
			},
		],
	},
	{
		id: 'multiple-tumors',
		trials: [
			{
				id: 'solid-tumor-multiple-tumors-01',
				categoryId: 'solid-tumor',
				type: 'external',
				phase: 2,
				nct: 'NCT04626635',
				externalLink: 'https://clinicaltrials.gov/study/NCT04626635',
			},
			{
				id: 'solid-tumor-multiple-tumors-02',
				categoryId: 'solid-tumor',
				type: 'card',
				phase: 2,
				nct: 'NCT04916002',
				trialCardPdf: 'NCT04916002_R20_VIDU-EM-0001_844REGN-MID (1)',
			},
			{
				id: 'solid-tumor-multiple-tumors-03',
				categoryId: 'solid-tumor',
				type: 'external',
				phase: 1,
				nct: 'NCT03005782',
				externalLink: 'https://clinicaltrials.gov/study/NCT03005782',
			},
			{
				id: 'solid-tumor-multiple-tumors-04',
				categoryId: 'solid-tumor',
				type: 'external',
				phase: 1,
				nct: 'NCT03233139',
				externalLink: 'https://clinicaltrials.gov/study/NCT03233139',
			},
			{
				id: 'solid-tumor-multiple-tumors-05',
				categoryId: 'solid-tumor',
				type: 'external',
				phase: 1,
				nct: 'NCT04465487',
				externalLink: 'https://clinicaltrials.gov/study/NCT04465487',
			},
			{
				id: 'solid-tumor-multiple-tumors-06',
				categoryId: 'solid-tumor',
				type: 'external',
				phase: 1,
				nct: 'NCT05259709',
				externalLink: 'https://clinicaltrials.gov/study/NCT05259709',
			},
		],
	},
];
export default datum;
