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
				type: 'pdfCard',
				phase: 2,
				nct: 'NCTXXX02',
				externalLink: 'https://clinicaltrials.gov/study/NCT04154943',
				labels: {
					title: 'Cemiplimab <span class="ui-one-word">(PD-1 monoclonal)</span>',
					aside: 'Stage II to IV cutaneous squamous cell carcinoma',
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
