import type { ITrialsRecords } from '@/@types/data';

const datum: ITrialsRecords[] = [
	{
		id: 'basal-cell-carcinoma',
		title: 'Basal Cell Carcinoma (BCC)',
		trials: [
			{
				id: 'basal-cell-carcinoma-1',
				type: 'pdfCard',
				phase: 2,
				nct: 'NCT04916002',
				trialCardPdf: 'NCT04916002_R20_VIDU-EM-0001_844REGN-MID',
				recruiting: true,
				trialCardImages: [
					'NCT04916002_VIDU-EM-0001_353061533400_844REGN-MID_L1g_front',
					'NCT04916002_VIDU-EM-0001_353061533400_844REGN-MID_L1g_back',
				],
				labels: {
					title: 'Vidutolimod <span class="ui-one-word">(TLR9 agonist)</span> + Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span>',
					aside: 'Advanced/metastatic tumors',
				},
			},
			{
				id: 'basal-cell-carcinoma-2',
				type: 'external',
				phase: 1,
				nct: 'NCT03889912',
				recruiting: true,
				externalLink: 'https://clinicaltrials.gov/study/NCT03889912',
				qrCode: 'QR_NCT03889912 1',
				labels: {
					title: 'Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span>',
					aside: 'Cutaneous squamous or basal cell carcinoma',
				},
			},
			{
				id: 'basal-cell-carcinoma-3',
				type: 'external',
				nonInterventional: true,
				nct: 'NCT03836105',
				externalLink: 'https://clinicaltrials.gov/study/NCT03836105',
				qrCode: 'QR_NCT03836105 1',
				labels: {
					title: '<strong>CASE</strong> Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span>',
					aside: 'Locally advanced or metastatic cutaneous squamous or basal cell carcinoma',
				},
			},
		],
	},
	{
		id: 'merkel-cell-carcinoma',
		title: 'Merkel Cell Carcinoma (MCC)',
		trials: [
			{
				id: 'solid-tumor-melanoma-1',
				type: 'pdfCard',
				phase: 3,
				nct: 'NCT04916002',
				recruiting: true,
				trialCardPdf: 'NCT04916002_R20_VIDU-EM-0001_844REGN-MID',
				trialCardImages: [
					'NCT04916002_VIDU-EM-0001_353061533400_844REGN-MID_L1g_front',
					'NCT04916002_VIDU-EM-0001_353061533400_844REGN-MID_L1g_back',
				],
				labels: {
					title: 'Vidutolimod <span class="ui-one-word">(TLR9 agonist)</span> + Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span>',
					aside: 'Advanced/metastatic tumors',
				},
			},
		],
	},
];
export default datum;
