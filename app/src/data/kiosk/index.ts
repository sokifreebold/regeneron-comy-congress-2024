import type { ICategoriesRecords } from '@/@types/data';

import trailsBasalCellMerkelCellCarcinoma from './trailsBasalCellMerkelCellCarcinoma';
import trailsCutaneousSquamousCellCarcinoma from './trailsCutaneousSquamousCellCarcinoma';
import trailsMelanoma from './trailsMelanoma';
import trailsMultipleTumors from './trailsMultipleTumors';

export const categoriesKiosk: ICategoriesRecords[] = [
	{ id: 'nsclc', mobileTitleKey: 'titles.categories.nsclc', desktopTitleKey: 'titles.categories.nsclc', categories: [ 
		{ id: 'basal-cell-merkel-cell-carcinoma', trials: 4 },
		{ id: 'cutaneous-squamous-cell-carcinoma', trials: 6 },
	]},
	{ id: 'melanoma', mobileTitleKey: 'titles.categories.melanoma', desktopTitleKey: 'titles.categories.melanoma', categories: [
		{ id: 'melanoma', trials: 3 },
		{ id: 'multiple-tumors', trials: 3 },
	]}
];

export const trialsDataKiosk: any = {
	'basal-cell-merkel-cell-carcinoma': trailsBasalCellMerkelCellCarcinoma,
	'cutaneous-squamous-cell-carcinoma': trailsCutaneousSquamousCellCarcinoma,
	melanoma: trailsMelanoma,
	'multiple-tumors': trailsMultipleTumors,
};
