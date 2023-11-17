import type { ITrialsRecords } from '@/@types/data';
const datum: ITrialsRecords[] = [
	{
		trials: [
			{
				id: 'olympia-2',
				categoryId: 'lymphoma',
				type: 'card',
				phase: 3,
			},
			{
				id: 'olympia-5',
				categoryId: 'lymphoma',
				type: 'external',
				phase: 3,
				externalLink: 'https://clinicaltrials.gov/',
			},
			{
				id: 'olympia-1',
				categoryId: 'lymphoma',
				type: 'card',
				phase: 3,
			},
			{
				id: 'olympia-3',
				categoryId: 'lymphoma',
				type: 'card',
				phase: 3,
			},
			{
				id: 'olympia-4',
				categoryId: 'lymphoma',
				type: 'card',
				phase: 3,
			},
			{
				id: 'elm-2',
				categoryId: 'lymphoma',
				type: 'card',
				phase: 2,
			},
			{
				id: 'elm-1',
				categoryId: 'lymphoma',
				type: 'card',
				phase: 1,
			},
			{
				id: 'athena-1',
				categoryId: 'lymphoma',
				type: 'card',
				phase: 1,
			},
			{
				id: 'clio-1',
				categoryId: 'lymphoma',
				type: 'card',
				phase: 1,
			},
			{
				id: 'orchid',
				categoryId: 'lymphoma',
				nonInterventional: true,
			},
			{
				id: 'flora',
				categoryId: 'lymphoma',
				nonInterventional: true,
			},
		],
	},
];
export default datum;
