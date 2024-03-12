import type { ICategoriesRecords } from '@/@types/data';

import trialsSolidTumor from './trialsSolidTumor';
import trialsHematologyOncology from './trialsHematologyOncology';

export const categories: ICategoriesRecords[] = [
	{ id: 'nsclc', mobileTitleKey: 'titles.categories.our-oncology-mobile', desktopTitleKey: 'titles.categories.our-oncology-desktop', categories: [ 
		{ id: 'solid-tumor', trials: 22 },
		{ id: 'hematology-oncology', trials: 16 },
	]}
];

export const trialsData: any = {
	'solid-tumor': trialsSolidTumor,
	'hematology-oncology': trialsHematologyOncology,
};
