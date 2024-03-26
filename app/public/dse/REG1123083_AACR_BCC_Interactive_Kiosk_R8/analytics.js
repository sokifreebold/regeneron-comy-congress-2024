const coreId = 'coreSpr_12460296';
const [, pathName] = location.search.split('?id=');

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
			pageId = `dse-${pathName}`;
			pagePath = `/dse/${pathName}/slide${slideIndex + 1}`;
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
	if (
		window.parent &&
		window.parent.electronAPI &&
		typeof window.parent.electronAPI.appendToCSV === 'function'
	) {
		window.parent.electronAPI.appendToCSV(obj);
		console.log(
			`[Offline Analytics]: data sent to window.parent --data="${JSON.stringify(obj)}"`,
		);
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

			const pageTitle = `dse-${pathName}`;
			const pagePath = `/dse/${pathName}/slide${slideIndex + 1}`;

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
			if (
				window.parent &&
				window.parent.electronAPI &&
				typeof window.parent.electronAPI.appendToCSV === 'function'
			) {
				window.parent.electronAPI.appendToCSV(obj);
			}
		}, 300);
	} catch (err) {
		console.warn(err);
	}
}

(function () {
	document.addEventListener('DOMContentLoaded', () => {
		console.log('DOM fully loaded and parsed');
		pageView();
		document.addEventListener('mousedown', addClickListener);
	});
})();
