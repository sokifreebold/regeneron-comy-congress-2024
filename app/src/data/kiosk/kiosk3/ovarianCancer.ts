import type { ITrialsRecords } from '@/@types/data';

const datum: ITrialsRecords[] = [
	{
		id: 'ovarian-cancer',
		trials: [
			{
				id: 'solid-tumor-ovarian-cancer-1',
				type: 'pdfCard',
				phase: 2,
				phaseMobile: '1/2',
				nct: 'NCT03564340',
				recruiting: true,
				trialCardPdf: 'NCT03564340_REGN4018-EM-0002',
				trialCardImages: [
					'NCT03564340_REGN4018-EM-0002-1',
					'NCT03564340_REGN4018-EM-0002-2',
				],
				labels: {
					title: 'Ubamatamab <span class="ui-one-word">(MUC16xCD3 bispecific)</span><br>+ Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span>',
					aside: 'Platinum-resistant ovarian cancer',
				},
			},
			{
				id: 'solid-tumor-ovarian-cancer-2',
				type: 'pdfCard',
				phase: 2,
				phaseMobile: '1/2',
				nct: 'NCT04590326',
				recruiting: true,
				trialCardPdf: 'NCT04590326_REGN4018-EM-0003',
				trialCardImages: [
					'NCT04590326_REGN4018-EM-0003-1',
					'NCT04590326_REGN4018-EM-0003-2',
				],
				labels: {
					title: 'MUC16xCD28 bispecific <span class="ui-one-word">(REGN5668)</span><br>+ Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span> or <br>MUC16xCD28 bispecific <span class="ui-one-word">(REGN5668)</span><br>+ Ubamatamab <span class="ui-one-word">(MUC16xCD3 bispecific)</span>',
					aside: 'Recurrent ovarian cancer',
				},
			},
		],
	},
];
export default datum;
