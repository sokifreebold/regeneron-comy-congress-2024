const coreId = 'coreSpr_3952301';
let currentPage = '';

function addClickListener(e) {
	let value = '';
	let pageId = '';
	let pagePath = '';

	const { target } = e;
	if (target) {
		const text = target.innerText;
		if (text) {
			value = text;
		}
	}

	try {
		const slideIndex = document.getElementById(coreId).getCore().B.qa();
		if (!isNaN(slideIndex)) {
			pageId = slideIndex + 1;
			pagePath = `slide${pageId}`;
		}
	} catch (err) {
		console.warn(err);
	}

	const obj = {
		event: 'click',
		pageId,
		pagePath,
		value,
	};

	gtag('event', 'click', {
		page_title: pageId,
		page_location: location.href,
		page_path: pagePath,
		value,
	});
	console.log(`[TRACKING]: ${JSON.stringify(obj)}`);

	// Offline tracking
	if (window.electronAPI && typeof window.electronAPI.appendToCSV === 'function') {
		window.electronAPI.appendToCSV(obj);
	}

	pageView();
}

function pageView() {
	try {
		setTimeout(() => {
			const slideIndex = document.getElementById(coreId).getCore().B.qa();
			if (isNaN(slideIndex)) {
				return;
			}

			if (slideIndex < 0) {
				return;
			}

			const pageTitle = slideIndex + 1;
			const pagePath = `slide${pageTitle}`;

			if (currentPage === pagePath) {
				return;
			}

			gtag('event', 'page_view', {
				page_title: pageTitle,
				page_location: location.href,
				page_path: pagePath,
			});
			currentPage = pagePath;
			const obj = {
				event: 'page_view',
				pageId: pageTitle,
				pagePath,
			};
			console.log(`[TRACKING]: ${JSON.stringify(obj)}`);
			// Offline tracking
			if (window.electronAPI && typeof window.electronAPI.appendToCSV === 'function') {
				window.electronAPI.appendToCSV(obj);
			}
		}, 300);
	} catch (err) {
		console.warn(err);
	}
}

(function () {
	document.addEventListener('DOMContentLoaded', (event) => {
		console.log('DOM fully loaded and parsed');
		pageView();
		document.addEventListener('mousedown', addClickListener);
	});
})();
