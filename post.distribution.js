/**
 * Script to copy nuxt generate dist files to landing page location
 */
const fs = require('fs-extra');
const path = require('path');

console.log('[Distribution]: Starting the distribution process');

// Define the paths for the input and output directories
const inputPath = path.join(__dirname, 'app/.output/public');
const outputPath = path.join(__dirname, 'www/app');

// Check if the input directory exists
if (fs.existsSync(inputPath)) {
	console.log('[Distribution]: Source directory found.');

	// Ensure that the output directory exists, create it if it doesn't
	if (!fs.existsSync(outputPath)) {
		console.log('[Distribution]: Output directory not found. Creating...');
		fs.mkdirSync(outputPath);
	}

	// Perform the copy operation
	console.log('[Distribution]: Copying files...');
	fs.copySync(inputPath, outputPath);

	console.log('[Distribution]: Files copied successfully');
} else {
	console.log('[Distribution]: Source directory does not exist. Aborting process.');
}

console.log('[Distribution]: Process completed.');
