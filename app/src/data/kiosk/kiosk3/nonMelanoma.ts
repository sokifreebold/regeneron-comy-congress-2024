import type { ITrialsRecords } from '@/@types/data';

const datum: ITrialsRecords[] = [
	{
		id: 'non-melanoma',
		trials: [
			{
				id: 'solid-tumor-non-melanoma-1',
				type: 'pdfCard',
				phase: 3,
				nct: 'NCT03969004',
				recruiting: true,
				trialCardImages: [
					'NCT03969004 (C-POST)_US-CEM-EM-24-03-0001_L1d_front',
					'NCT03969004 (C-POST)_US-CEM-EM-24-03-0001_L1d_back',
				],
				labels: {
					title: '<strong>C-POST</strong> Adjuvant Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span>',
					aside: 'High-risk cutaneous squamous cell carcinoma',
				},
			},
			{
				id: 'solid-tumor-non-melanoma-2',
				type: 'external',
				phase: 2,
				nct: 'NCT04154943',
				externalLink: 'https://clinicaltrials.gov/study/NCT04154943',
				qrCode: 'QR_NCT04154943',
				labels: {
					title: 'Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span>',
					aside: 'Stage II to IV cutaneous squamous cell carcinoma',
				},
			},
			{
				id: 'solid-tumor-non-melanoma-3',
				type: 'external',
				phase: 1,
				nct: 'NCT03889912',
				externalLink: 'https://clinicaltrials.gov/study/NCT03889912',
				recruiting: true,
				qrCode: 'QR_NCT03889912 1',
				labels: {
					title: 'Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span>',
					aside: 'Cutaneous squamous or basal cell carcinoma',
				},
			},
			{
				id: 'solid-tumor-non-melanoma-4',
				type: 'external',
				nonInterventional: true,
				nct: 'NCT03836105',
				externalLink: 'https://clinicaltrials.gov/study/NCT03836105   ',
				qrCode: 'QR_NCT03836105 1',
				labels: {
					title: '<strong>CASE</strong> Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span>',
					aside: 'locally advanced or metastatic cutaneous squamous or basal cell carcinoma',
				},
			},
		],
	},
];
export default datum;
