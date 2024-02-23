import type { ITrialsRecords } from '@/@types/data';

const datum: ITrialsRecords[] = [
	{
		id: 'multiple-tumors',
		title: 'Multiple Tumors',
		trials: [
			{
				id: 'multiple-tumors-1',
				type: 'external',
				phase: 1,
				nct: 'NCT03005782',
				recruiting: false,
				externalLink: 'https://clinicaltrials.gov/study/NCT03005782',
				labels: {
					title: 'Fianlimab <span class="ui-one-word">(LAG-3 monoclonal)</span> +/- Cemiplimab <span class="ui-one-word">(PD-1 monoclonal)</span>',
					aside: 'Advanced malignances',
				},
			},
			{
				id: 'multiple-tumors-2',
				type: 'external',
				phase: 1,
				nct: 'NCT03233139',
				recruiting: true,
				externalLink: 'https://clinicaltrials.gov/study/NCT03233139',
				labels: {
					title: 'Cemiplimab <span class="ui-one-word">(PD-1 monoclonal)</span>',
					aside: 'Advanced malignancies (Japanese patients)',
				},
			},
			{
				id: 'multiple-tumors-3',
				type: 'external',
				phase: 1,
				nct: 'NCT05259709',
				recruiting: true,
				externalLink: 'https://clinicaltrials.gov/study/NCT05259709',
				labels: {
					title: '89Zr-DFOREGN5054 <span class="ui-one-word">(CD8 monoclonal)</span> + Cemiplimab <span class="ui-one-word">(PD-1 monoclonal)</span>',
					aside: 'Advanced and metastatic solid tumors',
				},
			},
		]
	}
];
export default datum;
