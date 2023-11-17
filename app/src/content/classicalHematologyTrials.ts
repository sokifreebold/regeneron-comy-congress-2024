import type { ITrialsRecords } from '@/@types/data';
const datum: ITrialsRecords[] = [
	{
		trials: [
			{
				id: 'access-1',
				categoryId: 'classical-hematology',
				type: 'card',
				phase: 3,
			},
			{
				id: 'nct04409080',
				categoryId: 'classical-hematology',
				type: 'external',
				phase: 2,
				externalLink: 'https://clinicaltrials.gov/',
			},
			{
				id: 'nct05618808',
				categoryId: 'classical-hematology',
				type: 'card',
				phase: 2,
			},
			{
				id: 'nct04601051',
				categoryId: 'classical-hematology',
				type: 'card',
				phase: 1,
			},
			{
				id: 'nct05481333',
				categoryId: 'classical-hematology',
				type: 'card',
				phase: 1,
			},
			{
				id: 'honey-b',
				categoryId: 'classical-hematology',
				type: 'card',
				phase: 0,
			},
		],
	},
];
export default datum;
