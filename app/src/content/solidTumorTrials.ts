import type { ITrialsRecords } from '@/@types/data';
const datum: ITrialsRecords[] = [
	{
		id: 'skin-cancer',
		trials: [
			{
				id: 'pd-1-monoclonal-p3',
				categoryId: 'solid-tumor',
				type: 'card',
				phase: 3,
			},
			{
				id: 'pd-1-monoclonal-p2',
				categoryId: 'solid-tumor',
				type: 'card',
				phase: 2,
			},
			{
				id: 'pd-1-monoclonal-p1',
				categoryId: 'solid-tumor',
				type: 'card',
				phase: 1,
			},
			{
				id: 'pd-1-monoclonal-non-interventional',
				categoryId: 'solid-tumor',
				nonInterventional: true,
			},
		],
	},
	{
		id: 'lung-cancer',
		trials: [
			{
				id: 'solid-tumor-lung-cancer-01',
				categoryId: 'solid-tumor',
				type: 'card',
				phase: 3,
			},
			{
				id: 'solid-tumor-lung-cancer-02',
				categoryId: 'solid-tumor',
				type: 'card',
				phase: 3,
			},
			{
				id: 'solid-tumor-lung-cancer-03',
				categoryId: 'solid-tumor',
				type: 'card',
				phase: 3,
			},
			{
				id: 'solid-tumor-lung-cancer-04',
				categoryId: 'solid-tumor',
				type: 'card',
				phase: 2,
			},
			{
				id: 'solid-tumor-lung-cancer-05',
				categoryId: 'solid-tumor',
				type: 'card',
				phase: 2,
			},
		],
	},
	{
		id: 'melanoma',
		trials: [
			{
				id: 'solid-tumor-melanoma-01',
				categoryId: 'solid-tumor',
				type: 'card',
				phase: 3,
			},
			{
				id: 'solid-tumor-melanoma-02',
				categoryId: 'solid-tumor',
				type: 'card',
				phase: 3,
			},
		],
	},
	{
		id: 'prostate',
		trials: [
			{
				id: 'solid-tumor-prostate-01',
				categoryId: 'solid-tumor',
				type: 'card',
				phase: 2,
			},
			{
				id: 'solid-tumor-prostate-02',
				categoryId: 'solid-tumor',
				type: 'card',
				phase: 2,
			},
		],
	},
	{
		id: 'ovarian',
		trials: [
			{
				id: 'solid-tumor-ovarian-01',
				categoryId: 'solid-tumor',
				type: 'card',
				phase: 2,
			},
			{
				id: 'solid-tumor-ovarian-02',
				categoryId: 'solid-tumor',
				type: 'card',
				phase: 2,
			},
			{
				id: 'solid-tumor-ovarian-03',
				categoryId: 'solid-tumor',
				type: 'card',
				phase: 2,
			},
		],
	},
	{
		id: 'multiple-tumors',
		trials: [
			{
				id: 'solid-tumor-multiple-tumors-01',
				categoryId: 'solid-tumor',
				type: 'card',
				phase: 2,
			},
			{
				id: 'solid-tumor-multiple-tumors-02',
				categoryId: 'solid-tumor',
				type: 'card',
				phase: 2,
			},
			{
				id: 'solid-tumor-multiple-tumors-03',
				categoryId: 'solid-tumor',
				type: 'card',
				phase: 1,
			},
			{
				id: 'solid-tumor-multiple-tumors-04',
				categoryId: 'solid-tumor',
				type: 'card',
				phase: 1,
			},
			{
				id: 'solid-tumor-multiple-tumors-05',
				categoryId: 'solid-tumor',
				type: 'card',
				phase: 1,
			},
			{
				id: 'solid-tumor-multiple-tumors-06',
				categoryId: 'solid-tumor',
				type: 'card',
				phase: 1,
			},
		],
	},
];
export default datum;
