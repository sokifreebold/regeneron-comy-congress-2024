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
		const slideIndex = document.getElementById('coreSpr_3952301').getCore().B.qa();
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

	// TODO: Add Analytics sent to Google Analytics
	window.dataLayer.push({
		event: 'page_view',
		page_title: pagePath,
		page_location: location.href,
	});

	console.log(`[TRACKING]: ${JSON.stringify(obj)}`);

	// Offline tracking
	if (window.electronAPI && typeof window.electronAPI.appendToCSV === 'function') {
		window.electronAPI.appendToCSV(obj);
	}
}

(function () {
	document.addEventListener('DOMContentLoaded', (event) => {
		console.log('DOM fully loaded and parsed');
		document.addEventListener('mousedown', addClickListener);
	});
})();
