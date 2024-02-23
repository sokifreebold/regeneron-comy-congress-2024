const fs = require('fs');
const path = require('path');

// Extract version argument from command line arguments
const args = process.argv.slice(2); // Skip node and script path arguments
const versionArg = args[0];

if (!versionArg) {
	console.error('Please provide a version argument.');
	process.exit(1);
}

// Define content to be written to version.ts
const content = `export const version = '${versionArg}';\n`;

// Define path for the version.ts file
const outputPath = path.join(__dirname, 'src/version.config.ts');

// Write content to version.ts
fs.writeFile(outputPath, content, (err) => {
	if (err) {
		console.error('Error writing to version.ts:', err);
		return;
	}

	console.log(`version.config.ts has been generated successfully with value [${versionArg}]`);
});
