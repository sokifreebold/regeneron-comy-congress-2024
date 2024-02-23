import type { ITrialsRecords } from '@/@types/data';

const datum: ITrialsRecords[] = [
	{
		id: 'trails-cutaneous-squamous-cell-carcinoma',
		title: 'Cutaneous Squamous Cell Carcinoma (CSCC)',
		trials: [
			{
				id: 'cutaneous-squamous-cell-carcinoma-1',
				type: 'pdfCard',
				phase: 3,
				nct: 'NCT03969004',
				trialCardPdf: 'NCT03969004 (C-POST)_R15_CEM-EM-0030_844REGN-MID',
				recruiting: true,
				labels: {
					title: 'Adjuvant Cemiplimab <span class="ui-one-word">(PD-1 antibody))</span>',
					aside: 'High-risk cutaneous squamous cell carcinoma',
				},
			},
			{
				id: 'cutaneous-squamous-cell-carcinoma-2',
				type: 'external',
				phase: 1,
				nct: 'NCT04154943',
				recruiting: false,
				externalLink: 'https://clinicaltrials.gov/study/NCT04154943',
				labels: {
					title: 'Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span>',
					aside: 'Stage II to IV cutaneous squamous cell carcinoma',
				},
			},
			{
				id: 'cutaneous-squamous-cell-carcinoma-3',
				type: 'external',
				phase: 1,
				nct: 'NCT04626635',
				recruiting: true,
				externalLink: 'https://clinicaltrials.gov/study/NCT04626635',
				labels: {
					title: 'REGN7075 <span class="ui-one-word">(EGFRxCD28 bispecific)</span> + Cemiplimab <span class="ui-one-word">(PD-1 monoclonal)</span>',
					aside: 'Advanced solid tumors',
				},
			},
			{
				id: 'cutaneous-squamous-cell-carcinoma-4',
				type: 'pdfCard',
				phase: 2,
				nct: 'NCT04916002',
				recruiting: false,
				externalLink: 'NCT04916002_R20_VIDU-EM-0001_844REGN-MID',
				labels: {
					title: 'Vidutolimod <span class="ui-one-word">(TLR9 agonist)</span> + Cemiplimab <span class="ui-one-word">(PD-1 monoclonal)</span>',
					aside: 'Advanced/metastatic tumors',
				},
			},
			{
				id: 'cutaneous-squamous-cell-carcinoma-5',
				type: 'external',
				phase: 1,
				nct: 'NCT03889912',
				recruiting: true,
				externalLink: 'https://clinicaltrials.gov/study/NCT03889912',
				labels: {
					title: 'Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span>',
					aside: 'Cutaneous squamous or basal cell carcinomas',
				},
			},
			{
				id: 'cutaneous-squamous-cell-carcinoma-6',
				type: 'pdfCard',
				nonInterventional: true,
				nct: 'NCT03836105',
				trialCardPdf: 'https://clinicaltrials.gov/study/NCT03836105',
				labels: {
					title: '<strong>CASE</strong> Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span>',
					aside: 'Locally advanced or metastatic cutaneous squamous or basal cell carcinomas',
				},
			},
		]
	},
];
export default datum;
