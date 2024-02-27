import type { ITrialsRecords } from '@/@types/data';

const datum: ITrialsRecords[] = [
	{
		id: 'melanoma',
		title: 'Melanoma',
		trials: [
			{
				id: 'melanoma-1',
				type: 'images',
				phase: 3,
				nct: 'NCT05352672',
				recruiting: true,
				images: ['lymphoma-overlay', 'image-mol'],
				labels: {
					title: 'Fianlimab <span class="ui-one-word">(LAG-3 antibody)</span> + Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span>',
					aside: 'Previously Untreated Unresectable Locally Advanced or Metastatic Melanoma',
				},
			},
			{
				id: 'melanoma-2',
				type: 'pdfCard',
				phase: 3,
				nct: 'NCT05608291',
				recruiting: true,
				trialCardPdf: 'NCT05608291_R16_FIA-EM-0009_844REGN-MID',
				labels: {
					title: 'Fianlimab <span class="ui-one-word">(LAG-3 antibody)</span> + Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span>',
					aside: 'Adjuvant use in completely resected high-risk melanoma',
				},
			},
			{
				id: 'melanoma-3',
				type: 'qrCode',
				phase: 2,
				nct: 'NCT06190951',
				recruiting: true,
				externalLink: 'https://clinicaltrials.gov/study/NCT06190951?term=NCT06190951&rank=1',
				labels: {
					title: 'Fianlimab <span class="ui-one-word">(LAG-3 antibody)</span> + Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span>',
					aside: 'Resectable stage III and IV melanoma',
				},
			},
		]
	}
];
export default datum;
