import type { ITrialsRecords } from '@/@types/data';

const datum: ITrialsRecords[] = [
	{
		id: 'non-small-cell-lung-cancer',
		trials: [
			{
				id: 'solid-tumor-lung-cancer-1',
				type: 'pdfCard',
				phase: 3,
				phaseMobile: '2/3',
				nct: 'NCT05785767',
				recruiting: true,
				trialCardPdf: 'NCT05785767_FIA-EM-0010',
				trialCardImages: ['NCT05785767_FIA-EM-0010-1', 'NCT05785767_FIA-EM-0010-2'],
				labels: {
					title: 'Fianlimab <span class="ui-one-word">(LAG-3 antibody)</span><br>+ Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span>',
					aside: 'Advanced non-small cell lung cancer with PD-L1 expression &ge; 50%',
				},
			},
			{
				id: 'solid-tumor-lung-cancer-2',
				type: 'pdfCard',
				phase: 3,
				phaseMobile: '2/3',
				nct: 'NCT05800015',
				recruiting: true,
				trialCardPdf: 'NCT05800015_FIA-EM-0011',
				trialCardImages: ['NCT05800015_FIA-EM-0011-1', 'NCT05800015_FIA-EM-0011-2'],
				labels: {
					title: 'Fianlimab <span class="ui-one-word">(LAG-3 antibody)</span><br>+ Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span><br>+ Chemotherapy',
					aside: 'Advanced non-small cell lung cancer',
				},
			},
			{
				id: 'solid-tumor-lung-cancer-3',
				type: 'external',
				phase: 3,
				nct: 'NCT03409614',
				recruiting: false,
				externalLink: 'https://clinicaltrials.gov/study/NCT03409614',
				qrCode: 'QR_NCT03409614',
				labels: {
					title: 'Ipilimumab <span class="ui-one-word">(CTLA-4 antibody)</span><br>+ Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span><br>+ Chemotherapy',
					aside: 'Advanced or metastatic non-small cell lung cancer',
				},
			},
			{
				id: 'solid-tumor-lung-cancer-4',
				type: 'external',
				phase: 2,
				nct: 'NCT04077099',
				recruiting: false,
				externalLink: 'https://clinicaltrials.gov/study/NCT04077099',
				qrCode: 'QR_NCT04077099',
				labels: {
					title: 'METxMET biparatopic <span class="ui-one-word">(REGN5093)</span>',
					aside: 'MET-altered advanced non-small cell lung cancer',
				},
			},
			{
				id: 'solid-tumor-lung-cancer-5',
				type: 'pdfCard',
				phase: 2,
				nct: 'NCT04982224',
				recruiting: true,
				trialCardPdf: 'NCT04982224_REGN5093-M114-EM-0003',
				trialCardImages: [
					'NCT04982224_REGN5093-M114-EM-0003-1',
					'NCT04982224_REGN5093-M114-EM-0003-2',
				],
				labels: {
					title: 'METxMET antibody-drug conjugate <span class="ui-one-word">(REGN5093-M114)</span>',
					aside: 'MET-overexpressing non-small cell lung cancer',
				},
			},
		],
	},
];
export default datum;
