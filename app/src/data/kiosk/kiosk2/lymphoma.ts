import type { ITrialsRecords } from '@/@types/data';

const datum: ITrialsRecords[] = [
	{
		id: 'lymphoma',
		trials: [
			{
				id: 'hematology-oncology-lymphoma-1',
				type: 'pdfCard',
				phase: 3,
				nct: 'NCT06091254',
				trialCardPdf: 'NCT06091254_OLYMPIA-1_ODRO-EM-0002',
				recruiting: true,
				trialCardImages: [
					'NCT06091254_OLYMPIA-1_ODRO-EM-0002-1',
					'NCT06091254_OLYMPIA-1_ODRO-EM-0002-2',
				],
				labels: {
					title: '<strong>OLYMPIA-1</strong> Odronextamab <span class="ui-one-word">(CD20xCD3 bispecific)</span>',
					aside: 'Previously untreated follicular lymphoma',
				},
			},
			{
				id: 'hematology-oncology-lymphoma-2',
				type: 'pdfCard',
				phase: 3,
				nct: 'NCT06097364',
				trialCardPdf: 'NCT06097364_OLYMPIA-2_ODRO-EM-0004',
				recruiting: true,
				trialCardImages: [
					'NCT06097364_OLYMPIA-2_ODRO-EM-0004-1',
					'NCT06097364_OLYMPIA-2_ODRO-EM-0004-2',
				],
				labels: {
					title: '<strong>OLYMPIA-2</strong> Odronextamab <span class="ui-one-word">(CD20xCD3 bispecific)</span><br>+ Chemotherapy',
					aside: 'Untreated or relapsed/refractory follicular lymphoma',
				},
			},
			{
				id: 'hematology-oncology-lymphoma-3',
				type: 'pdfCard',
				phase: 3,
				nct: 'NCT06091865',
				trialCardPdf: 'NCT06091865_OLYMPIA-3_ODRO-EM-0003',
				recruiting: true,
				trialCardImages: [
					'NCT06091865_OLYMPIA-3_ODRO-EM-0003-1',
					'NCT06091865_OLYMPIA-3_ODRO-EM-0003-2',
				],
				labels: {
					title: '<strong>OLYMPIA-3</strong> Odronextamab <span class="ui-one-word">(CD20xCD3 bispecific)</span><br>+ Chemotherapy',
					aside: 'Untreated diffuse large B-cell lymphoma',
				},
			},
			{
				id: 'hematology-oncology-lymphoma-4',
				type: 'external',
				phase: 3,
				nct: 'NCT06230224',
				externalLink: 'https://clinicaltrials.gov/study/NCT06230224',
				recruiting: true,
				qrCode: 'NCT06230224',
				labels: {
					title: '<strong>OLYMPIA-4</strong> Odronextamab  <span class="ui-one-word">(CD20xCD3 bispecific)</span>',
					aside: 'Relapsed/refractory diffuse large B-cell non-Hodgkin Lymphoma',
				},
			},
			{
				id: 'hematology-oncology-lymphoma-5',
				type: 'external',
				phase: 3,
				nct: 'NCT06149286',
				externalLink: 'https://clinicaltrials.gov/study/NCT06149286',
				recruiting: true,
				qrCode: 'NCT06149286',
				labels: {
					title: '<strong>OLYMPIA-5</strong> Odronextamab <span class="ui-one-word">(CD20xCD3 bispecific)</span><br> + Chemotherapy',
					aside: 'Relapsed/refractory follicular lymphoma and marginal zone lymphoma',
				},
			},
			{
				id: 'hematology-oncology-lymphoma-6',
				type: 'pdfCard',
				phase: 2,
				nct: 'NCT03888105',
				trialCardPdf: 'NCT03888105 (ELM 2)_Odronextamab-EM-0009',
				recruiting: true,
				trialCardImages: [
					'NCT03888105 (ELM 2)_Odronextamab-EM-0009-1',
					'NCT03888105 (ELM 2)_Odronextamab-EM-0009-2',
				],
				labels: {
					title: '<strong>ELM-2</strong> Odronextamab <span class="ui-one-word">(CD20xCD3 bispecific)</span>',
					aside: 'Relapsed/refractory B-cell non-Hodgkin lymphoma',
				},
			},
			{
				id: 'hematology-oncology-lymphoma-7',
				type: 'pdfCard',
				phase: 1,
				nct: 'NCT02290951',
				trialCardPdf: 'NCT02290951 (ELM 1)_Odronextamab-EM-0008',
				recruiting: false,
				trialCardImages: [
					'NCT02290951 (ELM 1)_Odronextamab-EM-0008-1',
					'NCT02290951 (ELM 1)_Odronextamab-EM-0008-2',
				],
				labels: {
					title: '<strong>ELM-1</strong> Odronextamab <span class="ui-one-word">(CD20xCD3 bispecific)</span>',
					aside: 'CD20+ B-cell malignancies ',
				},
			},
			{
				id: 'hematology-oncology-lymphoma-8',
				type: 'pdfCard',
				phase: 1,
				nct: 'NCT05685173',
				trialCardPdf: 'NCT05685173 (ATHENA 1)_Odronextamab-EM-0010',
				recruiting: true,
				trialCardImages: [
					'NCT05685173 (ATHENA 1)_Odronextamab-EM-0010-1',
					'NCT05685173 (ATHENA 1)_Odronextamab-EM-0010-2',
				],
				labels: {
					title: '<strong>ATHENA-1</strong> Odronextamab <span class="ui-one-word">(CD20xCD3 bispecific)</span> + CD22xCD28 bispecific <span class="ui-one-word">(REGN5837)</span>',
					aside: 'Relapsed/refractory aggressive B-Cell Non-Hodgkin Lymphoma',
				},
			},
			{
				id: 'hematology-oncology-lymphoma-9',
				type: 'pdfCard',
				phase: 1,
				nct: 'NCT02651662',
				trialCardPdf: 'NCT02651662_CLIO-1',
				recruiting: false,
				trialCardImages: ['NCT02651662_CLIO-1-1', 'NCT02651662_CLIO-1-2'],
				labels: {
					title: '<strong>CLIO-1</strong> Odronextamab <span class="ui-one-word">(CD20xCD3 bispecific)</span> + Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span>',
					aside: 'Relapsed/refractory aggressive B-cell non-Hodgkin lymphoma',
				},
			},
		],
	},
];
export default datum;
