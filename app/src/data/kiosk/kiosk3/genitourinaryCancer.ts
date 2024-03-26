import type { ITrialsRecords } from '@/@types/data';

const datum: ITrialsRecords[] = [
	{
		id: 'genitourinary-cancer',
		trials: [
			{
				id: 'solid-tumor-prostate-cancer-1',
				type: 'external',
				phase: 2,
				phaseMobile: '1/2',
				nct: 'NCT05125016',
				recruiting: true,
				externalLink: 'https://clinicaltrials.gov/study/NCT05125016',
				qrCode: 'NCT05125016',
				labels: {
					title: 'PSMAxCD3 bispecific <span class="ui-one-word">(REGN4336)</span><br>± Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span><br> or <br>PSMAxCD3 bispecific <span class="ui-one-word">(REGN4336)</span><br>+ PSMAxCD28 bispecific <span class="ui-one-word">(REGN5678)</span>',
					aside: 'Metastatic castration-resistant prostate cancer',
				},
			},
			{
				id: 'solid-tumor-prostate-cancer-2',
				type: 'external',
				phase: 2,
				phaseMobile: '1/2',
				nct: 'NCT03972657',
				recruiting: true,
				externalLink: 'https://clinicaltrials.gov/study/NCT03972657',
				qrCode: 'NCT03972657',
				labels: {
					title: 'PSMAxCD28 bispecific <span class="ui-one-word">(REGN5678)</span><br>± Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span>',
					aside: 'Metastatic castration-resistant prostate cancer or clear cell renal cell carcinoma',
				},
			},
		],
	},
];
export default datum;
