// Code to zip the .exe file from electron/distribution to www/package folder (aacr-panels-v1.zip)
// Once added, the files will be available to download at https://aacr-congress.dev.tech.colabglo.com/package/aacr-congress-package.zip

console.log('Electron zip package in progress (developer working)');
const fs = require('fs-extra');
const path = require('path');
const archiver = require('archiver');

// Define the paths for the input and output directories
const inputPath = path.join(__dirname, 'electron/distribution');
const outputPath = path.join(__dirname, 'www/package');
const inputPathFile = path.join(__dirname, 'electron/distribution/AACR-Congress-1.0.0.exe');
const destinationPath = path.join(__dirname, 'www/package/AACR-Congress-1.0.0.exe');
try {
	// Check if the input directory exists
	if (fs.existsSync(inputPath)) {
		console.log('[Distribution]: Source directory found.');

		// Ensure that the output directory exists, create it if it doesn't
		if (!fs.existsSync(outputPath)) {
			console.log('[Distribution]: Output directory not found. Creating...');
			fs.mkdirSync(outputPath);
		}

        // Zip
        const outputPackage = path.join(__dirname, 'www/package');
        const outputZip = path.join(outputPackage, 'aacr-congress-package.zip');

        // Ensure output directory exists
        if (!fs.existsSync(outputPackage)) {
            fs.mkdirSync(outputPackage);
        }

        // Create a file to stream archive data to
        const output = fs.createWriteStream(outputZip);
        const archive = archiver('zip', {
            zlib: { level: 9 }, // Sets the compression level
        });

        output.on('close', function () {
            console.log(`Archive created. Total bytes: ${archive.pointer()}`);
        });

        archive.on('error', function (err) {
            throw err;
        });

        archive.file(inputPathFile, { name: 'aacr-congress-package.exe' });

        // Finalize the archive
        archive.finalize();

// Pipe archive data to the file
archive.pipe(output);
	} else {
		console.log('[Distribution]: Source directory does not exist. Aborting process.');
	}
} catch (error) {
	console.log(error);
}

