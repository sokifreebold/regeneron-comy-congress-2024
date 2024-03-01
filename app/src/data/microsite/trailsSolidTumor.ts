import type { ITrialsRecords } from '@/@types/data';

const datum: ITrialsRecords[] = [
	{
		id: 'non-melanoma',
		title: 'Non-melanoma Skin Cancer',
		trials: [
			{
				id: 'solid-tumor-non-melanoma-1',
				type: 'pdfCard',
				phase: 3,
				nct: 'NCT03969004',
				trialCardPdf: 'NCT03969004 (C-POST)_R15_CEM-EM-0030_844REGN-MID',
				recruiting: true,
				labels: {
					title: 'Adjuvant Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span>',
					aside: 'High-risk cutaneous squamous cell carcinoma',
				},
			},
			{
				id: 'solid-tumor-non-melanoma-2',
				type: 'external',
				phase: 2,
				nct: 'NCT04154943',
				externalLink: 'https://clinicaltrials.gov/study/NCT04154943',
				labels: {
					title: 'Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span>',
					aside: 'Stage II to IV cutaneous squamous cell carcinoma',
				},
			},
			{
				id: 'solid-tumor-non-melanoma-3',
				type: 'external',
				phase: 1,
				nct: 'NCT03889912',
				externalLink: 'https://clinicaltrials.gov/study/NCT03889912',
				recruiting: true,
				labels: {
					title: 'Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span>',
					aside: 'Cutaneous squamous or basal cell carcinoma',
				},
			},
			{
				id: 'solid-tumor-non-melanoma-4',
				type: 'external',
				nonInterventional: true,
				nct: 'NCT03836105',
				externalLink: 'https://clinicaltrials.gov/study/NCT03836105   ',
				labels: {
					title: '<strong>CASE</strong> Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span>',
					aside: 'locally advanced or metastatic cutaneous squamous or basal cell carcinoma',
				},
			},
		],
	},
	{
		id: 'melanoma',
		title: 'Melanoma',
		trials: [
			{
				id: 'solid-tumor-melanoma-1',
				type: 'pdfCard',
				phase: 3,
				nct: 'NCT05352672',
				recruiting: true,
				trialCardPdf: 'NCT05352672_FIA-EM-0003',
				labels: {
					title: 'Fianlimab <span class="ui-one-word">(LAG-3 antibody)</span><br>+ Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span>',
					aside: 'Previously Untreated Unresectable Locally Advanced or Metastatic Melanoma',
				},
			},
			{
				id: 'solid-tumor-melanoma-2',
				type: 'pdfCard',
				phase: 3,
				nct: 'NCT05608291',
				recruiting: true,
				trialCardPdf: 'NCT05608291_FIA-EM-0009',
				labels: {
					title: 'Fianlimab <span class="ui-one-word">(LAG-3 antibody)</span><br>+ Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span>',
					aside: 'Adjuvant use in completely resected high-risk melanoma',
				},
			},
			{
				id: 'solid-tumor-melanoma-3',
				type: 'external',
				phase: 2,
				nct: 'NCT06190951',
				recruiting: true,
				externalLink:
					'https://clinicaltrials.gov/study/NCT06190951?term=NCT06190951&rank=1',
				labels: {
					title: 'Fianlimab <span class="ui-one-word">(LAG-3 antibody)</span><br>+ Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span>',
					aside: 'Resectable stage III and IV melanoma',
				},
			},
		],
	},
	{
		id: 'non-small-cell-lung-cancer',
		title: 'Non-small cell lung cancer (NSCLC)',
		trials: [
			{
				id: 'solid-tumor-lung-cancer-1',
				type: 'pdfCard',
				phase: 3,
				phaseMobile: '2/3',
				nct: 'NCT05785767',
				recruiting: true,
				trialCardPdf: 'NCT05785767_R22_FIA-EM-0010_844REGN-MID',
				labels: {
					title: 'Fianlimab <span class="ui-one-word">(LAG-3 antibody)</span><br>+ Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span>',
					aside: 'Advanced non-small cell lung cancer with PD-L1 expression > 50%',
				},
			},
			{
				id: 'solid-tumor-lung-cancer-2',
				type: 'pdfCard',
				phase: 3,
				phaseMobile: '2/3',
				nct: 'NCT05800015',
				recruiting: true,
				trialCardPdf: 'NCT05800015_R20_FIA-EM-0011_844REGN-MID',
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
				trialCardPdf: 'NCT04982224_R18_ESMO_REGN5093-M114-EM-0003_844REGN-MID',
				labels: {
					title: 'METxMET antibody-drug conjugate <span class="ui-one-word">(REGN5093-M114)</span>',
					aside: 'MET-overexpressing non-small cell lung cancer',
				},
			},
		],
	},
	{
		id: 'prostate-cancer',
		title: 'Prostate Cancer',
		trials: [
			{
				id: 'solid-tumor-prostate-cancer-1',
				type: 'external',
				phase: 2,
				phaseMobile: '1/2',
				nct: 'NCT05125016',
				recruiting: true,
				externalLink: 'https://clinicaltrials.gov/study/NCT05125016',
				labels: {
					title: 'PSMAxCD3 bispecific <span class="ui-one-word">(REGN4336)</span><br>± Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span> or PSMAxCD3 bispecific <span class="ui-one-word">(REGN4336)</span><br>+ PSMAxCD28 bispecific <span class="ui-one-word">(REGN5678)</span>',
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
				labels: {
					title: 'PSMAxCD28 bispecific <span class="ui-one-word">(REGN5678)</span><br>± Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span>',
					aside: 'Metastatic castration-resistant prostate cancer or clear cell renal cell carcinoma',
				},
			},
		],
	},
	{
		id: 'ovarian-cancer',
		title: 'Ovarian Cancer',
		trials: [
			{
				id: 'solid-tumor-ovarian-cancer-1',
				type: 'pdfCard',
				phase: 2,
				phaseMobile: '1/2',
				nct: 'NCT03564340',
				recruiting: true,
				trialCardPdf: 'NCT03564340_R13_REGN4018-EM-0002_844REGN-MID',
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
				trialCardPdf: 'NCT04590326_R18_REGN4018-EM-0003_844REGN-MID',
				labels: {
					title: 'MUC16xCD28 bispecific <span class="ui-one-word">(REGN5668)</span><br>+ Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span> or MUC16xCD28 bispecific <span class="ui-one-word">(REGN5668)</span><br>+ Ubamatamab <span class="ui-one-word">(MUC16xCD3 bispecific)</span>',
					aside: 'Recurrent ovarian cancer',
				},
			},
		],
	},
	{
		id: 'multiple-tumors',
		title: 'Multiple Tumors',
		trials: [
			{
				id: 'solid-tumor-multiple-1',
				type: 'external',
				phase: 2,
				phaseMobile: '1/2',
				nct: 'NCT04626635',
				recruiting: true,
				externalLink: 'https://clinicaltrials.gov/study/NCT04626635',
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
				labels: {
					title: 'CD8 antibody <span class="ui-one-word">(89Zr-DFOREGN5054)</span><br>+ Cemiplimab <span class="ui-one-word">(PD-1 antibody)</span>',
					aside: 'Advanced and metastatic solid tumors',
				},
			},
		],
	},
];
export default datum;
