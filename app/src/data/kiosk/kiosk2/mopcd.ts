import type { ITrialsRecords } from '@/@types/data';

const datum: ITrialsRecords[] = [
	{
		id: 'mopcd',
		trials: [
			{
				id: 'hematology-oncology-myeloma-1',
				type: 'pdfCard',
				phase: 3,
				nct: 'NCT05730036',
				trialCardPdf: 'NCT05730036 (LINKER-MM3)_LNVO-EM-0005',
				recruiting: true,
				labels: {
					title: '<strong>LINKER-MM3</strong> Linvoseltamab <span class="ui-one-word">(BCMAxCD3 bispecific)</span>',
					aside: 'Relapsed/refractory multiple myeloma',
				},
			},
			{
				id: 'hematology-oncology-myeloma-2',
				type: 'pdfCard',
				phase: 2,
				phaseMobile: '1/2',
				nct: 'NCT05828511',
				trialCardPdf: 'NCT058285111_Linvoseltamab-EM-0011',
				recruiting: true,
				labels: {
					title: '<strong>LINKER-MM4</strong> Linvoseltamab <span class="ui-one-word">(BCMAxCD3 bispecific)</span>',
					aside: 'Newly diagnosed multiple myeloma',
				},
			},
			{
				id: 'hematology-oncology-myeloma-3',
				type: 'external',
				phase: 2,
				phaseMobile: '1/2',
				nct: 'NCT03761108',
				externalLink: 'https://clinicaltrials.gov/study/NCT03761108',
				recruiting: true,
				labels: {
					title: '<strong>LINKER-MM1</strong> Linvoseltamab <span class="ui-one-word">(BCMAxCD3 bispecific)</span>',
					aside: 'Relapsed/refractory multiple myeloma',
				},
			},
			{
				id: 'hematology-oncology-myeloma-4',
				type: 'pdfCard',
				phase: 2,
				nct: 'NCT05955508',
				trialCardPdf: 'NCT05955508 Linvoseltamab-EM-0016',
				recruiting: true,
				labels: {
					title: '<strong>LINKER-SMM1</strong> Linvoseltamab <span class="ui-one-word">(BCMAxCD3 bispecific)</span>',
					aside: 'High-risk smoldering multiple myeloma ',
				},
			},
			{
				id: 'hematology-oncology-myeloma-7',
				type: 'external',
				phase: 2,
				nct: 'NCT06140524',
				externalLink: 'https://clinicaltrials.gov/study/NCT06140524',
				recruiting: false,
				labels: {
					title: '<strong>LINKER-MGUS1</strong> Linvoseltamab <span class="ui-one-word">(BCMAxCD3 bispecific)</span>',
					aside: 'high-risk monoclonal gammopathy or non-high-risk smoldering multiple myeloma',
				},
			},
			{
				id: 'hematology-oncology-myeloma-5',
				type: 'pdfCard',
				phase: 1,
				nct: 'NCT05137054',
				trialCardPdf: 'NCT05137054 (LINKER-MM2)_LNVO-EM-0002',
				externalLink:
					'https://clinicaltrials.gov/study/NCT05137054?term=NCT05137054&rank=1',
				recruiting: true,
				labels: {
					title: '<strong>LINKER-MM2</strong> Linvoseltamab <span class="ui-one-word">(BCMAxCD3 bispecific)</span> + Other Cancer Treatments',
					aside: 'Relapsed/refractory multiple myeloma',
				},
			},
			{
				id: 'hematology-oncology-myeloma-6',
				type: 'external',
				nct: 'NCT05673967',
				externalLink: 'https://clinicaltrials.gov/study/NCT05673967',
				nonInterventional: true,
				recruiting: false,
				labels: {
					title: '<strong>NCT05673967</strong> Non-interventional real-world experience',
					aside: 'Relapsed/refractory multiple myeloma',
				},
			},
		],
	},
];
export default datum;
