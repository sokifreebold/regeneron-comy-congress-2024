import type { ICategories } from '@/@types/data';

import trialsSolidTumor from './trialsSolidTumor';
import trialsHematologyOncology from './trialsHematologyOncology';

export const categories: ICategories[] = [
	{ id: 'solid-tumor', trials: 22 },
	{ id: 'hematology-oncology', trials: 16 },
];

export const trialsData: any = {
	'solid-tumor': trialsSolidTumor,
	'hematology-oncology': trialsHematologyOncology,
};
