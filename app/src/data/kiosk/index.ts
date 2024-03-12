import type { ICategoriesRecords } from '@/@types/data';

import trailsNoneSmallCellLungCancer from './nonSmallCellLungCancer';
import trailsMelanoma from './trailsMelanoma';

export const categoriesKiosk: ICategoriesRecords[] = [
	{ id: 'nsclc', mobileTitleKey: 'titles.categories.nsclc', desktopTitleKey: 'titles.categories.nsclc', categories: [ 
		{ id: 'nsclc-clinical-trial-information', trials: 4, learnMore: true },
		{ id: 'nsclc-disease-state-education', trials: 6 },
	],
	icon: 'lung-icon'},
	{ id: 'melanoma', mobileTitleKey: 'titles.categories.melanoma', desktopTitleKey: 'titles.categories.melanoma', categories: [
		{ id: 'melanoma-clinical-trial-information', trials: 3, learnMore: true },
		{ id: 'melanoma-disease-state-education', trials: 3},
	],
	icon: 'hand-glass'}
];

export const trialsDataKiosk: any = {
	'nsclc-clinical-trial-information': trailsNoneSmallCellLungCancer,
	'melanoma-clinical-trial-information': trailsMelanoma,
};
