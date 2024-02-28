import type { ITrialsRecords } from '@/@types/data';

const datum: ITrialsRecords[] = [
	{
		id: 'melanoma',
		title: 'Melanoma',
		trials: [
			{
				id: 'melanoma-1',
				type: 'pdfCard',
				phase: 3,
				nct: 'NCT05352672',
				recruiting: true,
				trialCardImages: [
					'NCT02290951 (ELM 1)_Odronextamab-EM-0008-1',
					'NCT02290951 (ELM 1)_Odronextamab-EM-0008-2',
				],
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
				trialCardImages: [
					'NCT02290951 (ELM 1)_Odronextamab-EM-0008-1',
					'NCT02290951 (ELM 1)_Odronextamab-EM-0008-2',
				],
				labels: {
					title: 'Fianlimab <span class="ui-one-word">(LAG-3 antibody)</span> + Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span>',
					aside: 'Adjuvant use in completely resected high-risk melanoma',
				},
			},
			{
				id: 'melanoma-3',
				type: 'external',
				phase: 2,
				nct: 'NCT06190951',
				recruiting: true,
				externalLink:
					'https://clinicaltrials.gov/study/NCT06190951?term=NCT06190951&rank=1',
				labels: {
					title: 'Fianlimab <span class="ui-one-word">(LAG-3 antibody)</span> + Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span>',
					aside: 'Resectable stage III and IV melanoma',
				},
			},
		],
	},
];
export default datum;
