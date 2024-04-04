const fs = require('fs-extra');
const path = require('path');
const data = require('./dse.config.json');

async function main() {
	for await (const datum of data) {
		try {
			const { dse, coreId } = datum;

			const inputPath = path.join(__dirname, 'packages', dse);
			const outputPath = path.join(__dirname, '..', 'app/public/dse', dse);
			const exists = await fs.pathExists(outputPath);

			// Copy Source
			if (exists) {
				await fs.remove(outputPath);
				console.log(`[DSE]: ${dse}: Directory found - Deleting`);
			} else {
				fs.mkdirSync(outputPath);
				console.log(`[DSE]: ${dse}: No Directory found - Creating`);
			}
			fs.copySync(inputPath, outputPath);
			console.log(`[DSE]: ${dse}: Copied to destination`);

			// HTML Update
			const indexFile = path.join(outputPath, 'index.html');
			const htmlContent = await fs.readFile(indexFile, 'utf8');
			const newContent = htmlContent.replace(
				'</head>',
				`
					<script async src="https://www.googletagmanager.com/gtag/js?id=G-PQ3X6QC5J8"></script>
					<script>
						window.dataLayer = window.dataLayer || [];
						function gtag() {
							dataLayer.push(arguments);
						}
						gtag('js', new Date());

						gtag('config', 'G-PQ3X6QC5J8');
					</script>
					<script src="./analytics.js"></script>
				</head>
			`,
			);

			await fs.writeFile(indexFile, newContent, 'utf8');
			console.log(`[DSE]: ${dse}: html source updated with script tags`);

			// Analytics
			const originalAnalytics = path.join(__dirname, 'analytics.js');
			const outputAnalytics = path.join(outputPath, 'analytics.js');
			fs.copySync(originalAnalytics, outputAnalytics);
			console.log(`[DSE]: ${dse}: analytics.js copied`);

			const analyticsContent = await fs.readFile(outputAnalytics, 'utf8');
			const newAnalyticsContent = analyticsContent.replace('{{CORE_ID}}', coreId);
			await fs.writeFile(outputAnalytics, newAnalyticsContent, 'utf8');
			console.log(`[DSE]: ${dse}: analytics.js updated with core Id`);
		} catch (err) {
			console.error('Error processing the file:', err);
		}
	}
}

main().then(() => console.log('DSE processing completed'));
