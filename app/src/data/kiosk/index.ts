import type { ICategories } from '@/@types/data';

export const categories: ICategories[] = [
    {id: 'basal-cell-merkel-cell-carcinoma', trials: 4},
    {id: 'cutaneous-squamous-cell-carcinoma', trials: 6},
    {id: 'melanoma', trials: 3},
    {id: 'multipleTumors', trials: 3}
];

export const trialsData: any = {
'basal-cell-merkel-cell-carcinoma': trailsBasalCellMerkelCellCarcinoma,
'cutaneous-squamous-cell-carcinoma': trailsCutaneousSquamousCellCarcinoma,
'melanoma': trailsMelanoma,
'multiple-tumors': trailsMultipleTumors
};