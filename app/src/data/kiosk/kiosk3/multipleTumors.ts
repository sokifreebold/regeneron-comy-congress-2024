import type { ITrialsRecords } from '@/@types/data';

const datum: ITrialsRecords[] = [
	{
		id: 'multiple-tumors',
		trials: [
			{
				id: 'solid-tumor-multiple-1',
				type: 'external',
				phase: 2,
				phaseMobile: '1/2',
				nct: 'NCT04626635',
				recruiting: true,
				externalLink: 'https://clinicaltrials.gov/study/NCT04626635',
				qrCode: 'QR_NCT04626635',
				labels: {
					title: '<strong>COMBINE-EGFR-1</strong><br>EGFRxCD28 bispecific <span class="ui-one-word">(REGN7075)</span><br>+ Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span>',
					aside: 'Advanced solid tumors',
				},
			},
			{
				id: 'solid-tumor-multiple-2',
				type: 'pdfCard',
				phase: 2,
				nct: 'NCT04916002',
				recruiting: true,
				trialCardPdf: 'NCT04916002_VIDU-EM-0001',
				trialCardImages: ['NCT04916002_VIDU-EM-0001-1', 'NCT04916002_VIDU-EM-0001-2'],
				labels: {
					title: 'Vidutolimod <span class="ui-one-word">(TLR9 agonist)</span><br>+ Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span>',
					aside: 'Advanced/metastatic tumors',
				},
			},
			{
				id: 'solid-tumor-multiple-3',
				type: 'external',
				phase: 1,
				nct: 'NCT03005782',
				recruiting: false,
				externalLink: 'https://clinicaltrials.gov/study/NCT03005782',
				qrCode: 'QR_NCT03005782',
				labels: {
					title: 'Fianlimab <span class="ui-one-word">(LAG-3 antibody)</span><br>± Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span>',
					aside: 'Advanced malignances',
				},
			},
			{
				id: 'solid-tumor-multiple-4',
				type: 'external',
				phase: 1,
				nct: 'NCT03233139',
				recruiting: true,
				externalLink: 'https://clinicaltrials.gov/study/NCT03233139',
				qrCode: 'QR_NCT03233139',
				labels: {
					title: 'Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span>',
					aside: 'Advanced malignancies (Japanese patients)',
				},
			},
			{
				id: 'solid-tumor-multiple-5',
				type: 'external',
				phase: 1,
				nct: 'NCT04465487',
				recruiting: true,
				externalLink: 'https://clinicaltrials.gov/study/NCT04465487',
				qrCode: 'NCT04465487',
				labels: {
					title: 'GITR antibody <span class="ui-one-word">(REGN6569)</span><br>+ Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span>',
					aside: 'Advanced solid tumors',
				},
			},
			{
				id: 'solid-tumor-multiple-6',
				type: 'external',
				phase: 1,
				nct: 'NCT05259709',
				recruiting: true,
				externalLink: 'https://clinicaltrials.gov/study/NCT05259709',
				qrCode: 'QR_NCT05259709',
				labels: {
					title: 'CD8 antibody <span class="ui-one-word">(89Zr-DFOREGN5054)</span><br>+ Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span>',
					aside: 'Advanced and metastatic solid tumors',
				},
			},
		],
	},
];
export default datum;
