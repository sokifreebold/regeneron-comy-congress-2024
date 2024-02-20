import type { ITrialsRecords } from '@/@types/data';

const datum: ITrialsRecords[] = [
	{
		id: 'non-melanoma',
		title: 'Non-melanoma Skin Cancer',
		trials: [
			{
				id: 'solid-tumor-non-melanoma-1',
				type: 'pdfCard',
				phase: 3,
				nct: 'NCTXXX01',
				trialCardPdf: '',
				recruiting: true,
				labels: {
					title: 'Adjuvant Cemiplimab <span class="ui-one-word">(PD-1 monoclonal)</span>',
					aside: 'High-risk cutaneous squamous cell carcinoma',
				},
			},
			{
				id: 'solid-tumor-non-melanoma-2',
				type: 'external',
				phase: 2,
				nct: 'NCTXXX02',
				externalLink: 'https://clinicaltrials.gov/study/NCT04154943',
				labels: {
					title: 'Cemiplimab <span class="ui-one-word">(PD-1 monoclonal)</span>',
					aside: 'Stage II to IV cutaneous squamous cell carcinoma',
				},
			},
			{
				id: 'solid-tumor-non-melanoma-3',
				type: 'external',
				phase: 1,
				nct: 'NCTXXX03',
				externalLink: 'https://clinicaltrials.gov/study/NCT04154943',
				recruiting: true,
				labels: {
					title: 'Cemiplimab <span class="ui-one-word">(PD-1 monoclonal)</span>',
					aside: 'Cutaneous squamous or basal cell carcinomas',
				},
			},
			{
				id: 'solid-tumor-non-melanoma-4',
				type: 'external',
				nonInterventional: true,
				nct: 'NCTXXX04',
				externalLink: 'https://clinicaltrials.gov/study/NCT04154943',
				labels: {
					title: '<strong>CASE</strong> Cemiplimab <span class="ui-one-word">(PD-1 monoclonal)</span>',
					aside: 'locally advanced or metastatic cutaneous squamous or basal cell carcinomas',
				},
			},
		],
	},
	{
		id: 'melanoma',
		title: 'Melanoma',
		trials: [],
	},
	{
		id: 'non-small-cell-lung-cancer',
		title: 'Non-small cell lung cancer (NSCLC)',
		trials: [],
	},
	{
		id: 'prostate-cancer',
		title: 'Prostate Cancer',
		trials: [],
	},
	{
		id: 'ovarian-cancer',
		title: 'Ovarian Cancer',
		trials: [],
	},
	{
		id: 'multiple-tumors',
		title: 'Multiple Tumors',
		trials: [],
	},
];
export default datum;
