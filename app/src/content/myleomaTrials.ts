import type { ITrialsRecords } from '@/@types/data';
const datum: ITrialsRecords[] = [
	{
		trials: [
			{
				id: 'linker-mm3',
				categoryId: 'myleoma',
				type: 'card',
				phase: 3,
			},
			{
				id: 'linker-mm4',
				categoryId: 'myleoma',
				type: 'external',
				phase: 2,
				externalLink: 'https://clinicaltrials.gov/',
			},
			{
				id: 'linker-mm1',
				categoryId: 'myleoma',
				type: 'card',
				phase: 2,
			},
			{
				id: 'linker-smm1',
				categoryId: 'myleoma',
				type: 'card',
				phase: 2,
			},
			{
				id: 'linker-mm2',
				categoryId: 'myleoma',
				type: 'card',
				phase: 1,
			},
			{
				id: 'nct05673967',
				categoryId: 'myleoma',
				nonInterventional: true,
			},
		],
	},
];
export default datum;
