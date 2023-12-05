import type { ITrialsRecords } from '@/@types/data';
const datum: ITrialsRecords[] = [
	{
		trials: [
			{
				id: 'linker-mm3',
				categoryId: 'myeloma',
				type: 'card',
				phase: 3,
				nct: 'NCT05730036',
				trialCardPdf: 'NCT05730036 (LINKER-MM3)_R20_LNVO-EM-0005_844REGN-MID (1)',
			},
			{
				id: 'linker-mm4',
				categoryId: 'myeloma',
				type: 'card',
				phase: 2,
				phaseMobile: '1/2',
				nct: 'NCT05828511',
				trialCardPdf: 'NCT058285111 (LINKER-MM4)_R21_Linvoseltamab-EM-0011_844REGN-MID (1)',
			},
			{
				id: 'linker-mm1',
				categoryId: 'myeloma',
				type: 'card',
				phase: 2,
				phaseMobile: '1/2',
				nct: 'NCT03761108',
				trialCardPdf: 'NCT03761108 (LINKER-MM1)_R17_LNVO-EM-0001_844REGN-MID (1)',
			},
			{
				id: 'linker-smm1',
				categoryId: 'myeloma',
				type: 'card',
				phase: 2,
				nct: 'NCT05955508',
				trialCardPdf: 'NCT05955508_Smoldering_MM_R18_844REGN-MID (1)',
			},
			{
				id: 'linker-mm2',
				categoryId: 'myeloma',
				type: 'card',
				phase: 1,
				nct: 'NCT05137054',
				trialCardPdf: 'NCT05137054_LINKER-MM2_R23_LNVO-EM-0002_844REGN-MID (1)',
			},
			{
				id: 'nct05673967',
				categoryId: 'myeloma',
				nonInterventional: true,
				nct: 'NCT05673967',
				type: 'external',
				externalLink: 'https://clinicaltrials.gov/study/NCT05673967',
			},
		],
	},
];
export default datum;
