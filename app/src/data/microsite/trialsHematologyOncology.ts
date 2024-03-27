import type { ITrialsRecords } from '@/@types/data';

const datum: ITrialsRecords[] = [
	{
		id: 'melanoma',
		title: 'Myeloma and Other Plasma Cell Dyscrasias',
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
				type: 'pdfCard',
				phase: 2,
				phaseMobile: '1/2',
				nct: 'NCT03761108',
				externalLink: 'https://clinicaltrials.gov/study/NCT03761108',
				trialCardPdf: 'Linker-MM1_PDF_03.26.24',
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
	{
		id: 'lymphoma',
		title: 'Lymphoma',
		trials: [
			{
				id: 'hematology-oncology-lymphoma-1',
				type: 'pdfCard',
				phase: 3,
				nct: 'NCT06091254',
				trialCardPdf: 'NCT06091254_OLYMPIA-1_ODRO-EM-0002',
				recruiting: true,
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
				labels: {
					title: '<strong>OLYMPIA-2</strong> Odronextamab <span class="ui-one-word">(CD20xCD3 bispecific)</span> + Chemotherapy',
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
				labels: {
					title: '<strong>OLYMPIA-3</strong> Odronextamab <span class="ui-one-word">(CD20xCD3 bispecific)</span> + Chemotherapy',
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
				labels: {
					title: '<strong>OLYMPIA-5</strong> Odronextamab <span class="ui-one-word">(CD20xCD3 bispecific)</span> + Chemotherapy',
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
				labels: {
					title: '<strong>ELM-1</strong> Odronextamab <span class="ui-one-word">(CD20xCD3 bispecific)</span>',
					aside: 'relapsed/refractory CD20+ B-cell malignancies ',
				},
			},
			{
				id: 'hematology-oncology-lymphoma-8',
				type: 'pdfCard',
				phase: 1,
				nct: 'NCT05685173',
				trialCardPdf: 'NCT05685173 (ATHENA 1)_Odronextamab-EM-0010',
				recruiting: true,
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
				labels: {
					title: '<strong>CLIO-1</strong> Odronextamab <span class="ui-one-word">(CD20xCD3 bispecific)</span> + Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span>',
					aside: 'Relapsed/refractory aggressive B-cell non-Hodgkin lymphoma',
				},
			},
		],
	},
];
export default datum;
