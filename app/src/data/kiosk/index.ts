import type { ICategoriesRecords } from '@/@types/data';

import trailsBasalCellMerkelCellCarcinoma from './trailsBasalCellMerkelCellCarcinoma';
import trailsCutaneousSquamousCellCarcinoma from './trailsCutaneousSquamousCellCarcinoma';
import trailsMelanoma from './trailsMelanoma';
import trailsMultipleTumors from './trailsMultipleTumors';

export const categoriesKiosk: ICategoriesRecords[] = [
	{ id: 'nsclc', mobileTitleKey: 'titles.categories.nsclc', desktopTitleKey: 'titles.categories.nsclc', categories: [ 
		{ id: 'nsclc-clinical-trial-information', trials: 4 },
		{ id: 'nsclc-disease-state-education', trials: 6 },
	],
	icon: 'lung-icon'},
	{ id: 'melanoma', mobileTitleKey: 'titles.categories.melanoma', desktopTitleKey: 'titles.categories.melanoma', categories: [
		{ id: 'melanoma-clinical-trial-information', trials: 3 },
		{ id: 'melanoma-disease-state-education', trials: 3 },
	],
	icon: 'hand-glass'}
];

export const trialsDataKiosk: any = {
	'nsclc-clinical-trial-information': trailsBasalCellMerkelCellCarcinoma,
	'nsclc-disease-state-education': trailsCutaneousSquamousCellCarcinoma,
	'melanoma-clinical-trial-information': trailsMelanoma,
	'melanoma-disease-state-education': trailsMultipleTumors,
};
