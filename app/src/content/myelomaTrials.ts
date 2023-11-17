import type { ITrialsRecords } from '@/@types/data';
const datum: ITrialsRecords[] = [
	{
		trials: [
			{
				id: 'linker-mm3',
				categoryId: 'myeloma',
				type: 'card',
				phase: 3,
			},
			{
				id: 'linker-mm4',
				categoryId: 'myeloma',
				type: 'external',
				phase: 2,
				externalLink: 'https://clinicaltrials.gov/',
			},
			{
				id: 'linker-mm1',
				categoryId: 'myeloma',
				type: 'card',
				phase: 2,
			},
			{
				id: 'linker-smm1',
				categoryId: 'myeloma',
				type: 'card',
				phase: 2,
			},
			{
				id: 'linker-mm2',
				categoryId: 'myeloma',
				type: 'card',
				phase: 1,
			},
			{
				id: 'nct05673967',
				categoryId: 'myeloma',
				nonInterventional: true,
			},
		],
	},
];
export default datum;
